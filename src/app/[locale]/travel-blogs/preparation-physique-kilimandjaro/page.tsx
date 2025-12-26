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

export default function PreparationPhysiqueKilimandjaroPage() {
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
    { id: 'introduction', title: 'Comment s’entraîner pour le Kilimandjaro quand on habite en ville : Guide complet pour réussir votre ascension' },
    { id: 'marche-reguliere', title: 'Marcher régulièrement : la base de l’entraînement' },
    { id: 'renforcement-musculaire', title: 'Renforcer les jambes et le dos : préparer le corps à l’effort' },
    { id: 'cardio', title: 'Travailler le cardio : préparer le cœur et les poumons' },
    { id: 'sac-trek', title: 'S’habituer à porter un sac : simuler le poids du trek' },
    { id: 'altitude', title: 'Préparer le corps à l’altitude' },
    { id: 'mental', title: 'Préparer le mental : un facteur clé' },
    { id: 'programme', title: 'Programme d’entraînement en ville pour gravir le Kilimandjaro – 8 semaines' },
    { id: 'conseils', title: 'Conseils pratiques' }
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
            readingTime="12 min de lecture"
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
                  Comment s’entraîner pour le Kilimandjaro quand on habite en ville : Guide complet pour réussir votre ascension
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Mont Kilimandjaro, le plus haut sommet d’Afrique culminant à 5 895 mètres, est un rêve pour de nombreux voyageurs. Cependant, beaucoup pensent à tort qu’il faut vivre près des montagnes ou être un sportif aguerri pour réussir. La bonne nouvelle, c’est qu’il est tout à fait possible de préparer son corps en ville, sans altitude ni sentiers escarpés, en utilisant des méthodes adaptées et progressives. L’objectif est de préparer votre corps à marcher plusieurs heures chaque jour, à porter un sac et à gérer la fatigue progressive tout en développant l’endurance et la résistance mentale.</p>
                </div>
              </section>

              {/* Marche régulière Section */}
              <section id="marche-reguliere" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Marcher régulièrement : la base de l’entraînement
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La marche est le cœur de votre préparation. Contrairement aux sports de haute intensité, le Kilimandjaro exige une endurance sur plusieurs jours. Vous devez pouvoir marcher 5 à 7 heures chaque jour, souvent sur des terrains variés.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">En ville, vous pouvez simuler cette expérience :</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Escaliers et ponts : Monter et descendre des escaliers reproduit la pente et le mouvement des sentiers. Même quelques étages répétés plusieurs fois par jour font travailler les jambes et le cardio.</li>
                    <li>Balades longues : Commencez avec 1 à 2 heures de marche, puis augmentez progressivement jusqu’à 3 à 5 heures. L’important est de maintenir un rythme modéré et régulier, comme le fameux "pole pole" (doucement, doucement) utilisé sur le Kilimandjaro.</li>
                    <li>Variation de rythme : Alterner marche rapide et lente permet à vos muscles, articulations et système cardiovasculaire de s’adapter à différents efforts.</li>
                  </ul>
                  
                  <p className="mt-4">Cette pratique régulière prépare votre corps à marcher tous les jours, ce qui est fondamental pour l’ascension.</p>
                </div>
              </section>

              {/* Renforcement musculaire Section */}
              <section id="renforcement-musculaire" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Renforcer les jambes et le dos : préparer le corps à l’effort
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Porter un sac léger et marcher plusieurs heures sollicite fortement les jambes et le dos. Les muscles des cuisses, des mollets, du tronc et du dos doivent être capables de supporter la charge sans se fatiguer trop vite.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Vous pouvez travailler ces muscles en ville :</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Squats et fentes : renforcent les cuisses et les fessiers, essentiels pour grimper et descendre des pentes.</li>
                    <li>Montées d’escaliers avec sac : porter un sac léger pendant que vous montez et descendez des escaliers prépare le corps à l’effort du trek.</li>
                    <li>Gainage et abdos : un tronc solide stabilise le dos et aide à maintenir l’équilibre sur les terrains instables.</li>
                  </ul>
                  
                  <p className="mt-4">Ces exercices réduisent le risque de blessures et permettent de marcher plus longtemps sans fatigue excessive.</p>
                </div>
              </section>

              {/* Cardio Section */}
              <section id="cardio" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Travailler le cardio : préparer le cœur et les poumons
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro n’est pas une course, mais votre corps a besoin de capacité cardiovasculaire pour supporter l’effort prolongé, surtout en altitude.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Même en ville, vous pouvez :</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Courir ou faire du jogging 2 à 3 fois par semaine pour améliorer votre souffle et votre endurance.</li>
                    <li>Faire du vélo pour renforcer les jambes tout en travaillant le cœur.</li>
                    <li>Utiliser le step ou le tapis roulant pour simuler les montées et pentes du trek.</li>
                  </ul>
                  
                  <p className="mt-4">L’objectif n’est pas la vitesse, mais la résistance : marcher longtemps sans être essoufflé.</p>
                </div>
              </section>

              {/* Sac de trek Section */}
              <section id="sac-trek" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  S’habituer à porter un sac : simuler le poids du trek
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Pendant l’ascension, vous porterez un sac léger avec vos affaires personnelles. Commencer à porter un sac pendant vos marches longues en ville prépare le dos, les épaules et le tronc à l’effort.</p>
                  <p className="mb-4">Augmentez progressivement le poids et ajustez les sangles pour que le sac soit confortable. Cette habitude permet de prévenir les douleurs et les tensions musculaires le jour de l’ascension.</p>
                </div>
              </section>

              {/* Altitude Section */}
              <section id="altitude" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Préparer le corps à l’altitude
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Même si vous ne pouvez pas reproduire la haute altitude en ville, vous pouvez :</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Préparer votre corps :</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Faire des randonnées le week-end hors de la ville pour simuler des terrains vallonnés.</li>
                    <li>Pratiquer des exercices respiratoires : respirer lentement et profondément améliore la capacité pulmonaire et l’endurance.</li>
                    <li>Maintenir un bon sommeil et une alimentation équilibrée, essentiels pour la récupération et la résistance à la fatigue.</li>
                  </ul>
                  
                  <p className="mt-4">Ces habitudes préparent le corps à mieux gérer le manque d’oxygène sur le Kilimandjaro.</p>
                </div>
              </section>

              {/* Mental Section */}
              <section id="mental" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Préparer le mental : un facteur clé
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro est autant un défi mental que physique. Les journées longues, la fatigue accumulée, le froid et la monotonie peuvent décourager même les plus motivés.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">En ville, vous pouvez entraîner votre mental en :</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Acceptant que certaines marches soient longues et monotones</li>
                    <li>Visualisant chaque jour le sommet que vous atteindrez</li>
                    <li>Pratiquant la patience et la concentration lors des marches longues</li>
                  </ul>
                  
                  <p className="mt-4">Un mental solide vous permettra de suivre le rythme "pole pole", d’écouter les conseils du guide et de surmonter les moments difficiles.</p>
                </div>
              </section>

              {/* Programme Section */}
              <section id="programme" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Programme d’entraînement en ville pour gravir le Kilimandjaro – 8 semaines
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Objectif : Préparer votre corps à marcher plusieurs heures par jour, à porter un sac, à gérer la fatigue et à développer l’endurance nécessaire pour atteindre le sommet Uhuru Peak.</p>
                  <p className="mb-4">Principe : Commencez doucement et augmentez progressivement la durée, l’intensité et la charge pour éviter les blessures et améliorer l’endurance.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Semaine 1–2 : Mise en route</h3>
                  <p className="mb-3">Objectif : Habituer le corps à la marche régulière et au travail musculaire léger.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Jour</th>
                          <th className="py-2 px-4 border-b text-left">Activité</th>
                          <th className="py-2 px-4 border-b text-left">Explication</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Lundi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 45 minutes à rythme modéré + 2 séries de 10 squats et 10 fentes</td>
                          <td className="py-2 px-4 border-b">marcher 45 min prépare les jambes à l’effort continu, les squats et fentes renforcent cuisses et fessiers.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Mardi</strong></td>
                          <td className="py-2 px-4 border-b">Jogging ou vélo 20–30 minutes</td>
                          <td className="py-2 px-4 border-b">améliore l’endurance cardiovasculaire pour mieux respirer en altitude.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Mercredi</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou yoga/stretching 30 min</td>
                          <td className="py-2 px-4 border-b">favorise la récupération musculaire et la souplesse.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Jeudi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1 heure avec un sac léger (2–5 kg) + gainage 2×30 sec</td>
                          <td className="py-2 px-4 border-b">habitue le dos et le tronc à porter un sac.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Vendredi</strong></td>
                          <td className="py-2 px-4 border-b">Escaliers ou step 15–20 min</td>
                          <td className="py-2 px-4 border-b">renforce mollets, cuisses et articulation du genou.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Samedi</strong></td>
                          <td className="py-2 px-4 border-b">Marche longue 1,5–2 heures, rythme "pole pole"</td>
                          <td className="py-2 px-4 border-b">simule l’effort d’une journée de trek et améliore l’endurance.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Dimanche</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou promenade facile 30 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Semaine 3–4 : Progression</h3>
                  <p className="mb-3">Objectif : Augmenter la durée de marche et la charge du sac, renforcer le corps.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Jour</th>
                          <th className="py-2 px-4 border-b text-left">Activité</th>
                          <th className="py-2 px-4 border-b text-left">Explication</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Lundi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1 heure + 3 séries de 12 squats et 12 fentes + gainage 3×30 sec</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Mardi</strong></td>
                          <td className="py-2 px-4 border-b">Jogging 30 min ou vélo 45 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Mercredi</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou yoga/stretching 30–40 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Jeudi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1h15 avec sac léger + montée d’escaliers 10 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Vendredi</strong></td>
                          <td className="py-2 px-4 border-b">Escaliers ou step 20–25 min + exercices abdos 3×15</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Samedi</strong></td>
                          <td className="py-2 px-4 border-b">Marche longue 2,5–3 heures avec sac 4–5 kg</td>
                          <td className="py-2 px-4 border-b">augmente progressivement la durée pour simuler les conditions réelles.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Dimanche</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou promenade facile 30–45 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Semaine 5–6 : Renforcement et endurance avancée</h3>
                  <p className="mb-3">Objectif : Préparer le corps aux journées de marche longues et consécutives.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Jour</th>
                          <th className="py-2 px-4 border-b text-left">Activité</th>
                          <th className="py-2 px-4 border-b text-left">Explication</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Lundi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1h15 + squats/fentes 3×15 + gainage 3×40 sec</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Mardi</strong></td>
                          <td className="py-2 px-4 border-b">Jogging 40 min ou vélo 1 heure</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Mercredi</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou yoga/stretching 40 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Jeudi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1h30 avec sac 5–6 kg + escaliers 15 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Vendredi</strong></td>
                          <td className="py-2 px-4 border-b">Step ou escaliers 25–30 min + abdos 3×20</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Samedi</strong></td>
                          <td className="py-2 px-4 border-b">Marche longue 3,5 heures avec sac 6 kg, terrain varié si possible</td>
                          <td className="py-2 px-4 border-b">simule l’effort réel du trek, prépare les jambes et le mental.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Dimanche</strong></td>
                          <td className="py-2 px-4 border-b">Repos complet ou promenade légère 30 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Semaine 7–8 : Préparation finale et simulation</h3>
                  <p className="mb-3">Objectif : Préparer le corps à l’effort maximal et habituer le mental à la marche prolongée.</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Jour</th>
                          <th className="py-2 px-4 border-b text-left">Activité</th>
                          <th className="py-2 px-4 border-b text-left">Explication</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Lundi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 1h30–1h45 + squats/fentes 3×20 + gainage 3×50 sec</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Mardi</strong></td>
                          <td className="py-2 px-4 border-b">Jogging 45 min ou vélo 1h</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Mercredi</strong></td>
                          <td className="py-2 px-4 border-b">Repos ou yoga/stretching 45 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Jeudi</strong></td>
                          <td className="py-2 px-4 border-b">Marche 2 heures avec sac 6–7 kg + escaliers 20 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Vendredi</strong></td>
                          <td className="py-2 px-4 border-b">Escaliers ou step 30 min + abdos 3×25</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="py-2 px-4 border-b"><strong>Samedi</strong></td>
                          <td className="py-2 px-4 border-b">Marche longue 4–5 heures avec sac 7–8 kg</td>
                          <td className="py-2 px-4 border-b">dernière simulation avant le trek, prépare les jambes, le cardio et le mental.</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b"><strong>Dimanche</strong></td>
                          <td className="py-2 px-4 border-b">Repos complet ou marche très légère 30 min</td>
                          <td className="py-2 px-4 border-b"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Conseils pratiques Section */}
              <section id="conseils" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conseils pratiques
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ul className="list-decimal list-inside text-gray-700 leading-relaxed mt-4 space-y-3">
                    <li><strong>Progressivité :</strong> augmentez toujours la durée et le poids du sac progressivement.</li>
                    <li><strong>Rythme :</strong> marchez toujours à un rythme modéré, similaire au rythme "pole pole" du Kilimandjaro.</li>
                    <li><strong>Hydratation et nutrition :</strong> buvez régulièrement et consommez des encas pour habituer le corps à rester énergique.</li>
                    <li><strong>Variez les terrains :</strong> utilisez escaliers, ponts, parcs ou petites collines pour simuler différents types de terrain.</li>
                    <li><strong>Travail mental :</strong> entraînez-vous à rester concentré et patient lors des marches longues, visualisez le sommet chaque jour.</li>
                  </ul>
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