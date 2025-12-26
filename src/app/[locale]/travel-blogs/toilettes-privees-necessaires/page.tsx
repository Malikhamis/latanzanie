'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const contentFr = `Les toilettes privées sont-elles nécessaires pour l’ascension du Kilimandjaro ?

Conseils d’un guide local

Lorsque l’on prépare l’ascension du Kilimandjaro, beaucoup de randonneurs se demandent si les toilettes privées sont vraiment nécessaires. La réponse dépend de votre confort personnel, de la durée de l’ascension et de vos priorités en termes de santé et d’hygiène.



1. Les conditions des toilettes publiques sur le Kilimandjaro

Lorsque l’on parle d’hygiène sur le Kilimandjaro, il est important de comprendre la réalité des installations disponibles sur la montagne. La plupart des camps disposent de toilettes publiques fournies par le parc national, mais elles sont très rudimentaires et loin des standards auxquels nous sommes habitués.

Ces toilettes se présentent généralement sous forme de cabines simples ou de structures temporaires, conçues uniquement pour répondre aux besoins de base des randonneurs. Elles sont partagées par plusieurs dizaines de personnes et, en haute saison, peuvent devenir rapidement encombrées ou sales.

Quelques points importants à connaître :

,Elles sont souvent peu entretenues, surtout lorsque le nombre de randonneurs est élevé.

,Il n’y a parfois ni papier toilette, ni eau pour se laver les mains, ce qui rend indispensable l’usage de gel hydroalcoolique ou de lingettes.

,L’usage partagé et les conditions limitées peuvent rendre ces installations stressantes et inconfortables, surtout pour les randonneurs qui n’ont jamais affronté ce type d’environnement.


Bien que fonctionnelles et suffisantes pour répondre aux besoins de base, ces toilettes ne sont pas conçues pour le confort moderne. Savoir à quoi s’attendre permet de mieux se préparer, d’apporter le matériel nécessaire et d’éviter le stress ou l’inconfort pendant l’ascension.



Les avantages des toilettes privées sur le Kilimandjaro

Pour améliorer le confort et l’hygiène pendant l’ascension du Kilimandjaro, certaines équipes de guides proposent des toilettes portables privées dans les camps. Ces installations offrent plusieurs avantages majeurs qui peuvent faire une réelle différence pour votre expérience sur la montagne.


---

1. Propreté améliorée

Les toilettes privées sont nettoyées régulièrement par l’équipe de guides, ce qui garantit un environnement beaucoup plus sain que les toilettes publiques. Cela réduit le risque de contact avec des surfaces contaminées et permet aux randonneurs de maintenir une hygiène correcte, même après plusieurs jours de marche.


---

2. Intimité et confort

Chaque randonneur dispose de sa cabine individuelle, ce qui offre un vrai confort psychologique. Pouvoir utiliser des toilettes en toute intimité réduit le stress et l’inconfort, surtout après une longue journée de marche ou dans des conditions météorologiques difficiles. Cette intimité est particulièrement appréciée par les femmes et les familles.


---

3. Moins de risques sanitaires

En limitant le contact avec les installations partagées, les toilettes privées réduisent le risque d’infections ou de maladies digestives. Sur une montagne comme le Kilimandjaro, où le corps est déjà soumis à l’altitude, à la fatigue et au froid, préserver sa santé est essentiel pour maintenir l’énergie et atteindre le sommet en toute sécurité.


---

4. Confort mental et sérénité

Savoir que vous disposez d’une installation propre et sécurisée permet de mieux se concentrer sur l’acclimatation et la marche. Ce confort psychologique est souvent sous-estimé, mais il joue un rôle clé dans la motivation et l’endurance pendant le trek.


---

5. Quand les toilettes privées sont recommandées

Pour les ascensions de plusieurs jours, surtout sur des itinéraires longs comme Lemosho ou Le Circuit du Nord, les toilettes privées sont fortement recommandées. Elles améliorent le confort quotidien, réduisent le stress et permettent de préserver l’énergie mentale et physique, ce qui est crucial pour réussir l’ascension.


---

3. Les toilettes privées : sont-elles vraiment nécessaires ?

La question de savoir si les toilettes privées sont nécessaires sur le Kilimandjaro n’a pas de réponse universelle. Tout dépend de chaque randonneur : son expérience, sa tolérance à l’inconfort, son état de santé et ses préférences personnelles. Comprendre cette réalité est essentiel pour préparer son trek intelligemment et éviter les mauvaises surprises.

Pourquoi cela dépend du randonneur

1. Tolérance au confort rudimentaire

Certains grimpeurs sont habitués aux conditions simples de la montagne et n’ont aucun problème à utiliser les toilettes publiques basiques. Pour eux, une toilette privée n’est pas indispensable.


2. Sensibilité à l’hygiène et au stress

Pour d’autres, comme les femmes, les familles ou les personnes sensibles à l’hygiène, les toilettes privées représentent un vrai confort. Elles permettent d’éviter le stress lié à la promiscuité, au manque de propreté ou à l’absence de papier toilette et d’eau pour se laver les mains.


3. Longueur et difficulté de l’itinéraire

Sur des ascensions longues comme Lemosho ou Machame, même un randonneur expérimenté peut bénéficier de l’installation de toilettes privées : elles offrent un gain de confort mental et physique, aident à économiser de l’énergie et à rester concentré sur la progression.


Conseil du guide local

> « Sur le Kilimandjaro, chaque détail compte. Avoir des toilettes privées n’est pas obligatoire, mais c’est un vrai atout pour rester propre, en bonne santé et motivé jusqu’au sommet. Pour moi, je recommande toujours aux groupes d’en prévoir au moins une pour chaque camp. »`

const contentEn = `Are private toilets necessary for a Kilimanjaro ascent?

Local guide advice

When preparing to climb Kilimanjaro, many trekkers ask whether private portable toilets are necessary. The answer depends on your personal comfort, trek length and hygiene priorities.


1. Public toilet conditions on Kilimanjaro

When discussing hygiene on Kilimanjaro, it's important to understand the reality of the facilities available on the mountain. Most camps provide public toilets supplied by the national park, but they are very basic and far from the standards we're used to.

These toilets generally take the form of simple cabins or temporary structures, designed only to meet the basic needs of trekkers. They are shared by dozens of people and, in high season, can quickly become crowded or dirty.

A few important points to know:

,They are often poorly maintained, especially when the number of trekkers is high.

,There is sometimes no toilet paper or water for hand washing, making the use of hand sanitizer or wipes essential.

,Shared use and limited conditions can make these facilities stressful and uncomfortable, especially for trekkers who have never faced this type of environment.


Although functional and sufficient to meet basic needs, these toilets are not designed for modern comfort. Knowing what to expect helps you prepare better, bring the necessary equipment and avoid stress or discomfort during the ascent.


Benefits of private toilets on Kilimanjaro

To improve comfort and hygiene during the Kilimanjaro ascent, some guide teams offer private portable toilets in camps. These facilities offer several major advantages that can make a real difference to your mountain experience.


---

1. Improved cleanliness

Private toilets are cleaned regularly by the guide team, which guarantees a much healthier environment than public toilets. This reduces the risk of contact with contaminated surfaces and allows trekkers to maintain proper hygiene, even after several days of hiking.


---

2. Privacy and comfort

Each trekker has their individual cabin, which offers real psychological comfort. Being able to use the toilets in complete privacy reduces stress and discomfort, especially after a long day of hiking or in difficult weather conditions. This privacy is particularly appreciated by women and families.


---

3. Fewer health risks

By limiting contact with shared facilities, private toilets reduce the risk of infections or digestive diseases. On a mountain like Kilimanjaro, where the body is already subjected to altitude, fatigue and cold, preserving your health is essential to maintain energy and reach the summit safely.


---

4. Mental comfort and serenity

Knowing that you have a clean and secure facility allows you to focus better on acclimatization and hiking. This psychological comfort is often underestimated, but it plays a key role in motivation and endurance during the trek.


---

5. When private toilets are recommended

For multi-day ascents, especially on long routes like Lemosho or the Northern Circuit, private toilets are strongly recommended. They improve daily comfort, reduce stress and help preserve mental and physical energy, which is crucial for a successful ascent.


---

Are private toilets really necessary?

The question of whether private toilets are necessary on Kilimanjaro has no universal answer. Everything depends on each trekker: their experience, tolerance for discomfort, state of health and personal preferences. Understanding this reality is essential to intelligently prepare your trek and avoid unpleasant surprises.

Why it depends on the trekker

1. Tolerance for basic comfort

Some climbers are used to the simple conditions of the mountains and have no problem using basic public toilets. For them, a private toilet is not essential.


2. Sensitivity to hygiene and stress

For others, such as women, families or people sensitive to hygiene, private toilets represent real comfort. They help avoid stress related to crowding, lack of cleanliness or the absence of toilet paper and water for hand washing.


3. Length and difficulty of the route

On long ascents like Lemosho or Machame, even an experienced trekker can benefit from installing private toilets: they offer a gain in mental and physical comfort, help save energy and stay focused on progression.


Local guide advice

> « On Kilimanjaro, every detail counts. Having private toilets is not mandatory, but it's a real asset to stay clean, healthy and motivated to the summit. For me, I always recommend groups to have at least one for each camp. »`

const FR_TITLES: Record<string,string> = {
  overview: 'Les toilettes privées : sont-elles nécessaires ?',
  public: 'Les conditions des toilettes publiques sur le Kilimandjaro',
  advantages: 'Les avantages des toilettes privées sur le Kilimandjaro',
  sanitary: 'Les toilettes privées : sont-elles vraiment nécessaires ?',
  recommendation: 'Conseil du guide local'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Conseils d’un guide local

Lorsque l’on prépare l’ascension du Kilimandjaro, beaucoup de randonneurs se demandent si les toilettes privées sont vraiment nécessaires. La réponse dépend de votre confort personnel, de la durée de l’ascension et de vos priorités en termes de santé et d’hygiène.
`,
  public: `Lorsque l’on parle d’hygiène sur le Kilimandjaro, il est important de comprendre la réalité des installations disponibles sur la montagne. La plupart des camps disposent de toilettes publiques fournies par le parc national, mais elles sont très rudimentaires et loin des standards auxquels nous sommes habitués.

Ces toilettes se présentent généralement sous forme de cabines simples ou de structures temporaires, conçues uniquement pour répondre aux besoins de base des randonneurs. Elles sont partagées par plusieurs dizaines de personnes et, en haute saison, peuvent devenir rapidement encombrées ou sales.

Quelques points importants à connaître :

,Elles sont souvent peu entretenues, surtout lorsque le nombre de randonneurs est élevé.

,Il n’y a parfois ni papier toilette, ni eau pour se laver les mains, ce qui rend indispensable l’usage de gel hydroalcoolique ou de lingettes.

,L’usage partagé et les conditions limitées peuvent rendre ces installations stressantes et inconfortables, surtout pour les randonneurs qui n’ont jamais affronté ce type d’environnement.


Bien que fonctionnelles et suffisantes pour répondre aux besoins de base, ces toilettes ne sont pas conçues pour le confort moderne. Savoir à quoi s’attendre permet de mieux se préparer, d’apporter le matériel nécessaire et d’éviter le stress ou l’inconfort pendant l’ascension.
`,
  advantages: `Pour améliorer le confort et l’hygiène pendant l’ascension du Kilimandjaro, certaines équipes de guides proposent des toilettes portables privées dans les camps. Ces installations offrent plusieurs avantages majeurs qui peuvent faire une réelle différence pour votre expérience sur la montagne.


---

1. Propreté améliorée

Les toilettes privées sont nettoyées régulièrement par l’équipe de guides, ce qui garantit un environnement beaucoup plus sain que les toilettes publiques. Cela réduit le risque de contact avec des surfaces contaminées et permet aux randonneurs de maintenir une hygiène correcte, même après plusieurs jours de marche.


---

2. Intimité et confort

Chaque randonneur dispose de sa cabine individuelle, ce qui offre un vrai confort psychologique. Pouvoir utiliser des toilettes en toute intimité réduit le stress et l’inconfort, surtout après une longue journée de marche ou dans des conditions météorologiques difficiles. Cette intimité est particulièrement appréciée par les femmes et les familles.


---

3. Moins de risques sanitaires

En limitant le contact avec les installations partagées, les toilettes privées réduisent le risque d’infections ou de maladies digestives. Sur une montagne comme le Kilimandjaro, où le corps est déjà soumis à l’altitude, à la fatigue et au froid, préserver sa santé est essentiel pour maintenir l’énergie et atteindre le sommet en toute sécurité.


---

4. Confort mental et sérénité

Savoir que vous disposez d’une installation propre et sécurisée permet de mieux se concentrer sur l’acclimatation et la marche. Ce confort psychologique est souvent sous-estimé, mais il joue un rôle clé dans la motivation et l’endurance pendant le trek.


---

5. Quand les toilettes privées sont recommandées

Pour les ascensions de plusieurs jours, surtout sur des itinéraires longs comme Lemosho ou Le Circuit du Nord, les toilettes privées sont fortement recommandées. Elles améliorent le confort quotidien, réduisent le stress et permettent de préserver l’énergie mentale et physique, ce qui est crucial pour réussir l’ascension.
`,
  sanitary: `La question de savoir si les toilettes privées sont nécessaires sur le Kilimandjaro n’a pas de réponse universelle. Tout dépend de chaque randonneur : son expérience, sa tolérance à l’inconfort, son état de santé et ses préférences personnelles. Comprendre cette réalité est essentiel pour préparer son trek intelligemment et éviter les mauvaises surprises.

Pourquoi cela dépend du randonneur

1. Tolérance au confort rudimentaire

Certains grimpeurs sont habitués aux conditions simples de la montagne et n’ont aucun problème à utiliser les toilettes publiques basiques. Pour eux, une toilette privée n’est pas indispensable.


2. Sensibilité à l’hygiène et au stress

Pour d’autres, comme les femmes, les familles ou les personnes sensibles à l’hygiène, les toilettes privées représentent un vrai confort. Elles permettent d’éviter le stress lié à la promiscuité, au manque de propreté ou à l’absence de papier toilette et d’eau pour se laver les mains.


3. Longueur et difficulté de l’itinéraire

Sur des ascensions longues comme Lemosho ou Machame, même un randonneur expérimenté peut bénéficier de l’installation de toilettes privées : elles offrent un gain de confort mental et physique, aident à économiser de l’énergie et à rester concentré sur la progression.
`,
  recommendation: `Conseil du guide local

> « Sur le Kilimandjaro, chaque détail compte. Avoir des toilettes privées n’est pas obligatoire, mais c’est un vrai atout pour rester propre, en bonne santé et motivé jusqu’au sommet. Pour moi, je recommande toujours aux groupes d’en prévoir au moins une pour chaque camp. »
`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Are private toilets necessary for a Kilimanjaro ascent?',
  public: 'Public toilet conditions on Kilimandjaro',
  advantages: 'Benefits of private toilets on Kilimandjaro',
  sanitary: 'Are private toilets really necessary?',
  recommendation: 'Local guide advice'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Local guide advice

When preparing to climb Kilimanjaro, many trekkers ask whether private portable toilets are necessary. The answer depends on your personal comfort, trek length and hygiene priorities.
`,
  public: `When discussing hygiene on Kilimandjaro, it's important to understand the reality of the facilities available on the mountain. Most camps provide public toilets supplied by the national park, but they are very basic and far from the standards we're used to.

These toilets generally take the form of simple cabins or temporary structures, designed only to meet the basic needs of trekkers. They are shared by dozens of people and, in high season, can quickly become crowded or dirty.

A few important points to know:

,They are often poorly maintained, especially when the number of trekkers is high.

,There is sometimes no toilet paper or water for hand washing, making the use of hand sanitizer or wipes essential.

,Shared use and limited conditions can make these facilities stressful and uncomfortable, especially for trekkers who have never faced this type of environment.


Although functional and sufficient to meet basic needs, these toilets are not designed for modern comfort. Knowing what to expect helps you prepare better, bring the necessary equipment and avoid stress or discomfort during the ascent.
`,
  advantages: `To improve comfort and hygiene during the Kilimanjaro ascent, some guide teams offer private portable toilets in camps. These facilities offer several major advantages that can make a real difference to your mountain experience.


---

1. Improved cleanliness

Private toilets are cleaned regularly by the guide team, which guarantees a much healthier environment than public toilets. This reduces the risk of contact with contaminated surfaces and allows trekkers to maintain proper hygiene, even after several days of hiking.


---

2. Privacy and comfort

Each trekker has their individual cabin, which offers real psychological comfort. Being able to use the toilets in complete privacy reduces stress and discomfort, especially after a long day of hiking or in difficult weather conditions. This privacy is particularly appreciated by women and families.


---

3. Fewer health risks

By limiting contact with shared facilities, private toilets reduce the risk of infections or digestive diseases. On a mountain like Kilimanjaro, where the body is already subjected to altitude, fatigue and cold, preserving your health is essential to maintain energy and reach the summit safely.


---

4. Mental comfort and serenity

Knowing that you have a clean and secure facility allows you to focus better on acclimatization and hiking. This psychological comfort is often underestimated, but it plays a key role in motivation and endurance during the trek.


---

5. When private toilets are recommended

For multi-day ascents, especially on long routes like Lemosho or the Northern Circuit, private toilets are strongly recommended. They improve daily comfort, reduce stress and help preserve mental and physical energy, which is crucial for a successful ascent.
`,
  sanitary: `The question of whether private toilets are necessary on Kilimanjaro has no universal answer. Everything depends on each trekker: their experience, tolerance for discomfort, state of health and personal preferences. Understanding this reality is essential to intelligently prepare your trek and avoid unpleasant surprises.

Why it depends on the trekker

1. Tolerance for basic comfort

Some climbers are used to the simple conditions of the mountains and have no problem using basic public toilets. For them, a private toilet is not essential.


2. Sensitivity to hygiene and stress

For others, such as women, families or people sensitive to hygiene, private toilets represent real comfort. They help avoid stress related to crowding, lack of cleanliness or the absence of toilet paper and water for hand washing.


3. Length and difficulty of the route

On long ascents like Lemosho or Machame, even an experienced trekker can benefit from installing private toilets: they offer a gain in mental and physical comfort, help save energy and stay focused on progression.
`,
  recommendation: `Local guide advice

> « On Kilimanjaro, every detail counts. Having private toilets is not mandatory, but it's a real asset to stay clean, healthy and motivated to the summit. For me, I always recommend groups to have at least one for each camp. »
`
}

const ids = ['overview', 'public', 'advantages', 'sanitary', 'recommendation']

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
      } else {
        nodes.push(<p key={keyIndex++} className="mb-4">{text}</p>)
      }
    } else {
      i++
    }
  }

  return <div>{nodes}</div>
}

export default function ToilettesPriveesPage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.toilettes-privees-necessaires')
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Toilettes privées : sont-elles nécessaires ?' : 'Private toilets on trek — are they necessary?'}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{locale === 'fr' ? 'Conseils d’un guide local et options pour plus de confort.' : 'Local guide advice and options for added comfort.'}</p>
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