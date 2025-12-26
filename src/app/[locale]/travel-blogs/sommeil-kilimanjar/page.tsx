'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function SommeilKilimanjarPage() {
  const locale = 'fr'
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const sections = [
    { id: 'introduction', title: 'Combien d’heures de sommeil par nuit pour réussir l’ascension du Kilimandjaro ?' },
    { id: 'altitude-effects', title: 'Pourquoi le sommeil est crucial en haute altitude sur le Kilimandjaro' },
    { id: 'sleep-requirements', title: 'Combien d’heures dormir pour rester en forme sur le Kilimandjaro' },
    { id: 'preparation-tips', title: 'Conseils pratiques pour mieux dormir en altitude sur le Kilimandjaro' },
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
            readingTime="6 min"
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
                  Combien d'heures de sommeil par nuit pour réussir l'ascension du Kilimandjaro ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro n'est pas seulement une aventure physique, c'est aussi un véritable défi pour le corps et l'esprit. Entre les longues journées de marche, le froid intense et l'altitude qui réduit l'oxygène disponible, le sommeil devient un facteur essentiel pour la réussite de l'ascension. Beaucoup de randonnéeurs sous-estiment ce point, pensant pouvoir compenser la fatigue par l'effort ou la caféine. En réalité, une bonne nuit de sommeil est cruciale pour l'acclimatation, la récupération et la performance sur le sentier.</p>
                </div>
              </section>

              {/* Altitude Effects */}
              <section id="altitude-effects" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pourquoi le sommeil est crucial en haute altitude sur le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est une expérience unique qui met le corps à l'épreuve. À mesure que l'on gagne en altitude, l'oxygène disponible dans l'air diminue, ce qui oblige le corps à travailler davantage pour alimenter les muscles et le cerveau. Même une marche lente devient plus fatigante, et le corps doit fournir un effort continu pour maintenir ses fonctions vitales. Dans ces conditions, le sommeil n'est pas un luxe : il devient un élément essentiel pour récupérer et s'acclimater correctement.</p>
                  <p className="mb-4">La fatigue s'accumule beaucoup plus vite en altitude. Les journées de marche sont longues et exigeantes, souvent exposées au froid et au vent. Cette combinaison d'efforts physiques constants et de conditions climatiques difficiles épuise rapidement le corps. Sans un repos adéquat, les muscles ne récupèrent pas correctement, le système nerveux reste surchargé et le corps devient plus sensible aux symptômes liés à l'altitude, comme les maux de tête, la nausée ou le manque d'énergie.</p>
                  <p className="mb-4">Le sommeil joue également un rôle majeur dans la prévention du Mal Aigu des Montagnes (MAM). Lorsque le corps ne récupère pas suffisamment la nuit, il peine à s'adapter au manque d'oxygène. Les globules rouges, responsables du transport de l'oxygène, sont produits moins efficacement, ce qui peut provoquer une fatigue accrue, des maux de tête persistants et un risque plus élevé de complications liées à l'altitude. Un sommeil de qualité permet donc au corps de mieux s'acclimater et de maintenir ses performances pendant la journée.</p>
                  <p className="mb-4">En plus de la récupération physique, le sommeil est indispensable pour le fonctionnement du cerveau. Le manque de repos réduit la concentration et la coordination, ce qui augmente les risques d'erreurs ou de chutes sur des sentiers escarpés. Sur le Kilimandjaro, où le terrain peut être exigeant et les conditions changeantes, rester alerte est vital pour la sécurité.</p>
                </div>
              </section>

              {/* Sleep Requirements */}
              <section id="sleep-requirements" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Combien d'heures dormir pour rester en forme sur le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est un défi exigeant, et le sommeil joue un rôle central dans la réussite de l'ascension. Pour un randonnéeur, il est recommandé de dormir entre 7 et 8 heures par nuit. Ce temps de repos n'est pas seulement un moment pour se détendre : il permet au corps de récupérer physiquement, de s'acclimater à l'altitude et de rester performant tout au long de la montée.</p>
                  <p className="mb-4">Pendant le sommeil, le corps profite d'une récupération physique complète. Les muscles fatigués par la marche, le froid et l'effort constant se régénèrent, ce qui réduit les risques de douleurs et d'épuisement. Le système nerveux se repose également, améliorant la concentration et la coordination, essentielles pour évoluer en sécurité sur des sentiers souvent escarpés et exigeants.</p>
                  <p className="mb-4">Le sommeil favorise aussi la production de globules rouges, indispensables pour transporter l'oxygène dans le sang. À haute altitude, où l'air contient moins d'oxygène, cette production est vitale : elle aide le corps à mieux s'acclimater et à réduire les symptômes liés au manque d'oxygène, comme les maux de tête, la fatigue ou les essoufflements.</p>
                  <p className="mb-4">En respectant 7 à 8 heures de sommeil, le randonnéeur optimise son acclimatation. Le corps devient plus efficace pour gérer le stress de l'altitude et les efforts physiques prolongés. Cela permet de marcher plus longtemps, de récupérer correctement chaque jour et de réduire les risques de Mal Aigu des Montagnes (MAM).</p>
                  <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-6">
                    {'> '}Conseil du guide local : "Sur le Kilimandjaro, chaque nuit de sommeil compte autant qu'une bonne journée de marche. Ne sacrifiez jamais vos heures de repos : elles sont votre meilleur allié pour atteindre le sommet en forme et en sécurité."
                  </blockquote>
                </div>
              </section>

              {/* Preparation Tips */}
              <section id="preparation-tips" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conseils pratiques pour mieux dormir en altitude sur le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Dormir en haute altitude sur le Kilimandjaro n'est pas toujours facile. Le manque d'oxygène, le froid et la fatigue accumulée pendant la journée peuvent perturber le sommeil. Pourtant, un repos de qualité est essentiel pour récupérer, rester performant et bien s'acclimater.</p>
                  <p className="mb-4">Voici mes conseils pratiques pour vous aider à mieux dormir chaque nuit.</p>
                  <h3 className="text-xl font-semibold mt-4">1. Respecter une routine de sommeil</h3>
                  <p className="mb-4">Même en camp, essayez de vous coucher et de vous lever à des heures régulières. Votre corps s'adapte mieux lorsqu'il sait quand se reposer et quand se réveiller. Cette régularité facilite l'endormissement, améliore la qualité du sommeil et contribue à une meilleure récupération physique et mentale pour la journée suivante.</p>
                  <h3 className="text-xl font-semibold mt-4">2. Créer un environnement chaud et confortable</h3>
                  <p className="mb-4">Le froid est l'un des principaux facteurs qui perturbent le sommeil en altitude. Utilisez un sac de couchage adapté aux températures extrêmes et superposez des couches de vêtements chauds. Un environnement confortable permet au corps de rester au chaud toute la nuit, favorisant un sommeil profond et réparateur.</p>
                  <h3 className="text-xl font-semibold mt-4">3. Limiter les stimulants</h3>
                  <p className="mb-4">Évitez café, thé ou boissons énergétiques en fin de journée. La caféine et d'autres stimulants peuvent retarder l'endormissement et diminuer la qualité du sommeil, ce qui rend la récupération plus difficile. Préférez des boissons chaudes sans caféine pour vous détendre avant de dormir.</p>
                  <h3 className="text-xl font-semibold mt-4">4. Bien s'hydrater, mais intelligemment</h3>
                  <p className="mb-4">Une bonne hydratation est essentielle pour l'acclimatation et le fonctionnement du corps en altitude. Cependant, il est important de boire intelligemment : quelques gorgées régulières pendant la journée suffisent, mais évitez de boire trop juste avant de dormir pour ne pas être réveillé par des envies fréquentes d'aller aux toilettes.</p>
                  <h3 className="text-xl font-semibold mt-4">5. Écouter votre corps</h3>
                  <p className="mb-4">Si vous sentez la fatigue, ne forcez pas à rester éveillé ou à marcher plus longtemps. Une nuit complète de repos vaut toujours mieux qu'une marche épuisante qui peut compromettre votre acclimatation et augmenter le risque de Mal Aigu des Montagnes (MAM). Respecter votre corps est l'un des meilleurs moyens de réussir l'ascension.</p>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-6">
                    {'> '}Conseil du guide local : "Sur le Kilimandjaro, bien dormir chaque nuit est aussi important que marcher lentement. Un corps reposé récupère mieux, s'acclimate plus facilement et augmente vos chances d'atteindre le sommet en pleine forme."
                  </blockquote>
                  <p className="mb-4">Le sommeil est un allié essentiel pour une ascension réussie du Kilimandjaro. En prenant soin de votre repos, vous optimisez votre acclimatation et votre performance sur le sentier.</p>
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