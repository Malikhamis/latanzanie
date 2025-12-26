'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Clock, Calendar, User, CheckCircle, X, XCircle, Users, Bed } from 'lucide-react'
import Faq from '@/components/ui/faq'

export default function SafariBivouac8DaysPage() {
  const params = useParams() as { locale?: string }
  const currentLocale = params?.locale === 'fr' ? 'fr' : 'en'

  const isFrench = true

  // French content hardcoded
  const t = (key: string, fallback = ''): string => {
    const frenchContent: Record<string, string> = {
      'hero.title': 'Expérience bivouac et camping dans les parcs nationaux de Tanzanie',
      'hero.breadcrumb': 'Tanzanie / Safari Bivouac',
      'hero.duration': '8 Jours',
      'hero.description': 'Safari Bivouac 8 Jours : L\'Appel Sauvage de la Tanzanie du Nord',
      'hero.price': '1,850€',
      'miniNavbar.datesAndPrices': 'Dates & Prix',
      'miniNavbar.proposeDate': 'Proposer une Date',
      'miniNavbar.inclusions': 'Inclus',
      'miniNavbar.practicalInfo': 'Informations Pratiques',
      'detailedItineraryTitle': 'Itinéraire détaillé',
      'itinerary.day1.title': 'Jour 1 – Arrivée',
      'itinerary.day1.description': 'À votre arrivée à l\'aéroport international du Kilimandjaro (JRO), vous serez accueilli et transféré à Arusha jusqu\'à votre hôtel.',
      'itinerary.day2.title': 'Jour 2 - 2jours au parc national de Tarangire',
      'itinerary.day2.description': 'Aujourd\'hui, nous nous dirigerons vers le parc national de Tarangire, en passant par les villages Maasaï locaux le long de la route principale, ici vous verrez des Maasaï emmener leur bétail dans des pâturages verts, ainsi que des femmes à la recherche de bois de chauffage et d\'eau, Tarangire est un endroit idéal pour voir de nombreux éléphants et de nombreux arbres Mbuyu. Il existe de nombreux animaux sauvages comme les girafes,',
      'itinerary.day3.title': 'Jour 3 Route vers le parc national du Serengeti',
      'itinerary.day3.description': 'Après le petit-déjeuner, nous nous dirigeons vers le parc national du Serengeti, via la zone de conservation de Ngorongoro. Nous nous arrêterons au bord du cratère pour une belle vue sur le cratère, en faisant le tour du bord du cratère jusqu\'au parc du Serengeti. Géographiquement, le Serengeti est divisé en deux zones : l\'Est-Sud, qui est recouverte par une vaste plaine de cendres volcaniques éjectées du plateau du Ngorongoro, d\'où le nom de « Siringet », mot masaï pour plaine sans fin. La deuxième zone, au Nord-Ouest, est constituée de forêts et de petites collines. Passez la nuit au pub Seronera',
      'itinerary.day4.title': 'Jour 4 Journée complète de safari dans le parc national du Serengeti',
      'itinerary.day4.description': 'Après le petit-déjeuner, départ de votre camping en voiture de sport. Le parc national du Serengeti fait partie de l\'écosystème du Serengeti qui abrite la plus grande population d\'animaux sauvage au monde : plus d\'un million de gnous et près d\'un demi-million de zèbres suivent chaque année les pluies autour de cet écosystème, des plaines aux forêts de savane, au Masai Mara et de retour aux plaines.',
      'itinerary.day5.title': 'Jour 5 Du cratère du Ngorongoro au lac Manyara',
      'itinerary.day5.description': 'Descendez au cratère. Le cratère du Ngorongoro est l\'un des plus beaux refuges fauniques du monde. Il s\'agit plutôt d\'un paradis animalier, où certains des derniers rhinocéros noirs d\'Afrique sont encore bien protégés. Un troupeau de lions à dos noir se perche dans l\'herbe, des flamants roses affluent vers le lac Magadi et le grand éléphant à défenses est le plus souvent vu dans les marais pérennes.',
      'itinerary.day6.title': 'Jour 6 Parc national du lac Manyara',
      'itinerary.day6.description': 'Ce parc est connu pour abriter des lions grimpeurs d\'arbres. Après le petit-déjeuner, route vers le parc national du lac Manyara en passant par la vallée du Rift, l\'un des sites les plus impressionnants au monde, qui s\'étend de la mer Morte en Jordanie jusqu\'au sud du Mozambique. Vous traverserez le pays Massaï. La réserve de chasse du lac Manyara doit son nom à la plante Euphorbia tirucalii, « Emanyar » en langue Massaï et « doigts de dame » en anglais.',
      'itinerary.day7.title': 'Jour 7 Du lac Eyasi à Arusha',
      'itinerary.day7.description': 'Vers 6h30 du matin, après un petit-déjeuner léger, vous quitterez le lodge et rendrez visite aux Bushmen Hadzabe. Ils sont les derniers chasseurs-cueilleurs encore présents en Afrique de l\'Est, qui continuent leur vie avec très peu de changements depuis des dizaines de milliers d\'années. Vous participerez à leurs activités matinales, notamment une randonnée en forêt, une chasse et un feu de camp. D\'autres activités peuvent être réalisées pendant la journée : interagir avec les Hadza, participer à la collecte de miel, rechercher des fruits de baobab et profiter de leur vie quotidienne.',
      'itinerary.day8.title': 'Jour 8 du départ : Départ du Kilimandjaro',
      'itinerary.day8.description': 'Profitez d\'un petit-déjeuner tranquille. Selon l\'horaire de votre vol, nous organiserons votre transfert de retour à l\'aéroport international du Kilimandjaro (JRO) pour votre vol de retour ou pour la poursuite de votre voyage , Zanzibar, etc.).',
      'inclusions.title': 'Ce qui est inclus',
      'inclusions.priceIncludes': 'Le prix comprend',
      'exclusions.title': 'Le prix n\'est pas inclus',
      'newsletter.title': 'Si vous aimez voyager',
      'newsletter.subtitle': 'rejoignez notre newsletter',
      'newsletter.description': 'Recevez les dernières nouvelles sur les joyaux cachés des aventures, les voyages de lancement à prix réduit et bien plus encore directement dans votre boîte de réception',
      'newsletter.firstNamePlaceholder': 'Prénom',
      'newsletter.emailPlaceholder': 'Adresse e-mail',
      'newsletter.button': 'S\'inscrire',
      'inquiryForm.title': 'Réservez votre safari',
      'inquiryForm.name': 'Nom complet',
      'inquiryForm.email': 'E-mail',
      'inquiryForm.groupSize': 'Taille du groupe',
      'inquiryForm.date': 'Date préférée',
      'inquiryForm.message': 'Message',
      'inquiryForm.submit': 'Soumettre la demande',
      'datesAndPrices.title': 'Dates et Prix',
      'datesAndPrices.groupDiscounts': 'Réductions de Groupe',
      'datesAndPrices.dontSeeDates': 'Vous ne voyez pas vos dates? Nous offrons une planification flexible et des réductions de groupe.',
      'datesAndPrices.enquireButton': 'Demander maintenant',
      'datesAndPrices.proposeNewDate': 'Proposer une Nouvelle Date',
      'datesAndPrices.proposeDateDescription': 'Vous avez des dates spécifiques en tête? Nous pouvons organiser un safari privé rien que pour vous.',
      'datesAndPrices.proposeDateButton': 'Proposer une date',
      'datesAndPrices.when': 'Quand?',
      'datesAndPrices.selected': 'sélectionné',
      'datesAndPrices.selectMonth': 'Sélectionner mois',
      'datesAndPrices.perPerson': 'par personne',
      'datesAndPrices.availability': 'Départs toute l\'année disponibles',
      'datesAndPrices.groupType': 'Type de Groupe',
      'datesAndPrices.selectGroup': 'Sélectionner groupe',
      'datesAndPrices.soloTraveler': 'Voyageur Solo',
      'datesAndPrices.couple': 'Couple',
      'datesAndPrices.familyGroup': 'Groupe Familial',
      'datesAndPrices.friendsGroup': 'Groupe d\'Amis',
      'datesAndPrices.corporateGroup': 'Groupe d\'Entreprise',
      'datesAndPrices.groupNote': 'Des tarifs spéciaux sont disponibles pour les groupes de 4 personnes ou plus. Contactez-nous pour des devis personnalisés.',
      'practicalInfo.title': 'Informations Pratiques',
      'practicalInfo.meals.title': 'Repas',
      'practicalInfo.transport.title': 'Transport',
      'practicalInfo.animals.title': 'Quels Animaux Voir?',
      'practicalInfo.luggage.title': 'Bagages',
      'practicalInfo.whatToPack.title': 'À Emporter',
      'practicalInfo.campingPhilosophy.title': 'Les bivouacs',
    }
    return frenchContent[key] || fallback
  }

  const safeT = (key: string, fallback = ''): string => {
    return t(key, fallback)
  }

  const [activeSection, setActiveSection] = useState('')
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>([])
  const [selectedGroupTypes, setSelectedGroupTypes] = useState<string[]>([])

  const itineraryRef = useRef<HTMLElement>(null)
  const inclusionsRef = useRef<HTMLElement>(null)
  const datesPricesRef = useRef<HTMLElement>(null)
  const practicalInfoRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: itineraryRef, name: 'itinerary' },
        { ref: inclusionsRef, name: 'inclusions' },
        { ref: datesPricesRef, name: 'datesPrices' },
        { ref: practicalInfoRef, name: 'practicalInfo' }
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const inclusions = [
    "Tous les taxes d'entrée dans les parcs indiques dans le programme",
    "Tous les taxes du campement indiques dans le programme",
    "Les  chauffeurs – guides pour les clients",
    "Le guide francophone",
    "Le cuisine",
    "L'equipement du campement pour les clients (tentes  ,lits, matelas , Oreilles,  tables , chaises )",
    "L'accommodation complete pendant le safari ( petit dejeuner, lunch et diner) ",
    "L'equipement de la cuisine.",
    "Les land cruser (4×4 ) avec le toit ouvrable pour observer les animaux dans les parcs.",
    "L'offre de l'eau de Kilimanjaro , 2 boutelles de litre et demie par jour par personne.",
    "La toilette et douche sont disponible au camp"
  ]
  
  const exclusions = [
    "Le ticket d'avion",
    "Le visa",
    "Les besoins personnels",
    "Les boissons",
    "Les pourboires"
  ]

  const itineraryDays = [
    { day: 'day1', title: safeT('itinerary.day1.title'), description: safeT('itinerary.day1.description') },
    { day: 'day2', title: safeT('itinerary.day2.title'), description: safeT('itinerary.day2.description') },
    { day: 'day3', title: safeT('itinerary.day3.title'), description: safeT('itinerary.day3.description') },
    { day: 'day4', title: safeT('itinerary.day4.title'), description: safeT('itinerary.day4.description') },
    { day: 'day5', title: safeT('itinerary.day5.title'), description: safeT('itinerary.day5.description') },
    { day: 'day6', title: safeT('itinerary.day6.title'), description: safeT('itinerary.day6.description') },
    { day: 'day7', title: safeT('itinerary.day7.title'), description: safeT('itinerary.day7.description') },
    { day: 'day8', title: safeT('itinerary.day8.title'), description: safeT('itinerary.day8.description') },
  ]

  return (
    <div className="min-h-screen bg-white w-full">
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>

      <section className="relative h-[450px] md:h-[500px] overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/safari-bivouac.jpg" 
            alt="Safari Bivouac Tanzania" 
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: '50% 35%' }}
            priority
            unoptimized
          />
        </div>
        
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] translate-y-[50%] bg-gradient-to-r from-[#00A896]/40 to-[#008576]/40 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-30" style={{height: 'auto', minHeight: isFrench ? '220px' : '180px'}}>
          <div className="p-6">
            <h1 className="text-xl font-serif font-semibold mb-3 text-white">{t('hero.title')}</h1>
            
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg text-white">{t('hero.breadcrumb', 'Tanzania / Northern Safari Circuit')}</span>
            </div>
            
            <div className="flex items-center mb-3">
              <Clock className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg font-bold text-white">{t('hero.duration', '8 Days')}</span>
            </div>
            
            <p className="text-white text-base leading-relaxed">{t('hero.description', 'Experience the ultimate camping safari adventure')}</p>
          </div>
        </div>
      </section>

      <div className="hidden md:block" style={{height: isFrench ? '180px' : '140px'}}></div>

      <div className="w-full px-0 md:hidden -mt-1">
        <div className="w-full bg-gradient-to-r from-[#00A896]/40 to-[#008576]/40 backdrop-blur-sm shadow-xl overflow-hidden relative" style={{height: isFrench ? '420px' : '380px'}}>
          <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
            <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#000000" fillOpacity="0.5" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
          <div className="p-4 pt-6">
            <h1 className="text-xl font-serif font-semibold mb-4 text-white">{t('hero.title')}</h1>
            
            <div className="flex items-center mb-3">
              <MapPin className="mr-2 h-5 w-5 text-white" />
              <span className="text-2xl text-white">{t('hero.breadcrumb', 'Tanzania / Northern Safari Circuit')}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-white" />
              <span className="text-xl text-white">{t('hero.duration', '8 Days')}</span>
            </div>
            
            <p className="text-white mb-4 text-xl">{t('hero.description', 'Experience the ultimate camping safari adventure')}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-white py-4 sticky z-30 border-b border-gray-200 shadow-sm" style={{top: '64px'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[#00A896] font-bold text-xl bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent pr-4 border-r border-gray-300">{t('hero.price', '€1,850')}</span>
              <button 
                className={`font-medium px-4 py-2 border-2 rounded-lg flex items-center transition-all duration-300 text-base ${
                  activeSection === 'datesPrices' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(datesPricesRef)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t('miniNavbar.datesAndPrices', 'Dates & Prices')}
              </button>
              <button 
                className={`font-medium px-4 py-2 border-2 rounded-lg flex items-center transition-all duration-300 text-base ${
                  activeSection === 'datesPrices' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setShowInquiryForm(true)}
              >
                <User className="mr-2 h-4 w-4" />
                {t('miniNavbar.proposeDate', 'Propose a Date')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                {t('miniNavbar.inclusions', 'Inclusions')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'practicalInfo' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(practicalInfoRef)}
              >
                {t('miniNavbar.practicalInfo', 'Practical Info')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-white py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="flex justify-center px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => scrollToSection(datesPricesRef)}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('miniNavbar.datesAndPrices', 'Dates & Prices')}
            </button>
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => setShowInquiryForm(true)}>
              <User className="mr-2 h-4 w-4" />
              {t('miniNavbar.proposeDate', 'Propose a Date')}
            </button>
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => scrollToSection(inclusionsRef)}>
              {t('miniNavbar.inclusions', 'Inclusions')}
            </button>
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => scrollToSection(practicalInfoRef)}>
              {t('miniNavbar.practicalInfo', 'Practical Info')}
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Itinerary Section */}
      <section ref={itineraryRef} className="py-5 mt-0 md:mt-0">
        <div className="container mx-auto px-0">
          
          {/* Detailed Itinerary Title */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              {safeT('detailedItineraryTitle', 'Detailed Itinerary')}
            </h2>
          </div>
          
          <div className="w-full mt-0">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              {itineraryDays.map((day, index) => {
                const isOdd = index % 2 === 1
                const safariImages = [
                  '/images/safari-bivouac.jpg',
                  '/images/zanzibar.jpg',
                  '/images/arrival.jpg',
                  '/images/climb.jpg',
                  '/images/gate.jpg',
                  '/images/kibo.jpg',
                  '/images/kilele.jpg',
                  '/images/lala.jpg'
                ]
                
                return (
                  <div key={day.day} className={`mb-12 pb-8 ${index < itineraryDays.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Details */}
                      <div className={`order-1 ${isOdd ? 'md:order-2' : ''}`}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{day.title}</h3>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{day.description}</p>
                      </div>
                      {/* Image */}
                      <div className={`order-2 ${isOdd ? 'md:order-1' : ''}`}>
                        <div className="relative w-full h-96 rounded-xl overflow-hidden">
                          <Image 
                            src={safariImages[index]} 
                            alt={day.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section ref={inclusionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CheckCircle className="mr-2 h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              {safeT('inclusions.title', 'What\'s Included')}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Price Includes */}
                <div className="pr-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{safeT('inclusions.priceIncludes', 'Price Includes')}</h3>
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price Does Not Include */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{safeT('exclusions.title', 'Price Does Not Include')}</h3>
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates & Prices Section */}
      <section ref={datesPricesRef} className="py-16 bg-gradient-to-br from-[#F0FCF9] via-[#E8F8F5] to-[#DDF5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent">
            {t('datesAndPrices.title', 'Dates and Prices')}
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Top Cards - Group Discounts & Propose Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#B8EDE3] rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#4DC5B5] to-[#00A896] rounded-xl mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('datesAndPrices.groupDiscounts', 'Group Discounts')}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t('datesAndPrices.dontSeeDates', 'Don\'t see your dates? We offer flexible scheduling and group discounts.')}</p>
                <button 
                  onClick={() => setShowInquiryForm(true)}
                  className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                >
                  {t('datesAndPrices.enquireButton', 'Enquire Now')}
                </button>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#B8EDE3] rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#4DC5B5] to-[#00A896] rounded-xl mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('datesAndPrices.proposeNewDate', 'Propose a New Date')}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t('datesAndPrices.proposeDateDescription', 'Have specific dates in mind? We can organize a private safari departure just for you.')}</p>
                <button 
                  onClick={() => setShowInquiryForm(true)}
                  className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                >
                  {t('datesAndPrices.proposeDateButton', 'Propose Date')}
                </button>
              </div>
            </div>
            
            {/* Bottom Section - When & Group Options */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* When Section - Left Half */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <Calendar className="mr-2 h-6 w-6 text-[#00A896]" />
                      {t('datesAndPrices.when', 'When?')}
                    </h3>
                    <span className="bg-gradient-to-r from-[#E8F8F5] to-[#D0F0E8] text-[#008576] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                      {selectedMonths.length} {t('datesAndPrices.selected', 'selected')}
                    </span>
                  </div>
                  <div className="mb-6">
                    <button 
                      onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-[#00A896] bg-white text-left flex justify-between items-center hover:border-[#72D9C4] transition-colors"
                    >
                      <span className="font-medium text-gray-700">{selectedMonths.length > 0 ? `${selectedMonths.length} ${t('datesAndPrices.selected', 'selected')}` : t('datesAndPrices.selectMonth', 'Select month')}</span>
                      <svg className={`transform transition-transform ${isWhenDropdownOpen ? 'rotate-180' : ''} fill-current h-5 w-5 text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </button>
                    
                    {isWhenDropdownOpen && (
                      <div className="border-2 border-[#B8EDE3] rounded-xl mt-3 p-6 max-h-72 overflow-y-auto bg-gradient-to-br from-white to-[#E8F8F5] shadow-lg">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="font-bold text-gray-900 col-span-3 mb-2 text-lg">2025</div>
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                            const monthKey = `2025-${month}`;
                            const isSelected = selectedMonths.includes(monthKey);
                            return (
                              <button 
                                key={monthKey} 
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedMonths(selectedMonths.filter(m => m !== monthKey));
                                  } else {
                                    setSelectedMonths([...selectedMonths, monthKey]);
                                  }
                                }}
                                className={`font-semibold py-3 px-2 rounded-lg transition-all duration-200 text-sm ${
                                  isSelected 
                                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white shadow-md transform scale-105' 
                                    : 'bg-white hover:bg-[#E8F8F5] text-gray-700 border border-gray-200 hover:border-[#B8EDE3]'
                                }`}
                              >
                                {month}
                              </button>
                            );
                          })}
                          <div className="font-bold text-gray-900 col-span-3 mt-4 mb-2 text-lg">2026</div>
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                            const monthKey = `2026-${month}`;
                            const isSelected = selectedMonths.includes(monthKey);
                            return (
                              <button 
                                key={monthKey} 
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedMonths(selectedMonths.filter(m => m !== monthKey));
                                  } else {
                                    setSelectedMonths([...selectedMonths, monthKey]);
                                  }
                                }}
                                className={`font-semibold py-3 px-2 rounded-lg transition-all duration-200 text-sm ${
                                  isSelected 
                                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white shadow-md transform scale-105' 
                                    : 'bg-white hover:bg-[#E8F8F5] text-gray-700 border border-gray-200 hover:border-[#B8EDE3]'
                                }`}
                              >
                                {month}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t-2 border-gray-200 bg-gradient-to-br from-[#E8F8F5] to-[#D0F0E8] rounded-xl p-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#00A896] mb-2">€1,850</p>
                      <p className="text-gray-600">{t('datesAndPrices.perPerson', 'per person')}</p>
                      <p className="text-sm text-gray-500 mt-2">{t('datesAndPrices.availability', 'Year-round departures available')}</p>
                    </div>
                  </div>
                </div>
                
                {/* Group Options Section - Right Half */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <Users className="mr-2 h-6 w-6 text-[#00A896]" />
                      {t('datesAndPrices.groupType', 'Group Type')}
                    </h3>
                    <span className="bg-gradient-to-r from-[#E8F8F5] to-[#D0F0E8] text-[#008576] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                      {selectedGroupTypes.length} {t('datesAndPrices.selected', 'selected')}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <button 
                      onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-[#00A896] bg-white text-left flex justify-between items-center hover:border-[#72D9C4] transition-colors mb-4"
                    >
                      <span className="font-medium text-gray-700">{selectedGroupTypes.length > 0 ? `${selectedGroupTypes.length} ${t('datesAndPrices.selected', 'selected')}` : t('datesAndPrices.selectGroup', 'Select group')}</span>
                      <svg className={`transform transition-transform ${isGroupDropdownOpen ? 'rotate-180' : ''} fill-current h-5 w-5 text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </button>
                    
                    {isGroupDropdownOpen && (
                      <div className="border-2 border-[#B8EDE3] rounded-xl p-6 bg-gradient-to-br from-white to-[#E8F8F5] shadow-lg space-y-3">
                        {[t('datesAndPrices.soloTraveler', 'Solo Traveler'), t('datesAndPrices.couple', 'Couple'), t('datesAndPrices.familyGroup', 'Family Group'), t('datesAndPrices.friendsGroup', 'Friends Group'), t('datesAndPrices.corporateGroup', 'Corporate Group')].map((groupOption, idx) => {
                          const safeKey = groupOption || `group-${idx}`
                          const safeId = safeKey.replace(/\s+/g, '-').toLowerCase()
                          const isSelected = selectedGroupTypes.includes(groupOption);
                          return (
                            <div key={safeKey} className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors">
                              <input
                                type="checkbox"
                                id={safeId}
                                checked={isSelected}
                                onChange={() => {
                                  if (isSelected) {
                                    setSelectedGroupTypes(selectedGroupTypes.filter(i => i !== groupOption));
                                  } else {
                                    setSelectedGroupTypes([...selectedGroupTypes, groupOption]);
                                  }
                                }}
                                className="h-5 w-5 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded cursor-pointer"
                              />
                              <label htmlFor={safeId} className="ml-3 block text-gray-800 font-medium text-base cursor-pointer">
                                {groupOption}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t-2 border-gray-200 rounded-xl">
                    <p className="text-gray-600 text-sm mb-4">{t('datesAndPrices.groupNote', 'Special rates available for groups of 4 or more. Contact us for custom quotes.')}</p>
                    <button 
                      onClick={() => setShowInquiryForm(true)}
                      className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      {t('datesAndPrices.enquireButton', 'Enquire Now')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section ref={practicalInfoRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">{safeT('practicalInfo.title', 'Practical Information')}</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#00A896]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold">1</div>
                  {safeT('practicalInfo.meals.title', 'Meals')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">Le petit-déjeuner, sauf mention contraire, est pris au sein même de l'hébergement. Selon le programme, les déjeuners seront pris dans les parcs et sous forme de pique-nique afin de profiter pleinement de votre safari. Merci de prévenir en avance si des demandes de repas spéciaux (végétariens, diabétiques, etc...) sont nécessaires. L'eau du robinet est généralement potable dans les grandes agglomérations mais pas dans les espaces ruraux par précaution il est préférable de boire de l'eau en bouteille.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#00A896]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold">2</div>
                  {safeT('practicalInfo.transport.title', 'Transport')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">Le safari est effectué en véhicule 4x4, des sièges de deux places sont installés dans le sens de la marche à côté d'une grande baie vitrée ouvrable. Un réservoir d'eau est réservé à l'intendance, un grand  réservoir de carburant permet de réaliser de longues étapes. Possibilité de recharger les caméscopes et les appareils numériques sur la prise allume cigares de 12V (prévoir votre cordon). Dans les parcs et les réserves, Il est strictement interdit de s'installer sur le toit du véhicule.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#00A896]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold">3</div>
                  {safeT('practicalInfo.animals.title', 'Which Animals to See?')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">La Tanzanie regroupe des milliers d'animaux sauvages de toutes les espèces et vous ne serez pas déçu de la diversité que regroupe les parcs (même les plus petits ou les moins connus): Éléphants, girafes, buffles, guépards, léopards, lions, servals, chacal, Rhinocéros, Hippopotames, hyènes, impalas, zèbres, singes, antilopes, crocodiles, phacochères, Oiseaux...... BREF il y'a de nombreux espèces à voir, vous ne serez pas déçus tant que vous savez être patients avec la nature.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#00A896]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold">4</div>
                  {safeT('practicalInfo.luggage.title', 'Luggage')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">Lors d’un safari préférez les bagages souples aux valises traditionnelles, les sacs sont beaucoup plus pratiques à manier dans les véhicules surtout si vous avez besoin de récupérer quelque chose pendant une journée d’observation. Prévoyez également un petit sac à dos dans lequel vous disposerez tout ce dont vous risquez d’avoir besoin dans la journée (crème solaire, lunettes, appareil photo…).</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#00A896]">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold">5</div>
                  {safeT('practicalInfo.whatToPack.title', 'What to Pack')}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">Pensez safari : des chemises légères à manches longues pour vous protéger du soleil et des insectes, des pantalons souples avec des poches latérales, des chaussures type Pataugas pour les randonnées et des baskets légères pour les moments de repos. N'oubliez pas une polaire car les soirées peuvent être fraîches. Un maillot de bain vous sera utile lors de vos séjours dans les établissements possédant une piscine. Un chapeau et des lunettes de soleil compléteront la panoplie indispensable à tout voyage dans la savane. Pour l'ensemble de vos vêtements préférez des couleurs comme le kaki, vert foncé, gris, marron. Evitez les couleurs vives et le blanc. De même oubliez le bleu car les mouches tsé tsé sont particulièrement attirées par cette dominante. N'oubliez pas une trousse à pharmacie contenant de petits pansements (coupures ou autres), des antalgiques (paracétamol ou équivalent), des crèmes solaires et des anti-moustiques (le plus efficace restant le 5X5). Pensez aussi à votre nécessaire de toilette ainsi qu'à une serviette de bain même si tous les établissements en sont pourvus. Vous pouvez compléter cet équipement par une bonne paire de jumelle type « Bushnell légende » ou équivalent, car cet outil est certainement celui dont vous vous servirez le plus lors d’un safari. C’est cela qui vous permettra d’observer des scènes inoubliables dans les parcs.</p>
              </div>

              <div className="bg-gradient-to-br from-[#72D9C4] to-[#00A896] text-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">6</div>
                  {safeT('practicalInfo.campingPhilosophy.title', 'The Bivouac Experience')}
                </h3>
                <p className="leading-relaxed whitespace-pre-line">Effectuer un voyage en Tanzanie en ayant opté pour un hébergement en bivouac est une philosophie en soi. Hors des sentiers battus c'est une vraie aventure que privilégient les baroudeurs. Il s'agit d'effectuer un séjour qui ramène aux valeurs fondamentales, laissant derrière nous un confort quotidien pour se concentrer sur la nature. Quoi de plus excitant que de poser sa tente en plein milieu de la savane, au cœur même de l'endroit où vivent les plus grands animaux d'Afrique. Certes les nuits peuvent être courtes car elles sont propices à une activité intense de la faune. Il n'est pas rare d'entendre le feulement des lions, de voir passer des éléphants ou des herbivores à quelques mètres du bivouac, sans oublier les hyènes qui vous empêcheront peut-être de dormir d'un sommeil réparateur mais qui vous laisseront un souvenir mémorable. Ce genre de voyage peut être économique mais là n'est pas sa vocation première, il s'agit avant tout de se rapprocher au plus près de la nature, surtout dans les parcs, pour vivre une expérience inoubliable. Et bien évidemment il serait inconcevable d'effectuer un voyage en Tanzanie en ayant opté pour un hébergement en bivouac sans un minimum de confort, mais tout cela est géré de main de maître : Les tentes sont bi-places, équipées de matelas et de moustiquaires, adaptées à l'environnement, elles reflètent l'esprit d'un safari hors du commun. Les lieux de camping possèdent tous les sanitaires et infrastructures permettant un séjour confortable et ce au beau milieu d'une nature sauvage. Bien évidemment, lors d'un voyage en bivouac, en plus du chauffeur guide, vous bénéficiez d'un cuisinier personnel qui vous assure tous les jours un petit déjeûner, un pique-nique le midi et un repas le soir. Lorsque l'on se trouve au bout du monde, au fin fond de la savane et que l'on voit ce qu'est capable de préparer un cuisinier itinérant dans des conditions inimaginables, lorsque l'on déguste ses mets, alors là il n'y a que le respect qui s'impose. Le bivouac est une expérience hors du commun, il s'adresse à ceux qui veulent découvrir le pays avec un parfum d'aventure car on ne se sait jamais ce qui se passera pendant la nuit ! C'est certainement le meilleur moyen pour vivre des instants hors normes en Tanzanie, qui s'adresse avant tout à ceux dont l'Aventure est une priorité. Loin des clichés, à faire une fois dans sa vie, car c'est une expérience unique dont on ressort grandi et humble.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/safari-bivouac.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            {safeT('newsletter.title', 'If you love to travel')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {safeT('newsletter.subtitle', 'join our newsletter')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {safeT('newsletter.description', 'Get the latest news on hidden adventure gems, discounted launch trips and much more straight to your inbox')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={safeT('newsletter.firstNamePlaceholder', 'First name')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={safeT('newsletter.emailPlaceholder', 'Email address')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              {safeT('newsletter.button', 'Subscribe')}
            </button>
          </div>
        </div>
      </section>

      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowInquiryForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{safeT('inquiryForm.title', 'Book Your Safari')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.name', 'Full Name')}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.email', 'Email')}</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.groupSize', 'Group Size')}</label>
                <input type="number" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.date', 'Preferred Date')}</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.message', 'Message')}</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white py-3 rounded-md transition-colors font-semibold">
                {safeT('inquiryForm.submit', 'Submit Inquiry')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
