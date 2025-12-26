"use client"

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopicCard from '@/components/ui/TopicCard'

const ids = ['overview','medical-check','understand-risks','medications','first-aid','vaccines','hydration']

const FR_TITLES: Record<string,string> = {
  overview: 'Quelle préparation médicale faut-il prévoir avant le Kilimandjaro ?',
  'medical-check': 'Faire un bilan médical avant le départ',
  'understand-risks': 'Comprendre les risques liés à l’altitude',
  medications: 'Les médicaments utiles',
  'first-aid': 'Préparer une trousse de premiers secours',
  vaccines: 'Les vaccins et prévention',
  hydration: 'Hydratation et alimentation'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `La préparation médicale est un élément fondamental de la réussite de l’ascension du Mont Kilimandjaro. Beaucoup de randonneurs se concentrent principalement sur l’entraînement physique ou le choix du matériel, mais sous-estiment l’impact de l’altitude, du froid, de la fatigue accumulée et de l’isolement sur le corps humain. Pourtant, ces facteurs mettent l’organisme à rude épreuve pendant plusieurs jours consécutifs.

Une bonne préparation médicale permet d’anticiper les risques, de reconnaître rapidement les signaux d’alerte et d’éviter que de petits problèmes ne deviennent de véritables dangers en altitude. En tant que guide local du Kilimandjaro, je constate chaque saison que les randonneurs correctement préparés sur le plan médical supportent mieux l’altitude, récupèrent plus facilement et augmentent nettement leurs chances d’atteindre le sommet en bonne santé.`,

  'medical-check': `Avant de se lancer dans l’ascension du Kilimandjaro, il est vivement recommandé de consulter un médecin. Cette étape est particulièrement importante pour les personnes ayant des antécédents cardiaques, pulmonaires, de l’hypertension, de l’asthme ou toute autre maladie chronique. Le médecin peut évaluer la capacité du corps à supporter l’effort prolongé, le manque d’oxygène en altitude et les variations importantes de température.

Ce bilan médical permet également de discuter des limites personnelles, d’adapter le rythme de l’ascension et de recevoir des conseils personnalisés. Même pour les personnes jeunes et sportives, une consultation médicale est une précaution essentielle avant un trek en haute altitude comme le Kilimandjaro.`,

  'understand-risks': `L’altitude représente le principal défi médical du Kilimandjaro. À partir de 3 000 mètres, la diminution de l’oxygène peut provoquer le mal aigu des montagnes. Les symptômes les plus courants sont les maux de tête, les nausées, la fatigue inhabituelle, les étourdissements et les troubles du sommeil.

Se préparer médicalement signifie comprendre que ces symptômes peuvent apparaître même chez des personnes en excellente forme physique. C’est pourquoi la montée progressive, le respect du rythme lent « pole pole » et les journées d’acclimatation sont essentiels. Une bonne information permet de rester calme, de ne pas paniquer et d’agir correctement si les premiers signes apparaissent.`,

  medications: `Certains médicaments peuvent faire partie de la préparation médicale, mais ils ne doivent jamais être pris à la légère. L’acétazolamide est parfois prescrit pour aider à l’acclimatation à l’altitude, mais il ne remplace jamais une montée progressive ni un bon itinéraire. Son utilisation doit impérativement être discutée avec un médecin avant le départ.

Il est également conseillé d’emporter des médicaments de base comme des antalgiques pour les maux de tête, des traitements contre les troubles digestifs, ainsi que tous les médicaments personnels nécessaires. Une bonne préparation médicale consiste avant tout à savoir quand utiliser un médicament et quand ralentir ou se reposer.`,

  'first-aid': `Une trousse de premiers secours bien préparée est indispensable sur le Kilimandjaro. Les petits problèmes sont fréquents : ampoules, coupures, irritations, douleurs musculaires ou coups de soleil. Sans soins rapides, ces désagréments peuvent rapidement devenir handicapants en altitude.

La trousse doit contenir des pansements, des désinfectants, des bandages, des protections contre les ampoules, une crème solaire et des produits pour soulager les douleurs musculaires. Une trousse médicale bien pensée permet de rester autonome et de continuer l’ascension dans de bonnes conditions.`,

  vaccines: `Avant un voyage en Tanzanie pour le Kilimandjaro, il est important de vérifier que les vaccins de base sont à jour. Selon le profil du voyageur et les recommandations médicales, certains vaccins peuvent être conseillés. Cette démarche fait partie intégrante de la préparation médicale globale.

La prévention des maladies passe également par des règles simples d’hygiène, une attention particulière à l’eau et à l’alimentation, ainsi qu’une protection contre les moustiques avant et après l’ascension. Même si le trek se déroule en altitude, la préparation médicale commence bien avant d’arriver sur la montagne.`,

  hydration: `L’hydratation est un pilier essentiel de la préparation médicale au Kilimandjaro. En altitude, le corps se déshydrate plus rapidement, ce qui peut accentuer les symptômes du mal des montagnes et ralentir la récupération. Boire régulièrement, même sans sensation de soif, est indispensable.

L’alimentation joue également un rôle clé. Des repas équilibrés et riches en glucides aident à maintenir l’énergie nécessaire pour marcher plusieurs heures par jour. Une bonne hygiène alimentaire avant et pendant l’ascension permet de limiter les troubles digestifs, fréquents en trekking.`,
}

const EN_TITLES: Record<string,string> = {
  overview: 'What medical preparation is needed before Kilimanjaro?',
  'medical-check': 'Get a medical check before departure',
  'understand-risks': 'Understand altitude-related risks',
  medications: 'Useful medications',
  'first-aid': 'Prepare an appropriate first-aid kit',
  vaccines: 'Vaccines and prevention',
  hydration: 'Hydration and nutrition'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Medical preparation is essential. Even experienced trekkers should check their health before departure.`,
  'medical-check': `See a doctor, especially if you have cardiac, pulmonary or chronic conditions.`,
  'understand-risks': `Acute mountain sickness can appear from 3,000 meters; know the symptoms.`,
  medications: `Acetazolamide may help but must be prescribed; bring painkillers and treatments for digestive issues.`,
  'first-aid': `Pack bandages, disinfectant, blister protection and other basics.`,
  vaccines: `Ensure routine vaccines are up to date and follow medical advice.`,
  hydration: `Drink regularly and favor carbohydrate-rich meals.`
}

function render(c:string){return c.split('\n\n').map((b,i)=> b.trim().startsWith('>') ? <blockquote key={i} className="pl-4 border-l-4 italic text-black">{b.replace(/^>\s?/,'')}</blockquote> : <p key={i} className="my-4 text-black">{b}</p>)}

export default function MedicalPrepPage({ params }: { params: { locale?: string } }) {
  const locale = useLocale() || params?.locale || 'fr'
  const t = useTranslations('BlogPosts.preparation-medicale-kilimandjaro')
  const sections = ids.map((id) => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] || EN_TITLES[id] : EN_TITLES[id] || FR_TITLES[id],
    content: locale === 'fr' ? FR_SECTIONS[id] || EN_SECTIONS[id] : EN_SECTIONS[id] || FR_SECTIONS[id]
  }))

  return (
    <div className="min-h-screen bg-white">
      <section className="relative hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero5.jpg')" }}>
        <div className="absolute inset-0 -z-10">
          <img src="/images/hero5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-white mb-6 inline-flex items-center text-sm font-medium">← {locale === 'fr' ? 'Retour aux blogs' : 'Back to blogs'}</Link>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={locale === 'fr' ? 'Médecin de trek' : 'Trek Medic'} date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'} />
        </div>
      </section>

      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">{locale === 'fr' ? FR_TITLES.overview : EN_TITLES.overview}</h1>
                <p className="text-base md:text-lg text-black max-w-3xl">{locale === 'fr' ? 'Conseils médicaux pratiques avant le trek.' : 'Practical medical advice before the trek.'}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-black">
                {sections.map(s => (
                  <article key={s.id} id={s.id} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-black">{s.title}</h2>
                    <div className="prose max-w-none text-black" style={{ whiteSpace: 'pre-wrap' }}>{render(s.content)}</div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <h3 className="text-xl font-bold">Marangu Route</h3>
                <p className="text-gray-700 mb-4">Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours</p>
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium">En savoir plus</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Lemosho Route</h3>
                <p className="text-gray-700 mb-4">L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium">En savoir plus</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Umbwe Route</h3>
                <p className="text-gray-700 mb-4">L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)</p>
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium">En savoir plus</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
