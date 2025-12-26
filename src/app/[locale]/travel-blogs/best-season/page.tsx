'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Quelle est la meilleure période pour faire l’ascension du Kilimandjaro ?',
  january: 'Janvier à début mars : la saison sèche "chaude"',
  routes: 'Pourquoi choisir Machame, Lemosho ou Marangu en janvier à début mars ?',
  june: 'Fin juin à octobre — La grande saison sèche du Kilimandjaro',
  advice: 'Conseils finaux',
  rainy: 'La saison des pluies sur le Kilimandjaro'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Guide complet écrit par un guide local en Tanzanie

Gravir le Kilimandjaro est une aventure unique. Cette montagne emblématique, culminant à 5 895 mètres, offre une expérience inoubliable en traversant plusieurs zones climatiques, des forêts tropicales luxuriantes aux zones arides et glaciaires près du sommet. Mais pour réussir votre ascension et profiter pleinement des paysages spectaculaires, choisir la bonne période pour monter le Kilimandjaro est essentiel.
`,
  january: `La période de janvier à début mars est considérée comme l'une des meilleures périodes pour gravir le Kilimandjaro. Pendant ces mois, la météo est généralement stable et les matins sont souvent dégagés, offrant une visibilité exceptionnelle sur le sommet et les glaciers. Les températures sont plus douces dans les zones basses et intermédiaires, ce qui rend la marche plus confortable et moins fatigante, même si les nuits restent froides en altitude.

L'après-midi, l'apparition de quelques nuages peut ajouter des jeux de lumière spectaculaires sur les paysages, offrant des vues incroyables pour les photographies. Les sentiers sont généralement plus secs et moins boueux qu'en saison de pluie, ce qui facilite la progression et permet de profiter pleinement de l'expérience.

Cette période est idéale pour les randonneurs qui veulent allier confort et sécurité. Les conditions stables augmentent les chances d'atteindre Uhuru Peak avec succès, tout en permettant de profiter de panoramas dégagés et de paysages photogéniques. Même si la montagne reste imprévisible avec du vent ou du froid au sommet, janvier à début mars reste un choix très prisé par les voyageurs du monde entier.
`,
  routes: `Machame : la route "Whiskey" spectaculaire

Le Machame, souvent surnommé la route "Whiskey", est l'une des options les plus populaires pour gravir le Kilimandjaro. En janvier à début mars, cette période offre des conditions idéales pour profiter pleinement de ses paysages variés et de son itinéraire progressif. Les sentiers sont secs et praticables, les matins dégagés permettent d'admirer des panoramas spectaculaires, et les après-midis offrent parfois des nuages qui créent un jeu de lumière impressionnant sur les vallées et les glaciers. Le Machame est parfait pour ceux qui souhaitent une ascension classique mais riche en sensations, avec un bon équilibre entre difficulté et acclimatation.

Lemosho : tranquillité et panoramas étendus

Le Lemosho est réputé pour offrir une expérience plus tranquille et immersive. Cette route traverse des forêts luxuriantes, des landes couvertes de bruyères et des zones moins fréquentées que Machame, tout en offrant des vues exceptionnelles sur la montagne. Pendant la saison sèche de janvier à début mars, les conditions sont idéales : les sentiers sont fermes, la visibilité est excellente, et la lumière du matin rend les paysages encore plus photogéniques. Lemosho est parfait pour les randonneurs à la recherche de sérénité et d'une expérience visuelle unique, tout en maintenant un bon rythme d'acclimatation pour atteindre Uhuru Peak.

Marangu : la route "Coca-Cola" confortable

Le Marangu est souvent appelé la route "Coca-Cola" pour son confort et ses camps aménagés. Cette période de janvier à début mars permet de profiter de sentiers secs et de conditions climatiques favorables, tout en bénéficiant d'une logistique plus simple grâce aux hébergements fixes. Les panoramas restent magnifiques, avec des matins dégagés et des vues sur les glaciers, et la route est idéale pour ceux qui recherchent une ascension plus structurée mais réussie.
`,
  june: `La période la plus stable et la plus recommandée pour l'ascension

La période de fin juin à octobre est considérée comme la meilleure saison pour faire l'ascension du Kilimandjaro, notamment pour les voyageurs qui recherchent une météo stable, une excellente visibilité et des sentiers en parfait état. C'est durant ces mois que la grande saison sèche s'installe sur le massif, créant les conditions idéales pour un trek long, régulier et sécurisé. En tant que guide local, c'est la période où j'observe le plus beau mélange entre confort, performance et paysages spectaculaires.

Ce qui distingue cette saison, c'est d'abord son faible risque de pluie. Les journées sont généralement sèches du début à la fin, ce qui permet de marcher sur des sentiers fermes et stables. L'absence de boue et d'humidité rend l'ascension beaucoup plus agréable et moins fatigante. Les vêtements restent légers, les chaussures sèchent rapidement et les randonneurs peuvent avancer sans les difficultés habituelles liées au terrain glissant. Cette fluidité dans la progression joue un rôle déterminant dans la réussite de l'ascension du Kilimandjaro.

La visibilité exceptionnelle est une autre raison qui fait de cette période un choix privilégié. Le ciel dégagé permet d'admirer le sommet dès les premiers jours du trek et de profiter de panoramas magnifiques sur la savane tanzanienne, les vallées volcaniques et la silhouette du Mawenzi. Les glaciers brillent sous le soleil matinal et les levers de soleil au-dessus des nuages deviennent de véritables moments de magie. Pour les voyageurs qui souhaitent ramener de belles photos ou vivre une expérience immersive, la grande saison sèche est sans hésitation la meilleure option.

Les sentiers du Kilimandjaro sont aussi à leur meilleur niveau pendant cette période. Le sol sec assure une marche plus régulière et plus confortable, permettant aux trekkeurs de garder un bon rythme tout au long de l'ascension. Pour les guides, cela facilite également la gestion du temps et des groupes, car les conditions deviennent prévisibles d'un jour à l'autre. Cette stabilité du terrain contribue grandement à réduire la fatigue physique et à augmenter les chances d'atteindre Uhuru Peak.

C'est également à cette période que la montagne accueille le plus de randonneurs. L'affluence crée une ambiance internationale dynamique et chaleureuse, avec des voyageurs venant du monde entier pour tenter l'aventure. Les campements deviennent des lieux d'échanges culturels, de partage et de motivation, ce qui ajoute une dimension humaine très appréciée à l'ascension.

Bien que les températures soient plus froides, surtout la nuit, elles restent très stables. Le froid sec est plus confortable à gérer qu'un froid humide, et la météo change rarement de manière brutale. Pour les trekkeurs comme pour les guides, cette stabilité permet une meilleure préparation quotidienne, une gestion plus simple de l'acclimatation et une ascension globalement plus sereine.

En résumé, la période de fin juin à octobre représente la meilleure chance de réussir l'ascension du Kilimandjaro dans des conditions optimales : météo stable, paysages clairs, sentiers secs et ambiance internationale. C'est la saison la plus recommandée pour les voyageurs qui souhaitent vivre l'expérience dans tout son confort et toute sa beauté.
`,
  advice: `Enfin, je conseille toujours d'avancer lentement, de boire régulièrement et d'écouter les signaux de votre corps. La stabilité de la météo ne doit pas faire oublier que le Kilimandjaro est une haute montagne. Prenez le temps d'apprécier chaque étape, chaque paysage et chaque lever de soleil : c'est souvent dans ces moments-là que l'on réalise pourquoi cette ascension est l'une des plus belles aventures d'Afrique.
`,
  rainy: `Ce qu'il faut vraiment savoir avant de choisir cette période

*Entre mars et mai,* puis de nouveau au mois de novembre, le Kilimandjaro entre dans ce que les guides appellent la saison des pluies. C'est une période où la montagne change complètement de visage. Les nuages deviennent plus lourds, l'humidité s'installe, et les sentiers se transforment progressivement en terrains glissants. Pour beaucoup de voyageurs, c'est la période la moins recommandée pour l'ascension, car elle demande davantage d'endurance, de résistance au froid et une véritable capacité d'adaptation.

*Durant ces mois*, les averses peuvent durer plusieurs heures et parfois s'installer toute la journée. L'eau s'infiltre dans les vêtements, alourdit l'équipement et rend la marche plus fatigante. C'est souvent l'humidité, plus encore que la pluie elle-même, qui rend cette période difficile. Elle refroidit le corps, ralentit le rythme et complique la récupération au camp. Même les tentes et les sacs de couchage peuvent rester humides pendant plusieurs jours, ce qui finit par peser sur le moral des randonneurs.

La visibilité diminue aussi énormément pendant la saison des pluies.

Les nuages enveloppent la montagne presque en permanence, les panoramas disparaissent, et la silhouette du sommet se laisse rarement apercevoir. Au-dessus de 4 000 mètres, le froid se mélange à l'humidité, créant une sensation glaciale beaucoup plus difficile à supporter que le froid sec de la saison sèche. Marcher dans le brouillard demande plus de concentration, et les repères visuels sont moins présents, ce qui rend la progression plus lente.

Les sentiers subissent également l'effet de la boue et des petites rigoles d'eau qui se forment le long des pentes. Les rochers deviennent glissants, la terre colle aux chaussures et certains passages prennent beaucoup plus de temps que d'habitude. Pour un guide, c'est une période qui demande une attention constante, car il faut adapter le rythme, choisir les zones les plus sûres et parfois modifier l'organisation de la journée selon l'évolution du ciel.

*Malgré ces défis,* la saison des pluies possède un charme que certains voyageurs apprécient. La montagne devient d'un vert intense, les forêts sont pleines de vie et les animaux se déplacent plus librement autour des sentiers. Les visiteurs sont beaucoup moins nombreux, ce qui offre une sensation de solitude impressionnante sur les routes habituellement très fréquentées. Mais cela reste une période réservée aux trekkeurs expérimentés, capables de supporter les conditions difficiles et conscients des risques supplémentaires liés à la météo.

*Pour la majorité des voyageurs*, ce n'est pas la période idéale pour tenter l'ascension du Kilimandjaro. L'expérience peut devenir éprouvante, surtout pour ceux qui effectuent leur premier trek en haute altitude. Mais pour ceux qui recherchent un défi intense, loin des foules, et qui sont prêts à affronter la pluie, le brouillard et la boue, la saison des pluies offre une version plus brute, plus sauvage et plus authentique de la montagne.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'What is the best time to climb Mount Kilimanjaro?',
  january: 'January to early March: the "warm" dry season',
  routes: 'Why choose Machame, Lemosho or Marangu in January to early March?',
  june: 'Late June to October — Kilimanjaro\'s great dry season',
  advice: 'Final advice',
  rainy: 'Kilimanjaro\'s rainy season'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Complete guide written by a local guide in Tanzania

Climbing Kilimanjaro is a unique adventure. This iconic mountain, rising to 5,895 meters, offers an unforgettable experience by crossing several climatic zones, from lush tropical forests to arid and glacial areas near the summit. But to successfully complete your ascent and fully enjoy the spectacular landscapes, choosing the right time to climb Kilimanjaro is essential.
`,
  january: `The period from January to early March is considered one of the best times to climb Kilimanjaro. During these months, the weather is generally stable and mornings are often clear, offering exceptional visibility of the summit and glaciers. Temperatures are milder in the lower and intermediate zones, making the walk more comfortable and less tiring, even though nights remain cold at altitude.

In the afternoon, the appearance of some clouds can add spectacular light effects to the landscapes, offering incredible views for photography. Trails are generally drier and less muddy than in the rainy season, facilitating progress and allowing you to fully enjoy the experience.

This period is ideal for hikers who want to combine comfort and safety. Stable conditions increase the chances of reaching Uhuru Peak successfully, while allowing you to enjoy clear panoramas and photogenic landscapes. Even though the mountain remains unpredictable with wind or cold at the summit, January to early March remains a very popular choice among travelers worldwide.
`,
  routes: `Machame: the spectacular "Whiskey" route

Machame, often nicknamed the "Whiskey" route, is one of the most popular options for climbing Kilimanjaro. In January to early March, this period offers ideal conditions to fully enjoy its varied landscapes and progressive itinerary. Trails are dry and passable, clear mornings allow for admiring spectacular panoramas, and afternoons sometimes offer clouds that create impressive light effects on valleys and glaciers. Machame is perfect for those seeking a classic but exciting ascent, with a good balance between difficulty and acclimatization.

Lemosho: tranquility and extensive panoramas

Lemosho is renowned for offering a more tranquil and immersive experience. This route crosses lush forests, heather-covered moorlands, and less frequented areas than Machame, while offering exceptional views of the mountain. During the dry season from January to early March, conditions are ideal: trails are firm, visibility is excellent, and morning light makes the landscapes even more photogenic. Lemosho is perfect for hikers seeking serenity and a unique visual experience, while maintaining a good acclimatization pace to reach Uhuru Peak.

Marangu: the comfortable "Coca-Cola" route

Marangu is often called the "Coca-Cola" route for its comfort and equipped camps. This January to early March period allows you to enjoy dry trails and favorable weather conditions, while benefiting from simpler logistics thanks to fixed accommodations. The panoramas remain magnificent, with clear mornings and glacier views, and the route is ideal for those seeking a more structured but successful ascent.
`,
  june: `The most stable and recommended period for ascent

The late June to October period is considered the best season for climbing Kilimanjaro, especially for travelers seeking stable weather, excellent visibility, and trails in perfect condition. During these months, the great dry season settles over the massif, creating ideal conditions for a long, steady, and secure trek. As a local guide, this is the period when I observe the most beautiful blend of comfort, performance, and spectacular landscapes.

What distinguishes this season is first its low risk of rain. Days are generally dry from start to finish, allowing you to walk on firm and stable trails. The absence of mud and humidity makes the ascent much more pleasant and less tiring. Clothing remains light, shoes dry quickly, and hikers can advance without the usual difficulties related to slippery terrain. This fluidity in progression plays a determining role in the success of climbing Kilimanjaro.

Exceptional visibility is another reason why this period is a preferred choice. Clear skies allow you to admire the summit from the first days of the trek and enjoy magnificent panoramas of the Tanzanian savanna, volcanic valleys, and the silhouette of Mawenzi. Glaciers gleam in the morning sun, and sunrise views above the clouds become truly magical moments. For travelers wishing to take beautiful photos or live an immersive experience, the great dry season is unquestionably the best option.

Kilimanjaro's trails are also at their best during this period. Dry ground ensures more regular and comfortable walking, allowing trekkers to maintain a good pace throughout the ascent. For guides, this also facilitates time and group management, as conditions become predictable from day to day. This terrain stability greatly reduces physical fatigue and increases the chances of reaching Uhuru Peak.

This is also the period when the mountain welcomes the most hikers. The influx creates a dynamic and warm international atmosphere, with travelers from around the world attempting the adventure. Campsites become places of cultural exchange, sharing, and motivation, adding a greatly appreciated human dimension to the ascent.

Although temperatures are colder, especially at night, they remain very stable. Dry cold is more comfortable to manage than humid cold, and weather rarely changes abruptly. For trekkers and guides alike, this stability allows for better daily preparation, simpler acclimatization management, and an overall more serene ascent.

In summary, the late June to October period represents the best chance of successfully climbing Kilimanjaro under optimal conditions: stable weather, clear landscapes, dry trails, and international atmosphere. It's the most recommended season for travelers wishing to experience the journey in all its comfort and beauty.
`,
  advice: `Finally, I always advise moving slowly, drinking regularly, and listening to your body's signals. Weather stability shouldn't make you forget that Kilimanjaro is a high mountain. Take time to appreciate each stage, each landscape, and each sunrise: it's often in these moments that you realize why this ascent is one of Africa's most beautiful adventures.
`,
  rainy: `What you really need to know before choosing this period

*Between March and May,* and again in November, Kilimanjaro enters what guides call the rainy season. This is a period when the mountain completely changes its face. Clouds become heavier, humidity sets in, and trails gradually transform into slippery terrain. For many travelers, this is the least recommended period for ascent, as it demands more endurance, cold resistance, and genuine adaptability.

*During these months*, showers can last several hours and sometimes settle in for the entire day. Water seeps into clothing, weighs down equipment, and makes walking more tiring. It's often the humidity, more than the rain itself, that makes this period difficult. It cools the body, slows the pace, and complicates recovery at camp. Even tents and sleeping bags can remain damp for several days, which eventually weighs on hikers' morale.

Visibility also decreases enormously during the rainy season.

Clouds envelop the mountain almost permanently, panoramas disappear, and the summit's silhouette rarely becomes visible. Above 4,000 meters, cold mixes with humidity, creating a freezing sensation much harder to bear than the dry cold of the dry season. Walking in fog requires more concentration, and visual landmarks are less present, making progress slower.

Trails also suffer from the effect of mud and small streams of water that form along the slopes. Rocks become slippery, earth sticks to shoes, and certain passages take much longer than usual. For a guide, this is a period requiring constant attention, as pace must be adapted, safest areas chosen, and sometimes daily organization modified according to sky conditions.

*Despite these challenges,* the rainy season has a charm that some travelers appreciate. The mountain becomes intensely green, forests are full of life, and animals move more freely around trails. Visitors are much fewer, offering an impressive sense of solitude on usually very busy routes. But this remains a period reserved for experienced trekkers, capable of enduring difficult conditions and aware of additional risks linked to weather.

*For the majority of travelers*, this isn't the ideal period to attempt climbing Kilimanjaro. The experience can become grueling, especially for those undertaking their first high-altitude trek. But for those seeking an intense challenge, away from crowds, and ready to face rain, fog, and mud, the rainy season offers a more raw, wild, and authentic version of the mountain.`
}

const ids = ['overview', 'january', 'routes', 'june', 'advice', 'rainy']

function renderContent(content: string) {
  const lines = content.split(/\r?\n/)
  const nodes: any[] = []
  let i = 0
  let keyIndex = 0

  while (i < lines.length) {
    if (lines[i].startsWith('>')) {
      const blockLines: string[] = []
      while (i < lines.length && (lines[i].startsWith('>') || lines[i].trim() === '')) {
        if (lines[i].startsWith('>')) {
          blockLines.push(lines[i].substring(1).trim())
        } else if (lines[i].trim() === '') {
          blockLines.push('')
        }
        i++
      }
      nodes.push(
        <blockquote key={keyIndex++} className="border-l-4 border-[#00A896] pl-4 italic text-gray-700 my-4">
          {blockLines.map((line, idx) => (
            <p key={idx} className="mb-2 last:mb-0">{line}</p>
          ))}
        </blockquote>
      )
    } else if (lines[i].startsWith('---')) {
      nodes.push(<hr key={keyIndex++} className="my-6 border-t border-gray-300" />)
      i++
    } else if (lines[i].match(/^,\w+/)) {
      const listItem = lines[i].substring(1)
      nodes.push(<li key={keyIndex++} className="ml-4 mb-2">{listItem}</li>)
      i++
    } else if (lines[i].trim() !== '') {
      const paragraphLines: string[] = []
      while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('---') && !lines[i].match(/^,\w+/)) {
        paragraphLines.push(lines[i])
        i++
      }
      const text = paragraphLines.join(' ')
      if (text.startsWith('#')) {
        const level = text.match(/^#+/)![0].length
        const headingText = text.replace(/^#+\s*/, '')
        const Tag = `h${level}` as keyof JSX.IntrinsicElements
        nodes.push(<Tag key={keyIndex++} className={`${level === 1 ? 'text-2xl font-bold mt-8 mb-4' : level === 2 ? 'text-xl font-semibold mt-6 mb-3' : 'text-lg font-medium mt-4 mb-2'}`}>{headingText}</Tag>)
      } else if (text.startsWith('*') && text.endsWith('*')) {
        // Handle emphasized text (surrounded by *)
        const emphasizedText = text.substring(1, text.length - 1);
        nodes.push(<p key={keyIndex++} className="mb-4 font-semibold">{emphasizedText}</p>);
      } else if (text.startsWith('🌤️') || text.startsWith('🌧️')) {
        // Handle weather emoji headings
        nodes.push(<h2 key={keyIndex++} className="text-2xl font-semibold mt-6 mb-3 text-black">{text}</h2>);
      } else {
        nodes.push(<p key={keyIndex++} className="mb-4">{text}</p>)
      }
    } else {
      i++
    }
  }

  return <div>{nodes}</div>
}

export default function BestSeasonPage() {
  const locale = useLocale()
  const title = locale === 'fr' ? 'Quelle est la meilleure période pour faire l’ascension du Kilimandjaro ?' : 'What is the best time to climb Mount Kilimanjaro?'
  const subtitle = locale === 'fr' ? 'Guide complet par un guide local en Tanzanie.' : 'Complete guide by a local guide in Tanzania.'
  const meta = { author: locale === 'fr' ? 'Guide local en Tanzanie' : 'Local Guide in Tanzania', date: '2025-12-19', readingTime: locale === 'fr' ? '12 min de lecture' : '12 min read' }
  
  const sections = ids.map(id => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] : locale === 'en' ? EN_TITLES[id] : FR_TITLES[id],
    content: locale === 'fr' ? FR_SECTIONS[id] : locale === 'en' ? EN_SECTIONS[id] : FR_SECTIONS[id]
  }))

  return (
    <div className="min-h-screen bg-white">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={meta.author} date={meta.date} readingTime={meta.readingTime} />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{subtitle}</p>
              </div>

              <article className="bg-gray-50 rounded-lg shadow-md p-6">
                <div>
                  {sections.map(s => (
                    <article key={s.id} id={s.id} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-2 text-black">{s.title}</h2>
                      <div className="prose max-w-none text-black">{renderContent(s.content)}</div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      
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
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Link>
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
                <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Link>
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
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}