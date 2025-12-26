'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function CheckUpMedicalKilimanjarPage() {
  const locale = 'fr'
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const sections = [
    { id: 'introduction', title: 'Faut-il faire un check-up médical avant l’ascension du Kilimandjaro ?' },
    { id: 'medical-exam', title: 'Pourquoi un check-up médical est essentiel avant l’ascension du Kilimandjaro' },
    { id: 'vaccinations', title: 'Vaccinations recommandées' },
    { id: 'health-conditions', title: 'Conditions de santé nécessitant une consultation médicale avant l’ascension du Kilimandjaro' },
    { id: 'altitude-considerations', title: 'Considérations spécifiques liées à l’altitude' },
    { id: 'conclusion', title: 'Conclusion' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            ← Retour aux blogs
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
                  Faut-il faire un check-up médical avant l'ascension du Kilimandjaro ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est une aventure extraordinaire, mais c'est aussi un défi physique et cardiorespiratoire. Avant de partir, il est fortement recommandé de réaliser un check-up médical complet pour s'assurer que votre corps peut supporter l'altitude et l'effort prolongé. Même les randonnéeurs expérimentés peuvent être surpris par les effets de l'altitude, car le Mal Aigu des Montagnes (MAM) peut toucher tout le monde, indépendamment de la forme physique ou de l'âge.</p>
                </div>
              </section>

              {/* Medical Exam */}
              <section id="medical-exam" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pourquoi un check-up médical est essentiel avant l'ascension du Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Avant de partir pour le Kilimandjaro, un check-up médical complet n'est pas seulement recommandé, il est essentiel pour votre sécurité et votre acclimatation. L'altitude exerce un stress important sur le corps, car l'air contient moins d'oxygène et le cœur, les poumons et d'autres organes doivent travailler plus fort pour compenser cette baisse. Même les randonnéeurs en excellente condition physique peuvent rencontrer des difficultés si leur état de santé n'a pas été évalué.</p>
                  <p className="mb-4">Un bilan médical permet d'abord de détecter des problèmes cardiovasculaires ou respiratoires préexistants. Des conditions comme l'hypertension, des troubles du rythme cardiaque ou l'asthme peuvent compliquer sérieusement l'ascension et augmenter le risque de Mal Aigu des Montagnes (MAM). Identifier ces conditions avant le départ permet de mettre en place des précautions et de déterminer si certaines parties de l'ascension doivent être adaptées.</p>
                  <p className="mb-4">Le check-up aide également à identifier des troubles métaboliques, tels que le diabète ou des déséquilibres hormonaux, qui peuvent compliquer l'acclimatation. En haute altitude, le corps utilise l'énergie différemment et le contrôle de la glycémie, par exemple, devient crucial. Détecter ces conditions à l'avance permet de planifier une alimentation adaptée et un suivi médical si nécessaire.</p>
                  <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-6">
                    {'> '}Conseil du guide local : "Avant de grimper le Kilimandjaro, un check-up complet est votre meilleur allié. Il permet de détecter les problèmes invisibles qui pourraient transformer une aventure extraordinaire en risque sérieux. Mieux vaut prévenir que descendre d'urgence."
                  </blockquote>
                </div>
              </section>

              {/* Vaccinations */}
              <section id="vaccinations" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vaccinations recommandées
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En Tanzanie, certaines vaccinations sont recommandées avant votre voyage. Les vaccinations habituellement recommandées incluent celles contre la fièvre jaune, l'hépatite A et B, la typhoïde, la rage et la méningite. Consultez un centre de santé voyage ou un médecin spécialisé pour un avis personnalisé en fonction de votre historique médical et de la durée de votre séjour.</p>
                  <p className="mb-4">Pour la fièvre jaune, un certificat international de vaccination est exigé si vous arrivez d'une zone d'endémie. La vaccination contre l'hépatite A est recommandée pour tous les voyageurs, car la transmission se fait par voie orale, par l'eau ou les aliments contaminés.</p>
                  <p className="mb-4">En ce qui concerne l'hépatite B, la vaccination est recommandée pour les séjours longs ou en cas de contact possible avec le sang ou les fluides corporels. La vaccination contre la typhoïde est particulièrement utile dans les zones rurales ou pour les randonnées prolongées.</p>
                  <p className="mb-4">Il est important de planifier vos vaccinations 4 à 6 semaines avant le départ, car certaines vaccinations nécessitent plusieurs doses ou doivent être administrées à des intervalles précis pour être efficaces.</p>
                </div>
              </section>

              {/* Health Conditions */}
              <section id="health-conditions" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conditions de santé nécessitant une consultation médicale avant l'ascension du Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est une aventure incroyable, mais c'est aussi un défi pour le corps. L'altitude réduit la quantité d'oxygène disponible et impose un effort supplémentaire au cœur, aux poumons et aux autres organes. Pour cette raison, certaines conditions de santé demandent une attention particulière et une consultation médicale préalable afin de garantir la sécurité du randonnéeur et d'optimiser l'acclimatation.</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Problèmes cardiaques ou pulmonaires : insuffisance cardiaque, asthme sévère, hypertension non contrôlée.</li>
                    <li>Diabète ou autres maladies métaboliques : adaptation de l'alimentation et suivi de la glycémie en altitude.</li>
                    <li>Troubles neurologiques ou épilepsie : risque accru avec l'altitude.</li>
                    <li>Problèmes rénaux ou hépatiques : impact sur l'hydratation et la tolérance à certains médicaments.</li>
                    <li>Grossesse : la haute altitude n'est pas recommandée.</li>
                  </ul>
                  <p className="mb-4">Ces conditions ne sont pas nécessairement des contre-indications à l'ascension, mais elles nécessitent une évaluation médicale approfondie pour déterminer si l'ascension est sûre et comment adapter les conditions de la randonnée.</p>
                  <p className="mb-4">En cas de doute, il est préférable de consulter un médecin spécialisé dans la médecine de l'altitude ou un médecin du sport avant de planifier votre ascension.</p>
                  <p className="mb-4">Le médecin pourra également vous conseiller sur les médicaments préventifs à emporter, comme le Diamox (acetazolamide) pour prévenir le MAM, et vous informer sur les effets potentiels de vos traitements habituels en altitude.</p>
                </div>
              </section>

              {/* Altitude Considerations */}
              <section id="altitude-considerations" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Considérations spécifiques liées à l’altitude
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">L'altitude modifie la façon dont votre corps fonctionne. À mesure que vous montez, l'air devient plus rare et le taux d'oxygène diminue. Cela oblige votre corps à s'adapter en produisant plus de globules rouges et en modifiant votre rythme cardiaque et respiratoire.</p>
                  <p className="mb-4">En haute altitude, votre corps utilise l'énergie différemment. La digestion peut devenir plus lente, et il est important de maintenir une hydratation adéquate. La capacité de votre corps à éliminer les toxines peut aussi être affectée, ce qui peut influencer la façon dont les médicaments sont métabolisés.</p>
                  <p className="mb-4">L'acclimatation est un processus progressif. Votre corps doit s'adapter progressivement à la baisse d'oxygène. Cela peut prendre plusieurs jours, et l'expérience montre que les personnes qui montent lentement ont de meilleures chances de s'acclimater correctement.</p>
                  <p className="mb-4">Il est important de noter que les effets de l'altitude peuvent varier d'une personne à l'autre. Certaines personnes s'acclimatent mieux que d'autres, indépendamment de leur condition physique. Même les sportifs de haut niveau peuvent être affectés par l'altitude.</p>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Un check-up médical avant l'ascension du Kilimandjaro est une étape essentielle pour garantir votre sécurité et votre bien-être. Il permet d'identifier d'éventuels facteurs de risque et de préparer au mieux votre corps à affronter les défis de l'altitude.</p>
                  <p className="mb-4">Même si vous êtes en bonne santé, une consultation médicale vous permettra de partir l'esprit tranquille et de vous concentrer pleinement sur cette aventure exceptionnelle.</p>
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