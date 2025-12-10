'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { ChevronRight, ChevronUp, ChevronDown, Sun, Cloud, Thermometer, Eye, Wind, Calendar } from 'lucide-react'
import Image from 'next/image'
import '../../../tailgrid.css'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopReads from '@/components/ui/TopReads'

export default function ChooseSeasonPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('SeasonalGuide')
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'weather', title: t('weather.title'), icon: Sun, color: 'orange' },
    { id: 'trails', title: t('trails.title'), icon: Cloud, color: 'blue' },
    { id: 'cold', title: t('cold.title'), icon: Thermometer, color: 'cyan' },
    { id: 'visibility', title: t('visibility.title'), icon: Eye, color: 'indigo' },
    { id: 'wind', title: t('wind.title'), icon: Wind, color: 'green' },
    { id: 'seasons', title: t('seasons.title'), icon: Calendar, color: 'purple' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero2.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl animate-slideInRight">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Article Meta Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={locale === 'fr' ? 'Guide Saisonnier Latanzanie' : 'Latanzanie Seasonal Guide'}
            date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'}
            readingTime={locale === 'fr' ? '10 min de lecture' : '10 min read'}
          />
        </div>
      </section>

      {/* Mobile TOC (visible on sm screens, below meta) */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">{locale === 'fr' ? 'Sections' : 'Sections'}</h3>
          <nav className="space-y-2 text-sm">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="block text-gray-700 hover:text-teal-600">{s.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* Detailed Sections with Accordion */}
      <section className="py-16 bg-white" data-section="detailed-analyses">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              {/* Left sidebar: sticky TOC + compact accordion */}
              <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start transform md:-translate-x-8 lg:-translate-x-12">
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                  <TOC
                    title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                    items={sections.map(s => ({ id: `${s.id}-detail`, label: s.title, level: 2 }))}
                    onSelect={(id: string) => { const sectionId = id.replace('-detail',''); setExpandedSection(sectionId) }}
                  />
                </div>

                <div className="space-y-3">
                  {sections.map((section) => (
                    <div key={section.id} className={`bg-white rounded-lg border ${expandedSection === section.id ? 'border-[#00A896] shadow-md' : 'border-gray-100'} p-3`}>
                      <button onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)} className="text-left w-full">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800">{section.title}</h4>
                          </div>
                          <div className="ml-3 flex-shrink-0 text-gray-400">{expandedSection === section.id ? '–' : '+'}</div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main content area */}
              <div className="flex-1">
                <div className="space-y-4">
                  {/* Weather Section */}
                  <div key="weather" id="weather-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'weather' ? null : 'weather')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('weather.title')}</h2>
                        <p className="text-gray-600">{t('weather.intro')}</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'weather' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'weather' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-snug">{t('weather.drySeason.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('weather.drySeason.content')}</p>
                          </div>
                          <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-gray-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('weather.rainy.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('weather.rainy.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Trails Section */}
                  <div key="trails" id="trails-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'trails' ? null : 'trails')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('trails.title')}</h2>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'trails' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'trails' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-400">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-snug">{t('trails.drySeason.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('trails.drySeason.content')}</p>
                          </div>
                          <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('trails.rainy.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('trails.rainy.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cold Section */}
                  <div key="cold" id="cold-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'cold' ? null : 'cold')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('cold.title')}</h2>
                        <p className="text-gray-600">{t('cold.intro')}</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'cold' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'cold' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-400">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-snug">{t('cold.drySeason.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('cold.drySeason.content')}</p>
                          </div>
                          <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('cold.rainy.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('cold.rainy.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visibility Section */}
                  <div key="visibility" id="visibility-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'visibility' ? null : 'visibility')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('visibility.title')}</h2>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'visibility' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'visibility' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-6">
                          <div className="bg-indigo-50 p-8 rounded-lg border-l-4 border-indigo-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('visibility.safety.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('visibility.safety.content')}</p>
                          </div>
                          <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('visibility.motivation.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('visibility.motivation.content')}</p>
                          </div>
                          <div className="bg-pink-50 p-8 rounded-lg border-l-4 border-pink-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('visibility.rhythm.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('visibility.rhythm.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Wind Section */}
                  <div key="wind" id="wind-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'wind' ? null : 'wind')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('wind.title')}</h2>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'wind' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'wind' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('wind.drySeason.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('wind.drySeason.content')}</p>
                          </div>
                          <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('wind.rainy.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('wind.rainy.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Seasons Section */}
                  <div key="seasons" id="seasons-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'seasons' ? null : 'seasons')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{t('seasons.title')}</h2>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedSection === 'seasons' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedSection === 'seasons' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-6">
                          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('seasons.january.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('seasons.january.content')}</p>
                          </div>
                          <div className="bg-yellow-50 p-8 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('seasons.june.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('seasons.june.content')}</p>
                          </div>
                          <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('seasons.april.title')}</h3>
                            <p className="text-gray-700 leading-relaxed">{t('seasons.april.content')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TopReads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <TopReads
            title={locale === 'fr' ? 'Lectures Connexes' : 'Related Reads'}
            locale={locale}
            posts={[
              {
                id: 'packing',
                titleEn: 'Packing Checklist: Layers, Boots & Sleep System',
                titleFr: 'Checklist : Couches, Chaussures et Système de Couchage',
                descriptionEn: 'Detailed guidance on layering, footwear, sleeping systems and essentials for Kilimanjaro.',
                descriptionFr: 'Guide détaillé sur les couches, chaussures, matériel de couchage et essentiels pour le Kilimandjaro.',
                link: `/${locale}/trips/packing-guide`,
              },
              {
                id: 'acclimatisation',
                titleEn: 'Acclimatisation: Climb High, Sleep Low & Hydration',
                titleFr: 'Acclimatation : Monter Haut, Dormir Bas & Hydratation',
                descriptionEn: 'Proven acclimatisation strategies, pacing and hydration practices to increase summit success.',
                descriptionFr: 'Stratégies éprouvées d\'acclimatation, rythme et hydratation pour augmenter les chances d\'atteindre le sommet.',
                link: `/${locale}/trips/acclimatisation`,
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kilimanjaro-summit.jpg"
            alt="Kilimanjaro background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{t('cta.title')}</h2>
          <h3 className="text-2xl font-bold mb-6">{t('cta.subtitle')}</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">{t('cta.description')}</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={locale === 'fr' ? 'Prénom' : 'First name'}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={locale === 'fr' ? 'Votre adresse email' : 'Email address'}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
              {locale === 'fr' ? "S'abonner" : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
