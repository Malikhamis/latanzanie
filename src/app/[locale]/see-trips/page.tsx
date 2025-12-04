'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react'
import { Search, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Faq from '@/components/ui/faq'

// Disable static generation for this page
export const dynamic = 'force-dynamic';

// Define types for our trips
type TranslatedTrip = {
  id: number
  slug: string
  price: number
  rating: number
  tripKey: string
}

type DirectTrip = {
  id: number
  title: {
    fr: string
    en: string
  }
  slug: string
  price: number
  rating: number
  duration: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
}

type AdventureTrip = TranslatedTrip | DirectTrip

export default function SeeTripsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const t = useTranslations('SeeTripsPage')
  const tCommon = useTranslations('Common')
  const pathname = usePathname()
  
  // Determine the current locale from the pathname
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr'

  // Adventure trips data - using translation keys
  const adventureTrips: AdventureTrip[] = [
    {
      id: 1,
      slug: "climb-kilimanjaro",
      price: 2000,
      rating: 5.0,
      tripKey: "kilimanjaro"
    },
    {
      id: 2,
      slug: "tanzania-safari",
      price: 1000,
      rating: 5.0,
      tripKey: "safari"
    },
    {
      id: 3,
      slug: "nepal-peak-climbing",
      price: 3390,
      rating: 5.0,
      tripKey: "nepal"
    },
    {
      id: 4,
      slug: "everest-base-camp-trek",
      price: 1790,
      rating: 5.0,
      tripKey: "everest"
    },
    {
      id: 5,
      slug: "annapurna-circuit",
      price: 1590,
      rating: 5.0,
      tripKey: "annapurna"
    },
    {
      id: 6,
      slug: "machu-picchu-trekking",
      price: 1990,
      rating: 5.0,
      tripKey: "machuPicchu"
    },
    {
      id: 7,
      slug: "explore-peru",
      price: 485,
      rating: 5.0,
      tripKey: "peru"
    },
    {
      id: 8,
      slug: "gorilla-trekking-rwanda",
      price: 3600,
      rating: 5.0,
      tripKey: "rwanda"
    },
    {
      id: 9,
      slug: "gorilla-trekking-uganda",
      price: 3590,
      rating: 5.0,
      tripKey: "uganda"
    },
    {
      id: 10,
      slug: "kenya-safari",
      price: 2270,
      rating: 5.0,
      tripKey: "kenya"
    },
    {
      id: 11,
      slug: "discover-bhutan",
      price: 2990,
      rating: 5.0,
      tripKey: "bhutan"
    },
    {
      id: 12,
      slug: "manaslu-circuit",
      price: 2290,
      rating: 5.0,
      tripKey: "manaslu"
    },
    {
      id: 13,
      slug: "zanzibar-beach-holidays",
      price: 2050,
      rating: 5.0,
      tripKey: "zanzibar"
    },
    {
      id: 15,
      slug: "wonders-of-iceland",
      price: 3195,
      rating: 5.0,
      tripKey: "iceland"
    },
    {
      id: 16,
      slug: "kayaking-sweden",
      price: 1790,
      rating: 5.0,
      tripKey: "sweden"
    },
    {
      id: 17,
      slug: "explore-sri-lanka",
      price: 1980,
      rating: 5.0,
      tripKey: "sriLanka"
    }
  ]

  // Type guard to check if trip is a DirectTrip
  const isDirectTrip = (trip: AdventureTrip): trip is DirectTrip => {
    return 'title' in trip && typeof trip.title === 'object' && trip.title !== null
  }

  // Only show trips in Tanzania / Zanzibar
  const allowedSlugs = [
    'climb-kilimanjaro',
    'tanzania-safari',
    'zanzibar-beach-holidays',
    'climb-meru'
  ]

  const visibleTrips = adventureTrips.filter(trip => allowedSlugs.includes(trip.slug))

  // Filter trips based on search term (applies to the visible subset)
  const filteredTrips = visibleTrips.filter(trip => {
    // For trips with translation keys
    if (!isDirectTrip(trip)) {
      return tCommon(`trips.${trip.tripKey}.title`).toLowerCase().includes(searchTerm.toLowerCase()) ||
             tCommon(`trips.${trip.tripKey}.description`).toLowerCase().includes(searchTerm.toLowerCase())
    }
    // For trips with direct title/description (like Marangu Route)
    else {
      return trip.title[currentLocale as 'fr' | 'en'].toLowerCase().includes(searchTerm.toLowerCase()) ||
             trip.description[currentLocale as 'fr' | 'en'].toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  const imageByTripKey: Record<string, string> = {
    kilimanjaro: '/images/climb.jpg',
    safari: '/images/moshi.jpg',
    meru: '/images/mlima.jpg',
    zanzibar: '/images/zanzibar.jpg'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Simplified without video background */}
      <section className="relative bg-gradient-to-r from-[#5BC4AF] to-[#008576] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Adventure Trips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <Link
                key={trip.id}
                href={`/${currentLocale}/trips/${trip.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block"
              >
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src={!isDirectTrip(trip) ? (imageByTripKey[trip.tripKey] || '/images/kilimanjaro-marangu.jpg') : '/images/kilimanjaro-marangu.jpg'}
                    alt={(isDirectTrip(trip) ? trip.title[currentLocale as 'fr' | 'en'] : tCommon(`trips.${trip.tripKey}.title`)) as string}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {isDirectTrip(trip) ? trip.title[currentLocale as 'fr' | 'en'] : tCommon(`trips.${trip.tripKey}.title`)}
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      {tCommon('fromPrice', { price: trip.price.toString() })}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {isDirectTrip(trip) ? trip.description[currentLocale as 'fr' | 'en'] : tCommon(`trips.${trip.tripKey}.description`)}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium text-gray-800">({trip.rating})</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {isDirectTrip(trip) ? trip.duration[currentLocale as 'fr' | 'en'] : tCommon(`trips.${trip.tripKey}.duration`)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTrips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {t('noTripsFound')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('faq.title')}</h2>

          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: t('faq.items.faq1Answer') },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: t('faq.items.faq2Answer') },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: t('faq.items.faq3Answer') },
              { question: "Comment on sėche ses affaires s'il pleut ?", answer: t('faq.items.faq4Answer') }
            ]}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-marangu.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t('newsletter.title')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {t('newsletter.subtitle')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {t('newsletter.description')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={t('newsletter.firstNamePlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              {t('newsletter.button')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}