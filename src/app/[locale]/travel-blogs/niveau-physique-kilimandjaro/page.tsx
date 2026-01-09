'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Quel est le niveau physique réel pour monter le Kilimandjaro ?',
  walking: 'Le vrai défi physique : marcher plusieurs jours de suite',
  polepole: 'Le rythme « pole pole » : la clé de la réussite sur le Kilimandjaro',
  altitude: 'L’altitude : le facteur le plus important à comprendre',
  requiredLevel: 'Quel niveau physique est réellement suffisant pour le Kilimandjaro ?',
  preparation: 'L’importance de la préparation avant le départ',
  mental: 'Le rôle du mental dans la réussite de l’ascension',
  nonAthletes: 'Peut-on monter le Kilimandjaro sans être sportif ?',
  guideTip: 'Conseil du guide local'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Gravir le Mont Kilimandjaro (5 895 mètres) est souvent perçu comme un exploit réservé aux sportifs de haut niveau. Cette idée reçue décourage de nombreux voyageurs avant même de commencer à se renseigner. En réalité, l’ascension du Kilimandjaro est très différente de ce que l’on imagine. Le niveau physique requis est modéré, et le véritable défi n’est pas la force musculaire, mais la capacité à durer dans le temps et à gérer l’altitude de manière intelligente.

Le Kilimandjaro est une montagne unique : c’est le plus haut sommet d’Afrique, mais aussi l’un des rares sommets de cette altitude accessible sans techniques d’alpinisme. Cela change complètement la nature du défi.`,
  
  walking: `Le principal effort demandé par le Kilimandjaro est la résistance à l’effort sur la durée. Chaque jour, les marcheurs avancent entre 5 et 7 heures, parfois davantage selon l’itinéraire et l’étape. Le terrain varie, allant de sentiers forestiers à des zones volcaniques plus ouvertes, mais l’effort reste progressif.

Ce n’est pas une randonnée intense sur une seule journée, mais une succession de journées de marche. Le corps doit donc être capable de :

• récupérer d’un jour à l’autre
• supporter la fatigue accumulée
• maintenir un rythme lent mais constant

Le rythme « pole pole » : la clé de la réussite sur le Kilimandjaro

Sur le Mont Kilimandjaro, le rythme de marche est l’un des facteurs les plus déterminants pour atteindre le sommet. Les guides locaux utilisent l’expression swahilie « pole pole », qui signifie littéralement doucement, doucement. Ce rythme volontairement lent surprend souvent les voyageurs, en particulier ceux qui sont sportifs ou habitués à marcher rapidement. Pourtant, c’est précisément cette lenteur qui augmente fortement les chances de succès.

Marcher lentement permet avant tout de contrôler la respiration. En altitude, l’oxygène se raréfie et le corps doit fournir plus d’efforts pour alimenter les muscles. Un rythme trop rapide provoque un essoufflement excessif, une fatigue prématurée et une mauvaise récupération. À l’inverse, le rythme pole pole permet de maintenir une respiration stable et profonde, essentielle pour l’adaptation à l’altitude.

Ce rythme aide également à préserver l’énergie sur la durée. Le Kilimandjaro n’est pas une randonnée d’une journée, mais une ascension qui s’étale sur plusieurs jours consécutifs. Dépenser trop d’énergie dès les premières étapes peut compromettre les journées suivantes, en particulier la nuit du sommet, qui est la plus exigeante physiquement et mentalement.

Enfin, marcher lentement favorise une meilleure acclimatation. Le corps a besoin de temps pour produire davantage de globules rouges et s’adapter au manque d’oxygène. En avançant doucement, on laisse au corps le temps de s’ajuster progressivement à l’altitude, ce qui réduit considérablement les risques de mal aigu des montagnes.

De nombreux échecs sur le Kilimandjaro sont liés à un rythme trop rapide, notamment chez des personnes très sportives qui sous-estiment l’impact de l’altitude. Sur cette montagne, aller lentement est une stratégie, pas une faiblesse.`,
  
  altitude: `À partir d’environ 3 000 mètres, le corps humain commence à ressentir les effets du manque d’oxygène. Sur le Kilimandjaro, l’altitude augmente chaque jour, et ce phénomène devient de plus en plus marqué. À 5 895 mètres, la quantité d’oxygène disponible est presque deux fois moindre qu’au niveau de la mer.

Le mal aigu des montagnes peut toucher tout le monde, indépendamment de l’âge, du niveau sportif ou de l’expérience en randonnée. Des symptômes comme les maux de tête, les nausées, la perte d’appétit, la fatigue ou les troubles du sommeil sont fréquents et doivent être pris au sérieux.

C’est pour cette raison qu’une montée progressive est absolument indispensable. Les itinéraires plus longs, avec davantage de journées d’acclimatation, offrent de bien meilleures chances de succès que les routes rapides. Ils permettent au corps de s’adapter naturellement et réduisent les risques de devoir redescendre prématurément.

Le rôle du guide local est fondamental dans ce contexte. Chaque jour, un guide expérimenté observe attentivement l’état de santé des randonneurs : respiration, rythme cardiaque, niveau de fatigue, comportement, qualité du sommeil et signes éventuels du mal d’altitude. Cette surveillance constante permet d’anticiper les problèmes et d’assurer la sécurité du groupe.`,
  
  requiredLevel: `Contrairement aux idées reçues, le Kilimandjaro ne demande pas une condition physique exceptionnelle. Une personne en bonne santé, menant une vie active, possède généralement le niveau physique nécessaire pour tenter l’ascension. Il n’est pas indispensable de pratiquer un sport intensif ou d’avoir une grande endurance sportive.

Ce qui est réellement important, c’est la capacité à marcher plusieurs heures par jour à un rythme modéré, à monter des pentes sans s’épuiser rapidement et à bien récupérer entre les journées de marche. Le corps est soumis à un effort constant mais progressif, plutôt qu’à des efforts explosifs ou intenses.

Chaque année, de nombreux randonneurs qui ne se considèrent pas comme sportifs atteignent le sommet avec succès. Le choix de l’itinéraire joue un rôle clé. Des routes comme Lemosho ou Machame en version longue sont particulièrement adaptées, car elles favorisent une meilleure acclimatation et offrent un rythme plus confortable.`,
  
  preparation: `Même si le niveau requis est modéré, une préparation avant le départ reste essentielle pour vivre l’ascension dans de bonnes conditions. Une préparation de 2 à 3 mois est généralement suffisante pour la majorité des voyageurs.

Marcher régulièrement permet d’habituer le corps à l’effort. Les randonnées en terrain vallonné sont particulièrement utiles pour préparer les jambes et les articulations. Marcher avec un sac à dos aide à simuler les conditions réelles du trek. Un renforcement léger des jambes et un travail de cardio modéré améliorent l’endurance sans fatiguer excessivement le corps.

L’objectif de cette préparation n’est pas d’améliorer les performances sportives, mais de rendre l’effort plus confortable, plus fluide et plus durable pendant l’ascension.`,
  
  mental: `Le Kilimandjaro est autant un défi mental que physique. Le froid, la fatigue, l’altitude et parfois le manque de sommeil peuvent affecter le moral, surtout lors des derniers jours. La nuit du sommet, en particulier, demande une grande détermination.

Une attitude positive, de la patience et la capacité à faire confiance à son guide jouent un rôle majeur. Écouter son corps, accepter d’avancer lentement et rester concentré sur l’objectif sont souvent les clés de la réussite finale.`,
  
  nonAthletes: `Oui, sans aucun doute. Avec une condition physique correcte, une préparation adaptée, un itinéraire bien choisi et l’accompagnement d’un guide local professionnel, le Kilimandjaro devient un défi accessible à un large public, quel que soit l’âge ou l’expérience sportive.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'What is the real physical level required to climb Kilimanjaro?',
  walking: 'The real physical challenge: walking for several consecutive days',
  polepole: 'The "pole pole" rhythm: the key to success on Kilimanjaro',
  altitude: 'Altitude: the most important factor to understand',
  requiredLevel: 'What physical level is really sufficient for Kilimanjaro?',
  preparation: 'The importance of preparation before departure',
  mental: 'The role of mental strength in climbing success',
  nonAthletes: 'Can you climb Kilimanjaro without being athletic?',
  guideTip: 'Local guide tip'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Climbing Mount Kilimanjaro (5,895 meters) is often perceived as a feat reserved for elite athletes. This misconception discourages many travelers even before they begin to inquire. In reality, climbing Kilimanjaro is very different from what one might imagine. The required physical level is moderate, and the real challenge is not muscular strength, but the ability to endure over time and manage altitude intelligently.

Kilimanjaro is a unique mountain: it's Africa's highest peak, but also one of the few peaks at this altitude accessible without mountaineering techniques. This completely changes the nature of the challenge.`,
  
  walking: `The main effort demanded by Kilimanjaro is resistance to sustained effort. Each day, hikers advance between 5 and 7 hours, sometimes more depending on the route and stage. The terrain varies, from forest trails to more open volcanic areas, but the effort remains progressive.

This is not an intense hike for a single day, but a succession of hiking days. The body must therefore be able to:

• recover from day to day
• withstand accumulated fatigue
• maintain a slow but steady pace

The "pole pole" rhythm: the key to success on Kilimanjaro

On Mount Kilimanjaro, hiking pace is one of the most determining factors in reaching the summit. Local guides use the Swahili expression "pole pole," which literally means slowly, slowly. This deliberately slow pace often surprises travelers, especially those who are athletic or used to walking quickly. Yet, it is precisely this slowness that greatly increases the chances of success.

Walking slowly primarily allows control of breathing. At altitude, oxygen becomes scarce and the body must exert more effort to supply muscles. A pace that is too fast causes excessive breathlessness, premature fatigue, and poor recovery. Conversely, the pole pole rhythm allows maintaining stable and deep breathing, essential for adapting to altitude.

This rhythm also helps preserve energy over time. Kilimanjaro is not a one-day hike, but an ascent that spans several consecutive days. Spending too much energy in the early stages can compromise subsequent days, particularly the summit night, which is the most physically and mentally demanding.

Finally, walking slowly promotes better acclimatization. The body needs time to produce more red blood cells and adapt to oxygen deficiency. By moving slowly, we give the body time to gradually adjust to altitude, significantly reducing the risks of acute mountain sickness.

Many failures on Kilimanjaro are linked to a pace that is too fast, especially among very athletic people who underestimate the impact of altitude. On this mountain, going slowly is a strategy, not a weakness.`,
  
  altitude: `Starting from approximately 3,000 meters, the human body begins to feel the effects of oxygen deficiency. On Kilimanjaro, altitude increases each day, and this phenomenon becomes increasingly pronounced. At 5,895 meters, the amount of available oxygen is almost twice as little as at sea level.

Acute mountain sickness can affect everyone, regardless of age, fitness level, or hiking experience. Symptoms such as headaches, nausea, loss of appetite, fatigue, or sleep disturbances are common and must be taken seriously.

This is why a gradual ascent is absolutely essential. Longer routes, with more acclimatization days, offer much better chances of success than fast routes. They allow the body to adapt naturally and reduce the risks of having to descend prematurely.

The role of the local guide is fundamental in this context. Each day, an experienced guide carefully observes the health status of hikers: breathing, heart rate, fatigue level, behavior, sleep quality, and possible signs of altitude sickness. This constant monitoring allows anticipating problems and ensuring group safety.`,
  
  requiredLevel: `Contrary to misconceptions, Kilimanjaro does not require exceptional physical condition. A healthy person leading an active life generally possesses the necessary physical level to attempt the ascent. It is not essential to practice intensive sports or have great athletic endurance.

What is really important is the ability to walk several hours per day at a moderate pace, to climb slopes without getting exhausted quickly, and to recover well between hiking days. The body is subjected to constant but progressive effort, rather than explosive or intense efforts.

Every year, many hikers who do not consider themselves athletic reach the summit successfully. Route choice plays a key role. Routes like Lemosho or Machame in their longer versions are particularly suitable, as they promote better acclimatization and offer a more comfortable pace.`,
  
  preparation: `Even though the required level is moderate, preparation before departure remains essential to experience the ascent under good conditions. Preparation of 2 to 3 months is generally sufficient for most travelers.

Regular walking helps accustom the body to effort. Hikes in rolling terrain are particularly useful for preparing legs and joints. Walking with a backpack helps simulate real trekking conditions. Light leg strengthening and moderate cardio work improve endurance without excessively tiring the body.

The objective of this preparation is not to improve athletic performance, but to make the effort more comfortable, smoother, and more sustainable during the ascent.`,
  
  mental: `Kilimanjaro is as much a mental challenge as a physical one. Cold, fatigue, altitude, and sometimes lack of sleep can affect morale, especially during the final days. The summit night, in particular, demands great determination.

A positive attitude, patience, and the ability to trust one's guide play a major role. Listening to one's body, accepting to move slowly, and staying focused on the objective are often the keys to final success.`,
  
  nonAthletes: `Yes, without any doubt. With correct physical condition, adapted preparation, a well-chosen route, and the accompaniment of a professional local guide, Kilimanjaro becomes a challenge accessible to a wide audience, regardless of age or athletic experience.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function NiveauPhysiqueKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'walking', 
      title: isFrench ? FR_TITLES.walking : EN_TITLES.walking,
      content: isFrench ? FR_SECTIONS.walking : EN_SECTIONS.walking
    },
    { 
      id: 'altitude', 
      title: isFrench ? FR_TITLES.altitude : EN_TITLES.altitude,
      content: isFrench ? FR_SECTIONS.altitude : EN_SECTIONS.altitude
    },
    { 
      id: 'requiredLevel', 
      title: isFrench ? FR_TITLES.requiredLevel : EN_TITLES.requiredLevel,
      content: isFrench ? FR_SECTIONS.requiredLevel : EN_SECTIONS.requiredLevel
    },
    { 
      id: 'preparation', 
      title: isFrench ? FR_TITLES.preparation : EN_TITLES.preparation,
      content: isFrench ? FR_SECTIONS.preparation : EN_SECTIONS.preparation
    },
    { 
      id: 'mental', 
      title: isFrench ? FR_TITLES.mental : EN_TITLES.mental,
      content: isFrench ? FR_SECTIONS.mental : EN_SECTIONS.mental
    },
    { 
      id: 'nonAthletes', 
      title: isFrench ? FR_TITLES.nonAthletes : EN_TITLES.nonAthletes,
      content: isFrench ? FR_SECTIONS.nonAthletes : EN_SECTIONS.nonAthletes
    }
  ]

  function renderContent(content: string) {
    // Add markers for terms we want to link
    const processedContent = content
      .replace(/\bphysique\b/g, '###PHYSIQUE_LINK###');
    
    const lines = processedContent.split(/\r?\n/)
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
          <blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-sm text-black mb-4" dangerouslySetInnerHTML={{__html: blockLines.map(line => line.replace(/###PHYSIQUE_LINK###/g, `<a href="/${locale}/travel-blogs/preparation-physique-ascension-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">physique</a>`)).join('\n')}}>
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
              <li key={`li-${keyIndex++}-${idx}`} className="mb-1" dangerouslySetInnerHTML={{__html: item.replace(/###PHYSIQUE_LINK###/g, `<a href="/${locale}/travel-blogs/preparation-physique-ascension-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">physique</a>`)}}></li>
            ))}
          </ul>
        )
      } else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('• ')) {
          paragraphLines.push(lines[i])
          i++
        }
        // For now, just add the paragraph as is, since complex text processing with JSX elements
        // requires more complex logic that would be better handled by pre-processing the content
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4" dangerouslySetInnerHTML={{__html: paragraphLines.join('\n').replace(/###PHYSIQUE_LINK###/g, `<a href="/${locale}/travel-blogs/preparation-physique-ascension-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">physique</a>`)}}>
          </p>
        )
      }
    }

    return nodes
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/preparation-hero.jpg')" }}>
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
            readingTime="10 min de lecture"
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
                  {isFrench ? 'Comprendre le niveau physique réel requis pour gravir le Kilimandjaro.' : 'Understanding the real physical level required to climb Kilimanjaro.'}
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