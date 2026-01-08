'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

// Helper function to process MAM links in text
function processMamLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###MAM_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no MAM found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###MAM_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary MAM markers to actual links
function convertMamTempMarkersToLinks(text: string | (string | JSX.Element)[], locale: string): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###MAM_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###MAM_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###MAM_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`mam-${keyPrefix}`} 
            href={`/${locale}/travel-blogs/sante-en-altitude`} 
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            symptômes du MAM et
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
        const converted = convertMamTempMarkersToLinks(element, locale);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

export default function EvacuationUrgencePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const locale = 'fr'

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'intro', title: 'Évacuation d’urgence sur le Kilimandjaro : guide complet pour les randonnéeurs' },
    { id: 'descente-immediate', title: 'Descente immédiate sur le Kilimandjaro : première étape pour stabiliser un randonnéeur en difficulté' },
    { id: 'comment-descendre', title: 'Comment descendre en toute sécurité sur le Kilimandjaro' },
    { id: 'conclusion', title: 'Conclusion' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
            <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
        
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author="Guide Local"
            date="2024"
            readingTime="7 min"
          />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title="Sommaire"
            items={sections.map(s => ({ id: `${s.id}-detail`, label: s.title, level: 2 }))}
            onSelect={(id: string) => { const sectionId = id.replace('-detail',''); setExpandedSection(sectionId) }}
          />
        </div>
        
      </section>

      <section className="py-16 bg-white" data-section="detailed-article">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="md:flex md:items-start md:gap-8">
              <aside className="hidden md:block md:w-56 lg:w-64 sticky top-24 self-start transform md:-translate-x-32 lg:-translate-x-48">
                <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                  <TOC
                    title="Sommaire"
                    items={sections.map(s => ({ id: `${s.id}`, label: s.title, level: 2 }))}
                    onSelect={(id: string) => { const sid = id; setExpandedSection(sid) }}
                  />
                </div>
              </aside>

              <div className="flex-1">
                <div className="space-y-6">

                  <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      Évacuation d'urgence sur le Kilimandjaro : guide complet pour les randonnéeurs
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl">
                      Gravir le Kilimandjaro, culminant à 5 895 mètres, est une aventure exceptionnelle. Mais cette ascension rapide, combinée à l'altitude et au terrain varié, peut parfois provoquer des situations critiques.
                    </p>
                  </div>

                  <div id="intro" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <p className="text-gray-700 leading-relaxed">Gravir le Kilimandjaro, culminant à 5 895 mètres, est une aventure exceptionnelle. Mais cette ascension rapide, combinée à l'altitude et au terrain varié, peut parfois provoquer des situations critiques. Les randonnéeurs peuvent souffrir d'un Mal Aigu des Montagnes (MAM) sévère, d'un accident ou d'autres urgences médicales. En tant que guide local, ma priorité absolue est la sécurité de chaque randonnéeur et la prévention des incidents.</p>
                  </div>

                  <div id="descente-immediate" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Descente immédiate sur le Kilimandjaro : première étape pour stabiliser un randonnéeur en difficulté</h2>

                    <p className="text-gray-700 leading-relaxed">Lors d'une ascension du Kilimandjaro, le Mal Aigu des Montagnes (MAM) sévère peut survenir rapidement, même chez les randonnéeurs expérimentés. Dans ces situations, la descente immédiate est la mesure la plus efficace pour protéger la santé et éviter les complications graves.</p>

                    <h3 className="text-xl font-semibold mt-4">Pourquoi descendre immédiatement ?</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">À haute altitude, la pression en oxygène diminue, ce qui force le corps à travailler davantage pour oxygéner le cerveau, les muscles et les organes. Si le randonnéeur reste en altitude malgré des symptômes graves, le risque d'œdème cérébral ou pulmonaire de haute altitude augmente considérablement. Descendre rapidement permet :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                      <li>D'apporter plus d'oxygène au cerveau et aux muscles</li>
                      <li>De réduire la pression sur le cœur et la respiration</li>
                      <li>De prévenir l'aggravation des symptômes et les urgences médicales</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">Quels sont les effets immédiats de la descente ?</h3>
                    <p className="text-gray-700 leading-relaxed mt-2">Même une descente de quelques centaines de mètres peut avoir un impact significatif :</p>
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                      <li><strong>Soulagement du mal de tête :</strong> le cerveau reçoit plus d'oxygène, réduisant les douleurs persistantes</li>
                      <li><strong>Réduction de l'essoufflement :</strong> la respiration devient plus facile et moins stressante</li>
                      <li><strong>Stabilisation du rythme cardiaque et de la tension</strong></li>
                      <li><strong>Atténuation de la fatigue et des nausées,</strong> ce qui aide le randonnéeur à mieux récupérer</li>
                    </ul>
                  </div>

                  <div id="comment-descendre" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Comment descendre en toute sécurité sur le Kilimandjaro</h2>

                    <p className="text-gray-700 leading-relaxed">Lorsqu'un randonnéeur souffre de Mal Aigu des Montagnes (MAM) sévère ou d'un accident, la descente est l'étape la plus importante pour stabiliser son état. Mais descendre trop vite ou sans précaution peut aggraver la situation. Pour cela, il est essentiel de suivre des pratiques sécurisées et contrôlées.</p>

                    <div className="space-y-6 mt-6">
                      <div>
                        <h3 className="text-xl font-semibold">1. Rythme lent et régulier</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">La règle d'or est de descendre lentement et régulièrement. Même si l'urgence pousse à aller vite, courir ou précipiter la descente peut provoquer :</p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                          <li>Une fatigue supplémentaire pour le randonnéeur</li>
                          <li>Une respiration plus difficile et un stress accru sur le cœur</li>
                          <li>Un risque de chute ou de blessure sur un terrain accidenté</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">Le guide ajuste toujours le rythme pour que le randonnéeur puisse avancer sans effort excessif. Le mot clé ici est "Pole Pole", comme on dit en Tanzanie : doucement, pas à pas.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">2. Pauses fréquentes</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">Pendant la descente, il est important de faire des pauses régulières pour :</p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                          <li>Vérifier la respiration : le randonnéeur doit pouvoir respirer calmement et sans essoufflement excessif</li>
                          <li>Contrôler la conscience : s'assurer que la personne est lucide et réactive</li>
                          <li>Observer le rythme cardiaque : un cœur trop rapide ou irrégulier peut indiquer un stress important dû à l'altitude</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">Ces pauses permettent au guide d'évaluer l'état du randonnéeur et de décider si d'autres mesures, comme l'oxygène portable, sont nécessaires avant de poursuivre la descente.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">3. Protection contre le froid</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          {convertMamTempMarkersToLinks(
                            processMamLinks(
                              `À haute altitude, le froid peut rapidement aggraver les ###MAM_LINK### provoquer une hypothermie. Pour cela :`,
                              'mam-section-'
                            ),
                            locale
                          )}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                          <li>Toujours porter des vêtements chauds, coupe-vent et imperméables</li>
                          <li>Ajouter couches supplémentaires si le randonnéeur tremble ou se sent faible</li>
                          <li>Protéger la tête, les mains et les pieds, qui sont les parties du corps les plus sensibles au froid</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">Le froid non contrôlé peut rendre la descente plus difficile et rallonger le temps nécessaire pour stabiliser le randonnéeur.</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">4. Communication continue avec le guide</h3>
                        <p className="text-gray-700 leading-relaxed mt-2">La communication est essentielle pour une descente sûre :</p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1">
                          <li>Le randonnéeur doit signaler immédiatement tout changement dans ses symptômes : mal de tête, vertiges, nausées, essoufflement ou fatigue extrême</li>
                          <li>Le guide ajuste le rythme et les pauses selon ces informations</li>
                          <li>Une bonne communication permet de prévenir les situations graves et d'anticiper une éventuelle évacuation médicale si nécessaire</li>
                        </ul>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-[#00A896] pl-4 italic mt-6">
                      {'> '}Conseil du guide local : La descente sécurisée est un art autant qu'une nécessité. Même en situation d'urgence, avancer trop vite ou ignorer les signaux du corps peut mettre le randonnéeur en danger. Monter lentement, faire des pauses régulières, se protéger du froid et rester en contact constant avec le guide sont les clés pour une descente efficace et sûre.
                    </blockquote>
                  </div>

                  <div id="conclusion" className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                    <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed">La sécurité est primordiale lors de l'ascension du Kilimandjaro. En cas d'urgence, la descente immédiate est la meilleure solution pour protéger la santé du randonnéeur. Suivre les bonnes pratiques de descente peut sauver des vies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Canonical route cards section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt pour une aventure ?</h2>
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

      {/* Simple CTA block at the end, canonical format */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/kilimanjaro-summit.jpg" alt="Kilimanjaro background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Prêt à commencer ?</h2>
          <h3 className="text-2xl font-bold mb-6">Rejoignez-nous pour l'aventure</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">Contactez-nous pour en savoir plus sur nos routes</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Prénom"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
              S'abonner</button>
          </div>
        </div>
      </section>
    </div>
  )
}