"use client"

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import TopicCard from '@/components/ui/TopicCard'

const ids = ['overview','role-guide','safety','logistics','morale','culture','economy','mam-role']

const FR_TITLES: Record<string,string> = {
  overview: 'Pourquoi engager un guide local est essentiel pour gravir le Kilimandjaro',
  'role-guide': 'Le rôle du guide au quotidien',
  safety: 'Sécurité avant tout',
  logistics: 'Gestion logistique et confort',
  morale: 'Soutien moral et motivation',
  culture: 'Découverte culturelle et environnementale',
  economy: 'Soutien à l’économie locale',
  'mam-role': 'Le rôle du guide face au mal aigu des montagnes'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Gravir le Mont Kilimandjaro est bien plus qu’une simple randonnée. C’est une aventure qui met à l’épreuve le corps, le mental et l’organisation de chacun. Même pour les randonneurs les plus expérimentés, les conditions de haute altitude, les changements climatiques soudains et l’effort prolongé peuvent transformer l’ascension en véritable défi. Dans ce contexte, la présence d’un guide local expérimenté n’est pas un luxe, c’est une nécessité.

Un guide local ne se contente pas de montrer le chemin. Il agit comme un protecteur, un conseiller, un motivateur et un passeur de culture, tout en apportant une sécurité et un soutien inestimables. Pour ceux qui rêvent d’atteindre Uhuru Peak, engager un guide local transforme une aventure difficile en expérience mémorable et sécurisée.`,

  'role-guide': `La sécurité avant tout

L’altitude et les conditions météorologiques sur le Kilimandjaro présentent des risques réels. Le mal aigu des montagnes peut apparaître dès 3 000 mètres, provoquant maux de tête, fatigue intense, nausées et vertiges. Les changements brusques de température, le vent et les terrains accidentés ajoutent à la difficulté.

Le guide local, grâce à son expérience, sait repérer les signes précoces de ces problèmes et peut prendre des décisions vitales pour la santé du groupe. Il ajuste le rythme de marche, propose des journées d’acclimatation supplémentaires ou décide de faire redescendre un randonneur si nécessaire. Sa présence permet ainsi de minimiser les risques et de garantir que chaque participant puisse progresser en toute sécurité, étape après étape.`,

  safety: `Une connaissance profonde des itinéraires

Le Kilimandjaro propose plusieurs itinéraires, chacun avec ses particularités. Machame et Lemosho sont réputés pour leur montée progressive qui favorise l’acclimatation, tandis que Rongai et Marangu sont souvent choisis pour leur approche plus directe. Chaque sentier traverse des paysages différents, des forêts tropicales luxuriantes aux zones semi-désertiques en altitude.

Le guide local connaît non seulement le tracé des sentiers, mais aussi les zones les plus exposées au vent ou aux intempéries, les points de repos stratégiques et les lieux où la vue sur le Kilimandjaro est la plus spectaculaire. Cette expertise permet de choisir l’itinéraire le plus adapté à la condition physique et au rythme du groupe, en maximisant les chances d’atteindre le sommet tout en profitant pleinement du trek.`,

  logistics: `Gestion logistique et confort

L’ascension du Kilimandjaro ne se résume pas à marcher. Chaque jour demande une gestion minutieuse du matériel, de la nourriture, de l’eau et de la sécurité du groupe. Le guide local organise le transport du matériel, supervise les porteurs et s’assure que chaque randonneur dispose de l’équipement nécessaire.

En prenant en charge toute la logistique, le guide permet aux participants de se concentrer sur l’effort physique et l’acclimatation, tout en bénéficiant d’un confort maximal malgré les conditions difficiles. La planification des étapes, des repas et des camps devient ainsi fluide et efficace, transformant l’expérience en une aventure agréable et sécurisée.`,

  morale: `Soutien moral et motivation

Le Kilimandjaro peut être éprouvant : longues journées de marche, nuits froides, effort continu et altitude qui pèse sur le corps. Le guide local joue un rôle clé pour maintenir la motivation et le moral du groupe. Par ses encouragements, ses conseils et sa connaissance de la montagne, il aide chaque randonneur à garder confiance en soi et à surmonter les moments de doute ou de fatigue.

Cette dimension psychologique est souvent sous-estimée, mais elle est essentielle. Atteindre le sommet n’est pas seulement une question de force physique : il faut aussi savoir gérer le mental, et le guide local est le meilleur allié pour cela.`,

  culture: `Découverte culturelle et environnementale

Au-delà de la sécurité et de la motivation, le guide local enrichit l’expérience du trek. Il partage ses connaissances sur la faune et la flore du Kilimandjaro, raconte l’histoire et la culture des populations locales et transmet les traditions et légendes liées à la montagne.

Grâce à lui, chaque randonnée devient une immersion complète, où l’on découvre non seulement la beauté du paysage, mais aussi la richesse culturelle et historique de la région. Cela transforme l’ascension en un voyage à la fois physique, émotionnel et intellectuel.`,

  economy: `Soutien à l’économie locale

Engager un guide local a un impact direct sur l’économie de la région. Les guides, porteurs et équipes locales dépendent du tourisme pour vivre. Chaque trek finance des salaires, nourrit des familles et soutient des communautés entières.

En choisissant un guide local, vous participez à la création d’emplois durables, à la formation professionnelle et à la préservation culturelle et environnementale. Votre ascension devient ainsi un acte responsable qui bénéficie à toute la région.`,

  'mam-role': `Le rôle du guide face au mal aigu des montagnes

Le mal aigu des montagnes (MAM) est la principale menace pour les randonneurs en altitude. Chaque corps réagit différemment : certains peuvent ressentir des symptômes dès 3 000 mètres, tandis que d’autres supportent mieux l’altitude. Le guide local joue un rôle crucial en surveillant quotidiennement l’état de santé des participants, en détectant rapidement les signes de MAM et en prenant les mesures nécessaires pour prévenir les complications.

Son expertise permet de réguler le rythme de marche, de décider des pauses ou d’une descente si nécessaire, et de prodiguer les premiers soins. Grâce à lui, chaque randonneur progresse en toute sécurité et maximise ses chances d’atteindre le sommet.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'Why hiring a local guide is essential for Kilimanjaro',
  'role-guide': 'The guide’s daily role',
  safety: 'Safety first',
  logistics: 'Logistics and comfort management',
  morale: 'Moral support and motivation',
  culture: 'Cultural and environmental discovery',
  economy: 'Support to the local economy',
  'mam-role': 'Guide’s role regarding acute mountain sickness'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `A local guide is more than a pathfinder: they protect, advise and ensure safety.`,
  'role-guide': `The guide accompanies the group, monitors health and adapts the pace.`,
  safety: `They make decisions to slow the pace, add acclimatization days or descend when needed.`,
  logistics: `They organise gear, food and supervise porters to keep the group comfortable.`,
  morale: `Guides provide encouragement and help maintain motivation during hard moments.`,
  culture: `They share knowledge about local flora, fauna, history and traditions.`,
  economy: `Hiring guides supports local livelihoods and sustainable employment.`,
  'mam-role': `Guides spot early MAM signs and act quickly with appropriate measures.`
}

function render(c:string){return c.split('\n\n').map((b,i)=> b.trim().startsWith('>') ? <blockquote key={i} className="pl-4 border-l-4 italic text-black">{b.replace(/^>\s?/,'')}</blockquote> : <p key={i} className="my-4 text-black">{b}</p>)}

export default function GuideLocalPage({ params }: { params: { locale?: string } }) {
  const locale = useLocale() || params?.locale || 'fr'
  const t = useTranslations('BlogPosts.engager-guide-local-kilimandjaro')
  const sections = ids.map((id) => ({
    id,
    title: locale === 'fr' ? FR_TITLES[id] || EN_TITLES[id] : EN_TITLES[id] || FR_TITLES[id],
    content: locale === 'fr' ? FR_SECTIONS[id] || EN_SECTIONS[id] : EN_SECTIONS[id] || FR_SECTIONS[id]
  }))

  return (
    <div className="min-h-screen bg-white">
      <section className="relative hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/preparation-hero.jpg')" }}>
        <div className="absolute inset-0 -z-10">
          <img src="/images/preparation-hero.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-white mb-6 inline-flex items-center text-sm font-medium">← {locale === 'fr' ? 'Retour aux blogs' : 'Back to blogs'}</Link>
        </div>
      </section>

      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={locale === 'fr' ? 'Guide Local' : 'Local Guide'} date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'} />
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
                <p className="text-base md:text-lg text-black max-w-3xl">{locale === 'fr' ? 'Pourquoi un guide local change tout pour votre ascension.' : 'Why a local guide makes all the difference for your ascent.'}</p>
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
