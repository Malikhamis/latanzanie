'use client'

import { Button } from '@/components/ui/button'
import '../../tailgrid.css' // Import Tailgrid CSS for this component
import { useState } from 'react'
import { Search, Eye, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

export default function TravelBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const t = useTranslations('TravelBlogsPage');
  const tCommon = useTranslations('Common');
  const locale = useLocale()

  // Single-category blog list (Kilimanjaro only) as requested
  const blogCategories = [
    {
      id: 1,
      titleEn: 'The 7 Ascent Routes of Kilimanjaro: Complete Analysis, Comparison & Expert Local Advice',
      titleFr: 'Les 7 Voies d\'Ascension du Kilimandjaro : Analyse Complète, Comparée et Conseils d\'Expert Local',
      subtitleEn: 'Comprehensive Route Guide',
      subtitleFr: 'Guide de voyage',
      descriptionEn: "Explore all 7 Kilimanjaro routes with detailed analysis, expert comparisons, and local insights. Choose the best path for your adventure to the Roof of Africa.",
      descriptionFr: "Randonnée du Kilimandjaro — une aventure unique au sommet de l'Afrique. Tout ce que vous devez savoir.",
      image: '/images/card1.jpg',
      link: 'kilimanjaro-routes',
      topReads: [
        {
          id: 101,
          titleEn: 'The ultimate Kilimanjaro packing list (+ free PDF)',
          titleFr: 'Liste de matériel ultime pour le Kilimandjaro (+ PDF gratuit)',
          descriptionEn: "What you pack for your Kilimanjaro climb is vitally important to your health and the success of your trek.",
          descriptionFr: "Ce que vous emmenez pour votre ascension du Kilimandjaro est déterminant pour votre santé et la réussite du trek."
        }
      ]
    }
  ]

  // Hero strings per-locale
  const heroTitleEn = 'Knowledge Library'
  const heroTitleFr = 'Bibliothèque de Connaissances'
  const heroDescEn = "Learn before you travel. The Latanzanieaucourdelanature travel library is the ultimate resource for planning your trip. Our goal is to give every traveller a feeling of security before they set off."
  const heroDescFr = "Apprenez avant de voyager. La bibliothèque de voyage Latanzanieaucourdelanature est la ressource ultime pour planifier votre voyage. Notre objectif est de donner à chaque voyageur un sentiment de sécurité avant le départ."

  // Filter categories based on search term
  const filteredCategories = blogCategories.filter(category => {
    const titleText = locale === 'fr' ? category.titleFr : category.titleEn
    const subtitleText = locale === 'fr' ? category.subtitleFr : category.subtitleEn
    return titleText.toLowerCase().includes(searchTerm.toLowerCase()) || subtitleText.toLowerCase().includes(searchTerm.toLowerCase())
  })

  // Get the first category for detailed display (Kilimanjaro Trekking)
  const firstCategory = blogCategories[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Knowledge Library Style */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                {locale === 'fr' ? heroTitleFr : heroTitleEn}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {locale === 'fr' ? heroDescFr : heroDescEn}
              </p>
            </div>
            {/* Right - Hero Image */}
            <div className="flex justify-center">
              <div className="w-full h-64 rounded-lg overflow-hidden relative">
                <Image src="/images/khero.jpg" alt={locale === 'fr' ? 'Illustration Kilimandjaro' : 'Kilimanjaro hero'} fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
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

          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {t('categories.title')}
          </h2>

          {/* Blog Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative h-80"
              >
                {/* Full background image */}
                <div className="absolute inset-0">
                  <Image src="/images/card1.jpg" alt={locale === 'fr' ? category.titleFr : category.titleEn} fill style={{ objectFit: 'cover' }} />
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 bg-black bg-opacity-40 text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{locale === 'fr' ? category.titleFr : category.titleEn}</h3>
                    <p className="text-[#A0E7D8] font-medium mb-3">{locale === 'fr' ? category.subtitleFr : category.subtitleEn}</p>
                    <p className="text-gray-100 text-sm line-clamp-3">{locale === 'fr' ? category.descriptionFr : category.descriptionEn}</p>
                  </div>
                  <Link 
                    href={`/${locale}/travel-blogs/${category.link || category.id}`}
                    className="flex items-center text-white hover:text-[#E8F8F5] font-medium w-fit bg-[#00A896] bg-opacity-80 hover:bg-opacity-100 px-4 py-2 rounded-lg transition-all"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {t('explore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {t('noTopicsFound')}
              </p>
            </div>
          )}
        </div>
      </section>

      
    </div>
  )
}