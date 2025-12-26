'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const contentFr = `Comment rester propre sans eau sur le Kilimandjaro ?

Conseils d’un guide local

Gravir le Kilimandjaro est une aventure unique et inoubliable, mais elle se déroule dans un environnement où l’accès à l’eau est limité. Les camps sont rustiques, il n’y a pas de douches, et l’eau disponible est principalement utilisée pour boire et cuisiner. Pourtant, il est tout à fait possible de maintenir une hygiène correcte et de rester confortable tout au long du trek. 


Pourquoi l’hygiène est cruciale en montagne

Lorsque l’on s’aventure en montagne, surtout sur des sommets comme le Kilimandjaro, les conditions ne sont pas toujours favorables à une hygiène parfaite. Il n’y a pas de douche à chaque camp, l’eau est précieuse et le froid peut rendre chaque geste plus difficile. Pourtant, prendre soin de soi pendant l’ascension est loin d’être secondaire. Voici pourquoi :

*Prévenir infections et troubles digestifs* 

En altitude, votre corps est soumis à de nombreux stress : effort physique intense, changements de température et proximité avec la nature. Les mains, les pieds et les zones sensibles sont constamment exposés à la poussière, aux bactéries et aux micro-organismes. Se laver régulièrement, même avec un simple gel ou lingette désinfectante, réduit considérablement les risques de maladies digestives et d’infections cutanées qui pourraient transformer une randonnée en véritable épreuve.

*Protéger la peau et les pieds* 

Le froid, le vent, la transpiration et le frottement des chaussures peuvent causer irritations, gerçures, ampoules et rougeurs. Une hygiène minimale, accompagnée de soins adaptés — crème protectrice pour la peau, changement de chaussettes, nettoyage des pieds — permet de garder votre corps en bon état pour affronter chaque journée. Vos pieds sont vos meilleurs alliés pour gravir les pentes ; les négliger peut compromettre toute l’ascension.

*Maintenir le confort et le moral* 

Se sentir propre n’est pas seulement une question de santé, c’est aussi une question de bien-être mental. Après une longue journée de marche, se laver le visage, se brosser les dents ou se changer de vêtements propres peut sembler anodin, mais ces gestes simples revitalisent le corps et l’esprit. Un moral au top et une sensation de confort aident à rester motivé et à profiter pleinement de l’expérience unique que représente la montagne.


---

💡 Conseil du guide local : Même sans douche, privilégiez les lingettes humides, le gel hydroalcoolique et des vêtements secs chaque soir. Un corps propre est un corps prêt à affronter les défis de la montagne.`

const contentEn = `How to stay clean without water on Kilimanjaro?

Local guide advice

Climbing Kilimanjaro is a unique and unforgettable adventure, but it takes place in an environment where access to water is limited. Camps are rustic, there are no showers, and available water is mainly used for drinking and cooking. Yet, it is entirely possible to maintain proper hygiene and stay comfortable throughout the trek.


Why hygiene is crucial in the mountains

When venturing into the mountains, especially on peaks like Kilimanjaro, conditions are not always favorable to perfect hygiene. There are no showers at each camp, water is precious, and the cold can make every gesture more difficult. However, taking care of yourself during the ascent is far from secondary. Here's why:

*Preventing infections and digestive disorders*

At altitude, your body is subjected to numerous stresses: intense physical effort, temperature changes, and proximity to nature. Hands, feet, and sensitive areas are constantly exposed to dust, bacteria, and microorganisms. Washing regularly, even with a simple gel or disinfectant wipe, considerably reduces the risk of digestive diseases and skin infections that could turn a hike into a real ordeal.

*Protecting skin and feet*

Cold, wind, sweat, and shoe friction can cause irritation, chapping, blisters, and redness. Minimal hygiene, accompanied by appropriate care — protective cream for the skin, changing socks, cleaning feet — helps keep your body in good condition to face each day. Your feet are your best allies for climbing slopes; neglecting them can compromise the entire ascent.

*Maintaining comfort and morale*

Feeling clean is not only a matter of health, but also of mental well-being. After a long day of hiking, washing your face, brushing your teeth, or changing into clean clothes may seem trivial, but these simple gestures revitalize the body and spirit. High morale and a sense of comfort help you stay motivated and fully enjoy the unique experience that the mountains represent.


---

💡 Local guide tip: Even without a shower, favor wet wipes, hand sanitizer, and dry clothes each evening. A clean body is a body ready to face the challenges of the mountain.`

const FR_TITLES: Record<string,string> = {
  overview: 'Comment rester propre sans eau sur le Kilimandjaro ?',
  importance: 'Pourquoi l’hygiène est cruciale en montagne',
  prevention: 'Prévenir infections et troubles digestifs',
  protection: 'Protéger la peau et les pieds',
  comfort: 'Maintenir le confort et le moral',
  tip: 'Conseil du guide local'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Conseils d’un guide local

Gravir le Kilimandjaro est une aventure unique et inoubliable, mais elle se déroule dans un environnement où l’accès à l’eau est limité. Les camps sont rustiques, il n’y a pas de douches, et l’eau disponible est principalement utilisée pour boire et cuisiner. Pourtant, il est tout à fait possible de maintenir une hygiène correcte et de rester confortable tout au long du trek.
`,
  importance: `Lorsque l’on s’aventure en montagne, surtout sur des sommets comme le Kilimandjaro, les conditions ne sont pas toujours favorables à une hygiène parfaite. Il n’y a pas de douche à chaque camp, l’eau est précieuse et le froid peut rendre chaque geste plus difficile. Pourtant, prendre soin de soi pendant l’ascension est loin d’être secondaire. Voici pourquoi :
`,
  prevention: `En altitude, votre corps est soumis à de nombreux stress : effort physique intense, changements de température et proximité avec la nature. Les mains, les pieds et les zones sensibles sont constamment exposés à la poussière, aux bactéries et aux micro-organismes. Se laver régulièrement, même avec un simple gel ou lingette désinfectante, réduit considérablement les risques de maladies digestives et d’infections cutanées qui pourraient transformer une randonnée en véritable épreuve.
`,
  protection: `Le froid, le vent, la transpiration et le frottement des chaussures peuvent causer irritations, gerçures, ampoules et rougeurs. Une hygiène minimale, accompagnée de soins adaptés — crème protectrice pour la peau, changement de chaussettes, nettoyage des pieds — permet de garder votre corps en bon état pour affronter chaque journée. Vos pieds sont vos meilleurs alliés pour gravir les pentes ; les négliger peut compromettre toute l’ascension.
`,
  comfort: `Se sentir propre n’est pas seulement une question de santé, c’est aussi une question de bien-être mental. Après une longue journée de marche, se laver le visage, se brosser les dents ou se changer de vêtements propres peut sembler anodin, mais ces gestes simples revitalisent le corps et l’esprit. Un moral au top et une sensation de confort aident à rester motivé et à profiter pleinement de l’expérience unique que représente la montagne.
`,
  tip: `💡 Conseil du guide local : Même sans douche, privilégiez les lingettes humides, le gel hydroalcoolique et des vêtements secs chaque soir. Un corps propre est un corps prêt à affronter les défis de la montagne.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'How to stay clean without water on Kilimanjaro?',
  importance: 'Why hygiene is crucial in the mountains',
  prevention: 'Preventing infections and digestive disorders',
  protection: 'Protecting skin and feet',
  comfort: 'Maintaining comfort and morale',
  tip: 'Local guide tip'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Local guide advice

Climbing Kilimanjaro is a unique and unforgettable adventure, but it takes place in an environment where access to water is limited. Camps are rustic, there are no showers, and available water is mainly used for drinking and cooking. Yet, it is entirely possible to maintain proper hygiene and stay comfortable throughout the trek.
`,
  importance: `When venturing into the mountains, especially on peaks like Kilimanjaro, conditions are not always favorable to perfect hygiene. There are no showers at each camp, water is precious, and the cold can make every gesture more difficult. However, taking care of yourself during the ascent is far from secondary. Here's why:
`,
  prevention: `At altitude, your body is subjected to numerous stresses: intense physical effort, temperature changes, and proximity to nature. Hands, feet, and sensitive areas are constantly exposed to dust, bacteria, and microorganisms. Washing regularly, even with a simple gel or disinfectant wipe, considerably reduces the risk of digestive diseases and skin infections that could turn a hike into a real ordeal.
`,
  protection: `Cold, wind, sweat, and shoe friction can cause irritation, chapping, blisters, and redness. Minimal hygiene, accompanied by appropriate care — protective cream for the skin, changing socks, cleaning feet — helps keep your body in good condition to face each day. Your feet are your best allies for climbing slopes; neglecting them can compromise the entire ascent.
`,
  comfort: `Feeling clean is not only a matter of health, but also of mental well-being. After a long day of hiking, washing your face, brushing your teeth, or changing into clean clothes may seem trivial, but these simple gestures revitalize the body and spirit. High morale and a sense of comfort help you stay motivated and fully enjoy the unique experience that the mountains represent.
`,
  tip: `💡 Local guide tip: Even without a shower, favor wet wipes, hand sanitizer, and dry clothes each evening. A clean body is a body ready to face the challenges of the mountain.`
}

const ids = ['overview', 'importance', 'prevention', 'protection', 'comfort', 'tip']

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
      } else if (text.startsWith('💡')) {
        // Handle tip text
        nodes.push(<p key={keyIndex++} className="mb-4"><strong>{text}</strong></p>);
      } else {
        nodes.push(<p key={keyIndex++} className="mb-4">{text}</p>)
      }
    } else {
      i++
    }
  }

  return <div>{nodes}</div>
}

export default function ResterPropreSansEauPage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.rester-propre-sans-eau')
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Comment rester propre sans eau sur le Kilimandjaro ?' : 'How to stay clean without water on Kilimanjaro?'}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{locale === 'fr' ? 'Conseils d’un guide local pour maintenir l’hygiène en montagne.' : 'Local guide advice to maintain hygiene in the mountains.'}</p>
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