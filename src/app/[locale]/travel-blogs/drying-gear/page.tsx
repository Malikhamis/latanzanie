 'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-base md:text-lg text-[#E8F8F5] max-w-3xl">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={t('meta.author')} date={t('meta.date')} readingTime={t('meta.readingTime')} />
        </div>
      </section>

      {/* Mobile TOC (visible on sm screens, below meta) */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => setExpandedSection(id)}
          />
        </div>
      </section>

      <section className="py-16 bg-white" data-section="detailed-article">
        <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start transform md:-translate-x-20 lg:-translate-x-32">
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

      {/* Featured Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {locale === 'fr' ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our best Kilimanjaro routes'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Marangu Route */}
            <Link href={`/${locale}/trips/marangu-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/marangu-route.jpg"
                    alt="Marangu Route"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {locale === 'fr' ? 'À partir de 1 800 €' : 'From $1,800'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">
                    {locale === 'fr' ? 'Route Marangu' : 'Marangu Route'}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'Conquérir le Toit de l\'Afrique : L\'Ascension du Kilimandjaro par la Route Marangu en 5 Jours'
                      : 'Conquer the Roof of Africa: Climbing Kilimanjaro via the Marangu Route in 5 Days'}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'Envie de vous tenir sur le toit de l\'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !'
                      : 'Want to stand on the roof of Africa? Climb Kilimanjaro with us and create unforgettable memories!'}
                  </p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{locale === 'fr' ? '5 jours' : '5 days'}</span>
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                      ★★★★★ <span className="text-gray-600 text-sm">(5.0)</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lemosho Route */}
            <Link href={`/${locale}/trips/lemosho-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/lemosho-route.jpg"
                    alt="Lemosho Route"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {locale === 'fr' ? 'À partir de 2 200 €' : 'From $2,200'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">
                    {locale === 'fr' ? 'Route Lemosho' : 'Lemosho Route'}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'L\'Aventure Panoramique : Itinéraire Lemosho en 7 Jours'
                      : 'The Panoramic Adventure: Lemosho Itinerary in 7 Days'}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'La voie Lemosho est réputée comme l\'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro. Avec un profil d\'acclimatation en 7 jours, cet itinéraire maximise vos chances d\'atteindre le sommet en toute sécurité, traversant cinq zones climatiques différentes'
                      : 'The Lemosho route is renowned as one of the most spectacular itineraries. It offers breathtaking views of the west and south flanks of Kilimanjaro. With a 7-day acclimatization profile, this itinerary maximizes your chances of reaching the summit safely, traversing five different climate zones'}
                  </p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{locale === 'fr' ? '7 jours' : '7 days'}</span>
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                      ★★★★★ <span className="text-gray-600 text-sm">(5.0)</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Umbwe Route */}
            <Link href={`/${locale}/trips/umbwe-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/umbwe-route.jpg"
                    alt="Umbwe Route"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {locale === 'fr' ? 'À partir de 1 900 €' : 'From $1,900'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">
                    {locale === 'fr' ? 'Route Umbwe' : 'Umbwe Route'}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'L\'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)'
                      : 'The Umbwe Itinerary: The Vertical Challenge of Kilimanjaro (6 Days)'}
                  </p>
                  <p className="text-gray-700 mb-4 text-sm">
                    {locale === 'fr' 
                      ? 'Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l\'itinéraire Umbwe est parfait pour les randonneurs expérimentés à la recherche d\'un défi unique et d\'une solitude relative. C\'est un trek intense et direct, exigeant une excellente condition physique et une gestion rigoureuse de l\'altitude.'
                      : 'Often described as the shortest and most challenging route on Kilimanjaro, the Umbwe itinerary is perfect for experienced hikers seeking a unique challenge and relative solitude. It\'s an intense and direct trek, requiring excellent physical condition and rigorous altitude management.'}
                  </p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{locale === 'fr' ? '6 jours' : '6 days'}</span>
                    </span>
                    <span className="flex items-center gap-1 text-red-500">
                      ★★★★☆ <span className="text-gray-600 text-sm">(4.5)</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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