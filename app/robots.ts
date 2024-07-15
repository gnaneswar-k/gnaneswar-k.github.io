import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/contact/',
    },
    sitemap: 'https://gnaneswar-k.github.io/sitemap.xml',
  }
}
