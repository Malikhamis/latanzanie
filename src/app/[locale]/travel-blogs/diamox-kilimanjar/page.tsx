'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function DiamoxKilimanjarPage() {
  // const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const locale = useLocale()
  const t = useTranslations('DiamoxKilimanjar')

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'intro', title: t('sections.introTitle') },
    { id: 'role-diamox', title: t('sections.role_diamox_title') },
    { id: 'quand-commencer', title: t('sections.quand_commencer_title') },
    { id: 'dosage', title: t('sections.dosage_title') },
    { id: 'conclusion', title: t('sections.conclusion_title') }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}>
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
            onSelect={() => {}}
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
                    onSelect={() => {}}
                  />
                </div>
              </aside>

              <div className="flex-1">
                <div className="space-y-6">

                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      {t('title')}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                      {t('subtitle')}
                    </p>
                  </div>

                  <div id="intro" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <p className="text-gray-700 leading-relaxed">{t('sections.intro')}</p>
                  </div>

                  <div id="role-diamox" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.role_diamox_title')}</h2>

                    <p className="text-gray-700 leading-relaxed">{t('sections.role_diamox_intro')}</p>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.role_diamox_explanation')}</p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Les maux de tête persistants, causés par le manque d&apos;oxygène au cerveau</li>
                      <li>La fatigue intense, qui ralentit vos pas et augmente le risque de chute</li>
                      <li>Les nausées, fréquentes en altitude, qui peuvent réduire l&apos;appétit et l&apos;énergie</li>
                      <li>Les troubles du sommeil, comme l&apos;insomnie ou les réveils fréquents, qui compliquent la récupération</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-4">{t('sections.role_diamox_note')}</p>

                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Monter lentement, en suivant le rythme "Pole Pole"</li>
                      <li>S&apos;hydrater régulièrement, environ 3 à 4 litres d&apos;eau par jour</li>
                      <li>Bien dormir et récupérer, pour que le corps s&apos;adapte progressivement</li>
                      <li>Suivre le principe "monter haut, dormir bas", pour stimuler l&apos;acclimatation sans mettre le corps en danger</li>
                    </ul>
                  </div>

                  <div id="quand-commencer" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.quand_commencer_title')}</h2>

                    <p className="text-gray-700 leading-relaxed">{t('sections.quand_commencer_intro')}</p>

                    <div className="space-y-4 mt-6">
                      <div>
                        <h3 className="text-xl font-semibold">1. 24 à 48 heures avant le départ</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">Prendre le Diamox avant le début de l'ascension permet au corps de s'adapter progressivement à l'altitude. Cela prépare la respiration et le système sanguin à mieux oxygéner le corps lorsque vous commencerez la montée.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">2. Pendant les premiers jours de montée</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">Le Diamox est souvent poursuivi pendant les premières étapes de l'ascension, selon la prescription médicale. Cette période est critique, car c'est lorsque le corps subit les plus grands changements d'altitude et que le risque de symptômes du MAM est le plus élevé.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">3. Durée du traitement</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">La durée exacte dépend du protocole prescrit par votre médecin et de votre rythme de montée. Certains trekkeurs l'utilisent uniquement les premiers jours, tandis que d'autres le poursuivent jusqu'à ce que le corps soit bien acclimaté.</p>
                      </div>
                    </div>
                  </div>

                  <div id="dosage" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">{t('sections.dosage_title')}</h2>

                    <p className="text-gray-700 leading-relaxed">{t('sections.dosage_intro')}</p>

                    <h3 className="text-xl font-semibold mt-4">Dosage habituel pour la prévention du MAM</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.dosage_habituel')}</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                      <li>125 à 250 mg deux fois par jour : c'est la dose la plus fréquemment prescrite pour prévenir le MAM pendant les premières étapes de l'ascension.</li>
                      <li>250 mg une fois par jour : certaines personnes peuvent utiliser cette dose unique, selon leur tolérance et la recommandation de leur médecin.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">Pourquoi le dosage doit être personnalisé</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.dosage_personnalise')}</p>

                    <h3 className="text-xl font-semibold mt-4">À retenir</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">{t('sections.dosage_retenir')}</p>
                  </div>

                  <div id="conclusion" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-4">
                      {t('sections.conseil_guide')}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical route cards section (full parity with preparer-son-corps-altitude-kilimandjaro) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
            <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
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
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
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
  )
}