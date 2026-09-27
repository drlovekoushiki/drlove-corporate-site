import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/a$', '/sticky-sample'],
    },
    sitemap: 'https://corp.dr-love.ai/sitemap.xml',
  };
}
