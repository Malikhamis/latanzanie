"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import AuthorMeta from "@/components/ui/AuthorMeta";
import TOC from "@/components/ui/TOC";
import Image from "next/image";
import "../../../../tailgrid.css";

// Helper function to process "fils d'un ancien porteur" links in text
function processFilsAncienPorteurLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###FILS_ANCIEN_PORTER_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no fils ancien porteur found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###FILS_ANCIEN_PORTER_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary fils d'un ancien porteur markers to actual links
function convertFilsAncienPorteurTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###FILS_ANCIEN_PORTER_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###FILS_ANCIEN_PORTER_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###FILS_ANCIEN_PORTER_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`fils-ancien-porter-${keyPrefix}`} 
            href={`/${locale}/about`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            fils d'un ancien porteur
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
        const converted = convertFilsAncienPorteurTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

// Helper function to process "zone climatique" links in text
function processZoneClimatiqueLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###ZONE_CLIMATIQUE_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no zone climatique found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###ZONE_CLIMATIQUE_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to process "des zones" links in text
function processDesZonesLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###DES_ZONES_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no des zones found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###DES_ZONES_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary zone climatique markers to actual links
function convertZoneClimatiqueTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###ZONE_CLIMATIQUE_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###ZONE_CLIMATIQUE_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###ZONE_CLIMATIQUE_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`zone-climatique-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/climate-zones`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            zone climatique
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
        const converted = convertZoneClimatiqueTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

// Helper function to convert temporary des zones markers to actual links
function convertDesZonesTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###DES_ZONES_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###DES_ZONES_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###DES_ZONES_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`des-zones-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/climate-zones`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            des zones
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
        const converted = convertDesZonesTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

export default function QuiSontLesPorteursPage() {
  const locale = useLocale();
  const author = locale === "fr" ? "Par un guide local" : "By a local guide";
  const date = "2025-12-17";
  const readingTime = locale === "fr" ? "8 min de lecture" : "8 min read";

  const sections = [
    {
      id: "introduction",
      title: locale === "fr" ? "Qui sont les porteurs du Kilimandjaro et leur rôle" : "Who are the Kilimanjaro porters and their role",
      content: `Quand on pense au Kilimandjaro, on imagine souvent le sommet Uhuru Peak, le froid, la neige ou la joie intense d'atteindre le point culminant de l'Afrique. Mais derrière chaque ascension réussie se trouvent des hommes et des femmes qui travaillent dans l'ombre : les porteurs du Kilimandjaro.

Pour moi, ce sujet est très personnel. Je suis guide local aujourd'hui, mais je suis aussi le ${'###FILS_ANCIEN_PORTER_LINK###'}. J'ai grandi en observant mon père marcher des heures, portant des charges lourdes, affrontant le froid et la pluie, tout en restant discret et discipliné. Son histoire m'a appris que le rôle des porteurs va bien au-delà du simple transport de sacs : c'est un véritable pilier humain de chaque expédition.`
    },
    {
      id: "qui-sont-ils",
      title: locale === "fr" ? "Qui sont les porteurs ?" : "Who are the porters?",
      content: `Les porteurs sont principalement originaires des villages situés au pied du Kilimandjaro. Pour eux, ce métier représente une source de revenus essentielle qui permet de nourrir leurs familles, payer l'école des enfants et soutenir leur communauté.

Ils possèdent une connaissance intime de la montagne. Chaque sentier, chaque ${'###ZONE_CLIMATIQUE_LINK###'}, chaque changement de temps est pour eux une réalité vécue depuis leur enfance. Cette expérience leur permet d'organiser les expéditions de manière efficace et sécurisée.

Mon père me racontait souvent que marcher sur le Kilimandjaro n'est pas seulement une question de force physique. Il faut savoir anticiper les conditions, protéger le matériel et aider ceux qui peinent à suivre. C'est un métier qui combine endurance, intelligence pratique et sens du collectif.`
    },
    {
      id: "role",
      title: locale === "fr" ? "Leur rôle exact dans une ascension" : "Their exact role in an ascent",
      content: `Le rôle des porteurs dépasse largement le simple transport de sacs. Ils sont responsables de l'ensemble de la logistique et du confort de l'équipe.

Transporter le matériel : Les porteurs déplacent les tentes, sacs de couchage, nourriture, eau et matériel de cuisine. Chaque porteur peut porter jusqu'à 20 kg, mais cela devient beaucoup plus difficile à mesure que l'altitude augmente.

Installer les camps : Ils arrivent souvent avant les randonneurs pour monter les tentes, protéger le matériel contre la pluie ou le vent, et préparer le camp.

Préparer les repas : Dans certains camps, les porteurs aident les cuisiniers à préparer les repas pour que tout soit prêt à l'arrivée de l'équipe.

Maintenir la sécurité et l'ordre : Ils surveillent le matériel, signalent les dangers sur le sentier et aident à transporter des charges supplémentaires si nécessaire.`
    },
    {
      id: "journee-typique",
      title: locale === "fr" ? "Une journée typique d'un porteur" : "A typical day for a porter",
      content: `La journée d'un porteur commence très tôt. À l'aube, il prépare son sac, vérifie les charges et part marcher avant que les randonneurs ne se lèvent. Sur le chemin, il doit franchir des terrains boueux dans la forêt, escalader ${'###DES_ZONES_LINK###'} rocheuses ou glacières et parfois affronter la pluie ou la neige.

Arrivé au camp, il monte les tentes, organise l'espace, prépare les foyers et s'assure que tout est en ordre. Ce n'est qu'après que les randonneurs peuvent arriver, poser leurs sacs et profiter du camp. Même après une longue journée, certains porteurs continuent à transporter des charges supplémentaires ou à aider les autres membres de l'équipe.

Mon père me racontait que la fatigue physique était difficile, mais ce qui pesait le plus, c'était la responsabilité de veiller sur toute l'équipe. Cette vigilance constante est ce qui distingue un bon porteur.`
    },
    {
      id: "defis",
      title: locale === "fr" ? "Les défis auxquels ils font face" : "The challenges they face",
      content: `Être porteur n'est pas un métier facile. Ils marchent sur plusieurs jours consécutifs, en altitude, souvent dans des conditions extrêmes : froid, pluie, vent ou neige. La fatigue s'accumule, et le corps doit s'adapter à l'oxygène plus rare en altitude.

Malgré tout, les porteurs avancent avec discipline et solidarité. Ils s'entraident lorsqu'un membre est trop fatigué ou malade. Cette solidarité est une part essentielle de leur métier et de la réussite de chaque expédition.`
    },
    {
      id: "essentiels",
      title: locale === "fr" ? "Pourquoi les porteurs sont essentiels" : "Why porters are essential",
      content: `Les porteurs ne sont pas seulement des assistants sur le Kilimandjaro : ils sont la colonne vertébrale de chaque expédition. Sans eux, gravir le sommet serait beaucoup plus difficile, voire impossible pour la majorité des randonneurs. Leur rôle est multiple et va bien au-delà de porter des sacs.

1. Alléger les sacs des randonneurs

L'une des missions principales des porteurs est de porter une partie ou la totalité du matériel des randonneurs. Cela inclut les sacs de couchage, les tentes, la nourriture et parfois les équipements personnels.

Pour un trekkeur, marcher avec un sac léger signifie pouvoir se concentrer sur la respiration, la progression et l'acclimatation à l'altitude, réduisant ainsi les risques de fatigue, de blessures ou de mal d'altitude. Sans porteurs, chaque randonneur devrait porter tout son équipement, ce qui augmenterait considérablement la difficulté de l'ascension.

2. Préparer les camps et les repas à l'avance

Les porteurs arrivent souvent avant les randonneurs pour préparer les camps. Cela inclut :

monter les tentes et organiser l'espace de vie,

protéger le matériel contre le vent ou la pluie,

préparer les repas avec les cuisiniers ou en autonomie dans certains cas.

Grâce à cette préparation, les randonneurs trouvent un camp confortable à leur arrivée, ce qui est crucial pour récupérer après une longue journée de marche en altitude.

3. Assurer la sécurité et le bon déroulement du trek

Les porteurs jouent un rôle clé dans la logistique et la sécurité : ils connaissent parfaitement les sentiers, repèrent les dangers éventuels, aident en cas de problème et transportent du matériel supplémentaire si nécessaire.

Ils travaillent en coordination avec les guides et les cuisiniers pour que l'expédition se déroule sans incidents majeurs, permettant aux randonneurs de se concentrer sur leur expérience plutôt que sur les aspects techniques.

4. Maintenir un rythme adapté à l'altitude

La progression en altitude nécessite de respecter un rythme précis pour éviter le mal açu des montagnes. Les porteurs marchent à un rythme constant et adapté, en portant le matériel, tout en permettant au groupe de suivre le rythme sans s'épuiser.

Leur endurance et leur connaissance de la montagne font que chaque étape est franchie de manière efficace et sécurisée, ce qui augmente considérablement les chances de succès pour atteindre le sommet.`
    },
    {
      id: "experience-personnelle",
      title: locale === "fr" ? "Mon expérience personnelle" : "My personal experience",
      content: `Grandir avec un père porteur m'a permis de comprendre l'importance de ce rôle de l'intérieur. J'ai vu de mes yeux la discipline, l'endurance et le sens du collectif nécessaires pour réussir dans ce métier exigeant

Aujourd'hui, en tant que guide local, je continue à transmettre ces valeurs à mes clients et à mon équipe. Je veille à ce que chaque porteur soit rémunéré équitablement, équipé correctement et traité avec respect, car leur bien-être est directement lié à la réussite et à la sécurité de l'ascension.`
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
                // Process content to convert all markers to links
                const contentWithFilsAncienPorterMarkers = processFilsAncienPorteurLinks(s.content, `section-${index}-fils-ancien-porter-`);
                const contentWithDesZonesMarkers = processDesZonesLinks(contentWithFilsAncienPorterMarkers, `section-${index}-deszones-`);
                const contentWithAllMarkers = processZoneClimatiqueLinks(contentWithDesZonesMarkers, `section-${index}-zoneclimatique-`);
                
                const contentWithFilsAncienPorterLinks = convertFilsAncienPorteurTempMarkersToLinks(contentWithAllMarkers, locale);
                const contentWithDesZonesLinks = convertDesZonesTempMarkersToLinks(contentWithFilsAncienPorterLinks, locale);
                const processedContent = convertZoneClimatiqueTempMarkersToLinks(contentWithDesZonesLinks, locale);
                
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