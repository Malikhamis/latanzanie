'use client'

import { useState, useRef, useEffect } from 'react'
import NewsletterForm from '../NewsletterForm';
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Faq from '@/components/ui/faq'
import { MapPin, Clock, Calendar, User, CheckCircle, Bed, XCircle } from 'lucide-react'

export default function UmbweRoutePage() {
  // read locale from the route params


  // Hardcoded French content for Umbwe Route
  const safeT = (key: string, fallback = ''): string => {
    const frMessages: Record<string, string> = {
      'hero.title': "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)",
      'hero.breadcrumb': "Tanzanie > Kilimandjaro > Route Umbwe",
      'hero.duration': "6 jours",
      'hero.description': "Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés à la recherche d'un défi unique et d'une solitude relative. C'est un trek intense et direct, exigeant une excellente condition physique et une gestion rigoureuse de l'altitude.",
      'hero.price': "1,900€",
      'miniNavbar.datesAndPrices': "Dates & Prix",
      'miniNavbar.proposeDate': "Proposer une date",
      'miniNavbar.details': "Détails",
      'miniNavbar.inclusions': "Inclusions",
      'miniNavbar.accommodation': "Hébergement",
      'detailedItineraryTitle': "La Voie Umbwe : L'Itinéraire Le Plus Direct (6 Jours)",
      'itinerary.day0.title': "Jour 0 : Jour d'arrivée",
      'itinerary.day0.altitude': "Altitude : 850 m / 2 790 pieds",
      'itinerary.day0.accommodation': "Hébergement : Hôtel",
      'itinerary.day0.description': "Aéroport international du Kilimandjaro (JRO) → Moshi ou Arusha\n\nInstallation à votre hôtel pour la nuit. Ce jour est essentiel pour le repos et le briefing final avec votre équipe de guides sur l'itinéraire rapide et les mesures de sécurité spécifiques à la voie Umbwe.",
      'itinerary.day1.title': "Jour 1 : De la forêt tropicale au camp d'Umbwe",
      'itinerary.day1.walkingTime': "Temps de marche : 6-7 heures",
      'itinerary.day1.distance': "Distance : 11 km / 7 miles",
      'itinerary.day1.altitude': "Altitude : de 1 600 m à2 900m",
      'itinerary.day1.habitat': "Habitat : Forêt",
      'itinerary.day1.description': "Nous entrons dans le parc national du Kilimandjaro par la Porte Machame, où nous nous enregistrons pour le trek. Le début de la randonnée s'engage immédiatement dans la dense forêt tropicale humide. Le sentier est raide et soutenu, nous menant directement au camp d'Umbwe, notre lieu de repos pour la nuit",
      'itinerary.day2.title': "Jour 2 : Du camp d'Umbwe au camp de Barranco",
      'itinerary.day2.walkingTime': "Temps de marche : 4-5 heures",
      'itinerary.day2.distance': "Distance : 6 km / 4 miles",
      'itinerary.day2.altitude': "Altitude : de 2 940 m à 3 976 m",
      'itinerary.day2.habitat': "Habitat : Lande",
      'itinerary.day2.description': "Le sentier devient plus rocailleux et spectaculaire à mesure que nous quittons la forêt pour les landes. Nous traversons une forêt de séneçons, où l'on peut admirer les séneçons géants, une curiosité botanique unique. Après une marche soutenue sur des crêtes, nous rejoignons la zone plus animée de la route sud et arrivons au camp de Barranco pour la nuit.",
      'itinerary.day3.title': "Jour 3 : Mur de Barranco et camp de Karanga",
      'itinerary.day3.walkingTime': "Temps de marche : 4-5 heures",
      'itinerary.day3.distance': "Distance : 5 km / 3 miles",
      'itinerary.day3.altitude': "Altitude : de 3 976 m à 3 995 m",
      'itinerary.day3.habitat': "Habitat : Désert alpin",
      'itinerary.day3.description': "Cette étape est cruciale pour l'acclimatation. Après un petit-déjeuner matinal, nous faisons face à l'impressionnante paroi de Barranco (le fameux \"Breakfast Wall\"). Bien que vertical, il s'agit d'une escalade assistée par les mains, non technique et souvent moins difficile que ce à quoi l'on s'attend. Au sommet, nous profitons de vues imprenables sur les champs de glace du sud. Le sentier serpente ensuite jusqu'au camp de Karanga, où nous nous reposons et nous préparons.",
      'itinerary.day4.title': "Jour 4 : Du camp de Karanga au camp de Barafu",
      'itinerary.day4.walkingTime': "Temps de marche : 3 heures",
      'itinerary.day4.distance': "Distance : 4 km / 2 miles",
      'itinerary.day4.altitude': "Altitude : de 3 995 m à 4 673 m",
      'itinerary.day4.habitat': "Habitat : Désert alpin",
      'itinerary.day4.description': "Les choses sérieuses continuent ! Nous sommes maintenant très proches du sommet. Aujourd'hui, une courte marche nous mène au camp de Barafu (\"glace\" en swahili), le camp de base du sommet. Les vues tout au long de la randonnée sont à couper le souffle, nous permettant d'apercevoir le Kibo sous différents angles. Ce soir, le coucher est précoce, car l'ascension finale commence vers minuit.",
      'itinerary.day5.title': "Jour 5 : Sommet Uhuru et descente à Mweka",
      'itinerary.day5.walkingTime': "Temps de marche : 6-8 heures",
      'itinerary.day5.distance': "Distance : 5 km / 3 miles",
      'itinerary.day5.altitude': "Altitude : de 4 673 m à 5 895 m",
      'itinerary.day5.habitat': "Habitat : Arctique",
      'itinerary.day5.description': "C'est le grand jour ! L'ascension du sommet commence vers minuit dans l'obscurité et le froid.\nPartie 1 : Camp de Barafu au pic Uhuru\nL'itinéraire se dirige vers le nord-ouest sur un sentier principalement composé d'éboulis glissants. Après environ six à huit heures d'effort, vous atteignez Uhuru Peak, qui culmine à 5 895 m d'altitude. L'émotion d'être au sommet de l'Afrique est indescriptible !\n\nPartie 2 : Pic Uhuru au camp de Mweka\nAprès avoir immortalisé l'instant au sommet, nous commençons la longue descente vers le camp de Mweka à 3 068 m d'altitude. Le retour dans la zone forestière est un soulagement, vous permettant de respirer plus facilement et de profiter de votre dernière nuit sur la montagne.",
      'itinerary.day6.title': "Jour 6 : Descente finale et transfert à l'hôtel",
      'itinerary.day6.walkingTime': "Temps de marche : 3 heures",
      'itinerary.day6.distance': "Distance : 10 km / 6 miles",
      'itinerary.day6.altitude': "Altitude : de 3 068 m à 1 640 m",
      'itinerary.day6.habitat': "Habitat : Forêt tropicale",
      'itinerary.day6.description': "Aujourd'hui, nous terminons la descente en traversant la forêt tropicale pour atteindre la Porte Mweka, au pied de la montagne. Votre chauffeur vous attendra pour vous transférer à votre hôtel à Moshi ou Arusha. Félicitations pour votre incroyable aventure !",
      'itinerary.departureDay.title': "Jour du départ : Départ du Kilimandjaro",
      'itinerary.departureDay.description': "Profitez d'un petit-déjeuner tranquille. Selon l'horaire de votre vol, nous organiserons votre transfert de retour à l'aéroport international du Kilimandjaro (JRO) pour votre vol de retour ou pour la poursuite de votre voyage (safari, Zanzibar, etc.).",
      'inclusions.title': "Inclusions et Exclusions",
      'inclusions.priceIncludes': "Le Prix Comprend",
      'inclusions.priceDoesNotInclude': "Le Prix Ne Comprend Pas",
      'inclusions.seeMore': "Voir plus",
      'inclusions.seeFewer': "Voir moins",
      'inclusions.exclusions.visa': "Visa",
      'inclusions.exclusions.airfares': "L'avion",
      'inclusions.exclusions.transfers': "Pourboires",
      'inclusions.exclusions.insurance': "Assurance",
      'inclusions.exclusions.tips': "Pourboires",
      'inclusions.exclusions.singleSupplement': "Objet personnels",
      'inclusions.items': "Deux nuits d'hébergement à l'hôtel|||Transport privé aller-retour depuis l'aéroport international du Kilimandjaro jusqu'à votre hôtel à Moshi|||Guides qualifiés avec équipage de montagne|||Droits d'entrée au parc national|||TVA de 18 % sur les frais d'excursion et les services|||Tout le matériel de camping ; montagne|||Frais de sauvetage|||Tous les repas en montagne (petit-déjeuner, déjeuner et dîner)|||Guides et porteurs|||Hébergement et droits d'entrée en montagne|||Oxymètre de pouls|||Trousse de premiers secours|||Urgence respiratoire|||Salaires équitables pour les guides et les porteurs, approuvés par l'Autorité du parc national du Kilimandjaro",
      'datesAndPrices.title': "Dates et Prix",
      'datesAndPrices.groupDiscounts': "Réductions de Groupe",
      'datesAndPrices.dontSeeDates': "Ne trouvez pas les dates qui vous conviennent? Nous pouvons organiser un départ privé pour votre groupe.",
      'datesAndPrices.enquireButton': "Demander un devis",
      'datesAndPrices.proposeNewDate': "Proposer une Nouvelle Date",
      'datesAndPrices.proposeDateDescription': "Proposez vos dates préférées et nous vous répondrons avec un itinéraire personnalisé.",
      'datesAndPrices.proposeDateButton': "Proposer une date",
      'datesAndPrices.when': "Quand?",
      'datesAndPrices.selected': "sélectionné",
      'datesAndPrices.selectMonth': "Sélectionnez un mois",
      'datesAndPrices.groupOptions': "Options de Groupe",
      'datesAndPrices.selectGroup': "Sélectionnez un groupe",
      'datesAndPrices.soloTraveler': "Voyageur solo",
      'datesAndPrices.couple': "Couple",
      'datesAndPrices.familyGroup': "Groupe familial",
      'datesAndPrices.friendsGroup': "Groupe d'amis",
      'datesAndPrices.corporateGroup': "Groupe d'entreprise",
      'datesAndPrices.fromPrice': "1,900€",
      'accommodation.title': "Hébergement",
      'accommodation.camps.title': "Camps",
      'accommodation.camps.description': "Tout au long de l'ascension, vous serez hébergé dans des tentes résistantes aux intempéries fournies par nos soins. Chaque camp dispose de toilettes et de lieux d'hygiène de base. Les tentes sont partagées (deux personnes par tente sauf si une chambre individuelle a été réservée).",
      'gallery.title': "Galerie",
      'faqsTitle': "Foire aux Questions",
      'newsletter.title': "Prêt à vivre l'aventure?",
      'newsletter.subtitle': "Rejoignez notre newsletter",
      'newsletter.description': "Inscrivez-vous pour recevoir des conseils d'experts, des offres exclusives et des histoires inspirantes directement dans votre boîte de réception.",
      'newsletter.firstNamePlaceholder': "Prénom",
      'newsletter.emailPlaceholder': "Email",
      'newsletter.button': "S'inscrire",
      'contactModal.title': "Demander des informations",
      'contactModal.name': "Nom",
      'contactModal.namePlaceholder': "Entrez votre nom",
      'contactModal.email': "Email",
      'contactModal.emailPlaceholder': "Entrez votre email",
      'contactModal.phone': "Téléphone",
      'contactModal.phonePlaceholder': "Entrez votre téléphone",
      'contactModal.message': "Message",
      'contactModal.messagePlaceholder': "Entrez votre message",
      'contactModal.accept': "J'accepte",
      'contactModal.privacyPolicy': "la politique de confidentialité",
      'contactModal.submit': "Envoyer",
      'months.Jan': "Jan",
      'months.Feb': "Fév",
      'months.Mar': "Mar",
      'months.Apr': "Avr",
      'months.May': "Mai",
      'months.Jun': "Juin",
      'months.Jul': "Juil",
      'months.Aug': "Août",
      'months.Sep': "Sep",
      'months.Oct': "Oct",
      'months.Nov': "Nov",
      'months.Dec': "Déc",
    };
    
    return frMessages[key] || fallback;
  }
  
  // Fallback sample dates (small set) and parser to read translated month data if provided
  const fallbackSampleDates: Record<string, Array<any>> = {
    '2026-Jan': [
      { 
        date: 'Jan 3, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jan 17, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Feb': [
      { 
        date: 'Feb 7, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Feb 21, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Mar': [
      { 
        date: 'Mar 7, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Mar 21, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Apr': [
      { 
        date: 'Apr 4, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-May': [
      { 
        date: 'May 5, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Jun': [
      { 
        date: 'Jun 2, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jun 16, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Jul': [
      { 
        date: 'Jul 7, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jul 21, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Aug': [
      { 
        date: 'Aug 4, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Aug 18, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Sep': [
      { 
        date: 'Sep 1, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Sep 15, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Sep 29, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Oct': [
      { 
        date: 'Oct 13, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Oct 27, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Nov': [
      { 
        date: 'Nov 10, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ],
    '2026-Dec': [
      { 
        date: 'Dec 8, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      },
      { 
        date: 'Dec 22, 2026', 
        route: '6 Day - Umbwe Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€1,900',
          'Couple': '€1,900',
          'Family Group': '€2,200',
          'Friends Group': '€2,200',
          'Corporate Group': '€2,200'
        },
        deposit: '€100' 
      }
    ]
  }
  
  const getDatesForMonth = (monthKey: string): Array<any> => {
    try {
      const raw = safeT(`datesByMonth.${monthKey}`, '') as unknown
      if (typeof raw === 'string' && raw.length) {
        const s = raw as string
        if (s.trim().startsWith('[')) {
          try {
            const parsed = JSON.parse(s)
            if (Array.isArray(parsed)) return parsed
          } catch (e) {
            // fallthrough
          }
        }
      }
    } catch (e) {
      // ignore
    }
    return fallbackSampleDates[monthKey] || []
  }
  
  const [activeSection, setActiveSection] = useState('')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['Solo Traveler', 'Couple'])
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [showAllInclusions, setShowAllInclusions] = useState(false)
    const monthDropdownRef = useRef<HTMLDivElement>(null)
  const datesPricesRef = useRef<HTMLElement>(null)
  const inclusionsRef = useRef<HTMLElement>(null)
  const accommodationRef = useRef<HTMLElement>(null)

  const t = (key: string, fallback = '') => safeT(key, fallback)
  const isFrench = true

  // Debugging: log selected translation keys to browser console to diagnose
  // missing headings (remove after verification).
  useEffect(() => {
    try {
      // These will appear in the browser console when the component mounts
      // and help identify whether safeT is returning empty strings.
       
      console.log('umbwe i18n debug:', {
        gallery: t('gallery.title'),
        faqsTitle: t('faqsTitle'),
        faq_q1: t('faq.q1.question'),
      })
    } catch (e) {
       
      console.error('i18n debug error', e)
    }
  }, [])

  // All inclusions data - load from hardcoded messages
  const allInclusions = (() => {
    try {
      const itemsString = safeT('inclusions.items', '')
      if (itemsString && itemsString.includes('|||')) {
        return itemsString.split('|||')
      }
      // Fallback if items not found
      return []
    } catch (e) {
      return []
    }
  })()


  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsContactModalOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: datesPricesRef, name: 'datesPrices' },
        { ref: inclusionsRef, name: 'inclusions' },
        { ref: accommodationRef, name: 'accommodation' }
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

  useEffect(() => {
    const now = new Date()
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const monthsToCheck: string[] = []
    for (let i = 0; i < 18; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1)
      const m = monthNames[d.getMonth()]
      monthsToCheck.push(`${d.getFullYear()}-${m}`)
    }

    let foundMonth: string | null = null
    for (const mk of monthsToCheck) {
      const raw = safeT(`datesByMonth.${mk}`, '')
      if (raw && raw.length > 0) {
        foundMonth = mk
        break
      }
    }

    const initialMonth = foundMonth || `${now.getFullYear()}-${monthNames[now.getMonth()]}`

    setSelectedMonths((prev) => {
      if (!prev || prev.length === 0) return [initialMonth]
      return prev
    })

    const defaultItinerary = safeT('defaultItinerary', 'Umbwe Route')
    setSelectedItineraries((prev) => {
      if (!prev || prev.length === 0) return [defaultItinerary]
      return prev
    })
  }, [])

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Mobile bottom padding to account for fixed bottom navbar */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>
      {/* Reuse same layout and sections as the Lemosho page but with Umbwe translations */}
      <section className="relative h-[450px] md:h-[500px] overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-machame.jpg" 
            alt="Kilimanjaro Umbwe Route" 
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: '50% 35%' }}
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] translate-y-[50%] bg-gradient-to-r from-[#008576]/40 to-[#00968A]/40 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-30" style={{height: 'auto', minHeight: isFrench ? '220px' : '180px'}}>
          <div className="p-6">
            <h1 className="text-xl font-serif font-semibold mb-3 text-white">
              {t('hero.title')}
            </h1>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg text-white">{t('hero.breadcrumb')}</span>
            </div>
            <div className="flex items-center mb-3">
              <Clock className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg font-bold text-white">{t('hero.duration')}</span>
            </div>
            <p className="text-white text-base leading-relaxed">
              {t('hero.description')}
            </p>

          </div>
        </div>
      </section>

      <div className="hidden md:block" style={{height: isFrench ? '180px' : '140px'}}></div>

      {/* Square Card Section - Separate in mobile view with wavy intersection */}
      <div className="w-full px-0 md:hidden -mt-1">
        <div className="w-full bg-gradient-to-r from-[#008576]/40 to-[#00968A]/40 backdrop-blur-sm shadow-xl overflow-hidden relative" style={{height: isFrench ? '620px' : '520px'}}>
          {/* Wavy separator */}
          <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
            <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#000000" fillOpacity="0.5" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
          <div className="p-4 pt-6">
            <h1 className="text-xl font-serif font-semibold mb-4 text-white">
              {t('hero.title')}
            </h1>
            
            <div className="flex items-center mb-3">
              <MapPin className="mr-2 h-5 w-5 text-white" />
              <span className="text-2xl text-white">{t('hero.breadcrumb')}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-white" />
              <span className="text-xl text-white">{t('hero.duration')}</span>
            </div>
            
            <p className="text-white mb-4 text-xl">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* main content will follow (detailed itinerary, dates/prices, etc.) */}

      {/* Mini Navbar - Desktop View Only - Positioned below floating card */}
      <div className="hidden md:block bg-white py-4 sticky z-30 border-b border-gray-200 shadow-sm" style={{top: '64px'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[#00A896] font-bold text-xl bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent pr-4 border-r border-gray-300">
                {t('hero.price')}
              </span>
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
                onClick={() => setIsInquiryFormOpen(true)}
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
                {t('miniNavbar.inclusions')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'accommodation' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(accommodationRef)}
              >
                {t('miniNavbar.accommodation')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Mobile View Only */}
      <div className="md:hidden bg-white py-4 sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4">
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#f8d7da] text-[#721c24] font-medium hover:bg-[#f1b0b7] px-4 py-2 border border-[#f5c6cb] rounded-lg flex items-center justify-center text-sm" onClick={() => scrollToSection(datesPricesRef)}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('miniNavbar.datesAndPrices')}
            </button>
            <button className="bg-[#00A896] text-white font-medium hover:bg-[#008576] px-4 py-2 border border-[#00A896] rounded-lg flex items-center justify-center text-sm" onClick={() => setIsInquiryFormOpen(true)}>
              <User className="mr-2 h-4 w-4" />
              {t('miniNavbar.proposeDate')}
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Itinerary Section */}
      <section className="py-5 mt-0 md:mt-0">
        <div className="container mx-auto px-0">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              {t('detailedItineraryTitle')}
            </h2>
          </div>
          <div className="w-full mt-0">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              {/* Day blocks: use Umbwe itinerary keys */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day0.title')}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-sm px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day0.altitude')}</span>
                      <span className="text-sm px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day0.accommodation')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day0.description')}</p>
                  </div>
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/arrival1.jpg" alt="Arrival Day" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day1.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.walkingTime') || t('itinerary.day1.duration') }</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.altitude')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t('itinerary.day1.description')}</p>
                  </div>
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/umbwecamp.jpg" alt="Day 1" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Days 2-5: Loop through middle days */}
              {(() => {
                const dayImages = ['/images/barancocamp.jpg','/images/karangacamp.jpg','/images/barafucamp.jpg','/images/barafu.jpg']
                return [2,3,4,5].map((d, idx) => (
                  <div key={`day-${d}`} className="mb-12 pb-8 border-b border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className={d % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{t(`itinerary.day${d}.title`)}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                          <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t(`itinerary.day${d}.walkingTime`) || t(`itinerary.day${d}.duration`)}</span>
                          <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t(`itinerary.day${d}.distance`)}</span>
                          <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t(`itinerary.day${d}.altitude`) || t(`itinerary.day${d}.altitudeGain`)}</span>
                          <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t(`itinerary.day${d}.habitat`)}</span>
                        </div>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t(`itinerary.day${d}.description`)}</p>
                      </div>
                      <div className={d % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                        <div className="relative w-full h-96 rounded-xl overflow-hidden">
                          <Image src={dayImages[idx]} alt={`Day ${d}`} fill className="object-cover" unoptimized />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              })()}

              {/* Day 6 - Summit Day - Explicit block with specific image and details */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day6.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.altitude')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day6.description')}</p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/kilele1.jpg" alt="Day 6 - Summit Day" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Departure Day - Explicit block with specific details */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.departureDay.title')}</h3>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t('itinerary.departureDay.description')}</p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/moshi.jpg" alt="Departure Day" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section ref={inclusionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('inclusions.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6">{t('inclusions.priceIncludes')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              {allInclusions.map((inc, idx) => (
                <li key={`inc-${idx}`} className="flex items-start gap-3">
                  <CheckCircle className="text-[#00A896] mt-1" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-gray-600">{t('inclusions.priceDoesNotInclude')}</div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mt-4">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" />
                <span>{t('inclusions.exclusions.airfares')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" />
                <span>{t('inclusions.exclusions.visa')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" />
                <span>{t('inclusions.exclusions.tips')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" />
                <span>{t('inclusions.exclusions.insurance')}</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1" />
                <span>{t('inclusions.exclusions.singleSupplement')}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Book Your Trip - Compact Design */}
      <section ref={datesPricesRef} className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Book your trip
          </h2>
          
          {/* Compact Action Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => setIsInquiryFormOpen(true)}
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
              onClick={() => setIsInquiryFormOpen(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Don&apos;t see your dates?</h3>
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
                  <span className="font-semibold">{selectedMonths.length > 0 ? selectedMonths[0] : 'February 2026'}</span>
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
            
            {/* Group Options Selector */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsItineraryDropdownOpen(!isItineraryDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Group Options</span>
                  <span className="font-semibold">{selectedItineraries.length} Selected</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isItineraryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isItineraryDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  {['Solo Traveler', 'Couple', 'Family Group', 'Friends Group', 'Corporate Group'].map((opt, index) => {
                    const isSelected = selectedItineraries.includes(opt);
                    return (
                      <label key={opt} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={isSelected} 
                          onChange={() => {
                            if (isSelected) {
                              setSelectedItineraries(selectedItineraries.filter(s => s !== opt));
                            } else {
                              setSelectedItineraries([...selectedItineraries, opt]);
                            }
                          }} 
                          className="w-4 h-4 text-[#00A896] rounded"
                        />
                        <span className="text-base text-gray-800">{opt}</span>
                      </label>
                    );
                  })}
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
            {selectedMonths.map((monthKey) => {
              // Extracting year and month from monthKey, but not used in current implementation
              // const [year, month] = monthKey.split('-')
              const rawList = getDatesForMonth(monthKey)
              const list = (rawList || [])
              
              return list.map((item: any, idx: number) => {
                // Calculate price based on selected group options
                let displayPrice = item.prices && item.prices['Solo Traveler'] ? item.prices['Solo Traveler'] : item.price || 'Price not available';
                const displayDeposit = item.deposit || 'Deposit not available';
                
                if (selectedItineraries.length > 0) {
                  // If any group option is selected, use the price for that option
                  // For simplicity, if multiple options are selected, we'll use the first one
                  const selectedGroup = selectedItineraries[0];
                  if (item.prices && item.prices[selectedGroup]) {
                    displayPrice = item.prices[selectedGroup];
                  }
                }
                
                // No additional formatting needed - prices are already in correct format (e.g., '€2,200', '€100')
                
                return (
                <div key={`${monthKey}-${idx}`} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900 text-base">{item.route}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-600">{item.status}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <div className="text-right">
                        <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">{displayPrice}</span></div>
                        <div className="text-sm text-gray-500">Deposit {displayDeposit}</div>
                      </div>
                      <button 
                        onClick={() => setIsContactModalOpen(true)}
                        className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
                )
              })
            })}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don&apos;t see your dates?</h3>
            <p className="text-gray-600 text-base mb-6">We can create it if bookable!</p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Propose Dates
            </button>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section ref={accommodationRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-center mb-8">
            <Bed className="mr-2 h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              {t('accommodation.title')}
            </h2>
          </div>
          
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  <Image src="/images/umbwe-camp.jpg" alt="Umbwe Camp" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('accommodation.camps.title')}</h3>
                  <p className="text-gray-500 mb-6 text-lg md:text-xl">
                    {t('accommodation.camps.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-0">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            {t('gallery.title')}
          </h2>
          
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/umbwe-route-overview.jpg" alt="Umbwe Route Gallery Image 1" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Umbwe Route Gallery Image 2" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Umbwe Route Gallery Image 3" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-umbwe.jpg" alt="Umbwe Route Gallery Image 4" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">{t('faqsTitle')}</h2>
              <Faq
                items={[
                  { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
                  { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
                  { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
                  { question: "Kilimandjaro : Faut-il se doucher pendant une ascension de 8 à 10 jours ?", answer: "Non, il n’est généralement pas possible de prendre une vraie douche lors d'une ascension du Kilimandjaro. Les camps de haute altitude sont situés dans des zones sauvages protégées, dépourvues d'installations sanitaires modernes ou d'eau courante. L’eau y est une ressource précieuse, réservée en priorité à la cuisine et à l’hydratation des grimpeurs.\n\nCependant, ne pas se doucher ne signifie pas négliger l’hygiène. Nos randonneurs utilisent des solutions simples et efficaces pour rester frais et en bonne santé tout au long du trek :\n\n1). Toilette quotidienne : Une bassine d'eau tiède et un gant de toilette sont fournis par notre équipe chaque matin et soir.\n\n2). Lingettes biodégradables : Idéales pour un nettoyage rapide du corps tout en respectant l'environnement.\n\n3). Lavage fréquent des mains : Une étape cruciale pour garantir votre santé et éviter les bactéries en groupe.\n\n4). Change régulier : Le renouvellement des vêtements techniques et des sous-vêtements est essentiel.\n\n5). Hygiène des pieds : Un soin rigoureux pour prévenir les ampoules et les infections durant la marche.\n\nPourquoi la douche n’est pas une priorité en altitude ?\nEn haute montagne, votre corps mobilise toute son énergie pour l'acclimatation. Se doucher à l’eau froide augmente considérablement le risque de fatigue et de refroidissement (hypothermie légère). Pour réussir votre sommet, votre priorité doit rester l’hydratation, le repos et l’adaptation progressive à l’altitude.\n\nL’avis du guide : Passer 8 à 10 jours sans douche est tout à fait normal et fait partie de l'aventure. Avec une hygiène de base bien gérée, vous resterez en pleine forme et concentré sur votre objectif : atteindre le pic Uhuru." }
                ]}
              />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-umbwe.jpg" 
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
            {t('newsletter.title')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {t('newsletter.subtitle')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {t('newsletter.description')}
          </p>
          <NewsletterForm t={t} />
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{t('contactModal.title')}</h2>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.namePlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.emailPlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.phonePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    {t('contactModal.accept')} <a href="#" className="text-[#00A896] hover:text-[#008576] underline">{t('contactModal.privacyPolicy')}</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('contactModal.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {isInquiryFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsInquiryFormOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Ready to conquer Mount Kilimanjaro?</h2>
                <button 
                  onClick={() => setIsInquiryFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                We'll send you a personalised itinerary and put you in touch with one of our Tanzania experts.
              </p>
              
              {/* Inquiry Form */}
              <form onSubmit={(e) => { e.preventDefault(); setIsInquiryFormOpen(false) }} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-travellers" className="block text-sm font-medium text-gray-700 mb-1">No. of Travellers *</label>
                  <select id="inquiry-travellers" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" required>
                    <option value="">Select number</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-when" className="block text-sm font-medium text-gray-700 mb-1">When do you want to travel? *</label>
                  <select id="inquiry-when" className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" required>
                    <option value="">Select range</option>
                    <option>Jan - Mar 2026</option>
                    <option>Apr - Jun 2026</option>
                    <option>Jul - Sep 2026</option>
                    <option>Oct - Dec 2026</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-lg transition-colors">Go</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
