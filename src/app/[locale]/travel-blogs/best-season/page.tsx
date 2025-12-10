'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronUp, ChevronDown } from 'lucide-react'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopReads from '@/components/ui/TopReads'

export default function BestSeasonPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()
  const t = useTranslations('BestSeason')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'intro', title: locale === 'fr' ? "Introduction" : 'Introduction' },
    { id: 'jan-mar', title: locale === 'fr' ? 'Janvier à début mars' : 'January to early March' },
    { id: 'routes-jan', title: locale === 'fr' ? 'Pourquoi choisir Machame, Lemosho ou Marangu' : 'Why choose Machame, Lemosho or Marangu' },
    { id: 'june-oct', title: locale === 'fr' ? 'Fin juin à octobre — La grande saison sèche' : 'Late June to October — The main dry season' },
    { id: 'advice', title: locale === 'fr' ? "Conseils et résumé" : 'Advice & Summary' },
    { id: 'rain', title: locale === 'fr' ? 'La saison des pluies' : 'The rainy season' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn leading-tight">
            {locale === 'fr' ? 'Quelle est la meilleure période pour faire l’ascension du Kilimandjaro ?' : "What's the best time to climb Kilimanjaro?"}
          </h1>

          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl animate-slideInRight">
            {locale === 'fr'
              ? 'Guide complet écrit par un guide local en Tanzanie'
              : 'Comprehensive guide written by a local Tanzanian guide'}
          </p>
        </div>
      </section>

      {/* Article Meta Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={locale === 'fr' ? 'Guide Local Kilimandjaro' : 'Kilimanjaro Local Guide'}
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

      {/* Main article layout */}
      <section className="py-16 bg-white" data-section="detailed-article">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start transform md:-translate-x-8 lg:-translate-x-12">
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                  <TOC
                    title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                    items={sections.map(s => ({ id: `${s.id}`, label: s.title, level: 2 }))}
                    onSelect={(id: string) => { const sid = id; setExpandedSection(sid) }}
                  />
                </div>

                <div className="space-y-3">
                  {sections.map((s) => (
                    <div key={s.id} className={`bg-white rounded-lg border ${expandedSection === s.id ? 'border-[#00A896] shadow-md' : 'border-gray-100'} p-3`}>
                      <button onClick={() => setExpandedSection(expandedSection === s.id ? null : s.id)} className="text-left w-full">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{s.title}</h4>
                          </div>
                          <div className="ml-3 flex-shrink-0 text-gray-400">{expandedSection === s.id ? '–' : '+'}</div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="flex-1">
                <div className="space-y-6">

                  <div id="intro" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <p className="text-gray-700 leading-relaxed">{t('sections.intro')}</p>
                  </div>

                  <div id="jan-mar" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Janvier à début mars : la saison sèche “chaude”</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.jan_mar')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.jan_mar_additional')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.jan_mar_additional')}</p>
                  </div>

                  <div id="routes-jan" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Pourquoi choisir Machame, Lemosho ou Marangu en janvier à début mars ?</h2>

                    <h3 className="text-xl font-semibold mt-2">Machame : la route “Whiskey” spectaculaire</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.routes_jan.machame')}</p>

                    <h3 className="text-xl font-semibold mt-4">Lemosho : tranquillité et panoramas étendus</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.routes_jan.lemosho')}</p>

                    <h3 className="text-xl font-semibold mt-4">Marangu : la route “Coca-Cola” confortable</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.routes_jan.marangu')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.routes_jan.summary')}</p>
                  </div>

                  <div id="june-oct" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Fin juin à octobre — La grande saison sèche du Kilimandjaro</h2>

                    <p className="text-gray-700 leading-relaxed">{t('sections.june_oct')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.june_oct')}</p>
                  </div>

                  <div id="advice" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Conseils et résumé</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.advice')}</p>
                  </div>

                  <div id="rain" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">La saison des pluies sur le Kilimandjaro</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.rain')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.rain')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">(Note: an English translation for this article is available in `locales/en.json`.)</p>
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
    </div>
  )
}
