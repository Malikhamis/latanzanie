'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ChevronUp, ChevronDown, Mountain } from 'lucide-react'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

export default function ClimateZonesPage() {
  const [expandedZone, setExpandedZone] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const zones = [
    { id: 'zone1', title: 'Zone 1 : La Zone de Base – Forêts tropicales et humides' },
    { id: 'zone2', title: 'Zone 2 : La Zone Moyenne – Collines et Forêts de Bambous' },
    { id: 'zone3', title: 'Zone 3 : La Zone Alpine – Herbes Hautes et Brumes Matinales' },
    { id: 'zone4', title: 'Zone 4 : La Zone Subglaciaire – Rochers et Début de la Neige' },
    { id: 'zone5', title: 'Zone 5 : La Zone Sommital – Neige, Glaciers et Panoramas Spectaculaires' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero3.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn leading-tight">
            Kilimandjaro : Le Guide Complet des 5 Zones Climatiques et Altitudes
          </h1>
          <p className="text-base md:text-lg text-[#E8F8F5] max-w-3xl animate-slideInRight">
            Guide expert sur les 5 zones climatiques du Kilimandjaro. Découvrez les défis de chaque altitude, de la forêt tropicale aux glaciers, et les conseils de guide pour une acclimatation réussie.
          </p>
        </div>
      </section>

      {/* Article Meta Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={locale === 'fr' ? 'Guide Local Kilimandjaro' : 'Kilimanjaro Local Guide'}
            date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'}
            readingTime={locale === 'fr' ? '15 min de lecture' : '15 min read'}
          />
        </div>
      </section>

      {/* Mobile TOC (visible on sm screens, below meta) */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={zones.map(z => ({ id: `${z.id}-detail`, label: z.title, level: 2 }))}
            onSelect={(id: string) => { const zoneId = id.replace('-detail',''); setExpandedZone(zoneId) }}
          />
        </div>
      </section>

      {/* Detailed Zones with Accordion */}
      <section className="py-16 bg-white" data-section="detailed-analyses">
        <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              {/* Left sidebar: sticky TOC + compact accordion */}
              <aside className="hidden md:block md:w-56 lg:w-64 sticky top-24 self-start transform md:-translate-x-32 lg:-translate-x-48">
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                  <TOC
                    title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                    items={zones.map(z => ({ id: `${z.id}-detail`, label: z.title, level: 2 }))}
                    onSelect={(id: string) => { const zoneId = id.replace('-detail',''); setExpandedZone(zoneId) }}
                  />
                </div>

                <div className="space-y-3">
                  {zones.map((zone) => (
                    <div key={zone.id} className={`bg-white rounded-lg border ${expandedZone === zone.id ? 'border-[#00A896] shadow-md' : 'border-gray-100'} p-3`}>
                      <button onClick={() => setExpandedZone(expandedZone === zone.id ? null : zone.id)} className="text-left w-full">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{zone.title}</h4>
                          </div>
                          <div className="ml-3 flex-shrink-0 text-gray-400">{expandedZone === zone.id ? '–' : '+'}</div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main content area */}
              <div className="flex-1">
                <div className="space-y-4">
                  {/* Intro paragraph */}
                  <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6 mb-6">
                    <p className="text-gray-700 leading-relaxed">Gravir une montagne n'est jamais qu'une simple marche. Chaque pas nous fait entrer dans un univers naturel unique, où le climat, la végétation, les défis physiques et les sensations évoluent à mesure que l'on gagne de l'altitude. Les experts parlent des cinq zones climatiques, ou "cloches", qui jalonnent l'ascension. Comprendre ces zones permet aux randonneurs de mieux s'acclimater, de profiter pleinement des paysages et de vivre une expérience immersive et sécurisée.</p>
                  </div>

                  {/* Zone 1 Accordion */}
                  <div key="zone1" id="zone1-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedZone(expandedZone === 'zone1' ? null : 'zone1')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">Zone 1 : La Zone de Base – Forêts tropicales et humides</h2>
                        <p className="text-gray-600 text-sm">Forêts tropicales, biodiversité, acclimatation progressive</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedZone === 'zone1' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedZone === 'zone1' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">L'aventure commence toujours dans la zone de base, souvent située entre 800 et 2 000 mètres d'altitude selon la montagne. Cette zone est caractérisée par des forêts tropicales humides, où l'air est chaud et saturé d'humidité, chargé de l'odeur des feuilles, de la terre humide et des fleurs sauvages. La végétation est dense : arbres géants, lianes, fougères et bambous se mêlent pour créer un véritable labyrinthe naturel. Marcher sur les sentiers de cette zone, c'est comme pénétrer dans un autre monde, où chaque pas révèle une nouvelle forme de vie.</p>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Climat et conditions</h3>
                            <p className="text-gray-700 leading-relaxed">Le climat est généralement chaud et humide, avec des températures oscillant entre 20 et 28°C selon la saison. Les pluies sont fréquentes, surtout le matin ou en fin d'après-midi, ce qui rend les sentiers boueux et glissants. L'humidité élevée favorise également la prolifération de mousses et de champignons qui recouvrent les troncs et les pierres, ajoutant une touche mystique au paysage. L'air, riche en oxygène à cette altitude, permet au corps de s'acclimater progressivement avant les zones plus élevées.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Végétation</h3>
                            <p className="text-gray-700 leading-relaxed">La végétation est exceptionnellement diversifiée. On y trouve des arbres centenaires pouvant dépasser 40 mètres de hauteur, avec des racines impressionnantes qui s'étendent comme des tentacules dans le sol humide. Les fougères et les lianes couvrent les troncs et les branches, créant des arches vertes naturelles. Certains bambous peuvent atteindre 10 mètres et former des haies presque impénétrables. Cette densité végétale offre un habitat idéal pour de nombreuses espèces animales.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Faune</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">La zone de base est un véritable paradis pour la faune. On y croise souvent :</p>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• Des oiseaux tropicaux, aux plumages éclatants et chants variés. Certains sont endémiques, visibles uniquement dans cette région.</li>
                              <li>• Des singes agiles qui se déplacent entre les arbres avec une facilité déconcertante.</li>
                              <li>• Des reptiles et amphibiens comme des grenouilles colorées et des lézards, adaptés à l'humidité.</li>
                              <li>• De petits mammifères, parfois discrets, mais qui ajoutent à la richesse de l'écosystème.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">Observer la faune demande patience et discrétion, mais la récompense est immense : la zone de base est souvent le lieu où les randonneurs prennent leurs premières photos mémorables.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Expérience du randonneur</h3>
                            <p className="text-gray-700 leading-relaxed">Pour le randonneur, cette zone est un véritable échauffement naturel. Les sentiers peuvent être boueux, mais la beauté de la nature incite à ralentir, respirer profondément et profiter de l'environnement. L'air humide et l'altitude modérée permettent au corps de s'adapter progressivement, ce qui est essentiel pour éviter le mal d'altitude dans les zones plus élevées.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">C'est aussi l'endroit idéal pour :</p>
                            <ul className="text-gray-700 space-y-2 ml-4 mt-2">
                              <li>• Observer les différences de microclimats : certaines zones peuvent être plus sèches ou plus humides selon l'ombre des arbres et l'exposition au soleil.</li>
                              <li>• Apprendre à reconnaître les plantes médicinales locales, utilisées depuis des générations par les communautés locales.</li>
                              <li>• Repérer les traces d'animaux, comme les empreintes dans la boue, qui révèlent la vie active de la forêt.</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils pratiques pour les randonneurs</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• <strong>Chaussures :</strong> des chaussures de randonnée imperméables et antidérapantes sont indispensables.</li>
                              <li>• <strong>Vêtements :</strong> porter des vêtements respirants et légers, mais prévoir une veste imperméable en cas de pluie.</li>
                              <li>• <strong>Hydratation et pauses :</strong> boire régulièrement et profiter des points d'eau naturelle si sécurisés.</li>
                              <li>• <strong>Observation :</strong> garder un œil attentif pour repérer la faune et profiter pleinement de la richesse végétale.</li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-700 bg-teal-50 p-4 rounded">Dans certaines montagnes tropicales, les habitants racontent que les singes de la zone de base peuvent guider les randonneurs vers des sources d'eau ou des sentiers sûrs. Les vieux arbres, souvent marqués par des signes anciens, témoignent des siècles de présence humaine et naturelle. Marcher ici, c'est se connecter à un écosystème vivant et ancien, qui reste relativement intact dans de nombreuses régions grâce à la conservation locale.</blockquote>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Zone 2 Accordion */}
                  <div key="zone2" id="zone2-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedZone(expandedZone === 'zone2' ? null : 'zone2')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">Zone 2 : La Zone Moyenne – Collines et Forêts de Bambous</h2>
                        <p className="text-gray-600 text-sm">Transition, bambous, climat tempéré</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedZone === 'zone2' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedZone === 'zone2' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">Après avoir quitté l'humidité dense et la végétation luxuriante de la zone de base, l'ascension mène à la zone moyenne, souvent située entre 2 000 et 3 000 mètres d'altitude selon la montagne. Ici, le paysage change radicalement : les forêts tropicales cèdent la place aux collines ondulantes, aux forêts de bambous et aux bruyères. L'air est plus sec, plus frais, et le panorama commence à s'ouvrir sur les vallées et les montagnes environnantes. C'est un espace de transition, où le corps continue à s'acclimater à l'altitude, tandis que l'esprit se prépare aux zones plus exigeantes à venir.</p>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Climat et conditions</h3>
                            <p className="text-gray-700 leading-relaxed">Le climat dans la zone moyenne est plus tempéré que dans la zone de base, avec des températures comprises entre 15 et 22°C. Les matinées peuvent être fraîches, et le vent commence à se faire sentir, surtout sur les crêtes exposées. Les précipitations sont moins fréquentes, mais des averses localisées peuvent survenir, rendant certaines parties du sentier glissantes. La visibilité est généralement meilleure que dans la zone de base, offrant de superbes panoramas sur la vallée et les collines.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Végétation</h3>
                            <p className="text-gray-700 leading-relaxed">La zone moyenne est dominée par les bambous géants, qui forment parfois de véritables tunnels verts à travers lesquels le sentier serpente. On y trouve également des bruyères et des arbustes qui se dressent fièrement sur les pentes. Cette végétation moins dense permet aux randonneurs de voir le relief et de commencer à apprécier la grandeur de la montagne. Les sols sont souvent recouverts de feuilles mortes et de racines exposées, ce qui rend la marche plus technique et demande de l'attention.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Faune</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">La faune devient un peu plus discrète que dans la zone de base, mais elle est toujours présente et fascinante :</p>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• Oiseaux de moyenne altitude aux chants mélodieux, parfois endémiques.</li>
                              <li>• Petits mammifères, comme les civettes ou écureuils, qui se déplacent furtivement dans les buissons.</li>
                              <li>• Insectes et arachnides adaptés au climat plus sec et frais.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">La densité de la faune est moindre, mais chaque rencontre est souvent plus mémorable car les animaux sont plus visibles dans les espaces ouverts.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Expérience du randonneur</h3>
                            <p className="text-gray-700 leading-relaxed">Marcher dans la zone moyenne offre un équilibre entre effort et contemplation. Le sentier devient plus exigeant physiquement : les pentes sont parfois plus raides, les roches et racines obligent à lever le pied et à garder l'équilibre. Mais la récompense est immédiate : les paysages s'ouvrent, la lumière du soleil traverse les bambous et les collines offrent des vues spectaculaires sur la vallée.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">C'est aussi dans cette zone que le corps commence à ressentir les effets de l'altitude plus haut. La respiration peut se faire plus courte lors des montées, et il est essentiel de maintenir un rythme régulier et de faire des pauses pour s'hydrater et admirer le paysage.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils pratiques pour les randonneurs</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• <strong>Rythme :</strong> avancer à un rythme constant pour économiser l'énergie.</li>
                              <li>• <strong>Équipement :</strong> des chaussures robustes et une veste légère coupe-vent sont recommandées.</li>
                              <li>• <strong>Hydratation :</strong> boire régulièrement et profiter des sources naturelles si elles sont accessibles.</li>
                              <li>• <strong>Observation :</strong> utiliser cette zone pour commencer à repérer les changements dans la végétation et le relief, et préparer son corps pour les zones alpines.</li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-700 bg-teal-50 p-4 rounded">Dans certaines montagnes, les bambous ont été utilisés par les communautés locales pour construire des ponts, des abris et des outils. Les anciens racontent que marcher dans ces collines permet de sentir la "respiration de la montagne", car le vent qui traverse les bambous crée des sons presque mystiques. Les sentiers sont souvent jalonnés de fleurs sauvages saisonnières, qui changent de couleur au fil de l'année, offrant un spectacle vivant et éphémère aux randonneurs attentifs.</blockquote>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Zone 3 Accordion */}
                  <div key="zone3" id="zone3-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedZone(expandedZone === 'zone3' ? null : 'zone3')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">Zone 3 : La Zone Alpine – Herbes Hautes et Brumes Matinales</h2>
                        <p className="text-gray-600 text-sm">Altitude, herbes alpines, climat rigoureux</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedZone === 'zone3' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedZone === 'zone3' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">Après avoir quitté la zone moyenne, l'ascension entre dans la zone alpine, généralement située entre 3 000 et 4 000 mètres d'altitude. Ici, le paysage change radicalement : les arbres disparaissent presque complètement, laissant place à des herbes hautes, des buissons clairsemés et des rochers épars. La montagne prend un aspect plus austère et sauvage, et la brume matinale descend souvent sur les pentes, donnant une atmosphère mystérieuse et presque irréelle.</p>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Climat et conditions</h3>
                            <p className="text-gray-700 leading-relaxed">Le climat alpin est plus rigoureux et variable. Les températures diurnes oscillent généralement entre 5 et 15°C, mais elles peuvent descendre près de 0°C la nuit ou lorsque le vent souffle. Le soleil peut être intense à cause de l'altitude, et l'exposition prolongée sans protection peut provoquer des coups de soleil. Les vents deviennent plus perceptibles, surtout sur les crêtes et zones dégagées, et la météo peut changer très rapidement, alternant brume, pluie légère ou soleil éclatant.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Végétation</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">La zone alpine est caractérisée par une végétation basse et résistante. On y trouve principalement :</p>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• Des herbes hautes qui ondulent sous le vent, parfois couvertes de givre le matin.</li>
                              <li>• Des buissons robustes adaptés au froid et au vent.</li>
                              <li>• Quelques fleurs sauvages de haute altitude qui apparaissent seulement pendant la courte saison chaude.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">Les sols deviennent plus rocailleux, avec des racines apparentes et des pierres instables, rendant le sentier plus technique et exigeant pour l'équilibre. La végétation clairsemée permet de mieux observer le relief et les formations géologiques de la montagne.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Faune</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">La faune dans la zone alpine est plus discrète et spécialisée :</p>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• Oiseaux de haute altitude, souvent migrateurs, qui profitent des courants d'air pour se déplacer.</li>
                              <li>• Petits mammifères, comme certaines espèces de rongeurs, capables de survivre dans des conditions froides et venteuses.</li>
                              <li>• Insectes adaptés au froid, rarement visibles mais essentiels à l'écosystème local.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">La rencontre avec la faune est moins fréquente, mais chaque observation est précieuse et témoigne de l'adaptabilité des espèces à l'altitude.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Expérience du randonneur</h3>
                            <p className="text-gray-700 leading-relaxed">Marcher dans la zone alpine est une expérience à la fois physique et mentale. Le sentier devient plus exigeant, avec des rochers, des pentes et des sols irréguliers. Le corps ressent l'altitude : la respiration devient plus rapide, la fatigue apparaît plus vite, et l'eau devient essentielle pour maintenir l'énergie.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">Mais cette zone offre aussi des paysages spectaculaires et inspirants. La brume matinale crée des jeux de lumière incroyables sur les herbes et les rochers, et chaque avancée sur le sentier révèle de nouvelles perspectives sur la vallée et les montagnes environnantes. C'est un moment où le randonneur commence à sentir la grandeur et la puissance de la montagne.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils pratiques pour les randonneurs</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• <strong>Vêtements :</strong> superposer les couches pour s'adapter au froid, au vent et au soleil.</li>
                              <li>• <strong>Protection solaire :</strong> lunettes et crème solaire indispensables.</li>
                              <li>• <strong>Rythme :</strong> avancer lentement et régulièrement pour économiser de l'énergie et éviter le mal d'altitude.</li>
                              <li>• <strong>Observation :</strong> profiter de la végétation et des formations géologiques pour mieux comprendre l'évolution de la montagne avec l'altitude.</li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-700 bg-teal-50 p-4 rounded">Dans de nombreuses montagnes, la zone alpine est considérée par les communautés locales comme une zone sacrée ou spirituelle, où la nature est reine et où seuls les randonneurs respectueux peuvent progresser. Certains anciens racontent que marcher dans cette zone à l'aube permet d'entendre le "souffle de la montagne" : le vent qui traverse les herbes et les rochers crée des sons uniques, presque mélodiques, qui marquent l'expérience de l'ascension.</blockquote>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Zone 4 Accordion */}
                  <div key="zone4" id="zone4-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedZone(expandedZone === 'zone4' ? null : 'zone4')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">Zone 4 : La Zone Subglaciaire – Rochers et Début de la Neige</h2>
                        <p className="text-gray-600 text-sm">Conditions extrêmes, neige, rareté de l'air</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedZone === 'zone4' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedZone === 'zone4' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">Après avoir traversé la zone alpine, l'ascension entre dans la zone subglaciaire, généralement située entre 4 000 et 5 000 mètres d'altitude selon la montagne. Ici, la montagne change radicalement : les herbes et buissons disparaissent presque entièrement, laissant place à des roches, des pierres instables et des plaques de neige. Le vent devient un acteur majeur, parfois violent, et l'air devient plus rare et sec. Cette zone marque le début des conditions vraiment extrêmes, où chaque pas demande attention et concentration.</p>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Climat et conditions</h3>
                            <p className="text-gray-700 leading-relaxed">La zone subglaciaire est caractérisée par un climat froid et rigoureux. Les températures peuvent varier entre -5 et 5°C, mais avec le vent, la sensation peut descendre bien en dessous de zéro. Les précipitations se font principalement sous forme de neige ou de grésil, et la visibilité peut changer rapidement avec la brume ou les nuages. Le soleil peut aussi être intense, car l'air rare filtre moins les rayons UV, ce qui rend la protection solaire indispensable même dans le froid.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">Le vent est souvent fort et constant, pouvant rendre la marche difficile et augmenter le risque d'hypothermie. L'humidité est faible, et la combinaison de froid, vent et altitude exige une préparation physique et mentale importante.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Végétation</h3>
                            <p className="text-gray-700 leading-relaxed">La végétation est quasi inexistante dans la zone subglaciaire. On trouve parfois quelques mousses ou lichens résistants, mais les plantes sont rares et adaptées au froid et au vent. Les sols sont principalement constitués de rochers instables, de gravier et de neige compacte. Cette zone offre un paysage plus minéral et austère, révélant la force brute de la montagne.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Faune</h3>
                            <p className="text-gray-700 leading-relaxed mb-3">La faune devient très limitée à cette altitude, mais certaines espèces survivent grâce à leur adaptation :</p>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• Oiseaux spécialisés, comme certains rapaces ou corbeaux de haute montagne, capables de planer sur les vents violents.</li>
                              <li>• Petits mammifères résilients, souvent cachés dans les crevasses rocheuses.</li>
                              <li>• Les insectes et autres invertébrés sont quasiment absents, mais quelques espèces de coléoptères ou arachnides peuvent apparaître dans des zones abritées.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">Chaque rencontre avec la faune est rare et précieuse, renforçant le sentiment d'être dans un environnement extrême et presque vierge.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Expérience du randonneur</h3>
                            <p className="text-gray-700 leading-relaxed">Pour le randonneur, la zone subglaciaire est un vrai test de préparation physique et mentale. Les sentiers sont souvent escarpés, instables et partiellement enneigés. L'altitude se fait sentir : la respiration devient plus courte, la fatigue apparaît rapidement et le rythme doit être régulé pour éviter le mal d'altitude.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">Malgré la difficulté, la zone subglaciaire offre une beauté unique et dramatique. Les formations rocheuses, les plaques de neige et la lumière filtrée par le vent et les nuages créent des paysages impressionnants et sauvages. Chaque pas devient une exploration attentive, où la prudence est aussi importante que l'émerveillement.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils pratiques pour les randonneurs</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• <strong>Équipement :</strong> chaussures robustes, crampons si nécessaire, bâtons de randonnée, gants isolants et vêtements coupe-vent.</li>
                              <li>• <strong>Rythme :</strong> avancer lentement et régulièrement pour économiser l'énergie et limiter les risques liés à l'altitude.</li>
                              <li>• <strong>Hydratation et nourriture :</strong> boire régulièrement et consommer des encas riches en énergie.</li>
                              <li>• <strong>Sécurité :</strong> suivre strictement le guide et rester sur le sentier balisé pour éviter les zones instables.</li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-700 bg-teal-50 p-4 rounded">Dans de nombreuses montagnes, la zone subglaciaire est considérée comme le domaine des esprits de la montagne par les communautés locales. Les anciens racontent que marcher dans cette zone exige respect et discipline : le vent, le froid et la neige sont vus comme des épreuves naturelles qui renforcent le corps et l'esprit. Les guides expérimentés enseignent souvent aux randonneurs à écouter le rythme de la montagne : le son du vent, la forme des nuages et la texture de la neige indiquent le meilleur chemin et le bon moment pour avancer.</blockquote>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Zone 5 Accordion */}
                  <div key="zone5" id="zone5-detail" className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                    <button
                      onClick={() => setExpandedZone(expandedZone === 'zone5' ? null : 'zone5')}
                      className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                    >
                      <div className="flex-1 pr-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">Zone 5 : La Zone Sommital – Neige, Glaciers et Panoramas Spectaculaires</h2>
                        <p className="text-gray-600 text-sm">Sommet, glaciers, conditions lunaires</p>
                      </div>
                      <div className="mt-1 flex-shrink-0">
                        {expandedZone === 'zone5' ? (
                          <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {expandedZone === 'zone5' && (
                      <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                        <div className="space-y-4">
                          <p className="text-gray-700 leading-relaxed">Enfin, l'ascension atteint la zone sommital, généralement située au-dessus de 5 000 mètres selon la montagne. Ici, le paysage devient presque lunaire : la neige est permanente, les glaciers étincellent au soleil et le vent souffle puissamment sur les crêtes. La végétation a disparu, remplacée par des surfaces rocheuses et glacées, et l'air est rare et sec. C'est la zone la plus extrême, où le corps et l'esprit sont véritablement mis à l'épreuve.</p>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Climat et conditions</h3>
                            <p className="text-gray-700 leading-relaxed">Le climat sommital est extrême et changeant. Les températures peuvent descendre à -20°C ou moins lorsque le vent souffle, et même au soleil, la sensation thermique reste très froide. La pression atmosphérique est faible, ce qui rend la respiration plus difficile et augmente la fatigue. La neige et la glace rendent le sol glissant et instable, et la visibilité peut être réduite par la brume, les nuages ou les tempêtes soudaines. Le soleil est intense à cause de l'altitude : les rayons UV peuvent provoquer des coups de soleil graves si la peau et les yeux ne sont pas protégés.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Végétation</h3>
                            <p className="text-gray-700 leading-relaxed">La zone sommital est dépourvue de végétation. Parfois, de minuscules lichens ou mousses survivent sur les rochers les plus abrités, mais ils sont rares et fragiles. Le paysage est dominé par la neige, la glace, les glaciers et les formations rocheuses spectaculaires. Cette absence de végétation met en valeur la puissance brute de la montagne et la beauté de ses reliefs sculptés par le temps et le climat.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Faune</h3>
                            <p className="text-gray-700 leading-relaxed">La faune est quasi inexistante dans la zone sommital, à l'exception de quelques oiseaux adaptables à l'altitude, comme certains rapaces, et de petits mammifères pouvant se réfugier dans les crevasses. Chaque rencontre avec un animal est donc rare et précieuse. La zone se concentre surtout sur l'expérience humaine face à la nature extrême et sur l'observation des glaciers, de la neige et des formations rocheuses.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Expérience du randonneur</h3>
                            <p className="text-gray-700 leading-relaxed">Atteindre le sommet est l'accomplissement ultime de l'ascension. Chaque pas est un effort, car l'air raréfié rend la respiration difficile et la fatigue intense. Les vents forts obligent à avancer penché ou à se protéger avec les bâtons et le corps. La neige et la glace nécessitent souvent des crampons et des techniques de marche adaptées.</p>
                            <p className="text-gray-700 leading-relaxed mt-3">Mais l'expérience est inoubliable : lorsque la brume se dissipe, le panorama est spectaculaire. Les vallées, les glaciers et les sommets environnants s'offrent au regard, créant un sentiment d'émerveillement, de liberté et de victoire. La zone sommital est le point culminant de l'ascension par zones : chaque effort fourni dans les zones précédentes trouve ici sa récompense.</p>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Conseils pratiques pour les randonneurs</h3>
                            <ul className="text-gray-700 space-y-2 ml-4">
                              <li>• <strong>Équipement :</strong> crampons, bâtons de randonnée, gants isolants, lunettes de soleil, veste coupe-vent et protection thermique complète.</li>
                              <li>• <strong>Acclimatation :</strong> prendre son temps et écouter son corps pour éviter le mal aigu des montagnes.</li>
                              <li>• <strong>Hydratation et nutrition :</strong> boire régulièrement et consommer des aliments énergétiques.</li>
                              <li>• <strong>Sécurité :</strong> suivre strictement le guide, avancer en groupe et rester sur les chemins balisés.</li>
                            </ul>
                          </div>

                          <blockquote className="border-l-4 border-teal-300 pl-4 italic text-gray-700 bg-teal-50 p-4 rounded">Pour les communautés locales, le sommet représente souvent le domaine sacré des montagnes. Les anciens racontent que marcher sur la zone sommital est une épreuve de respect et de patience : la montagne teste le corps et l'esprit, et seul celui qui progresse avec prudence et humilité peut profiter pleinement de sa beauté. Les guides expérimentés enseignent aux randonneurs à lire les signes de la montagne : la couleur des nuages, le bruit du vent sur la neige, ou la texture de la glace peuvent indiquer le chemin le plus sûr. Chaque sommet est unique, et chaque ascension laisse des souvenirs durables. La zone sommital n'est pas seulement un lieu physique : c'est un lieu d'émotion, de découverte et de respect pour la puissance de la nature.</blockquote>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            {locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            {locale === 'fr' ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our best Kilimanjaro routes'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href={`/${locale}/trips/marangu-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image src="/images/marangu-route.jpg" alt="Marangu Route" fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">{locale === 'fr' ? 'À partir de 1 800 €' : 'From $1,800'}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">{locale === 'fr' ? 'Route Marangu' : 'Marangu Route'}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{locale === 'fr' ? 'Conquérir le Toit de l\'Afrique : L\'Ascension du Kilimandjaro par la Route Marangu en 5 Jours' : 'Conquer the Roof of Africa: Climbing Kilimanjaro via the Marangu Route in 5 Days'}</p>
                  <p className="text-gray-700 mb-4 text-sm">{locale === 'fr' ? 'Envie de vous tenir sur le toit de l\'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !' : 'Want to stand on the roof of Africa? Climb Kilimanjaro with us and create unforgettable memories!'}</p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2"><span>⏱️</span><span>{locale === 'fr' ? '5 jours' : '5 days'}</span></span>
                    <span className="flex items-center gap-1 text-red-500">★★★★★ <span className="text-gray-600 text-sm">(5.0)</span></span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/trips/lemosho-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image src="/images/lemosho-route.jpg" alt="Lemosho Route" fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">{locale === 'fr' ? 'À partir de 2 200 €' : 'From $2,200'}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">{locale === 'fr' ? 'Route Lemosho' : 'Lemosho Route'}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{locale === 'fr' ? 'L\'Aventure Panoramique : Itinéraire Lemosho en 7 Jours' : 'The Panoramic Adventure: Lemosho Itinerary in 7 Days'}</p>
                  <p className="text-gray-700 mb-4 text-sm">{locale === 'fr' ? 'La voie Lemosho est réputée comme l\'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro. Avec un profil d\'acclimatation en 7 jours, cet itinéraire maximise vos chances d\'atteindre le sommet en toute sécurité, traversant cinq zones climatiques différentes' : 'The Lemosho route is renowned as one of the most spectacular itineraries. It offers breathtaking views of the west and south flanks of Kilimanjaro. With a 7-day acclimatization profile, this itinerary maximizes your chances of reaching the summit safely, traversing five different climate zones'}</p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2"><span>⏱️</span><span>{locale === 'fr' ? '7 jours' : '7 days'}</span></span>
                    <span className="flex items-center gap-1 text-red-500">★★★★★ <span className="text-gray-600 text-sm">(5.0)</span></span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/${locale}/trips/umbwe-route`} className="block">
              <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                <div className="relative h-64 bg-gradient-to-b from-gray-300 to-gray-200 flex items-center justify-center">
                  <Image src="/images/umbwe-route.jpg" alt="Umbwe Route" fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-[#00A896] text-white px-4 py-2 rounded-full font-semibold text-sm">{locale === 'fr' ? 'À partir de 1 900 €' : 'From $1,900'}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00A896] mb-2">{locale === 'fr' ? 'Route Umbwe' : 'Umbwe Route'}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{locale === 'fr' ? 'L\'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)' : 'The Umbwe Itinerary: The Vertical Challenge of Kilimanjaro (6 Days)'}</p>
                  <p className="text-gray-700 mb-4 text-sm">{locale === 'fr' ? 'Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l\'itinéraire Umbwe est parfait pour les randonneurs expérimentés à la recherche d\'un défi unique et d\'une solitude relative. C\'est un trek intense et direct, exigeant une excellente condition physique et une gestion rigoureuse de l\'altitude.' : 'Often described as the shortest and most challenging route on Kilimanjaro, the Umbwe itinerary is perfect for experienced hikers seeking a unique challenge and relative solitude. It\'s an intense and direct trek, requiring excellent physical condition and rigorous altitude management.'}</p>
                  <div className="flex items-center justify-between text-gray-700">
                    <span className="flex items-center gap-2"><span>⏱️</span><span>{locale === 'fr' ? '6 jours' : '6 days'}</span></span>
                    <span className="flex items-center gap-1 text-red-500">★★★★☆ <span className="text-gray-600 text-sm">(4.5)</span></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kilimanjaro-summit.jpg"
            alt="Kilimanjaro background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{locale === 'fr' ? 'Prêt à commencer ?' : 'Ready to begin?'}</h2>
          <h3 className="text-2xl font-bold mb-6">{locale === 'fr' ? 'Rejoignez-nous pour l\'aventure' : 'Join us for the adventure'}</h3>
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
  )
}