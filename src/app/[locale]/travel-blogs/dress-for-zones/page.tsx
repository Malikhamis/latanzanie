'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

interface Section {
  id: string
  title: string
}

export default function DressForZonesPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    zone1: true, // Keep introduction expanded by default
    zone2: false,
    zone3: false,
    zone4: false,
    zone5: false
  })
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

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
  }

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add pulse animation to headers on initial load
  useEffect(() => {
    const headers = document.querySelectorAll('section[id^="zone"] h2');
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
  }, [])

  // Define sections for TOC with hardcoded French titles
  const sections: Section[] = [
    { id: 'introduction', title: 'Comment s’habiller pour affronter les 5 zones climatiques du Kilimandjaro' },
    { id: 'zone1', title: 'Zone 1 : Forêt tropicale (1 800 – 2 800 m)' },
    { id: 'zone2', title: 'Zone 2 : Landes et bruyères (2 800 – 3 500 m)' },
    { id: 'zone3', title: 'Zone 3 : Désert alpin (3 500 – 4 500 m)' },
    { id: 'zone4', title: 'Zone 4 : Haute altitude (4 500 – 5 500 m)' },
    { id: 'zone5', title: 'Zone 5 : Sommet – Zone Arctique (5 500 – 5 895 m)' }
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero6.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
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
            readingTime="15 min de lecture"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }) }}
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
                  onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }) }}
                />
              </div>
            </aside>
            
            <div className="flex-1 space-y-8">
              {/* Introduction Section */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comment s’habiller pour affronter les 5 zones climatiques du Kilimandjaro
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro, ce n’est pas seulement changer d’altitude : c’est traverser cinq mondes naturels distincts, chacun avec son propre climat, ses avantages et ses dangers. Lorsque vous commencez au pied de la montagne, vous marchez dans une forêt tropicale chaude et humide. Quelques jours plus tard, vous vous retrouvez dans un environnement presque arctique, où la nuit peut descendre à –20°C. Cette transition rapide fait du choix des vêtements un facteur essentiel pour votre sécurité, votre confort et vos performances.</p>
                  <p className="mb-4">Sur cette montagne, la météo n’est jamais stable. Elle peut changer en quelques minutes, et c’est pourquoi la manière de s’habiller influence directement votre réussite. Un trekkeur mal protégé contre l’humidité en bas, ou mal isolé contre le vent et le froid en haut, perd rapidement de l’énergie — et parfois même l’envie d’avancer.</p>
                  <p className="mb-4">En tant que guide local, je répète souvent à mes groupes :</p>
                  
                  <blockquote className="border-l-4 border-[#00A896] pl-4 italic text-gray-600 my-4">
                    Le Kilimandjaro ne demande pas d’être le plus fort, mais d’être le mieux préparé. Les vêtements sont votre première ligne de défense.
                  </blockquote>
                </div>
              </section>

              {/* Zone 1 Section */}
              <section id="zone1" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('zone1')}
                >
                  <span>Zone 1 : Forêt tropicale (1 800 – 2 800 m)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.zone1 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.zone1 ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4"><strong>Climat :</strong> chaud, humide, parfois lourd – averses possibles même en saison sèche.</p>
                    <p className="mb-4"><strong>Objectif :</strong> rester au sec, éviter de transpirer, protéger contre moustiques et végétation.</p>
                    
                    <p className="mb-4">La première zone de l’ascension du Kilimandjaro plonge le trekkeur dans une forêt dense, verte et vivante, où l’humidité domine. L’air peut être lourd, les feuilles dégoulinent parfois encore de pluie, et le sol reste souvent mouillé. Ici, la chaleur n’est pas le principal problème : c’est l’humidité et la transpiration, qui peuvent devenir vos pires ennemies pour la suite du trek.</p>
                    <p className="mb-4">L’objectif dans cette zone est très simple : éviter de commencer l’ascension trempé, collant ou surchauffé. Tout excès d’humidité que votre corps retient dans cette première journée vous suivra jusqu’en altitude, où le froid est bien plus intense.</p>
                    <p className="mb-4">Voici comment s’habiller intelligemment :</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1). T-shirt respirant manches longues</h3>
                    <p className="mb-4">Le coton est à éviter absolument : il absorbe la sueur, reste mouillé et refroidit le corps plus tard.</p>
                    <p className="mb-4">Un t-shirt technique respirant permet d’évacuer l’humidité et de rester sec.</p>
                    <p className="mb-4">Les manches longues ont deux avantages essentiels :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>Elles protègent contre les moustiques, surtout en bas de la montagne.</li>
                      <li>Elles évitent les petites égratignures dues à la végétation.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2). Pantalon de trek léger</h3>
                    <p className="mb-4">Il doit être souple, léger et respirant, car vous marchez dans un environnement chaud.</p>
                    <p className="mb-4">Un pantalon protège également des moustiques, des branches basses et de la boue.</p>
                    <p className="mb-4">Les shorts sont souvent tentants, mais pas recommandés ici.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3). Chapeau ou casquette</h3>
                    <p className="mb-4">Même sous les arbres, la chaleur se fait sentir.</p>
                    <p className="mb-4">Un chapeau protège du soleil, évite les coups de chaleur et améliore le confort dès le début.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4). Chaussures aérées mais solides</h3>
                    <p className="mb-4">Les premiers kilomètres ne sont pas techniques, mais ils sont parfois boueux.</p>
                    <p className="mb-4">Vous avez besoin de :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>bonne accroche,</li>
                      <li>bon maintien,</li>
                      <li>aération suffisante,</li>
                      <li>semelles adaptées à l’humidité.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Zone 2 Section */}
              <section id="zone2" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('zone2')}
                >
                  <span>Zone 2 : Landes et bruyères (2 800 – 3 500 m)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.zone2 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.zone2 ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4"><strong>Climat :</strong> plus frais, plus sec, début du vent.</p>
                    <p className="mb-4"><strong>Objectif :</strong> garder la chaleur sans surchauffer.</p>
                    
                    <p className="mb-4">Après la moiteur de la forêt tropicale, vous entrez dans un environnement où le paysage s’ouvre soudainement : les arbres disparaissent, les collines se dévoilent, et l’air devient plus frais et plus sec. C’est le début des landes et bruyères, une zone de transition où votre corps commence à sentir le changement d’altitude.</p>
                    <p className="mb-4">Ici, la température baisse doucement mais régulièrement. Le vent commence aussi à se faire sentir, ce qui peut refroidir le corps même lorsqu’on marche. Le défi n’est pas de se réchauffer, mais de trouver l’équilibre : éviter d’avoir froid, sans toutefois transpirer excessivement — car l’humidité sera un problème plus haut.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1). T-shirt technique (synthétique, pas de coton !)</h3>
                    <p className="mb-4">Un t-shirt technique est indispensable pour cette zone.</p>
                    <p className="mb-4">Voici pourquoi :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>il évacue la transpiration rapidement,</li>
                      <li>il garde le corps sec et stable,</li>
                      <li>il ne retient pas l’humidité comme le coton,</li>
                      <li>il évite la sensation de froid quand le vent se lève.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2). Softshell ou polaire légère</h3>
                    <p className="mb-4">Le climat devient plus frais, mais pas glacial. Une polaire légère ou une veste softshell est parfaite pour :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>couper légèrement le vent,</li>
                      <li>offrir une isolation douce,</li>
                      <li>ne pas surchauffer pendant la marche,</li>
                      <li>rester confortable même dans les passages exposés.</li>
                    </ul>
                    <p className="mb-4">Cette couche doit être facile à enlever si le soleil chauffe, ou à mettre quand le vent se lève.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3). Pantalon de trek classique</h3>
                    <p className="mb-4">Le pantalon reste votre protection principale.</p>
                    <p className="mb-4">Ici, vous n’avez plus les moustiques de la forêt, mais vous avez :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>le vent,</li>
                      <li>des températures plus fraîches,</li>
                      <li>des terrains plus rocheux.</li>
                    </ul>
                    <p className="mb-4">Un pantalon de trek classique, coupe droite et respirant, suffit largement. Il protège du froid léger sans bloquer la circulation de l’air.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4). Buff ou tour de cou</h3>
                    <p className="mb-4">Petit accessoire, grande utilité.</p>
                    <p className="mb-4">Le buff protège :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>du vent qui peut irriter la gorge,</li>
                      <li>de la poussière soulevée par les pas,</li>
                      <li>du froid léger du matin ou de l’ombre,</li>
                      <li>parfois même du soleil.</li>
                    </ul>
                    <p className="mb-4">C’est l’un des équipements les plus polyvalents pour cette zone.</p>
                  </div>
                </div>
              </section>

              {/* Zone 3 Section */}
              <section id="zone3" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('zone3')}
                >
                  <span>Zone 3 : Désert alpin (3 500 – 4 500 m)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.zone3 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.zone3 ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4"><strong>Climat :</strong> froid sec, vent fort, radiation solaire intense.</p>
                    <p className="mb-4"><strong>Objectif :</strong> se protéger du soleil le jour, du froid à l’ombre.</p>
                    
                    <p className="mb-4">L’entrée dans le désert alpin marque un changement brutal du paysage. Les arbres et les plantes hautes disparaissent pour laisser place à un décor minéral : roches volcaniques, sol poussiéreux, végétation rare. Le soleil frappe fort, l’air devient plus sec et le vent souffle sans obstacle. C’est l’une des zones les plus trompeuses du Kilimandjaro, car on peut avoir chaud et froid en même temps.</p>
                    <p className="mb-4">La règle ici est simple : vous protéger du soleil en mouvement, mais rester suffisamment chaud quand vous vous arrêtez ou passez à l’ombre. C’est le début des conditions de haute montagne.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1). Polaire + coupe-vent</h3>
                    <p className="mb-4">La polaire apporte la chaleur nécessaire dans un climat sec, tandis que le coupe-vent est indispensable pour :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>protéger du vent constant,</li>
                      <li>éviter la perte de chaleur,</li>
                      <li>stabiliser la température corporelle.</li>
                    </ul>
                    <p className="mb-4">Dans cette zone, le vent peut refroidir le corps en quelques minutes, même sous un soleil fort. Le duo polaire + coupe-vent offre la flexibilité parfaite.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2). Pantalon doublé ou surpantalon coupe-vent</h3>
                    <p className="mb-4">Les jambes sont particulièrement exposées au vent.</p>
                    <p className="mb-4">Deux options efficaces :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>un pantalon déjà doublé pour la chaleur,</li>
                      <li>ou un surpantalon coupe-vent à enfiler rapidement.</li>
                    </ul>
                    <p className="mb-4">L’objectif : protéger du refroidissement soudain lorsqu’on s’arrête, et éviter que le vent ne traverse le tissu.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3). Gants légers</h3>
                    <p className="mb-4">Le vent sec et froid peut engourdir les doigts dès cette altitude.</p>
                    <p className="mb-4">Des gants légers suffisent pour la journée :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>ils protègent contre le froid du vent,</li>
                      <li>sans trop faire transpirer,</li>
                      <li>ils évitent les mains gelées lors des pauses ou des passages ombragés.</li>
                    </ul>
                    <p className="mb-4">Ce n’est pas encore le froid extrême, mais c’est le début de la perte de sensibilité.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4). Lunettes de haute montagne</h3>
                    <p className="mb-4">Ici, la radiation solaire est plus forte qu’en plaine.</p>
                    <p className="mb-4">La lumière se reflète sur les roches claires et devient agressive.</p>
                    <p className="mb-4">Des lunettes adaptées protègent vos yeux de :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>l’éblouissement,</li>
                      <li>l’UV intense,</li>
                      <li>la fatigue visuelle,</li>
                      <li>les risques d’inflammation (kératite solaire).</li>
                    </ul>
                    <p className="mb-4">Beaucoup sous-estiment cet aspect, mais l’altitude + la réverbération fatiguent énormément.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5). Chapeau à large bord ou buff + casquette</h3>
                    <p className="mb-4">Le soleil tape fort dans cette zone, et il n’y a aucune ombre naturelle.</p>
                    <p className="mb-4">Deux solutions efficaces :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>un chapeau à large bord pour protéger le visage, la nuque et les oreilles,</li>
                      <li>ou un combo buff + casquette pour ajuster la protection selon le vent.</li>
                    </ul>
                    <p className="mb-4">La tête est l’une des zones les plus exposées aux coups de soleil à cette altitude.</p>
                  </div>
                </div>
              </section>

              {/* Zone 4 Section */}
              <section id="zone4" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('zone4')}
                >
                  <span>Zone 4 : Haute altitude (4 500 – 5 500 m)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.zone4 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.zone4 ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4"><strong>Climat :</strong> très froid, vent glacial, air sec, effort intense.</p>
                    <p className="mb-4"><strong>Objectif :</strong> conserver la chaleur — chaque calorie compte à cette altitude.</p>
                    
                    <p className="mb-4">À partir de 4 500 m, on entre réellement dans la haute altitude, là où le froid est constant, le vent est plus agressif et l’oxygène se fait plus rare. Les mouvements deviennent plus lents, la respiration plus courte, et le corps consomme énormément d’énergie pour maintenir la chaleur interne.</p>
                    <p className="mb-4">Dans cette zone, chaque erreur vestimentaire se paye immédiatement : un courant d’air froid sous une veste mal fermée, une couche insuffisante ou des gants trop fins peuvent entraîner une perte de chaleur rapide. Et perdre de la chaleur ici, c’est perdre des forces — exactement ce qu’il faut éviter avant l’ascension finale.</p>
                    <p className="mb-4">Voici comment s’équiper pour protéger votre corps dans cet environnement exigeant.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">1) Sous-couche thermique (haut + bas)</h3>
                    <p className="mb-4">C’est la fondation de votre tenue à haute altitude.</p>
                    <p className="mb-4">La sous-couche thermique :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>garde votre chaleur corporelle,</li>
                      <li>évacue l’humidité produite par l’effort,</li>
                      <li>évite que la transpiration ne devienne froide.</li>
                    </ul>
                    <p className="mb-4">À cette altitude, même une très petite quantité d’humidité contre la peau peut provoquer un refroidissement brutal, surtout la nuit ou lors des pauses.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2). Polaire chaude</h3>
                    <p className="mb-4">La polaire est votre barrière isolante principale.</p>
                    <p className="mb-4">Elle retient la chaleur tout en restant respirante.</p>
                    <p className="mb-4">Elle doit être suffisamment épaisse pour réellement isoler, mais pas trop lourde pour ne pas gêner la marche.</p>
                    <p className="mb-4">C’est la couche que vous garderez quasiment tout le temps dans cette zone.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3). Doudoune légère</h3>
                    <p className="mb-4">C’est la couche qui fait la différence dès que :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>le vent s’intensifie,</li>
                      <li>la température chute,</li>
                      <li>vous êtes au camp,</li>
                      <li>vous prenez une pause.</li>
                    </ul>
                    <p className="mb-4">La doudoune offre une isolation rapide et efficace.</p>
                    <p className="mb-4">Elle évite que votre corps « brûle » trop d’énergie pour rester chaud, ce qui est essentiel pour la suite de l’ascension.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4). Surpantalon chaud / doublé</h3>
                    <p className="mb-4">Les jambes travaillent beaucoup, mais elles restent exposées au vent glacial.</p>
                    <p className="mb-4">Un surpantalon chaud ou un pantalon doublé :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>vous protège du froid,</li>
                      <li>coupe efficacement le vent,</li>
                      <li>garde vos muscles chauds (important pour éviter les blessures et la fatigue).</li>
                    </ul>
                    <p className="mb-4">À 5 000 m, le vent peut traverser un pantalon classique et refroidir les muscles en quelques minutes.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5). Gants chauds + sous-gants</h3>
                    <p className="mb-4">Les mains sont parmi les premières zones à perdre de la chaleur.</p>
                    <p className="mb-4">La combinaison sous-gants + gants chauds permet :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>d'ajouter une isolation supplémentaire,</li>
                      <li>de conserver la chaleur même si le vent s'infiltre,</li>
                      <li>d’éviter l'engourdissement ou les douleurs au froid.</li>
                    </ul>
                    <p className="mb-4">Le vent glacial assèche et refroidit les doigts très rapidement — et il faut garder la mobilité pour manipuler bâtons, fermetures, sangle du sac…</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">6). Bonnet couvrant les oreilles</h3>
                    <p className="mb-4">À cette altitude, une grande partie de la chaleur corporelle s’échappe par la tête.</p>
                    <p className="mb-4">Un bonnet chaud, couvrant bien les oreilles, est essentiel pour :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>conserver la chaleur,</li>
                      <li>éviter les maux de tête dus au froid,</li>
                      <li>mieux dormir au camp,</li>
                      <li>protéger du vent glacial du soir et du matin.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Zone 5 Section */}
              <section id="zone5" className="bg-white rounded-lg shadow-md p-8">
                <h2 
                  className="text-3xl font-bold text-gray-900 mb-6 cursor-pointer flex justify-between items-center hover:text-[#00A896] transition-colors duration-200"
                  onClick={() => toggleSection('zone5')}
                >
                  <span>Zone 5 : Sommet – Zone Arctique (5 500 – 5 895 m)</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedSections.zone5 ? 'rotate-180' : ''} animate-bounce`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h2>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.zone5 ? 'max-h-[2000px]' : 'max-h-0'}`}
                >
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="mb-4"><strong>Climat :</strong> températures jusqu’à –20°C, vent violent, nuit glaciale, fatigue extrême.</p>
                    <p className="mb-4"><strong>Objectif :</strong> garder la chaleur en mouvement, affronter le vent nocturne.</p>
                    
                    <p className="mb-4">La dernière zone du Kilimandjaro est un véritable environnement arctique, situé au-dessus de 5 500 mètres.</p>
                    <p className="mb-4">C’est ici que l’ascension devient réellement un défi mental et physique :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>l’oxygène est à son niveau le plus bas,</li>
                      <li>le froid est sec, mordant et constant,</li>
                      <li>le vent du sommet peut couper la respiration,</li>
                      <li>la montée se fait en pleine nuit, quand les températures sont les plus basses.</li>
                    </ul>
                    <p className="mb-4">À ce stade, votre corps est fatigué, vos réserves d’énergie diminuent, et chaque couche de vêtement représente une protection vitale.</p>
                    <p className="mb-4">Bien s’habiller pour le sommet n’est pas un luxe : c’est une condition pour réussir l’ascension en sécurité.</p>
                    <p className="mb-4">Voici comment se préparer au mieux.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Sous-vêtements thermiques (haut + bas)</h3>
                    <p className="mb-4">C’est votre seconde peau, et elle doit absolument être chaude, respirante et parfaitement ajustée.</p>
                    <p className="mb-4">Cette couche garde la chaleur près du corps et empêche l’humidité de refroidir votre peau.</p>
                    <p className="mb-4">Sans une bonne sous-couche, même une doudoune ne suffira pas à compenser la perte de chaleur.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">2). Polaire + doudoune épaisse</h3>
                    <p className="mb-4">La polaire apporte une isolation supplémentaire, indispensable au départ nocturne.</p>
                    <p className="mb-4">La doudoune, elle, joue un rôle essentiel :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>elle protège du froid extrême,</li>
                      <li>elle conserve la chaleur produite par l’effort,</li>
                      <li>elle sert de barrière thermique face au vent glacé.</li>
                    </ul>
                    <p className="mb-4">Choisissez une doudoune vraiment chaude, pas un modèle léger comme en Zone 4.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">3). Grande veste imperméable (hardshell)</h3>
                    <p className="mb-4">La hardshell est la couche extérieure qui vous protège :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>du vent violent,</li>
                      <li>du froid que le vent transporte,</li>
                      <li>de l’humidité (rare mais possible),</li>
                      <li>de la neige pelletée par les rafales.</li>
                    </ul>
                    <p className="mb-4">Elle doit être imperméable, respirante et bien ajustée pour ne laisser aucune entrée au vent.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">4). Pantalon chaud + coupe-vent</h3>
                    <p className="mb-4">À cette altitude, la moindre brise glaciaire peut traverser un pantalon classique.</p>
                    <p className="mb-4">Un pantalon chaud, doublé, associé à une couche coupe-vent, permet de garder les muscles actifs et isolés.</p>
                    <p className="mb-4">Sans cela, les jambes se refroidissent rapidement — et la montée devient infiniment plus difficile.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">5). Gants chauds doublés</h3>
                    <p className="mb-4">Les doigts sont très exposés, surtout dans la nuit venteuse du sommet.</p>
                    <p className="mb-4">Les gants doublés (ou gants + sur-gants) protègent :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>du froid extrême,</li>
                      <li>du vent glacial,</li>
                      <li>du risque d’engourdissement ou de gelure légère.</li>
                    </ul>
                    <p className="mb-4">Il faut pouvoir encore manipuler les bâtons et ouvrir un sac : la mobilité des mains est essentielle.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">6). Bonnet + buff</h3>
                    <p className="mb-4">La tête et le cou sont les zones qui perdent le plus de chaleur.</p>
                    <p className="mb-4">Un bonnet chaud couvrant les oreilles + un buff protège :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>du vent coupant,</li>
                      <li>de la déperdition de chaleur,</li>
                      <li>du froid sec qui peut provoquer maux de tête et irritation de la gorge.</li>
                    </ul>
                    <p className="mb-4">Ce combo est indispensable pour conserver une température corporelle stable.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">7). Chaussettes chaudes (laine)</h3>
                    <p className="mb-4">À cette altitude, les orteils sont parmi les premières zones à se refroidir.</p>
                    <p className="mb-4">Les chaussettes en laine (type mérinos) :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>gardent les pieds au chaud,</li>
                      <li>évitent l’humidité,</li>
                      <li>protègent contre les engourdissements du froid.</li>
                    </ul>
                    <p className="mb-4">Gardez toujours une paire réservée uniquement au sommet, jamais humide.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">8). Lampe frontale (pour le départ nocturne)</h3>
                    <p className="mb-4">Le sommet se fait toujours de nuit pour atteindre Uhuru Peak au lever du soleil.</p>
                    <p className="mb-4">La frontale est indispensable pour :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>éclairer les sentiers,</li>
                      <li>garder les mains libres,</li>
                      <li>économiser de l’énergie et éviter les faux pas.</li>
                    </ul>
                    <p className="mb-4">Choisissez un modèle avec bonne autonomie et toujours une pile de rechange.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">9). Lunettes de soleil — indispensables pour la redescente</h3>
                    <p className="mb-4">Même si on ne les porte pas au départ nocturne, elles sont absolument essentielles dès que le soleil se lève.</p>
                    <p className="mb-4">Pourquoi ?</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4 space-y-1">
                      <li>La neige/glace autour du sommet réfléchit fortement la lumière.</li>
                      <li>Le soleil matinal, à 5 800 m, est beaucoup plus agressif que plus bas.</li>
                      <li>Sans protection catégorie 3 ou 4, vous risquez une ophtalmie des neiges (coup de soleil de l’œil) en moins d’une heure.</li>
                    </ul>
                    <p className="mb-4">C’est un équipement souvent oublié… mais pour nous, guides, c’est aussi important que des gants chauds.</p>
                    
                    <p className="mb-4">Conseil du guide local :</p>
                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic text-gray-600 my-4">
                      « Au sommet, le froid et le vent peuvent vider vos forces. Habillez-vous avant d’avoir froid, portez vos lunettes dès que le soleil se lève, et avancez pas à pas. La préparation vestimentaire fait autant partie du sommet que la marche elle-même. »
                    </blockquote>
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
    </div>
  )
}