'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function AlimentationKilimanjarPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations('AlimentationKilimanjar')

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'intro', title: t('sections.introTitle') },
    { id: 'pourquoi-appetit', title: t('sections.pourquoi_appetit_title') },
    { id: 'glucides-energie', title: t('sections.glucides_energie_title') },
    { id: 'repas-simples', title: t('sections.repas_simples_title') },
    { id: 'proteines-moderation', title: t('sections.proteines_moderation_title') },
    { id: 'soupes-chaudes', title: t('sections.soupes_chaudes_title') },
    { id: 'repas-fractionnes', title: t('sections.repas_fractionnes_title') },
    { id: 'conclusion', title: t('sections.conclusion_title') }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/alimentation.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
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
            onSelect={(id: string) => { const sectionId = id.replace('-detail',''); setExpandedSection(sectionId) }}
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
                    onSelect={(id: string) => { const sid = id; setExpandedSection(sid) }}
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
                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-4">
                      {t('sections.conseil_intro')}
                    </blockquote>
                  </div>

                  <div id="pourquoi-appetit" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.pourquoi_appetit_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.pourquoi_appetit')}</p>
                  </div>

                  <div id="glucides-energie" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.glucides_energie_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.glucides_energie')}</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>riz, pâtes, pommes de terre</li>
                      <li>pain, chapati, galettes</li>
                      <li>porridge, flocons d'avoine</li>
                      <li>fruits riches en sucres naturels comme la banane ou la pomme</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.glucides_energie_note')}</p>
                  </div>

                  <div id="repas-simples" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.repas_simples_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.repas_simples')}</p>
                  </div>

                  <div id="proteines-moderation" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.proteines_moderation_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.proteines_moderation')}</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>œufs</li>
                      <li>poulet ou viande maigre</li>
                      <li>lentilles ou haricots</li>
                      <li>soupe enrichie</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.proteines_moderation_note')}</p>
                  </div>

                  <div id="soupes-chaudes" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.soupes_chaudes_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.soupes_chaudes')}</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>facile à consommer même sans appétit</li>
                      <li>hydrate en même temps qu'elle nourrit</li>
                      <li>apporte des sels minéraux</li>
                      <li>réchauffe le corps</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.soupes_chaudes_note')}</p>
                  </div>

                  <div id="repas-fractionnes" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.repas_fractionnes_title')}</h2>
                    <p className="text-gray-700 leading-relaxed">{t('sections.repas_fractionnes')}</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>biscuits énergétiques</li>
                      <li>fruits secs</li>
                      <li>barres de céréales</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.repas_fractionnes_note')}</p>
                  </div>

                  {/* ...existing code... */}

                  <div id="conclusion" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6 mt-12">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.conclusion_title')}</h2>
                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-4">
                      {t('sections.conseil_conclusion')}
                    </blockquote>
                  </div>

                  {/* Canonical route cards section (after notes) */}
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
                </div>
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
          <h3 className="text-2xl font-bold mb-6">{locale === 'fr' ? "Rejoignez-nous pour l'aventure" : 'Join us for the adventure'}</h3>
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