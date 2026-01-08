'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const contentFr = `Quels articles d’hygiène emporter pour un trek sur le Kilimandjaro ?

Conseils d’un guide local

Gravir le Kilimandjaro est une aventure incroyable, mais la montagne impose des conditions très différentes de celles de la vie quotidienne. L’hygiène y est un vrai défi : pas de douche, toilettes rudimentaires, températures basses et manque d’eau courante. Bien préparer son sac avec les bons articles d’hygiène est donc essentiel pour rester propre, en bonne santé et profiter pleinement du trek.



1. Articles pour l’hygiène corporelle

Même sans douche, il est possible de rester frais et propre avec quelques indispensables :

Lingettes biodégradables pour le corps, le visage et les mains

Savon ou gel antibactérien pour se laver les mains ou nettoyer le corps à l’eau limitée

Déodorant solide ou en spray (préférer les versions compactes et résistantes au froid)

Crème hydratante pour protéger la peau du froid et du vent

Baume à lèvres pour éviter les gerçures liées au vent et à l’altitude



2. Articles pour les soins des pieds

Les pieds sont mis à rude épreuve sur le Kilimandjaro. Leur entretien est crucial pour éviter les ampoules et les infections :

Chaussettes de randonnée propres et respirantes

Crème ou baume anti-frottement pour prévenir les ampoules


Petits pansements ou bandes adhésives pour les zones sensibles


3. Articles pour l’hygiène des toilettes

Les installations sur la montagne sont limitées, il est donc important de prévoir son matériel :

Papier toilette biodégradable

Sacs pour les déchets afin de respecter l’environnement

Gel hydroalcoolique pour désinfecter les mains après chaque utilisation

Lingettes humides pour un nettoyage rapide lorsque l’eau est rare



4. Autres indispensables

Serviette microfibre compacte : sèche rapidement et prend peu de place

Petite trousse de premiers soins pour les coupures, brûlures ou irritations

Brosse à dents et dentifrice en petit format


Ces articles permettent de maintenir une hygiène minimale et confortable, même dans les conditions les plus difficiles.`

const contentEn = `Which hygiene items to pack for a Kilimanjaro trek?

Local guide advice

Climbing Kilimanjaro is an incredible adventure, but the mountain imposes conditions very different from everyday life. Hygiene is a real challenge there: no shower, basic toilets, low temperatures and lack of running water. Preparing your backpack with the right hygiene products is therefore essential to stay clean, healthy and fully enjoy the trek.


1. Body hygiene items

Even without a shower, it's possible to stay fresh and clean with a few essentials:

Biodegradable wipes for body, face and hands

Soap or antibacterial gel to wash hands or clean the body with limited water

Solid or spray deodorant (prefer compact versions resistant to cold)

Moisturizing cream to protect skin from cold and wind

Lip balm to prevent chapping caused by wind and altitude


2. Foot care items

Feet are put to the test on Kilimanjaro. Their maintenance is crucial to avoid blisters and infections:

Clean, breathable hiking socks

Cream or anti-friction balm to prevent blisters

Small bandages or adhesive strips for sensitive areas


3. Toilet hygiene items

Facilities on the mountain are limited, so it's important to bring your own supplies:

Biodegradable toilet paper

Waste bags to respect the environment

Hand sanitizer to disinfect hands after each use

Wet wipes for quick cleaning when water is scarce


4. Other essentials

Compact microfiber towel: dries quickly and takes up little space

Small first aid kit for cuts, burns or irritations

Toothbrush and toothpaste in small format


These items allow you to maintain minimal and comfortable hygiene, even in the most difficult conditions.`

const FR_TITLES: Record<string,string> = {
  overview: 'Quels articles d’hygiène emporter pour un trek sur le Kilimandjaro ?',
  body: 'Articles pour l’hygiène corporelle',
  feet: 'Articles pour les soins des pieds',
  toilet: 'Articles pour l’hygiène des toilettes',
  other: 'Autres indispensables'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Conseils d’un guide local

Gravir le Kilimandjaro est une aventure incroyable, mais la montagne impose des conditions très différentes de celles de la vie quotidienne. L’hygiène y est un vrai défi : pas de douche, toilettes rudimentaires, températures basses et manque d’eau courante. Bien préparer son sac avec les bons articles d’hygiène est donc essentiel pour rester propre, en bonne santé et profiter pleinement du trek.
`,
  body: `Même sans douche, il est possible de rester frais et propre avec quelques indispensables :

Lingettes biodégradables pour le corps, le visage et les mains

Savon ou gel antibactérien pour se laver les mains ou nettoyer le corps à l’eau limitée

Déodorant solide ou en spray (préférer les versions compactes et résistantes au froid)

Crème hydratante pour protéger la peau du froid et du vent

Baume à lèvres pour éviter les gerçures liées au vent et à l’altitude
`,
  feet: `Les pieds sont mis à rude épreuve sur le Kilimandjaro. Leur entretien est crucial pour éviter les ampoules et les infections :

Chaussettes de randonnée propres et respirantes

Crème ou baume anti-frottement pour prévenir les ampoules


Petits pansements ou bandes adhésives pour les zones sensibles
`,
  toilet: `Les installations sur la montagne sont limitées, il est donc important de prévoir son matériel :

Papier toilette biodégradable

Sacs pour les déchets afin de respecter l’environnement

Gel hydroalcoolique pour désinfecter les mains après chaque utilisation

Lingettes humides pour un nettoyage rapide lorsque l’eau est rare
`,
  other: `Serviette microfibre compacte : sèche rapidement et prend peu de place

Petite trousse de premiers soins pour les coupures, brûlures ou irritations

Brosse à dents et dentifrice en petit format


Ces articles permettent de maintenir une hygiène minimale et confortable, même dans les conditions les plus difficiles.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Which hygiene items to pack for a Kilimanjaro trek?',
  body: 'Body hygiene items',
  feet: 'Foot care items',
  toilet: 'Toilet hygiene items',
  other: 'Other essentials'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Local guide advice

Climbing Kilimanjaro is an incredible adventure, but the mountain imposes conditions very different from everyday life. Hygiene is a real challenge there: no shower, basic toilets, low temperatures and lack of running water. Preparing your backpack with the right hygiene products is therefore essential to stay clean, healthy and fully enjoy the trek.
`,
  body: `Even without a shower, it's possible to stay fresh and clean with a few essentials:

Biodegradable wipes for body, face and hands

Soap or antibacterial gel to wash hands or clean the body with limited water

Solid or spray deodorant (prefer compact versions resistant to cold)

Moisturizing cream to protect skin from cold and wind

Lip balm to prevent chapping caused by wind and altitude
`,
  feet: `Feet are put to the test on Kilimanjaro. Their maintenance is crucial to avoid blisters and infections:

Clean, breathable hiking socks

Cream or anti-friction balm to prevent blisters

Small bandages or adhesive strips for sensitive areas
`,
  toilet: `Facilities on the mountain are limited, so it's important to bring your own supplies:

Biodegradable toilet paper

Waste bags to respect the environment

Hand sanitizer to disinfect hands after each use

Wet wipes for quick cleaning when water is scarce
`,
  other: `Compact microfiber towel: dries quickly and takes up little space

Small first aid kit for cuts, burns or irritations

Toothbrush and toothpaste in small format


These items allow you to maintain minimal and comfortable hygiene, even in the most difficult conditions.`
}

const ids = ['overview', 'body', 'feet', 'toilet', 'other']

// Function to add links to specific terms in text
function processTextWithLinks(text: string) {
  const locale = 'fr'; // In actual implementation, this would come from context
  
  // Replace toilet-related terms with links
  let processedText = text.replace(/\btoilettes rudimentaires\b/g, `<Link href="/${locale}/travel-blogs/toilettes-privees-necessaires" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">toilettes rudimentaires</Link>`);
  processedText = processedText.replace(/\btoilettes publiques\b/g, `<Link href="/${locale}/travel-blogs/toilettes-privees-necessaires" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">toilettes publiques</Link>`);
  processedText = processedText.replace(/\btoilettes portables privées\b/g, `<Link href="/${locale}/travel-blogs/toilettes-privees-necessaires" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">toilettes portables privées</Link>`);
  processedText = processedText.replace(/\btoilettes limitées\b/g, `<Link href="/${locale}/travel-blogs/toilettes-privees-necessaires" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">toilettes limitées</Link>`);
  processedText = processedText.replace(/\bhygiène des toilettes\b/g, `<Link href="/${locale}/travel-blogs/toilettes-privees-necessaires" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">hygiène des toilettes</Link>`);
  
  return processedText;
}

// Function to parse string links to JSX elements
function parseLinksToJSX(text: string) {
  // Split text by Link tags
  const parts = text.split(/(<Link\s+[^>]*href\s*=\s*["'][^"']*["'][^>]*className\s*=\s*["'][^"']*["'][^>]*>[^<]*<\/Link>)/g);
  
  return parts.map((part, index) => {
    // Check if this part is a Link element
    const linkMatch = part.match(/<Link\s+[^>]*href\s*=\s*["']([^"']*)["'][^>]*className\s*=\s*["']([^"']*)["'][^>]*>([^<]*)<\/Link>/);
    
    if (linkMatch) {
      const href = linkMatch[1];
      const className = linkMatch[2];
      const children = linkMatch[3];
      
      return (
        <Link 
          key={`link-${index}`} 
          href={href} 
          className={className}
        >
          {children}
        </Link>
      );
    } else {
      // Return plain text
      return part;
    }
  });
}

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
        // Process text to add links for specific terms
        const processedText = processTextWithLinks(text);
        // Parse the processed text to convert string links to JSX elements
        nodes.push(<p key={keyIndex++} className="mb-4">{parseLinksToJSX(processedText)}</p>)
      }
    } else {
      i++
    }
  }

  return <div>{nodes}</div>
}

export default function ArticlesHygieneEmporterPage() {
  const locale = useLocale()
  const t = useTranslations('BlogPosts.articles-hygiene-emporter')
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
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Quels articles d’hygiène emporter pour un trek sur le Kilimandjaro ?' : 'Which hygiene items to pack for a Kilimanjaro trek?'}</h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl">{locale === 'fr' ? 'Conseils d’un guide local pour rester propre sur le trek.' : 'Local guide advice to stay clean on trek.'}</p>
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