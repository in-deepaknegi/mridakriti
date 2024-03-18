import { getProduct } from "@/lib/shopify";
import { notFound } from "next/navigation";
import { Suspense, useState } from "react";

export const revalidate = 60;

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Overview from '@/components/(pages)/product/Overview';
import { Metadata } from "next";
import { HIDDEN_PRODUCT_TAG } from '@/lib/constants';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = await getProduct(params.handle);

    if (!product) return notFound();

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.url,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd)
                }}
            />

            <Navbar />
            <main>
                <Overview product={product} />
            </main>
            <Suspense>
                <Footer />
            </Suspense>
        </>
    );
}

export async function generateMetadata({
    params
  }: {
    params: { handle: string };
  }): Promise<Metadata> {
    const product = await getProduct(params.handle);
  
    if (!product) return notFound();
  
    const { url, width, height, altText: alt } = product.featuredImage || {};
    const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);
  
    return {
      title: product.seo.title || product.title,
      description: product.seo.description || product.description,
      robots: {
        index: indexable,
        follow: indexable,
        googleBot: {
          index: indexable,
          follow: indexable
        }
      },
      openGraph: url
        ? {
            images: [
              {
                url,
                width,
                height,
                alt
              }
            ]
          }
        : null
    };
  }