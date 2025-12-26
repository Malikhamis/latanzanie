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

export default function RequiredGearPage() {
  const locale = useLocale()

  const sections: Section[] = [
    { id: 'intro', title: 'Quel équipement est obligatoire pour faire le Kilimandjaro ?' },
    { id: 'vetements', title: 'Les vêtements adaptés à toutes les altitudes sur le Kilimandjaro' },
    { id: 'trois-couches', title: 'Le système des trois couches : la base indispensable pour gravir le Kilimandjaro' },
    { id: 'couche-respirante', title: '1. Couche respirante : la première protection' },
    { id: 'couche-isolante', title: '2. Couche isolante : conserver la chaleur' },
    { id: 'couche-externe', title: '3. Couche externe imperméable et coupe-vent : se protéger des éléments' }
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
                  Quel équipement est obligatoire pour faire le Kilimandjaro ? Le guide d'un guide local
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Mont Kilimandjaro est bien plus qu'une randonnée : c'est un véritable défi pour le corps et l'esprit. Chaque année, des milliers de randonneurs rêvent de toucher le sommet, mais beaucoup sous-estiment la complexité du trek. La montagne, bien que non technique, présente des conditions climatiques extrêmement variées, allant des forêts tropicales humides à des zones quasi polaires au sommet. Les températures peuvent varier de +25 °C dans la forêt à -15 °C au sommet, et les vents, la pluie ou la neige peuvent survenir à tout moment.</p>
                  
                  <p className="mb-4">Dans ce contexte, le choix de l'équipement n'est pas une option : il conditionne votre confort, votre sécurité et la réussite de l'ascension. En tant que guide local ayant accompagné des centaines de randonneurs, j'ai pu observer quels éléments sont vraiment indispensables pour affronter cette montagne.</p>
                </div>
              </section>

              {/* Vêtements Section */}
              <section id="vetements" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Les vêtements adaptés à toutes les altitudes sur le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro n'est pas comme une simple randonnée de quelques heures. La montagne traverse plusieurs zones climatiques en quelques kilomètres : forêts tropicales humides, savane sèche, zones rocheuses exposées au vent et enfin le sommet quasi polaire. Cette diversité fait que le choix des vêtements est crucial. Bien s'habiller peut faire la différence entre une ascension confortable et une expérience éprouvante, voire dangereuse.</p>
                </div>
              </section>

              {/* Trois couches Section */}
              <section id="trois-couches" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Le système des trois couches : la base indispensable pour gravir le Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Lorsque l'on prépare une ascension du Kilimandjaro, le choix des vêtements est crucial. La montagne traverse plusieurs zones climatiques : des forêts tropicales humides aux terrains semi-désertiques, jusqu'au sommet quasi polaire. La météo peut changer très rapidement : soleil intense, vent glacial, pluie ou neige peuvent survenir en quelques heures.</p>
                  
                  <p className="mb-4">Pour rester confortable et en sécurité, le système des trois couches reste la méthode la plus efficace et la plus polyvalente. Cette approche permet de s'adapter facilement à chaque altitude et à chaque condition climatique.</p>
                </div>
              </section>

              {/* Couche respirante Section */}
              <section id="couche-respirante" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  1. Couche respirante : la première protection
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La couche respirante est la couche que l'on porte directement sur la peau. Elle comprend généralement des sous-vêtements techniques ou des t-shirts en matière synthétique conçus pour évacuer la transpiration.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Pourquoi c'est important</h3>
                  <p className="mb-4">Lorsque l'on marche en altitude, le corps produit de la chaleur et de la transpiration. Si la peau reste humide, le refroidissement est accéléré, et le risque d'hypothermie augmente, même en saison sèche.</p>
                </div>
              </section>

              {/* Couche isolante Section */}
              <section id="couche-isolante" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  2. Couche isolante : conserver la chaleur
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La couche intermédiaire est conçue pour conserver la chaleur corporelle. Il s'agit généralement d'une polaire ou d'une doudoune légère.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Pourquoi c'est important</h3>
                  <p className="mb-4">En altitude, la température chute rapidement le soir et lors de l'ascension du sommet. La couche isolante permet de rester confortable, d'éviter les frissons et de protéger le corps contre le froid intense, surtout lors des pauses prolongées ou de la montée finale nocturne.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Astuce de guide</h3>
                  <p className="mb-4">Même en saison sèche, gardez toujours votre polaire ou votre doudoune à portée de main. Vous la mettrez lors des pauses ou pour la montée finale vers le sommet, quand le vent est froid et que le corps commence à perdre de la chaleur.</p>
                </div>
              </section>

              {/* Couche externe Section */}
              <section id="couche-externe" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  3. Couche externe imperméable et coupe-vent : se protéger des éléments
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La dernière couche est votre barrière contre le vent, la pluie et parfois la neige. Elle comprend une veste et un pantalon imperméables et respirants.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Pourquoi c'est important</h3>
                  <p className="mb-4">Le Kilimandjaro est célèbre pour ses changements météorologiques soudains. Même pendant la saison sèche, des vents forts ou des averses localisées peuvent surprendre les randonneurs, et sans protection, le froid et l'humidité peuvent devenir dangereux.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Conseil pratique</h3>
                  <p className="mb-4">Privilégiez des matériaux légers, respirants et imperméables, pour rester protégé sans surchauffer. Cette couche doit pouvoir être facilement enlevée ou ajustée selon l'intensité de l'effort et les conditions climatiques.</p>
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
