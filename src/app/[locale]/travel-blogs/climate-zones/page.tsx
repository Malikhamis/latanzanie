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

export default function ClimateZonesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add pulse animation to headers on initial load
  useEffect(() => {
    const headers = document.querySelectorAll('section[id^="zone"] h2');
    headers.forEach(header => {
      header.classList.add('animate-pulse-once');
    });
    
    // Clean up animation class after initial pulse
    const timeout = setTimeout(() => {
      headers.forEach(header => {
        header.classList.remove('animate-pulse-once');
      });
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [])

  // Define sections for TOC with hardcoded French titles
  const sections: Section[] = [
    { id: 'introduction', title: 'Kilimandjaro : Le Guide Complet des 5 Zones Climatiques et Altitudes' },
    { id: 'zone1', title: 'Zone 1 : La Zone de Base – Forêts tropicales et humides' },
    { id: 'zone2', title: 'Zone 2 : La Zone Moyenne – Collines et Forêts de Bambous' },
    { id: 'zone3', title: 'Zone 3 : La Zone Alpine – Herbes Hautes et Brumes Matinales' },
    { id: 'zone4', title: 'Zone 4 : La Zone Subglaciaire – Rochers et Début de la Neige' },
    { id: 'zone5', title: 'Zone 5 : La Zone Sommital – Neige, Glaciers et Panoramas Spectaculaires' }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero6.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
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
            readingTime="15 min de lecture"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => {}}
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
                  onSelect={(id: string) => {}}
                />
              </div>
            </aside>
            
            <div className="flex-1 space-y-8">
              {/* Introduction Section */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kilimandjaro : Le Guide Complet des 5 Zones Climatiques et Altitudes
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Gravir une montagne n'est jamais qu'une simple marche. Chaque pas nous fait entrer dans un univers naturel unique, où le climat, la végétation, les défis physiques et les sensations évoluent à mesure que l'on gagne de l'altitude. Les experts parlent des cinq zones climatiques, ou "cloches", qui jalonnent l'ascension. Comprendre ces zones permet aux randonneurs de mieux s'acclimater, de profiter pleinement des paysages et de vivre une expérience immersive et sécurisée.</p>
                </div>
              </section>

              {/* Zone 1 Section */}
              <section id="zone1" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Zone 1 : La Zone de Base – Forêts tropicales et humides</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4"><strong>Mots-clés :</strong> randonnée montagne débutant, trek Tanzanie, acclimatation altitude, faune et flore tropicale</p>
                    
                    <p className="mb-4">L'aventure commence toujours dans la zone de base, souvent située entre 800 et 2 000 mètres d'altitude selon la montagne. Cette zone est caractérisée par des forêts tropicales humides, où l'air est chaud et saturé d'humidité, chargé de l'odeur des feuilles, de la terre humide et des fleurs sauvages. La végétation est dense : arbres géants, lianes, fougères et bambous se mêlent pour créer un véritable labyrinthe naturel. Marcher sur les sentiers de cette zone, c'est comme pénétrer dans un autre monde, où chaque pas révèle une nouvelle forme de vie.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Climat et conditions</h3>
                    <p className="mb-4">Le climat est généralement chaud et humide, avec des températures oscillant entre 20 et 28°C selon la saison. Les pluies sont fréquentes, surtout le matin ou en fin d'après-midi, ce qui rend les sentiers boueux et glissants. L'humidité élevée favorise également la prolifération de mousses et de champignons qui recouvrent les troncs et les pierres, ajoutant une touche mystique au paysage. L'air, riche en oxygène à cette altitude, permet au corps de s'acclimater progressivement avant les zones plus élevées.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Végétation</h3>
                    <p className="mb-4">La végétation est exceptionnellement diversifiée. On y trouve des arbres centenaires pouvant dépasser 40 mètres de hauteur, avec des racines impressionnantes qui s'étendent comme des tentacules dans le sol humide. Les fougères et les lianes couvrent les troncs et les branches, créant des arches vertes naturelles. Certains bambous peuvent atteindre 10 mètres et former des haies presque impénétrables. Cette densité végétale offre un habitat idéal pour de nombreuses espèces animales.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Faune</h3>
                    <p className="mb-4">La zone de base est un véritable paradis pour la faune. On y croise souvent :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Des oiseaux tropicaux, aux plumages éclatants et chants variés. Certains sont endémiques, visibles uniquement dans cette région.</li>
                      <li>Des singes agiles qui se déplacent entre les arbres avec une facilité déconcertante.</li>
                      <li>Des reptiles et amphibiens comme des grenouilles colorées et des lézards, adaptés à l'humidité.</li>
                      <li>De petits mammifères, parfois discrets, mais qui ajoutent à la richesse de l'écosystème.</li>
                    </ul>
                    <p className="mb-4">Observer la faune demande patience et discrétion, mais la récompense est immense : la zone de base est souvent le lieu où les randonneurs prennent leurs premières photos mémorables.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Expérience du randonneur</h3>
                    <p className="mb-4">Pour le randonneur, cette zone est un véritable échauffement naturel. Les sentiers peuvent être boueux, mais la beauté de la nature incite à ralentir, respirer profondément et profiter de l'environnement. L'air humide et l'altitude modérée permettent au corps de s'adapter progressivement, ce qui est essentiel pour éviter le mal d'altitude dans les zones plus élevées.</p>
                    <p className="mb-4">C'est aussi l'endroit idéal pour :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Observer les différences de microclimats : certaines zones peuvent être plus sèches ou plus humides selon l'ombre des arbres et l'exposition au soleil.</li>
                      <li>Apprendre à reconnaître les plantes médicinales locales, utilisées depuis des générations par les communautés locales.</li>
                      <li>Repérer les traces d'animaux, comme les empreintes dans la boue, qui révèlent la vie active de la forêt.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Conseils pratiques pour les randonneurs</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Chaussures : des chaussures de randonnée imperméables et antidérapantes sont indispensables.</li>
                      <li>Vêtements : porter des vêtements respirants et légers, mais prévoir une veste imperméable en cas de pluie.</li>
                      <li>Hydratation et pauses : boire régulièrement et profiter des points d'eau naturelle si sécurisés.</li>
                      <li>Observation : garder un œil attentif pour repérer la faune et profiter pleinement de la richesse végétale.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Anecdotes locales</h3>
                    <p className="mb-4">Dans certaines montagnes tropicales, les habitants racontent que les singes de la zone de base peuvent guider les randonneurs vers des sources d'eau ou des sentiers sûrs. Les vieux arbres, souvent marqués par des signes anciens, témoignent des siècles de présence humaine et naturelle. Marcher ici, c'est se connecter à un écosystème vivant et ancien, qui reste relativement intact dans de nombreuses régions grâce à la conservation locale.</p>
                  </div>
                </div>
              </section>

              {/* Zone 2 Section */}
              <section id="zone2" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Zone 2 : La Zone Moyenne – Collines et Forêts de Bambous</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4"><strong>Mots-clés :</strong> trek haute altitude, randonnée immersive, paysages montagneux, forêts de bambous</p>
                    
                    <p className="mb-4">Après avoir quitté l'humidité dense et la végétation luxuriante de la zone de base, l'ascension mène à la zone moyenne, souvent située entre 2 000 et 3 000 mètres d'altitude selon la montagne. Ici, le paysage change radicalement : les forêts tropicales cèdent la place aux collines ondulantes, aux forêts de bambous et aux bruyères. L'air est plus sec, plus frais, et le panorama commence à s'ouvrir sur les vallées et les montagnes environnantes. C'est un espace de transition, où le corps continue à s'acclimater à l'altitude, tandis que l'esprit se prépare aux zones plus exigeantes à venir.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Climat et conditions</h3>
                    <p className="mb-4">Le climat dans la zone moyenne est plus tempéré que dans la zone de base, avec des températures comprises entre 15 et 22°C. Les matinées peuvent être fraîches, et le vent commence à se faire sentir, surtout sur les crêtes exposées. Les précipitations sont moins fréquentes, mais des averses localisées peuvent survenir, rendant certaines parties du sentier glissantes. La visibilité est généralement meilleure que dans la zone de base, offrant de superbes panoramas sur la vallée et les collines.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Végétation</h3>
                    <p className="mb-4">La zone moyenne est dominée par les bambous géants, qui forment parfois de véritables tunnels verts à travers lesquels le sentier serpente. On y trouve également des bruyères et des arbustes qui se dressent fièrement sur les pentes. Cette végétation moins dense permet aux randonneurs de voir le relief et de commencer à apprécier la grandeur de la montagne. Les sols sont souvent recouverts de feuilles mortes et de racines exposées, ce qui rend la marche plus technique et demande de l'attention.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Faune</h3>
                    <p className="mb-4">La faune devient un peu plus discrète que dans la zone de base, mais elle est toujours présente et fascinante :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Oiseaux de moyenne altitude aux chants mélodieux, parfois endémiques.</li>
                      <li>Petits mammifères, comme les civettes ou écureuils, qui se déplacent furtivement dans les buissons.</li>
                      <li>Insectes et arachnides adaptés au climat plus sec et frais.</li>
                    </ul>
                    <p className="mb-4">La densité de la faune est moindre, mais chaque rencontre est souvent plus mémorable car les animaux sont plus visibles dans les espaces ouverts.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Expérience du randonneur</h3>
                    <p className="mb-4">Marcher dans la zone moyenne offre un équilibre entre effort et contemplation. Le sentier devient plus exigeant physiquement : les pentes sont parfois plus raides, les roches et racines obligent à lever le pied et à garder l'équilibre. Mais la récompense est immédiate : les paysages s'ouvrent, la lumière du soleil traverse les bambous et les collines offrent des vues spectaculaires sur la vallée.</p>
                    <p className="mb-4">C'est aussi dans cette zone que le corps commence à ressentir les effets de l'altitude plus haut. La respiration peut se faire plus courte lors des montées, et il est essentiel de maintenir un rythme régulier et de faire des pauses pour s'hydrater et admirer le paysage.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Conseils pratiques pour les randonneurs</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Rythme : avancer à un rythme constant pour économiser l'énergie.</li>
                      <li>Équipement : des chaussures robustes et une veste légère coupe-vent sont recommandées.</li>
                      <li>Hydratation : boire régulièrement et profiter des sources naturelles si elles sont accessibles.</li>
                      <li>Observation : utiliser cette zone pour commencer à repérer les changements dans la végétation et le relief, et préparer son corps pour les zones alpines.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Anecdotes et éléments locaux</h3>
                    <p className="mb-4">Dans certaines montagnes, les bambous ont été utilisés par les communautés locales pour construire des ponts, des abris et des outils. Les anciens racontent que marcher dans ces collines permet de sentir la "respiration de la montagne", car le vent qui traverse les bambous crée des sons presque mystiques. Les sentiers sont souvent jalonnés de fleurs sauvages saisonnières, qui changent de couleur au fil de l'année, offrant un spectacle vivant et éphémère aux randonneurs attentifs.</p>
                  </div>
                </div>
              </section>

              {/* Zone 3 Section */}
              <section id="zone3" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Zone 3 : La Zone Alpine – Herbes Hautes et Brumes Matinales</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4"><strong>Mots-clés :</strong> trekking haute montagne, randonnée alpine, acclimatation altitude, panoramas montagne</p>
                    
                    <p className="mb-4">Après avoir quitté la zone moyenne, l'ascension entre dans la zone alpine, généralement située entre 3 000 et 4 000 mètres d'altitude. Ici, le paysage change radicalement : les arbres disparaissent presque complètement, laissant place à des herbes hautes, des buissons clairsemés et des rochers épars. La montagne prend un aspect plus austère et sauvage, et la brume matinale descend souvent sur les pentes, donnant une atmosphère mystérieuse et presque irréelle.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Climat et conditions</h3>
                    <p className="mb-4">Le climat alpin est plus rigoureux et variable. <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Les températures</Link> diurnes oscillent généralement entre 5 et 15°C, mais elles peuvent descendre près de 0°C la nuit ou lorsque le vent souffle. Le soleil peut être intense à cause de l'altitude, et l'exposition prolongée sans protection peut provoquer des coups de soleil. Les vents deviennent plus perceptibles, surtout sur les crêtes et zones dégagées, et la météo peut changer très rapidement, alternant brume, pluie légère ou soleil éclatant.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Végétation</h3>
                    <p className="mb-4">La zone alpine est caractérisée par une végétation basse et résistante. On y trouve principalement :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Des herbes hautes qui ondulent sous le vent, parfois couvertes de givre le matin.</li>
                      <li>Des buissons robustes adaptés au froid et au vent.</li>
                      <li>Quelques fleurs sauvages de haute altitude qui apparaissent seulement pendant la courte saison chaude.</li>
                    </ul>
                    <p className="mb-4">Les sols deviennent plus rocailleux, avec des racines apparentes et des pierres instables, rendant le sentier plus technique et exigeant pour l'équilibre. La végétation clairsemée permet de mieux observer le relief et les formations géologiques de la montagne.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Faune</h3>
                    <p className="mb-4">La faune dans la zone alpine est plus discrète et spécialisée :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Oiseaux de haute altitude, souvent migrateurs, qui profitent des courants d'air pour se déplacer.</li>
                      <li>Petits mammifères, comme certaines espèces de rongeurs, capables de survivre dans des conditions froides et venteuses.</li>
                      <li>Insectes adaptés au froid, rarement visibles mais essentiels à l'écosystème local.</li>
                    </ul>
                    <p className="mb-4">La rencontre avec la faune est moins fréquente, mais chaque observation est précieuse et témoigne de l'adaptabilité des espèces à l'altitude.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Expérience du randonneur</h3>
                    <p className="mb-4">Marcher dans la zone alpine est une expérience à la fois physique et mentale. Le sentier devient plus exigeant, avec des rochers, des pentes et des sols irréguliers. Le corps ressent l'altitude : la respiration devient plus rapide, la fatigue apparaît plus vite, et l'eau devient essentielle pour maintenir l'énergie.</p>
                    <p className="mb-4">Mais cette zone offre aussi des paysages spectaculaires et inspirants. La brume matinale crée des jeux de lumière incroyables sur les herbes et les rochers, et chaque avancée sur le sentier révèle de nouvelles perspectives sur la vallée et les montagnes environnantes. C'est un moment où le randonneur commence à sentir la grandeur et la puissance de la montagne.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Conseils pratiques pour les randonneurs</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Vêtements : superposer les couches pour s'adapter au froid, au vent et au soleil.</li>
                      <li>Protection solaire : lunettes et crème solaire indispensables.</li>
                      <li>Rythme : avancer lentement et régulièrement pour économiser de l'énergie et éviter le mal d'altitude.</li>
                      <li>Observation : profiter de la végétation et des formations géologiques pour mieux comprendre l'évolution de la montagne avec l'altitude.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Anecdotes et éléments locaux</h3>
                    <p className="mb-4">Dans de nombreuses montagnes, la zone alpine est considérée par les communautés locales comme une zone sacrée ou spirituelle, où la nature est reine et où seuls les randonneurs respectueux peuvent progresser. Certains anciens racontent que marcher dans cette zone à l'aube permet d'entendre le "souffle de la montagne" : le vent qui traverse les herbes et les rochers crée des sons uniques, presque mélodiques, qui marquent l'expérience de l'ascension.</p>
                  </div>
                </div>
              </section>

              {/* Zone 4 Section */}
              <section id="zone4" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Zone 4 : La Zone Subglaciaire – Rochers et Début de la Neige</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4"><strong>Mots-clés :</strong> trekking extrême, randonnée haute altitude, glaciers montagne, sécurité randonnée</p>
                    
                    <p className="mb-4">Après avoir traversé la zone alpine, l'ascension entre dans la zone subglaciaire, généralement située entre 4 000 et 5 000 mètres d'altitude selon la montagne. Ici, la montagne change radicalement : les herbes et buissons disparaissent presque entièrement, laissant place à des roches, des pierres instables et des plaques de neige. Le vent devient un acteur majeur, parfois violent, et l'air devient plus rare et sec. Cette zone marque le début des conditions vraiment extrêmes, où chaque pas demande attention et concentration.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Climat et conditions</h3>
                    <p className="mb-4">La zone subglaciaire est caractérisée par un climat froid et rigoureux. <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Les températures</Link> peuvent varier entre -5 et 5°C, mais avec le vent, la sensation peut descendre bien en dessous de zéro. Les précipitations se font principalement sous forme de neige ou de grésil, et la visibilité peut changer rapidement avec la brume ou les nuages. Le soleil peut aussi être intense, car l'air rare filtre moins les rayons UV, ce qui rend la protection solaire indispensable même dans le froid.</p>
                    <p className="mb-4">Le vent est souvent fort et constant, pouvant rendre la marche difficile et augmenter le risque d'hypothermie. L'humidité est faible, et la combinaison de froid, vent et altitude exige une préparation physique et mentale importante.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Végétation</h3>
                    <p className="mb-4">La végétation est quasi inexistante dans la zone subglaciaire. On trouve parfois quelques mousses ou lichens résistants, mais les plantes sont rares et adaptées au froid et au vent. Les sols sont principalement constitués de rochers instables, de gravier et de neige compacte. Cette zone offre un paysage plus minéral et austère, révélant la force brute de la montagne.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Faune</h3>
                    <p className="mb-4">La faune devient très limitée à cette altitude, mais certaines espèces survivent grâce à leur adaptation :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Oiseaux spécialisés, comme certains rapaces ou corbeaux de haute montagne, capables de planer sur les vents violents.</li>
                      <li>Petits mammifères résilients, souvent cachés dans les crevasses rocheuses.</li>
                      <li>Les insectes et autres invertébrés sont quasiment absents, mais quelques espèces de coléoptères ou arachnides peuvent apparaître dans des zones abritées.</li>
                    </ul>
                    <p className="mb-4">Chaque rencontre avec la faune est rare et précieuse, renforçant le sentiment d'être dans un environnement extrême et presque vierge.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Expérience du randonneur</h3>
                    <p className="mb-4">Pour le randonneur, la zone subglaciaire est un vrai test de préparation physique et mentale. Les sentiers sont souvent escarpés, instables et partiellement enneigés. L'altitude se fait sentir : la respiration devient plus courte, la fatigue apparaît rapidement et le rythme doit être régulé pour éviter le mal d'altitude.</p>
                    <p className="mb-4">Malgré la difficulté, la zone subglaciaire offre une beauté unique et dramatique. Les formations rocheuses, les plaques de neige et la lumière filtrée par le vent et les nuages créent des paysages impressionnants et sauvages. Chaque pas devient une exploration attentive, où la prudence est aussi importante que l'émerveillement.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Conseils pratiques pour les randonneurs</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Équipement : chaussures robustes, crampons si nécessaire, bâtons de randonnée, gants isolants et vêtements coupe-vent.</li>
                      <li>Rythme : avancer lentement et régulièrement pour économiser l'énergie et limiter les risques liés à l'altitude.</li>
                      <li>Hydratation et nourriture : boire régulièrement et consommer des encas riches en énergie.</li>
                      <li>Sécurité : suivre strictement le guide et rester sur le sentier balisé pour éviter les zones instables.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Anecdotes et éléments locaux</h3>
                    <p className="mb-4">Dans de nombreuses montagnes, la zone subglaciaire est considérée comme le domaine des esprits de la montagne par les communautés locales. Les anciens racontent que marcher dans cette zone exige respect et discipline : le vent, le froid et la neige sont vus comme des épreuves naturelles qui renforcent le corps et l'esprit. Les guides expérimentés enseignent souvent aux randonneurs à écouter le rythme de la montagne : le son du vent, la forme des nuages et la texture de la neige indiquent le meilleur chemin et le bon moment pour avancer.</p>
                  </div>
                </div>
              </section>

              {/* Zone 5 Section */}
              <section id="zone5" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Zone 5 : La Zone Sommital – Neige, Glaciers et Panoramas Spectaculaires</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4"><strong>Mots-clés :</strong> sommet Kilimandjaro, trek aventure, randonnée extrême, exploration alpine</p>
                    
                    <p className="mb-4">Enfin, l'ascension atteint la zone sommital, généralement située au-dessus de 5 000 mètres selon la montagne. Ici, le paysage devient presque lunaire : la neige est permanente, les glaciers étincellent au soleil et le vent souffle puissamment sur les crêtes. La végétation a disparu, remplacée par des surfaces rocheuses et glacées, et l'air est rare et sec. C'est la zone la plus extrême, où le corps et l'esprit sont véritablement mis à l'épreuve.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Climat et conditions</h3>
                    <p className="mb-4">Le climat sommital est extrême et changeant. <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Les températures</Link> peuvent descendre à -20°C ou moins lorsque le vent souffle, et même au soleil, la sensation thermique reste très froide. La pression atmosphérique est faible, ce qui rend la respiration plus difficile et augmente la fatigue. La neige et la glace rendent le sol glissant et instable, et la visibilité peut être réduite par la brume, les nuages ou les tempêtes soudaines. Le soleil est intense à cause de l'altitude : les rayons UV peuvent provoquer des coups de soleil graves si la peau et les yeux ne sont pas protégés.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Végétation</h3>
                    <p className="mb-4">La zone sommital est dépourvue de végétation. Parfois, de minuscules lichens ou mousses survivent sur les rochers les plus abrités, mais ils sont rares et fragiles. Le paysage est dominé par la neige, la glace, les glaciers et les formations rocheuses spectaculaires. Cette absence de végétation met en valeur la puissance brute de la montagne et la beauté de ses reliefs sculptés par le temps et le climat.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Faune</h3>
                    <p className="mb-4">La faune est quasi inexistante dans la zone sommital, à l'exception de quelques oiseaux adaptables à l'altitude, comme certains rapaces, et de petits mammifères pouvant se réfugier dans les crevasses. Chaque rencontre avec un animal est donc rare et précieuse. La zone se concentre surtout sur l'expérience humaine face à la nature extrême et sur l'observation des glaciers, de la neige et des formations rocheuses.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Expérience du randonneur</h3>
                    <p className="mb-4">Atteindre le sommet est l'accomplissement ultime de l'ascension. Chaque pas est un effort, car l'air raréfié rend la respiration difficile et la fatigue intense. Les vents forts obligent à avancer penché ou à se protéger avec les bâtons et le corps. La neige et la glace nécessitent souvent des crampons et des techniques de marche adaptées.</p>
                    <p className="mb-4">Mais l'expérience est inoubliable : lorsque la brume se dissipe, le panorama est spectaculaire. Les vallées, les glaciers et les sommets environnants s'offrent au regard, créant un sentiment d'émerveillement, de liberté et de victoire. La zone sommital est le point culminant de l'ascension par zones : chaque effort fourni dans les zones précédentes trouve ici sa récompense.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Conseils pratiques pour les randonneurs</h3>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Équipement : crampons, bâtons de randonnée, gants isolants, lunettes de soleil, veste coupe-vent et protection thermique complète.</li>
                      <li>Acclimatation : prendre son temps et écouter son corps pour éviter le mal aigu des montagnes.</li>
                      <li>Hydratation et nutrition : boire régulièrement et consommer des aliments énergétiques.</li>
                      <li>Sécurité : suivre strictement le guide, avancer en groupe et rester sur les chemins balisés.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Anecdotes et éléments locaux</h3>
                    <p className="mb-4">Pour les communautés locales, le sommet représente souvent le domaine sacré des montagnes. Les anciens racontent que marcher sur la zone sommital est une épreuve de respect et de patience : la montagne teste le corps et l'esprit, et seul celui qui progresse avec prudence et humilité peut profiter pleinement de sa beauté. Les guides expérimentés enseignent aux randonneurs à lire les signes de la montagne : la couleur des nuages, le bruit du vent sur la neige, ou la texture de la glace peuvent indiquer le chemin le plus sûr.</p>
                    <p className="mb-4">Chaque sommet est unique, et chaque ascension laisse des souvenirs durables. La zone sommital n'est pas seulement un lieu physique : c'est un lieu d'émotion, de découverte et de respect pour la puissance de la nature.</p>
                  </div>
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
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 1 800 €" : 'From €1,800'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️5 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours" : 'Conquer Africa\'s Roof: Marangu Route in 5 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !" : 'Want to stand on Africa\'s roof? Climb Kilimanjaro with us.'}</p>
                        <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 2 200 €" : 'From €2,200'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️7 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours" : 'Panoramic adventure: Lemosho in 7 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                        <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 1 900 €" : 'From €1,900'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️6 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★☆ (4.5)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)" : 'Umbwe: the vertical challenge in 6 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Souvent décrite comme la voie la plus courte et la plus ardue, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés." : 'Often the shortest and steepest route, Umbwe suits experienced trekkers.'}</p>
                        <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
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