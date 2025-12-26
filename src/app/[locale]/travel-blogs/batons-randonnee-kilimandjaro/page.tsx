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

export default function PolesPage() {
  const locale = useLocale()

  const sections: Section[] = [
    { id: 'intro', title: 'Faut-il des bâtons de randonnée pour le Kilimandjaro ?' },
    { id: 'benefices', title: 'Pourquoi les bâtons de randonnée sont essentiels' },
    { id: 'equilibre', title: '1. Réduire la fatigue et protéger les articulations' },
    { id: 'terrains-instables', title: '2. Améliorer l’équilibre sur les terrains instables' },
    { id: 'montee-descente', title: '3. Faciliter la montée et la descente' },
    { id: 'mal-montagnes', title: '4. Aider à prévenir le mal des montagnes' },
    { id: 'choix-batons', title: '5. Conseils pour bien choisir ses bâtons' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero5.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta 
            author={locale === 'fr' ? 'Guide Local' : 'Local Guide'} 
            date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'} 
            readingTime={locale === 'fr' ? '10 min de lecture' : '10 min read'} 
          />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC 
            title={locale === 'fr' ? 'Sommaire' : 'Table of Contents'} 
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={() => {}}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC 
                  title={locale === 'fr' ? 'Sommaire' : 'Table of Contents'} 
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={() => {}}
                />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              {/* Introduction Section */}
              <section id="intro" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Faut-il des bâtons de randonnée pour le Kilimandjaro ? Le point de vue d'un guide local
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Mont Kilimandjaro est une aventure incroyable, mais qui n'est pas sans défis. Même si la montagne n'est pas technique, elle demande plusieurs jours de marche sur des terrains variés : des sentiers boueux de la forêt tropicale aux pentes caillouteuses du sommet enneigé. Dans ce contexte, de nombreux randonneurs se posent la question : faut-il absolument des bâtons de randonnée ?</p>
                  
                  <p className="mb-4">En tant que guide local, j'accompagne chaque saison des randonneurs de tous niveaux et je peux affirmer que les bâtons de randonnée sont bien plus qu'un simple accessoire. Voici pourquoi ils deviennent indispensables sur le Kilimandjaro, et comment les utiliser pour rendre l'ascension plus sûre et plus agréable.</p>
                </div>
              </section>

              {/* Benefices Section */}
              <section id="benefices" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Pourquoi les bâtons de randonnée sont essentiels
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Les bâtons de randonnée sont bien plus qu'un simple accessoire sur le Kilimandjaro. Ils jouent un rôle crucial dans la sécurité, le confort et la réussite de votre ascension. Voici les raisons principales pour lesquelles ils deviennent indispensables :</p>
                </div>
              </section>

              {/* Equilibre Section */}
              <section id="equilibre" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  1. Réduire la fatigue et protéger les articulations
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro implique plusieurs jours de marche avec un dénivelé important, souvent sur des terrains instables ou accidentés. Les bâtons permettent de répartir l'effort entre les jambes et les bras, ce qui réduit la fatigue musculaire et protège les articulations, notamment les genoux et les chevilles.</p>
                  
                  <p className="mb-4">Imaginez une descente longue après une journée de 7 à 8 heures de marche : sans bâtons, vos genoux absorbent tout le poids et le choc de chaque pas. Avec eux, le poids est partiellement transféré aux bras, ce qui allège considérablement la descente et réduit le risque de douleurs ou de blessures.</p>
                </div>
              </section>

              {/* Terrains instables Section */}
              <section id="terrains-instables" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  2. Améliorer l'équilibre sur les terrains instables
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Les sentiers du Kilimandjaro ne sont jamais uniformes. Vous trouverez des zones caillouteuses, glissantes ou boueuses, surtout pendant la saison des pluies. Les bâtons offrent un appui supplémentaire qui stabilise votre corps et vous permet de garder votre équilibre.</p>
                  
                  <p className="mb-4">Ils sont particulièrement utiles sur les pentes raides ou les passages en dévers, où un faux pas pourrait facilement provoquer une chute. Les bâtons deviennent alors un "troisième pied" qui vous soutient et vous aide à avancer en toute sécurité.</p>
                </div>
              </section>

              {/* Montée descente Section */}
              <section id="montee-descente" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  3. Faciliter la montée et la descente
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En montée, les bâtons permettent de pousser avec les bras, ce qui soulage les jambes et économise de l'énergie. En descente, ils absorbent le choc des impacts et réduisent la tension sur les muscles et les articulations.</p>
                  
                  <p className="mb-4">Même sur des terrains relativement plats, utiliser les bâtons par intermittence peut aider à maintenir un rythme constant, ce qui est crucial pour limiter la fatigue et gérer l'effort sur plusieurs jours.</p>
                </div>
              </section>

              {/* Mal des montagnes Section */}
              <section id="mal-montagnes" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  4. Aider à prévenir le mal des montagnes
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le mal des montagnes se produit souvent lorsque l'on monte trop rapidement ou que l'on fournit un effort trop intense. Les bâtons permettent de marcher à un rythme régulier et contrôlé, sans s'essouffler. Cette régularité est essentielle pour aider le corps à s'acclimater progressivement à l'altitude et à réduire les symptômes tels que maux de tête, nausées et fatigue excessive.</p>
                </div>
              </section>

              {/* Choix des bâtons Section */}
              <section id="choix-batons" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  5. Conseils pour bien choisir ses bâtons
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Pour tirer le meilleur parti de vos bâtons, voici quelques conseils pratiques :</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Choisissez des bâtons télescopiques et réglables en hauteur, faciles à ranger et à transporter.</li>
                    <li>Testez-les avant le trek pour vous habituer à marcher avec eux.</li>
                    <li>Vérifiez les embouts selon le terrain : cailloux, boue, neige ou sable.</li>
                    <li>Optez pour des bâtons légers mais robustes, capables de résister à plusieurs heures d'utilisation quotidienne.</li>
                    <li>Pendant les portions plates, vous pouvez les tenir à la main ou les ranger pour économiser vos bras.</li>
                  </ul>
                  
                  <p className="mb-4">En tant que guide local, je recommande toujours de prévoir des bâtons de randonnée dans votre équipement pour garantir une ascension confortable, sûre et réussie.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    Petit conseil de guide : ne sous-estimez jamais l'utilité des bâtons, ils font partie de l'équipement essentiel pour atteindre le sommet dans de bonnes conditions.
                  </blockquote>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt pour une aventure ?</h2>
            <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href={`/${locale}/trips/climb-kilimanjaro/machame-route`} className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="h-48 bg-gray-300 relative overflow-hidden">
                    <Image 
                      src="/images/machame.jpg" 
                      alt="Machame Route" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">À partir de 2 100 €</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">Route Machame</h3>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500">⏱️7 jours</div>
                      <div className="text-yellow-400">★★★★★ (5.0)</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">La route la plus populaire avec des paysages variés</p>
                  <span className="text-blue-600 font-medium group-hover:underline">En savoir plus →</span>
                </div>
              </div>
            </Link>
            
            <Link href={`/${locale}/trips/climb-kilimanjaro/marangu-route`} className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="h-48 bg-gray-300 relative overflow-hidden">
                    <Image 
                      src="/images/marangu.jpg" 
                      alt="Marangu Route" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">À partir de 1 800 €</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">Route Marangu</h3>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500">⏱️6 jours</div>
                      <div className="text-yellow-400">★★★★★ (5.0)</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">La seule route avec des huttes de montagne</p>
                  <span className="text-blue-600 font-medium group-hover:underline">En savoir plus →</span>
                </div>
              </div>
            </Link>
            
            <Link href={`/${locale}/trips/climb-kilimanjaro/lemosho-route`} className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="h-48 bg-gray-300 relative overflow-hidden">
                    <Image 
                      src="/images/lemosho.jpg" 
                      alt="Lemosho Route" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">À partir de 2 200 €</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">Route Lemosho</h3>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500">⏱️8 jours</div>
                      <div className="text-yellow-400">★★★★★ (5.0)</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Scénique et moins fréquentée avec un excellent taux de réussite</p>
                  <span className="text-blue-600 font-medium group-hover:underline">En savoir plus →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
