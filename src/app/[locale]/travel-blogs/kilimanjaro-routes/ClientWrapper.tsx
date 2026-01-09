'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../../tailgrid.css';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';

interface Section {
  id: string;
  title: string;
}

interface ClientWrapperProps {
  locale: string;
}

export default function ClientWrapper({ locale }: ClientWrapperProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    route1: true, // Keep first route expanded by default
    route2: false,
    route3: false,
    route4: false
  });


  // Toggle section expansion - only one section open at a time
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      // If the clicked section is already open, close it
      if (prev[sectionId]) {
        return {
          ...prev,
          [sectionId]: false
        };
      }
      
      // Close all sections and open only the clicked one
      const newSections: Record<string, boolean> = {};
      Object.keys(prev).forEach(key => {
        newSections[key] = key === sectionId;
      });
      
      return newSections;
    });
    
    // Scroll to the section header
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };



  // Add pulse animation to headers on initial load
  useEffect(() => {
    const headers = document.querySelectorAll('section[id^="route"] h2');
    headers.forEach(header => {
      header.classList.add('animate-pulse-once');
    });
    
    // Clean up animation class after initial pulse
    const timeout = setTimeout(() => {
      headers.forEach(header => {
        header.classList.remove('animate-pulse-once');
      });
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  // Define sections for TOC with hardcoded French titles
  const sections: Section[] = [
    { id: 'introduction', title: 'Les 7 Voies d&apos;Ascension du Kilimandjaro : Analyse Complète, Comparée et Conseils d&apos;Expert Local' },
    { id: 'route1', title: 'Route Machame : Analyse Détaillée (La Voie la Plus Efficace)' },
    { id: 'route2', title: 'Route Marangu : L&apos;Analyse Ultime (La Voie des Cabanes)' },
    { id: 'route3', title: 'Route Lemosho : L&apos;Analyse Ultime (Voie Pittoresque et Optimale)' },
    { id: 'route4', title: 'Route Umbwe : L&apos;Analyse Ultime (La Voie Extrême et Technique)' }
  ];

  return (
    <>
      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author="Guide Local Kilimandjaro"
            date="Décembre 2025"
            readingTime="20 min de lecture"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }); }}
          />
        </div>
      </section>

      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC
                  title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }); }}
                />
              </div>
            </aside>
            
            <div className="flex-1 space-y-8">
              {/* Introduction Section */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Les 7 Voies d&apos;Ascension du Kilimandjaro : Analyse Complète, Comparée et Conseils d&apos;Expert Local
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Le Kilimandjaro offre sept itinéraires d&apos;ascension distincts, chacun avec ses propres caractéristiques, défis et avantages. Comprendre les différences entre ces routes est essentiel pour choisir celle qui correspond le mieux à vos objectifs, votre condition physique et votre expérience. Cette analyse complète compare chaque voie en détail, mettant en évidence leurs forces et faiblesses.</p>
                </div>
              </section>

              {/* Route 1 Section - Machame */}
              <section id="route1" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('route1')}
                >
                  <span>Route Machame : Analyse Détaillée (La Voie la Plus Efficace)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.route1 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.route1 ? 'max-h-[3000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">La Route Machame est la voie la plus populaire du Kilimandjaro, reconnue pour son efficacité en matière d&apos;acclimatation et ses paysages variés.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Description de l&apos;Itinéraire</h3>
                    <p className="mb-4">Le sentier débute à Machame Gate sur le versant sud-ouest. L&apos;itinéraire est caractérisé par une série de montées raides et est physiquement exigeant. C&apos;est une traversée non symétrique : l&apos;ascension finale se fait depuis le Camp de Barafu, et la descente est effectuée par la Route Mweka. La logistique repose entièrement sur le camping. La Durée standard de 7 jours est la plus recommandée.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Avantages Analytiques (Pros)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Efficacité d&apos;Acclimatation (Différence Clé)</h4>
                    <p className="mb-4">L&apos;avantage distinctif de Machame réside dans son Profil d&apos;Acclimatation basé sur le principe du &quot;Climb High, Sleep Low&quot; (Monter Haut, Dormir Bas). Contrairement aux voies linéaires (comme Marangu ou Rongai), Machame expose stratégiquement le corps à des altitudes de choc (comme la Lava Tower à environ 4600 m) avant de descendre pour la nuit à une altitude plus basse. Cette variation est physiologiquement la plus efficace pour stimuler l&apos;adaptation et garantit un haut taux de réussite sur une durée de 7 jours.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Vues Spectaculaires</h4>
                    <p className="mb-4">Le parcours est extrêmement varié. Il offre des Vues Spectaculaires sur le Mur de Barranco et les paysages changeants (<Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">landes et désert alpin</Link>), ce qui rend l&apos;expérience esthétiquement plus riche que les approches douces du Nord.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3. Accessibilité Logistique</h4>
                    <p className="mb-4">L&apos;Accessibilité est bonne, car le point de départ nécessite un transfert routier modéré depuis Moshi/Arusha, comparativement plus court que celui de Lemosho.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Inconvénients Analytiques (Cons)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Très Forte Fréquentation</h4>
                    <p className="mb-4">Machame est une route à Très Forte Fréquentation. Son succès attire un trafic élevé, ce qui signifie que le faible isolement est un facteur de l&apos;expérience, surtout aux camps de base. Cela contraste fortement avec les voies à faible densité (Northern Circuit, Umbwe). Le trafic est à son apogée en haute saison comme en janvier.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Exigence Physique Élevée</h4>
                    <p className="mb-4">Le sentier est physiquement exigeant. Les montées raides et les longues journées de marche demandent une très bonne condition physique pour éviter l&apos;épuisement avant l&apos;ascension finale.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">🧭 Le Conseil du Guide Local</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Gestion de la Fréquentation</h4>
                    <p className="mb-4">Si vous choisissez Machame en haute saison (Janvier), préparez-vous mentalement à l&apos;affluence au niveau du Mur de Barranco. Notre conseil est de commencer la journée de marche vers le Mur très tôt (idéalement avant 7h00) pour éviter les &quot;bouchons&quot; et profiter d&apos;une montée plus rapide et plus sûre.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Préparation Physique</h4>
                    <p className="mb-4">Ne sous-estimez pas l&apos;Exigence Physique. Travaillez votre endurance en côte avant de venir ; la réussite sur Machame dépend de votre capacité à enchaîner les jours de dénivelé positif.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Hydratation</h4>
                    <p className="mb-4">Malgré l&apos;efficacité de l&apos;acclimatation, l&apos;erreur la plus fréquente que nous observons est un manque d&apos;hydratation le jour de la montée à Lava Tower. Boire au moins 4 litres ce jour-là est crucial.</p>
                  </div>
                </div>
              </section>

              {/* Route 2 Section - Marangu */}
              <section id="route2" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('route2')}
                >
                  <span>Route Marangu : L&apos;Analyse Ultime (La Voie des Cabanes)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.route2 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.route2 ? 'max-h-[3000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">La Route Marangu est l&apos;itinéraire historique du Kilimandjaro, unique pour sa logistique en cabanes, mais célèbre pour son profil d&apos;acclimatation inefficace et son taux de réussite comparativement bas.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">I. Description de l&apos;Itinéraire (Détails du Parcours)</h3>
                    <p className="mb-4">Le sentier débute à Marangu Gate (≈1860 m) sur le versant sud-est. La première journée traverse une <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">forêt tropicale</Link> dense et luxuriante avant d&apos;atteindre Mandara Hut. L&apos;itinéraire continue ensuite vers des landes alpines ouvertes jusqu&apos;à Horombo Hut.</p>
                    <p className="mb-4">Marangu est la seule voie symétrique du Kilimandjaro : l&apos;ascension et la descente se font par le même chemin.</p>
                    <p className="mb-4">La logistique est unique : l&apos;hébergement se fait en cabanes (dortoirs) tout au long du parcours.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">II. Avantages Analytiques (Pros)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Logistique Simplifiée (Différence Clé)</h4>
                    <p className="mb-4">L&apos;hébergement en cabanes simplifie grandement la logistique. Cela élimine le besoin de tentes et réduit la quantité de matériel lourd à transporter pour l&apos;équipe de porteurs, faisant de Marangu une option souvent moins coûteuse.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Accès Logistique et Durée Courte</h4>
                    <p className="mb-4">Son Accessibilité Logistique est la meilleure : le transfert routier depuis Moshi/Arusha est le plus court. La courte Durée (5 jours) est un attrait pour ceux ayant des contraintes de temps strictes.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">III. Inconvénients Analytiques (Cons)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Efficacité d&apos;Acclimatation (Risque Élevé)</h4>
                    <p className="mb-4">L&apos;inconvénient majeur réside dans son Profil d&apos;Acclimatation linéaire et rapide. L&apos;Efficacité de l&apos;Acclimatation est faible, car Marangu ne permet pas la stratégie du &quot;Climb High, Sleep Low&quot;. Cette absence de variation est la cause directe de son très faible taux de réussite et du risque élevé de Mal Aigu des Montagnes (MAM).</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Expérience et Fréquentation</h4>
                    <p className="mb-4">C&apos;est une route à Très Forte Fréquentation. L&apos;expérience est la moins riche esthétiquement (moins de Vues Spectaculaires) car l&apos;aller-retour sur le même sentier rend les paysages répétitifs.</p>
                    <p className="mb-4">L&apos;Exigence Physique est très élevée si vous choisissez 5 jours, car la vitesse de montée impose une pression intense au corps.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">🔍 Ce Qui Rend Marangu Spéciale (Contrastes avec Machame et Lemosho)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1). Hébergement (Le Contraste Logistique)</h4>
                    <p className="mb-4">Marangu est la seule route avec des cabanes. Machame et Lemosho, ainsi que toutes les autres voies modernes, sont basées sur le camping exclusif. Cette différence change toute la logistique, la quantité de bagages et le niveau de confort nocturne.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2). Stratégie d&apos;Acclimatation (Le Contraste Physiologique)</h4>
                    <p className="mb-4">Marangu ne permet pas la stratégie du &quot;Climb High, Sleep Low&quot; qui est l&apos;atout majeur de Machame et Lemosho. Son élévation modérée et constante la rend statistiquement moins sûre que ces voies, qui sont spécifiquement conçues pour maximiser l&apos;adaptation.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3). Traversée (Le Contraste d&apos;Expérience)</h4>
                    <p className="mb-4">Marangu est la seule voie symétrique (aller-retour). Cela signifie que les paysages sont répétés, contrairement à Machame et Lemosho qui sont des traversées non symétriques, offrant des vues différentes en montant et en descendant.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">4). Durée (Le Contraste du Temps)</h4>
                    <p className="mb-4">Le format de 5 jours est le plus court possible, ce qui est l&apos;opposé des stratégies longues et sûres des itinéraires comme Lemosho (8 jours) ou Northern Circuit (9 jours).</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Le Conseil du Guide Local (Marangu)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">État des Sentiers</h4>
                    <p className="mb-4">À cause de son statut symétrique et de sa forte fréquentation, les sentiers de Marangu, surtout dans la partie inférieure, peuvent être particulièrement boueux et érodés. Prévoyez des guêtres et des bottes imperméables de haute qualité pour les premières journées de trek.</p>
                  </div>
                </div>
              </section>

              {/* Route 3 Section - Lemosho */}
              <section id="route3" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('route3')}
                >
                  <span>Route Lemosho : L&apos;Analyse Ultime (Voie Pittoresque et Optimale)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.route3 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.route3 ? 'max-h-[3000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">La Route Lemosho est l&apos;une des voies les plus longues et est considérée comme la meilleure combinaison de sécurité, de vues et d&apos;acclimatation. Elle est l&apos;alternative premium à la Route Machame.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">I. Description de l&apos;Itinéraire (Détails du Parcours)</h3>
                    <p className="mb-4">L&apos;itinéraire débute à Londorossi Gate (≈2100 m) sur le Versant Ouest, nécessitant le plus long transfert routier initial. La progression est lente, traversant d&apos;abord la <Link href={`/${locale}/travel-blogs/zones-climatiques-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">forêt tropicale</Link> vierge (souvent boueuse) puis le vaste Plateau de Shira avant de fusionner avec la Route Machame au camp de Barranco.</p>
                    <p className="mb-4">Lemosho est une voie de traversée non symétrique : la montée et la descente se font par des chemins différents (descente par Mweka), ce qui maximise la variété des paysages.</p>
                    <p className="mb-4">La logistique est basée sur le camping exclusivement (tentes).</p>
                    <p className="mb-4">La Durée standard de 8 jours est fortement recommandée, car elle est le facteur clé du taux de réussite.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">II. Avantages Analytiques (Pros)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Efficacité d&apos;Acclimatation Maximale (Différence Clé)</h4>
                    <p className="mb-4">Le Profil d&apos;Acclimatation est optimal. Sa Durée de 8 jours garantit l&apos;acclimatation la plus progressive en réduisant le gain d&apos;altitude moyen par jour. Elle utilise la stratégie du &quot;Climb High, Sleep Low&quot; (par exemple, montée vers Lava Tower, descente vers Barranco), ce qui lui confère le taux de réussite au sommet le plus élevé (souvent &gt;90% sur 8 jours).</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Vues Spectaculaires et Isolement Initial</h4>
                    <p className="mb-4">Elle offre les plus belles Vues Spectaculaires sur les glaciers, le Plateau de Shira et la face Ouest. Elle présente une Faible Fréquentation sur ses premiers jours (Jours 1-3), garantissant un excellent isolement et un sentiment de wilderness (milieu sauvage).</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3. Exigence Physique Gérable (Endurance)</h4>
                    <p className="mb-4">L&apos;Exigence Physique quotidienne est modérée car l&apos;effort est étalé. L&apos;endurance est plus importante que l&apos;intensité de la montée.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">III. Inconvénients Analytiques (Cons)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Logistique Complexe et Coût Élevé</h4>
                    <p className="mb-4">L&apos;éloignement du point de départ (Londorossi) augmente significativement la logistique et le coût global de l&apos;expédition (coût de transfert plus important). Ce temps de route peut être fatigant avant même le début du trek.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Fréquentation Après la Jonction</h4>
                    <p className="mb-4">Après le Plateau de Shira et le camp de Barranco, la route rejoint le sentier très fréquenté de Machame/Barranco. Cela signifie que le faible isolement est perdu sur les jours cruciaux (Jours 4-7).</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3. Longueur du Parcours</h4>
                    <p className="mb-4">La distance totale de la randonnée est l&apos;une des plus longues (environ 65 km jusqu&apos;au sommet), ce qui demande une préparation spécifique en matière d&apos;endurance.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">🔍 Ce Qui Rend Lemosho Spéciale (Contrastes avec Machame et Marangu)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1). Durée (Le Contraste du Temps)</h4>
                    <p className="mb-4">Le format de 8 jours est la durée optimale. Il permet un repos plus long à Shira Camp et Barranco que le format Machame 7 jours. C&apos;est statistiquement beaucoup plus sûr que les itinéraires plus courts comme Marangu (5-6 jours).</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2). Stratégie d&apos;Acclimatation (Le Contraste Physiologique)</h4>
                    <p className="mb-4">Lemosho combine une approche lente (les premiers jours) avec le &quot;Climb High, Sleep Low&quot; (après la jonction), ce qui la rend physiologiquement supérieure à la progression plus rapide de Machame (7 jours) ou à la progression linéaire de Marangu.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3). Hébergement (Le Contraste Logistique)</h4>
                    <p className="mb-4">Lemosho est basée sur le camping exclusif et la traversée non symétrique, offrant une expérience plus riche et plus immersive que l&apos;aller-retour en cabane de Marangu.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">4). Accessibilité</h4>
                    <p className="mb-4">L&apos;Accessibilité est caractérisée par un très long transfert routier initial vers l&apos;Ouest, à l&apos;opposé du transfert court vers Machame Gate.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Le Conseil du Guide Local (Lemosho) - Version Détaillée</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Priorité au Sommet</h4>
                    <p className="mb-4">Si votre priorité absolue est d&apos;atteindre le sommet, choisissez le format 8 jours. C&apos;est le meilleur investissement pour votre réussite.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">2. Logistique des Transports</h4>
                    <p className="mb-4">Le long transfert initial fatigue. Prévoyez une nuit supplémentaire avant le trek si possible. Les routes d&apos;accès peuvent être difficiles, surtout en saison humide ; les 4x4 sont cruciaux.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Gestion de l&apos;Humidité</h4>
                    <p className="mb-4">La traversée initiale de la forêt est souvent humide. Prévoyez des sacs étanches pour votre équipement et n&apos;oubliez pas des guêtres de qualité pour les premiers jours.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Rythme &apos;Pole Pole&apos;</h4>
                    <p className="mb-4">L&apos;épuisement n&apos;est pas le danger, l&apos;altitude l&apos;est. Adoptez le rythme &apos;Pole Pole&apos; (doucement, doucement) dès le premier camp pour conserver l&apos;énergie pour la nuit du sommet.</p>
                  </div>
                </div>
              </section>

              {/* Route 4 Section - Umbwe */}
              <section id="route4" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('route4')}
                >
                  <span>Route Umbwe : L&apos;Analyse Ultime (La Voie Extrême et Technique)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.route4 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.route4 ? 'max-h-[3000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">La Route Umbwe est la voie d&apos;ascension la plus courte et la plus raide du Kilimandjaro. Elle est reconnue pour son approche extrêmement directe, son exigence physique maximale, et son profil d&apos;acclimatation dangereux en raison de sa rapidité.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Description de l&apos;Itinéraire</h3>
                    <p className="mb-4">Le sentier débute à Umbwe Gate (≈1600 m) sur le versant sud. L&apos;itinéraire est caractérisé par une inclinaison constante et agressive dès le premier jour, traversant une forêt dense et peu fréquentée. Le parcours est rapide : après deux jours d&apos;ascension très raide, la voie rejoint les itinéraires Machame et Lemosho au Camp de Barranco (≈3980 m). C&apos;est une traversée non symétrique : l&apos;ascension se fait par Umbwe/Barafu, et la descente est effectuée par la Route Mweka. Sa logistique repose entièrement sur le camping. La Durée standard de 5 ou 6 jours est le format le plus court du Kilimandjaro.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Analyse du Profil d&apos;Acclimatation (En quoi c&apos;est la différence)</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">L&apos;inconvénient majeur d&apos;Umbwe réside dans son Profil d&apos;Acclimatation très agressif</h4>
                    <p className="mb-4">Contrairement à Machame, qui utilise le principe &quot;Climb High, Sleep Low&quot;, Umbwe est une voie linéaire et rapide dans son approche initiale.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Taux d&apos;Élévation</h4>
                    <p className="mb-4">Le gain d&apos;altitude par jour est maximal, souvent au-delà des limites physiologiques recommandées.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Risque Élevé</h4>
                    <p className="mb-4">L&apos;Efficacité d&apos;Acclimatation est pratiquement nulle en raison du taux d&apos;élévation trop rapide sur les premiers jours. C&apos;est pourquoi Umbwe enregistre le taux de réussite le plus bas et le risque d&apos;évacuation le plus élevé par Mal Aigu des Montagnes (MAM). Seuls les grimpeurs ayant une pré-acclimatation devraient l&apos;envisager.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Analyse de la Fréquentation et de l&apos;Expérience</h3>
                    <p className="mb-4">Umbwe est une route à Très Faible Fréquentation. Son exigence physique et son risque la maintiennent à l&apos;écart du trafic de masse.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Isolement</h4>
                    <p className="mb-4">Le faible trafic garantit un excellent isolement sur les deux premiers jours, offrant une véritable expérience de wilderness.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Vues</h4>
                    <p className="mb-4">En revanche, le parcours offre des vues spectaculaires et directes sur la face sud et les glaciers du Kibo en raison de l&apos;approche verticale et rapprochée.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Contraste</h4>
                    <p className="mb-4">L&apos;expérience d&apos;isolement est perdue après la jonction au Camp de Barranco, où les grimpeurs rejoignent le flux de Machame et Lemosho.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Synthèse des Différences Clés</h3>
                    <p className="mb-4">En conclusion, la Route Umbwe se distingue de tous les autres itinéraires par son Inclinaison (la plus raide) et sa Durée (la plus courte), faisant d&apos;elle la voie la plus exigeante et la moins sûre physiologiquement. Ces facteurs la placent aux antipodes des voies d&apos;acclimatation performantes et longues (Lemosho, Northern Circuit) et même de la Machame Route.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Le Conseil du Guide Local (Umbwe) - Détail Essentiel</h3>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">1. Réservé aux Experts (Sécurité)</h4>
                    <p className="mb-4">Nous insistons : cette route est strictement réservée aux grimpeurs ayant une expérience confirmée en haute altitude et une pré-acclimatation récente (ex: Mont Meru). Le corps n&apos;a pas le temps de s&apos;adapter naturellement à ce rythme.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">Préparation Verticale</h4>
                    <p className="mb-4">Votre entraînement doit se concentrer sur les montées très raides et soutenues. Les bâtons de randonnée sont absolument essentiels pour la stabilité et pour soulager les genoux dans les sections raides.</p>
                    
                    <h4 className="text-lg font-semibold mt-4 mb-2">3. Gestion du Stress</h4>
                    <p className="mb-4">Préparez-vous mentalement à l&apos;effort. L&apos;ascension est psychologiquement éprouvante en raison de la raideur constante et du manque de progression horizontale.</p>
                  </div>
                </div>
              </section>

              {/* Canonical route cards section */}
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
                        <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
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
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                        <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
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
                        <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}