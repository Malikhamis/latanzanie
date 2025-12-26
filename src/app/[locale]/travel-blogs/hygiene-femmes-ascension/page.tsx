'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const contentFr = `Conseils d’hygiène pour les femmes lors de l’ascension du Kilimandjaro

Guide pratique par un guide local

Gravir le Kilimandjaro est une aventure exceptionnelle, mais elle impose des conditions très différentes de la vie quotidienne. Pour les femmes, certaines préoccupations liées à l’hygiène deviennent particulièrement importantes. Entre camps rustiques, absence de douches, toilettes rudimentaires et conditions climatiques extrêmes, il est indispensable de bien se préparer pour rester propre, confortable et en bonne santé tout au long du trek.



1. Préparer sa trousse d’hygiène féminine

Une bonne préparation commence par une trousse d’hygiène complète. Voici les indispensables :

*Serviettes hygiéniques ou tampons biodégradables* : légers, faciles à transporter et à éliminer de manière responsable.

Lingettes intimes : essentielles pour se nettoyer rapidement lorsque l’eau est limitée.

*Gel hydroalcoolique* : pour désinfecter les mains après chaque passage aux toilettes.

*Sacs étanches pour les déchets :* indispensables pour respecter l’environnement du parc.

Crème hydratante et baume à lèvres : pour protéger la peau du vent, du froid et du soleil en altitude.


Gérer les toilettes sur la montagne : conseils pour les femmes


L’un des défis majeurs lors de l’ascension du Kilimandjaro est l’accès aux toilettes, qui diffère complètement de ce que l’on connaît en ville. Les installations sanitaires sur la montagne sont très limitées et il est important de savoir à quoi s’attendre pour rester propre et confortable, surtout pour les femmes.

La plupart des camps proposent des toilettes publiques fournies par le parc national. Elles sont généralement très rudimentaires : des cabines simples, parfois sans papier toilette ni eau pour se laver les mains, et partagées par plusieurs dizaines de randonneurs. Pour certaines randonneuses, ces conditions peuvent être stressantes ou inconfortables, notamment pendant les règles ou après de longues journées de marche.

Pour améliorer l’expérience, certaines équipes de guides proposent des toilettes portables privées. Ces installations offrent une propreté accrue, plus d’intimité et réduisent considérablement le stress lié à l’utilisation des sanitaires. Elles sont particulièrement recommandées pour les femmes et pour les itinéraires longs comme Machame ou Lemosho, où les nuits en altitude sont froides et où le confort peut faire une grande différence sur le moral et la motivation.

> Conseil de guide local : si possible, réservez avec votre équipe une toilette portable privée pour chaque camp. Cela vous permet de mieux gérer vos besoins intimes, de rester propre et sereine, et de vous concentrer pleinement sur l’ascension.



Gérer les règles pendant l’ascension du Kilimandjaro

Guide pratique pour les femmes par un guide local

Gravir le Kilimandjaro est une aventure extraordinaire, mais pour les femmes, avoir ses règles pendant le trek peut poser des défis supplémentaires. Entre camps rudimentaires, toilettes limitées et conditions extrêmes, il est essentiel de savoir à quoi s’attendre et comment se préparer pour rester propre, confortable et sereine.


---

Changement du cycle menstruel en altitude

L’altitude peut parfois provoquer de légères modifications du cycle menstruel. Le stress physique et mental lié à l’ascension, la fatigue intense, le froid et le décalage horaire peuvent faire décaler le début des règles de quelques jours. Certaines femmes peuvent également remarquer que leurs règles deviennent plus légères ou irrégulières pendant l’ascension, bien que cela ne soit pas systématique.

D’autres facteurs liés au trek influencent le cycle menstruel, notamment l’hydratation, la nutrition et le repos. Un manque d’eau ou d’alimentation suffisante peut accentuer les irrégularités, tandis qu’une bonne préparation physique et mentale peut aider à maintenir un cycle plus stable.

> Conseil de guide : prévoir son trek en tenant compte de ces possibles décalages et apporter suffisamment de protections menstruelles pour toute la durée de l’ascension, même si vos règles ne sont pas prévues à ce moment-là. Cela permet d’éviter le stress et de rester concentrée sur la marche et la réussite du sommet.`

const contentEn = `Hygiene advice for women during the Kilimanjaro ascent

Practical guide by a local guide

Climbing Kilimanjaro is an exceptional adventure, but it imposes conditions very different from daily life. For women, certain hygiene concerns become particularly important. Between rustic camps, lack of showers, basic toilets and extreme weather conditions, it is essential to prepare well to stay clean, comfortable and healthy throughout the trek.



1. Preparing your feminine hygiene kit

Good preparation starts with a complete hygiene kit. Here are the essentials:

*Biodegradable sanitary pads or tampons*: lightweight, easy to transport and dispose of responsibly.

Intimate wipes: essential for quick cleaning when water is limited.

*Hand sanitizer*: to disinfect hands after each trip to the toilet.

*Waterproof waste bags:* essential to respect the park environment.

Moisturizing cream and lip balm: to protect skin from wind, cold and sun at altitude.


Managing toilets on the mountain: advice for women


One of the major challenges when climbing Kilimanjaro is access to toilets, which differs completely from what we know in the city. Sanitary facilities on the mountain are very limited and it's important to know what to expect to stay clean and comfortable, especially for women.

Most camps offer public toilets provided by the national park. They are generally very basic: simple cabins, sometimes without toilet paper or water to wash hands, and shared by dozens of hikers. For some female hikers, these conditions can be stressful or uncomfortable, especially during menstruation or after long hiking days.

To improve the experience, some guide teams offer private portable toilets. These facilities offer increased cleanliness, more privacy and considerably reduce stress related to using the toilets. They are particularly recommended for women and for long routes like Machame or Lemosho, where nights at altitude are cold and where comfort can make a big difference to morale and motivation.

> Local guide advice: if possible, book with your team a private portable toilet for each camp. This allows you to better manage your intimate needs, stay clean and serene, and focus fully on the ascent.



Managing periods during the Kilimanjaro ascent

Practical guide for women by a local guide

Climbing Kilimanjaro is an extraordinary adventure, but for women, having their period during the trek can pose additional challenges. Between basic camps, limited toilets and extreme conditions, it's essential to know what to expect and how to prepare to stay clean, comfortable and serene.


---

Changes in menstrual cycle at altitude

Altitude can sometimes cause slight changes in the menstrual cycle. The physical and mental stress related to the ascent, intense fatigue, cold and jet lag can delay the onset of periods by a few days. Some women may also notice that their periods become lighter or irregular during the ascent, although this is not systematic.

Other factors related to the trek influence the menstrual cycle, including hydration, nutrition and rest. Lack of sufficient water or food can accentuate irregularities, while good physical and mental preparation can help maintain a more stable cycle.

> Guide advice: plan your trek taking these possible delays into account and bring enough menstrual protection for the entire duration of the ascent, even if your period is not expected at that time. This helps avoid stress and stay focused on walking and reaching the summit.`

const FR_TITLES: Record<string,string> = {
  overview: 'Conseils d’hygiène pour les femmes lors de l’ascension du Kilimandjaro',
  preparation: 'Préparer sa trousse d’hygiène féminine',
  toilets: 'Gérer les toilettes sur la montagne : conseils pour les femmes',
  periods: 'Gérer les règles pendant l’ascension du Kilimandjaro',
  cycle: 'Changement du cycle menstruel en altitude',
  tip: 'Conseil de guide local'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Guide pratique par un guide local

Gravir le Kilimandjaro est une aventure exceptionnelle, mais elle impose des conditions très différentes de la vie quotidienne. Pour les femmes, certaines préoccupations liées à l’hygiène deviennent particulièrement importantes. Entre camps rustiques, absence de douches, toilettes rudimentaires et conditions climatiques extrêmes, il est indispensable de bien se préparer pour rester propre, confortable et en bonne santé tout au long du trek.
`,
  preparation: `Une bonne préparation commence par une trousse d’hygiène complète. Voici les indispensables :

*Serviettes hygiéniques ou tampons biodégradables* : légers, faciles à transporter et à éliminer de manière responsable.

Lingettes intimes : essentielles pour se nettoyer rapidement lorsque l’eau est limitée.

*Gel hydroalcoolique* : pour désinfecter les mains après chaque passage aux toilettes.

*Sacs étanches pour les déchets :* indispensables pour respecter l’environnement du parc.

Crème hydratante et baume à lèvres : pour protéger la peau du vent, du froid et du soleil en altitude.
`,
  toilets: `L’un des défis majeurs lors de l’ascension du Kilimandjaro est l’accès aux toilettes, qui diffère complètement de ce que l’on connaît en ville. Les installations sanitaires sur la montagne sont très limitées et il est important de savoir à quoi s’attendre pour rester propre et confortable, surtout pour les femmes.

La plupart des camps proposent des toilettes publiques fournies par le parc national. Elles sont généralement très rudimentaires : des cabines simples, parfois sans papier toilette ni eau pour se laver les mains, et partagées par plusieurs dizaines de randonneurs. Pour certaines randonneuses, ces conditions peuvent être stressantes ou inconfortables, notamment pendant les règles ou après de longues journées de marche.

Pour améliorer l’expérience, certaines équipes de guides proposent des toilettes portables privées. Ces installations offrent une propreté accrue, plus d’intimité et réduisent considérablement le stress lié à l’utilisation des sanitaires. Elles sont particulièrement recommandées pour les femmes et pour les itinéraires longs comme Machame ou Lemosho, où les nuits en altitude sont froides et où le confort peut faire une grande différence sur le moral et la motivation.
`,
  periods: `Guide pratique pour les femmes par un guide local

Gravir le Kilimandjaro est une aventure extraordinaire, mais pour les femmes, avoir ses règles pendant le trek peut poser des défis supplémentaires. Entre camps rudimentaires, toilettes limitées et conditions extrêmes, il est essentiel de savoir à quoi s’attendre et comment se préparer pour rester propre, confortable et sereine.
`,
  cycle: `L’altitude peut parfois provoquer de légères modifications du cycle menstruel. Le stress physique et mental lié à l’ascension, la fatigue intense, le froid et le décalage horaire peuvent faire décaler le début des règles de quelques jours. Certaines femmes peuvent également remarquer que leurs règles deviennent plus légères ou irrégulières pendant l’ascension, bien que cela ne soit pas systématique.

D'autres facteurs liés au trek influencent le cycle menstruel, notamment l'hydratation, la nutrition et le repos. Un manque d'eau ou d'alimentation suffisante peut accentuer les irrégularités, tandis qu'une bonne préparation physique et mentale peut aider à maintenir un cycle plus stable.
`,
  tip: `> Conseil de guide local : si possible, réservez avec votre équipe une toilette portable privée pour chaque camp. Cela vous permet de mieux gérer vos besoins intimes, de rester propre et sereine, et de vous concentrer pleinement sur l'ascension.

> Conseil de guide : prévoir son trek en tenant compte de ces possibles décalages et apporter suffisamment de protections menstruelles pour toute la durée de l'ascension, même si vos règles ne sont pas prévues à ce moment-là. Cela permet d'éviter le stress et de rester concentrée sur la marche et la réussite du sommet.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Hygiene advice for women during the Kilimanjaro ascent',
  preparation: 'Preparing your feminine hygiene kit',
  toilets: 'Managing toilets on the mountain: advice for women',
  periods: 'Managing periods during the Kilimanjaro ascent',
  cycle: 'Changes in menstrual cycle at altitude',
  tip: 'Local guide advice'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Practical guide by a local guide

Climbing Kilimanjaro is an exceptional adventure, but it imposes conditions very different from daily life. For women, certain hygiene concerns become particularly important. Between rustic camps, lack of showers, basic toilets and extreme weather conditions, it is essential to prepare well to stay clean, comfortable and healthy throughout the trek.
`,
  preparation: `Good preparation starts with a complete hygiene kit. Here are the essentials:

*Biodegradable sanitary pads or tampons*: lightweight, easy to transport and dispose of responsibly.

Intimate wipes: essential for quick cleaning when water is limited.

*Hand sanitizer*: to disinfect hands after each trip to the toilet.

*Waterproof waste bags:* essential to respect the park environment.

Moisturizing cream and lip balm: to protect skin from wind, cold and sun at altitude.
`,
  toilets: `One of the major challenges when climbing Kilimanjaro is access to toilets, which differs completely from what we know in the city. Sanitary facilities on the mountain are very limited and it's important to know what to expect to stay clean and comfortable, especially for women.

Most camps offer public toilets provided by the national park. They are generally very basic: simple cabins, sometimes without toilet paper or water to wash hands, and shared by dozens of hikers. For some female hikers, these conditions can be stressful or uncomfortable, especially during menstruation or after long hiking days.

To improve the experience, some guide teams offer private portable toilets. These facilities offer increased cleanliness, more privacy and considerably reduce stress related to using the toilets. They are particularly recommended for women and for long routes like Machame or Lemosho, where nights at altitude are cold and where comfort can make a big difference to morale and motivation.
`,
  periods: `Practical guide for women by a local guide

Climbing Kilimanjaro is an extraordinary adventure, but for women, having their period during the trek can pose additional challenges. Between basic camps, limited toilets and extreme conditions, it's essential to know what to expect and how to prepare to stay clean, comfortable and serene.
`,
  cycle: `Altitude can sometimes cause slight changes in the menstrual cycle. The physical and mental stress related to the ascent, intense fatigue, cold and jet lag can delay the onset of periods by a few days. Some women may also notice that their periods become lighter or irregular during the ascent, although this is not systematic.

Other factors related to the trek influence the menstrual cycle, including hydration, nutrition and rest. Lack of sufficient water or food can accentuate irregularities, while good physical and mental preparation can help maintain a more stable cycle.
`,
  tip: `> Local guide advice: if possible, book with your team a private portable toilet for each camp. This allows you to better manage your intimate needs, stay clean and serene, and focus fully on the ascent.

> Guide advice: plan your trek taking these possible delays into account and bring enough menstrual protection for the entire duration of the ascent, even if your period is not expected at that time. This helps avoid stress and stay focused on walking and reaching the summit.`
}

const ids = ['overview', 'preparation', 'toilets', 'periods', 'cycle', 'tip']

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
      } else {
        nodes.push(<p key={keyIndex++} className="mb-4">{text}</p>)
      }
    } else {
      i++
    }
  }

  return <div>{nodes}</div>
}

export default function HygieneFemmesAscensionPage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.hygiene-femmes-ascension')
  const title = t('title')
  const subtitle = t('subtitle')
  const meta = { author: t('meta.author'), date: t('meta.date'), readingTime: t('meta.readingTime') }
  
  const sections = ids.map(id => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] : locale === 'en' ? EN_TITLES[id] : t(`sections.${id}.title`),
    content: locale === 'fr' ? FR_SECTIONS[id] : locale === 'en' ? EN_SECTIONS[id] : t(`sections.${id}.content`)
  }))

  return (
    <div className="min-h-screen bg-white">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero5.jpg')" }}>
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Conseils d’hygiène pour les femmes lors de l’ascension du Kilimandjaro' : 'Hygiene advice for women during the Kilimanjaro ascent'}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{locale === 'fr' ? 'Guide pratique par un guide local du Kilimandjaro.' : 'Practical guide by a Kilimanjaro local guide.'}</p>
              </div>

              <article id="overview" className="bg-gray-50 rounded-lg shadow-md p-6">
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