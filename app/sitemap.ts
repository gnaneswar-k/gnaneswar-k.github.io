import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gnaneswar-k.github.io/',
      priority: 1,
    },
    {
      url: 'https://gnaneswar-k.github.io/projects',
      priority: 0.8,
    },
    {
      url: 'https://gnaneswar-k.github.io/contact',
      priority: 0.4,
    },
  ]
}
