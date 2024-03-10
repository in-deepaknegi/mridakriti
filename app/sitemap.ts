import { MetadataRoute } from "next";
import { getProducts } from "@/lib/shopify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const BASE_URL = 'https://www.mridakriti.com'

    const products = await getProducts({});

    const urls = [
        `${BASE_URL}/about`,
        `${BASE_URL}/contacts`,
        `${BASE_URL}/paintings`,
    ]

    const entries: MetadataRoute.Sitemap = products.map(({ handle }: any) => ({
        url: `${BASE_URL}/painting/${handle}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }))

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...allUrls,
        ...entries,
    ]
}