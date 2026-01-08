'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Download, Star, Users, Clock, MapPin, Calendar, User, Bed, Map, CheckCircle, XCircle, Info } from 'lucide-react'
import { useTranslations } from 'next-intl';
import { submitNewsletterSubscription, submitDownloadRequest } from '@/lib/actions/contact';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import enMessages from '../../../../../locales/en.json'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import frMessages from '../../../../../locales/fr.json'
import Image from 'next/image'
import Faq from '@/components/ui/faq'
import { useParams } from 'next/navigation'

// Trip details placeholder (realized per-locale below inside component)
const tripDetails: any[] = []

// Blog categories data with localized information
const blogCategories = [
  {
    id: 1,
    title: {
      en: "Kilimanjaro Trekking",
      fr: "Randonnée du Kilimandjaro"
    },
    subtitle: {
      en: "Travel Guide",
      fr: "Guide de voyage"
    },
    image: "/images/african-safaris.jpg",
    description: {
      en: "Trek Kilimanjaro – a once-in-a-lifetime adventure to the Roof of Africa. All you need to know.",
      fr: "Randonnée du Kilimandjaro — une aventure unique au sommet de l'Afrique. Tout ce que vous devez savoir."
    },
    topReads: [
      {
        id: 101,
        title: {
          en: "The ultimate Kilimanjaro packing list (+ free PDF)",
          fr: "La liste ultime d'équipement pour le Kilimandjaro (+ PDF gratuit)"
        },
        image: "/images/kilimanjaro-packing.jpg",
        description: {
          en: "What you pack for your Kilimanjaro climb is vitally important to your health and the success of your trek. We've put together a comprehensive list of what to pack, and why. Please use this as a checklist in planning and packing for your Kili adventure.",
          fr: "Ce que vous emportez pour votre ascension du Kilimandjaro est vital pour votre santé et le succès de votre randonnée. Nous avons établi une liste complète de ce qu'il faut emporter, et pourquoi. Utilisez ceci comme liste de contrôle pour planifier et préparer votre aventure Kili."
        }
      },
      {
        id: 102,
        title: {
          en: "How much does it cost to trek Kilimanjaro?",
          fr: "Combien coûte une randonnée sur le Kilimandjaro ?"
        },
        image: "/images/kilimanjaro-cost.jpg",
        description: {
          en: "A seven-day Kilimanjaro climb costs €1,800 with Latanzanieaucourdelanature. This price includes all of your food, camping equipment, and much more. Here's a breakdown of what's included in the price as well as the costs of any exclusions like your Tanzanian visa.",
          fr: "Une ascension de sept jours du Kilimandjaro coûte 1 800 € avec Latanzanieaucourdelanature. Ce prix comprend toute votre nourriture, votre équipement de camping, et bien plus. Voici une ventilation de ce qui est inclus dans le prix ainsi que les coûts des exclusions comme votre visa tanzanien."
        }
      },
      {
        id: 103,
        title: {
          en: "Kilimanjaro vs Everest Base Camp: which is harder?",
          fr: "Kilimandjaro vs Camp de Base de l'Everest : lequel est le plus difficile ?"
        },
        image: "/images/kilimanjaro-vs-everest.jpg",
        description: {
          en: "Kilimanjaro and Everest Base Camp are two of the world's most famous and challenging high-altitude treks. But they're very different from one another. We discuss these differences and make the case that Kilimanjaro is the harder trek overall.",
          fr: "Le Kilimandjaro et le Camp de Base de l'Everest sont deux des randonnées d'altitude les plus célèbres et difficiles au monde. Mais elles sont très différentes l'une de l'autre. Nous discutons de ces différences et soutenons que le Kilimandjaro est la randonnée la plus difficile dans l'ensemble."
        }
      }
    ],
    allTopics: [
      {
        category: {
          en: "Personal hygiene on trek",
          fr: "Hygiène personnelle en trek"
        },
        icon: "🧴",
        posts: [
          {
            title: {
              en: "Maintaining good hygiene on Kilimanjaro",
              fr: "Comment maintenir une bonne hygiène au Kilimandjaro"
            },
            href: "/travel-blogs/comment-maintenir-bonne-hygiene-kilimandjaro"
          },
          {
            title: {
              en: "Private toilets on trek — are they necessary?",
              fr: "Toilettes privées : sont-elles nécessaires ?"
            },
            href: "/travel-blogs/toilettes-privees-necessaires"
          },
          {
            title: {
              en: "Hygiene items to pack",
              fr: "Articles d'hygiène à emporter"
            },
            href: "/travel-blogs/articles-hygiene-emporter"
          },
          {
            title: {
              en: "Staying clean without water",
              fr: "Rester propre sans eau"
            },
            href: "/travel-blogs/rester-propre-sans-eau"
          },
          {
            title: {
              en: "Women's hygiene during ascent",
              fr: "Hygiène des femmes pendant l'ascension"
            },
            href: "/travel-blogs/hygiene-femmes-ascension"
          },
          {
            title: {
              en: "Food hygiene on trek",
              fr: "Hygiène alimentaire en trek"
            },
            href: "/travel-blogs/hygiene-alimentaire"
          }
        ]
      },
      {
        category: {
          en: "Climate and seasons",
          fr: "Climat et saisons"
        },
        icon: "📅",
        posts: [
          {
            title: {
              en: "Best time to climb Kilimanjaro",
              fr: "Meilleure période pour gravir le Kilimandjaro"
            },
            href: "/travel-blogs/best-season"
          },
          {
            title: {
              en: "Choosing the Right Season for Hiking",
              fr: "Choisir la Bonne Saison pour la Randonnée"
            },
            href: "/travel-blogs/choisir-bonne-saison-randonnee"
          },          {
            title: {
              en: "Kilimanjaro — The 5 Climate Zones and Altitudes",
              fr: "Kilimandjaro : Les 5 Zones Climatiques et Altitudes"
            },
            href: "/travel-blogs/climate-zones"
          },
          {
            title: {
              en: "How to dress for the 5 climate zones of Kilimanjaro",
              fr: "Comment s'habiller pour les 5 zones climatiques du Kilimandjaro"
            },
            href: "/travel-blogs/dress-for-zones"
          }
          ,
          {
            title: {
              en: "Kilimanjaro routes — complete guide",
              fr: "Itinéraires du Kilimandjaro"
            },
            href: "/travel-blogs/kilimanjaro-routes"
          },
          {
            title: {
              en: "Drying gear and keeping kit dry",
              fr: "Matériel de séchage et garder le matériel au sec"
            },
            href: "/travel-blogs/drying-gear"
          }
        ]
      },
      {
        category: {
          en: "Altitude Health",
          fr: "Santé en altitude"
        },
        icon: "🏔️",
        posts: [
          {
            title: {
              en: "Altitude Health: Symptoms and How to Prevent Acute Mountain Sickness (AMS)",
              fr: "Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)"
            },
            href: "/travel-blogs/sante-en-altitude"
          },
          {
            title: {
              en: "Emergency Evacuation on Kilimanjaro: Complete Guide for Hikers",
              fr: "Évacuation d'urgence sur le Kilimandjaro : guide complet pour les randonneurs"
            },
            href: "/travel-blogs/evacuation-urgence"
          },
          {
            title: {
              en: "Diamox for Kilimanjaro Climbing: Everything Hikers Need to Know",
              fr: "Le Diamox pour l'ascension du Kilimandjaro : tout ce que les trekkeurs doivent savoir"
            },
            href: "/travel-blogs/diamox-kilimanjar"
          },
          {
            title: {
              en: "What Types of Meals Are Served at Altitude on Kilimanjaro to Maintain Energy Despite Loss of Appetite?",
              fr: "Quels types de repas sont servis en altitude sur le Kilimandjaro pour maintenir l'énergie malgré la perte d'appétit ?"
            },
            href: "/travel-blogs/alimentation-kilimanjar"
          },
          {
            title: {
              en: "Acclimatization Techniques for Kilimanjaro",
              fr: "Techniques d'acclimatation pour le Kilimandjaro"
            },
            href: "/travel-blogs/acclimatation-kilimanjar"
          },
          {
            title: {
              en: "Sleep and Recovery on Kilimanjaro",
              fr: "Sommeil et récupération sur le Kilimandjaro"
            },
            href: "/travel-blogs/sommeil-kilimanjar"
          },
          {
            title: {
              en: "Medical Check-up for Kilimanjaro",
              fr: "Check-up médical pour le Kilimandjaro"
            },
            href: "/travel-blogs/check-up-medical-kilimanjar"
          }
        ]
      },
      {
        category: {
          en: "Preparing for the Kilimanjaro Ascent",
          fr: "Préparation à l'ascension du Kilimandjaro"
        },
        icon: "🎒",
        posts: [
          {
            title: { en: "Preparing your body for altitude", fr: "Comment préparer son corps à l’altitude" },
            href: "/travel-blogs/preparer-son-corps-altitude-kilimandjaro"
          },
          {
            title: { en: "How to train for Kilimanjaro", fr: "Comment s'entraîner pour le Kilimandjaro" },
            href: "/travel-blogs/preparation-physique-ascension-kilimandjaro"
          },
          {
            title: { en: "Why mental preparation matters", fr: "Pourquoi la préparation mentale est importante" },
            href: "/travel-blogs/preparation-mentale-kilimandjaro"
          },
          {
            title: { en: "Choosing hiking boots for Kilimanjaro", fr: "Comment choisir ses chaussures de randonnée" },
            href: "/travel-blogs/choisir-chaussures-randonnee-kilimandjaro"
          },
          {
            title: { en: "Route choice and preparation", fr: "En quoi le choix de l’itinéraire fait partie de la préparation" },
            href: "/travel-blogs/choix-itineraire-preparation-kilimandjaro"
          },
          {
            title: { en: "Medical preparation before Kilimanjaro", fr: "Quelle préparation médicale faut-il prévoir" },
            href: "/travel-blogs/preparation-medicale-kilimandjaro"
          },
          {
            title: { en: "Why hire a local guide", fr: "Pourquoi engager un guide local est essentiel" },
            href: "/travel-blogs/engager-guide-local-kilimandjaro"
          }
        ]
      },
      {
        category: {
          en: "Physical Preparation for Kilimanjaro",
          fr: "Préparation physique pour le Kilimandjaro"
        },
        icon: "💪",
        posts: [
          {
            title: { en: "How to train for Kilimanjaro when living in the city", fr: "Comment s’entraîner pour le Kilimandjaro quand on habite en ville" },
            href: "/travel-blogs/preparation-physique-kilimandjaro"
          },
          {
            title: { en: "Can you get used to altitude before going to Tanzania?", fr: "Peut-on s'habituer à l'altitude avant de partir en Tanzanie ?" },
            href: "/travel-blogs/shabituer-altitude-tanzanie"
          },
          {
            title: { en: "Physical preparation for Kilimanjaro ascent", fr: "Préparation physique pour l’ascension du Kilimandjaro" },
            href: "/travel-blogs/preparation-physique-ascension-kilimandjaro"
          },
          {
            title: { en: "What is the real physical level required to climb Kilimanjaro?", fr: "Quel est le niveau physique réel pour monter le Kilimandjaro ?" },
            href: "/travel-blogs/niveau-physique-kilimandjaro"
          },
          {
            title: { en: "How to prepare your mind for the Kilimanjaro summit night", fr: "Comment préparer son mental pour la nuit du sommet du Kilimandjaro" },
            href: "/travel-blogs/preparer-mental-nuit-sommet-kilimandjaro"
          }
        ]
      },
      {
        category: {
          en: "Zero Trace Expeditions",
          fr: "Expédition zéro trace"
        },
        icon: "🌍",
        posts: [
          {
            title: { en: "Zero Trace Expeditions on Kilimanjaro: What Does It Really Mean?", fr: "Expéditions Zéro Trace sur le Kilimandjaro : qu’est-ce que cela signifie vraiment ?" },
            href: "/travel-blogs/expedition-zero-trace-kilimandjaro"
          },
          {
            title: { en: "How Travelers Can Contribute to a Zero Trace Expedition on Kilimanjaro", fr: "Comment les voyageurs peuvent contribuer à une expédition Zéro Trace sur le Kilimandjaro" },
            href: "/travel-blogs/contribuer-expedition-zero-trace-kilimandjaro"
          },
          {
            title: { en: "Difference Between a Classic Expedition and a Zero Trace Expedition on Kilimanjaro", fr: "Différence entre une expédition classique et une expédition Zéro Trace sur le Kilimandjaro" },
            href: "/travel-blogs/difference-expedition-classique-zero-trace-kilimandjaro"
          },
          {
            title: { en: "Zero Trace Expeditions: The Future of Responsible Trekking on Kilimanjaro", fr: "Expéditions Zéro Trace : l’avenir du trekking responsable au Kilimandjaro" },
            href: "/travel-blogs/avenir-trekking-responsable-kilimandjaro"
          }
        ]
      },
      {
        category: {
          en: "Kilimanjaro pack list",
          fr: "Kilimanjaro pack list"
        },
        icon: "🗺️",
        posts: [
          {
            title: { en: "Clothing & gear by season", fr: "Vêtements & équipements par saison" },
            href: "/travel-blogs/vetements-equipements-saisons-kilimandjaro"
          },
          {
            title: { en: "Commonly forgotten packing items", fr: "Objets souvent oubliés — liste de packing" },
            href: "/travel-blogs/objets-souvent-oublies-packing-list"
          },
          {
            title: { en: "Trekking poles for Kilimanjaro", fr: "Bâtons de randonnée pour le Kilimandjaro" },
            href: "/travel-blogs/batons-randonnee-kilimandjaro"
          },
          {
            title: { en: "Mandatory equipment for Kilimanjaro", fr: "Équipement obligatoire pour le Kilimandjaro" },
            href: "/travel-blogs/equipement-obligatoire-kilimandjaro"
          },
          {
            title: { en: "Renting gear in Moshi", fr: "Louer du matériel à Moshi" },
            href: "/travel-blogs/louer-materiel-moshi"
          },
          {
            title: { en: "Kilimanjaro packing list (ultimate)", fr: "Liste de matériel pour le Kilimandjaro" },
            href: "/travel-blogs/kilimanjaro-packing-list"
          }
        ]
      },
      {
        category: {
          en: "Kilimanjaro Porters",
          fr: "Porteurs du Kilimandjaro"
        },
        icon: "🧑‍🦱",
        posts: [
          {
            title: {
              en: "Who are the Kilimanjaro porters and what is their exact role?",
              fr: "Qui sont les porteurs du Kilimandjaro et quel est leur rôle exact ?"
            },
            href: "/travel-blogs/porteurs-du-kilimandjaro/qui-sont-les-porteurs"
          },
          {
            title: {
              en: "What are the working conditions of porters on Kilimanjaro?",
              fr: "Quelles sont les conditions de travail des porteurs sur le Kilimandjaro ?"
            },
            href: "/travel-blogs/porteurs-du-kilimandjaro/conditions-de-travail"
          },
          {
            title: {
              en: "How much weight can a porter legally carry on Kilimanjaro?",
              fr: "Combien de poids un porteur peut-il légalement porter sur le Kilimandjaro ?"
            },
            href: "/travel-blogs/porteurs-du-kilimandjaro/poids-legal"
          },
          {
            title: {
              en: "How can travelers respect and support porters during the ascent?",
              fr: "Comment les voyageurs peuvent-ils respecter et soutenir les porteurs pendant l’ascension ?"
            },
            href: "/travel-blogs/porteurs-du-kilimandjaro/respecter-soutenir"
          }
        ]
      }
    ],
    trips: [
      {
        id: 201,
        title: {
          en: "Lemosho Route",
          fr: "Itinéraire Lemosho"
        },
        price: 2950,
        duration: {
          en: "10 days",
          fr: "10 jours"
        },
        rating: 5.0,
        image: "/images/lemosho-route.jpg",
        description: {
          en: "The Lemosho is one of our favourite routes up Kilimanjaro as it has varied and beautiful scenery. It also has a high summit success rate!",
          fr: "Le Lemosho est l'un de nos itinéraires préférés pour gravir le Kilimandjaro car il offre des paysages variés et magnifiques. Il a également un taux de réussite au sommet élevé !"
        }
      },
      {
        id: 202,
        title: {
          en: "Northern Circuit",
          fr: "Circuit Nord"
        },
        price: 3490,
        duration: {
          en: "11 days",
          fr: "11 jours"
        },
        rating: 5.0,
        image: "/images/northern-circuit.jpg",
        description: {
          en: "The Northern Circuit (also known as the Grand Traverse) is the newest route up Kilimanjaro and it has an excellent summit success rate!",
          fr: "Le Circuit Nord (également connu sous le nom de Grande Traversée) est le plus récent itinéraire du Kilimandjaro et il a un excellent taux de réussite au sommet !"
        }
      },
      {
        id: 203,
        title: {
          en: "Machame Route",
          fr: "Itinéraire Machame"
        },
        price: 2890,
        duration: {
          en: "9 days",
          fr: "9 jours"
        },
        rating: 5.0,
        image: "/images/machame-route.jpg",
        description: {
          en: "The Machame is a beautiful and popular route. It's a middling route in terms of duration and difficulty.",
          fr: "Le Machame est un itinéraire magnifique et populaire. C'est un itinéraire intermédiaire en termes de durée et de difficulté."
        }
      }
    ]
  },
  {
    id: 23,
    title: {
      en: "Best time to climb Kilimanjaro",
      fr: "Meilleure période pour gravir le Kilimandjaro"
    },
    subtitle: {
      en: "Travel Guide",
      fr: "Guide de voyage"
    },
    image: "/images/best-season.jpg",
    description: {
      en: "When to climb Kilimanjaro: guide to dry and rainy seasons, route recommendations, and tips to maximize summit success.",
      fr: "Quand gravir le Kilimandjaro : guide des saisons sèches et humides, recommandations d'itinéraires et conseils pour maximiser les chances de succès au sommet."
    },
    topReads: [
      {
        id: 301,
        title: {
          en: "Best time to climb Kilimanjaro",
          fr: "Meilleure période pour gravir le Kilimandjaro"
        },
        image: "/images/best-season-card.jpg",
        description: {
          en: "Overview of seasons and recommended months.",
          fr: "Aperçu des saisons et mois recommandés."
        }
      }
    ],
    allTopics: [
      {
        category: {
          en: "Climate and seasons",
          fr: "Climat et saisons"
        },
        icon: "📅",
        posts: [
          {
            en: "Best time to climb Kilimanjaro",
            fr: "Meilleure période pour gravir le Kilimandjaro"
          }
        ]
      },
      {
        category: {
          en: "Altitude Health",
          fr: "Santé en altitude"
        },
        icon: "💊",
        posts: [
          {
            title: {
              en: "Altitude Health: Symptoms and How to Prevent Acute Mountain Sickness (AMS)",
              fr: "Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)"
            },
            href: "/travel-blogs/sante-en-altitude"
          }
        ]
      },
    ],
    
    trips: []
  }
]

export default function TravelBlogDetailPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['lemosho', 'machame', 'marangu', 'umbwe'])
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const monthDropdownRef = useRef<HTMLDivElement>(null)
  const params = useParams()
  const locale = (params?.locale || 'en') as 'en' | 'fr'
  const slug = (params?.slug || '') as string
  
  // Determine translation namespace based on slug
  const getTranslationNamespace = (slug: string) => {
    switch (slug) {
      case 'climb-kilimanjaro':
        return 'ClimbKilimanjaroPage'
      case 'tanzania-safari':
        return 'TanzaniaSafariPage'
      case 'zanzibar-beach-holidays':
        return 'ZanzibarBeachHolidaysPage'
      default:
        return 'ClimbKilimanjaroPage'
    }
  }
  
  const t = useTranslations(getTranslationNamespace(slug))
  const tSee = useTranslations('SeeTripsPage')
  
  // Auto-scroll to the 'All Topics' section when on the climb-kilimanjaro page
  useEffect(() => {
    if (slug === 'climb-kilimanjaro') {
      // Wait for the page to render, then scroll to the section
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          // Check if there's a hash in the URL
          const hash = window.location.hash;
          if (hash) {
            // Remove the '#' and get the element ID
            const elementId = hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            // Fallback to scrolling to all-topics if no hash is present
            const element = document.getElementById('all-topics');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }, 100); // Small delay to ensure DOM is ready
      
      return () => clearTimeout(timer);
    }
  }, [slug]);

  // Build trip details using SeeTripsPage translations for the current locale (strings only)
  const tripDetails = [
    {
      slug: 'climb-kilimanjaro',
      title: tSee('trips.climb_kilimanjaro.title'),
      description: tSee('trips.climb_kilimanjaro.shortDescription'),
      duration: tSee('trips.climb_kilimanjaro.duration'),
      price: tSee('trips.climb_kilimanjaro.price'),
      rating: Number(tSee('trips.climb_kilimanjaro.rating')) || 5,
      image: '/images/climb.jpg'
    },
    {
      slug: 'tanzania-safari',
      title: tSee('trips.tanzania_safari.title'),
      description: tSee('trips.tanzania_safari.shortDescription'),
      duration: tSee('trips.tanzania_safari.duration'),
      price: tSee('trips.tanzania_safari.price'),
      rating: Number(tSee('trips.tanzania_safari.rating')) || 5,
      image: '/images/moshi.jpg'
    },
    {
      slug: 'zanzibar-beach-holidays',
      title: tSee('trips.zanzibar_beach.title'),
      description: tSee('trips.zanzibar_beach.shortDescription'),
      duration: tSee('trips.zanzibar_beach.duration'),
      price: tSee('trips.zanzibar_beach.price'),
      rating: Number(tSee('trips.zanzibar_beach.rating')) || 5,
      image: '/images/zanzibar.jpg'
    }
  ]
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr'

  // Find trip details by slug
  const trip = tripDetails.find(t => t.slug === slug)

  // Map slugs to blog category IDs
  const categoryMap: Record<string, number> = {
    'climb-kilimanjaro': 1,
    'tanzania-safari': 24, // Create a simple category for Tanzania Safari
    'zanzibar-beach-holidays': 25 // Create a simple category for Zanzibar Beach Holidays
  }
  
  // Add simple categories for other pages that don't need allTopics
  const additionalCategories = [
    {
      id: 24,
      title: {
        en: "Tanzania Safari",
        fr: "Safari en Tanzanie"
      },
      subtitle: {
        en: "Travel Guide",
        fr: "Guide de voyage"
      },
      image: "/images/tanzania-safari.jpg",
      description: {
        en: "Experience the incredible wildlife and landscapes of Tanzania on an unforgettable safari adventure.",
        fr: "Découvrez la faune et les paysages incroyables de la Tanzanie lors d'une aventure safari inoubliable."
      },
      topReads: [],
      allTopics: [],
      trips: []
    },
    {
      id: 25,
      title: {
        en: "Zanzibar Beach Holidays",
        fr: "Vacances Plage Zanzibar"
      },
      subtitle: {
        en: "Travel Guide",
        fr: "Guide de voyage"
      },
      image: "/images/zanzibar-beach.jpg",
      description: {
        en: "Relax on the pristine beaches of Zanzibar and explore the rich culture of the Spice Island.",
        fr: "Détendez-vous sur les plages immaculées de Zanzibar et explorez la riche culture de l'Île aux Épices."
      },
      topReads: [],
      allTopics: [],
      trips: []
    }
  ];
  
  // Combine original categories with additional ones
  const allCategories = [...blogCategories, ...additionalCategories];

  const categoryId = categoryMap[slug]
  const category = categoryId ? allCategories.find(cat => cat.id === categoryId) : null

  // Calculate date range for a trip
  const calculateDateRange = (startDate: Date, durationDays: number): string => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + durationDays - 1);

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const startMonth = monthNames[startDate.getMonth()];
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const year = startDate.getFullYear();

    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  };

  // Generate sample dates for each route (5 dates per route)
  const generateSampleDates = (routeId: string, durationDays: number, selectedMonth: string) => {
    const [yearStr, monthStr] = selectedMonth.split('-');
    const year = parseInt(yearStr);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = monthNames.indexOf(monthStr);

    if (monthIndex === -1) return [];

    const dates = [];
    for (let i = 0; i < 5; i++) {
      const departureDate = new Date(year, monthIndex, 5 + (i * 7)); // Weekly departures starting on 5th
      dates.push({
        startDate: departureDate,
        dateRange: calculateDateRange(departureDate, durationDays)
      });
    }
    return dates;
  };

  // Safe translation accessor that returns a fallback string when the key is missing
  const safeT = (key: string, fallback = ''): string => {
    // For data-driven keys (datesByMonth, datesAndPrices) we avoid calling
    // next-intl's `t` because missing namespaces cause it to throw a
      
    // MISSING_MESSAGE runtime error. Return the fallback for these keys so
    // the UI can continue to function and parse JSON-driven data separately.
    if (key.startsWith('datesByMonth.') || key.startsWith('datesAndPrices.')) {
      return fallback
    }
    // Avoid calling `t` if the message is absent in the raw locale JSON to
    // prevent next-intl from logging MISSING_MESSAGE before we can catch it.
    try {
      const namespace = getTranslationNamespace(slug)
      const messagesRoot: any = locale === 'fr' ? frMessages : enMessages
      const nsObj = messagesRoot?.[namespace]
      if (!nsObj) return fallback

      // Walk the key path inside the namespace to ensure the message exists
      const parts = key.split('.')
      let cur: any = nsObj
      for (const part of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, part)) {
          cur = cur[part]
        } else {
          // Key missing — return fallback WITHOUT calling `t` to avoid logs
          return fallback
        }
      }

      // Key exists in messages — call `t` to support formatting
      const maybe = t(key) as unknown
      if (typeof maybe === 'string') return maybe
      return fallback
    } catch (e) {
      return fallback
    }
  }

  // Dynamic package data based on slug
  const getPackagesForSlug = (slug: string) => {
    switch (slug) {
      case 'climb-kilimanjaro':
        return [
          {
            id: 'lemosho',
            name: t('itineraries.lemosho.title'),
            durationDays: 8,
            duration: t('itineraries.lemosho.duration'),
            price: t('itineraries.lemosho.price'),
            deposit: '€100',
            difficulty: 'Moderate',
            successRate: '95%',
            slug: 'lemosho-route',
            image: 'kilimanjaro-lemosho.jpg',
            description: t('itineraries.lemosho.description')
          },
          {
            id: 'machame',
            name: t('itineraries.machame.title'),
            durationDays: 7,
            duration: t('itineraries.machame.duration'),
            price: t('itineraries.machame.price'),
            deposit: '€100',
            difficulty: 'Moderate',
            successRate: '85%',
            slug: 'machame-route',
            image: 'kilimanjaro-machame.jpg',
            description: t('itineraries.machame.description')
          },
          {
            id: 'marangu',
            name: t('itineraries.marangu.title'),
            durationDays: 6,
            duration: t('itineraries.marangu.duration'),
            price: t('itineraries.marangu.price'),
            deposit: '€100',
            difficulty: 'Easy',
            successRate: '75%',
            slug: 'marangu-route',
            image: 'kilimanjaro-marangu.jpg',
            description: t('itineraries.marangu.description')
          },
          {
            id: 'umbwe',
            name: t('itineraries.umbwe.title'),
            durationDays: 7,
            duration: t('itineraries.umbwe.duration'),
            price: t('itineraries.umbwe.price'),
            deposit: '€100',
            difficulty: 'Challenging',
            successRate: '70%',
            slug: 'umbwe-route',
            image: 'kilimanjaro-umbwe.jpg',
            description: t('itineraries.umbwe.description')
          }
        ]
      case 'tanzania-safari':
        return [
          {
            id: 'camping-4day',
            name: t('routes.camping.title'),
            durationDays: 4,
            duration: t('routes.camping.duration'),
            price: t('routes.camping.price'),
            deposit: '€100',
            description: t('routes.camping.description'),
            slug: 'safari-bivouac-4-days',
            image: 'safari-bivouac.jpg',
            difficulty: 'Easy',
            successRate: '98%'
          },
          {
            id: 'camping-8day',
            name: t('routes.camping8Days.title'),
            durationDays: 8,
            duration: t('routes.camping8Days.duration'),
            price: t('routes.camping8Days.price'),
            deposit: '€100',
            description: t('routes.camping8Days.description'),
            slug: 'safari-bivouac-8-days',
            image: 'safari-bivouac.jpg',
            difficulty: 'Moderate',
            successRate: '95%'
          },
          {
            id: 'safari-kili-6day',
            name: t('routes.safariKiliAdventure.title'),
            durationDays: 6,
            duration: t('routes.safariKiliAdventure.duration'),
            price: t('routes.safariKiliAdventure.price'),
            deposit: '€100',
            description: t('routes.safariKiliAdventure.description'),
            slug: 'safari-kilimanjaro-6-days',
            image: 'safari-bivouac.jpg',
            difficulty: 'Moderate',
            successRate: '92%'
          },
          {
            id: 'safari-beach',
            name: t('routes.safariBeach.title'),
            durationDays: 10,
            duration: t('routes.safariBeach.duration'),
            price: t('routes.safariBeach.price'),
            deposit: '€100',
            description: t('routes.safariBeach.description'),
            slug: 'safari-beach-zanzibar-10-days',
            image: 'safari-beach.jpg',
            difficulty: 'Moderate',
            successRate: '95%'
          }
        ]
      case 'zanzibar-beach-holidays':
        return [
          {
            id: 'complete-escape',
            name: t('itineraries.completeEscape.title'),
            durationDays: 8,
            duration: t('itineraries.completeEscape.duration'),
            price: t('itineraries.completeEscape.price'),
            deposit: '€100',
            description: t('itineraries.completeEscape.description'),
            slug: 'zanzibar-complete-escape-8-days',
            image: 'zanzibar-complete-escape.jpg',
            difficulty: 'Easy',
            successRate: '99%'
          },
          {
            id: 'diving-culture',
            name: t('itineraries.divingCulture.title'),
            durationDays: 5,
            duration: t('itineraries.divingCulture.duration'),
            price: t('itineraries.divingCulture.price'),
            deposit: '€100',
            description: t('itineraries.divingCulture.description'),
            slug: 'zanzibar-diving-culture-5-days',
            image: 'zanzibar-diving.jpg',
            difficulty: 'Easy',
            successRate: '97%'
          },
          {
            id: 'safari-beach-combo',
            name: t('itineraries.safariBeach.title') || t('itineraries.safariBeach') || 'Safari & Beach',
            durationDays: 10,
            duration: t('itineraries.safariBeach.duration') || '10 days',
            price: t('itineraries.safariBeach.price') || '€2,500',
            deposit: '€100',
            description: t('itineraries.safariBeach.description') || '',
            slug: 'zanzibar-safari-beach-10-days',
            image: 'zanzibar.jpg',
            difficulty: 'Moderate',
            successRate: '95%'
          }
        ]
      default:
        return []
    }
  }

  const packages = getPackagesForSlug(slug)

  // Itinerary options (id + localized label) used for filtering and UI
  const itineraryOptions = packages.map(pkg => ({
    id: pkg.id,
    label: pkg.name
  }))

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setIsWhenDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

  // Smart default month picker and default itinerary selection
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

    // pick a sensible default itinerary id (not the localized label)
    const defaultItineraryId = 'lemosho'
    setSelectedMonths((prev) => prev)
    // ensure a sensible default itinerary is selected if none chosen
    setSelectedItineraries((prev) => {
      if (prev && prev.length > 0) return prev
      return [defaultItineraryId]
    })
  }, [])

  // Testimonial slider functionality
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const slider = document.querySelector('.testimonial-slider') as HTMLElement;
      const dots = document.querySelectorAll('.testimonial-slider button[data-slide]');
      
      if (!slider || dots.length === 0) return;
      
      let currentIndex = 0;
      const totalSlides = dots.length;
      let autoSlideInterval: NodeJS.Timeout;
      
      const updateSlider = () => {
        if (slider) {
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
          
          // Update active dot
          dots.forEach((dot, index) => {
            if (index === currentIndex) {
              dot.classList.add('bg-[#00A896]');
              dot.classList.remove('bg-gray-300');
            } else {
              dot.classList.remove('bg-[#00A896]');
              dot.classList.add('bg-gray-300');
            }
          });
        }
      };
      
      // Function to go to next slide
      const goToNext = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      };
      
      // Function to reset auto-slide
      const resetAutoSlide = () => {
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
        }
        autoSlideInterval = setInterval(goToNext, 5000); // Auto-slide every 5 seconds
      };
      
      // Add click handlers to dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
          resetAutoSlide(); // Restart auto-slide after manual interaction
        });
      });
      
      // Touch/swipe functionality
      let touchStartX = 0;
      let touchEndX = 0;
      
      const handleTouchStart = (e: TouchEvent) => {
        touchStartX = e.changedTouches[0].screenX;
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
        }
      };
      
      const handleTouchEnd = (e: TouchEvent) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        resetAutoSlide(); // Restart auto-slide after swipe
      };
      
      const handleSwipe = () => {
        const minSwipeDistance = 50;
        const swipeDistance = touchStartX - touchEndX;
        
        if (Math.abs(swipeDistance) < minSwipeDistance) return;
        
        if (swipeDistance > 0) {
          // Swipe left - next slide
          currentIndex = (currentIndex + 1) % totalSlides;
        } else {
          // Swipe right - previous slide
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        }
        
        updateSlider();
      };
      
      slider.addEventListener('touchstart', handleTouchStart);
      slider.addEventListener('touchend', handleTouchEnd);
      
      // Initialize slider
      updateSlider();
      resetAutoSlide(); // Start auto-sliding
      
      // Cleanup event listeners
      return () => {
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
        }
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  if (!trip || !category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-gray-800">Adventure not found</h1>
        <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
      </div>
    )
  }

  // For climb-kilimanjaro, tanzania-safari, and zanzibar-beach-holidays, show full page content
  if (slug === 'climb-kilimanjaro' || slug === 'tanzania-safari' || slug === 'zanzibar-beach-holidays') {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section - Simplified without video background */}
        <section className="relative bg-gradient-to-r from-[#5BC4AF] to-[#008576] py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Trip Information */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  {t('hero.title')}
                </h1>

                <div className="flex items-center mb-4">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span className="text-lg">Trips/Climb Kilimanjaro</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <Clock className="mr-3 h-5 w-5" />
                    <span className="text-lg">{t('hero.durationLabel')}: {t('hero.duration')}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5" />
                    <span className="text-lg">{t('hero.difficultyLabel')}: {t('hero.difficulty')}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5" />
                    <span className="text-lg">{t('hero.groupSizeLabel')}: {t('hero.groupSize')}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-3 h-5 w-5" />
                    <span className="text-lg">{t('hero.adventureTypeLabel')}: {t('hero.adventureType')}</span>
                  </div>
                </div>

                <div className="text-3xl font-bold mb-8">
                  {t('hero.price')}
                </div>

                <p className="text-xl mb-8 max-w-2xl">
                  {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-white text-[#008576] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <Phone className="mr-2" />
                    {t('hero.bookCall')}
                  </button>
                  <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center border border-white"
                  >
                    <Download className="mr-2" />
                    {t('hero.downloadGuide')}
                  </button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 relative overflow-hidden">
                <Image
                  src="/images/kilimanjaro-summit.jpg"
                  alt="Climb Kilimanjaro"
                  fill
                  className="object-cover rounded-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Itineraries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {t('itineraries.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              {t('itineraries.description')}
            </p>

            {slug === 'zanzibar-beach-holidays' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href={`/${currentLocale}/trips/zanzibar-diving-culture-5-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block">
                  <div className="h-48 bg-gray-200 relative">
                    <Image 
                      src="/images/zanzibar-diving.jpg" 
                      alt="Zanzibar Diving & Culture" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('itineraries.divingCulture.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('itineraries.divingCulture.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('itineraries.divingCulture.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('itineraries.divingCulture.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={`/${currentLocale}/trips/zanzibar-complete-escape-8-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block">
                  <div className="h-48 bg-gray-200 relative">
                    <Image 
                      src="/images/zanzibar-complete-escape.jpg" 
                      alt="Zanzibar Complete Escape" 
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('itineraries.completeEscape.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('itineraries.completeEscape.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('itineraries.completeEscape.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('itineraries.completeEscape.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : slug === 'tanzania-safari' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href={`/${currentLocale}/trips/safari-bivouac-4-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block border-2 border-[#00A896]/20">
                  <div className="h-48 relative bg-gradient-to-br from-[#5BC4AF] to-[#008576]">
                    <Image src="/images/camping-safari.jpg" alt="Camping Safari" fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('routes.camping.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('routes.camping.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('routes.camping.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('routes.camping.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={`/${currentLocale}/trips/safari-bivouac-8-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block border-2 border-[#00A896]/20">
                  <div className="h-48 relative bg-gradient-to-br from-[#5BC4AF] to-[#008576]">
                    <Image src="/images/safari-bivouac.jpg" alt="8 Day Camping Safari" fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('routes.camping8Days.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('routes.camping8Days.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('routes.camping8Days.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('routes.camping8Days.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={`/${currentLocale}/trips/zanzibar-safari-beach-10-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block border-2 border-[#00A896]/20">
                  <div className="h-48 relative bg-gradient-to-br from-[#72D9C4] to-[#00A896]">
                    <Image src="/images/zanzibarbeach.jpg" alt="Safari & Beach" fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('routes.safariBeach.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('routes.safariBeach.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('routes.safariBeach.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('routes.safariBeach.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={`/${currentLocale}/trips/materuni-chemka-2-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block border-2 border-[#00A896]/20">
                  <div className="h-48 relative bg-gradient-to-br from-[#B8EDE3] to-[#72D9C4]">
                    <Image src="/images/materuni-waterfall.jpg" alt="Materuni & Chemka" fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('routes.materuniChemka.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('routes.materuniChemka.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('routes.materuniChemka.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('routes.materuniChemka.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href={`/${currentLocale}/trips/safari-kilimanjaro-6-days`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow block border-2 border-[#00A896]/20">
                  <div className="h-48 relative bg-gradient-to-br from-[#4DC5B5] to-[#00A896]">
                    <Image src="/images/serengeti.jpg" alt="Safari & Kilimanjaro" fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white px-4 py-2 rounded-full shadow-md text-sm font-bold">
                        {t('routes.safariKiliAdventure.price')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {t('routes.safariKiliAdventure.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('routes.safariKiliAdventure.description')}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="flex text-[#00A896]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          (5.0)
                        </span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {t('routes.safariKiliAdventure.duration')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packages.map((pkg) => (
                  <Link key={pkg.id} href={`/${currentLocale}/trips/${pkg.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block">
                    <div className="relative h-48">
                      <Image src={`/images/${pkg.image}`} alt={pkg.name} fill className="object-cover" />
                      <div className="absolute top-4 left-4 bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {pkg.price}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {pkg.description || `Experience the ${pkg.name.toLowerCase()} adventure.`}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400 mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">(5.0)</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Book Your Trip - Compact Design */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              Book your trip
            </h2>

            {/* Compact Action Cards - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div
                onClick={() => setIsContactModalOpen(true)}
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
                onClick={() => setIsContactModalOpen(true)}
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

              {/* Itinerary Selector */}
              <div className="relative flex-1">
                <button
                  onClick={() => setIsItineraryDropdownOpen(!isItineraryDropdownOpen)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-gray-600">Itinerary</span>
                    <span className="font-semibold">{selectedItineraries.length} Selected</span>
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${isItineraryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isItineraryDropdownOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                    {itineraryOptions.map((opt) => {
                      const isSelected = selectedItineraries.includes(opt.id);
                      return (
                        <label key={opt.id} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {
                              if (isSelected) {
                                setSelectedItineraries(selectedItineraries.filter(s => s !== opt.id));
                              } else {
                                setSelectedItineraries([...selectedItineraries, opt.id]);
                              }
                            }}
                            className="w-4 h-4 text-[#00A896] rounded"
                          />
                          <span className="text-base text-gray-800">{opt.label}</span>
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
              {packages
                .filter((pkg: typeof packages[0]) => selectedItineraries.length === 0 || selectedItineraries.includes(pkg.id))
                .flatMap((pkg: typeof packages[0]) => {
                  const sampleDates = generateSampleDates(pkg.id, pkg.durationDays, selectedMonths[0] || '2026-Jan');
                  return sampleDates.map((dateInfo, index) => (
                    <div key={`${pkg.id}-${index}`} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold text-gray-900 text-base">{pkg.name}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{dateInfo.dateRange}</span>
                            </div>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-600">{pkg.difficulty} • {pkg.successRate} success</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          <div className="text-right">
                            <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">{pkg.price}</span></div>
                            <div className="text-sm text-gray-500">Deposit {pkg.deposit}</div>
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
                  ));
                })
              }
            </div>

            {/* Removed the show more/less functionality since we're now showing all dates for all selected routes */}

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
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Propose Dates
              </button>
            </div>
          </div>
        </section>





        

        {/* Blog Sections -  All Topics (limited), Other Adventures */}

        {/* Top Reads Section - only for climb-kilimanjaro page */}
        {slug === 'climb-kilimanjaro' && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{t('sections.topReads.title')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link href={`/${locale}/travel-blogs/kilimanjaro-packing-list`} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src="/images/kilimanjaro-packing.jpg" 
                        alt="Kilimanjaro Packing List" 
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {locale === 'fr' 
                          ? "La liste ultime d'équipement pour le Kilimandjaro (+ PDF gratuit)" 
                          : "The ultimate Kilimanjaro packing list (+ free PDF)"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {locale === 'fr' 
                          ? "Ce que vous packez pour votre ascension du Kilimandjaro est vital pour votre santé et le succès de votre randonnée." 
                          : "What you pack for your Kilimanjaro climb is vitally important to your health and the success of your trek."}
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link href={`/${locale}/travel-blogs/sante-en-altitude`} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src="/images/altitude-health.jpg" 
                        alt="Altitude Health" 
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {locale === 'fr' 
                          ? "Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)" 
                          : "Altitude Health: Symptoms and How to Prevent Acute Mountain Sickness (AMS)"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {locale === 'fr' 
                          ? "Tout ce que vous devez savoir sur le mal aigu des montagnes et comment le prévenir lors de votre ascension du Kilimandjaro." 
                          : "Everything you need to know about altitude sickness and how to prevent it during your Kilimanjaro climb."}
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link href={`/${locale}/travel-blogs/preparation-physique-kilimandjaro`} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src="/images/physical-preparation.jpg" 
                        alt="Physical Preparation" 
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {locale === 'fr' 
                          ? "Comment s’entraîner pour le Kilimandjaro quand on habite en ville" 
                          : "How to train for Kilimanjaro when living in the city"}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {locale === 'fr' 
                          ? "Un guide complet sur la façon de se préparer physiquement à l'ascension du Kilimandjaro, même si vous vivez en ville." 
                          : "A complete guide on how to physically prepare for Kilimanjaro, even if you live in the city."}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}
        
        {/* All Topics Section - only for climb-kilimanjaro page */}
        {slug === 'climb-kilimanjaro' && category && category.allTopics && (
          <section id="all-topics" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('sections.allTopics.title')}</h2>
              <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                {t('sections.allTopics.description')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.allTopics && category.allTopics.map((topic: any, index: number) => (
                  <div key={index} className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{topic.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">
                        <span className="inline-block pb-2 border-b-2 border-[#00A896]">{topic.category[locale]}</span>
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {topic.posts && topic.posts.map((post: any, postIndex: number) => (
                        <li key={postIndex} className="text-gray-600 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                          {typeof post === 'string' ? post : (post.title ? (
                            <Link href={`/${locale}${post.href}`} className="text-[#00A896] hover:text-[#008576] transition-colors">
                              {post.title[locale]}
                            </Link>
                          ) : (
                            <span className="text-[#00A896]">{post[locale]}</span>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other Adventures Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('sections.otherAdventures.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tripDetails.filter(t => t.slug !== slug).map((other) => (
                <Link key={other.slug} href={`/${locale}/travel-blogs/${other.slug}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={other.image || "/images/default-adventure.jpg"} 
                        alt={other.title} 
                        width={400} 
                        height={200} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{other.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{other.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold text-[#00A896]">{other.price}</span>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{other.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-800">({other.rating})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQs - shown after other adventures for all pages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('faqs.title')}</h2>
            <Faq
              items={[
                { 
                  question: "Quel est la température les différents jours et comment s'habiller.",
                  answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet."
                },
                { 
                  question: "Quelles chaussures pour marcher et sur le campement.",
                  answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement."
                },
                { 
                  question: "Et les chaussettes ? Lesquelles et combien ?",
                  answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules."
                },
                { 
                  question: "Kilimandjaro : Faut-il se doucher pendant une ascension de 8 à 10 jours ?",
                  answer: "Non, il n’est généralement pas possible de prendre une vraie douche lors d'une ascension du Kilimandjaro. Les camps de haute altitude sont situés dans des zones sauvages protégées, dépourvues d'installations sanitaires modernes ou d'eau courante. L’eau y est une ressource précieuse, réservée en priorité à la cuisine et à l’hydratation des grimpeurs.\n\nCependant, ne pas se doucher ne signifie pas négliger l’hygiène. Nos randonneurs utilisent des solutions simples et efficaces pour rester frais et en bonne santé tout au long du trek :\n\n1). Toilette quotidienne : Une bassine d'eau tiède et un gant de toilette sont fournis par notre équipe chaque matin et soir.\n\n2). Lingettes biodégradables : Idéales pour un nettoyage rapide du corps tout en respectant l'environnement.\n\n3). Lavage fréquent des mains : Une étape cruciale pour garantir votre santé et éviter les bactéries en groupe.\n\n4). Change régulier : Le renouvellement des vêtements techniques et des sous-vêtements est essentiel.\n\n5). Hygiène des pieds : Un soin rigoureux pour prévenir les ampoules et les infections durant la marche.\n\nPourquoi la douche n’est pas une priorité en altitude ?\nEn haute montagne, votre corps mobilise toute son énergie pour l'acclimatation. Se doucher à l'eau froide augmente considérablement le risque de fatigue et de refroidissement (hypothermie légère). Pour réussir votre sommet, votre priorité doit rester l’hydratation, le repos et l’adaptation progressive à l’altitude.\n\nL’avis du guide : Passer 8 à 10 jours sans douche est tout à fait normal et fait partie de l'aventure. Avec une hygiène de base bien gérée, vous resterez en pleine forme et concentré sur votre objectif : atteindre le pic Uhuru."
                }
              ]}
            />
          </div>
        </section>
        
        {/* Newsletter Section - Now at the very bottom before footer */}
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contactModal.nameLabel')}
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contactModal.emailLabel')}
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contactModal.phoneLabel')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                      placeholder={t('contactModal.phonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contactModal.messageLabel')}
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
                      {t('contactModal.agreeTo')} <a href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('contactModal.privacyPolicy')}</a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      {t('contactModal.submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Download Modal */}
        {isDownloadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <div
              className="absolute inset-0 backdrop-blur-lg"
              onClick={() => setIsDownloadModalOpen(false)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full z-10">
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{t('downloadModal.title')}</h2>
                  <button
                    onClick={() => setIsDownloadModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 mb-6">
                  {t('downloadModal.description')}
                </p>

                {/* Download Form */}
                <form onSubmit={(e) => {
                  e.preventDefault()
                  // Download logic would go here
                  setIsDownloadModalOpen(false)
                }} className="space-y-4">
                  <div>
                    <label htmlFor="download-name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('downloadModal.nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="download-name"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                      placeholder={t('downloadModal.namePlaceholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="download-email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('downloadModal.emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="download-email"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                      placeholder={t('downloadModal.emailPlaceholder')}
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="download-privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="download-privacy-policy" className="ml-2 block text-sm text-gray-700">
                      {t('downloadModal.agreeTo')} <a href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('downloadModal.privacyPolicy')}</a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      {t('downloadModal.submit')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }



  // Default travel-blogs page for other slugs
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white py-16">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="inline-block mb-6 text-[#B8EDE3] hover:text-white">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to Travel & Adventures'}
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {trip!.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {trip!.description}
            </p>
          </div>
        </div>
      </section>

      {/* Trip Info Card */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center mb-6">
                <div>
                <p className="text-gray-600 text-sm mb-2">Duration</p>
                <p className="text-2xl font-bold text-[#00A896]">{trip!.duration}</p>
              </div>
                <div>
                <p className="text-gray-600 text-sm mb-2">From Price</p>
                <p className="text-2xl font-bold text-[#00A896]">{trip!.price}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Rating</p>
                <div className="flex justify-center items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </section>



      {/* All Topics Section - only for climb-kilimanjaro page */}
      {slug === 'climb-kilimanjaro' && category && category.allTopics && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('sections.allTopics.title')}</h2>
            <p className="text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              {t('sections.allTopics.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.allTopics && category.allTopics.map((topic: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{topic.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{topic.category[locale]}</h3>
                  </div>
                  <ul className="space-y-2">
                    {topic.posts && topic.posts.map((post: any, postIndex: number) => (
                      <li key={postIndex} className="text-gray-600 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-[#00A896] rounded-full mt-2 mr-2"></span>
                        {typeof post === 'string' ? post : (post.title ? post.title[locale] : post[locale])}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Adventures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{t('sections.otherAdventures.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tripDetails.filter(t => t.slug !== slug).map((other) => (
              <Link key={other.slug} href={`/${locale}/travel-blogs/${other.slug}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{other.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{other.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-[#00A896]">{other.price}</span>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{other.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-800">({other.rating})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}