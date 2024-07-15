import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gnaneswar Kulindala's Website",
    short_name: "Gnaneswar K's Site",
    description: 'Portfolio website of Gnaneswar Kulindala',
    start_url: '/',
    icons: [
      {
        src: '../public/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '../public/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '../public/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '../public/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '../public/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '../public/GK.svg',
        sizes: 'any'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ebebeb',
    display: 'standalone'
  }
}
