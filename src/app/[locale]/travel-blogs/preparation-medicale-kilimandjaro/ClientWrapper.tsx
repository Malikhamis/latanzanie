'use client';

import Link from 'next/link';
import '../../../tailgrid.css';
import { useLocale } from 'next-intl';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';
import TopicCard from '@/components/ui/TopicCard';

const ids = ['overview','medical-check','understand-risks','medications','first-aid','vaccines','hydration'];

const FR_TITLES: Record<string,string> = {
  overview: 'Quelle préparation médicale faut-il prévoir avant le Kilimandjaro ?',
  'medical-check': 'Faire un bilan médical avant le départ',
  'understand-risks': 'Comprendre les risques liés à l’altitude',
  medications: 'Les médicaments utiles',
  'first-aid': 'Préparer une trousse de premiers secours',
  vaccines: 'Les vaccins et prévention',
  hydration: 'Hydratation et alimentation'
};

const FR_SECTIONS: Record<string,string> = {
  overview: `La préparation médicale est un élément fondamental de la réussite de l'ascension du Mont Kilimandjaro. Beaucoup de randonneurs se concentrent principalement sur l'entraînement physique ou le choix du matériel, mais sous-estiment l'impact de l'altitude, du froid, de la fatigue accumulée et de l'isolement sur le corps humain. Pourtant, ces facteurs mettent l'organisme à rude épreuve pendant plusieurs jours consécutifs.

Une bonne préparation médicale permet d'anticiper les risques, de reconnaître rapidement les signaux d'alerte et d'éviter que de petits problèmes ne deviennent de véritables dangers en altitude. En tant que guide local du Kilimandjaro, je constate chaque saison que les randonneurs correctement préparés sur le plan médical supportent mieux l'altitude, récupèrent plus facilement et augmentent nettement leurs chances d'atteindre le sommet en bonne santé.`,
  
  'medical-check': `Avant de se lancer dans l'ascension du Kilimandjaro, il est vivement recommandé de consulter un médecin. Cette étape est particulièrement importante pour les personnes ayant des antécédents cardiaques, pulmonaires, de l'hypertension, de l'asthme ou toute autre maladie chronique. Le médecin peut évaluer la capacité du corps à supporter l'effort prolongé, le manque d'oxygène en altitude et les variations importantes de température.

Ce bilan médical permet également de discuter des limites personnelles, d'adapter le rythme de l'ascension et de recevoir des conseils personnalisés. Même pour les personnes jeunes et sportives, une consultation médicale est une précaution essentielle avant un trek en haute altitude comme le Kilimandjaro.`,
  
  'understand-risks': `L'altitude représente le principal défi médical du Kilimandjaro. À partir de 3 000 mètres, la diminution de l'oxygène peut provoquer le mal aigu des montagnes. Les symptômes les plus courants sont les maux de tête, les nausées, la fatigue inhabituelle, les étourdissements et les troubles du sommeil.

Se préparer médicalement signifie comprendre que ces symptômes peuvent apparaître même chez des personnes en excellentes formes physiques. C'est pourquoi la montée progressive, le respect du rythme lent « pole pole » et les journées d'acclimatation sont essentielles. Une bonne information permet de rester calme, de ne pas paniquer et d'agir correctement si les premiers signes apparaissent.`,
  
  medications: `Certains médicaments peuvent faire partie de la préparation médicale, mais ils ne doivent jamais être pris à la légère. L'acétazolamide est parfois prescrit pour aider à l'acclimatation à l'altitude, mais il ne remplace jamais une montée progressive ni un bon itinéraire. Son utilisation doit impérativement être discutée avec un médecin avant le départ.

Il est également conseillé d'emporter des médicaments de base comme des antalgiques pour les maux de tête, des traitements contre les troubles digestifs, ainsi que tous les médicaments personnels nécessaires. Une bonne préparation médicale consiste avant tout à savoir quand utiliser un médicament et quand ralentir ou se reposer.`,
  
  'first-aid': `Une trousse de premiers secours bien préparée est indispensable sur le Kilimandjaro. Les petits problèmes sont fréquents : ampoules, coupures, irritations, douleurs musculaires ou coups de soleil. Sans soins rapides, ces désagréments peuvent rapidement devenir handicapants en altitude.

La trousse doit contenir des pansements, des désinfectants, des bandages, des protections contre les ampoules, une crème solaire et des produits pour soulager les douleurs musculaires. Une trousse médicale bien pensée permet de rester autonome et de continuer l'ascension dans de bonnes conditions.`,
  
  vaccines: `Avant un voyage en Tanzanie pour le Kilimandjaro, il est important de vérifier que les vaccins de base sont à jour. Selon le profil du voyageur et les recommandations médicales, certains vaccins peuvent être conseillés. Cette démarche fait partie intégrante de la préparation médicale globale.

La prévention des maladies passe également par des règles simples d'hygiène, une attention particulière à l'eau et à l'alimentation, ainsi qu'une protection contre les moustiques avant et après l'ascension. Même si le trek se déroule en altitude, la préparation médicale commence bien avant d'arriver sur la montagne.`,
  
  hydration: `L'hydratation est un pilier essentiel de la préparation médicale au Kilimandjaro. En altitude, le corps se déshydrate plus rapidement, ce qui peut accentuer les symptômes du mal des montagnes et ralentir la récupération. Boire régulièrement, même sans sensation de soif, est indispensable.

L'alimentation joue également un rôle clé. Des repas équilibrés et riches en glucides aident à maintenir l'énergie nécessaire pour marcher plusieurs heures par jour. Une bonne hygiène alimentaire avant et pendant l'ascension permet de limiter les troubles digestifs, fréquents en trekking.`
};

const EN_TITLES: Record<string,string> = {
  overview: 'What medical preparation is needed before Kilimanjaro?',
  'medical-check': 'Get a medical check before departure',
  'understand-risks': 'Understand altitude-related risks',
  medications: 'Useful medications',
  'first-aid': 'Prepare an appropriate first-aid kit',
  vaccines: 'Vaccines and prevention',
  hydration: 'Hydration and nutrition'
};

const EN_SECTIONS: Record<string,string> = {
  overview: `Medical preparation is essential. Even experienced trekkers should check their health before departure.`,
  'medical-check': `See a doctor, especially if you have cardiac, pulmonary or chronic conditions.`,
  'understand-risks': `Acute mountain sickness can appear from 3,000 meters; know the symptoms.`,
  medications: `Acetazolamide may help but must be prescribed; bring painkillers and treatments for digestive issues.`,
  'first-aid': `Pack bandages, disinfectant, blister protection and other basics.`,
  vaccines: `Ensure routine vaccines are up to date and follow medical advice.`,
  hydration: `Drink regularly and favor carbohydrate-rich meals.`
};

function render(c:string, locale: string){
  // Add markers for terms we want to link
  const processedContent = c
    .replace(/\baltitude\b/g, '###ALTITUDE_LINK###')
    .replace(/\bmal aigu des montagnes\b/gi, '###MAM_LINK###')
    .replace(/\bacclimatation\b/g, '###ACCLIMATATION_LINK###')
    .replace(/\bhydratation\b/g, '###HYDRATATION_LINK###');
  
  return processedContent.split('\n\n').map((b,i)=> {
    if (b.trim().startsWith('>')) {
      // Process blockquotes for links
      const processedBlock = b.replace(/^>\s?/, '')
        .replace(/###ALTITUDE_LINK###/g, `<a href="/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</a>`)
        .replace(/###MAM_LINK###/g, `<a href="/${locale}/travel-blogs/sante-en-altitude" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">mal aigu des montagnes</a>`)
        .replace(/###ACCLIMATATION_LINK###/g, `<a href="/${locale}/travel-blogs/acclimatation-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">acclimatation</a>`)
        .replace(/###HYDRATATION_LINK###/g, `<a href="/${locale}/travel-blogs/sommeil-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">hydratation</a>`);
      
      return <blockquote key={i} className="pl-4 border-l-4 italic text-black" dangerouslySetInnerHTML={{__html: processedBlock}}></blockquote>;
    } else {
      // Process paragraphs for links
      const processedParagraph = b
        .replace(/###ALTITUDE_LINK###/g, `<a href="/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</a>`)
        .replace(/###MAM_LINK###/g, `<a href="/${locale}/travel-blogs/sante-en-altitude" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">mal aigu des montagnes</a>`)
        .replace(/###ACCLIMATATION_LINK###/g, `<a href="/${locale}/travel-blogs/acclimatation-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">acclimatation</a>`)
        .replace(/###HYDRATATION_LINK###/g, `<a href="/${locale}/travel-blogs/sommeil-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">hydratation</a>`);
      
      return <p key={i} className="my-4 text-black" dangerouslySetInnerHTML={{__html: processedParagraph}}></p>;
    }
  });
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
          <AuthorMeta author={currentLocale === 'fr' ? 'Médecin de trek' : 'Trek Medic'} date={currentLocale === 'fr' ? 'Décembre 2025' : 'December 2025'} />
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
                <p className="text-base md:text-lg text-black max-w-3xl">{currentLocale === 'fr' ? 'Conseils médicaux pratiques avant le trek.' : 'Practical medical advice before the trek.'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-black">
                {sections.map(s => (
                  <article key={s.id} id={s.id} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-black">{s.title}</h2>
                    <div className="prose max-w-none text-black" style={{ whiteSpace: 'pre-wrap' }}>{render(s.content, currentLocale)}</div>
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