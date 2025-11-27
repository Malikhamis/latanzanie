"use client"

import { useState } from 'react'
import { Search, Clock, Star, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Faq from '@/components/ui/faq'

// Adventure trips data
const adventureTrips = [
  {
    id: 1,
    title: "Grimper le Kilimandjaro",
    slug: "climb-kilimanjaro",
    image: "/images/kilimanjaro-group.jpg",
    price: 2890,
    rating: 5.0,
    duration: "9 - 11 jours",
    description: "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !"
  },
  {
    id: 2,
    title: "Safari en Tanzanie",
    slug: "tanzania-safari",
    image: "/images/tanzania-safari-header.jpg",
    price: 1295,
    rating: 5.0,
    duration: "2 - 9 jours",
    description: "La Tanzanie est sans doute le meilleur pays au monde pour le safari de grands animaux. Elle abrite le Big Five ainsi que la Grande Migration !"
  },
  {
    id: 3,
    title: "Escalade au Népal",
    slug: "nepal-peak-climbing",
    image: "/images/island-peak-nepal.jpg",
    price: 3390,
    rating: 5.0,
    duration: "17 - 19 jours",
    description: "Relevez le défi d'escalader un ou plusieurs sommets majestueux et enneigés du Népal avec nous."
  },
  {
    id: 4,
    title: "Trek au camp de base de l'Everest",
    slug: "everest-base-camp-trek",
    image: "/images/everest-base-camp-ours.jpg",
    price: 1790,
    rating: 5.0,
    duration: "13 - 20 jours",
    description: "Relevez le défi de trekker jusqu'au camp de base le plus célèbre du monde ! Vous logerez dans des villages sherpas traditionnels et marcherez parmi les dieux de la montagne."
  },
  {
    id: 5,
    title: "Circuit de l'Annapurna",
    slug: "annapurna-circuit",
    image: "/images/annapurna-circuit-trekker.jpg",
    price: 1590,
    rating: 5.0,
    duration: "13 - 16 jours",
    description: "Rejoignez-nous pour un trek exigeant dans la puissante chaîne de montagnes de l'Annapurna et rencontrez des communautés isolées et diverses suivant des traditions centenaires."
  },
  {
    id: 6,
    title: "Trekking à Machu Picchu",
    slug: "machu-picchu-trekking",
    image: "/images/machu-picchu-peru.jpg",
    price: 1990,
    rating: 5.0,
    duration: "1 - 8 jours",
    description: "La région de Machu Picchu offre des treks multijours exigeants et incroyablement pittoresques dans les magnifiques Andes."
  },
  {
    id: 7,
    title: "Explorer le Pérou",
    slug: "explore-peru",
    image: "/images/capybara-amazon-peru.jpg",
    price: 485,
    rating: 5.0,
    duration: "3 - 5 jours",
    description: "Voyagez vers des destinations passionnantes comme la forêt amazonienne et explorez ce pays de grande beauté et diversité !"
  },
  {
    id: 8,
    title: "Trekking chez les gorilles au Rwanda",
    slug: "gorilla-trekking-rwanda",
    image: "/images/gorilla-rwanda-closeup.jpg",
    price: 3600,
    rating: 5.0,
    duration: "4 - 10 jours",
    description: "Le Rwanda est un petit pays qui recèle de nombreux trésors. L'un de ces trésors est sa population de gorilles de montagne en voie de disparition."
  },
  {
    id: 9,
    title: "Trekking chez les gorilles en Ouganda",
    slug: "gorilla-trekking-uganda",
    image: "/images/gorilla-uganda-mother.jpg",
    price: 3590,
    rating: 5.0,
    duration: "5 - 14 jours",
    description: "Visitez l'Ouganda, la Perle de l'Afrique, où vivent des gorilles de montagne en voie de disparition dans la jungle brumeuse."
  },
  {
    id: 10,
    title: "Safari au Kenya",
    slug: "kenya-safari",
    image: "/images/leopard-kenya.jpg",
    price: 2270,
    rating: 5.0,
    duration: "7 - 13 jours",
    description: "Le Kenya offre des safaris exaltants et de classe mondiale pour tous ceux qui souhaitent voir beaucoup d'animaux, y compris le Big Five et les troupeaux de la Grande Migration !"
  },
  {
    id: 11,
    title: "Découvrir le Bhoutan",
    slug: "discover-bhutan",
    image: "/images/tiger-nest-bhutan.jpg",
    price: 2990,
    rating: 5.0,
    duration: "8 - 17 jours",
    description: "Rejoignez-nous pour explorer les nombreuses merveilles naturelles et culturelles du Bhoutan montagneux, le Pays des Dragons du Tonnerre !"
  },
  {
    id: 12,
    title: "Circuit du Manaslu",
    slug: "manaslu-circuit",
    image: "/images/manaslu-circuit-woman.jpg",
    price: 2290,
    rating: 5.0,
    duration: "15 jours",
    description: "Le circuit du Manaslu avec un sommet au col Larkya est une véritable aventure de trekking himalayenne palpitante !"
  },
  {
    id: 13,
    title: "Grimper le Meru",
    slug: "climb-meru",
    image: "/images/meru-trekker.jpg",
    price: 1595,
    rating: 5.0,
    duration: "6 jours",
    description: "C'est une aventure multijours exaltante et exigeante qui vous emmène au bord du cratère du Meru (4 562 m) pour que vous puissiez regarder dans le cratère béant en contrebas."
  },
  {
    id: 14,
    title: "Vacances à Zanzibar",
    slug: "zanzibar-beach-holidays",
    image: "/images/zanzibar-woman.jpg",
    price: 2050,
    rating: 5.0,
    duration: "8 jours",
    description: "Les eaux calmes, les plages de sable blanc et la forêt luxuriante de Zanzibar offrent le parfait séjour tropical !"
  },
  {
    id: 15,
    title: "Merveilles de l'Islande",
    slug: "wonders-of-iceland",
    image: "/images/seljalandsfoss-iceland.jpg",
    price: 3195,
    rating: 5.0,
    duration: "9 jours",
    description: "Parcourez la route circulaire de l'Islande avec nous pour explorer cette nation insulaire unique et magnifiquement belle."
  },
  {
    id: 16,
    title: "Kayak en Suède",
    slug: "kayaking-sweden",
    image: "/images/kayaking-sweden.jpg",
    price: 1790,
    rating: 5.0,
    duration: "7 jours",
    description: "Une véritable aventure où nous faisons du kayak entre les îles pendant la journée, puis cuisinons sur des feux de camp et dormons sous les étoiles."
  },
  {
    id: 17,
    title: "Explorer le Sri Lanka",
    slug: "explore-sri-lanka",
    image: "/images/sigiriya-rock-sri-lanka.jpg",
    price: 1980,
    rating: 5.0,
    duration: "11 jours",
    description: "Le Sri Lanka est un joyau d'île, offrant un éventail stupéfiant de paysages et d'activités d'aventure ainsi que de nombreux sites historiques fascinants."
  }
]

// FAQ data
const faqs = [
  {
    question: "Organisez-vous des voyages d'aventure pour les familles ?",
    answer: "Oui — nous organisons des voyages adaptés aux familles, avec des itinéraires modulables pour enfants et adultes. Contactez-nous pour adapter un programme à votre groupe."
  },
  {
    question: "Organisez-vous des lunes de miel d'aventure ?",
    answer: "Absolument — nous créons des itinéraires romantiques et d'aventure sur mesure pour les lunes de miel, incluant hébergements confortables et expériences privées."
  },
  {
    question: "Proposez-vous des circuits touristiques d'aventure à petit prix ?",
    answer: "Nous proposons des options budget et des départs groupés pour réduire les coûts sans compromettre la qualité et la sécurité. Contactez l'équipe pour un devis."
  },
  {
    question: "Quelle est la taille typique d'un groupe ?",
    answer: "Nos groupes varient généralement entre 6 et 12 personnes, selon l'itinéraire. Pour des voyages privés, nous proposons également des départs sur mesure."
  }
]

export default function SeeTripsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Only show trips that are in Tanzania or Zanzibar
  const allowedSlugs = [
    'climb-kilimanjaro',
    'tanzania-safari',
    'zanzibar-beach-holidays',
    'climb-meru'
  ]

  const visibleTrips = adventureTrips.filter(trip => allowedSlugs.includes(trip.slug))

  // Filter trips based on search term (applies to the visible subset)
  const filteredTrips = visibleTrips.filter(trip =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Simplified without video background */}
      <section className="relative bg-gradient-to-r from-[#5BC4AF] to-[#008576] py-24 md:py-20 mt-16 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">
              Voyages d'aventure
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
              Des voyages d'aventure sur mesure conçus par des voyageurs passionnés
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des voyages d'aventure..."
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Adventure Trips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip) => (
              <Link 
                key={trip.id} 
                href={`/trips/${trip.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      {trip.title}
                    </h3>
                    <span className="text-lg font-bold text-gray-800">
                      À partir de {trip.price} $
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {trip.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-1 text-sm font-medium text-gray-800">
                        ({trip.rating})
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {trip.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredTrips.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Aucun voyage d'aventure trouvé correspondant à votre recherche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            FAQ
          </h2>
          
          <Faq items={faqs} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-marangu.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            Si vous aimez voyager,
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            rejoignez notre newsletter
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Recevez les dernières nouvelles sur les joyaux d'aventure cachés, les voyages de lancement à prix réduit et bien plus encore directement dans votre boîte de réception
          </p>
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
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}