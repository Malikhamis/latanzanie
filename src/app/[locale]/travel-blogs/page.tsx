'use client'

import { Button } from '@/components/ui/button'
import TopicCard from '@/components/ui/TopicCard'
import '../../tailgrid.css' // Import Tailgrid CSS for this component
import { useState } from 'react'
import { Search, Eye, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { blogCategories } from '@/lib/blogCategories'

export default function TravelBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const t = useTranslations('TravelBlogsPage');
  const tCommon = useTranslations('Common');
  const locale = useLocale()

  // blogCategories now imported from shared module

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

  // Map specific article links to the hero background images used on their pages
  // Mapping per user instruction:
  // Comprehensive Route Guide (kilimanjaro-routes) -> hero1
  // Seasonal Planning Guide (choose-season) -> hero2
  // Five Climate Bands Guide (climate-zones) -> hero3
  // Travel Guide (best-season) -> hero4
  // Practical Guide (drying-gear) -> hero5
  // Clothing Guide (dress-for-zones) -> hero6
  const heroMap: Record<string, string> = {
    'kilimanjaro-routes': '/images/hero1.jpg',
    'choose-season': '/images/hero2.jpg',
    'climate-zones': '/images/hero3.jpg',
    'best-season': '/images/hero4.jpg',
    'drying-gear': '/images/hero5.jpg',
    'dress-for-zones': '/images/hero6.jpg'
  }

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

          {/* Blog Categories Grid - Using TopicCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => {
              const fullTitle = locale === 'fr' ? category.titleFr : category.titleEn
              const shortTitle = fullTitle.split(/\s+/).slice(0, 2).join(' ')
              const heroImg = heroMap[category.link] || category.image || '/images/hero1.jpg'
              return (
                <TopicCard
                  key={category.id}
                  title={shortTitle}
                  subtitle={locale === 'fr' ? category.subtitleFr : category.subtitleEn}
                  imageSrc={heroImg}
                  href={`/${locale}/travel-blogs/${category.link || category.id}`}
                />
              )
            })}
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

      {/* All Topics Section - After Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('allTopics.title')}
          </h2>
          <p className="text-gray-600 mb-12 leading-relaxed max-w-4xl">
            {t('allTopics.intro')}
          </p>

          {/* Categories displayed horizontally with vertical topic lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Climate and Seasons Category */}
            <div>
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <Image 
                      src="/images/climate-icon.svg" 
                      alt="Climate and Seasons"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {t('allTopics.climateSeasons')}
                </h3>
              </div>

              {/* Topic links list - vertical */}
              <ul className="space-y-3">
                <li>
                  <Link href={`/${locale}/travel-blogs/climate-zones`} className="text-[#00A896] hover:text-[#008076] hover:underline transition">
                    {locale === 'fr' ? 'Kilimandjaro : Le Guide Complet des 5 Zones Climatiques et Altitudes' : 'Kilimanjaro — The 5 Climate Zones and Altitudes'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/travel-blogs/choose-season`} className="text-[#00A896] hover:text-[#008076] hover:underline transition">
                    {locale === 'fr' ? 'Choisir la Bonne Saison pour la Randonnée' : 'Choosing the Right Season for Hiking'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/travel-blogs/best-season`} className="text-[#00A896] hover:text-[#008076] hover:underline transition">
                    {locale === 'fr' ? 'Quelle est la meilleure période pour faire l\'ascension du Kilimandjaro ?' : 'Best time to climb Kilimanjaro'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/travel-blogs/dress-for-zones`} className="text-[#00A896] hover:text-[#008076] hover:underline transition">
                    {locale === 'fr' ? 'Comment s\'habiller pour affronter les 5 zones climatiques du Kilimandjaro ?' : 'How to dress for the 5 climate zones of Kilimanjaro'}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/travel-blogs/drying-gear`} className="text-[#00A896] hover:text-[#008076] hover:underline transition">
                    {locale === 'fr' ? 'Comment sécher ses affaires en trek quand il pleut ?' : 'How to dry your gear when it rains'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}