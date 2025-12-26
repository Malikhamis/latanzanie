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

export default function ForgottenItemsPage() {
  const locale = useLocale()

  const sections: Section[] = [
    { id: 'intro', title: 'Les Objets Souvent Oubliés dans une Packing List pour le Kilimandjaro' },
    { id: 'lampe-frontale', title: 'Lampe frontale et piles supplémentaires : ne partez jamais dans l’obscurité' },
    { id: 'batons', title: 'Bâtons de randonnée : vos alliés pour l’ascension' },
    { id: 'protections-humidite', title: 'Protéger vos affaires de l’humidité : sacs étanches et guêtres' },
    { id: 'lunettes-creme', title: 'Lunettes de soleil UV et crème solaire : la protection indispensable' },
    { id: 'bouteille-pipi', title: 'Bouteille pipi ou urinoir portable : le confort nocturne' },
    { id: 'thermos', title: 'Thermos ou gourde isotherme : boire chaud en altitude' },
    { id: 'trousse-medicale', title: 'Trousse médicale adaptée à l’altitude' },
    { id: 'buff-bonnet', title: 'Buff, bonnet et gants supplémentaires : protéger vos extrémités' },
    { id: 'electroniques', title: 'Chargeurs, batteries externes et protections électroniques' },
    { id: 'snacks', title: 'Snacks et compléments énergétiques' }
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
            readingTime={locale === 'fr' ? '15 min de lecture' : '15 min read'} 
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
                  Les Objets Souvent Oubliés dans une Packing List pour le Kilimandjaro : Guide Complet d'un Guide Local
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Mont Kilimandjaro est une aventure unique dans une vie. Entre les forêts tropicales, les zones semi-désertiques et les paysages enneigés du sommet, chaque randonneur traverse plusieurs climats en quelques jours seulement. Même les plus expérimentés peuvent oublier certains objets essentiels, et ces oublis peuvent transformer une ascension confortable en une expérience épuisante, voire dangereuse.</p>
                  
                  <p className="mb-4">En tant que guide local, j'ai accompagné des centaines de randonneurs et j'ai remarqué que certains objets, pourtant simples et légers, sont souvent négligés. Pourtant, ce sont eux qui font la vraie différence sur la montagne. Dans cet article, je vous explique en détail ce qu'il ne faut jamais oublier, pourquoi ces objets sont indispensables et comment les utiliser pour réussir votre ascension.</p>
                </div>
              </section>

              {/* Lampe frontale Section */}
              <section id="lampe-frontale" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Lampe frontale et piles supplémentaires : ne partez jamais dans l'obscurité
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Beaucoup de randonneurs pensent que la lumière naturelle suffira, mais la montée finale vers le sommet commence souvent entre 23h et minuit pour atteindre le lever du soleil au sommet. Sans lampe frontale, vous serez obligé de marcher dans l'obscurité sur des sentiers rocheux et parfois glissants. Cela augmente considérablement le risque de chute et de blessure.</p>
                  
                  <p className="mb-4">Une lampe frontale de qualité, légère et confortable à porter, est indispensable. Prévoyez également des piles de rechange ou une batterie externe, car la nuit en altitude peut durer longtemps et l'éclairage est vital. Tester votre lampe avant le départ est crucial pour éviter les mauvaises surprises.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    Conseil de guide : gardez toujours votre lampe frontale dans votre sac de jour pour pouvoir l'utiliser en cas de pauses ou d'imprévus.
                  </blockquote>
                </div>
              </section>

              {/* Bâtons Section */}
              <section id="batons" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Bâtons de randonnée : vos alliés pour l'ascension
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Les bâtons sont souvent sous-estimés, pourtant ils sont essentiels pour économiser votre énergie et protéger vos articulations. Sur les sentiers du Kilimandjaro, ils permettent de :</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Réduire la fatigue des jambes et des genoux, surtout à la descente.</li>
                    <li>Maintenir l'équilibre sur les terrains instables ou boueux.</li>
                    <li>Faciliter la montée sur les pentes raides et la descente sur des sols glissants.</li>
                  </ul>
                  
                  <p className="mb-4">Même les randonneurs très en forme ressentent immédiatement la différence. Les bâtons permettent de conserver un rythme régulier et de limiter le risque de blessure.</p>
                </div>
              </section>

              {/* Protections humidité Section */}
              <section id="protections-humidite" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Protéger vos affaires de l'humidité : sacs étanches et guêtres
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">L'humidité est l'ennemi silencieux du randonneur. Beaucoup oublient des objets essentiels :</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Sacs étanches pour protéger les vêtements et le matériel électronique.</li>
                    <li>Guêtres pour empêcher la boue et l'eau de pénétrer dans les chaussures.</li>
                    <li>Housse imperméable pour le sac à dos.</li>
                  </ul>
                  
                  <p className="mb-4">Sans ces protections, vos affaires peuvent être trempées par la pluie, la rosée ou la condensation, ce qui peut provoquer froid, fatigue et hypothermie.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    Conseil de guide : testez vos sacs étanches et housses avant le départ pour être sûr qu'ils fonctionnent réellement.
                  </blockquote>
                </div>
              </section>

              {/* Lunettes crème Section */}
              <section id="lunettes-creme" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Lunettes de soleil UV et crème solaire : la protection indispensable
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le froid en montagne peut faire oublier le soleil, mais l'altitude intensifie les rayons UV et la neige ou les nuages reflètent le soleil. Oublier ces protections peut provoquer des brûlures, des lésions oculaires et un inconfort important.</p>
                  
                  <p className="mb-4">Une bonne paire de lunettes de soleil avec protection UV 400 et une crème solaire SPF 50 sont indispensables, même lorsque le ciel est nuageux. N'oubliez pas vos lèvres : un stick SPF est très utile pour éviter les gerçures.</p>
                </div>
              </section>

              {/* Bouteille pipi Section */}
              <section id="bouteille-pipi" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Bouteille pipi ou urinoir portable : le confort nocturne
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La nuit, lorsqu'il fait très froid et que vous êtes loin des sanitaires, sortir de la tente peut être dangereux et très inconfortable. Une bouteille pipi est un petit objet léger qui apporte un grand confort et une sécurité supplémentaire, surtout lors des nuits glaciales en altitude.</p>
                </div>
              </section>

              {/* Thermos Section */}
              <section id="thermos" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Thermos ou gourde isotherme : boire chaud en altitude
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En altitude, les pauses peuvent être longues et froides. Une boisson chaude permet de se réchauffer et de maintenir l'énergie corporelle. Beaucoup de randonneurs oublient un thermos adapté ou ne le remplissent pas suffisamment avant le départ.</p>
                </div>
              </section>

              {/* Trousse médicale Section */}
              <section id="trousse-medicale" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Trousse médicale adaptée à l'altitude
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Même si l'on prévoit des médicaments de base, certains oublis fréquents peuvent poser problème :</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Traitement contre le mal des montagnes, si prescrit.</li>
                    <li>Pansements pour ampoules et compresses.</li>
                    <li>Antiseptiques pour petites blessures ou coupures.</li>
                    <li>Médicaments personnels spécifiques.</li>
                  </ul>
                  
                  <p className="mb-4">Une trousse complète permet de prévenir et gérer les incidents avant qu'ils ne deviennent sérieux, surtout en altitude où l'aide extérieure est limitée.</p>
                </div>
              </section>

              {/* Buff bonnet Section */}
              <section id="buff-bonnet" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Buff, bonnet et gants supplémentaires : protéger vos extrémités
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le froid en altitude peut surprendre même en saison sèche. Beaucoup de randonneurs oublient :</p>
                  
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Buff ou écharpe pour protéger le cou et le visage.</li>
                    <li>Gants supplémentaires en cas de mouillage.</li>
                    <li>Bonnet chaud pour la nuit ou le sommet.</li>
                  </ul>
                  
                  <p className="mb-4">Ces objets sont essentiels pour éviter hypothermie et engelures.</p>
                </div>
              </section>

              {/* Électroniques Section */}
              <section id="electroniques" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Chargeurs, batteries externes et protections électroniques
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En altitude, le froid réduit rapidement l'autonomie des batteries. Beaucoup oublient les power banks, sacs étanches pour appareils électroniques et câbles supplémentaires. Ces oublis peuvent rendre impossible l'utilisation de votre GPS, téléphone ou appareil photo, ce qui peut être frustrant et dangereux.</p>
                </div>
              </section>

              {/* Snacks Section */}
              <section id="snacks" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Snacks et compléments énergétiques
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Maintenir l'énergie est essentiel. Barres énergétiques, fruits secs et gels sont indispensables pour prévenir la fatigue et les maux de tête. Les ranger dans votre sac de jour permet un accès rapide et régulier.</p>
                  
                  <p className="mb-4">En tant que guide local, je conseille toujours à mes randonneurs de vérifier et re-vérifier leur packing list et de ne jamais négliger ces éléments essentiels. Les objets que l'on pense secondaires sont souvent ceux qui font la vraie différence entre atteindre le sommet dans de bonnes conditions et se retrouver en difficulté.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    Petit conseil de guide : prenez quelques minutes avant chaque départ pour revoir votre équipement. Sur le Kilimandjaro, la préparation est la clé du succès.
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
