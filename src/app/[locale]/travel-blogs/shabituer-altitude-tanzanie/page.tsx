'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

interface Section {
  id: string
  title: string
}

export default function ShabituerAltitudeTanzaniePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()
  // Hardcoded French content for the page

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

  // Define sections for TOC with hardcoded French titles
  const sections: Section[] = [
    { id: 'introduction', title: 'Peut-on s’habituer à l’altitude avant de partir en Tanzanie ?' },
    { id: 'comprendre-acclimatation', title: 'Qu’est-ce que l’acclimatation à l’altitude ?' },
    { id: 'respiration', title: 'La respiration devient plus rapide et plus profonde' },
    { id: 'coeur', title: 'Le cœur travaille davantage' },
    { id: 'globules-rouges', title: 'La production de globules rouges augmente' },
    { id: 'effort-physique', title: 'L’effort physique devient plus lent et plus fatigant' },
    { id: 'ce-quon-ne-peut-pas-faire', title: 'Ce que l’on NE peut PAS faire avant de partir pour le Kilimandjaro' },
    { id: 'manque-oxygene', title: 'On ne peut pas habituer le corps au manque d’oxygène sans altitude réelle' },
    { id: 'sport-intensif', title: 'Le sport intensif ne protège pas contre le mal des montagnes' },
    { id: 'personnes-sportives', title: 'Les personnes très sportives ne sont pas forcément avantagées' },
    { id: 'complements', title: 'Les compléments alimentaires ne remplacent pas l’acclimatation' },
    { id: 'conseil-guide', title: 'Conseil de guide' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author="Guide Local Kilimandjaro"
            date="Décembre 2025"
            readingTime="10 min de lecture"
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
                  Peut-on s’habituer à l’altitude avant de partir en Tanzanie ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Avant de tenter l’ascension du Mont Kilimandjaro (5 895 m), beaucoup de voyageurs se posent une question essentielle : est-il possible de s’habituer à l’altitude avant même d’arriver en Tanzanie ?</p>
                  <p className="mb-4">Cette question est légitime, car l’altitude représente le principal défi du Kilimandjaro, bien plus que la difficulté physique. Pourtant, de nombreuses idées reçues circulent à ce sujet. En tant que guide local, il est important de donner une réponse honnête et réaliste.</p>
                  <p className="mb-4">👉 Non, on ne peut pas réellement s’acclimater à l’altitude sans être en altitude.<br/>👉 Oui, on peut préparer son corps et son mental pour mieux réagir une fois sur la montagne.</p>
                  <p className="mb-4">Comprendre cette différence permet d’éviter des erreurs fréquentes et d’augmenter considérablement les chances d’atteindre le sommet.</p>
                </div>
              </section>

              {/* Comprendre l'acclimatation Section */}
              <section id="comprendre-acclimatation" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Qu’est-ce que l’acclimatation à l’altitude ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">L’acclimatation est un processus naturel par lequel le corps humain s’adapte progressivement au manque d’oxygène en altitude. Sur le Kilimandjaro, ce processus est absolument crucial, car il détermine si vous pourrez atteindre le sommet en toute sécurité ou si vous risquez le mal aigu des montagnes.</p>
                  <p className="mb-4">Contrairement à ce que beaucoup pensent, l’acclimatation ne se fait pas en quelques heures, et elle ne dépend pas uniquement de votre niveau sportif. Même un athlète très entraîné doit respecter les étapes de montée progressive pour que son corps s’adapte correctement.</p>
                </div>
              </section>

              {/* Respiration Section */}
              <section id="respiration" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  La respiration devient plus rapide et plus profonde
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En altitude, l’air contient moins d’oxygène que celui que l’on respire au niveau de la mer. Pour compenser ce manque, le corps augmente la fréquence et la profondeur de la respiration. Cela permet d’apporter plus d’oxygène au sang.</p>
                  <p className="mb-4">Cette adaptation est essentielle, mais elle a aussi des conséquences : vous pouvez vous sentir essoufflé plus rapidement, surtout si vous essayez de marcher à un rythme trop rapide. C’est pourquoi le rythme "pole pole" (lent et régulier) est indispensable sur le Kilimandjaro.</p>
                </div>
              </section>

              {/* Coeur Section */}
              <section id="coeur" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Le cœur travaille davantage
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Pour distribuer l’oxygène dans tout le corps, le cœur doit travailler plus fort et battre plus vite. Cette augmentation du rythme cardiaque permet aux muscles et aux organes de continuer à fonctionner malgré la baisse d’oxygène.</p>
                  <p className="mb-4">C’est une des raisons pour lesquelles vous pouvez ressentir une fatigue plus importante, même lors d’efforts modérés. Le corps apprend progressivement à gérer cette contrainte, mais il faut laisser le temps à ces adaptations de se mettre en place.</p>
                </div>
              </section>

              {/* Globules rouges Section */}
              <section id="globules-rouges" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  La production de globules rouges augmente
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Avec le temps, le corps commence à produire davantage de globules rouges, qui sont responsables du transport de l’oxygène dans le sang. Cette adaptation est plus lente et se produit sur plusieurs jours, pas immédiatement.</p>
                  <p className="mb-4">C’est pourquoi les itinéraires longs et progressifs du Kilimandjaro sont plus efficaces pour réussir le sommet : ils donnent au corps le temps nécessaire pour augmenter sa capacité à transporter l’oxygène.</p>
                </div>
              </section>

              {/* Effort physique Section */}
              <section id="effort-physique" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  L’effort physique devient plus lent et plus fatigant
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Toutes ces adaptations combinées signifient que votre corps fonctionne différemment en altitude. Même si vous êtes en bonne forme, vous vous sentez plus fatigué et moins rapide que d’habitude. Les muscles reçoivent moins d’oxygène et l’endurance est réduite.</p>
                  <p className="mb-4">C’est exactement la raison pour laquelle la patience et le rythme lent sont cruciaux : le corps apprend progressivement à gérer l’effort avec moins d’oxygène, étape par étape.</p>
                </div>
              </section>

              {/* Ce qu'on ne peut pas faire Section */}
              <section id="ce-quon-ne-peut-pas-faire" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ce que l’on NE peut PAS faire avant de partir pour le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Avant de gravir le Mont Kilimandjaro, il est essentiel de comprendre ce que votre corps ne peut pas anticiper. Beaucoup de voyageurs pensent que leur condition physique ou certains compléments peuvent les protéger de l’altitude, mais ce n’est pas le cas. En tant que guide local, il est important de clarifier ces idées reçues pour éviter des erreurs qui peuvent coûter cher en sécurité et en réussite.</p>
                </div>
              </section>

              {/* Manque d'oxygène Section */}
              <section id="manque-oxygene" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  On ne peut pas habituer le corps au manque d’oxygène sans altitude réelle
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">L’acclimatation est un processus physiologique qui se déclenche uniquement lorsque le corps est exposé à un air contenant moins d’oxygène. Tant que vous vivez au niveau de la mer ou en ville, votre corps ne reçoit aucun signal pour s’adapter.</p>
                  <p className="mb-4">Même des semaines de marche, de course ou d’endurance en ville ne permettent pas de « simuler » cette adaptation. C’est la montagne elle-même qui entraîne le corps à mieux gérer l’altitude.</p>
                </div>
              </section>

              {/* Sport intensif Section */}
              <section id="sport-intensif" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Le sport intensif ne protège pas contre le mal des montagnes
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Beaucoup de voyageurs pensent que courir un marathon ou suivre un entraînement intensif les rendra invincibles en altitude. En réalité, la condition physique générale ne protège pas du mal aigu des montagnes. Le corps peut être en excellente forme, mais sans acclimatation réelle, il peut souffrir de maux de tête, nausées, vertiges et fatigue extrême dès 3 000–4 000 mètres.</p>
                  <p className="mb-4">C’est pourquoi le rythme lent et régulier, le respect des journées d’acclimatation et l’expérience du guide sont beaucoup plus efficaces pour réussir le sommet que la simple force physique.</p>
                </div>
              </section>

              {/* Personnes sportives Section */}
              <section id="personnes-sportives" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Les personnes très sportives ne sont pas forcément avantagées
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Paradoxalement, certains sportifs très entraînés échouent plus souvent que des personnes moins sportives. Pourquoi ? Parce qu’ils ont tendance à marcher trop vite, à vouloir maintenir un rythme soutenu, ou à ignorer les signaux de leur corps.</p>
                  <p className="mb-4">Le corps a besoin de temps pour s’adapter au manque d’oxygène, et aller trop vite peut compromettre l’acclimatation, même chez les meilleurs athlètes.</p>
                </div>
              </section>

              {/* Compléments Section */}
              <section id="complements" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Les compléments alimentaires ne remplacent pas l’acclimatation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Beaucoup pensent que des pilules, des suppléments ou des boissons enrichies peuvent aider à s’adapter à l’altitude avant le départ. Malheureusement, aucun produit ne remplace le processus naturel d’acclimatation. Ces produits peuvent éventuellement soulager certains symptômes ou soutenir l’énergie, mais ils ne font pas évoluer la physiologie du corps.</p>
                  <p className="mb-4">La seule manière de véritablement s’acclimater reste la montée progressive en altitude, avec des étapes bien planifiées et un rythme adapté.</p>
                </div>
              </section>

              {/* Conseil du guide Section */}
              <section id="conseil-guide" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conseil de guide
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Même les sportifs les plus entraînés peuvent échouer sur le Kilimandjaro s’ils sous-estiment l’altitude. Comprendre ce que l’on ne peut pas faire avant le départ est essentiel pour réussir. Suivez ces conseils : préparez votre corps et votre mental, respectez le rythme "pole pole", écoutez votre guide et privilégiez la patience plutôt que la vitesse. Avec cette approche, l’ascension devient beaucoup plus sûre, confortable et gratifiante.</p>
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