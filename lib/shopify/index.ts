import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from "../constants";

import { ensureStartsWith } from "../utils";
import { isShopifyError } from "../type-guards";
import { getProductQuery, getProductsQuery } from "./queries/product";
import {
    Cart,
    Collection,
    Connection,
    Image,
    Menu,
    Page,
    Product,
    ShopifyAddToCartOperation,
    ShopifyCart,
    ShopifyCartOperation,
    ShopifyCollection,
    ShopifyCollectionOperation,
    ShopifyCollectionProductsOperation,
    ShopifyCollectionsOperation,
    ShopifyCreateCartOperation,
    ShopifyMenuOperation,
    ShopifyPageOperation,
    ShopifyPagesOperation,
    ShopifyProduct,
    ShopifyProductOperation,
    ShopifyProductRecommendationsOperation,
    ShopifyProductsOperation,
    ShopifyRemoveFromCartOperation,
    ShopifyUpdateCartOperation
} from './types';

import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { headers } from "next/headers";


const domain = process.env.SHOPIFY_STORE_DOMAIN
    ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, 'https://')
    : '';
const endpoint = `${domain}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export async function shopifyFetch<T>({
    cache = 'force-cache',
    headers,
    query,
    tags,
    variables
}: {
    cache?: RequestCache;
    headers?: HeadersInit;
    query: string;
    tags?: string[];
    variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T } | never> {
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key,
                ...headers
            },
            body: JSON.stringify({
                ...(query && { query }),
                ...(variables && { variables })
            }),
            cache,
            ...(tags && { next: { tags } })
        });

        const body = await result.json();

        if (body.errors) {
            throw body.errors[0];
        }

        return {
            status: result.status,
            body
        };
    } catch (e) {
        if (isShopifyError(e)) {
            throw {
                cause: e.cause?.toString() || 'unknown',
                status: e.status || 500,
                message: e.message,
                query
            };
        }

        throw {
            error: e,
            query
        };
    }
}

const reshapeProducts = (products: ShopifyProduct[]) => {
    const reshapedProducts = [];

    for (const product of products) {
        if (product) {
            const reshapedProduct = reshapeProduct(product);

            if (reshapedProduct) {
                reshapedProducts.push(reshapedProduct);
            }
        }
    }

    return reshapedProducts;
};

const removeEdgesAndNodes = (array: Connection<any>) => {
    return array.edges.map((edge) => edge?.node);
};


const reshapeImages = (images: Connection<Image>, productTitle: string) => {
    const flattened = removeEdgesAndNodes(images);

    return flattened.map((image) => {
        const filename = image.url.match(/.*\/(.*)\..*/)[1];
        return {
            ...image,
            altText: image.altText || `${productTitle} - ${filename}`
        };
    });
};

const reshapeProduct = (product: ShopifyProduct, filterHiddenProducts: boolean = true) => {
    if (!product || (filterHiddenProducts && product.tags.includes(HIDDEN_PRODUCT_TAG))) {
        return undefined;
    }

    const { images, variants, ...rest } = product;

    return {
        ...rest,
        images: reshapeImages(images, product.title),
        variants: removeEdgesAndNodes(variants)
    };
};

export async function getProduct(handle: string): Promise<Product | undefined> {
    const res = await shopifyFetch<ShopifyProductOperation>({
        query: getProductQuery,
        tags: [TAGS.products],
        variables: {
            handle
        }
    });

    return reshapeProduct(res.body.data.product, false);
}

export async function getProducts({
    query,
    reverse,
    sortKey
}: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
}): Promise<Product[]> {
    const res = await shopifyFetch<ShopifyProductsOperation>({
        query: getProductsQuery,
        tags: [TAGS.products],
        variables: {
            query,
            reverse,
            sortKey
        }
    });

    return reshapeProducts(removeEdgesAndNodes(res.body.data.products));
}

// This is called from `app/api/revalidate.ts` so providers can control revalidation logic.
export async function revalidate(req: NextRequest): Promise<NextResponse> {
    const collectionWebhooks = ['collections/create', 'collections/delete', 'collections/update'];
    const productWebhooks = ['products/create', 'products/delete', 'products/update'];
    const topic = headers().get('x-shopify-topic') || 'unknown';
    const secret = req.nextUrl.searchParams.get('secret');
    const isCollectionUpdate = collectionWebhooks.includes(topic);
    const isProductUpdate = productWebhooks.includes(topic);

    if (!secret || secret !== process.env.SHOPIFY_REVALIDATION_SECRET) {
        console.error('Invalid revalidation secret.');
        return NextResponse.json({ status: 200 });
    }

    if (!isCollectionUpdate && !isProductUpdate) {
        return NextResponse.json({ status: 200 });
    }

    if (isCollectionUpdate) {
        revalidateTag(TAGS.collections);
    }

    if (isProductUpdate) {
        revalidateTag(TAGS.products);
    }

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
