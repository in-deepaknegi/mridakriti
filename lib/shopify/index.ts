import { HIDDEN_PRODUCT_TAG, SHOPIFY_GRAPHQL_API_ENDPOINT, TAGS } from "../constants";

import { ensureStartsWith } from "../utils";
import { isShopifyError } from "../type-guards";
import { getProductQuery, getProductsQuery } from "./queries/product";
import {
    addToCartMutation,
    createCartMutation,
    editCartItemsMutation,
    removeFromCartMutation
} from './mutations/cart';
import { getCartQuery } from './queries/cart';

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

const reshapeCart = (cart: ShopifyCart): Cart => {
    if (!cart.cost?.totalTaxAmount) {
        cart.cost.totalTaxAmount = {
            amount: '0.0',
            currencyCode: 'USD'
        };
    }

    return {
        ...cart,
        lines: removeEdgesAndNodes(cart.lines)
    };
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


export async function createCart(): Promise<Cart> {
    const res = await shopifyFetch<ShopifyCreateCartOperation>({
        query: createCartMutation,
        cache: 'no-store'
    });

    return reshapeCart(res.body.data.cartCreate.cart);
}

export async function addToCart(
    cartId: string,
    lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<ShopifyAddToCartOperation>({
        query: addToCartMutation,
        variables: {
            cartId,
            lines
        },
        cache: 'no-store'
    });
    return reshapeCart(res.body.data.cartLinesAdd.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
    const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
        query: removeFromCartMutation,
        variables: {
            cartId,
            lineIds
        },
        cache: 'no-store'
    });

    return reshapeCart(res.body.data.cartLinesRemove.cart);
}

export async function updateCart(
    cartId: string,
    lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
    const res = await shopifyFetch<ShopifyUpdateCartOperation>({
        query: editCartItemsMutation,
        variables: {
            cartId,
            lines
        },
        cache: 'no-store'
    });

    return reshapeCart(res.body.data.cartLinesUpdate.cart);
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
    const res = await shopifyFetch<ShopifyCartOperation>({
        query: getCartQuery,
        variables: { cartId },
        tags: [TAGS.cart],
        cache: 'no-store'
    });

    // Old carts becomes `null` when you checkout.
    if (!res.body.data.cart) {
        return undefined;
    }

    return reshapeCart(res.body.data.cart);
}

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
