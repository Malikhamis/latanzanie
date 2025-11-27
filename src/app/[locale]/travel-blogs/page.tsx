'use client'

import { Button } from '@/components/ui/button'
import '../../tailgrid.css' // Import Tailgrid CSS for this component
import { useState } from 'react'
import { Search, Eye, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function TravelBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const t = useTranslations('TravelBlogsPage');
  const tCommon = useTranslations('Common');

  // Blog categories data with translation keys - Only Tanzania and Zanzibar topics
  const blogCategories = [
    {
      id: 1,
      titleKey: "kilimanjaroTrekking.title",
      subtitleKey: "kilimanjaroTrekking.subtitle",
      descriptionKey: "kilimanjaroTrekking.description",
      topReads: [
        {
          id: 101,
          titleKey: "kilimanjaroTrekking.topReads.packingList.title",
          descriptionKey: "kilimanjaroTrekking.topReads.packingList.description"
        },
        {
          id: 102,
          titleKey: "kilimanjaroTrekking.topReads.cost.title",
          descriptionKey: "kilimanjaroTrekking.topReads.cost.description"
        },
        {
          id: 103,
          titleKey: "kilimanjaroTrekking.topReads.kilimanjaroVsEverest.title",
          descriptionKey: "kilimanjaroTrekking.topReads.kilimanjaroVsEverest.description"
        }
      ]
    },
    {
      id: 2,
      titleKey: "kilimanjaro.title",
      subtitleKey: "kilimanjaro.subtitle"
    },
    {
      id: 3,
      titleKey: "mountMeru.title",
      subtitleKey: "mountMeru.subtitle"
    },
    {
      id: 4,
      titleKey: "tanzaniaSafari.title",
      subtitleKey: "tanzaniaSafari.subtitle"
    },
    {
      id: 6,
      titleKey: "zanzibar.title",
      subtitleKey: "zanzibar.subtitle"
    }
  ]

  // Filter categories based on search term
  const filteredCategories = blogCategories.filter(category => 
    tCommon(category.titleKey).toLowerCase().includes(searchTerm.toLowerCase()) ||
    tCommon(category.subtitleKey).toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Get the first category for detailed display (Kilimanjaro Trekking)
  const firstCategory = blogCategories[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>
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
                <div className="absolute inset-0 bg-gray-200">
                  <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                
                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 bg-black bg-opacity-40 text-white">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tCommon(category.titleKey)}</h3>
                    <p className="text-[#A0E7D8] font-medium mb-3">{tCommon(category.subtitleKey)}</p>
                    {category.descriptionKey && (
                      <p className="text-gray-100 text-sm line-clamp-3">{tCommon(category.descriptionKey)}</p>
                    )}
                  </div>
                  <Link 
                    href={`/travel-blogs/${category.id}`}
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

      {/* Detailed Content Section - Like See Trips Page */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section for Detailed Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{tCommon(firstCategory.titleKey)}</h2>
            <p className="text-[#00A896] font-medium text-xl mb-6">{tCommon(firstCategory.subtitleKey)}</p>
            {firstCategory.descriptionKey && (
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                {tCommon(firstCategory.descriptionKey)}
              </p>
            )}
          </div>

          {/* Call to Action */}
          <div className="bg-[#E8F8F5] rounded-lg p-8 mb-16 text-center max-w-4xl mx-auto">
            <p className="text-gray-800 font-medium text-lg mb-6">{t('cta.description')}</p>
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
              {t('cta.button')}
            </button>
          </div>

          {/* Top Reads Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('topReads.title')}</h3>
            <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              {t('topReads.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {firstCategory.topReads && firstCategory.topReads.map((read: any) => (
                <div key={read.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-80">
                  {/* Image part - 60% of the card */}
                  <div className="h-[60%] bg-gray-200 relative">
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  
                  {/* Details part - 40% of the card */}
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{tCommon(read.titleKey)}</h4>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{tCommon(read.descriptionKey)}</p>
                    </div>
                    <Link 
                      href={`/travel-blogs/${firstCategory.id}`}
                      className="flex items-center text-[#00A896] hover:text-[#008576] font-medium text-sm w-fit"
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      {t('explore')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}