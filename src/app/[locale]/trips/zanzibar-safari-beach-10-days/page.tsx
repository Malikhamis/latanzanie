'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { MapPin, Clock, Calendar, User, CheckCircle, X, XCircle, Users } from 'lucide-react'

export default function ZanzibarSafariBeach10DaysPage() {
  const t = (key: string, fallback = ''): string => {
    const frenchContent: Record<string, string> = {
      'hero.title': 'Safari et Plages de Zanzibar (10 Jours) : L\'Appel Sauvage de l\'Afrique de l\'Est',
      'hero.breadcrumb': 'Tanzanie / Safari & Zanzibar',
      'hero.duration': '10 Jours',
      'hero.description': 'Oubliez le quotidien. Ce n\'est pas un simple voyage, c\'est une épopée conçue pour vous couper le souffle. Pendant 10 jours, vous vivrez l\'intensité de la savane tanzanienne, là où les Big Five règnent, avant de vous ressourcer sur les plages et dans les ruelles historiques de l\'île aux épices, Zanzibar.',
      'hero.price': '2,300€',
      'miniNavbar.datesAndPrices': 'Dates & Prix',
      'miniNavbar.proposeDate': 'Proposer une Date',
      'miniNavbar.inclusions': 'Inclus',
      'miniNavbar.practicalInfo': 'Informations Pratiques',
      'detailedItineraryTitle': 'Itinéraire détaillé',
      'itinerary.day1.title': 'Jour 1 : Arusha / Le Premier Souffle d\'Afrique',
      'itinerary.day1.description': 'Arrivée à l\'aéroport international du Kilimandjaro (JRO). Vous serez accueilli et transféré directement vers votre lodge à Arusha. C\'est le moment idéal pour vous imprégner de l\'atmosphère tanzanienne et vous préparer mentalement pour l\'aventure en brousse qui débute dès le lendemain matin.',
      'itinerary.day2.title': 'Jour 2 : D\'Arusha au Parc National de Tarangire – Le Royaume des Baobabs',
      'itinerary.day2.description': 'Après un petit-déjeuner matinal et énergisant, départ pour le Parc National de Tarangire pour une journée complète de safari. Le Tarangire est célèbre pour ses vastes populations d\'éléphants, avec des troupeaux pouvant atteindre 300 individus, ainsi que pour ses magnifiques baobabs. Vous observerez les gnous, les zèbres et d\'autres herbivores se rassembler autour des sources d\'eau. Le déjeuner sera pris sous forme de pique-nique en plein cœur du parc.',
      'itinerary.day3.title': 'Jour 3 : De Tarangire au Parc National du Serengeti – Vers la Plaine Infinie',
      'itinerary.day3.description': 'Après un petit-déjeuner, votre chauffeur-guide vous conduira vers le mythique Parc National du Serengeti. La route elle-même est une aventure : vous pénétrez dans les plaines ouvertes sans fin (Siringet) sous un ciel magnifique. Profitez d\'un safari de quatre heures en après-midi avant de partir pour un safari en fin de soirée, lorsque les prédateurs sont les plus actifs.',
      'itinerary.day4.title': 'Jour 4 : Du Parc National du Serengeti au Ngorongoro – L\'Aube des Chasseurs',
      'itinerary.day4.description': 'Réveillez-vous très tôt pour un safari matinal dans le Serengeti, le meilleur moment pour surprendre les lions, les léopards et les guépards. Vous prendrez ensuite un brunch avant de faire vos bagages et de prendre la route vers le Ngorongoro. Vous profiterez d\'un safari en route à travers la zone de conservation, avec une arrivée tardive sur le bord du Cratère.',
      'itinerary.day5.title': 'Jour 5 : Du Cratère du Ngorongoro à Arusha – L\'Eden Retrouvé',
      'itinerary.day5.description': 'Après un petit-déjeuner matinal, vous effectuerez la descente spectaculaire au fond du Cratère pour six heures de safari intensif. C\'est l\'endroit idéal pour chercher les Big Five, notamment le Rhinocéros Noir. Le pique-nique sera servi à la source de Ngoitoktok, à proximité des hippopotames. Après ce moment magique, vous remonterez le bord du cratère et prendrez la route vers Arusha, via un dernier safari en route, avec un arrêt possible au village de Mto wa Mbu',
      'itinerary.day6.title': 'Jour 6 : Vol vers Zanzibar – Arrivée et Tranquillité Insulaire',
      'itinerary.day6.description': 'Après votre vol depuis Arusha, vous serez transféré à votre hôtel, situé dans une zone qui n\'est pas directement en bord de mer (probablement à Stone Town ou dans un environnement urbain/central). Cette journée est libre pour vous acclimater au climat tropical, explorer les ruelles proches de votre logement, ou simplement vous reposer après le safari intense.',
      'itinerary.day7.title': 'Jour 7 : Safari Blue Trip – L\'Odyssée Aquatique Complète',
      'itinerary.day7.description': 'Départ pour une journée complète d\'excursion Safari Blue. Ce voyage vous fera naviguer autour des mangroves, avec des opportunités de plongée en apnée le long de la magnifique baie de Menai. Vous aurez le temps de vous détendre sur un banc de sable isolé près de l\'île de Kwale, où la baignade et le pique-nique seront les moments forts de la journée.',
      'itinerary.day8.title': 'Jour 8 : Demi-Journée Mnemba – Dauphins et Récifs Secrets',
      'itinerary.day8.description': 'Tôt le matin, vous partirez en mer pour une demi-journée d\'aventure. Vous aurez l\'occasion de nager (dans le respect de l\'environnement) avec les dauphins et de prendre des photos inoubliables. Ensuite, vous explorerez les récifs coralliens autour de l\'atoll de Mnemba, reconnu pour la richesse de sa vie marine et de ses coraux préservés.',
      'itinerary.day9.title': 'Jour 9 : Stone Town, Spice Farm et Prison Island – Saveurs et Histoire',
      'itinerary.day9.description': 'Cette journée est un voyage au cœur de la culture de l\'île. Vous commencerez par une visite d\'une Ferme d\'Épices (Spice Farm) pour éveiller vos sens aux arômes locaux. L\'après-midi sera consacrée à une visite guidée de la fascinante Stone Town (UNESCO), puis à une excursion vers Prison Island pour rencontrer les célèbres tortues géantes.',
      'itinerary.day10.title': 'Jour 10 : Transfert à l\'Aéroport – Kwaheri (Au Revoir)',
      'itinerary.day10.description': 'Profitez d\'un dernier petit-déjeuner tranquille dans votre hôtel. Selon l\'heure de votre vol international, vous serez transféré à l\'aéroport de Zanzibar (ZNZ) pour votre départ.',
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
  const isFrench = true

  const [activeSection, setActiveSection] = useState('')
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedGroupTypes, setSelectedGroupTypes] = useState<string[]>(['safari-beach-combo'])

  const itineraryRef = useRef<HTMLElement>(null)
  const inclusionsRef = useRef<HTMLElement>(null)
  const practicalInfoRef = useRef<HTMLElement>(null)
  const datesPricesRef = useRef<HTMLElement>(null)
  const monthDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setIsWhenDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: itineraryRef, name: 'itinerary' },
        { ref: inclusionsRef, name: 'inclusions' },
        { ref: practicalInfoRef, name: 'practicalInfo' },
        { ref: datesPricesRef, name: 'datesPrices' }
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
    "Tous les Frais d'entrée dans les Parcs Nationaux mentionnés au programme",
    "Tous les transferts aéroportuaires et inter-hôtels mentionnés dans le programme",
    "Hébergement en Lodge (ou hébergement de confort équivalent)",
    "Guide local francophone certifié pour le safari",
    "D'Eau Minérale : 2 litres d'eau par jour et par personne",
    "Transport pendant les excursions à Zanzibar",
    "Tout le les taxes et TVA à Zanzibar",
    "Hébergement"
  ];
  
  const exclusions = [
    "Vol international et local",
    "Pourboire pour le guide",
    "Boisson personnel",
    "Visa et assurance"
  ];

  const itineraryDays = [
    { day: 'day1', title: t('itinerary.day1.title'), description: t('itinerary.day1.description') },
    { day: 'day2', title: t('itinerary.day2.title'), description: t('itinerary.day2.description') },
    { day: 'day3', title: t('itinerary.day3.title'), description: t('itinerary.day3.description') },
    { day: 'day4', title: t('itinerary.day4.title'), description: t('itinerary.day4.description') },
    { day: 'day5', title: t('itinerary.day5.title'), description: t('itinerary.day5.description') },
    { day: 'day6', title: t('itinerary.day6.title'), description: t('itinerary.day6.description') },
    { day: 'day7', title: t('itinerary.day7.title'), description: t('itinerary.day7.description') },
    { day: 'day8', title: t('itinerary.day8.title'), description: t('itinerary.day8.description') },
    { day: 'day9', title: t('itinerary.day9.title'), description: t('itinerary.day9.description') },
    { day: 'day10', title: t('itinerary.day10.title'), description: t('itinerary.day10.description') },
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
            src="/images/zanzibarbeach.jpg" 
            alt="Zanzibar Safari & Beach" 
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: '50% 35%' }}
            priority />
        </div>
        
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] translate-y-[50%] bg-gradient-to-r from-[#00A896]/40 to-[#008576]/40 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-30" style={{height: 'auto', minHeight: isFrench ? '220px' : '180px'}}>
          <div className="p-6">
            <h1 className="text-xl font-serif font-semibold mb-3 text-white">{t('hero.title')}</h1>
            
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg text-white">{t('hero.breadcrumb')}</span>
            </div>
            
            <div className="flex items-center mb-3">
              <Clock className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg font-bold text-white">{t('hero.duration')}</span>
            </div>
            
            <p className="text-white text-base leading-relaxed">{t('hero.description')}</p>
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
              <span className="text-2xl text-white">{t('hero.breadcrumb')}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-white" />
              <span className="text-xl text-white">{t('hero.duration')}</span>
            </div>
            
            <p className="text-white mb-4 text-xl">{t('hero.description')}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-white py-4 sticky z-30 border-b border-gray-200 shadow-sm" style={{top: '64px'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[#00A896] font-bold text-xl bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent pr-4 border-r border-gray-300">{t('hero.price')}</span>
              <button 
                className={`font-medium px-4 py-2 border-2 rounded-lg flex items-center transition-all duration-300 text-base ${
                  activeSection === 'datesPrices' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(datesPricesRef)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t('miniNavbar.datesAndPrices')}
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
                {t('miniNavbar.proposeDate')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                {t('miniNavbar.inclusions')}</button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'practicalInfo' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(practicalInfoRef)}
              >
                {t('miniNavbar.practicalInfo')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-white py-4 sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4">
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#f8d7da] text-[#721c24] font-medium hover:bg-[#f1b0b7] px-4 py-2 border border-[#f5c6cb] rounded-lg flex items-center justify-center text-sm" onClick={() => scrollToSection(datesPricesRef)}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('miniNavbar.datesAndPrices')}
            </button>
            <button className="bg-[#00A896] text-white font-medium hover:bg-[#008576] px-4 py-2 border border-[#00A896] rounded-lg flex items-center justify-center text-sm" onClick={() => setShowInquiryForm(true)}>
              <User className="mr-2 h-4 w-4" />
              {t('miniNavbar.proposeDate')}
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
              {t('detailedItineraryTitle')}
            </h2>
          </div>
          
          <div className="w-full mt-0">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              {itineraryDays.map((day, index) => {
                const isOdd = index % 2 === 1
                const dayNumber = index + 1
                const dayImage = `/images/daysf${dayNumber}.jpg`
                
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
                            src={dayImage} 
                            alt={day.title}
                            fill
                            className="object-cover" />
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
              {t('inclusions.title')}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Price Includes */}
                <div className="pr-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('inclusions.priceIncludes')}</h3>
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
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('exclusions.title')}</h3>
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
      <section ref={datesPricesRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Book your trip
          </h2>
          
          {/* Compact Action Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => setShowInquiryForm(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">💰</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Group Discounts</h3>
                  <p className="text-gray-600 text-sm">Enquire for more details</p>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => setShowInquiryForm(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Don't see your dates?</h3>
                  <p className="text-gray-600 text-sm">Please propose a new departure</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Compact Inline */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* When Selector */}
            <div ref={monthDropdownRef} className="relative flex-1">
              <button 
                onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">When</span>
                  <span className="font-semibold">{selectedMonths.length > 0 ? selectedMonths[0].replace('-', ' ') : 'January 2026'}</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isWhenDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isWhenDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto">
                  {/* 2025 */}
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-gray-900 mb-3">2025</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2025-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-500 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2026 */}
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-gray-900 mb-3">2026</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2026-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2027 */}
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-3">2027</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2027-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Route Selector - Shows only this route */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Route</span>
                  <span className="font-semibold">{selectedGroupTypes.length} Selected</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isGroupDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isGroupDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedGroupTypes.includes('safari-beach-combo')} 
                      onChange={() => {
                        if (selectedGroupTypes.includes('safari-beach-combo')) {
                          setSelectedGroupTypes([]);
                        } else {
                          setSelectedGroupTypes(['safari-beach-combo']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-base text-gray-800">Zanzibar Safari & Beach - 10 Days</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          
          {/* Show earlier dates link */}
          <div className="text-center mb-4">
            <button className="text-base text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Show earlier dates
            </button>
          </div>
          
          {/* Date Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {selectedMonths.length > 0 
                ? selectedMonths[0].replace('-', ' ') 
                : 'Jan 2026'}
            </h3>
          </div>
          
          {/* Trip Dates - List Style */}
          <div className="space-y-3 mb-6">
            {selectedGroupTypes.includes('safari-beach-combo') && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 text-base">Zanzibar Safari & Beach - 10 Days</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>10 Days</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-600">Safari adventure with beach relaxation</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="text-right">
                      <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">€2,300</span></div>
                      <div className="text-sm text-gray-500">Deposit €100</div>
                    </div>
                    <button 
                      onClick={() => setShowInquiryForm(true)}
                      className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Show later dates link */}
          <div className="text-center mb-8">
            <button className="text-base text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              Show later dates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Don't see your dates section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-white rounded-full mb-4">
              <Calendar className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don't see your dates?</h3>
            <p className="text-gray-600 text-base mb-6">We can create it if bookable!</p>
            <button 
              onClick={() => setShowInquiryForm(true)}
              className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Propose Dates
            </button>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section ref={practicalInfoRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CheckCircle className="mr-2 h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              {t('practicalInfo.title')}
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-gray-50 p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Meals */}
                <div className="pr-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.meals.title')}</h3>
                  <p className="text-gray-600">Pendant votre safari, vous profiterez de repas préparés avec des ingrédients frais et locaux. Les petits-déjeuners sont copieux avec des options continentales et américaines. Les déjeuners sont souvent servis sous forme de pique-nique dans les parcs pour profiter au maximum du safari. Les dîners sont élaborés avec des plats locaux et internationaux.</p>
                </div>
                
                {/* Transport */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.transport.title')}</h3>
                  <p className="text-gray-600">Le transport est assuré par des véhicules 4x4 spécialement aménagés pour les safaris avec toit ouvrant pour une meilleure observation de la faune. Pour la partie Zanzibar, le transfert se fait par avion de la Tanzanie continentale vers l'île de Zanzibar.</p>
                </div>

                {/* Animals to see */}
                <div className="pr-0 md:pr-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.animals.title')}</h3>
                  <p className="text-gray-600">Pendant votre séjour, vous aurez l'opportunité d'observer les Big Five : éléphants, lions, léopards, rhinocéros et buffles. Vous verrez également des girafes, des gnous, des zèbres, des hippopotames, des crocodiles et une grande variété d'oiseaux et de petits mammifères.</p>
                </div>

                {/* Luggage */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.luggage.title')}</h3>
                  <p className="text-gray-600">Un sac de voyage souple est préférable à une valise rigide, surtout pour les transferts en avion entre la Tanzanie continentale et Zanzibar. Prévoyez des vêtements légers et respirants pour la journée, et un pull pour les matinées et soirées fraîches. Un sac à dos pour les excursions est également recommandé.</p>
                </div>

                {/* What to pack */}
                <div className="pr-0 md:pr-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.whatToPack.title')}</h3>
                  <p className="text-gray-600">Emportez des vêtements aux couleurs neutres (kaki, beige), un chapeau, des lunettes de soleil, une crème solaire, un anti-moustique efficace, une lampe frontale, un appareil photo avec zoom, des chaussures confortables pour la marche, et un adaptateur électrique (type G au Royaume-Uni).</p>
                </div>

                {/* Camping philosophy */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('practicalInfo.campingPhilosophy.title')}</h3>
                  <p className="text-gray-600">Notre approche du bivouac respecte l'environnement et les communautés locales. Nous privilégions les hébergements écologiques et soutenons les économies locales. Les bivouacs sont installés dans des zones désignées pour minimiser l'impact sur la faune et les écosystèmes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/zanzibar-safari.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t('newsletter.title')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {t('newsletter.subtitle')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {t('newsletter.description')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={t('newsletter.firstNamePlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              {t('newsletter.button')}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiryForm.title')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiryForm.name')}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiryForm.email')}</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiryForm.groupSize')}</label>
                <input type="number" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiryForm.date')}</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiryForm.message')}</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white py-3 rounded-md transition-colors font-semibold">
                {t('inquiryForm.submit')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
