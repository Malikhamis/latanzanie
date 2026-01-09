"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import AuthorMeta from "@/components/ui/AuthorMeta";
import TOC from "@/components/ui/TOC";
import Image from "next/image";
import "../../../../tailgrid.css";

// Helper function to process KPAP links in text
function processKpapLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###KPAP_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no KPAP found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
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
function convertKpapTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // Process couchage links first ("sac de couchage", "sacs de couchage", etc.)
    const couchageRegex = /(sac de couchage|sacs de couchage|Sac de couchage|Sacs de couchage)/g;
    let couchageProcessedText = text;
    
    // Find all matches and replace with temporary markers
    const couchageMatches = [];
    let couchageMatch;
    const couchageIndex = 0;
    
    while ((couchageMatch = couchageRegex.exec(couchageProcessedText)) !== null) {
      couchageMatches.push({
        match: couchageMatch[0],
        index: couchageMatch.index
      });
    }
    
    // Process couchage matches in reverse order to maintain correct indices
    for (let i = couchageMatches.length - 1; i >= 0; i--) {
      const match = couchageMatches[i];
      const before = couchageProcessedText.substring(0, match.index);
      const after = couchageProcessedText.substring(match.index + match.match.length);
      couchageProcessedText = before + `###COUCHAGE_TEMP_LINK_${i}###` + after;
    }
    
    // If it's a string, convert any temporary markers to links
    const parts = couchageProcessedText.split(/(###KPAP_TEMP_LINK_[^#]+###|###COUCHAGE_TEMP_LINK_\d+###)/);
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
      } else if (part.startsWith('###COUCHAGE_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the index from the temporary marker
        const indexMatch = part.match(/###COUCHAGE_TEMP_LINK_(\d+)###/);
        const index = indexMatch ? parseInt(indexMatch[1], 10) : 0;
        const originalMatch = couchageMatches[index];
        
        result.push(
          <Link 
            key={`couchage-${index}`} 
            href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            {originalMatch ? originalMatch.match : 'sac de couchage'}
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
        const converted = convertKpapTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

export default function RespecterSoutenirPage() {
  const locale = useLocale();
  const author = locale === "fr" ? "Par un guide local" : "By a local guide";
  const date = "2025-12-17";
  const readingTime = locale === "fr" ? "5 min de lecture" : "5 min read";

  // Function to render content with KPAP links
  function renderContent(content: string) {
    // Replace 'KPAP' with a special marker that we'll convert to links
    const markedContent = content.replace(/KPAP/g, '###KPAP_LINK###');
    
    // Process the content to convert special markers to temporary markers
    const processedContentWithTempMarkers = processKpapLinks(markedContent);
    
    // Convert temporary markers to actual links
    const finalProcessedContent = convertKpapTempMarkersToLinks(processedContentWithTempMarkers, locale);
    
    return finalProcessedContent;
  }

  const sections = [
    {
      id: "introduction",
      title: locale === "fr" ? "Comment respecter et soutenir les porteurs" : "How to respect and support porters",
      content: `Lorsqu’on rêve de gravir le Kilimandjaro, il est facile de se concentrer uniquement sur son propre objectif : atteindre le sommet. Pourtant, chaque expédition repose sur le travail acharné des porteurs, véritables piliers de l’ascension. Respecter et soutenir ces hommes et femmes est non seulement une question d’éthique, mais aussi un moyen d’assurer la sécurité et le bon déroulement du trek.`
    },
    {
      id: "limites-charge",
      title: locale === "fr" ? "Respecter les limites de charge" : "Respect weight limits",
      content: `Les porteurs transportent déjà des charges importantes, souvent jusqu’à 20 kg, qui incluent tentes, nourriture, sacs de couchage et matériel de cuisine. Les voyageurs doivent éviter de demander aux porteurs de transporter leurs objets personnels de façon excessive. Respecter la limite de poids légale permet de prévenir les blessures et l’épuisement, et montre que l’on reconnaît l’importance de leur travail.`
    },
    {
      id: "dignite-politesse",
      title: locale === "fr" ? "Traiter les porteurs avec dignité et politesse" : "Treat porters with dignity and politeness",
      content: `Les porteurs ne sont pas des serviteurs : ce sont des professionnels qui assurent la réussite du trek. Les voyageurs doivent toujours les traiter avec respect, éviter les comportements arrogants ou exigeants, et remercier régulièrement pour leur effort. Un simple mot de reconnaissance ou un sourire peut avoir un impact positif énorme sur le moral d’un porteur.`
    },
    {
      id: "suivre-guides",
      title: locale === "fr" ? "Suivre les recommandations des guides" : "Follow the guides' recommendations",
      content: `Les guides locaux sont là pour coordonner le groupe et veiller à la sécurité des porteurs. Écouter leurs consignes, ne pas marcher trop vite ou perturber la répartition des charges, et respecter le rythme prévu permet aux porteurs de travailler dans de bonnes conditions et réduit le risque d’accident.`
    },
    {
      id: "pourboires-equitables",
      title: locale === "fr" ? "Contribuer aux pourboires de manière équitable" : "Contribute fair tips",
      content: `Le pourboire est une part importante du revenu des porteurs. Les voyageurs responsables prévoient une contribution juste, distribuée de manière transparente et équitable. Cela montre une reconnaissance tangible de l’effort fourni par les porteurs tout au long de l’ascension.`
    },
    {
      id: "bien-etre",
      title: locale === "fr" ? "Être attentif à leur bien-être" : "Be attentive to their well-being",
      content: `Les porteurs travaillent dans des conditions physiques et climatiques difficiles. Les voyageurs peuvent les soutenir en veillant à ne pas créer de situations dangereuses, en partageant parfois de l’eau ou de la nourriture si nécessaire, et en respectant les règles de sécurité établies par l’agence et KPAP.`
    },
    {
      id: "conclusion",
      title: locale === "fr" ? "Conclusion" : "Conclusion",
      content: `Soutenir les porteurs n’est pas seulement un acte de politesse : c’est un engagement éthique et pratique. Respecter leur travail, leur sécurité et leur dignité rend l’ascension plus sûre et plus humaine pour tous, tout en valorisant ceux qui rendent chaque sommet possible.`
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
              {sections.map(s => (
                <section key={s.id} id={s.id} className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{s.title}</h2>
                  <div className="prose prose-xl max-w-none text-gray-700 whitespace-pre-wrap">{renderContent(s.content)}</div>
                </section>
              ))}
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
