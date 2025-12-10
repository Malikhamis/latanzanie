 'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopReads from '@/components/ui/TopReads'

export default function DryingGearPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations('DryingGear')

  const sections = [
    { id: 'intro', title: t('sections.introTitle') },
    { id: 'method1', title: t('sections.method1Title') },
    { id: 'method2', title: t('sections.method2Title') },
    { id: 'method3', title: t('sections.method3Title') },
    { id: 'method4', title: t('sections.method4Title') },
    { id: 'method5', title: t('sections.method5Title') },
    { id: 'mistakes', title: t('sections.mistakesTitle') },
    { id: 'conclusion', title: t('sections.conclusionTitle') }
  ]

  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.replace('#', '')
      if (id) setExpandedSection(id)
    }
    handleHash()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero5.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium">{locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}</Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={t('meta.author')} date={t('meta.date')} readingTime={t('meta.readingTime')} />
        </div>
      </section>

      <section className="py-16 bg-white" data-section="detailed-article">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
                <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                  <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={(id: string) => setExpandedSection(id)} />
                </div>
              </aside>

              <div className="flex-1">
                <div className="space-y-6">
                  <article id="intro" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <p className="text-gray-700 leading-relaxed">{t('sections.intro')}</p>
                  </article>

                  <article id="method1" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.method1Title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.method1')}</p>
                  </article>

                  <article id="method2" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.method2Title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.method2')}</p>
                  </article>

                  <article id="method3" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.method3Title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.method3')}</p>
                  </article>

                  <article id="method4" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.method4Title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.method4')}</p>
                  </article>

                  <article id="method5" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.method5Title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.method5')}</p>
                  </article>

                  <article id="mistakes" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.mistakesTitle')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.mistakes')}</p>
                  </article>

                  <article id="conclusion" className="bg-gray-50 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.conclusionTitle')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.conclusion')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4 font-semibold">{t('sections.tip')}</p>
                  </article>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <TopReads title={locale === 'fr' ? 'Lectures Connexes' : 'Related Reads'} locale={locale} posts={[]} />
        </div>
      </section>
    </div>
  )
}
