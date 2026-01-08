'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const contentFr = `Hygiène alimentaire lors de l’ascension du Kilimandjaro

Guide pratique par un guide local pour un trek sûr et sain

Gravir le Kilimandjaro est une aventure unique et exigeante. Mais au-delà de l’effort physique et de l’acclimatation à l’altitude, l’hygiène alimentaire joue un rôle crucial pour garantir un trek sûr et agréable. Entre les camps rustiques, le froid extrême, le vent et la pluie, et surtout l’accès limité à l’eau, savoir comment gérer votre alimentation est indispensable pour éviter les intoxications alimentaires, les maux de ventre et la fatigue. Une bonne hygiène alimentaire contribue à rester énergique et en bonne santé tout au long de l’ascension.


---

Préparation des repas en haute altitude

Sur le Kilimandjaro, les repas sont préparés par des cuisiniers expérimentés qui connaissent les contraintes de l’altitude et les besoins des randonneurs. Même dans des conditions simples et sans infrastructures modernes, certaines règles strictes d’hygiène alimentaire sont respectées pour protéger la santé des trekkeurs :

*D'Eau potable filtrée ou bouillie* : L’eau est un vecteur potentiel de bactéries et parasites. Sur le Kilimandjaro, toute l’eau utilisée pour la cuisine et la boisson est filtrée ou bouillie, garantissant ainsi que chaque repas soit sûr à consommer.

*Nettoyage des surfaces de cuisine :* Même en altitude, les zones de préparation des repas sont régulièrement nettoyées. Cette pratique réduit le risque de contamination croisée et assure que les aliments restent sains, même lorsqu’ils sont manipulés par plusieurs membres de l’équipe.

*Stockage sûr des aliments* : Les produits périssables sont conservés dans des conditions appropriées pour limiter le développement de bactéries. Cela permet de servir des repas chauds et nutritifs, tout en minimisant le risque de maladies digestives, très fréquentes lors des treks en montagne si l’hygiène n’est pas respectée.

Ces mesures simples mais essentielles permettent aux randonneurs de profiter de repas sains et sécurisés, de maintenir un bon niveau d’énergie et de réduire considérablement les risques de troubles digestifs qui pourraient compromettre l’ascension.




*Conseils pratiques pour les randonneurs
* 
Pour compléter les efforts des équipes de cuisine, il est conseillé aux randonneurs de :

Se laver les mains régulièrement avec du savon ou un gel hydroalcoolique avant chaque repas.

Éviter les aliments crus ou mal cuits, comme les légumes non pelés, les fruits non lavés ou les viandes insuffisamment cuites.

Privilégier les repas chauds, car la cuisson élimine la majorité des bactéries.

Ne pas partager assiettes ou couverts pour limiter les risques de contamination.






L’eau et la logistique alimentaire

Chaque camp dispose de zones séparées pour cuisiner et manger en toute sécurité. L’eau potable est toujours disponible pour boire et cuisiner, mais il est recommandé de filtrer ou traiter votre eau personnelle si nécessaire. Une bonne hydratation est essentielle pour prévenir le mal de montagne, maintenir l’énergie et protéger votre santé digestive.`

const contentEn = `Food hygiene during the Kilimanjaro ascent

Practical guide by a local guide for a safe and healthy trek

Climbing Kilimanjaro is a unique and demanding adventure. But beyond physical effort and altitude acclimatization, food hygiene plays a crucial role in ensuring a safe and enjoyable trek. Between rustic camps, extreme cold, wind and rain, and especially limited access to water, knowing how to manage your diet is essential to avoid food poisoning, stomach aches and fatigue. Good food hygiene helps maintain energy and good health throughout the ascent.


---

Meal preparation at high altitude

On Kilimanjaro, meals are prepared by experienced cooks who know the constraints of altitude and the needs of hikers. Even in simple conditions without modern infrastructure, strict food hygiene rules are followed to protect trekkers' health:

*Filtered or boiled drinking water:* Water is a potential vector of bacteria and parasites. On Kilimanjaro, all water used for cooking and drinking is filtered or boiled, ensuring that every meal is safe to consume.

*Cleaning of kitchen surfaces:* Even at altitude, meal preparation areas are regularly cleaned. This practice reduces the risk of cross-contamination and ensures that food remains healthy, even when handled by multiple team members.

*Safe food storage:* Perishable products are stored under appropriate conditions to limit bacterial growth. This allows for serving hot and nutritious meals, while minimizing the risk of digestive diseases, which are very common during mountain treks if hygiene is not maintained.

These simple but essential measures allow hikers to enjoy safe and healthy meals, maintain good energy levels and considerably reduce the risk of digestive disorders that could compromise the ascent.




*Practical advice for hikers
*
To complement the kitchen team's efforts, hikers are advised to:

Wash hands regularly with soap or hand sanitizer before each meal.

Avoid raw or undercooked foods, such as unpeeled vegetables, unwashed fruits or undercooked meats.

Favor hot meals, as cooking eliminates most bacteria.

Do not share plates or utensils to limit contamination risks.





Water and food logistics

Each camp has separate areas for cooking and eating safely. Potable water is always available for drinking and cooking, but it is recommended to filter or treat your personal water if necessary. Good hydration is essential to prevent altitude sickness, maintain energy and protect your digestive health.`

const FR_TITLES: Record<string,string> = {
  overview: 'Hygiène alimentaire lors de l’ascension du Kilimandjaro',
  preparation: 'Préparation des repas en haute altitude',
  water: 'L’eau et la logistique alimentaire',
  tips: 'Conseils pratiques pour les randonneurs'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Guide pratique par un guide local pour un trek sûr et sain

Gravir le Kilimandjaro est une aventure unique et exigeante. Mais au-delà de l’effort physique et de l’acclimatation à l’altitude, l’hygiène alimentaire joue un rôle crucial pour garantir un trek sûr et agréable. Entre les camps rustiques, le froid extrême, le vent et la pluie, et surtout l’accès limité à l’eau, savoir comment gérer votre alimentation est indispensable pour éviter les intoxications alimentaires, les maux de ventre et la fatigue. Une bonne hygiène alimentaire contribue à rester énergique et en bonne santé tout au long de l’ascension.
`,
  preparation: `Sur le Kilimandjaro, les repas sont préparés par des cuisiniers expérimentés qui connaissent les contraintes de l’altitude et les besoins des randonneurs. Même dans des conditions simples et sans infrastructures modernes, certaines règles strictes d’hygiène alimentaire sont respectées pour protéger la santé des trekkeurs :

*D'Eau potable filtrée ou bouillie* : L’eau est un vecteur potentiel de bactéries et parasites. Sur le Kilimandjaro, toute l’eau utilisée pour la cuisine et la boisson est filtrée ou bouillie, garantissant ainsi que chaque repas soit sûr à consommer.

*Nettoyage des surfaces de cuisine :* Même en altitude, les zones de préparation des repas sont régulièrement nettoyées. Cette pratique réduit le risque de contamination croisée et assure que les aliments restent sains, même lorsqu’ils sont manipulés par plusieurs membres de l’équipe.

*Stockage sûr des aliments* : Les produits périssables sont conservés dans des conditions appropriées pour limiter le développement de bactéries. Cela permet de servir des repas chauds et nutritifs, tout en minimisant le risque de maladies digestives, très fréquentes lors des treks en montagne si l’hygiène n’est pas respectée.

Ces mesures simples mais essentielles permettent aux randonneurs de profiter de repas sains et sécurisés, de maintenir un bon niveau d’énergie et de réduire considérablement les risques de troubles digestifs qui pourraient compromettre l’ascension.
`,
  water: `Chaque camp dispose de zones séparées pour cuisiner et manger en toute sécurité. L’eau potable est toujours disponible pour boire et cuisiner, mais il est recommandé de filtrer ou traiter votre eau personnelle si nécessaire. Une bonne hydratation est essentielle pour prévenir le mal de montagne, maintenir l’énergie et protéger votre santé digestive.
`,
  tips: `*Conseils pratiques pour les randonneurs
* 
Pour compléter les efforts des équipes de cuisine, il est conseillé aux randonneurs de :

Se laver les mains régulièrement avec du savon ou un gel hydroalcoolique avant chaque repas.

Éviter les aliments crus ou mal cuits, comme les légumes non pelés, les fruits non lavés ou les viandes insuffisamment cuites.

Privilégier les repas chauds, car la cuisson élimine la majorité des bactéries.

Ne pas partager assiettes ou couverts pour limiter les risques de contamination.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Food hygiene during the Kilimanjaro ascent',
  preparation: 'Meal preparation at high altitude',
  water: 'Water and food logistics',
  tips: 'Practical advice for hikers'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Practical guide by a local guide for a safe and healthy trek

Climbing Kilimanjaro is a unique and demanding adventure. But beyond physical effort and altitude acclimatization, food hygiene plays a crucial role in ensuring a safe and enjoyable trek. Between rustic camps, extreme cold, wind and rain, and especially limited access to water, knowing how to manage your diet is essential to avoid food poisoning, stomach aches and fatigue. Good food hygiene helps maintain energy and good health throughout the ascent.
`,
  preparation: `On Kilimanjaro, meals are prepared by experienced cooks who know the constraints of altitude and the needs of hikers. Even in simple conditions without modern infrastructure, strict food hygiene rules are followed to protect trekkers' health:

*Filtered or boiled drinking water:* Water is a potential vector of bacteria and parasites. On Kilimanjaro, all water used for cooking and drinking is filtered or boiled, ensuring that every meal is safe to consume.

*Cleaning of kitchen surfaces:* Even at altitude, meal preparation areas are regularly cleaned. This practice reduces the risk of cross-contamination and ensures that food remains healthy, even when handled by multiple team members.

*Safe food storage:* Perishable products are stored under appropriate conditions to limit bacterial growth. This allows for serving hot and nutritious meals, while minimizing the risk of digestive diseases, which are very common during mountain treks if hygiene is not maintained.

These simple but essential measures allow hikers to enjoy safe and healthy meals, maintain good energy levels and considerably reduce the risk of digestive disorders that could compromise the ascent.
`,
  water: `Each camp has separate areas for cooking and eating safely. Potable water is always available for drinking and cooking, but it is recommended to filter or treat your personal water if necessary. Good hydration is essential to prevent altitude sickness, maintain energy and protect your digestive health.
`,
  tips: `*Practical advice for hikers
*
To complement the kitchen team's efforts, hikers are advised to:

Wash hands regularly with soap or hand sanitizer before each meal.

Avoid raw or undercooked foods, such as unpeeled vegetables, unwashed fruits or undercooked meats.

Favor hot meals, as cooking eliminates most bacteria.

Do not share plates or utensils to limit contamination risks.`
}

const ids = ['overview', 'preparation', 'water', 'tips']

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

export default function HygieneAlimentairePage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.hygiene-alimentaire')
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
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Hygiène alimentaire lors de l’ascension du Kilimandjaro' : 'Food hygiene during the Kilimanjaro ascent'}</h1>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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