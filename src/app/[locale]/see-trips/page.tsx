'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react'
import { Search, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Faq from '@/components/ui/faq'

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

  // Adventure trips data - using SeeTripsPage translation keys
  const adventureTrips: AdventureTrip[] = [
    {
      id: 1,
      slug: "climb-kilimanjaro",
      price: 2000,
      rating: 5.0,
      tripKey: "climb_kilimanjaro"
    },
    {
      id: 2,
      slug: "tanzania-safari",
      price: 1000,
      rating: 5.0,
      tripKey: "tanzania_safari"
    },
    {
      id: 3,
      slug: "zanzibar-beach-holidays",
      price: 2050,
      rating: 5.0,
      tripKey: "zanzibar_beach"
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
    'zanzibar-beach-holidays'
  ]

  const visibleTrips = adventureTrips.filter(trip => allowedSlugs.includes(trip.slug))

  // Filter trips based on search term (applies to the visible subset)
  const filteredTrips = visibleTrips.filter(trip => {
    // For trips with translation keys
    if (!isDirectTrip(trip)) {
      return t(`trips.${trip.tripKey}.title`).toLowerCase().includes(searchTerm.toLowerCase()) ||
             t(`trips.${trip.tripKey}.shortDescription`).toLowerCase().includes(searchTerm.toLowerCase())
    }
    // For trips with direct title/description (like Marangu Route)
    else {
      return trip.title[currentLocale as 'fr' | 'en'].toLowerCase().includes(searchTerm.toLowerCase()) ||
             trip.description[currentLocale as 'fr' | 'en'].toLowerCase().includes(searchTerm.toLowerCase())
    }
  })

  const imageByTripKey: Record<string, string> = {
    climb_kilimanjaro: '/images/climb.jpg',
    tanzania_safari: '/images/moshi.jpg',
    zanzibar_beach: '/images/zanzibar.jpg'
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
                    alt={(isDirectTrip(trip) ? trip.title[currentLocale as 'fr' | 'en'] : t(`trips.${trip.tripKey}.title`)) as string}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                      {isDirectTrip(trip) ? tCommon('fromPrice', { price: trip.price.toString() }) : t(`trips.${trip.tripKey}.price`)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {isDirectTrip(trip) ? trip.title[currentLocale as 'fr' | 'en'] : t(`trips.${trip.tripKey}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {isDirectTrip(trip) ? trip.description[currentLocale as 'fr' | 'en'] : t(`trips.${trip.tripKey}.shortDescription`)}
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
                        {isDirectTrip(trip) ? trip.duration[currentLocale as 'fr' | 'en'] : t(`trips.${trip.tripKey}.duration`)}
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
              { question: t('faq.items.faq1'), answer: t('faq.items.faq1Answer') },
              { question: t('faq.items.faq2'), answer: t('faq.items.faq2Answer') },
              { question: t('faq.items.faq3'), answer: t('faq.items.faq3Answer') },
              { question: t('faq.items.faq4'), answer: t('faq.items.faq4Answer') }
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