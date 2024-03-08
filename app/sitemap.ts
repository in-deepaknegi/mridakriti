import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.mridakriti.com'
const urls = [
    `${BASE_URL}`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contacts`,
]

export default function sitemap(): MetadataRoute.Sitemap {
    console.log(urls.length);

    const allUrls: MetadataRoute.Sitemap = urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === `${BASE_URL}` ? 1 : 0.8,
    }));

    return allUrls;
}