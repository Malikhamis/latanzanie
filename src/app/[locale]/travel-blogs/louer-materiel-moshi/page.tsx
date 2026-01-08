'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../../tailgrid.css';
import { useLocale } from 'next-intl';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';

interface Section {
  id: string;
  title: string;
}

export default function RentGearPage() {
  const locale = useLocale();

  const sections: Section[] = [
    { id: 'intro', title: 'Peut-on louer du matériel pour le Kilimandjaro à Moshi ?' },
    { id: 'pourquoi-louer', title: 'Pourquoi louer son matériel pour le Kilimandjaro à Moshi ?' },
    { id: 'avantages', title: 'Voyager léger : réduire le stress et le poids des bagages' },
    { id: 'materiel-adapte', title: 'Du matériel adapté aux conditions extrêmes sur le Kilimandjaro' },
    { id: 'vestes-pantalons', title: 'Vestes et pantalons imperméables : protection contre les éléments' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/packlist-hero.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
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
                  Peut-on louer du matériel pour le Kilimandjaro à Moshi ?
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Lorsque l'on prépare un trek sur le Mont Kilimandjaro, la question du matériel est souvent un casse-tête. Entre <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">le sac de couchage</Link>, les chaussures, les bâtons et les accessoires, le poids et la logistique peuvent vite devenir un problème, surtout pour ceux qui voyagent en avion.</p>
                  
                  <p className="mb-4">Heureusement, Moshi, la ville située au pied du Kilimandjaro, offre de nombreuses options de location de matériel. C'est une solution très pratique pour ceux qui souhaitent voyager léger et éviter d'emporter des équipements volumineux ou lourds depuis leur pays d'origine.</p>
                </div>
              </section>

              {/* Pourquoi louer Section */}
              <section id="pourquoi-louer" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Pourquoi louer son matériel pour le Kilimandjaro à Moshi ?
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Conseils d'un guide local pour préparer votre ascension</h3>
                  <p className="mb-4">Gravir le Mont Kilimandjaro est un rêve pour beaucoup de voyageurs, mais réussir cette aventure exige une préparation minutieuse, notamment pour le choix de l'équipement. Chaussures, <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">sacs de couchage</Link>, vestes imperméables : tout compte pour affronter les conditions extrêmes de la montagne.</p>
                  
                  <p className="mb-4">Si vous ne voulez pas transporter tout ce matériel depuis votre pays d'origine, la location à Moshi est une solution pratique et efficace. En tant que guide local, je recommande cette option à presque tous mes clients.</p>
                </div>
              </section>

              {/* Voyager léger Section */}
              <section id="avantages" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Voyager léger : réduire le stress et le poids des bagages
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Transporter <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">un sac de couchage</Link> volumineux, des chaussures montantes et des vestes imperméables dans l'avion peut rapidement devenir un casse-tête. Entre les frais de surpoids, le risque de perte de bagages et le poids supplémentaire à gérer, cela peut ajouter du stress avant même le départ.</p>
                  
                  <p className="mb-4">Louer le matériel à Moshi vous permet de voyager léger : vous ne transportez que vos affaires personnelles et quelques accessoires essentiels. Le reste, comme <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">le sac de couchage</Link> et les chaussures, est disponible sur place. Vous partez ainsi plus serein, prêt à profiter pleinement de l'expérience.</p>
                </div>
              </section>

              {/* Matériel adapté Section */}
              <section id="materiel-adapte" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Du matériel adapté aux conditions extrêmes sur le Kilimandjaro
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Lorsque l'on prépare un trek sur le Kilimandjaro, avoir le bon équipement est vital. Même si la montagne n'est pas technique, ses conditions climatiques peuvent être très extrêmes : chaleur et humidité dans la <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">forêt tropicale</Link>, vent fort et températures négatives près du sommet, pluie et boue sur certains sentiers. C'est pourquoi il est essentiel d'utiliser du matériel fiable et adapté, et c'est là que la location à Moshi devient pratique.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Sacs de couchage pour affronter le froid du sommet</h3>
                  <p className="mb-4">Les nuits en altitude peuvent descendre jusqu'à -15 °C, surtout lors de l'ascension finale vers le sommet. <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Un sac de couchage</Link> loué à Moshi est conçu pour résister à ces températures, vous permettant de bien dormir et récupérer entre les journées de marche.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Chaussures montantes et imperméables</h3>
                  <p className="mb-4">Le terrain du Kilimandjaro est souvent accidenté : roches volcaniques, sentiers glissants et boueux selon la saison. <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list#chaussures`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Des chaussures</Link> montantes et imperméables offrent un soutien optimal aux chevilles et protègent vos pieds contre les ampoules. Louer des chaussures de qualité à Moshi vous assure également qu'elles sont robustes et adaptées au trek, sans avoir à transporter vos propres chaussures depuis votre pays.</p>
                </div>
              </section>

              {/* Vestes et pantalons Section */}
              <section id="vestes-pantalons" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Vestes et pantalons imperméables : protection contre les éléments
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro est réputé pour ses changements météorologiques rapides. Une journée ensoleillée peut se transformer en pluie, brouillard ou même neige en quelques heures. C'est pourquoi des vêtements imperméables et respirants sont indispensables pour rester au sec et maintenir votre température corporelle.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">L'importance des vestes et pantalons imperméables</h3>
                  <p className="mb-4">Protection contre la pluie et la neige : rester sec est essentiel pour éviter l'hypothermie et le malaise.</p>
                  
                  <p className="mb-4">Résistance au vent : le sommet du Kilimandjaro peut être extrêmement venteux ; une veste coupe-vent protège votre corps et conserve la chaleur.</p>
                  
                  <p className="mb-4">Respirabilité : un vêtement imperméable mais respirant permet d'évacuer la transpiration sans se mouiller, évitant le froid dû à l'humidité.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    Conseil de guide local : en <Link href={`/${locale}/travel-blogs/choisir-bonne-saison-randonnee`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">saison des pluies</Link>, combinez votre veste et votre pantalon imperméables avec des guêtres pour protéger vos chaussures et vos jambes, ainsi que des sacs étanches pour vos affaires. Cela protège non seulement vos vêtements mais aussi vos objets personnels comme votre téléphone, votre appareil photo ou vos documents de voyage.
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