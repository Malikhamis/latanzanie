// Sanitized and reserialized file to remove possible unterminated regexp or stray characters
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function SanteEnAltitudePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations('SanteEnAltitude')

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'intro', title: t('sections.introTitle') },
    { id: 'what-is-ams', title: t('sections.what_is_ams_title') },
    { id: 'symptoms-early', title: t('sections.symptoms_early_title') },
    { id: 'symptoms-moderate', title: t('sections.symptoms_moderate_title') },
    { id: 'prevention', title: t('sections.prevention_title') },
    { id: 'practical-tips', title: t('sections.practical_title') }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section
        className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40"
        style={{ backgroundImage: "url('/images/hero4.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <Link
            href={`/${locale}/travel-blogs`}
            className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft"
          >
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={t('meta.author')}
            date={t('meta.date')}
            readingTime={t('meta.readingTime')}
          />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: `${s.id}-detail`, label: s.title, level: 2 }))}
            onSelect={(id: string) => {
              const sectionId = id.replace('-detail', '')
              setExpandedSection(sectionId)
            }}
          />
        </div>
      </section>

      <section className="py-16 bg-white" data-section="detailed-article">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              <aside className="hidden md:block md:w-56 lg:w-64 sticky top-24 self-start transform md:-translate-x-32 lg:-translate-x-48">
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                  <TOC
                    title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                    items={sections.map(s => ({ id: `${s.id}`, label: s.title, level: 2 }))}
                    onSelect={(id: string) => {
                      const sid = id
                      setExpandedSection(sid)
                    }}
                  />
                </div>
              </aside>

              <div className="flex-1">
                <div className="space-y-6">
                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {t('title')}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl">{t('subtitle')}</p>
                  </div>

                  <div id="intro" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <p className="text-gray-700 leading-relaxed">{t('sections.intro')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.intro2')}</p>
                  </div>

                  <div id="what-is-ams" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.what_is_ams_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.what_is_ams_1')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.what_is_ams_2')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.what_is_ams_3')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.what_is_ams_4')}</p>
                  </div>

                  <div id="symptoms-early" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.symptoms_early_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.symptoms_intro')}</p>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.symptom_headache')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.symptom_headache_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.symptom_headache')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.symptom_fatigue_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.symptom_fatigue')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.symptom_sleep_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.symptom_sleep')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.symptom_appetite_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.symptom_appetite')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.symptom_nausea_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.symptom_nausea')}</p>

                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-4">{t('sections.guide_mantra')}</blockquote>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.symptoms_conclusion', { default: '' }) || t('sections.symptoms_intro')}</p>
                  </div>

                  <div id="symptoms-moderate" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.symptoms_moderate_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.symptoms_moderate_intro')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_headache_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_headache')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_vomit_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_vomit')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_breathless_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_breathless')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_balance_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_balance')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_chest_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_chest')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.mod_confusion_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.mod_confusion')}</p>
                  </div>

                  <div id="prevention" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.prevention_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.prevention_intro')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_pole_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_pole')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_hydration_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_hydration')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_sleep_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_sleep')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_diamox_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_diamox')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_listen_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_listen')}</p>

                    <h3 className="text-xl font-semibold mt-4">{t('sections.prevention_sleep_recovery_title')}</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.prevention_sleep_recovery')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.prevention_conclusion')}</p>
                  </div>

                  <div id="practical-tips" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.practical_title')}</h2>
                    <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                      <li className="mt-2">{t('sections.tip1')}</li>
                      <li className="mt-2">{t('sections.tip2')}</li>
                      <li className="mt-2">{t('sections.tip3')}</li>
                      <li className="mt-2">{t('sections.tip4')}</li>
                      <li className="mt-2">{t('sections.tip5')}</li>
                      <li className="mt-2">{t('sections.tip6')}</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.conclusion')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
            <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 1 800 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️5 jours</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours</p>
                <p className="text-gray-600 text-sm mb-4">Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !</p>
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 2 200 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️7 jours</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours</p>
                <p className="text-gray-600 text-sm mb-4">La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro.</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 1 900 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️6 jours</div>
                    <div className="text-yellow-400">★★★★☆ (4.5)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)</p>
                <p className="text-gray-600 text-sm mb-4">Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés.</p>
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/kilimanjaro-summit.jpg" alt="Kilimanjaro background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{locale === 'fr' ? 'Prêt à commencer ?' : 'Ready to begin?'}</h2>
          <h3 className="text-2xl font-bold mb-6">{locale === 'fr' ? 'Rejoignez-nous pour l\'aventure' : 'Join us for the adventure'}</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">{locale === 'fr' ? 'Contactez-nous pour en savoir plus sur nos routes' : 'Contact us to learn more about our routes'}</p>
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
