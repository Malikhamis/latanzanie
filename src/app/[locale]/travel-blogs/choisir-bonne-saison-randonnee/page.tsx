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

export default function ChoisirBonneSaisonRandonneePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

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
    { id: 'introduction', title: 'Choisir la bonne saison pour la randonnée : la vérité que tout randonneur doit connaître avant de partir' },
    { id: 'meteo', title: 'La météo : le facteur qui change tout' },
    { id: 'pluie', title: 'Et quand il pleut ? Voici ce qui change vraiment' },
    { id: 'sentiers', title: 'L\'état des sentiers : votre meilleur ami ou votre pire ennemi' },
    { id: 'froid', title: 'Le froid de la nuit : le piège invisible' },
    { id: 'visibilite', title: 'Comment la Visibilité et le Vent Influencent Réellement Votre Trek en Montagne' },
    { id: 'securite', title: 'Impact sur la Sécurité' },
    { id: 'motivation', title: 'Impact sur la Motivation' },
    { id: 'orientation', title: 'Impact sur l\'Orientation' },
    { id: 'rythme', title: 'Impact sur la Gestion du Rythme' },
    { id: 'vent', title: 'Le vent : l\'allié invisible ou l\'ennemi redouté du randonneur' },
    { id: 'vent-sec', title: 'Saison sèche : un compagnon rafraîchissant' },
    { id: 'vent-pluie', title: 'Saison humide : un facteur imprévisible et dangereux' },
    { id: 'saison1', title: '🌅 Saison idéale 1 : janvier à début mars' },
    { id: 'saison2', title: '☀️ Saison idéale 2 : fin juin à octobre' },
    { id: 'saison3', title: '🌧️ À éviter autant que possible : avril – mai' },
    { id: 'conclusion', title: '⭐ Dernier mot du guide' }
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
                  Choisir la bonne saison pour la randonnée : la vérité que tout randonneur doit connaître avant de partir
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Choisir la saison idéale pour votre randonnée n'est pas simplement une question de préférences personnelles : c'est un choix stratégique qui influence toute votre expérience. En tant que guide local depuis plusieurs années, j'ai accompagné des marcheurs par beau temps, par pluie, dans le brouillard, sous les vents forts, et même pendant les saisons tranquilles où la montagne semblait nous appartenir.</p>
                  <p className="mb-4">Ce que j'ai appris, c'est que la saison peut transformer une simple randonnée en un souvenir extraordinaire… ou en un défi inattendu.</p>
                </div>
              </section>

              {/* La météo Section */}
              <section id="meteo" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  La météo : le facteur qui change tout
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Sur le Kilimandjaro, la météo ne se limite pas à savoir s'il fait beau ou non. En réalité, elle influence chaque pas que l'on fait. Quand il fait sec, la montée se transforme en une progression fluide. Le sol ne glisse pas, les pierres gardent une bonne adhérence, les racines se voient clairement, et les marches naturelles sont beaucoup plus régulières. Cela paraît simple, mais sur le terrain, cela change absolument tout : vous avancez sans hésitation, sans stress, et sans dépenser d'énergie pour maintenir votre équilibre.</p>
                  <p className="mb-4">Cette stabilité rend aussi la marche plus agréable mentalement. Le corps se relâche, la respiration se calme, et l'on profite davantage du paysage. Rien ne surprend sous les pieds, et c'est exactement ce qui permet de garder un bon rythme tout au long de la journée.</p>
                  <p className="mb-4">Mais la météo influence aussi la manière dont le guide gère votre journée. Quand le climat est stable, il peut estimer plus précisément la durée de l'étape, choisir les meilleurs endroits pour faire des pauses, anticiper les zones plus difficiles et ajuster votre vitesse sans prendre de risques. Une météo stable lui permet également d'organiser l'hydratation et les repas au bon moment, ce qui joue directement sur votre énergie et votre acclimatation.</p>
                  <p className="mb-4">Ce que beaucoup ignorent, c'est qu'une météo stable vous permet d'économiser environ 25 à 40 % d'énergie par rapport à une ascension menée sous la pluie ou le vent. En d'autres termes, une bonne météo n'est pas seulement confortable : c'est la clé qui fait la différence entre "je profite" et "je lutte pour avancer".</p>
                </div>
              </section>

              {/* Et quand il pleut Section */}
              <section id="pluie" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Et quand il pleut ? Voici ce qui change vraiment
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La pluie n'est pas seulement quelque chose qui mouille les vêtements. Sur le Kilimandjaro, elle transforme complètement le terrain. La terre devient collante et glissante, les rochers se comportent comme du savon, et certaines pentes deviennent instables. Au lieu de marcher avec régularité, on doit analyser chaque pas, tester le sol, ralentir, poser les bâtons… Chaque mètre demande plus d'énergie, plus de précision et plus de concentration.</p>
                  <p className="mb-4">Cette transformation du sentier se ressent immédiatement dans les jambes : on glisse un peu, on se rattrape, on corrige sa posture, on change de trajectoire pour éviter les flaques… Le corps travaille deux fois plus. Les chaussures s'alourdissent avec la boue, les vêtements humides refroidissent le corps, et l'humidité rend la respiration plus dense.</p>
                  <p className="mb-4">Le mental aussi est mis à l'épreuve. Le brouillard peut réduire les vues à quelques mètres seulement, la pluie force à écourter les pauses, et la progression devient silencieuse car chacun se concentre. Ce n'est plus une marche fluide : c'est une bataille d'endurance, où l'on avance pour avancer, pas pour profiter.</p>
                </div>
              </section>

              {/* L'état des sentiers Section */}
              <section id="sentiers" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  L'état des sentiers : votre meilleur ami ou votre pire ennemi
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Sur le Kilimandjaro, l'état des sentiers est l'un des éléments qui influence le plus votre expérience. Ce qui semble être un simple chemin peut devenir, selon la saison, un support idéal pour marcher… ou un terrain difficile qui demande technique, patience et énergie. En saison sèche, les sentiers gardent une forme presque parfaite. Le sol est ferme, il ne glisse pas, et chaque pas est stable. Les pierres restent immobiles sous vos pieds, ce qui offre une sensation de sécurité immédiate. Les racines sont visibles, donc faciles à éviter, et même les zones rocailleuses se traversent sans stress. Les montées et descentes deviennent ainsi beaucoup plus contrôlables, même pour les personnes qui n'ont pas beaucoup d'expérience en trekking. On avance en confiance, on ne subit pas la marche. Les débutants se sentent rassurés, tandis que les randonneurs expérimentés peuvent garder un rythme constant sans devoir s'arrêter toutes les deux minutes.</p>
                  <p className="mb-4">En saison humide, c'est une tout autre histoire. Dès les premières pluies, le sentier se transforme littéralement. La terre devient glissante et collante, comme une glaise qui s'accroche aux semelles et alourdit les pieds. Les sections qui semblaient faciles la veille deviennent soudain techniques, car les rochers perdent leur adhérence et les pentes se transforment en glissades potentielles. La boue est l'ennemi numéro un : elle peut réduire votre vitesse de 30 à 50 %, parfois plus. Vous sentez vos jambes travailler davantage à chaque pas, notamment en descente, où les genoux absorbent plus d'impact pour contrôler la glisse. Même les chaussures de montagne les plus performantes montrent leurs limites lorsque l'eau s'infiltre entre les pierres et les racines. Dans ces conditions, il faut faire preuve de patience, de prudence et surtout d'une grande force mentale. L'effort est plus constant, plus lourd, et la marge d'erreur plus faible. Ce n'est pas impossible, bien sûr, mais cela demande plus d'énergie et un état d'esprit prêt à affronter l'imprévu.</p>
                </div>
              </section>

              {/* Le froid de la nuit Section */}
              <section id="froid" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Le froid de la nuit : le piège invisible
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Le froid en altitude n'a rien à voir avec le froid que nous connaissons en ville. Sur une montagne comme le Kilimandjaro, il est plus profond, plus sec, plus direct. Il ne se contente pas de "rafraîchir" l'air : il s'infiltre dans la respiration, durcit les muscles et ralentit le corps. En saison sèche, ce froid reste un froid prévisible. Les nuits sont fraîches, parfois même très froides, mais elles le sont de manière régulière. On sait à quoi s'attendre, on sait quel vêtement porter, et un bon sac de couchage suffit en général à maintenir un confort acceptable. Les trekkers se réveillent parfois un peu engourdis, mais jamais surpris : le corps s'adapte vite, car la température descend de manière progressive et logique.</p>
                  <p className="mb-4">En saison humide, le froid devient bien plus agressif, non pas à cause de la température, mais à cause de l'humidité. C'est elle qui change tout. Les vêtements mettent beaucoup plus de temps à sécher, surtout si la pluie a été présente pendant la journée. L'humidité s'accroche aux tissus, s'infiltre dans les couches, et finit par transformer le moindre souffle de vent en une sensation glaciale. Même si le thermomètre indique la même température qu'en saison sèche, vous aurez l'impression qu'il fait dix degrés de moins. Ce froid-là n'est pas un froid qui pique : c'est un froid qui rentre dans les os, qui fatigue le corps plus rapidement, et qui devient très difficile à gérer après plusieurs jours. C'est pour cette raison que beaucoup de trekkeurs ressentent des nuits particulièrement dures pendant la saison humide : ce n'est pas juste la météo, c'est le corps qui se bat contre une sensation de froid plus profonde.</p>
                </div>
              </section>

              {/* Visibilité et Vent Section */}
              <section id="visibilite" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comment la Visibilité et le Vent Influencent Réellement Votre Trek en Montagne
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La randonnée en montagne n'est jamais uniquement une question de forme physique. La visibilité et le vent comptent parmi les éléments les plus importants – et pourtant les plus sous-estimés par les trekkeurs.</p>
                  <p className="mb-4">Que vous prépariez l'ascension du Kilimandjaro, du Mont Meru ou d'un autre trek en altitude en Afrique de l'Est, comprendre ces deux facteurs météorologiques est essentiel pour transformer votre expérience.</p>
                </div>
              </section>

              {/* Impact sur la Sécurité Section */}
              <section id="securite" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact sur la Sécurité
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Une visibilité claire est la première ligne de défense contre les accidents. Elle permet au guide d'anticiper les dangers bien à l'avance : nous pouvons repérer les rochers instables, les plaques de glace ou les changements abrupts de sentier bien avant d'y être confrontés. À l'inverse, un brouillard épais cache ces obstacles, rendant chaque pas potentiellement dangereux et augmentant le risque de torsion ou de chute, surtout sur les terrains techniques comme les cendres volcaniques.</p>
                </div>
              </section>

              {/* Impact sur la Motivation Section */}
              <section id="motivation" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact sur la Motivation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En l'absence de repères visuels (lorsque l'on marche "dans le blanc"), l'effort semble infini. Le cerveau ne reçoit aucune récompense visuelle pour l'effort fourni, ce qui peut rapidement entraîner une fatigue mentale et une baisse du moral. Par contre, voir le sommet ou la prochaine colline vous donne un objectif tangible, rendant la progression plus légère et plus facile à supporter.</p>
                </div>
              </section>

              {/* Impact sur l'Orientation Section */}
              <section id="orientation" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact sur l'Orientation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Même avec un guide expérimenté et des outils GPS modernes, la bonne visibilité est cruciale. Elle permet au groupe de maintenir une ligne de marche cohérente et d'éviter les déviations inutiles. En cas de brouillard, la désorientation peut augmenter le temps de parcours, l'épuisement, et compliquer toute manœuvre logistique imprévue.</p>
                </div>
              </section>

              {/* Impact sur la Gestion du Rythme Section */}
              <section id="rythme" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Impact sur la Gestion du Rythme
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La visibilité vous permet de réguler votre effort. Lorsque vous voyez la crête ou le camp à 30 minutes, vous pouvez conserver votre énergie ou, au contraire, faire un dernier effort. Lorsque vous ne voyez rien, le rythme devient instinctivement lent et prudent (pour la sécurité), mais il est également difficile de savoir quand augmenter ou maintenir l'effort, ce qui conduit souvent à une gestion énergétique sous-optimale sur une longue période.</p>
                  <p className="mb-4">En montagne, ce que vous voyez... influence directement comment vous marchez, respirez et gérez votre capital énergie.</p>
                </div>
              </section>

              {/* Le vent Section */}
              <section id="vent" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Le vent : l'allié invisible ou l'ennemi redouté du randonneur
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Lorsque l'on parle de randonnée en montagne, le vent est souvent le facteur que beaucoup découvrent... trop tard. Invisible sur les cartes, mais très réel sur le terrain, il peut transformer une ascension tranquille en défi inattendu.</p>
                </div>
              </section>

              {/* Saison sèche Section */}
              <section id="vent-sec" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Saison sèche : un compagnon rafraîchissant
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Pendant la saison sèche, le vent peut devenir un véritable allié. Un souffle léger :</p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Rafraîchit le marcheur : en altitude, l'effort intense peut rapidement provoquer la surchauffe. Le vent régule la température corporelle.</li>
                    <li>Stimule le rythme : loin d'être un obstacle, il accompagne la progression.</li>
                    <li>Améliore le confort général : l'air sec et léger rend l'ascension plus agréable, surtout sous un soleil éclatant.</li>
                  </ul>
                  <p className="mt-4">Dans ces conditions, le vent se fait discret mais précieux, un partenaire silencieux de chaque pas.</p>
                </div>
              </section>

              {/* Saison humide Section */}
              <section id="vent-pluie" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Saison humide : un facteur imprévisible et dangereux
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">À l'inverse, pendant la saison humide, le vent peut se transformer en véritable défi :</p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                    <li>Il pousse le corps : sur les passages exposés, chaque rafale devient un effort supplémentaire.</li>
                    <li>Fatigue accélérée : marcher contre un vent fort demande beaucoup d'énergie, même aux randonneurs expérimentés.</li>
                    <li>Sensation de froid accrue : l'humidité combinée au vent intensifie le risque d'hypothermie et d'inconfort.</li>
                  </ul>
                  <p className="mt-4">Dans ces conditions, les guides doivent parfois adapter l'itinéraire ou ralentir le rythme pour assurer la sécurité du groupe. La vigilance devient alors indispensable, car le vent peut rapidement changer le visage de la montagne.</p>
                  <p className="mt-4">Le vent en montagne n'est jamais à sous-estimer : il peut être un allié doux comme un ennemi impitoyable, selon la saison et le terrain. Savoir l'anticiper fait partie de l'art de la randonnée réussie.</p>
                </div>
              </section>

              {/* Saison idéale 1 Section */}
              <section id="saison1" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🌅 Saison idéale 1 : janvier à début mars
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La période de janvier à début mars est l'un des meilleurs moments pour partir à la conquête du Kilimandjaro. Le temps est sec, les matinées sont claires et les vues sur les sommets sont spectaculaires. Cette saison offre un parfait équilibre entre température agréable, ciel dégagé et faible risque de pluie.</p>
                  <p className="mb-4">Les sentiers restent praticables, ce qui facilite la marche, surtout pour les débutants. La lumière est magnifique pour les photos, et les variations climatiques entre les zones de végétation sont particulièrement bien marquées. Cette période permet une acclimatation progressive et un séjour confortable dans les camps, car l'humidité est nettement plus faible qu'en d'autres moments de l'année.</p>
                  <p className="mb-4">Les guides apprécient cette saison car elle permet une organisation précise, un rythme régulier et une expérience plus sereine du début à la fin.</p>
                </div>
              </section>

              {/* Saison idéale 2 Section */}
              <section id="saison2" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ☀️ Saison idéale 2 : fin juin à octobre
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">La période allant de fin juin à octobre est considérée comme la meilleure saison globale pour randonner sur le Kilimandjaro. C'est la grande saison sèche en Tanzanie : les journées sont lumineuses, la pluie est rare et la météo reste stable pendant de longues semaines. Les chemins sont secs du bas jusqu'aux zones alpines, ce qui offre une progression plus facile et un excellent taux de réussite.</p>
                  <p className="mb-4">Les températures, bien que fraîches la nuit, restent régulières et permettent une acclimatation efficace. Les panoramas sont absolument superbes, surtout au lever du soleil au sommet. Cette période attire plus de voyageurs, mais l'ambiance est conviviale, motivante et parfaitement adaptée à une ascension réussie.</p>
                  <p className="mb-4">Après la saison des pluies, l'air est pur, le paysage verdoyant à basse altitude, et les conditions sont tout simplement idéales pour vivre un trek inoubliable.</p>
                </div>
              </section>

              {/* À éviter Section */}
              <section id="saison3" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  🌧️ À éviter autant que possible : avril – mai
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Les mois d'avril et mai correspondent à la grande saison des pluies en Tanzanie, et ce sont les moments les moins adaptés pour tenter le Kilimandjaro. Durant cette période, il pleut souvent plusieurs heures par jour, rendant les sentiers glissants et la progression difficile.</p>
                  <p className="mb-4">La visibilité se réduit fortement, les températures deviennent plus sévères en altitude et l'humidité ne permet pas aux vêtements ni aux tentes de sécher correctement. Les journées sont donc physiquement exigeantes et mentalement fatigantes. La logistique est plus compliquée pour les équipes, ce qui affecte l'expérience de tous les randonneurs.</p>
                  <p className="mb-4">Pour ces raisons, les guides recommandent fortement d'éviter cette saison, surtout pour une première ascension.</p>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ⭐ Dernier mot du guide
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">En tant que guide local, mon conseil final est simple : pour vivre une ascension réussie, confortable et sécurisée, choisissez la saison sèche — janvier à début mars ou fin juin à octobre — et évitez autant que possible avril, mai et novembre. Ces choix influencent directement vos chances d'atteindre le sommet, la qualité de votre expérience et le plaisir que vous prendrez à découvrir l'une des plus belles montagnes du monde.</p>
                </div>
              </section>

              {/* Newsletter Section */}
              <section className="relative py-16 mt-12 rounded-lg overflow-hidden">
                <div className="absolute inset-0">
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