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

export default function SeasonalClothingPage() {
  const locale = useLocale()

  const sections: Section[] = [
    { id: 'intro', title: 'Faut-il prévoir des vêtements et équipements différents selon la saison pour le Kilimandjaro ?' },
    { id: 'comprendre-saisons', title: 'Comprendre les saisons sur le Kilimandjaro' },
    { id: 'trois-couches', title: 'Le système des trois couches : la base de votre habillement' },
    { id: 'saison-seche', title: 'En saison sèche (janvier – mars / juin – octobre)' },
    { id: 'astuces', title: 'Astuces supplémentaires d’un guide local' }
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
                  Faut-il prévoir des vêtements et équipements différents selon la saison pour le Kilimandjaro ?
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Conseils détaillés d'un guide local pour réussir votre ascension</h3>
                  <p className="mb-4">Gravir le Mont Kilimandjaro est une aventure unique dans une vie, mais chaque saison offre des défis très différents. Que vous partiez <Link href={`/${locale}/travel-blogs/choisir-bonne-saison-randonnee#saison1`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">en janvier</Link>, <Link href={`/${locale}/travel-blogs/choisir-bonne-saison-randonnee#saison1`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">en mars</Link> ou pendant <Link href={`/${locale}/travel-blogs/choisir-bonne-saison-randonnee`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">la saison des pluies</Link>, <Link href={`/${locale}/travel-blogs/objets-souvent-oublies-packing-list`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">votre packing list</Link> doit être adaptée pour vous protéger du froid, de la pluie et du vent, tout en restant légère et efficace.</p>
                  
                  <p className="mb-4">En tant que guide local, j'ai accompagné des centaines de randonneurs, et je peux vous assurer que ceux qui réussissent leur sommet sont toujours ceux qui ont anticipé les conditions saisonnières. Dans cet article, je vais vous expliquer en détail comment adapter vos vêtements et équipements à chaque période de l'année, et pourquoi c'est crucial pour votre sécurité et votre confort.</p>
                </div>
              </section>

              {/* Comprendre les saisons Section */}
              <section id="comprendre-saisons" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Comprendre les saisons sur le Kilimandjaro
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro, bien qu'il soit situé dans une région tropicale, ne se contente pas d'un climat unique. En réalité, la montagne connaît des conditions très variées selon la saison, et ces variations peuvent avoir un impact direct sur votre ascension. En tant que guide local, je conseille toujours à mes clients de bien comprendre ces différences avant de préparer leur sac.</p>
                  
                  <p className="mb-4">On distingue principalement deux saisons sèches et deux saisons des pluies, chacune avec ses caractéristiques propres.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">La saison sèche principale : janvier à début mars</h3>
                  <p className="mb-4">Pendant ces mois, le Kilimandjaro bénéficie d'un climat relativement stable. Le ciel est généralement dégagé, les sentiers restent secs et les journées sont agréablement chaudes dans les zones basses. C'est la période idéale pour les randonneurs qui souhaitent minimiser le risque de pluie et profiter d'une météo plus prévisible. Cependant, même en janvier ou février, il ne faut pas sous-estimer le froid en altitude : les nuits au-dessus de 4 000 mètres restent glaciales, et le vent peut être fort au sommet.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">La saison sèche secondaire : fin juin à octobre</h3>
                  <p className="mb-4">La seconde période sèche est également favorable pour la randonnée. Les conditions sont souvent stables, et les sentiers restent praticables. Néanmoins, les températures nocturnes sont plus basses que pendant la saison sèche principale, et le vent peut être particulièrement fort, surtout sur les derniers camps avant le sommet. Cette période attire beaucoup de randonneurs car elle combine beau temps et paysages dégagés, mais il est essentiel de prévoir des couches chaudes adaptées aux nuits froides.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">La saison des pluies courte : novembre</h3>
                  <p className="mb-4">En novembre, les averses sont plus fréquentes et parfois intenses. Le sol devient glissant et les sentiers peuvent se transformer en rivières de boue par endroits. Certaines zones traversent également des ruisseaux gonflés par la pluie, ce qui rend la randonnée plus exigeante. Les randonneurs doivent alors adapter leur équipement avec vêtements imperméables, chaussures robustes et protection contre l'humidité, afin de rester au sec et en sécurité.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">La saison des pluies longue : mars à mai</h3>
                  <p className="mb-4">La période la plus difficile de l'année pour l'ascension se situe entre mars et mai. Les pluies sont fréquentes et parfois continues, ce qui rend les sentiers glissants et boueux. L'humidité peut pénétrer facilement dans les vêtements et le sac si ceux-ci ne sont pas bien protégés. Cette saison exige donc un équipement renforcé, étanche et rapide à sécher, ainsi qu'une bonne préparation physique et mentale pour affronter ces conditions plus rigoureuses.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Une météo toujours imprévisible</h3>
                  <p className="mb-4">Même pendant la saison sèche, il n'est pas rare de rencontrer des pluies localisées, du brouillard ou un vent froid en altitude. Le climat du Kilimandjaro peut changer en quelques heures, et cette variabilité rend indispensable le choix d'un équipement polyvalent, capable de vous protéger contre le froid, la pluie et le vent.</p>
                  
                  <blockquote className="pl-4 border-l-4 italic text-gray-700 my-4">
                    En résumé, comprendre la saison de votre ascension vous permet d'adapter vos vêtements et votre matériel, d'éviter la fatigue inutile et d'augmenter vos chances de réussite jusqu'au sommet. Un sac préparé intelligemment est souvent la clé pour transformer votre trek en une expérience confortable et mémorable.
                  </blockquote>
                </div>
              </section>

              {/* Système des trois couches Section */}
              <section id="trois-couches" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Le système des trois couches : la base de votre habillement
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Quelle que soit la saison, le système des trois couches reste la référence pour s'habiller correctement :</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">1. Couche respirante</h3>
                  <p className="mb-4">Portée directement sur la peau, elle évacue la transpiration et permet de garder votre corps sec, même lors d'efforts intenses. Cette couche peut être en matière synthétique ou en laine mérinos. Elle est indispensable pour éviter le refroidissement et la perte d'énergie.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">2. Couche isolante</h3>
                  <p className="mb-4">Une polaire ou une doudoune légère qui conserve la chaleur corporelle. Cette couche est particulièrement utile la nuit, au camp, et surtout lors de la montée finale vers le sommet où les températures chutent brutalement.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">3. Couche externe</h3>
                  <p className="mb-4">Veste et pantalon imperméables et coupe-vent. Cette couche vous protège contre la pluie, la neige, le vent et les conditions extrêmes au sommet. Sa qualité est essentielle pour maintenir votre corps au sec et au chaud.</p>
                </div>
              </section>

              {/* Saison sèche Section */}
              <section id="saison-seche" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  En <Link href={`/${locale}/travel-blogs/best-season`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">saison sèche</Link> (janvier – mars / juin – octobre)
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">La <Link href={`/${locale}/travel-blogs/best-season`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">saison sèche</Link> est souvent considérée comme la période idéale pour l'ascension du Kilimandjaro. Le ciel est dégagé, les sentiers restent praticables et la pluie est rare. Cela permet de marcher plus légèrement et d'optimiser votre confort durant la journée.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Vêtements de jour</h3>
                  <p className="mb-4">Privilégiez des tissus respirants et légers, qui évacuent bien la transpiration. Les couches trop épaisses peuvent provoquer une surchauffe et une fatigue inutile.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Vêtements de nuit et sommet</h3>
                  <p className="mb-4">Même si le soleil brille pendant la journée, la température chute rapidement après le coucher du soleil et au-dessus de 4 000 mètres. Une polaire épaisse ou une doudoune est indispensable pour maintenir la chaleur corporelle.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Accessoires essentiels</h3>
                  <p className="mb-4">Bonnet, gants, buff pour protéger le visage et le cou contre le vent, et lunettes de soleil pour protéger vos yeux du rayonnement intense en altitude.</p>
                </div>
              </section>

              {/* Astuces Section */}
              <section id="astuces" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Astuces supplémentaires d'un guide local
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                    <li>Toujours prévoir des couches supplémentaires, même si la météo semble clémente.</li>
                    <li>Tester votre équipement avant le départ permet d'éviter les surprises sur le trek.</li>
                    <li>Protéger vos affaires de l'humidité est primordial, surtout en saison des pluies.</li>
                    <li>Accessoires indispensables : bâtons de randonnée, lampe frontale, lunettes UV, thermos et buff.</li>
                    <li>Adapter les chaussures : montantes, imperméables et bien rodées avant le trek, avec guêtres pour la boue si nécessaire.</li>
                  </ol>
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