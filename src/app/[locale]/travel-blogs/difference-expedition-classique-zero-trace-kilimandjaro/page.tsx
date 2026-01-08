'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Différence entre une expédition classique et une expédition Zéro Trace sur le Kilimandjaro',
  classic: 'Qu\'est-ce qu\'une expédition classique sur le Kilimandjaro ?',
  zerotrace: 'Qu\'est-ce qu\'une expédition Zéro Trace sur le Kilimandjaro ?',
  vision: 'Expédition classique ou expédition Zéro Trace : une différence de vision'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Gravir le Mont Kilimandjaro est une aventure exceptionnelle, mais toutes les expéditions ne se ressemblent pas. Derrière des itinéraires parfois identiques, les pratiques peuvent être très différentes.

La différence entre une expédition classique et une expédition Zéro Trace réside dans la manière dont la montagne, les porteurs et l'environnement sont respectés.

Comprendre cette distinction permet aux voyageurs de faire un choix responsable, en accord avec leurs valeurs et avec la préservation du Kilimandjaro.`,
  
  classic: `Une expédition classique sur le Kilimandjaro a pour objectif principal d'atteindre le sommet, l'Uhuru Peak. L'organisation est généralement conçue pour respecter les règles de base imposées par le parc national, mais sans aller beaucoup plus loin que ce qui est strictement obligatoire.

Dans ce type d'expédition, l'accent est souvent mis sur la logistique et le résultat final : le sommet. Les questions environnementales et humaines sont parfois traitées comme secondaires. La gestion des déchets, par exemple, peut se limiter à ce qui est visible ou immédiatement gênant, sans véritable réflexion sur l'impact à long terme. En altitude, certains déchets peuvent être négligés, notamment ceux considérés à tort comme biodégradables.

Le poids des sacs n'est pas toujours optimisé. Lorsque l'équipement est mal préparé ou excessif, les porteurs peuvent se retrouver avec des charges plus lourdes que nécessaire. De même, l'impact sur les sentiers et les camps n'est pas toujours anticipé : élargissement des chemins, zones de campement dégradées, passages répétés hors sentier.

Le respect des porteurs dépend largement de l'éthique de l'agence et du comportement des voyageurs. Certaines expéditions classiques sont bien encadrées, mais d'autres peuvent négliger les conditions de travail, la reconnaissance ou le confort de l'équipe locale.

Il est important de préciser que toutes les expéditions classiques ne sont pas irresponsables. Cependant, leur approche reste souvent orientée vers la performance et le résultat, avec moins d'attention portée à l'impact global sur la montagne et les personnes qui y travaillent.`,
  
  zerotrace: `Une expédition Zéro Trace, aussi appelée Leave No Trace, repose sur une philosophie claire et exigeante :

👉 ne laisser aucun impact durable de son passage sur la montagne.

Cette approche va bien au-delà de la simple réussite du sommet. Le Kilimandjaro n'est pas considéré comme un objectif à conquérir, mais comme un héritage naturel fragile à préserver. Chaque décision prise pendant l'ascension est guidée par cette responsabilité.

Une expédition Zéro Trace intègre la protection de l'environnement à chaque étape : réduction des déchets à la source, redescente systématique de tout ce qui est apporté, respect strict des sentiers balisés et des zones de campement. Rien n'est laissé au hasard, car même un petit geste répété des milliers de fois peut dégrader durablement la montagne.

La préservation des sentiers et des camps est également essentielle. Aucune modification du terrain n'est acceptée, aucun raccourci n'est créé, et les camps sont laissés propres et intacts après le passage du groupe.

Le respect des porteurs et de l'équipe locale est une priorité absolue. Les charges sont limitées et contrôlées, les équipements sont adaptés, le rythme est humain et la dignité de chaque membre de l'équipe est respectée. Le Zéro Trace inclut pleinement la dimension humaine du trekking.

Enfin, une expédition Zéro Trace joue un rôle éducatif. Les voyageurs sont informés, sensibilisés et encouragés à adopter un comportement responsable. Ils deviennent des acteurs conscients de la protection du Kilimandjaro, et non de simples participants passifs.`,
  
  vision: `La différence entre une expédition classique et une expédition Zéro Trace ne se limite pas à l'organisation du trek. Elle reflète une vision différente de la montagne.

L'expédition classique cherche avant tout à atteindre le sommet.

L'expédition Zéro Trace cherche à atteindre le sommet sans laisser de trace, ni sur l'environnement, ni sur les personnes qui y travaillent.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Difference Between a Classic Expedition and a Zero Trace Expedition on Kilimanjaro',
  classic: 'What is a Classic Expedition on Kilimanjaro?',
  zerotrace: 'What is a Zero Trace Expedition on Kilimanjaro?',
  vision: 'Classic Expedition or Zero Trace Expedition: A Difference in Vision'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Climbing Mount Kilimanjaro is an exceptional adventure, but not all expeditions are alike. Behind sometimes identical routes, practices can be very different.

The difference between a classic expedition and a Zero Trace expedition lies in how the mountain, porters, and environment are respected.

Understanding this distinction allows travelers to make a responsible choice, in line with their values and with the preservation of Kilimanjaro.`,
  
  classic: `A classic expedition on Kilimanjaro has the primary objective of reaching the summit, Uhuru Peak. Organization is generally designed to respect the basic rules imposed by the national park, but without going much further than what is strictly mandatory.

In this type of expedition, emphasis is often placed on logistics and the final result: the summit. Environmental and human questions are sometimes treated as secondary. Waste management, for example, may be limited to what is visible or immediately bothersome, without real reflection on long-term impact. At altitude, some waste may be neglected, particularly that wrongly considered biodegradable.

Bag weight is not always optimized. When equipment is poorly prepared or excessive, porters may end up with heavier loads than necessary. Similarly, impact on trails and camps is not always anticipated: widening paths, degraded camping areas, repeated off-trail passages.

Respect for porters largely depends on the ethics of the agency and the behavior of travelers. Some classic expeditions are well organized, but others may neglect working conditions, recognition, or comfort of the local team.

It's important to note that not all classic expeditions are irresponsible. However, their approach often remains performance and result oriented, with less attention paid to overall impact on the mountain and the people who work there.`,
  
  zerotrace: `A Zero Trace expedition, also called Leave No Trace, is based on a clear and demanding philosophy:

👉 leave no lasting impact of your passage on the mountain.

This approach goes well beyond simply reaching the summit. Kilimanjaro is not considered an objective to conquer, but a fragile natural heritage to preserve. Every decision made during the ascent is guided by this responsibility.

A Zero Trace expedition integrates environmental protection at every stage: reducing waste at the source, systematically bringing down everything that is brought up, strictly respecting marked trails and camping areas. Nothing is left to chance, as even a small gesture repeated thousands of times can permanently degrade the mountain.

Preserving trails and camps is also essential. No terrain modification is accepted, no shortcuts are created, and camps are left clean and intact after the group passes through.

Respect for porters and the local team is an absolute priority. Loads are limited and controlled, equipment is adapted, the pace is human, and the dignity of each team member is respected. Zero Trace fully includes the human dimension of trekking.

Finally, a Zero Trace expedition plays an educational role. Travelers are informed, made aware, and encouraged to adopt responsible behavior. They become conscious actors in protecting Kilimanjaro, not passive participants.`,
  
  vision: `The difference between a classic expedition and a Zero Trace expedition is not limited to trek organization. It reflects a different vision of the mountain.

The classic expedition seeks above all to reach the summit.

The Zero Trace expedition seeks to reach the summit without leaving a trace, neither on the environment nor on the people who work there.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function DifferenceExpeditionClassiqueZeroTraceKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'classic', 
      title: isFrench ? FR_TITLES.classic : EN_TITLES.classic,
      content: isFrench ? FR_SECTIONS.classic : EN_SECTIONS.classic
    },
    { 
      id: 'zerotrace', 
      title: isFrench ? FR_TITLES.zerotrace : EN_TITLES.zerotrace,
      content: isFrench ? FR_SECTIONS.zerotrace : EN_SECTIONS.zerotrace
    },
    { 
      id: 'vision', 
      title: isFrench ? FR_TITLES.vision : EN_TITLES.vision,
      content: isFrench ? FR_SECTIONS.vision : EN_SECTIONS.vision
    }
  ]

  function renderContent(content: string) {
    // First, let's replace 'Zéro Trace' with a special marker that we'll convert to links
    let markedContent = content.replace(/Zéro Trace/g, '###ZERO_TRACE_LINK###');
    // Add marker for 'poids des sacs' to link to the porteurs poids legal page
    markedContent = markedContent.replace(/Le poids des sacs/g, '###POIDS_SACS_LINK###');
    
    const lines = markedContent.split(/\r?\n/)
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
        // Process each line in blockLines to handle both zero trace and poids sacs markers
        const processedBlockLines = blockLines.map((line, idx) => {
          const processedZeroTrace = processZeroTraceLinks(line, `block-${keyIndex}-${idx}-`);
          return processPoidsSacsLinks(processedZeroTrace, `block-${keyIndex}-${idx}-`);
        }).reduce((acc, curr) => [...acc, ...curr], []);
        
        nodes.push(
          <blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-sm text-black mb-4">
            {processedBlockLines}
          </blockquote>
        )
      } else if (lines[i].startsWith('# ')) {
        const heading = lines[i].substring(2)
        i++
        // Process heading to handle both zero trace and poids sacs markers
        const processedZeroTrace = processZeroTraceLinks(heading, `heading-${keyIndex}-`);
        const processedHeading = processPoidsSacsLinks(processedZeroTrace, `heading-${keyIndex}-`);
        nodes.push(
          <h3 key={`h3-${keyIndex++}`} className="text-xl font-semibold mt-6 mb-3 text-black">{processedHeading}</h3>
        )
      } else if (lines[i].trim() === '') {
        i++
      } else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('# ')) {
          paragraphLines.push(lines[i])
          i++
        }
        // Process each paragraph line to handle both zero trace and poids sacs markers
        const processedParagraphLines = paragraphLines.map((line, idx) => {
          const processedZeroTrace = processZeroTraceLinks(line, `para-${keyIndex}-${idx}-`);
          return processPoidsSacsLinks(processedZeroTrace, `para-${keyIndex}-${idx}-`);
        }).reduce((acc, curr) => [...acc, ...curr], []);
        
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4">
            {processedParagraphLines}
          </p>
        )
      }
    }

    return nodes
  }
  
  // Helper function to process zero trace links in text
  function processZeroTraceLinks(text: string, keyPrefix: string = '') {
    const parts = text.split('###ZERO_TRACE_LINK###');
    
    if (parts.length <= 1) {
      return [text];
    }
    
    const result = [];
    
    for (let j = 0; j < parts.length; j++) {
      if (parts[j].length > 0) {
        result.push(parts[j]);
      }
      if (j < parts.length - 1) {
        // Add the link for 'Zéro Trace'
        result.push(
          <Link 
            key={`${keyPrefix}link-${j}`}
            href="https://lnt.org/" 
            className="text-[#00A896] hover:text-[#008576] font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zéro Trace
          </Link>
        );
      }
    }
    
    return result;
  }
  
  // Helper function to process poids des sacs links in text
  function processPoidsSacsLinks(text: string | (string | JSX.Element)[], keyPrefix: string = ''): (string | JSX.Element)[] {
    if (typeof text === 'string') {
      const parts = text.split('###POIDS_SACS_LINK###');
      
      if (parts.length <= 1) {
        return [text];
      }
      
      const result = [];
      
      for (let j = 0; j < parts.length; j++) {
        if (parts[j].length > 0) {
          result.push(parts[j]);
        }
        if (j < parts.length - 1) {
          // Add the link for 'Le poids des sacs'
          result.push(
            <Link 
              key={`${keyPrefix}link-${j}`}
              href={`/${locale}/travel-blogs/porteurs-du-kilimandjaro/poids-legal`} 
              className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
            >
              Le poids des sacs
            </Link>
          );
        }
      }
      
      return result;
    } else {
      // If it's already an array, process each element
      const result: (string | JSX.Element)[] = [];
      for (const element of text) {
        if (typeof element === 'string') {
          const converted = processPoidsSacsLinks(element, keyPrefix);
          result.push(...converted);
        } else {
          result.push(element);
        }
      }
      return result;
    }
  }

  // Helper function to process zero trace links in titles
  function processZeroTraceTitleLinks(title: string, keyPrefix: string = '') {
    const parts = title.split('Zéro Trace');
    
    if (parts.length <= 1) {
      return [title];
    }
    
    const result = [];
    
    for (let j = 0; j < parts.length; j++) {
      if (parts[j].length > 0) {
        result.push(parts[j]);
      }
      if (j < parts.length - 1) {
        // Add the link for 'Zéro Trace'
        result.push(
          <Link 
            key={`${keyPrefix}title-link-${j}`}
            href="https://lnt.org/" 
            className="text-[#00A896] hover:text-[#008576] font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zéro Trace
          </Link>
        );
      }
    }
    
    return result;
  }
  
  // Helper function to process poids des sacs links in titles
  function processPoidsSacsTitleLinks(title: string | (string | JSX.Element)[], keyPrefix: string = ''): (string | JSX.Element)[] {
    if (typeof title === 'string') {
      const parts = title.split('Le poids des sacs');
      
      if (parts.length <= 1) {
        return [title];
      }
      
      const result = [];
      
      for (let j = 0; j < parts.length; j++) {
        if (parts[j].length > 0) {
          result.push(parts[j]);
        }
        if (j < parts.length - 1) {
          // Add the link for 'Le poids des sacs'
          result.push(
            <Link 
              key={`${keyPrefix}title-link-${j}`}
              href={`/${locale}/travel-blogs/porteurs-du-kilimandjaro/poids-legal`} 
              className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
            >
              Le poids des sacs
            </Link>
          );
        }
      }
      
      return result;
    } else {
      // If it's already an array, process each element
      const result: (string | JSX.Element)[] = [];
      for (const element of title) {
        if (typeof element === 'string') {
          const converted = processPoidsSacsTitleLinks(element, keyPrefix);
          result.push(...converted);
        } else {
          result.push(element);
        }
      }
      return result;
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/zero-expedition hero.jpg')" }}>
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
            readingTime="8 min de lecture"
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
                  {isFrench ? processPoidsSacsTitleLinks(processZeroTraceTitleLinks(FR_TITLES.overview)) : processPoidsSacsTitleLinks(processZeroTraceTitleLinks(EN_TITLES.overview as string))}
                </h1>
                <p className="text-base md:text-lg text-black max-w-3xl">
                  {isFrench ? 'Comprendre les différences entre une expédition classique et une expédition Zéro Trace.' : 'Understanding the differences between a classic expedition and a Zero Trace expedition.'}
                </p>
              </div>

              <article className="bg-gray-50 rounded-lg shadow-md p-6">
                <div>
                  {sections.map(s => (
                    <article key={s.id} id={s.id} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-2">{isFrench ? processPoidsSacsTitleLinks(processZeroTraceTitleLinks(s.title)) : processPoidsSacsTitleLinks(processZeroTraceTitleLinks(s.title as string))}</h2>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/zero-expedition hero.jpg')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/zero-expedition hero.jpg')" }}></div>
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
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/zero-expedition hero.jpg')" }}></div>
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