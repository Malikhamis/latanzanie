'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import TripCard from '@/components/TripCard'

type AdventureTrip = {
  id: number
  slug: string
  title: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
  duration: {
    en: string
    fr: string
  }
  price: number
  rating: number
  image: string
}

export default function TravelBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const t = useTranslations('TravelBlogsPage')
  const pathname = usePathname()

  // Determine the current locale from the pathname
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'en'

  // Trip data for travel blogs context
  const trips: AdventureTrip[] = [
    {
      id: 1,
      slug: 'climb-kilimanjaro',
      title: {
        en: 'Climb Kilimanjaro',
        fr: 'Gravir le Kilimandjaro'
      },
      description: {
        en: 'Trek to the roof of Africa with experienced guides. Multiple routes available for all fitness levels.',
        fr: 'Grimpez jusqu\'au toit de l\'Afrique avec des guides expérimentés. Plusieurs itinéraires disponibles pour tous les niveaux.'
      },
      duration: {
        en: '7 days',
        fr: '7 jours'
      },
      price: 2000,
      rating: 5.0,
      image: '/images/climb.jpg'
    },
    {
      id: 2,
      slug: 'tanzania-safari',
      title: {
        en: 'Tanzania Safari',
        fr: 'Safari en Tanzanie'
      },
      description: {
        en: 'Experience the wonder of African wildlife on this guided safari through Tanzania\'s most spectacular parks.',
        fr: 'Découvrez les merveilles de la faune africaine lors de ce safari guidé dans les plus beaux parcs de Tanzanie.'
      },
      duration: {
        en: '5 days',
        fr: '5 jours'
      },
      price: 1500,
      rating: 5.0,
      image: '/images/moshi.jpg'
    },
    {
      id: 3,
      slug: 'zanzibar-beach-holidays',
      title: {
        en: 'Zanzibar Beach Holidays',
        fr: 'Vacances balnéaires à Zanzibar'
      },
      description: {
        en: 'Relax on pristine beaches with crystal-clear waters. Perfect complement to any African adventure.',
        fr: 'Détendez-vous sur des plages vierges aux eaux cristallines. Complément parfait à toute aventure africaine.'
      },
      duration: {
        en: '3 days',
        fr: '3 jours'
      },
      price: 800,
      rating: 5.0,
      image: '/images/zanzibar.jpg'
    }
  ]

  // Filter trips based on search term
  const filteredTrips = trips.filter(trip =>
    trip.title[currentLocale as 'en' | 'fr'].toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.description[currentLocale as 'en' | 'fr'].toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
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
        </div>
      </section>

      {/* Trip Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  id={trip.id}
                  slug={trip.slug}
                  title={trip.title[currentLocale as 'en' | 'fr']}
                  description={trip.description[currentLocale as 'en' | 'fr']}
                  price={trip.price}
                  duration={trip.duration[currentLocale as 'en' | 'fr']}
                  rating={trip.rating}
                  image={trip.image}
                  locale={currentLocale}
                  // Link to travel-blogs context for enriched view with blog sections
                  href={`/${currentLocale}/travel-blogs/${trip.slug}`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">
                {t('noResults')}
              </p>
            </div>
          )}
        </div>
      </section>


    </div>
  )
}
  