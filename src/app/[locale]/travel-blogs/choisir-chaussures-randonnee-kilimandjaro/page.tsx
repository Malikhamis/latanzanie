import Link from 'next/link'
import '../../../tailgrid.css'
import { getTranslations } from 'next-intl/server'
import TopicCard from '@/components/ui/TopicCard'
import ClientWrapper from './ClientWrapper'

const ids = ['overview','terrain','high-cut','comfort','sole','waterproof','test-shoes','season']

const FR_TITLES: Record<string,string> = {
  overview: 'Comment choisir ses chaussures de randonnée pour le Kilimandjaro ?',
  terrain: 'Des chaussures adaptées aux terrains variés du Kilimandjaro',
  'high-cut': 'Pourquoi choisir des chaussures de randonnée montantes',
  comfort: 'Le confort avant tout pour réussir l’ascension',
  sole: 'L’importance de la semelle',
  waterproof: 'Chaussures imperméables et respirantes',
  'test-shoes': 'L’importance de tester ses chaussures avant le trek',
  season: 'Adapter ses chaussures à la saison et à l’itinéraire'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `Choisir les bonnes chaussures de randonnée pour le Kilimandjaro est une étape essentielle dans la préparation de l’ascension. Le Mont Kilimandjaro est une montagne exigeante qui traverse plusieurs zones climatiques et types de terrains. Une paire de chaussures mal adaptée peut provoquer des douleurs, des ampoules, des blessures ou une fatigue excessive, mettant en danger la réussite du sommet. À l’inverse, des chaussures de randonnée adaptées au Kilimandjaro assurent confort, stabilité et sécurité.

En tant que guide local du Kilimandjaro, je constate régulièrement que le mauvais choix de chaussures est l’une des principales causes d’abandon ou de souffrance inutile pendant l’ascension.`,
  terrain: `Le Kilimandjaro n’est pas une simple randonnée. Les sentiers traversent la forêt tropicale humide, les zones volcaniques sèches, les pentes rocailleuses et les zones froides proches du sommet. Les chaussures de randonnée pour le Kilimandjaro doivent donc offrir une excellente adhérence, une bonne protection du pied et une grande stabilité. Les terrains peuvent être boueux, glissants ou poussiéreux selon la saison, ce qui rend indispensable une semelle de qualité avec une accroche fiable.`,
  'high-cut': `Les chaussures de randonnée montantes sont fortement recommandées pour l’ascension du Kilimandjaro. Elles maintiennent efficacement la cheville, ce qui réduit le risque d’entorses, notamment lors des longues descentes où les articulations sont très sollicitées. Le maintien de la cheville est particulièrement important lorsque la fatigue s’installe et que le terrain devient irrégulier. Les chaussures montantes protègent également mieux contre le froid et les frottements.`,
  comfort: `Sur le Kilimandjaro, la priorité n’est pas la vitesse mais l’endurance. Les chaussures doivent être confortables sur de longues journées de marche, parfois plus de six heures par jour. Il est essentiel de choisir des chaussures de randonnée qui s’adaptent à la forme du pied et qui offrent suffisamment d’espace à l’avant, car les pieds gonflent avec l’effort et l’altitude. Une chaussure trop serrée peut provoquer des ampoules, des ongles noirs et des douleurs qui s’aggravent jour après jour.`,
  sole: `La semelle est un élément clé dans le choix des chaussures pour le Kilimandjaro. Elle doit être suffisamment rigide pour protéger la plante du pied des pierres et des terrains volcaniques, tout en restant confortable pour la marche prolongée. Une bonne absorption des chocs limite la fatigue musculaire et protège les genoux, surtout lors des descentes longues et raides. Une semelle avec une excellente adhérence est indispensable pour marcher en sécurité sur sol humide ou instable.`,
  waterproof: `Les conditions météorologiques sur le Kilimandjaro peuvent changer rapidement. Dans la forêt, la pluie et l’humidité sont fréquentes, tandis qu’en altitude, le froid est intense. Des chaussures de randonnée imperméables permettent de garder les pieds secs et d’éviter les ampoules et les infections. Toutefois, elles doivent aussi être respirantes pour éviter l’accumulation de transpiration pendant l’effort. Un bon équilibre entre imperméabilité et respirabilité garantit un confort durable tout au long du trek.`,
  'test-shoes': `Partir avec des chaussures neuves est une erreur fréquente. Les chaussures de randonnée pour le Kilimandjaro doivent être testées et rodées plusieurs semaines avant le départ. Il est recommandé de les porter lors de randonnées longues, avec un sac à dos, afin de s’assurer qu’elles ne provoquent pas de frottements ou de douleurs. Des chaussures bien rodées réduisent considérablement le risque de blessures pendant l’ascension.`,
  season: `La saison et l’itinéraire choisis influencent fortement le type de chaussures nécessaires. En saison froide ou lors de l’ascension du sommet, les températures peuvent descendre très bas, rendant indispensable une bonne isolation thermique. Certains itinéraires du Kilimandjaro sont plus longs ou plus techniques et nécessitent des chaussures plus robustes. Un guide local expérimenté saura conseiller le modèle le mieux adapté en fonction des conditions.`
}

const EN_TITLES: Record<string,string> = {
  overview: "How to choose hiking boots for Kilimanjaro",
  terrain: 'Adapt shoes for Kilimanjaro’s varied terrain',
  'high-cut': 'Why high-cut hiking boots',
  comfort: 'Comfort first',
  sole: 'Importance of the sole',
  waterproof: 'Waterproof yet breathable',
  'test-shoes': 'Break in your boots before the trek',
  season: 'Match shoes to season and route'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Choosing the right hiking boots is essential for Kilimanjaro. The mountain covers many terrains and climates.`,
  terrain: `Boots must offer grip, protection and stability across forest, volcanic rock and near-summit scree.`,
  'high-cut': `High-cut boots support the ankle and reduce sprain risk, especially on long descents.`,
  comfort: `Prioritise comfort for long daily walking; allow room for foot swelling.`,
  sole: `A stiff sole protects the foot and absorbs shock, helping knees on descents.`,
  waterproof: `Waterproofing prevents wet feet but choose breathable models to avoid excess sweat.`,
  'test-shoes': `Break in boots on long hikes with your pack several weeks before departure.`,
  season: `Select boots considering season and route; local guides can advise.`
}

export default async function ShoesPage({ params }: { params: Promise<{ locale?: string }> }) {
  const awaitedParams = await params;
  const locale = awaitedParams?.locale || 'fr'
  const t = await getTranslations({ locale, namespace: 'BlogPosts.choisir-chaussures-randonnee-kilimandjaro' })
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

      <ClientWrapper
        locale={locale}
        sections={sections}
        FR_TITLES={FR_TITLES}
        EN_TITLES={EN_TITLES}
        FR_SECTIONS={FR_SECTIONS}
        EN_SECTIONS={EN_SECTIONS}
      />

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
