'use client'

import { Button } from '@/components/ui/button'
import '../../tailgrid.css'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

// Disable static generation for this page
export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/abouthero.jpg"
            alt="About La Tanzanie"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto drop-shadow-md">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Story Section with Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t('story.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                {t('story.heritage.title')}
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p>{t('story.heritage.paragraph1')}</p>
                <p>{t('story.heritage.paragraph2')}</p>
                <p>{t('story.heritage.paragraph3')}</p>
                <p>{t('story.heritage.paragraph4')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="transform rotate-3 shadow-2xl rounded-lg overflow-hidden">
                <Image 
                  src="/images/team-tanzania.jpg" 
                  alt={t('story.imageCaption')}
                  width={600}
                  height={400}
                  className="w-full h-auto" />
              </div>
              <p className="mt-6 text-center text-xl font-semibold text-gray-800 italic">
                {t('story.imageCatchphrase')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('engagement.title')}
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('engagement.paragraph1')}</p>
            <p>{t('engagement.paragraph2')}</p>
            <p>{t('engagement.paragraph3')}</p>
            <p>{t('engagement.paragraph4')}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('values.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {t('values.subtitle')}
            </p>
            <p className="text-2xl font-semibold text-teal-600">
              {t('values.conviction')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Value 1: Heritage */}
            <div className="border-l-4 border-teal-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.heritage.title')}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>{t('values.heritage.paragraph1')}</p>
                <p>{t('values.heritage.paragraph2')}</p>
              </div>
            </div>

            {/* Value 2: Nature */}
            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.nature.title')}
              </h3>
              <p className="text-gray-700">
                {t('values.nature.description')}
              </p>
            </div>

            {/* Value 3: Authenticity */}
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.authenticity.title')}
              </h3>
              <p className="text-gray-700">
                {t('values.authenticity.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('faq.title')}
          </h2>
          
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(num)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {t(`faq.q${num}.question`)}
                  </span>
                  <span className={`transform transition-transform ${openFaq === num ? 'rotate-45' : ''}`}>
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === num && (
                  <div className="px-6 pb-6 text-gray-700">
                    {t(`faq.q${num}.answer`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/kilimanjaro-sunset.jpg" 
            alt="Kilimanjaro"
            fill
            className="object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl mb-2">
            {t('newsletter.subtitle')}
          </p>
          <p className="text-lg mb-8 opacity-90">
            {t('newsletter.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="text"
              placeholder={t('newsletter.firstNamePlaceholder')}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <input
              type="email"
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg whitespace-nowrap"
            >
              {t('newsletter.button')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}