'use client';

import Link from 'next/link';
import '../../../tailgrid.css';
import { useLocale } from 'next-intl';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';
import TopicCard from '@/components/ui/TopicCard';

// Helper function to process itinerary links in text
function processItineraryLinks(text: string, keyPrefix: string = ''): string {
  const parts = text.split('###ITINERAIRE_LINK###');
  
  if (parts.length <= 1) {
    return text; // Return the original string if no itinerary found
  }
  
  // Join the parts with a temporary placeholder that won't conflict with other markers
  let result = '';
  for (let j = 0; j < parts.length; j++) {
    result += parts[j];
    if (j < parts.length - 1) {
      // Add a temporary marker that we'll replace later with the actual link
      result += `###ITINERAIRE_TEMP_LINK_${keyPrefix}${j}###`;
    }
  }
  
  return result;
}

// Helper function to convert temporary itinerary markers to actual links
function convertItineraryTempMarkersToLinks(text: string | (string | JSX.Element)[]): (string | JSX.Element)[] {
  if (typeof text === 'string') {
    // If it's a string, convert any temporary markers to links
    const parts = text.split(/(###ITINERAIRE_TEMP_LINK_[^#]+###)/);
    const result: (string | JSX.Element)[] = [];
    
    for (const part of parts) {
      if (part.startsWith('###ITINERAIRE_TEMP_LINK_') && part.endsWith('###')) {
        // Extract the key prefix from the temporary marker
        const keyMatch = part.match(/###ITINERAIRE_TEMP_LINK_(.+?)###/);
        const keyPrefix = keyMatch ? keyMatch[1] : 'default-';
        
        result.push(
          <Link 
            key={`itinerary-${keyPrefix}`} 
            href="http://localhost:3000/fr/trips/climb-kilimanjaro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
          >
            l'itinéraire
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
        const converted = convertItineraryTempMarkersToLinks(element);
        result.push(...converted);
      } else {
        result.push(element);
      }
    }
    return result;
  }
}

const ids = [
  'overview',
  'how-body-reacts',
  'slow-pace',
  'choose-itinerary',
  'hydrate-eat',
  'listen-guide',
  'guide-tip'
];

const FR_TITLES: Record<string, string> = {
  overview: "Comment préparer son corps à l’altitude du Kilimandjaro ?",
  'how-body-reacts': 'Comprendre comment le corps réagit à l’altitude',
  'slow-pace': 'Adopter un rythme lent et régulier',
  'choose-itinerary': "Choisir un itinéraire favorable à l’acclimatation",
  'hydrate-eat': 'Bien s’hydrater et bien s’alimenter',
  'listen-guide': "Écouter son corps et communiquer avec le guide",
  'guide-tip': "Conseil du guide local 🏔️"
};

const FR_SECTIONS: Record<string, string> = {
  overview: `L’altitude est le principal défi lors de l’ascension du Kilimandjaro et le facteur qui influence le plus la réussite du sommet. À partir de 3 000 mètres, la quantité d’oxygène dans l’air diminue progressivement. Le corps est alors obligé de s’adapter à ce manque d’oxygène pour continuer à fonctionner normalement.

Contrairement à la condition physique, l’altitude ne se « travaille » pas en salle de sport. On peut être très sportif et malgré tout rencontrer des difficultés en altitude. La réussite sur le Kilimandjaro repose donc sur une bonne acclimatation, un rythme adapté, une hydratation rigoureuse et un comportement responsable en montagne.

En tant que guide local, je constate chaque saison que les personnes qui respectent l’altitude ont beaucoup plus de chances d’atteindre le sommet que celles qui la sous-estiment.`,
  
  'how-body-reacts': `En altitude, le corps reçoit moins d'oxygène à chaque respiration. Pour compenser, le cœur bat plus vite et la respiration devient plus rapide. C'est une réaction naturelle et normale, mais cette adaptation demande du temps.

Si l'on monte trop rapidement, le corps n'a pas le temps de s'adapter correctement. Cela peut provoquer des symptômes comme des maux de tête, des nausées, une fatigue intense, une perte d'appétit ou des troubles du sommeil. Ces signes indiquent que l'organisme est en difficulté face à l'altitude.

La préparation commence donc par une règle fondamentale : monter lentement n'est pas un choix, c'est une nécessité.`,
  
  'slow-pace': `Sur le Kilimandjaro, une règle s’applique à tous, sans exception : « pole pole », ce qui signifie marcher lentement. Ce rythme permet au corps d’économiser de l’énergie et d’améliorer l’oxygénation des muscles et du cerveau.

Même les personnes très sportives doivent accepter cette lenteur. L’altitude ne fait aucune différence entre un athlète et un débutant. Marcher trop vite augmente le risque de mal aigu des montagnes et réduit les capacités de récupération.

Un rythme lent et régulier, maintenu jour après jour, est l’un des facteurs les plus efficaces pour atteindre le sommet en sécurité.`,
  
  'choose-itinerary': `La préparation à l’altitude commence avant même de poser le pied sur la montagne. Le choix de l’itinéraire est essentiel. Certains parcours du Kilimandjaro proposent une montée plus progressive et incluent des journées ou des montées d’acclimatation, ce qui permet au corps de s’adapter plus efficacement.

Passer davantage de nuits en altitude aide l’organisme à produire plus de globules rouges, améliorant ainsi le transport de l’oxygène dans le sang. Un bon guide local adapte l’itinéraire en fonction du niveau, du rythme et des réactions du groupe.`,
  
  'hydrate-eat': `En altitude, le corps se déshydrate plus rapidement, même lorsque la sensation de soif est faible. Boire régulièrement tout au long de la journée est indispensable pour soutenir l’acclimatation et limiter les effets négatifs de l’altitude.

Une alimentation équilibrée, riche en glucides, permet de fournir l’énergie nécessaire à l’effort et aide le corps à mieux gérer le manque d’oxygène. Manger suffisamment, même sans appétit, fait partie intégrante de la préparation à l’altitude.`,
  
  'listen-guide': `Chaque personne réagit différemment à l’altitude. Certains s’adaptent rapidement, d’autres ont besoin de plus de temps. Il est donc essentiel d’écouter les signaux de son corps et d’informer le guide dès l’apparition de symptômes inhabituels.

Une communication rapide permet d’ajuster le rythme, de prendre des mesures préventives et, si nécessaire, d’éviter des complications plus graves. Un guide local expérimenté surveille quotidiennement l’état de santé du groupe et agit avant que la situation ne s’aggrave.`,
  
  'guide-tip': `> « Sur le Kilimandjaro, l’altitude ne se défie pas. Celui qui la respecte, marche lentement et écoute son corps arrive plus haut et plus sereinement. »`
};

const EN_TITLES: Record<string, string> = {
  overview: "How to prepare your body for Kilimanjaro's altitude",
  'how-body-reacts': 'How the body reacts to altitude',
  'slow-pace': 'Adopt a slow, steady pace',
  'choose-itinerary': 'Choose an itinerary that aids acclimatization',
  'hydrate-eat': 'Stay hydrated and eat well',
  'listen-guide': 'Listen to your body and communicate with the guide',
  'guide-tip': 'Guide tip 🏔️'
};

const EN_SECTIONS: Record<string, string> = {
  overview: `Altitude is the main challenge when climbing Kilimanjaro and the biggest factor affecting summit success. From around 3,000 meters, the amount of oxygen in the air decreases gradually. The body must adapt to this lower oxygen level to continue functioning normally.

Unlike physical fitness, altitude cannot be "trained" in a gym. A very fit person can still struggle at altitude. Success on Kilimanjaro therefore depends on good acclimatization, a suitable pace, strict hydration, and responsible behaviour in the mountains.

As a local guide I see each season that people who respect the altitude have far greater chances of reaching the summit than those who underestimate it.`,
  
  'how-body-reacts': `At altitude, the body receives less oxygen with each breath. To compensate, the heart rate increases and breathing becomes faster. This is a natural and normal reaction, but it takes time for the body to adapt.

If you ascend too quickly, the body does not have time to adapt properly. This can cause symptoms like headaches, nausea, severe fatigue, loss of appetite or sleep disturbances. These signs indicate the body is struggling with altitude.

Preparation therefore starts with a fundamental rule: ascending slowly is not a choice—it's a necessity.`,
  
  'slow-pace': `On Kilimanjaro one rule applies to everyone without exception: "pole pole", which means to walk slowly. This pace conserves energy and improves oxygenation of the muscles and brain.

Even very fit people must accept this slowness. Altitude makes no distinction between an athlete and a beginner. Walking too fast increases the risk of acute mountain sickness and reduces recovery capacity.

A slow, steady pace maintained day after day is one of the most effective factors for safely reaching the summit.`,
  
  'choose-itinerary': `Preparing for altitude starts before you set foot on the mountain. The choice of itinerary is essential. Some Kilimanjaro routes offer a more gradual ascent and include acclimatization days or climbs, helping the body adapt more effectively.

Spending more nights at altitude helps the body produce more red blood cells, improving oxygen transport in the blood. A good local guide adapts the itinerary to the group's level, pace, and reactions.`,
  
  'hydrate-eat': `At altitude the body dehydrates faster, even when thirst is low. Drinking regularly throughout the day is essential to support acclimatization and limit negative effects of altitude.

A balanced diet rich in carbohydrates provides the energy needed for the effort and helps the body manage reduced oxygen. Eating enough, even without appetite, is an integral part of altitude preparation.`,
  
  'listen-guide': `Everyone reacts differently to altitude. Some adapt quickly, others need more time. It's therefore essential to listen to your body's signals and inform the guide as soon as unusual symptoms appear.

Quick communication allows pace adjustments, preventive measures and, if necessary, avoids more serious complications. An experienced local guide monitors the group's health daily and acts before situations worsen.`,
  
  'guide-tip': `> "On Kilimanjaro, altitude is not to be challenged. Those who respect it, walk slowly and listen to their body, reach higher and more calmly."`
};

function renderContent(content: string) {
  // Replace 'l'itinéraire' and 'l’itinéraire' (with both straight and curly apostrophes) with a special marker that we'll convert to links
  const markedContent = content.replace(/l['’]itinéraire/g, '###ITINERAIRE_LINK###');
  
  const blocks = markedContent.split('\n\n')
  return (
    <>
      {blocks.map((block, i) => {
        if (block.trim().startsWith('>')) {
          // Process the block to convert itinerary markers to temporary markers, then to links
          const processedBlockWithTempMarkers = processItineraryLinks(block, `block-${i}-`);
          const processedBlock = convertItineraryTempMarkersToLinks(processedBlockWithTempMarkers);
          return (
            <blockquote key={i} className="pl-4 border-l-4 italic text-sm text-black">{processedBlock}</blockquote>
          )
        }
        // Process the block to convert itinerary markers to temporary markers, then to links
        const processedBlockWithTempMarkers = processItineraryLinks(block, `p-${i}-`);
        const processedBlock = convertItineraryTempMarkersToLinks(processedBlockWithTempMarkers);
        return <p key={i} className="my-4 leading-relaxed text-black">{processedBlock}</p>
      })}
    </>
  )
}

type Section = {
  id: string;
  title: string;
  content: string;
};

type ClientWrapperProps = {
  locale: string;
  sections: Section[];
  FR_TITLES: Record<string, string>;
  EN_TITLES: Record<string, string>;
  FR_SECTIONS: Record<string, string>;
  EN_SECTIONS: Record<string, string>;
};

export default function ClientWrapper({
  locale,
  sections,
  FR_TITLES,
  EN_TITLES,
  FR_SECTIONS,
  EN_SECTIONS
}: ClientWrapperProps) {
  const currentLocale = useLocale() || locale;

  return (
    <>
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={currentLocale === 'fr' ? 'Guide Local Kilimandjaro' : 'Kilimanjaro Local Guide'} date={currentLocale === 'fr' ? 'Décembre 2025' : 'December 2025'} />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={currentLocale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={currentLocale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">{currentLocale === 'fr' ? FR_TITLES.overview : EN_TITLES.overview}</h1>
                <p className="text-base md:text-lg text-black max-w-3xl">{currentLocale === 'fr' ? 'Conseils pour se préparer à l’altitude et améliorer vos chances au sommet.' : 'Advice to prepare for altitude and improve your summit chances.'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-black">
                {sections.map(s => (
                  <article key={s.id} id={s.id} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-black">{s.title}</h2>
                    <div className="prose max-w-none text-black" style={{ whiteSpace: 'pre-wrap' }}>{renderContent(s.content)}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}