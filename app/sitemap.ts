import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://blockx3.xyz';

  const staticPages = ['', '/'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages]; // if there will be any dynamic page . remind me, i will update
}
