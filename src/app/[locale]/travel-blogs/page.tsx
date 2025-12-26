'use client'

import { Button } from '@/components/ui/button'
import TopicCard from '@/components/ui/TopicCard'
import '../../tailgrid.css' // Import Tailgrid CSS for this component
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { blogCategories } from '@/lib/blogCategories'

export const dynamic = 'force-dynamic'

export default function TravelBlogsPage({ params }: { params?: { locale?: string } }) {
  try {
    const locale = useLocale()
    const t = useTranslations('TravelBlogsPage');
    const tCommon = useTranslations('Common');

    // Use blogCategories for the main categories section
    return (
      <div className="bg-gray-50 flex flex-col min-h-screen">
        <div className="flex-grow">
          {/* Hero Section - Knowledge Library Style */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
                    {t('hero.title', { default: 'Knowledge & Guides' })}
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('hero.subtitle', { default: 'Guides, tips and practical articles for climbing Kilimanjaro' })}
                  </p>
                </div>
                {/* Right side - Hero Image */}
                <div className="flex justify-center">
                  <Image 
                    src="/images/khero.jpg" 
                    alt="Travel Knowledge Library" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section (from blogCategories) */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choisissez un sujet</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TopicCard
                  key="climb-kilimanjaro"
                  title="Grimper le Kilimandjaro"
                  imageSrc="/images/kilimanjaro-summit.jpg"
                  href={`/${locale}/travel-blogs/climb-kilimanjaro`}
                />
                <TopicCard
                  key="safari-tanzanie"
                  title="Safari en Tanzanie"
                  imageSrc="/images/tanzania-safari.jpg"
                  href={`/${locale}/travel-blogs/tanzania-safari`}
                />
                <TopicCard
                  key="vacances-zanzibar"
                  title="Vacances à Zanzibar"
                  imageSrc="/images/zanzibar-beach-holidays.jpg"
                  href={`/${locale}/travel-blogs/zanzibar-beach-holidays`}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  } catch (err) {
    console.error('TravelBlogsPage render error', err)
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Travel blogs temporarily unavailable</h2>
        </div>
      </div>
    )
  }
}