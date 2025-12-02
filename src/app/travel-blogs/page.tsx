'use client'

import { useState } from 'react'
import { Search, Eye, Clock, Star, Users, MapPin, User } from 'lucide-react'
import Link from 'next/link'

// Blog categories data with detailed information
const blogCategories = [
  {
    id: 1,
    title: "Kilimanjaro Trekking",
    subtitle: "Travel Guide",
    image: "/images/african-safaris.jpg",
    description: "Trek Kilimanjaro – a once-in-a-lifetime adventure to the Roof of Africa. All you need to know.",
    topReads: [
      {
        id: 101,
        title: "The ultimate Kilimanjaro packing list (+ free PDF)",
        image: "/images/kilimanjaro-packing.jpg",
        description: "What you pack for your Kilimanjaro climb is vitally important to your health and the success of your trek. We've put together a comprehensive list of what to pack, and why. Please use this as a checklist in planning and packing for your Kili adventure."
      },
      {
        id: 102,
        title: "How much does it cost to trek Kilimanjaro?",
        image: "/images/kilimanjaro-cost.jpg",
        description: "A seven-day Kilimanjaro climb costs €1,800 with Latanzanieaucourdelanature. This price includes all of your food, camping equipment, and much more. Here's a breakdown of what's included in the price as well as the costs of any exclusions like your Tanzanian visa."
      },
      {
        id: 103,
        title: "Kilimanjaro vs Everest Base Camp: which is harder?",
        image: "/images/kilimanjaro-vs-everest.jpg",
        description: "Kilimanjaro and Everest Base Camp are two of the world's most famous and challenging high-altitude treks. But they're very different from one another. We discuss these differences and make the case that Kilimanjaro is the harder trek overall."
      }
    ],
    allTopics: [
      { 
        category: "Wildlife", 
        icon: "🐾",
        posts: [
          "What animals will I see on Kilimanjaro?"
        ] 
      },
      { 
        category: "Bucket list", 
        icon: "🏆",
        posts: [
          "Kilimanjaro and safari"
        ] 
      },
      { 
        category: "Mountain crew", 
        icon: "👥",
        posts: [
          "What is a Kilimanjaro tipping ceremony?",
          "Meet our awesome Kilimanjaro mountain crew",
          "Our Kilimanjaro porters receive first aid training"
        ] 
      },
      { 
        category: "Cost", 
        icon: "💰",
        posts: [
          "Must I tip my Kilimanjaro crew? And how much?",
          "How much does it cost to trek Kilimanjaro?",
          "Why prices differ so much between Kili operators"
        ] 
      },
      { 
        category: "Difficulty and training", 
        icon: "⚖️",
        posts: [
          "Is Kilimanjaro hard to climb?",
          "How hard is summit night on Kilimanjaro?",
          "What is the best training for Kilimanjaro?"
        ] 
      },
      { 
        category: "Hygiene", 
        icon: "🧼",
        posts: [
          "Toilets on Kilimanjaro",
          "6 tips for happy feet on Kilimanjaro",
          "Hygiene advice for women climbing Mt Kilimanjaro"
        ] 
      },
      { 
        category: "Gadgets and power", 
        icon: "📶",
        posts: [
          "What type of plugs do they use in Tanzania?",
          "Kilimanjaro now has internet! A good or bad thing?",
          "Does Kilimanjaro have cell reception and internet?"
        ] 
      },
      { 
        category: "Campsites", 
        icon: "🏕️",
        posts: [
          "Staying at Mandara Hut on Kilimanjaro",
          "Kilimanjaro Base Camp: Best Routes to the Summit",
          "Is staying at Kilimanjaro Crater Camp a good idea?"
        ] 
      },
      { 
        category: "Sustainable travel", 
        icon: "🌱",
        posts: [
          "Our team helps pick up litter on Kilimanjaro 💚",
          "Our crew attends a Leave No Trace workshop",
          "How to climb Kilimanjaro sustainably",
          "The 2023 Kilimanjaro cleanup is a massive success!"
        ] 
      },
      { 
        category: "Altitude safety", 
        icon: "⛰️",
        posts: [
          "All routes ranked in terms of acclimatisation",
          "Kilimanjaro altitude sickness",
          "Height of Kilimanjaro and altitude gain",
          "The best acclimatisation for climbing Kilimanjaro"
        ] 
      },
      { 
        category: "Packing list", 
        icon: "🎒",
        posts: [
          "What should I wear for summit night?",
          "The best hiking boots for Kilimanjaro",
          "The 3 kinds of socks you need for Kilimanjaro",
          "The best sleeping bags for Kilimanjaro",
          "The ultimate Kilimanjaro packing list (+ free PDF)"
        ] 
      },
      { 
        category: "Climate and seasons", 
        icon: "📅",
        posts: [
          "Best time to climb Kilimanjaro",
          "How cold is the summit of Kilimanjaro?",
          "Kilimanjaro full moon climbs",
          "When is there snow on the summit of Kilimanjaro?",
          "Mount Kilimanjaro's five surprising climate zones"
        ] 
      },
      { 
        category: "Advice and tips", 
        icon: "💡",
        posts: [
          "6 things I wish I knew before climbing Kilimanjaro",
          "5 bits of advice from past Kilimanjaro climbers",
          "The best sunrises and sunsets on Kilimanjaro",
          "7 tips for a successful Kilimanjaro summit night",
          "10 tips for climbing and summiting Mt Kilimanjaro"
        ] 
      },
      { 
        category: "Route comparisons", 
        icon: "⚖️",
        posts: [
          "Lemosho vs Northern Circuit",
          "Which is the best Kilimanjaro route?",
          "Lemosho vs Machame – a comparison of the routes",
          "7-day Lemosho vs 8-day Lemosho",
          "Machame vs Northern Circuit",
          "Which is the easiest Kilimanjaro route?"
        ] 
      },
      { 
        category: "Get excited", 
        icon: "🎉",
        posts: [
          "The best things to do after climbing Kilimanjaro",
          "The 10 best things to do in Kilimanjaro region",
          "The Barranco Wall on Kilimanjaro",
          "Climb Kilimanjaro and safari in Tanzania",
          "Discover the magic: Mount Kilimanjaro summit view",
          "What is it like to climb Kilimanjaro?",
          "Top 10 attractions in Tanzania"
        ] 
      },
      { 
        category: "Preparation", 
        icon: "📋",
        posts: [
          "The beginner's guide to climbing Kilimanjaro",
          "How to find the best Kilimanjaro tour operators",
          "10 things to know before climbing Kilimanjaro",
          "Asthma at high altitude: what you should know",
          "Join our free Kilimanjaro webinar",
          "Your 2025 Tanzania travel questions answered",
          "Sleeping on Kilimanjaro – all you need to know"
        ] 
      },
      { 
        category: "Safety", 
        icon: "🛡️",
        posts: [
          "How we keep you safe on Kilimanjaro",
          "Is climbing Mount Kilimanjaro dangerous?",
          "Can I take my child on a Kilimanjaro climb?",
          "Kilimanjaro safety – all you need to know",
          "Climbing Kilimanjaro? Get a medical checkup first!",
          "How long do you stay at the summit of Kilimanjaro?",
          "See our crew train as wilderness first responders"
        ] 
      },
      { 
        category: "Routes", 
        icon: "🛤️",
        posts: [
          "The Northern Circuit route on Kilimanjaro",
          "The seven different Kilimanjaro routes",
          "The Machame route on Kilimanjaro",
          "The Umbwe route on Kilimanjaro",
          "Why Uhuru Peak Should Be on Your Bucket List",
          "The Shira route on Kilimanjaro",
          "The Rongai route on Kilimanjaro",
          "The Lemosho route on Kilimanjaro",
          "The Marangu route on Kilimanjaro"
        ] 
      },
      { 
        category: "Client stories", 
        icon: "📖",
        posts: [
          "My New Year's Eve Kilimanjaro climb",
          "Kay Marie's journey to Kilimanjaro",
          "Climbing Kilimanjaro for Down syndrome",
          "7 things Kilimanjaro taught me",
          "Slow steps lead to big wins",
          "Arwa Mrad's Kilimanjaro journal",
          "Kilimanjaro on 35 mm",
          "Tash's Kilimanjaro journal",
          "Dwayne's Lemosho route Kilimanjaro journal"
        ] 
      },
      { 
        category: "General info", 
        icon: "❓",
        posts: [
          "Meaning of Kilimanjaro",
          "How long does it take to climb Mount Kilimanjaro?",
          "Kilimanjaro eruption: exploring its volcanic past",
          "Everything to know about Kilimanjaro National Park",
          "Top reasons to climb Kilimanjaro for charity",
          "Tanzania's ban on plastic bags",
          "Why summit Kilimanjaro at night?",
          "Where is Mount Kilimanjaro on a map?",
          "Climbing Mount Kilimanjaro FAQs (2025 list)",
          "10 interesting facts about Mount Kilimanjaro",
          "Where is Kilimanjaro?",
          "Who was the first person to summit Kilimanjaro?"
        ] 
      }
    ],
    trips: [
      {
        id: 201,
        title: "Lemosho Route",
        price: 2950,
        duration: "10 days",
        rating: 5.0,
        image: "/images/lemosho-route.jpg",
        description: "The Lemosho is one of our favourite routes up Kilimanjaro as it has varied and beautiful scenery. It also has a high summit success rate!"
      },
      {
        id: 202,
        title: "Northern Circuit",
        price: 3490,
        duration: "11 days",
        rating: 5.0,
        image: "/images/northern-circuit.jpg",
        description: "The Northern Circuit (also known as the Grand Traverse) is the newest route up Kilimanjaro and it has an excellent summit success rate!"
      },
      {
        id: 203,
        title: "Machame Route",
        price: 2890,
        duration: "9 days",
        rating: 5.0,
        image: "/images/machame-route.jpg",
        description: "The Machame is a beautiful and popular route. It's a middling route in terms of duration and difficulty."
      }
    ]
  },
  {
    id: 2,
    title: "The epic peak of mount Kilimanjaro",
    subtitle: "Kilimanjaro Trekking",
    image: "/images/kilimanjaro.jpg"
  },
  {
    id: 3,
    title: "Moorland zone with trekker on Mt Meru in Tanzania",
    subtitle: "Mount Meru climb",
    image: "/images/mount-meru.jpg"
  },
  {
    id: 4,
    title: "Les 7 Voies d'Ascension du Kilimandjaro : Analyse Complète, Comparée et Conseils d'Expert Local",
    subtitle: "Kilimandjaro Routes",
    image: "/images/kilimanjaro.jpg",
    description: "Analyse complète des 7 voies d'ascension : Machame, Marangu, Lemosho, Umbwe et plus. Comparaisons détaillées, conseils d'expert et profils d'acclimatation.",
    isRoutesPage: true
  }
]

export default function TravelBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter categories based on search term
  const filteredCategories = blogCategories.filter(category => 
    category.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Get the first category for detailed display (Kilimanjaro Trekking)
  const firstCategory = blogCategories[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Knowledge Library
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Learn before you travel. The Latanzanieaucourdelanature travel library is the ultimate resource for planning your trip. Our goal is to give every traveller a feeling of security before they set off.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search travel topics..."
                className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Choose a topic
          </h2>

          {/* Blog Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => {
              // Determine the link destination
              const linkHref = category.isRoutesPage 
                ? '/travel-blogs/kilimanjaro-routes'
                : `/travel-blogs/${category.id}`;

              return (
                <div 
                  key={category.id} 
                  className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative h-80"
                >
                  {/* Full background image */}
                  <div className="absolute inset-0 bg-gray-200">
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  
                  {/* Content overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 bg-black bg-opacity-40 text-white">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                      <p className="text-[#A0E7D8] font-medium mb-3">{category.subtitle}</p>
                      {category.description && (
                        <p className="text-gray-100 text-sm line-clamp-3">{category.description}</p>
                      )}
                    </div>
                    <Link 
                      href={linkHref}
                      className="flex items-center text-white hover:text-[#E8F8F5] font-medium w-fit bg-[#00A896] bg-opacity-80 hover:bg-opacity-100 px-4 py-2 rounded-lg transition-all"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Explore
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No travel topics found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed Content Section - Like See Trips Page */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section for Detailed Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{firstCategory.title}</h2>
            <p className="text-[#00A896] font-medium text-xl mb-6">{firstCategory.subtitle}</p>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {firstCategory.description}
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-[#E8F8F5] rounded-lg p-8 mb-16 text-center max-w-4xl mx-auto">
            <p className="text-gray-800 font-medium text-lg mb-6">Curious to learn more? Book a call with our team.</p>
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
              Book a call with our team
            </button>
          </div>

          {/* Top Reads Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top Reads</h3>
            <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              The three blog posts below are some of our most popular. Because everyone wants to know how much a Kilimanjaro climb costs. They also want to know what to pack for the climb to ensure they're properly equipped. And we find that many folks are curious to know if climbing Mt Kilimanjaro is harder or easier than trekking to Everest Base Camp.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {firstCategory.topReads && firstCategory.topReads.map((read: any) => (
                <div key={read.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-80">
                  {/* Image part - 60% of the card */}
                  <div className="h-[60%] bg-gray-200 relative">
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  
                  {/* Details part - 40% of the card */}
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{read.title}</h4>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{read.description}</p>
                    </div>
                    <Link 
                      href={`/travel-blogs/${firstCategory.id}`}
                      className="flex items-center text-[#00A896] hover:text-[#008576] font-medium text-sm w-fit"
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Topics Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Topics</h3>
            <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We have everything you need to know to plan for a successful Kilimanjaro climb, from choosing a route to knowing what to pack and how to train. We also discuss how we keep you safe on the mountain, the costs involved, who makes up a mountain crew, how the tipping ceremony works, and our top advice for you for the climb. Finally, we have stories from past climbers to inspire and motivate you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {firstCategory.allTopics && firstCategory.allTopics.map((topic: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{topic.icon}</span>
                    <h4 className="text-xl font-bold text-gray-800">{topic.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {topic.posts && topic.posts.map((post: string, postIndex: number) => (
                      <li key={postIndex} className="text-gray-600 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                        {post}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Ready for an adventure? Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ready for an adventure?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {firstCategory.trips && firstCategory.trips.map((trip: any) => (
                <div key={trip.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-80">
                  {/* Image part - 60% of the card */}
                  <div className="h-[60%] bg-gray-200 relative">
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  
                  {/* Details part - 40% of the card */}
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{trip.title}</h4>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{trip.description}</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#00A896] font-bold">From ${trip.price}</span>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span className="text-xs">{trip.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-gray-500">({trip.rating})</span>
                      </div>
                      <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white text-sm font-medium py-1.5 px-3 rounded transition-all duration-300 w-full">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}