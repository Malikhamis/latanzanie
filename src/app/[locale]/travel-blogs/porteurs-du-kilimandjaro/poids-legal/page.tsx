"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import AuthorMeta from "@/components/ui/AuthorMeta";
import TOC from "@/components/ui/TOC";
import Image from "next/image";
import "../../../../tailgrid.css";

// Helper function to process park links in text
function processParkLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###PARK_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no park found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###PARK_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary park markers to actual links
function convertParkTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###PARK_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###PARK_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###PARK_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`park-${keyPrefix}`} 
            href="https://www.tanzaniaparks.go.tz/national_parks/kilimanjaro-national-park" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            parcs nationaux
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
        const converted = convertParkTempMarkersToLinks(element, locale);
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
  const parts = text.split('###GUIDE_LOCAL_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no guide local found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###GUIDE_LOCAL_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary guide local markers to actual links
function convertGuideLocalTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###GUIDE_LOCAL_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###GUIDE_LOCAL_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###GUIDE_LOCAL_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`guide-local-${keyPrefix}`} 
            href={`/${locale}/about#heritage`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            guide local
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
        const converted = convertGuideLocalTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

// Helper function to process additional terms for linking
function processTermsForLinking(text: string, keyPrefix: string = ''): string {
  // Replace terms with markers
  const processedText = text
    .replace(/\baltitude\b/g, '###ALTITUDE_LINK###')
    .replace(/\bcondition physique\b/g, '###CONDITION_PHYSIQUE_LINK###')
    .replace(/\bmal aigu des montagnes\b/gi, '###MAM_LINK###')
    .replace(/\bacclimatation\b/g, '###ACCLIMATATION_LINK###')
    .replace(/\bhydratation\b/g, '###HYDRATATION_LINK###');
  
  // Replace markers with temporary placeholders
  const parts = processedText.split('###ALTITUDE_LINK###');
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      result += `###ALTITUDE_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  const parts2 = result.split('###CONDITION_PHYSIQUE_LINK###');
  result = '';
  for (let j = 0; j < parts2.length; j++) {
    result += parts2[j];
    if (j < parts2.length - 1) {
      result += `###CONDITION_PHYSIQUE_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  const parts3 = result.split('###MAM_LINK###');
  result = '';
  for (let j = 0; j < parts3.length; j++) {
    result += parts3[j];
    if (j < parts3.length - 1) {
      result += `###MAM_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  const parts4 = result.split('###ACCLIMATATION_LINK###');
  result = '';
  for (let j = 0; j < parts4.length; j++) {
    result += parts4[j];
    if (j < parts4.length - 1) {
      result += `###ACCLIMATATION_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  const parts5 = result.split('###HYDRATATION_LINK###');
  result = '';
  for (let j = 0; j < parts5.length; j++) {
    result += parts5[j];
    if (j < parts5.length - 1) {
      result += `###HYDRATATION_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary term markers to actual links
function convertTermTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###ALTITUDE_TEMP_LINK_[^#]+###|###CONDITION_PHYSIQUE_TEMP_LINK_[^#]+###|###MAM_TEMP_LINK_[^#]+###|###ACCLIMATATION_TEMP_LINK_[^#]+###|###HYDRATATION_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###ALTITUDE_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###ALTITUDE_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`altitude-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            altitude
          </Link>
        );
      } else if (part.startsWith('###CONDITION_PHYSIQUE_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###CONDITION_PHYSIQUE_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`condition-physique-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/niveau-physique-kilimandjaro`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            condition physique
          </Link>
        );
      } else if (part.startsWith('###MAM_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###MAM_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`mam-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/sante-en-altitude`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            mal aigu des montagnes
          </Link>
        );
      } else if (part.startsWith('###ACCLIMATATION_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###ACCLIMATATION_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`acclimatation-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/acclimatation-kilimanjar`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            acclimatation
          </Link>
        );
      } else if (part.startsWith('###HYDRATATION_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###HYDRATATION_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`hydratation-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/sommeil-kilimanjar`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            hydratation
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
        const converted = convertTermTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

export default function PoidsLegalPage() {
  const locale = useLocale();
  const author = locale === "fr" ? "Par un guide local" : "By a local guide";
  const date = "2025-12-17";
  const readingTime = locale === "fr" ? "6 min de lecture" : "6 min read";

  const sections = [
    {
      id: "introduction",
      title: locale === "fr" ? "Combien de poids un porteur peut-il légalement porter ?" : "How much weight can a porter legally carry?",
      content: `L’ascension du Mont Kilimandjaro est une expérience unique, mais elle repose sur un travail collectif invisible pour la plupart des randonneurs : celui des porteurs. Ces hommes et femmes transportent le matériel, installent les camps et assurent la sécurité de l’expédition.

Une question revient souvent : combien de poids un porteur peut-il légalement porter sur le Kilimandjaro ? Cette information est essentielle pour comprendre la logistique d’une ascension, protéger la santé des porteurs et garantir la réussite de votre trek.

En tant que ${'###GUIDE_LOCAL_LINK###'} et fils d’un ancien porteur, j’ai été témoin de l’importance cruciale de respecter ces limites.`
    },
    {
      id: "regles-officielles",
      title: locale === "fr" ? "Les règles officielles pour protéger les porteurs" : "Official rules to protect porters",
      content: `Gravir le Kilimandjaro est une aventure qui demande une préparation rigoureuse, et le rôle des porteurs est au cœur de chaque expédition. Pour protéger leur santé et assurer la sécurité des randonneurs, le gouvernement tanzanien et les ${'###PARK_LINK###'} ont fixé des limites strictes de poids que chaque porteur peut transporter. La limite légale est de 20 kg par porteur, et cette restriction inclut tous les éléments essentiels à la réussite de l’ascension.

Cette limite n’est pas arbitraire. Porter plus de 20 kg sur des sentiers escarpés, en altitude et souvent dans des conditions climatiques difficiles, peut provoquer des blessures graves, de la fatigue extrême, voire des accidents. C’est pourquoi la loi protège les porteurs, qui sont les piliers invisibles de chaque ascension.`
    },
    {
      id: "tentes-sacs-couchage",
      title: locale === "fr" ? "Pourquoi les tentes et sacs de couchage comptent dans la limite" : "Why tents and sleeping bags count in the limit",
      content: `Les tentes et sacs de couchage sont essentiels pour installer les camps et permettre aux randonneurs de se reposer correctement. Un camp mal installé ou un sac trop lourd pour le porteur peut compromettre le confort et la sécurité de toute l’équipe. Les porteurs doivent non seulement transporter ces équipements, mais aussi les manipuler, les installer et s’assurer qu’ils résistent au vent, à la pluie et au froid. Cela demande de la force, de l’endurance et de la précision. En limitant la charge totale, on garantit que chaque porteur peut effectuer ces tâches sans se blesser.`
    },
    {
      id: "nourriture-eau",
      title: locale === "fr" ? "La nourriture et l’eau pour l’équipe" : "Food and water for the team",
      content: `Une partie des provisions, incluant la nourriture et l'eau, est transportée par les porteurs. Ces éléments sont vitaux pour la survie et l’énergie des randonneurs. Cependant, ces charges sont lourdes et augmentent rapidement la fatigue. La limite de 20 kg assure que le porteur puisse transporter ces éléments de manière sécurisée, tout en restant capable de marcher plusieurs heures par jour, souvent sur des pentes raides ou dans des conditions météorologiques difficiles. Une surcharge pourrait réduire la vigilance du porteur et mettre l’équipe entière en danger.`
    },
    {
      id: "materiel-cuisine-securite",
      title: locale === "fr" ? "Le matériel de cuisine et l’équipement de sécurité" : "Cooking and safety equipment",
      content: `Les porteurs transportent également le matériel de cuisine, comme les réchauds et casseroles, ainsi que certains équipements de sécurité ou médicaux. Ces objets ne sont pas seulement lourds, ils sont indispensables pour le bon déroulement de l’expédition et pour la sécurité des randonneurs. Si un porteur est surchargé, il risque de tomber ou de faire tomber ces équipements, ce qui pourrait entraîner des blessures ou des complications pour l’ensemble du groupe.`
    },
    {
      id: "sacs-personnels",
      title: locale === "fr" ? "Les sacs personnels des randonneurs" : "Personal bags of hikers",
      content: `Parfois, les porteurs transportent également les affaires personnelles des randonneurs, mais toujours dans la limite de 20 kg. Cela permet aux voyageurs de marcher plus légèrement et de mieux profiter de leur trek. Mais si cette limite est dépassée, le porteur peut se fatiguer rapidement, ce qui ralentit l’équipe et augmente le risque d’accidents. Respecter la limite légale assure que chaque porteur peut continuer à marcher en toute sécurité tout en portant les charges nécessaires.`
    },
    {
      id: "experience-personnelle",
      title: locale === "fr" ? "Mon expérience personnelle" : "My personal experience",
      content: `Mon père était porteur sur le Kilimandjaro, et il me racontait souvent combien respecter la limite de charge était vital. Même 20 kg peuvent sembler légers, mais après plusieurs jours de marche sur des sentiers difficiles et en altitude, chaque kilo devient un véritable défi.`
    },
    {
      id: "sommet-uhuru",
      title: locale === "fr" ? "Les porteurs montent-ils jusqu’au sommet Uhuru Peak ?" : "Do porters go to Uhuru Peak?",
      content: `Beaucoup de randonneurs se demandent si les porteurs accompagnant les expéditions du Kilimandjaro atteignent eux aussi le sommet, Uhuru Peak, le point culminant de l’Afrique. La réponse n’est pas uniforme et dépend de plusieurs facteurs, notamment l’itinéraire, les conditions physiques du porteur, et l’organisation de l’expédition.

Dans la majorité des cas, les porteurs ne montent pas toujours jusqu’au sommet. Leur rôle principal est de transporter les charges, installer les camps et veiller à la sécurité des randonneurs. Le sommet est souvent atteint de nuit, dans des conditions climatiques très difficiles : froid extrême, vent violent, faible oxygène et terrain glissant. Monter dans ces conditions avec un sac de 20 kg ou plus serait extrêmement dangereux. Les porteurs doivent donc souvent rester en arrière ou jusqu’à un camp supérieur, en s’assurant que tout est prêt pour l’arrivée des randonneurs.

Cependant, certains porteurs expérimentés choisissent de gravir le sommet lorsqu’ils se sentent capables physiquement et que le guide l’autorise. Dans ce cas, ils doivent porter seulement des charges légères ou aucun sac, car l’ascension finale nécessite un effort maximal et beaucoup d’énergie. Ces moments sont rares et dépendent beaucoup de la santé, de l’acclimatation et des conditions climatiques.

Il est important de comprendre que le rôle des porteurs est avant tout de soutenir l’expédition. Leur présence jusqu’au sommet complet n’est pas obligatoire pour que l’ascension réussisse, mais leur travail invisible tout au long du trek est ce qui rend l’ascension possible pour les randonneurs. Même lorsqu’ils ne touchent pas Uhuru Peak, leur effort, leur endurance et leur expertise sont essentiels pour la sécurité et le succès de l’expédition.

En résumé, les porteurs peuvent ou non atteindre Uhuru Peak, mais ce qui est certain, c’est que chaque sommet atteint par un randonneur repose sur le travail acharné et organisé de ces hommes et femmes courageux. Leur rôle reste central et mérite reconnaissance, respect et conditions de travail adaptées.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero + back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>
      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={author} date={date} readingTime={readingTime} />
        </div>
      </section>
      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} />
        </div>
      </section>
      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} />
              </div>
            </aside>
            <div className="flex-1 space-y-8">
              {sections.map((s, index) => {
                // Replace the marker placeholders with the actual markers for processing
                let contentToProcess = s.content.replace(/\${'###PARK_LINK###'}/g, '###PARK_LINK###');
                contentToProcess = contentToProcess.replace(/\${'###GUIDE_LOCAL_LINK###'}/g, '###GUIDE_LOCAL_LINK###');
                
                // Process content to convert both park and guide local markers to links
                // First process the original string content with temporary markers
                const contentWithTempMarkers = processTermsForLinking(
                  processGuideLocalLinks(
                    processParkLinks(contentToProcess, `section-${index}-parks-`),
                    `section-${index}-guides-`
                  ),
                  `section-${index}-terms-`
                );
                
                // Then convert the temporary markers to actual links
                const contentWithGuideLocalLinks = convertGuideLocalTempMarkersToLinks(
                  contentWithTempMarkers,
                  locale
                );
                
                const contentWithParkLinks = convertParkTempMarkersToLinks(
                  contentWithGuideLocalLinks,
                  locale
                );
                
                const processedContent = convertTermTempMarkersToLinks(
                  contentWithParkLinks,
                  locale
                );
                
                return (
                  <section key={s.id} id={s.id} className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{s.title}</h2>
                    <div className="prose prose-xl max-w-none text-gray-700 whitespace-pre-wrap">
                      {processedContent}
                    </div>
                  </section>
                );
              })}
              {/* Canonical route cards section (after notes) */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
                    <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                            <p className="text-[#00A896] font-semibold">À partir de 1 800 €</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️5 jours</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours</p>
                        <p className="text-gray-600 text-sm mb-4">Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !</p>
                        <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                            <p className="text-[#00A896] font-semibold">À partir de 2 200 €</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️7 jours</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours</p>
                        <p className="text-gray-600 text-sm mb-4">La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro.</p>
                        <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                            <p className="text-[#00A896] font-semibold">À partir de 1 900 €</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️6 jours</div>
                            <div className="text-yellow-400">★★★★☆ (4.5)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)</p>
                        <p className="text-gray-600 text-sm mb-4">Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés.</p>
                        <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}