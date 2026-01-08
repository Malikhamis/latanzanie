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

export default function KilimanjaroPackingListPage() {
  const locale = useLocale();

  const sections: Section[] = [
    { id: 'intro', title: 'Kilimanjaro Packing List – Guide Complet' },
    { id: 'equipement', title: 'ÉQUIPEMENT' },
    { id: 'vetements', title: 'VÊTEMENTS' },
    { id: 'tetemains', title: 'TÊTE & MAINS' },
    { id: 'chaussures', title: 'CHAUSSURES' },
    { id: 'hygienesante', title: 'HYGIÈNE & SANTÉ' },
    { id: 'papiers', title: 'PAPIERS' }
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
                  Kilimanjaro Packing List – Guide Complet
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Mont Kilimandjaro est une aventure unique dans une vie. Pour réussir cette ascension mythique, il est essentiel de bien préparer son sac avec l'équipement approprié. La température peut varier de +25°C en <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">forêt tropicale</Link> à -20°C au sommet, ce qui rend indispensable une préparation rigoureuse.</p>
                  
                  <p className="mb-4">Notre guide complet vous accompagne dans votre préparation avec une liste détaillée de tous les équipements nécessaires, organisée par catégories. De l'équipement technique aux vêtements adaptés, en passant par l'hygiène et les documents administratifs, chaque article a été sélectionné par nos guides expérimentés pour vous garantir confort, sécurité et chances de succès maximales.</p>
                  
                  <p className="mb-4">Cette liste est conçue pour une ascension en toute saison, tenant compte des conditions changeantes de la montagne. Préparez-vous à vivre une expérience inoubliable avec le bon équipement à vos côtés.</p>
                </div>
              </section>

              {/* ÉQUIPEMENT Section */}
              <section id="equipement" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  ÉQUIPEMENT
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Sac de couchage</h3>
                  <p className="mb-4">Un bon sac de couchage est essentiel pour rester au chaud pendant les nuits froides sur le Kilimandjaro. Privilégiez un modèle quatre saisons qui vous protégera même aux altitudes les plus élevées.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Bâtons de marche</h3>
                  <p className="mb-4">Les bâtons de marche sont indispensables pour maintenir l'équilibre sur les terrains irréguliers du Kilimandjaro. Ils réduisent la fatigue des jambes et des genoux, facilitent les montées raides et rendent la descente plus sûre. Même les randonneurs expérimentés ressentent une grande différence en les utilisant.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Lampe frontale pour le Kilimandjaro</h3>
                  <p className="mb-4">Une lampe frontale est un équipement indispensable pour toute ascension du Kilimandjaro. Elle permet de marcher en toute sécurité dans l'obscurité, d'éclairer le campement et de libérer vos mains pour manipuler votre matériel. Optez pour un modèle léger avec une longue autonomie, idéal pour les nuits froides et les départs tôt le matin.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Petit sac à dos de jour (30-35L)</h3>
                  <p className="mb-4">Un petit sac à dos de jour de 30 à 35 litres est idéal pour transporter vos affaires essentielles lors des étapes quotidiennes du Kilimandjaro. Il permet de garder vos vêtements de rechange, eau, encas et équipement personnel à portée de main sans alourdir vos épaules. Privilégiez un modèle léger, respirant et confortable, avec plusieurs poches pour un accès facile aux objets indispensables.</p>
                </div>
              </section>

              {/* VÊTEMENTS Section */}
              <section id="vetements" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  VÊTEMENTS
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Veste imperméable pour le Kilimandjaro</h3>
                  <p className="mb-4">Une veste imperméable est indispensable pour se protéger des pluies et du vent lors de l'ascension du Kilimandjaro. Elle garde votre corps au sec et au chaud, tout en restant légère et facile à transporter. Choisissez un modèle respirant et compressible, idéal pour affronter les changements rapides de météo en montagne.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Doudoune pour le Kilimandjaro</h3>
                  <p className="mb-4">La doudoune est un élément essentiel pour rester au chaud lors de l'ascension du Kilimandjaro. Légère, compressible et isolante, elle offre une protection thermique efficace contre le froid des nuits et des sommets. Optez pour un modèle résistant à l'humidité et facile à superposer, pour maximiser confort et mobilité pendant la randonnée.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Veste polaire pour le Kilimandjaro</h3>
                  <p className="mb-4">Une veste polaire est idéale pour conserver la chaleur corporelle lors des étapes en altitude sur le Kilimandjaro. Légère et respirante, elle se porte facilement sous une veste imperméable ou une doudoune pour créer une couche thermique efficace. Privilégiez un modèle résistant et confortable, qui offre liberté de mouvement et isolation optimale.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Couche de base (manches longues) x2 pour le Kilimandjaro</h3>
                  <p className="mb-4">Les couches de base à manches longues sont essentielles pour réguler la température corporelle lors de l'ascension du Kilimandjaro. Elles évacuent la transpiration, gardent la peau sèche et servent de première barrière contre le froid. Il est recommandé d'en emporter deux pour pouvoir alterner et rester toujours au sec et confortable.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Pantalon imperméable pour le Kilimandjaro</h3>
                  <p className="mb-4">Un pantalon imperméable est indispensable pour rester au sec et protéger vos jambes face aux pluies et au vent sur le Kilimandjaro. Léger et respirant, il se porte facilement par-dessus votre pantalon de randonnée pour offrir une barrière efficace contre l'humidité. Privilégiez un modèle résistant, compressible et confortable, idéal pour les conditions changeantes de la montagne.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Pantalons de randonnée (Zip-Off) x2 pour le Kilimandjaro</h3>
                  <p className="mb-4">Les pantalons de randonnée zip-off sont parfaits pour s'adapter aux changements de température sur le Kilimandjaro. Grâce à leurs jambes amovibles, ils se transforment facilement en shorts lors des sections chaudes et restent confortables et respirants sur les parties fraîches ou venteuses. Il est recommandé d'emporter deux pantalons pour alterner et rester propre et sec tout au long du trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Shorts (Optionnel) pour le Kilimandjaro</h3>
                  <p className="mb-4">Les shorts sont optionnels mais peuvent être utiles lors des sections basses en <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">forêt tropicale</Link>, où les températures sont plus chaudes. Légers et respirants, ils offrent confort et liberté de mouvement, tout en pouvant être facilement rangés dans votre sac lorsque le froid ou l'altitude augmente.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Sous-vêtements longs pour le Kilimandjaro</h3>
                  <p className="mb-4">Les sous-vêtements longs sont essentiels pour conserver la chaleur corporelle lors des nuits froides et des étapes en haute altitude. Ils servent de première couche thermique, évacuent l'humidité et gardent la peau sèche, ce qui est crucial pour éviter le froid et rester confortable tout au long de l'ascension.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Sous-vêtements x4/5 pour le Kilimandjaro</h3>
                  <p className="mb-4">Emporter 4 à 5 sous-vêtements est recommandé pour rester propre et confortable pendant toute l'ascension du Kilimandjaro. Alterner vos sous-vêtements permet de garder la peau sèche et de prévenir les irritations, surtout lors des journées longues et intenses de randonnée.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Soutien-gorge de sport pour le Kilimandjaro</h3>
                  <p className="mb-4">Un soutien-gorge de sport est indispensable pour les randonneuses lors de l'ascension du Kilimandjaro. Il offre maintien et confort pendant les longues marches, tout en restant respirant pour évacuer la transpiration. Privilégiez un modèle léger, ajustable et à séchage rapide pour un confort optimal sur tout le trek.</p>
                </div>
              </section>

              {/* TÊTE & MAINS Section */}
              <section id="tetemains" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  TÊTE & MAINS
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Chapeau / Casquette pour le Kilimandjaro</h3>
                  <p className="mb-4">Un chapeau ou une casquette est essentiel pour se protéger du soleil intense lors de l'ascension du Kilimandjaro. Il aide à prévenir les coups de soleil, protège les yeux et garde la tête au frais. Privilégiez un modèle léger, respirant et ajustable, facile à porter tout au long de la journée.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Bonnet chaud pour le Kilimandjaro</h3>
                  <p className="mb-4">Un bonnet chaud est essentiel pour protéger la tête et les oreilles contre le froid intense des nuits et des sommets sur le Kilimandjaro. Léger, isolant et confortable, il conserve la chaleur corporelle tout en restant facile à transporter dans votre sac. Privilégiez un modèle respirant et ajustable pour un confort optimal tout au long du trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Cache-cou / Buff / Bandeau pour le Kilimandjaro</h3>
                  <p className="mb-4">Un cache-cou, buff ou bandeau est un accessoire polyvalent indispensable pour protéger votre cou, visage et oreilles contre le froid, le vent et le soleil sur le Kilimandjaro. Léger et facile à porter, il peut également servir de protection contre la poussière ou pour garder la chaleur lors des nuits froides en altitude. Privilégiez un modèle respirant et multi-usage pour un confort optimal tout au long du trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Gants chauds et imperméables pour le Kilimandjaro</h3>
                  <p className="mb-4">Les gants chauds et imperméables sont essentiels pour protéger vos mains du froid et de l'humidité lors de l'ascension du Kilimandjaro. Ils offrent chaleur, confort et liberté de mouvement, tout en empêchant la transpiration de pénétrer. Privilégiez un modèle isolant, respirant et résistant à l'eau, idéal pour les étapes en haute altitude et les conditions imprévisibles.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Gants légers pour le Kilimandjaro</h3>
                  <p className="mb-4">Les gants légers sont parfaits pour protéger vos mains du vent et du froid léger lors des étapes de basse ou moyenne altitude sur le Kilimandjaro. Respirants et confortables, ils permettent une bonne mobilité des doigts pour manipuler le matériel, prendre des photos ou ajuster vos vêtements. Privilégiez un modèle fin, ajusté et respirant pour un usage quotidien sur le trek.</p>
                </div>
              </section>

              {/* CHAUSSURES Section */}
              <section id="chaussures" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  CHAUSSURES
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Chaussures / Bottes de randonnée pour le Kilimandjaro</h3>
                  <p className="mb-4">Les chaussures ou bottes de randonnée sont essentielles pour assurer stabilité, confort et sécurité lors de l'ascension du Kilimandjaro. Elles doivent être robustes, imperméables et respirantes, avec une bonne semelle adhérente pour les terrains variés et glissants. Bien choisies, elles réduisent le risque de fatigue et d'ampoules, et vous permettent de profiter pleinement de votre trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Chaussures de camp (Optionnel) pour le Kilimandjaro</h3>
                  <p className="mb-4">Les chaussures de camp sont optionnelles mais très utiles pour se détendre après une longue journée de randonnée sur le Kilimandjaro. Légers et confortables, ils permettent à vos pieds de respirer et de récupérer, tout en restant adaptés aux déplacements dans le campement. Privilégiez un modèle respirant, facile à enfiler et à transporter dans votre sac.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Chaussettes de randonnée x4 pour le Kilimandjaro</h3>
                  <p className="mb-4">Emporter 4 paires de chaussettes de randonnée est essentiel pour garder vos pieds au sec et prévenir les ampoules lors de l'ascension du Kilimandjaro. Respirantes et rembourrées, elles offrent confort et protection tout au long des longues journées de marche. Alterner vos chaussettes permet également de maintenir une hygiène optimale en montagne.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Guêtres pour le Kilimandjaro</h3>
                  <p className="mb-4">Les guêtres sont essentielles pour protéger vos jambes et chaussures de la boue, de la neige et des débris lors de l'ascension du Kilimandjaro. Elles empêchent l'humidité et les cailloux de pénétrer dans vos chaussures, tout en offrant une couche supplémentaire contre le froid. Privilégiez un modèle résistant, léger et ajustable, facile à mettre et à enlever pendant le trek.</p>
                </div>
              </section>

              {/* HYGIÈNE & SANTÉ Section */}
              <section id="hygienesante" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  HYGIÈNE & SANTÉ
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Lunettes de soleil pour le Kilimandjaro</h3>
                  <p className="mb-4">Les lunettes de soleil sont indispensables pour protéger vos yeux du soleil intense et des rayons UV en haute altitude sur le Kilimandjaro. Elles réduisent l'éblouissement, préviennent la fatigue oculaire et protègent contre la réverbération sur la neige ou les rochers. Choisissez un modèle léger, résistant aux chocs et avec protection UV élevée pour un confort et une sécurité optimaux pendant toute l'ascension.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Nécessaire de toilette biodégradable pour le Kilimandjaro</h3>
                  <p className="mb-4">Un nécessaire de toilette biodégradable est essentiel pour maintenir votre hygiène tout en respectant l'environnement fragile du Kilimandjaro. Savon, dentifrice et shampoing biodégradables permettent de rester propre sans polluer les rivières et sols. Privilégiez des produits compactes, légers et écologiques pour faciliter le transport et réduire votre impact écologique pendant le trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Crème solaire pour le Kilimandjaro</h3>
                  <p className="mb-4">La crème solaire est indispensable pour protéger votre peau des rayons UV puissants en haute altitude sur le Kilimandjaro. Appliquez-la régulièrement sur le visage, le cou et les bras pour éviter coups de soleil et irritations. Privilégiez un modèle haute protection (SPF 50+), résistant à l'eau et léger, facile à transporter dans votre sac de jour.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Trousse de premiers soins pour le Kilimandjaro</h3>
                  <p className="mb-4">Une trousse de premiers soins est indispensable pour faire face aux petites blessures, coupures ou maux de tête pendant l'ascension du Kilimandjaro. Elle doit contenir pansements, désinfectant, médicaments de base et accessoires essentiels. Privilégiez un modèle compact, léger et bien organisé, facile à transporter dans votre sac pour intervenir rapidement en cas de besoin.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Dentifrice et brosse à dents pour le Kilimandjaro</h3>
                  <p className="mb-4">Emporter un dentifrice et une brosse à dents est essentiel pour maintenir une bonne hygiène bucco-dentaire pendant l'ascension du Kilimandjaro. Privilégiez des produits compactes et biodégradables pour réduire l'impact sur l'environnement et faciliter le transport. Une bonne hygiène contribue à votre confort et à votre bien-être tout au long du trek.</p>
                </div>
              </section>

              {/* PAPIERS Section */}
              <section id="papiers" className="bg-gray-50 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  PAPIERS
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <h3 className="text-xl font-bold mt-4 mb-2">Passeport pour le Kilimandjaro</h3>
                  <p className="mb-4">Un passeport valide est indispensable pour voyager en Tanzanie et gravir le Kilimandjaro. Vérifiez sa validité avant votre départ et assurez-vous d'avoir des copies numériques ou papier en cas de perte. Conservez-le dans un porte-documents sécurisé et étanche pour le protéger pendant le trek.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">E-VISA (ou à l'aéroport) pour le Kilimandjaro</h3>
                  <p className="mb-4">Un E-VISA est nécessaire pour entrer en Tanzanie et gravir le Kilimandjaro. Vous pouvez l'obtenir en ligne avant le départ ou directement à l'aéroport à votre arrivée. Assurez-vous que votre passeport est valide et conservez une copie électronique et papier de votre visa pour éviter tout problème à l'immigration.</p>
                  
                  <h3 className="text-xl font-bold mt-4 mb-2">Documents de vaccination pour le Kilimandjaro</h3>
                  <p className="mb-4">Les documents de vaccination sont indispensables pour voyager en Tanzanie et gravir le Kilimandjaro en toute sécurité. Certains vaccins, comme la fièvre jaune ou d'autres recommandés par votre médecin, peuvent être exigés à l'entrée du pays. Conservez vos certificats dans un format papier et numérique, facilement accessibles pendant le voyage.</p>
                </div>
              </section>

              {/* Canonical route cards section */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
                    <p className="text-gray-600 text-lg">{locale === 'fr' ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our top Kilimanjaro routes'}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
                        <div className="absolute top-3 left-3">
                          <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">{locale === 'fr' ? "À partir de 1 800 €" : 'From €1,800'}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-800 flex-1">Marangu Route</h3>
                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500">⏱️5 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours" : 'Conquer Africa\'s Roof: Marangu Route in 5 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !" : 'Want to stand on Africa\'s roof? Climb Kilimanjaro with us.'}</p>
                        <Link href={`/${locale}/trips/marangu-route`} className="text-blue-600 font-medium group-hover:underline">{locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
                        <div className="absolute top-3 left-3">
                          <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">{locale === 'fr' ? "À partir de 2 200 €" : 'From €2,200'}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-800 flex-1">Lemosho Route</h3>
                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500">⏱️7 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours" : 'Panoramic adventure: Lemosho in 7 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                        <Link href={`/${locale}/trips/lemosho-route`} className="text-blue-600 font-medium group-hover:underline">{locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
                        <div className="absolute top-3 left-3">
                          <p className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">{locale === 'fr' ? "À partir de 1 900 €" : 'From €1,900'}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start mb-4">
                          <h3 className="text-xl font-bold text-gray-800 flex-1">Umbwe Route</h3>
                          <div className="text-right ml-4">
                            <div className="text-sm text-gray-500">⏱️6 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★☆ (4.5)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)" : 'Umbwe: the vertical challenge in 6 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Souvent décrite comme la voie la plus courte et la plus ardue, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés." : 'Often the shortest and steepest route, Umbwe suits experienced trekkers.'}</p>
                        <Link href={`/${locale}/trips/umbwe-route`} className="text-blue-600 font-medium group-hover:underline">{locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}</Link>
                      </div>
                    </div>
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