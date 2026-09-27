import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://corp.dr-love.ai/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://corp.dr-love.ai/inquiry', changeFrequency: 'yearly', priority: 0.5 },
  ];
}
