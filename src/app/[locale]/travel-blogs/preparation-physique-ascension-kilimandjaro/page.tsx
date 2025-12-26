'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Comment bien se préparer physiquement pour l’ascension',
  endurance: 'Développer l’endurance plutôt que la vitesse',
  hills: 'Habituer le corps aux montées et aux descentes',
  strength: 'Renforcer le corps pour porter l’effort',
  polepole: 'Apprendre à marcher lentement ("pole pole")',
  timing: 'Commencer la préparation au bon moment',
  guideTip: 'Conseil du guide local'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `La préparation physique pour le Mont Kilimandjaro ne consiste pas à devenir un athlète de haut niveau, mais à préparer son corps à l’endurance, à la durée et à l’altitude. Chaque jour sur la montagne, vous marcherez plusieurs heures, parfois lentement, parfois dans le froid, avec un sac à dos, sur des terrains variés. Une bonne préparation permet de réduire la fatigue, d’éviter les blessures et d’augmenter considérablement les chances d’atteindre le sommet.

En tant que guide local, je constate que les personnes les mieux préparées ne sont pas forcément les plus sportives, mais celles qui ont appris à marcher longtemps, régulièrement et calmement.`,

  endurance: `L’ascension du Kilimandjaro est un effort long et progressif, bien différent d’une activité sportive basée sur la vitesse ou la performance. Chaque journée sur la montagne demande plusieurs heures de marche consécutives, parfois dans le froid, parfois en altitude, toujours à un rythme contrôlé. Pour cette raison, la préparation physique doit avant tout viser le développement de l’endurance.

S’entraîner à marcher longtemps est essentiel. Les randonnées de plusieurs heures, les marches sur terrain vallonné ou les sorties régulières avec un sac à dos permettent d’habituer le corps à l’effort continu. Ce type d’entraînement prépare les muscles, les articulations et le système cardio-respiratoire à fonctionner sur la durée, jour après jour, exactement comme pendant l’ascension.

Les sports d’endurance comme la marche rapide, le vélo, la natation ou le jogging léger sont également très utiles pour renforcer le cœur et les poumons. Cependant, l’essentiel reste la régularité et la progressivité. Il vaut mieux s’entraîner plusieurs fois par semaine à intensité modérée que de forcer ponctuellement. Sur le Kilimandjaro, ce n’est pas la vitesse qui fait la différence, mais la capacité à maintenir un rythme stable sans s’épuiser.`,

  hills: `Le Kilimandjaro n’est pas une montagne plate. Les sentiers alternent montées longues et progressives, mais aussi descentes parfois raides et techniques. Les montées sollicitent fortement le cœur et les poumons, tandis que les descentes mettent à rude épreuve les genoux, les cuisses et les muscles stabilisateurs.

S’entraîner sur des escaliers, des collines ou des chemins en pente permet de renforcer les jambes et d’améliorer l’équilibre. Cela aide également le corps à mieux gérer l’effort lors des changements de rythme et de terrain. Une attention particulière doit être portée à la marche en descente, souvent négligée lors de la préparation, alors qu’elle est responsable de nombreuses douleurs et blessures.

Une bonne préparation aux montées et aux descentes permet de préserver le corps jusqu’au dernier jour du trek, y compris lors de la descente finale après le sommet, souvent la plus éprouvante.`,

  strength: `Même si les porteurs prennent en charge la majorité du matériel, chaque randonneur porte son sac de journée avec de l’eau, des vêtements et du matériel personnel. Un minimum de renforcement musculaire est donc important pour stabiliser le dos, les épaules, les hanches et les jambes.

Des exercices simples suffisent pour améliorer la posture, l’équilibre et la résistance à la fatigue. Un corps bien renforcé dépense moins d’énergie inutilement, ce qui est particulièrement important en altitude, où l’oxygène est plus rare et la récupération plus lente.

Un bon renforcement musculaire permet aussi de réduire les douleurs lombaires et les tensions dans les épaules, fréquentes chez les personnes insuffisamment préparées.`,

  polepole: `Sur le Kilimandjaro, une règle essentielle s’applique à tous : « pole pole », ce qui signifie marcher lentement. La préparation physique ne concerne pas uniquement le corps, mais aussi l’état d’esprit. Apprendre à ralentir, à contrôler sa respiration et à accepter un rythme lent est fondamental pour réussir l’ascension.

Marcher lentement permet au corps de mieux s’adapter à l’altitude, de stabiliser la respiration et de réduire le risque de mal des montagnes. Les personnes qui marchent trop vite, même si elles sont sportives, sont souvent celles qui rencontrent le plus de difficultés en altitude.

S’entraîner à marcher lentement, sans chercher la performance, prépare le corps et le mental aux réalités de la montagne.`,

  timing: `Idéalement, la préparation physique pour le Kilimandjaro doit commencer 6 à 8 semaines avant l’ascension. Cette période permet de développer l’endurance progressivement, de renforcer le corps sans le brusquer et de tester son équipement dans des conditions réelles.

Une préparation progressive est toujours plus efficace et plus sûre qu’un entraînement intensif de dernière minute. Elle permet également d’arriver sur la montagne en confiance, avec un corps prêt à affronter l’effort et l’altitude.`,

  guideTip: `> « Le Kilimandjaro récompense ceux qui respectent le rythme de la montagne. La régularité, la patience et une bonne préparation physique sont les clés du sommet. »`
}

const contentEn = `Physical preparation for Mount Kilimanjaro is not about becoming an elite athlete, but about readying your body for endurance, duration and altitude. Each day on the mountain you will walk for several hours—sometimes slowly, sometimes in the cold—with a pack over varied terrain. Good preparation reduces fatigue, prevents injury and greatly increases your chance to reach the summit.

From my experience as a local guide, the best-prepared trekkers are not necessarily the fittest, but those who have learned to walk for long periods, regularly and calmly.`

const EN_TITLES: Record<string,string> = {
  overview: 'How to prepare physically for the Kilimanjaro ascent',
  endurance: 'Build endurance rather than speed',
  hills: 'Acclimatise the body to climbs and descents',
  strength: 'Strengthen the body to carry the load',
  polepole: 'Learn to walk slowly ("pole pole")',
  timing: 'Start training at the right time',
  guideTip: 'Local guide tip'
}

const EN_SECTIONS: Record<string,string> = {
  overview: contentEn,
  endurance: `Climbing Kilimanjaro is a long, progressive effort very different from speed-based sports. Each day requires several hours of continuous walking, sometimes in cold or at altitude. Training should therefore prioritise endurance: long hikes, hill walks and regular outings with a loaded backpack prepare muscles, joints and the cardiorespiratory system for sustained effort. Endurance sports such as brisk walking, cycling, swimming or light jogging also help, but consistency and progressive training are key.`,
  hills: `Kilimanjaro's trails alternate long uphill sections and often steep, technical descents. Training on stairs, hills or sloping tracks strengthens legs and balance and prepares the body for changes in rhythm and terrain. Pay special attention to downhill technique to protect knees and stabilising muscles.`,
  strength: `Even though porters carry most equipment, each trekker carries a daypack with water, clothing and personal kit. Basic strength work stabilises the back, shoulders, hips and legs. Simple strengthening exercises improve posture, balance and fatigue resistance—important at altitude where oxygen is limited and recovery slower.`,
  polepole: `A key rule on Kilimanjaro is "pole pole" — walk slowly. Physical preparation also trains the mind: slowing down, controlling breathing and accepting a steady, slow pace help acclimatization and reduce altitude sickness risk. Practice slow, steady walking rather than speed.`,
  timing: `Ideally start physical preparation 6–8 weeks before the climb. This timeframe allows progressive endurance building, gradual strength work and real-equipment tests. Gradual preparation is safer and more effective than last-minute intense training.`,
  guideTip: `"The Kilimanjaro rewards those who respect the mountain's rhythm. Consistency, patience and good physical preparation are the keys to the summit."`
}

export default function PreparationPhysiquePage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.preparation-physique-ascension-kilimandjaro')
  const meta = { author: t('meta.author'), date: t('meta.date'), readingTime: t('meta.readingTime') }

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
        continue
      }

      const para: string[] = []
      while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>')) {
        para.push(lines[i])
        i++
      }
      if (para.length) {
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4 leading-relaxed text-black">
            {para.join(' ')}
          </p>
        )
      }

      while (i < lines.length && lines[i].trim() === '') {
        i++
      }
    }

    return nodes
  }

  const ids = ['overview','endurance','hills','strength','polepole','timing','guideTip']
  const sections = ids.map(id => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] ?? id : locale === 'en' ? EN_TITLES[id] ?? id : t(`sections.${id}.title`),
    content: locale === 'fr' ? FR_SECTIONS[id] ?? '' : locale === 'en' ? EN_SECTIONS[id] ?? '' : t(`sections.${id}.content`)
  }))

  return (
    <div className="min-h-screen bg-white">
      <section className="relative hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero5.jpg')" }}>
        <div className="absolute inset-0 -z-10">
          <img src="/images/hero5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-white mb-6 inline-flex items-center text-sm font-medium">← {locale === 'fr' ? 'Retour aux blogs' : 'Back to blogs'}</Link>
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">{locale === 'fr' ? FR_TITLES.overview : EN_TITLES.overview}</h1>
                <p className="text-base md:text-lg text-black max-w-3xl">{locale === 'fr' ? 'Conseils pratiques pour préparer votre corps à l’ascension.' : 'Practical advice to ready your body for the climb.'}</p>
              </div>

              <article id="overview" className="bg-gray-50 rounded-lg shadow-md p-6">
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
  )
}
