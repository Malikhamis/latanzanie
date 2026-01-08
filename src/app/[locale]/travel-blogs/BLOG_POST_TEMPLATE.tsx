'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

interface Section {
  id: string
  title: string
}

export default function BlogPostTemplate() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()
  const t = useTranslations('BlogPostNamespace') // Replace with actual namespace

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Define sections for TOC - customize based on blog content
  const sections: Section[] = [
    { id: 'introduction', title: t('sections.introduction.title') },
    { id: 'main-content', title: t('sections.main.title') },
    { id: 'conclusion', title: t('sections.conclusion.title') }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={t('meta.author')}
            date={t('meta.date')}
            readingTime={t('meta.readingTime')}
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }) }}
          />
        </div>
      </section>

      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC
                  title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }) }}
                />
              </div>
            </aside>
            
            <div className="flex-1 space-y-8">
              {/* Introduction Section */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('sections.introduction.title')}
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">{t('sections.introduction.content.1')}</p>
                  <p className="mb-4">{t('sections.introduction.content.2')}</p>
                  <p className="mb-4">{t('sections.introduction.content.3')}</p>
                </div>
              </section>

              {/* Main Content Section */}
              <section id="main-content" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('sections.main.title')}
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">{t('sections.main.content.1')}</p>
                  <p className="mb-4">{t('sections.main.content.2')}</p>
                  <p className="mb-4">{t('sections.main.content.3')}</p>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('sections.conclusion.title')}
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">{t('sections.conclusion.content.1')}</p>
                  <p className="mb-4">{t('sections.conclusion.content.2')}</p>
                </div>
              </section>

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

              {/* Simple CTA block at the end, canonical format */}
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
          </div>
        </div>
      </section>
    </div>
  )
}