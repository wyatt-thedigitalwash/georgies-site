import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://georgieslexington.com';
  const routes = [
    { path: '/', priority: 1.0 },
    { path: '/menu', priority: 0.9 },
    { path: '/parties-events', priority: 0.8 },
    { path: '/gallery', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
  ];
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    changeFrequency: 'weekly' as const,
    priority: r.priority,
    lastModified: new Date(),
  }));
}
