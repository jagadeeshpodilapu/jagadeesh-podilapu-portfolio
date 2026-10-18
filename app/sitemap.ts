import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://example.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }, ...projects.map((project) => ({ url: `https://example.com/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: .7 }))];
}
