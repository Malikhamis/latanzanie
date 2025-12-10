 'use client'

import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopReads from '@/components/ui/TopReads'

export default function DressForZonesPage() {
  const locale = useLocale()
  const t = useTranslations('DressForZones')

  const sections = [
    { id: 'intro', title: t('sections.introTitle') },
    { id: 'zone1', title: t('sections.zone1Title') },
    { id: 'zone2', title: t('sections.zone2Title') },
    { id: 'zone3', title: t('sections.zone3Title') },
    { id: 'zone4', title: t('sections.zone4Title') },
    { id: 'zone5', title: t('sections.zone5Title') },
    { id: 'advice', title: t('sections.adviceTitle') }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero6.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium">{t('back')}</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={t('meta.author')} date={t('meta.date')} readingTime={t('meta.readingTime')} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <article id="intro" className="bg-gray-50 rounded-lg shadow-md p-6">
                <p className="text-gray-700 leading-relaxed">{t('sections.intro')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.intro2')}</p>
                <blockquote className="mt-4 p-4 bg-white border-l-4 border-[#00A896] italic">{t('sections.blockquote')}</blockquote>
              </article>

              <article id="zone1" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.zone1Title')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.zone1')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.zone1_2')}</p>
              </article>

              <article id="zone2" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.zone2Title')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.zone2')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.zone2_2')}</p>
              </article>

              <article id="zone3" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.zone3Title')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.zone3')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.zone3_2')}</p>
              </article>

              <article id="zone4" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.zone4Title')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.zone4')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.zone4_2')}</p>
              </article>

              <article id="zone5" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.zone5Title')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.zone5')}</p>
                <p className="text-gray-700 leading-relaxed mt-4">{t('sections.zone5_2')}</p>
              </article>

              <article id="advice" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">{t('sections.adviceTitle')}</h2>
                <p className="text-gray-700 leading-relaxed">{t('sections.advice')}</p>
              </article>

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
