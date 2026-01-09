'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Comment les voyageurs peuvent contribuer à une expédition Zéro Trace sur le Kilimandjaro',
  preparation: 'Préparer son équipement avec soin avant l’ascension',
  trails: 'Respecter les sentiers et la végétation fragile',
  waste: 'Gérer ses déchets de manière responsable',
  water: 'Protéger l’eau et les sols de la montagne',
  porters: 'Respecter les porteurs et l’équipe locale',
  mindset: 'Adopter une attitude consciente et responsable',
  guideTip: 'Conseil du guide'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Gravir le Mont Kilimandjaro est une aventure unique, mais elle implique une grande responsabilité. Le concept Zéro Trace, ou Leave No Trace, ne se limite pas à la protection de la nature : il inclut aussi le respect des porteurs, guides et communautés locales. Chaque randonneur peut agir de manière concrète pour réduire son impact et garantir que la montagne reste intacte pour les générations futures.

En tant que ${'###GUIDE_LOCAL_LINK###'}, voici les principales façons dont les voyageurs peuvent contribuer activement à une expédition Zéro Trace.`,
  
  preparation: `La contribution d'un voyageur à une expédition Zéro Trace commence bien avant d'arriver au pied du Kilimandjaro. Une préparation intelligente de l'équipement permet de réduire l'impact environnemental tout en facilitant le travail des porteurs.

En limitant ses affaires au strict nécessaire, le randonneur évite les charges inutiles. Chaque kilo superflu augmente la fatigue des porteurs et multiplie les risques de blessure. Une expédition responsable privilégie donc la légèreté, la fonctionnalité et l'utilité réelle de chaque objet.

Choisir des équipements réutilisables et durables, comme des gourdes filtrantes, des sacs de rangement solides ou des ustensiles personnels, permet également de réduire considérablement la quantité de déchets générés pendant l'ascension. À l'inverse, les emballages inutiles ou non recyclables deviennent rapidement un problème en altitude, où leur gestion est complexe.

Une bonne préparation profite à tout le monde : moins de déchets, moins de fatigue pour les porteurs et une ascension plus confortable pour le voyageur.`,
  
  trails: `Le Kilimandjaro traverse plusieurs zones climatiques, chacune avec un équilibre naturel très délicat. La végétation en altitude pousse lentement, et un simple piétinement hors sentier peut mettre des années à disparaître.

Rester sur les sentiers balisés n'est pas une contrainte arbitraire. C'est une mesure essentielle pour limiter l'érosion des sols, protéger les plantes endémiques et préserver la beauté naturelle de la montagne. Créer de nouveaux passages ou raccourcis fragilise le terrain et élargit progressivement les zones dégradées.

Éviter de cueillir des plantes ou de déplacer des pierres est tout aussi important. Ces éléments font partie intégrante de l'écosystème et jouent un rôle dans la stabilité des sols et la vie animale. Le respect des sentiers permet également aux porteurs de circuler plus facilement et en toute sécurité.`,
  
  waste: `L'un des principes fondamentaux du Zéro Trace sur le Kilimandjaro est simple : tout ce qui monte doit redescendre. En altitude, les déchets ne disparaissent pas naturellement comme en plaine. Le froid, le vent et le manque de micro-organismes ralentissent fortement la décomposition.

Les voyageurs doivent donc gérer avec attention tous leurs déchets, qu'ils soient plastiques, papiers ou même biodégradables. Les restes de nourriture, par exemple, attirent les animaux, modifient leur comportement et perturbent l'équilibre naturel.

Une gestion responsable des déchets permet de garder les camps propres, de préserver les sources d'eau et d'éviter que les porteurs aient à nettoyer ce que d'autres ont laissé derrière eux.`,
  
  water: `L'eau est une ressource vitale sur le Kilimandjaro, non seulement pour les randonneurs, mais aussi pour la faune et les communautés locales en aval. Une pollution, même minime, peut avoir des conséquences importantes.

Se laver directement dans les rivières ou utiliser des savons près des sources contamine l'eau et les sols. Les produits chimiques, même en petite quantité, se propagent rapidement dans un environnement aussi sensible.

En respectant ces règles simples, les voyageurs contribuent à préserver une eau propre et saine, essentielle à la vie sur et autour de la montagne.`,
  
  porters: `Le Zéro Trace inclut pleinement le respect humain. Les porteurs sont les piliers de chaque expédition et leur bien-être dépend en partie du comportement des voyageurs.

Éviter de surcharger les porteurs, respecter leur rythme et leurs temps de repos, et ne pas manipuler leur matériel sans autorisation sont des gestes simples mais essentiels. Reconnaître leur travail par une attitude respectueuse renforce la cohésion de l'équipe et améliore l'expérience de tous.

Une expédition harmonieuse est toujours le résultat d'un respect mutuel entre voyageurs, guides et porteurs.`,
  
  mindset: `Au-delà des règles pratiques, le Zéro Trace est avant tout un état d'esprit. Être attentif aux consignes du ${'###GUIDE_LOCAL_LINK###'}, comprendre les contraintes de l'altitude et accepter certaines limites font partie de l'expérience.

Chaque action compte : un déchet ramassé, un sentier respecté, une consigne suivie. Cette conscience transforme le voyageur en acteur actif de la préservation du Kilimandjaro, et non en simple consommateur d'aventure.`,
  
  guideTip: `Pour contribuer pleinement à une expédition Zéro Trace sur le Kilimandjaro, préparez votre sac intelligemment, respectez les règles de la montagne, écoutez votre guide et prenez soin des porteurs. Même un petit geste, comme ramasser un déchet ou exprimer de la gratitude, a un impact réel et durable.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'How Travelers Can Contribute to a Zero Trace Expedition on Kilimanjaro',
  preparation: 'Carefully Preparing Equipment Before the Ascent',
  trails: 'Respecting Trails and Fragile Vegetation',
  waste: 'Managing Waste Responsibly',
  water: 'Protecting Mountain Water and Soil',
  porters: 'Respecting Porters and the Local Team',
  mindset: 'Adopting a Conscious and Responsible Attitude',
  guideTip: 'Guide Tip'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Climbing Mount Kilimanjaro is a unique adventure, but it involves great responsibility. The Zero Trace concept, or Leave No Trace, goes beyond protecting nature: it also includes respecting porters, guides, and local communities. Every hiker can take concrete action to reduce their impact and ensure the mountain remains intact for future generations.

As a ${'###GUIDE_LOCAL_LINK###'}, here are the main ways travelers can actively contribute to a Zero Trace expedition.`,
  
  preparation: `A traveler's contribution to a Zero Trace expedition begins well before arriving at the foot of Kilimanjaro. Intelligent equipment preparation helps reduce environmental impact while facilitating porters' work.

By limiting belongings to the bare essentials, hikers avoid unnecessary loads. Every extra kilo increases porter fatigue and multiplies injury risks. A responsible expedition therefore favors lightness, functionality, and real utility of each item.

Choosing reusable and durable equipment, such as filtered water bottles, sturdy storage bags, or personal utensils, also significantly reduces waste generated during the ascent. Conversely, unnecessary or non-recyclable packaging quickly becomes a problem at altitude, where management is complex.

Good preparation benefits everyone: less waste, less fatigue for porters, and a more comfortable climb for the traveler.`,
  
  trails: `Kilimanjaro traverses several climate zones, each with a very delicate natural balance. Alpine vegetation grows slowly, and simple off-trail trampling can take years to disappear.

Staying on marked trails is not an arbitrary constraint. It's an essential measure to limit soil erosion, protect endemic plants, and preserve the mountain's natural beauty. Creating new passages or shortcuts weakens the terrain and progressively expands degraded areas.

Avoiding picking plants or moving stones is equally important. These elements are integral parts of the ecosystem and play a role in soil stability and animal life. Trail respect also allows porters to move more easily and safely.`,
  
  waste: `One of the fundamental principles of Zero Trace on Kilimanjaro is simple: everything that goes up must come down. At altitude, waste doesn't disappear naturally like on the plains. Cold, wind, and lack of microorganisms greatly slow decomposition.

Travelers must therefore carefully manage all their waste, whether plastic, paper, or even biodegradable. Food scraps, for example, attract animals, alter their behavior, and disrupt the natural balance.

Responsible waste management keeps camps clean, preserves water sources, and prevents porters from having to clean up what others leave behind.`,
  
  water: `Water is a vital resource on Kilimanjaro, not only for hikers but also for wildlife and local communities downstream. Even minor pollution can have significant consequences.

Washing directly in rivers or using soap near water sources contaminates water and soil. Chemical products, even in small quantities, spread rapidly in such a sensitive environment.

By respecting these simple rules, travelers contribute to preserving clean, healthy water essential to life on and around the mountain.`,
  
  porters: `Zero Trace fully includes human respect. Porters are the pillars of every expedition, and their wellbeing partly depends on traveler behavior.

Avoiding overloading porters, respecting their pace and rest times, and not handling their equipment without authorization are simple but essential gestures. Recognizing their work through respectful attitudes strengthens team cohesion and improves everyone's experience.

A harmonious expedition is always the result of mutual respect between travelers, guides, and porters.`,
  
  mindset: `Beyond practical rules, Zero Trace is above all a mindset. Being attentive to ${'###GUIDE_LOCAL_LINK###'} instructions, understanding altitude constraints, and accepting certain limitations are part of the experience.

Every action counts: picking up litter, respecting trails, following instructions. This awareness transforms the traveler into an active actor in preserving Kilimanjaro, rather than a simple adventure consumer.`,
  
  guideTip: `To fully contribute to a Zero Trace expedition on Kilimanjaro, prepare your pack intelligently, respect mountain rules, listen to your guide, and care for porters. Even a small gesture, like picking up litter or expressing gratitude, has a real and lasting impact.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function ContribuerExpeditionZeroTraceKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'preparation', 
      title: isFrench ? FR_TITLES.preparation : EN_TITLES.preparation,
      content: isFrench ? FR_SECTIONS.preparation : EN_SECTIONS.preparation
    },
    { 
      id: 'trails', 
      title: isFrench ? FR_TITLES.trails : EN_TITLES.trails,
      content: isFrench ? FR_SECTIONS.trails : EN_SECTIONS.trails
    },
    { 
      id: 'waste', 
      title: isFrench ? FR_TITLES.waste : EN_TITLES.waste,
      content: isFrench ? FR_SECTIONS.waste : EN_SECTIONS.waste
    },
    { 
      id: 'water', 
      title: isFrench ? FR_TITLES.water : EN_TITLES.water,
      content: isFrench ? FR_SECTIONS.water : EN_SECTIONS.water
    },
    { 
      id: 'porters', 
      title: isFrench ? FR_TITLES.porters : EN_TITLES.porters,
      content: isFrench ? FR_SECTIONS.porters : EN_SECTIONS.porters
    },
    { 
      id: 'mindset', 
      title: isFrench ? FR_TITLES.mindset : EN_TITLES.mindset,
      content: isFrench ? FR_SECTIONS.mindset : EN_SECTIONS.mindset
    },
    { 
      id: 'guideTip', 
      title: isFrench ? FR_TITLES.guideTip : EN_TITLES.guideTip,
      content: isFrench ? FR_SECTIONS.guideTip : EN_SECTIONS.guideTip
    }
  ]

  // Helper function to process KPAP links in text
  function processKpapLinks(text: string, keyPrefix: string = ''): string {
    const parts = text.split('###KPAP_LINK###');
    
    if (parts.length <= 1) {
      return text; // Return the original string if no KPAP found
    }
    
    // Join the parts with a temporary placeholder that won't conflict with Zero Trace markers
    let result = '';
    for (let j = 0; j < parts.length; j++) {
      result += parts[j];
      if (j < parts.length - 1) {
        // Add a temporary marker that we'll replace later with the actual link
        result += `###KPAP_TEMP_LINK_${keyPrefix}${j}###`;
      }
    }
    
    return result;
  }

  // Helper function to convert temporary KPAP markers to actual links
  function convertKpapTempMarkersToLinks(text: string | (string | JSX.Element)[]): (string | JSX.Element)[] {
    if (typeof text === 'string') {
      // If it's a string, convert any temporary markers to links
      const parts = text.split(/(###KPAP_TEMP_LINK_[^#]+###)/);
      const result: (string | JSX.Element)[] = [];
      
      for (const part of parts) {
        if (part.startsWith('###KPAP_TEMP_LINK_') && part.endsWith('###')) {
          // Extract the key prefix from the temporary marker
          const keyMatch = part.match(/###KPAP_TEMP_LINK_(.+?)###/);
          const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
          
          result.push(
            <Link 
              key={`kpap-${keyPrefix}`} 
              href="https://kiliporters.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 font-semibold"
            >
              KPAP
            </Link>
          );
        } else {
          result.push(part);
        }
      }
      return result;
    } else {
      // If it's already an array, process each element
      const result: (string | JSX.Element)[] = [];
      for (const element of text) {
        if (typeof element === 'string') {
          const converted = convertKpapTempMarkersToLinks(element);
          result.push(...converted);
        } else {
          result.push(element);
        }
      }
      return result;
    }
  }

  // Helper function to process guide local links in text
  function processGuideLocalLinks(text: string, keyPrefix: string = ''): string {
    // Process 'guide local' first
    let result = text;
    const guideLocalParts = result.split('###GUIDE_LOCAL_LINK###');
    
    if (guideLocalParts.length > 1) {
      result = '';
      for (let j = 0; j < guideLocalParts.length; j++) {
        result += guideLocalParts[j];
        if (j < guideLocalParts.length - 1) {
          result += `###GUIDE_LOCAL_TEMP_LINK_${keyPrefix}${j}###`;
        }
      }
    }
    
    // Process 'local guide' next
    const localGuideParts = result.split('###LOCAL_GUIDE_LINK###');
    
    if (localGuideParts.length > 1) {
      result = '';
      for (let j = 0; j < localGuideParts.length; j++) {
        result += localGuideParts[j];
        if (j < localGuideParts.length - 1) {
          result += `###LOCAL_GUIDE_TEMP_LINK_${keyPrefix}${j}###`;
        }
      }
    }
    
    return result;
  }

  // Helper function to convert temporary guide local markers to actual links
  function convertGuideLocalTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
    if (typeof text === 'string') {
      // First process 'guide local' markers
      const _processedText = text;
      const guideLocalParts = _processedText.split(/(###GUIDE_LOCAL_TEMP_LINK_[^#]+###)/);
      const guideLocalResult: (string | JSX.Element)[] = [];
      
      for (const part of guideLocalParts) {
        if (part.startsWith('###GUIDE_LOCAL_TEMP_LINK_') && part.endsWith('###')) {
          // Extract the key prefix from the temporary marker
          const keyMatch = part.match(/###GUIDE_LOCAL_TEMP_LINK_(.+?)###/);
          const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
          
          guideLocalResult.push(
            <Link 
              key={`guide-local-${keyPrefix}`} 
              href={`/${locale}/about#heritage`} 
              className="text-[#00A896] hover:text-[#008576] font-medium"
            >
              guide local
            </Link>
          );
        } else {
          guideLocalResult.push(part);
        }
      }
      
      // Now process 'local guide' markers in the result
      const finalResult: (string | JSX.Element)[] = [];
      for (const element of guideLocalResult) {
        if (typeof element === 'string') {
          const localGuideParts = element.split(/(###LOCAL_GUIDE_TEMP_LINK_[^#]+###)/);
          
          for (const localPart of localGuideParts) {
            if (localPart.startsWith('###LOCAL_GUIDE_TEMP_LINK_') && localPart.endsWith('###')) {
              // Extract the key prefix from the temporary marker
              const keyMatch = localPart.match(/###LOCAL_GUIDE_TEMP_LINK_(.+?)###/);
              const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
              
              finalResult.push(
                <Link 
                  key={`local-guide-${keyPrefix}`} 
                  href={`/${locale}/about#heritage`} 
                  className="text-[#00A896] hover:text-[#008576] font-medium"
                >
                  local guide
                </Link>
              );
            } else {
              finalResult.push(localPart);
            }
          }
        } else {
          finalResult.push(element);
        }
      }
      
      return finalResult;
    } else {
      // If it's already an array, process each element
      const result: (string | JSX.Element)[] = [];
      for (const element of text) {
        if (typeof element === 'string') {
          const converted = convertGuideLocalTempMarkersToLinks(element, locale);
          result.push(...converted);
        } else {
          result.push(element);
        }
      }
      return result;
    }
  }

  function processZeroTraceLinks(text: string, keyPrefix: string = '') {
    const parts = text.split('###ZERO_TRACE_LINK###');
    
    if (parts.length <= 1) {
      return [text];
    }
    
    const result = [];
    
    for (let j = 0; j < parts.length; j++) {
      if (j > 0) {
        // Add the link element between parts
        result.push(
          <Link 
            key={`${keyPrefix}link-${j}`} 
            href="https://lnt.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00A896] hover:text-[#008576] font-medium"
          >
            Zéro Trace
          </Link>
        );
      }
      result.push(parts[j]);
    }
    
    return result;
  }

  function renderContent(content: string) {
    // First, let's replace 'guide local' and 'local guide' with special markers that we'll convert to links
    let markedContent = content.replace(/guide local/gi, '###GUIDE_LOCAL_LINK###');
    markedContent = markedContent.replace(/local guide/gi, '###LOCAL_GUIDE_LINK###');
    // Then, replace 'KPAP' with a special marker that we'll convert to links
    markedContent = markedContent.replace(/KPAP/g, '###KPAP_LINK###');
    // Then, replace 'Zéro Trace' with a special marker that we'll convert to links
    markedContent = markedContent.replace(/Zéro Trace/g, '###ZERO_TRACE_LINK###');
    
    const lines = markedContent.split(/\r?\n/)
    const nodes: JSX.Element[] = []
    let i = 0
    let keyIndex = 0

    while (i < lines.length) {
      if (lines[i].startsWith('>')) {
        const blockLines: string[] = []
        while (i < lines.length && lines[i].startsWith('>')) {
          blockLines.push(lines[i].replace(/^>\s?/, ''))
          i++
        }
        // Process each line in blockLines to handle the special markers
        const processedBlockLines = blockLines.map((line, idx) => 
          convertGuideLocalTempMarkersToLinks(
            convertKpapTempMarkersToLinks(
              processZeroTraceLinks(
                processKpapLinks(
                  processGuideLocalLinks(line, `block-${keyIndex}-${idx}-`),
                  `block-${keyIndex}-${idx}-kpap-`
                ), 
                `block-${keyIndex}-${idx}-`
              )
            ),
            locale
          )
        ).reduce((acc, curr) => [...acc, ...curr], []);
        
        nodes.push(
          <blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-sm text-black mb-4">
            {processedBlockLines}
          </blockquote>
        )
      } else if (lines[i].trim() === '') {
        i++
      } else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>')) {
          paragraphLines.push(lines[i])
          i++
        }
        // Process each paragraph line to handle the special markers
        const processedParagraphLines = paragraphLines.map((line, idx) => 
          convertGuideLocalTempMarkersToLinks(
            convertKpapTempMarkersToLinks(
              processZeroTraceLinks(
                processKpapLinks(
                  processGuideLocalLinks(line, `para-${keyIndex}-${idx}-`),
                  `para-${keyIndex}-${idx}-kpap-`
                ), 
                `para-${keyIndex}-${idx}-`
              )
            ),
            locale
          )
        ).reduce((acc, curr) => [...acc, ...curr], []);
        
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4">
            {processedParagraphLines}
          </p>
        )
      }
    }

    return nodes
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
                  {isFrench 
                    ? convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks(FR_TITLES.overview, 'title-1-'), 'title-1-kpap-'), 'title-1-')), locale)
                    : convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks(EN_TITLES.overview as string, 'title-2-'), 'title-2-kpap-'), 'title-2-')), locale)
                  }
                </h1>
                <p className="text-base md:text-lg text-black max-w-3xl">
                  {isFrench 
                    ? convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks('Contribuer activement à une expédition Zéro Trace sur le Kilimandjaro.', 'p-1-'), 'p-1-kpap-'), 'p-1-')), locale)
                    : convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks('Actively contributing to a Zero Trace expedition on Kilimanjaro.', 'p-2-'), 'p-2-kpap-'), 'p-2-')), locale)
                  }
                </p>
              </div>

              <article className="bg-gray-50 rounded-lg shadow-md p-6">
                <div>
                  {sections.map(s => (
                    <article key={s.id} id={s.id} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-2">
                        {isFrench 
                          ? convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks(s.title, `title-${s.id}-`), `title-${s.id}-kpap-`), `title-${s.id}-`)), locale)
                          : convertGuideLocalTempMarkersToLinks(convertKpapTempMarkersToLinks(processZeroTraceLinks(processKpapLinks(processGuideLocalLinks(s.title, `title-${s.id}-`), `title-${s.id}-kpap-`), `title-${s.id}-`)), locale)
                        }
                      </h2>
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