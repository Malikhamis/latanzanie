import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.latanzanieaucourdelanature.com'
  const locales = ['fr', 'en']
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/see-trips',
    '/trips/climb-kilimanjaro',
    '/trips/tanzania-safari',
    '/trips/zanzibar-beach-holidays',
    '/trips/materuni-cultural-tour',
    '/trips/marangu-route',
    '/trips/machame-route',
    '/trips/lemosho-route',
    '/trips/umbwe-route',
    '/trips/safari-bivouac-8-days',
    '/trips/safari-bivouac-4-days',
    '/trips/zanzibar-safari-beach-10-days',
    '/trips/materuni-chemka-2-days',
    '/trips/zanzibar-diving-culture-5-days',
    '/trips/zanzibar-complete-escape-8-days',
  ]

  // Generate sitemap entries for all locale combinations
  const sitemapEntries: MetadataRoute.Sitemap = []

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/trips/') ? 0.8 : 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
