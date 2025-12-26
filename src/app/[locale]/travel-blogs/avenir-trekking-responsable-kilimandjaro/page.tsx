'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Expéditions Zéro Trace : l\'avenir du trekking responsable au Kilimandjaro',
  challenges: 'Le Kilimandjaro face aux défis du tourisme moderne',
  whyZerotrace: 'Comprendre pourquoi le Zéro Trace est l\'avenir du trekking',
  ecosystem: 'Protéger un écosystème unique au monde',
  waste: 'La gestion des déchets : un enjeu majeur sur la montagne',
  porters: 'Le respect des porteurs : un pilier du trekking responsable',
  mindset: 'Un changement de mentalité chez les voyageurs',
  guides: 'Le rôle essentiel des guides locaux',
  future: 'Un modèle durable pour l\'avenir du Kilimandjaro',
  guideTip: 'Conseil du guide local – Ascension Zéro Trace sur le Kilimandjaro'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Le Mont Kilimandjaro n'est pas seulement le plus haut sommet d'Afrique. C'est un symbole naturel, culturel et humain de la Tanzanie. Chaque année, des milliers de randonneurs viennent du monde entier pour vivre l'expérience unique de son ascension. Mais cette popularité croissante pose une question essentielle : comment protéger le Kilimandjaro face à l'augmentation du tourisme ?

La réponse s'impose de plus en plus clairement : les expéditions Zéro Trace représentent l'avenir du trekking responsable au Kilimandjaro.`,
  
  challenges: `Le succès du Kilimandjaro est à la fois une opportunité et un risque. Si le tourisme soutient l'économie locale et crée de nombreux emplois, il exerce aussi une pression considérable sur un environnement naturellement fragile.

Les sentiers sont soumis à une érosion constante, les camps peuvent être surchargés et les déchets, s'ils sont mal gérés, s'accumulent rapidement. À long terme, ces impacts menacent non seulement la beauté de la montagne, mais aussi la qualité de l'expérience pour les futurs randonneurs.

C'est dans ce contexte que le concept de Zéro Trace devient indispensable.`,
  
  whyZerotrace: `Les expéditions Zéro Trace ne sont pas une simple tendance écologique. Elles répondent à une réalité : le Kilimandjaro ne peut pas supporter un tourisme non maîtrisé.

Contrairement aux expéditions classiques centrées uniquement sur l'atteinte du sommet, les expéditions Zéro Trace adoptent une vision globale. Elles prennent en compte :

• l'impact environnemental à court et long terme,
• le respect des porteurs et de l'équipe locale,
• la transmission de bonnes pratiques aux voyageurs,
• la préservation des ressources naturelles.

Le sommet n'est plus la seule finalité : la manière d'y arriver devient aussi importante que l'arrivée elle-même.`,
  
  ecosystem: `Le Mont Kilimandjaro est unique en Afrique, non seulement par son altitude, mais aussi par la diversité exceptionnelle de ses écosystèmes. En quelques jours de marche, les randonneurs traversent plusieurs zones climatiques très distinctes : la forêt tropicale humide, les landes et bruyères d'altitude, le désert alpin et enfin la zone glaciaire proche du sommet.

Chacune de ces zones possède un équilibre naturel extrêmement fragile. La végétation pousse lentement, les sols sont sensibles à l'érosion et la faune s'adapte difficilement aux perturbations humaines. Une simple sortie de sentier répétée par des centaines de personnes peut provoquer des dégâts visibles pendant des années.

Les expéditions Zéro Trace prennent cette réalité très au sérieux. Elles imposent une discipline stricte : rester sur les sentiers existants, éviter toute modification du terrain et protéger les zones sensibles comme les sources d'eau ou les zones de campement. Ces pratiques ne sont pas symboliques ; elles sont essentielles pour permettre à la montagne de conserver son équilibre naturel sur le long terme.`,
  
  waste: `Sur le Kilimandjaro, la gestion des déchets est l'un des plus grands défis du trekking. Contrairement à d'autres destinations, il n'existe pas de système naturel ou rapide pour faire disparaître les déchets. En altitude, même les restes de nourriture mettent des mois, voire des années, à se décomposer.

Le principe fondamental du Zéro Trace est simple : tout ce qui monte doit redescendre. Mais dans la réalité, cela demande une organisation rigoureuse et une vraie discipline collective. Les expéditions Zéro Trace travaillent dès la préparation du trek pour limiter les emballages inutiles, favoriser les contenants réutilisables et anticiper le tri des déchets.

Pendant l'ascension, les déchets sont collectés, séparés et stockés de manière sécurisée jusqu'à leur redescente hors du parc national. Même les déchets dits biodégradables sont traités avec précaution, car ils peuvent attirer les animaux, modifier leur comportement et polluer les sols.

Une bonne gestion des déchets est l'un des signes les plus visibles d'une expédition réellement responsable sur le Kilimandjaro.`,
  
  porters: `Le Zéro Trace ne se limite pas à la protection de la nature. Il inclut aussi une dimension humaine essentielle : le respect des porteurs, sans qui aucune ascension du Kilimandjaro ne serait possible.

Les porteurs transportent l'équipement, montent les camps, préparent les zones de vie et assurent le bon déroulement de l'expédition. Une expédition Zéro Trace veille à ce que leur travail soit réalisé dans des conditions justes et dignes. Cela passe notamment par le respect strict des limites de charge imposées par le parc national, afin de protéger leur santé sur le long terme.

En réduisant les déchets, en optimisant le matériel et en respectant les sentiers, les voyageurs et les agences facilitent aussi le travail des porteurs. Moins de déchets signifie moins de nettoyage, moins de risques et une charge mentale et physique réduite pour l'équipe locale.

Protéger la montagne et respecter les porteurs sont donc deux aspects indissociables d'un trekking véritablement responsable.`,
  
  mindset: `Le profil des voyageurs évolue. De plus en plus de randonneurs ne souhaitent plus simplement atteindre le sommet pour la photo finale. Ils recherchent une expérience plus profonde, plus authentique et plus respectueuse des lieux qu'ils traversent.

Les expéditions Zéro Trace répondent parfaitement à cette nouvelle mentalité. Elles permettent aux voyageurs de comprendre l'impact de leurs gestes, d'adapter leurs habitudes et de participer activement à la préservation du Kilimandjaro. Le randonneur ne devient plus un simple visiteur, mais un acteur conscient de la protection de la montagne.

Cette approche donne souvent plus de sens à l'ascension et renforce le lien entre le voyageur, la nature et les communautés locales.`,
  
  guides: `Les guides locaux sont au cœur du succès des expéditions Zéro Trace. Leur rôle ne se limite pas à montrer le chemin ou à gérer le rythme de l'ascension. Ils sont aussi des éducateurs, des protecteurs de la montagne et des modèles de comportement responsable.

Grâce à leur connaissance approfondie du Kilimandjaro, ils expliquent aux voyageurs pourquoi certaines règles existent, comment adopter les bons gestes et pourquoi chaque détail compte. Sur le terrain, ce sont eux qui veillent au respect des sentiers, à la bonne gestion des déchets et à l'équilibre entre sécurité, réussite du sommet et respect de l'environnement.

Sans guides engagés et conscients, le Zéro Trace resterait un concept théorique. Ce sont eux qui le transforment en réalité quotidienne sur la montagne.`,
  
  future: `Les expéditions Zéro Trace représentent aujourd'hui le modèle le plus durable pour l'avenir du trekking sur le Kilimandjaro. Elles permettent de préserver la qualité des sentiers, de protéger les camps, de soutenir une économie locale équitable et d'offrir une expérience plus riche aux voyageurs.

Ce modèle bénéficie à tous : à la montagne, aux communautés locales, aux porteurs, aux guides et aux randonneurs eux-mêmes. Il garantit que le Kilimandjaro restera accessible, beau et vivant pour les générations futures.`,
  
  guideTip: `Pour réussir une expédition Zéro Trace sur le Kilimandjaro, la clé est d'adopter un comportement responsable du début à la fin du trek. Préparez votre équipement avec soin afin de voyager léger et de respecter les limites de charge des porteurs. Sur la montagne, suivez strictement les sentiers balisés, gérez tous vos déchets sans exception et protégez les sources d'eau. Écoutez toujours les conseils de votre guide local du Kilimandjaro, car sa connaissance du terrain est essentielle pour garantir une ascension sûre, respectueuse et durable. En appliquant ces principes, vous contribuez activement à la préservation du Kilimandjaro et à un trekking responsable en Tanzanie.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Zero Trace Expeditions: The Future of Responsible Trekking on Kilimanjaro',
  challenges: 'Kilimanjaro Facing the Challenges of Modern Tourism',
  whyZerotrace: 'Understanding Why Zero Trace Is the Future of Trekking',
  ecosystem: 'Protecting a Unique Ecosystem in the World',
  waste: 'Waste Management: A Major Challenge on the Mountain',
  porters: 'Respecting Porters: A Pillar of Responsible Trekking',
  mindset: 'A Change in Traveler Mentality',
  guides: 'The Essential Role of Local Guides',
  future: 'A Sustainable Model for Kilimanjaro\'s Future',
  guideTip: 'Local Guide Tip – Zero Trace Ascent on Kilimanjaro'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Mount Kilimanjaro is not just Africa's highest peak. It's a natural, cultural, and human symbol of Tanzania. Every year, thousands of hikers come from around the world to experience the unique journey of climbing it. But this growing popularity raises an essential question: how to protect Kilimanjaro from increasing tourism?

The answer is becoming increasingly clear: Zero Trace expeditions represent the future of responsible trekking on Kilimanjaro.`,
  
  challenges: `Kilimanjaro's success is both an opportunity and a risk. While tourism supports the local economy and creates many jobs, it also exerts considerable pressure on a naturally fragile environment.

Trails are subject to constant erosion, camps can become overloaded, and waste, if poorly managed, accumulates rapidly. In the long term, these impacts threaten not only the beauty of the mountain but also the quality of experience for future hikers.

It is in this context that the concept of Zero Trace becomes indispensable.`,
  
  whyZerotrace: `Zero Trace expeditions are not just an ecological trend. They respond to a reality: Kilimanjaro cannot support uncontrolled tourism.

Unlike classic expeditions focused solely on reaching the summit, Zero Trace expeditions adopt a holistic vision. They take into account:

• short and long-term environmental impact,
• respect for porters and the local team,
• transmission of good practices to travelers,
• preservation of natural resources.

The summit is no longer the only goal: the way of getting there becomes as important as the arrival itself.`,
  
  ecosystem: `Mount Kilimanjaro is unique in Africa, not only for its altitude but also for the exceptional diversity of its ecosystems. In a few days of hiking, trekkers traverse several very distinct climatic zones: humid tropical forest, alpine heath and moorland, alpine desert, and finally the glacial zone near the summit.

Each of these zones has an extremely fragile natural balance. Vegetation grows slowly, soils are sensitive to erosion, and wildlife struggles to adapt to human disturbances. A simple off-trail excursion repeated by hundreds of people can cause visible damage for years.

Zero Trace expeditions take this reality very seriously. They impose strict discipline: staying on existing trails, avoiding any terrain modification, and protecting sensitive areas like water sources or camping zones. These practices are not symbolic; they are essential to allow the mountain to maintain its natural balance in the long term.`,
  
  waste: `On Kilimanjaro, waste management is one of the biggest challenges of trekking. Unlike other destinations, there is no natural or rapid system to make waste disappear. At altitude, even food scraps take months or even years to decompose.

The fundamental principle of Zero Trace is simple: everything that goes up must come down. But in reality, this requires rigorous organization and real collective discipline. Zero Trace expeditions work from trek preparation to limit unnecessary packaging, favor reusable containers, and anticipate waste sorting.

During the ascent, waste is collected, separated, and stored securely until it's carried down outside the national park. Even so-called biodegradable waste is treated with caution, as it can attract animals, alter their behavior, and pollute soils.

Good waste management is one of the most visible signs of a truly responsible expedition on Kilimanjaro.`,
  
  porters: `Zero Trace goes beyond protecting nature. It also includes an essential human dimension: respecting porters, without whom no Kilimanjaro ascent would be possible.

Porters carry equipment, set up camps, prepare living areas, and ensure the expedition runs smoothly. A Zero Trace expedition ensures their work is done under fair and dignified conditions. This notably involves strictly respecting load limits imposed by the national park to protect their long-term health.

By reducing waste, optimizing equipment, and respecting trails, travelers and agencies also facilitate porters' work. Less waste means less cleaning, fewer risks, and reduced mental and physical burden for the local team.

Protecting the mountain and respecting porters are thus inseparable aspects of truly responsible trekking.`,
  
  mindset: `Traveler profiles are evolving. More and more hikers no longer simply want to reach the summit for the final photo. They seek a deeper, more authentic, and more respectful experience of the places they traverse.

Zero Trace expeditions perfectly respond to this new mentality. They allow travelers to understand the impact of their actions, adapt their habits, and actively participate in preserving Kilimanjaro. The hiker is no longer just a visitor but a conscious actor in protecting the mountain.

This approach often gives more meaning to the ascent and strengthens the bond between the traveler, nature, and local communities.`,
  
  guides: `Local guides are at the heart of Zero Trace expedition success. Their role goes beyond showing the way or managing ascent pace. They are also educators, mountain protectors, and role models for responsible behavior.

Thanks to their in-depth knowledge of Kilimanjaro, they explain to travelers why certain rules exist, how to adopt good practices, and why every detail matters. On the ground, they ensure trail respect, proper waste management, and balance between safety, summit success, and environmental respect.

Without committed and conscious guides, Zero Trace would remain a theoretical concept. They are the ones who transform it into daily reality on the mountain.`,
  
  future: `Zero Trace expeditions today represent the most sustainable model for the future of trekking on Kilimanjaro. They help preserve trail quality, protect camps, support a fair local economy, and offer a richer experience to travelers.

This model benefits everyone: the mountain, local communities, porters, guides, and the hikers themselves. It ensures Kilimanjaro will remain accessible, beautiful, and alive for future generations.`,
  
  guideTip: `To successfully complete a Zero Trace expedition on Kilimanjaro, the key is adopting responsible behavior from the beginning to the end of the trek. Carefully prepare your equipment to travel light and respect porters' load limits. On the mountain, strictly follow marked trails, manage all your waste without exception, and protect water sources. Always listen to your local Kilimanjaro guide's advice, as their knowledge of the terrain is essential to guarantee a safe, respectful, and sustainable ascent. By applying these principles, you actively contribute to preserving Kilimanjaro and responsible trekking in Tanzania.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function AvenirTrekkingResponsableKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'challenges', 
      title: isFrench ? FR_TITLES.challenges : EN_TITLES.challenges,
      content: isFrench ? FR_SECTIONS.challenges : EN_SECTIONS.challenges
    },
    { 
      id: 'whyZerotrace', 
      title: isFrench ? FR_TITLES.whyZerotrace : EN_TITLES.whyZerotrace,
      content: isFrench ? FR_SECTIONS.whyZerotrace : EN_SECTIONS.whyZerotrace
    },
    { 
      id: 'ecosystem', 
      title: isFrench ? FR_TITLES.ecosystem : EN_TITLES.ecosystem,
      content: isFrench ? FR_SECTIONS.ecosystem : EN_SECTIONS.ecosystem
    },
    { 
      id: 'waste', 
      title: isFrench ? FR_TITLES.waste : EN_TITLES.waste,
      content: isFrench ? FR_SECTIONS.waste : EN_SECTIONS.waste
    },
    { 
      id: 'porters', 
      title: isFrench ? FR_TITLES.porters : EN_TITLES.porters,
      content: isFrench ? FR_SECTIONS.porters : EN_SECTIONS.porters
    },
    { 
      id: 'mindset', 
      title: isFrench ? FR_TITLES.mindset : EN_TITLES.mindset,
      content: isFrench ? FR_SECTIONS.mindset : EN_SECTIONS.mindset
    },
    { 
      id: 'guides', 
      title: isFrench ? FR_TITLES.guides : EN_TITLES.guides,
      content: isFrench ? FR_SECTIONS.guides : EN_SECTIONS.guides
    },
    { 
      id: 'future', 
      title: isFrench ? FR_TITLES.future : EN_TITLES.future,
      content: isFrench ? FR_SECTIONS.future : EN_SECTIONS.future
    },
    { 
      id: 'guideTip', 
      title: isFrench ? FR_TITLES.guideTip : EN_TITLES.guideTip,
      content: isFrench ? FR_SECTIONS.guideTip : EN_SECTIONS.guideTip
    }
  ]

  function renderContent(content: string) {
    const lines = content.split(/\r?\n/)
    const nodes: any[] = []
    let i = 0
    let keyIndex = 0

    while (i < lines.length) {
      if (lines[i].startsWith('>')) {
        const blockLines: string[] = []
        while (i < lines.length && lines[i].startsWith('>')) {
          blockLines.push(lines[i].replace(/^>\s?/, ''))
          i++
        }
        nodes.push(
          <blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-sm text-black mb-4">
            {blockLines.join('\n')}
          </blockquote>
        )
      } else if (lines[i].trim() === '') {
        i++
      } else if (lines[i].startsWith('• ')) {
        const listItems: string[] = []
        while (i < lines.length && lines[i].startsWith('• ')) {
          listItems.push(lines[i].substring(2))
          i++
        }
        nodes.push(
          <ul key={`ul-${keyIndex++}`} className="list-disc list-inside ml-4 mb-4">
            {listItems.map((item, idx) => (
              <li key={`li-${keyIndex++}-${idx}`} className="mb-1">{item}</li>
            ))}
          </ul>
        )
      } else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('• ')) {
          paragraphLines.push(lines[i])
          i++
        }
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4">
            {paragraphLines.join('\n')}
          </p>
        )
      }
    }

    return nodes
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {isFrench ? '← Retour aux blogs' : '← Back to blogs'}
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
          <TOC title={isFrench ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={isFrench ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">
                  {isFrench ? FR_TITLES.overview : EN_TITLES.overview}
                </h1>
                <p className="text-base md:text-lg text-black max-w-3xl">
                  {isFrench ? 'L\'avenir du trekking responsable sur le Kilimandjaro.' : 'The future of responsible trekking on Kilimanjaro.'}
                </p>
              </div>

              <article className="bg-gray-50 rounded-lg shadow-md p-6">
                <div>
                  {sections.map(s => (
                    <article key={s.id} id={s.id} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
                      <div className="prose max-w-none text-black">{renderContent(s.content)}</div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical route cards section (after notes) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{isFrench ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
            <p className="text-gray-600 text-lg">{isFrench ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our top Kilimanjaro routes'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 1 800 €" : 'From €1,800'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️5 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours" : 'Conquer Africa\'s Roof: Marangu Route in 5 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !" : 'Want to stand on Africa\'s roof? Climb Kilimanjaro with us.'}</p>
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 2 200 €" : 'From €2,200'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️7 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours" : 'Panoramic adventure: Lemosho in 7 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 1 900 €" : 'From €1,900'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️6 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★☆ (4.5)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)" : 'Umbwe: the vertical challenge in 6 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "Souvent décrite comme la voie la plus courte et la plus ardue, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés." : 'Often the shortest and steepest route, Umbwe suits experienced trekkers.'}</p>
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}