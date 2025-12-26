'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Expéditions Zéro Trace sur le Kilimandjaro : qu’est-ce que cela signifie vraiment ?',
  concept: 'Comprendre le concept « Zéro Trace » (Leave No Trace)',
  whyEssential: 'Pourquoi le Zéro Trace est essentiel sur le Kilimandjaro',
  meaning: 'Ce que signifie réellement « ne laisser aucune trace » sur le Kilimandjaro',
  nothingBehind: 'Ne rien abandonner derrière soi',
  environment: 'Ne pas modifier l’environnement naturel',
  soilWater: 'Préserver les sols et les sources d’eau',
  wildlife: 'Respecter la faune et la flore',
  sharedResponsibility: 'Le Zéro Trace : une responsabilité partagée',
  future: 'Zéro Trace : un engagement envers l’avenir',
  guideTip: 'Conseil de guide'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Gravir le Mont Kilimandjaro est bien plus qu'un simple défi physique. C'est une aventure humaine, une immersion dans des écosystèmes uniques, mais aussi une grande responsabilité.
Chaque année, des dizaines de milliers de randonneurs foulent les sentiers du toit de l'Afrique. Sans pratiques responsables, cette montagne emblématique de la Tanzanie risquerait une dégradation rapide et irréversible.

C'est dans ce contexte que les expéditions Zéro Trace prennent tout leur sens.

Mais que signifie réellement Zéro Trace sur le Kilimandjaro ?
Est-ce un simple argument marketing ou un véritable engagement sur le terrain ?
En tant que guide local, voici une explication claire, honnête et concrète.`,
  
  concept: `Le principe Zéro Trace, aussi appelé Leave No Trace, repose sur une idée simple mais exigeante :

👉 Ne laisser aucun impact durable de son passage en montagne.

Cela ne signifie pas que l'on n'existe pas sur la montagne, mais que :

• rien ne doit être laissé derrière soi
• la nature ne doit pas être modifiée
• les générations futures doivent trouver la montagne intacte`,
  
  whyEssential: `Le Mont Kilimandjaro n'est pas seulement la plus haute montagne d'Afrique. C'est un patrimoine naturel mondial, un symbole de la Tanzanie et un écosystème d'une fragilité exceptionnelle. Chaque personne qui s'y aventure devient, volontairement ou non, responsable de sa préservation.

Contrairement à ce que beaucoup imaginent, le Kilimandjaro n'est pas une montagne « solide » capable d'absorber un tourisme de masse sans conséquences. Son équilibre est délicat, et les impacts humains, même minimes, peuvent s'y inscrire durablement.`,
  
  meaning: `Gravir le Mont Kilimandjaro est une expérience unique. Mais derrière cette aventure se cache une responsabilité importante : protéger l'environnement fragile de la montagne. L'un des principes essentiels à respecter est celui du Zéro Trace, ou Leave No Trace. Mais qu'est-ce que cela signifie réellement ? Comment se traduit-il concrètement sur le terrain ?

Contrairement à ce que certains pensent, le Zéro Trace ne se limite pas à ramasser ses déchets. C'est une philosophie globale qui touche chaque aspect du trek, du comportement du voyageur à la gestion de l'équipe.`,
  
  nothingBehind: `L'un des aspects fondamentaux du Zéro Trace est simple : tout ce que vous apportez sur la montagne doit être redescendu. Cela inclut les emballages alimentaires, bouteilles plastiques, papiers, mouchoirs, lingettes, piles, batteries et même les équipements usagés.

Même les déchets dits « biodégradables » peuvent être nuisibles. En altitude, le froid et les conditions climatiques ralentissent fortement la décomposition. Une simple peau de fruit ou un reste de nourriture peut rester visible pendant des années, attirer des animaux et perturber l'écosystème fragile de la montagne.

En tant que guide local, je constate chaque saison que ce sont souvent les plus petits déchets qui créent les problèmes les plus durables. Respecter cette règle, c'est montrer que l'on prend la montagne au sérieux et que l'on respecte ceux qui y vivent et y travaillent.`,
  
  environment: `Le Zéro Trace ne consiste pas seulement à ramasser les déchets, il implique également de ne pas altérer la nature autour de soi. Cela signifie rester sur les sentiers balisés, ne pas déplacer de pierres, ne pas couper de végétation et surtout ne pas créer de nouveaux chemins.

Chaque modification, même minime, fragilise l'écosystème. Une pierre déplacée, un sentier élargi ou une plante arrachée peuvent provoquer une érosion accélérée et la perte de végétation rare, ce qui met des années à se régénérer. Sur le Kilimandjaro, où les conditions sont extrêmes, la montagne ne peut pas réparer rapidement les dommages causés par l'homme.`,
  
  soilWater: `L'eau est une ressource vitale, non seulement pour les randonneurs, mais aussi pour la faune et les communautés locales qui dépendent de la montagne. Le Zéro Trace signifie éviter toute pollution des sols et des rivières, ne pas se laver directement dans les cours d'eau et ne jamais utiliser de savon près des sources.

Même un petit geste, comme jeter de l'eau savonneuse dans un ruisseau, peut avoir des conséquences importantes. Il s'agit de protéger la qualité de l'eau et d'assurer la survie des plantes et des animaux qui dépendent de ces sources.`,
  
  wildlife: `Une grande partie de la magie du Kilimandjaro réside dans sa biodiversité. Observer la nature fait partie de l'expérience, mais il est crucial de le faire sans perturber la faune et la flore.

Nourrir les animaux, cueillir des plantes ou s'approcher trop près de la faune peut créer du stress, modifier le comportement des animaux et déséquilibrer l'écosystème. Le respect passe par la discrétion et l'observation silencieuse, sans interférer avec la vie naturelle de la montagne.`,
  
  sharedResponsibility: `Adopter le Zéro Trace ne dépend pas seulement du guide ou de l'agence de trekking. Chaque voyageur a un rôle à jouer. Le guide local explique les règles, encadre les pratiques et veille au respect de l'environnement, mais c'est le comportement collectif qui détermine l'impact réel sur la montagne.

Le randonneur, de son côté, doit écouter les consignes, adapter ses habitudes et accepter certaines contraintes pour protéger la montagne. Une expédition Zéro Trace est donc un effort collectif, où chaque geste compte pour préserver l'environnement et assurer une expérience sûre et agréable pour tous.`,
  
  future: `Adopter le principe du Zéro Trace sur le Kilimandjaro, c'est faire un choix conscient. C'est préserver un site naturel exceptionnel, soutenir un tourisme durable en Tanzanie, respecter les générations futures et vivre une aventure plus authentique et responsable.

Ce n'est pas une mode passagère, ni une option facultative. C'est une responsabilité à long terme, qui fait partie intégrante de l'expérience de montagne. Chaque randonneur qui gravira le Kilimandjaro en respectant ces principes contribuera à ce que cette montagne reste intacte et magique pour les générations futures.`,
  
  guideTip: `Tout ce que vous apportez... doit être redescendu. / Ne pas créer de nouveaux chemins.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Zero Trace Expeditions on Kilimanjaro: What Does It Really Mean?',
  concept: 'Understanding the "Zero Trace" Concept (Leave No Trace)',
  whyEssential: 'Why Zero Trace Is Essential on Kilimanjaro',
  meaning: 'What "Leave No Trace" Really Means on Kilimanjaro',
  nothingBehind: 'Leave Nothing Behind',
  environment: 'Do Not Modify the Natural Environment',
  soilWater: 'Preserving Soils and Water Sources',
  wildlife: 'Respecting Wildlife and Flora',
  sharedResponsibility: 'Zero Trace: A Shared Responsibility',
  future: 'Zero Trace: A Commitment to the Future',
  guideTip: 'Guide Tip'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Climbing Mount Kilimanjaro is much more than a simple physical challenge. It's a human adventure, an immersion in unique ecosystems, but also a great responsibility.
Every year, tens of thousands of hikers tread the paths of Africa's rooftop. Without responsible practices, this iconic mountain of Tanzania could face rapid and irreversible degradation.

It is in this context that Zero Trace expeditions take on their full meaning.

But what does Zero Trace really mean on Kilimanjaro?
Is it just a marketing argument or a genuine commitment on the ground?
As a local guide, here is a clear, honest and concrete explanation.`,
  
  concept: `The Zero Trace principle, also called Leave No Trace, is based on a simple but demanding idea:

👉 Leave no lasting impact of your passage in the mountains.

This doesn't mean you don't exist on the mountain, but that:

• nothing should be left behind
• nature should not be modified
• future generations should find the mountain intact`,
  
  whyEssential: `Mount Kilimanjaro is not just Africa's highest mountain. It's a world natural heritage site, a symbol of Tanzania and an ecosystem of exceptional fragility. Every person who ventures there becomes, voluntarily or not, responsible for its preservation.

Unlike what many imagine, Kilimanjaro is not a "solid" mountain capable of absorbing mass tourism without consequences. Its balance is delicate, and human impacts, even minimal, can leave lasting marks.`,
  
  meaning: `Climbing Mount Kilimanjaro is a unique experience. But behind this adventure lies an important responsibility: protecting the mountain's fragile environment. One of the essential principles to respect is that of Zero Trace, or Leave No Trace. But what does this really mean? How does it translate concretely on the ground?

Contrary to what some think, Zero Trace is not limited to picking up your trash. It's a global philosophy that touches every aspect of trekking, from traveler behavior to team management.`,
  
  nothingBehind: `One of the fundamental aspects of Zero Trace is simple: everything you bring to the mountain must be brought back down. This includes food packaging, plastic bottles, papers, tissues, wipes, batteries, and even used equipment.

Even so-called "biodegradable" waste can be harmful. At altitude, cold and weather conditions greatly slow decomposition. A simple fruit peel or leftover food can remain visible for years, attract animals and disrupt the mountain's fragile ecosystem.

As a local guide, I observe each season that it's often the smallest pieces of trash that create the most lasting problems. Respecting this rule shows that you take the mountain seriously and respect those who live and work there.`,
  
  environment: `Zero Trace doesn't just mean picking up trash, it also involves not altering the nature around you. This means staying on marked trails, not moving stones, not cutting vegetation, and especially not creating new paths.

Every modification, even minimal, weakens the ecosystem. A displaced stone, widened trail, or uprooted plant can cause accelerated erosion and loss of rare vegetation, which takes years to regenerate. On Kilimanjaro, where conditions are extreme, the mountain cannot quickly repair damage caused by humans.`,
  
  soilWater: `Water is a vital resource, not only for hikers, but also for wildlife and local communities who depend on the mountain. Zero Trace means avoiding any pollution of soils and rivers, not washing directly in streams, and never using soap near water sources.

Even a small gesture, like dumping soapy water into a stream, can have significant consequences. It's about protecting water quality and ensuring the survival of plants and animals that depend on these sources.`,
  
  wildlife: `Much of Kilimanjaro's magic lies in its biodiversity. Observing nature is part of the experience, but it's crucial to do so without disturbing wildlife and flora.

Feeding animals, picking plants, or getting too close to wildlife can create stress, alter animal behavior, and upset the ecosystem. Respect comes through discretion and silent observation, without interfering with the mountain's natural life.`,
  
  sharedResponsibility: `Adopting Zero Trace doesn't depend only on the guide or trekking agency. Every traveler has a role to play. The local guide explains the rules, oversees practices, and ensures environmental respect, but it's collective behavior that determines the real impact on the mountain.

The hiker, on their part, must listen to instructions, adapt their habits, and accept certain constraints to protect the mountain. A Zero Trace expedition is therefore a collective effort, where every gesture counts to preserve the environment and ensure a safe and enjoyable experience for all.`,
  
  future: `Adopting the Zero Trace principle on Kilimanjaro means making a conscious choice. It's preserving an exceptional natural site, supporting sustainable tourism in Tanzania, respecting future generations, and living a more authentic and responsible adventure.

It's not a passing trend or optional feature. It's a long-term responsibility that's an integral part of the mountain experience. Every hiker who climbs Kilimanjaro while respecting these principles will contribute to keeping this mountain intact and magical for future generations.`,
  
  guideTip: `Everything you bring... must be brought back down. / Don't create new paths.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function ExpeditionZeroTraceKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'concept', 
      title: isFrench ? FR_TITLES.concept : EN_TITLES.concept,
      content: isFrench ? FR_SECTIONS.concept : EN_SECTIONS.concept
    },
    { 
      id: 'whyEssential', 
      title: isFrench ? FR_TITLES.whyEssential : EN_TITLES.whyEssential,
      content: isFrench ? FR_SECTIONS.whyEssential : EN_SECTIONS.whyEssential
    },
    { 
      id: 'meaning', 
      title: isFrench ? FR_TITLES.meaning : EN_TITLES.meaning,
      content: isFrench ? FR_SECTIONS.meaning : EN_SECTIONS.meaning
    },
    { 
      id: 'nothingBehind', 
      title: isFrench ? FR_TITLES.nothingBehind : EN_TITLES.nothingBehind,
      content: isFrench ? FR_SECTIONS.nothingBehind : EN_SECTIONS.nothingBehind
    },
    { 
      id: 'environment', 
      title: isFrench ? FR_TITLES.environment : EN_TITLES.environment,
      content: isFrench ? FR_SECTIONS.environment : EN_SECTIONS.environment
    },
    { 
      id: 'soilWater', 
      title: isFrench ? FR_TITLES.soilWater : EN_TITLES.soilWater,
      content: isFrench ? FR_SECTIONS.soilWater : EN_SECTIONS.soilWater
    },
    { 
      id: 'wildlife', 
      title: isFrench ? FR_TITLES.wildlife : EN_TITLES.wildlife,
      content: isFrench ? FR_SECTIONS.wildlife : EN_SECTIONS.wildlife
    },
    { 
      id: 'sharedResponsibility', 
      title: isFrench ? FR_TITLES.sharedResponsibility : EN_TITLES.sharedResponsibility,
      content: isFrench ? FR_SECTIONS.sharedResponsibility : EN_SECTIONS.sharedResponsibility
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
      } else if (lines[i].startsWith(':')) {
        const listItems: string[] = []
        while (i < lines.length && lines[i].startsWith(':')) {
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
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('• ') && !lines[i].startsWith(':')) {
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
                  {isFrench ? 'Comprendre les expéditions Zéro Trace sur le Kilimandjaro.' : 'Understanding Zero Trace expeditions on Kilimanjaro.'}
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