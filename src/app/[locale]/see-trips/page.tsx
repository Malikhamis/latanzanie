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
      {/* Hero Section - With background image */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/trips-hero.jpg" 
            alt="Trips Hero Background" 
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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

      

      {/* Top Reads Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Lectures Essentielles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href={`/${currentLocale}/travel-blogs/kilimanjaro-packing-list`} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/kilimanjaro-packing.jpg" 
                    alt="Kilimanjaro Packing List" 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    La liste ultime d'équipement pour le Kilimandjaro (+ PDF gratuit)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ce que vous packez pour votre ascension du Kilimandjaro est vital pour votre santé et le succès de votre randonnée.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href={`/${currentLocale}/travel-blogs/sante-en-altitude`} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/altitude-health.jpg" 
                    alt="Altitude Health" 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Tout ce que vous devez savoir sur le mal aigu des montagnes et comment le prévenir lors de votre ascension du Kilimandjaro.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href={`/${currentLocale}/travel-blogs/preparation-physique-kilimandjaro`} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src="/images/physical-preparation.jpg" 
                    alt="Physical Preparation" 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Comment s'entraîner pour le Kilimandjaro quand on habite en ville
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Un guide complet sur la façon de se préparer physiquement à l'ascension du Kilimandjaro, même si vous vivez en ville.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Topics Section */}
      <section id="all-topics" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Tous les Sujets</h2>
          <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Tout ce que vous devez savoir pour planifier une aventure réussie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🧼</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Hygiène personnelle en trek</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/comment-maintenir-bonne-hygiene-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment maintenir une bonne hygiène au Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/toilettes-privees-necessaires`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Toilettes privées : sont-elles nécessaires ?
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/articles-hygiene-emporter`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Articles d&apos;hygiène à emporter
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/rester-propre-sans-eau`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Rester propre sans eau
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/hygiene-femmes-ascension`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Hygiène des femmes pendant l&apos;ascension
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/hygiene-alimentaire`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Hygiène alimentaire en trek
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📅</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Climat et saisons</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/meilleure-periode-gravir-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Meilleure période pour gravir le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/choisir-bonne-saison-randonnee`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Choisir la Bonne Saison pour la Randonnée
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Kilimandjaro : Les 5 Zones Climatiques et Altitudes
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/dress-for-zones`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment s'habiller pour les 5 zones climatiques du Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/kilimanjaro-routes`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Itinéraires du Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/drying-gear`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Matériel de séchage et garder le matériel au sec
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🏔️</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Santé en altitude</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/sante-en-altitude`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/evacuation-urgence`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Évacuation d&apos;urgence sur le Kilimandjaro : guide complet pour les randonneurs
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/diamox-kilimanjar`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Le Diamox pour l&apos;ascension du Kilimandjaro : tout ce que les trekkeurs doivent savoir
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/alimentation-kilimanjar`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Quels types de repas sont servis en altitude sur le Kilimandjaro pour maintenir l&apos;énergie malgré la perte d&apos;appétit ?
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/acclimatation-kilimanjar`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Techniques d&apos;acclimatation pour le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/sommeil-kilimanjar`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Sommeil et récupération sur le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/check-up-medical-kilimanjar`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Check-up médical pour le Kilimandjaro
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎒</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Préparation à l'ascension du Kilimandjaro</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment préparer son corps à l’altitude
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparation-physique-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment s'entraîner pour le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparation-mentale-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Pourquoi la préparation mentale est importante
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/choisir-chaussures-randonnee-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment choisir ses chaussures de randonnée
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/choix-itineraire-preparation-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    En quoi le choix de l'itinéraire fait partie de la préparation
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparation-medicale-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Quelle préparation médicale faut-il prévoir
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/engager-guide-local-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Pourquoi engager un guide local est essentiel
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">💪</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Préparation physique pour le Kilimandjaro</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparation-physique-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment s’entraîner pour le Kilimandjaro quand on habite en ville
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/shabituer-altitude-tanzanie`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Peut-on s'habituer à l'altitude avant de partir en Tanzanie ?
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparation-physique-ascension-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Préparation physique pour l’ascension du Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/niveau-physique-reel-monter-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Quel est le niveau physique réel pour monter le Kilimandjaro ?
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/preparer-mental-nuit-sommet-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Comment préparer son mental pour la nuit du sommet du Kilimandjaro
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🗺️</span>
                <h3 className="text-xl font-bold text-gray-800">
                  <span className="inline-block pb-2 border-b-2 border-[#00A896]">Kilimanjaro pack list</span>
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/vetements-equipements-saisons-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Vêtements & équipements par saison
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/objets-souvent-oublies-packing-list`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Objets souvent oubliés — liste de packing
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/batons-randonnee-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Bâtons de randonnée pour le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/equipement-obligatoire-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Équipement obligatoire pour le Kilimandjaro
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/louer-materiel-moshi`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Louer du matériel à Moshi
                  </Link>
                </li>
                <li className="text-gray-600 flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                  <Link href={`/${currentLocale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                    Liste de matériel pour le Kilimandjaro
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('faq.title')}</h2>

          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
              { question: "Kilimandjaro : Faut-il se doucher pendant une ascension de 8 à 10 jours ?", answer: "Non, il n’est généralement pas possible de prendre une vraie douche lors d'une ascension du Kilimandjaro. Les camps de haute altitude sont situés dans des zones sauvages protégées, dépourvues d'installations sanitaires modernes ou d'eau courante. L’eau y est une ressource précieuse, réservée en priorité à la cuisine et à l’hydratation des grimpeurs.\n\nCependant, ne pas se doucher ne signifie pas négliger l’hygiène. Nos randonneurs utilisent des solutions simples et efficaces pour rester frais et en bonne santé tout au long du trek :\n\n1). Toilette quotidienne : Une bassine d'eau tiède et un gant de toilette sont fournis par notre équipe chaque matin et soir.\n\n2). Lingettes biodégradables : Idéales pour un nettoyage rapide du corps tout en respectant l'environnement.\n\n3). Lavage fréquent des mains : Une étape cruciale pour garantir votre santé et éviter les bactéries en groupe.\n\n4). Change régulier : Le renouvellement des vêtements techniques et des sous-vêtements est essentiel.\n\n5). Hygiène des pieds : Un soin rigoureux pour prévenir les ampoules et les infections durant la marche.\n\nPourquoi la douche n’est pas une priorité en altitude ?\nEn haute montagne, votre corps mobilise toute son énergie pour l'acclimatation. Se doucher à l’eau froide augmente considérablement le risque de fatigue et de refroidissement (hypothermie légère). Pour réussir votre sommet, votre priorité doit rester l’hydratation, le repos et l’adaptation progressive à l’altitude.\n\nL’avis du guide : Passer 8 à 10 jours sans douche est tout à fait normal et fait partie de l'aventure. Avec une hygiène de base bien gérée, vous resterez en pleine forme et concentré sur votre objectif : atteindre le pic Uhuru." }
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