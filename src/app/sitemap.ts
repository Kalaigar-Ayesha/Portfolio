import { MetadataRoute } from 'next';
import { DETAILED_SERVICES } from '@/data/servicesData';
import { CASE_STUDIES } from '@/data/caseStudiesData';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ayeshak.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic service landing pages
  const serviceRoutes: MetadataRoute.Sitemap = DETAILED_SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic project case study pages
  const projectRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
