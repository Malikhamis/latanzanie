'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function AcclimatationKilimanjarPage() {
  const locale = 'fr'
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const sections = [
    { id: 'introduction', title: 'Pole Pole" et "Monter haut, dormir bas" : Comment bien s\'acclimater sur le Kilimandjaro' },
    { id: 'pole-pole', title: 'Pole Pole" : Avancer lentement pour protéger votre santé' },
    { id: 'monter-dormir', title: 'Monter haut, dormir bas" : Optimiser la récupération nocturne' },
    { id: 'conclusion', title: 'Conclusion' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}>
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
            author="Guide Local"
            date="2024"
            readingTime="5 min"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title="Sommaire"
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
                  title="Sommaire"
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }) }}
                />
              </div>
            </aside>
            <div className="flex-1 space-y-8">
              {/* Introduction */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pole Pole" et "Monter haut, dormir bas" : Comment bien s'acclimater sur le Kilimandjaro
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est bien plus qu'une simple randonnée : c'est un véritable défi pour le corps. L'<Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link> impose des contraintes physiologiques importantes, car l'oxygène se fait plus rare à mesure que l'on monte. Pour un randonnéeur, atteindre le sommet en toute sécurité ne dépend pas seulement de la <Link href={`/${locale}/travel-blogs/niveau-physique-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">force physique</Link>, mais surtout de la capacité du corps à s'acclimater progressivement.</p>
                  <p className="mb-4">Le <Link href={`/${locale}/travel-blogs/sante-en-altitude`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Mal Aigu des Montagnes (MAM)</Link> peut survenir rapidement si l'acclimatation est insuffisante, entraînant des maux de tête, fatigue intense, nausées ou essoufflement. Pour réduire ces risques et maximiser les chances de succès, deux principes simples mais essentiels sont appliqués sur toutes mes ascensions : "Pole Pole" et "monter haut, dormir bas".</p>
                  <p className="mb-4">L'acclimatation est un processus qui nécessite du temps et de la patience.</p>
                </div>
              </section>

              {/* Pole Pole */}
              <section id="pole-pole" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pole Pole" : Avancer lentement pour protéger votre santé
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Pole Pole", qui signifie lentement, doucement en swahili, est bien plus qu'une expression : c'est une règle de sécurité en haute <Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link>.</p>
                  <p className="mb-4">Monter trop rapidement empêche le corps de s'adapter au manque d'oxygène. Les muscles, le cerveau et le cœur sont alors soumis à un stress important, ce qui augmente le risque de <Link href={`/${locale}/travel-blogs/sante-en-altitude`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">MAM</Link>. À l'inverse, un rythme lent et régulier permet au corps de produire progressivement plus de globules rouges, essentiels pour transporter l'oxygène.</p>
                  <p className="mb-4">Avantages du rythme "Pole Pole" :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Réduction de la fatigue et de l'essoufflement</li>
                    <li>Diminution du risque de maux de tête et nausées</li>
                    <li>Meilleure régulation de la respiration et du rythme cardiaque</li>
                  </ul>
                  <p className="mb-4">Conseil pratique : Faites de petites pauses fréquentes, observez votre respiration et écoutez les signaux de votre corps. Même si le rythme semble lent, il augmente considérablement vos chances de succès sur le Kilimandjaro.</p>
                </div>
              </section>

              {/* Monter haut, dormir bas */}
              <section id="monter-dormir" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Monter haut, dormir bas" : Optimiser la récupération nocturne
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Ce principe consiste à gravir une <Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link> plus élevée pendant la journée puis redescendre pour dormir. L'exposition temporaire à une altitude supérieure stimule l'adaptation du corps, tandis que le sommeil à une altitude plus basse permet une récupération optimale avec plus d'oxygène disponible.</p>
                  <p className="mb-4">Exemple concret : Monter à 4,000 mètres pendant la journée, puis redescendre à 3,200 mètres pour passer la nuit.</p>
                  <p className="mb-4">Bénéfices :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Stimulation de la production de globules rouges</li>
                    <li>Réduction du risque de MAM sévère</li>
                    <li>Sommeil plus réparateur pour mieux récupérer et continuer l'ascension</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">L'acclimatation est la clé du succès lors de l'ascension du Kilimandjaro. En respectant les principes de "Pole Pole" et "monter haut, dormir bas", vous augmentez considérablement vos chances d'atteindre le sommet en bonne santé.</p>
                  <p className="mb-4">Souvenez-vous que chaque montée est unique, et que votre corps réagit différemment selon les conditions. Écoutez vos signaux corporels et adaptez-vous en conséquence.</p>
                </div>
              </section>

              {/* Canonical route cards section (after notes) */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt pour une aventure ?</h2>
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
                  <h2 className="text-2xl font-semibold mb-4">Prêt à commencer ?</h2>
                  <h3 className="text-2xl font-bold mb-6">Rejoignez-nous pour l'aventure</h3>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">Contactez-nous pour en savoir plus sur nos routes</p>
                  <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
                    />
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
                    />
                    <button className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
                      S'abonner
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