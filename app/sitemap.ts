import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const root = 'https://jagadeeshpodilapu.github.io/jagadeesh-podilapu-portfolio';
  return [{ url: `${root}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }, ...projects.map((project) => ({ url: `${root}/projects/${project.slug}/`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: .7 }))];
}
