'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUp, ChevronDown, Plus, Minus, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import TopReads from '@/components/ui/TopReads'

export default function KilimanjaroRoutesPage() {
  const [expandedRoute, setExpandedRoute] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()
  const t = useTranslations('ClimbKilimanjaroPage')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const routesFr = [
    {
      id: 'machame',
      title: 'Route Machame : Analyse Détaillée (La Voie la Plus Efficace)',
      subtitle: 'La Plus Populaire',
      difficulty: 'Modérée',
      duration: '7 jours',
      description: 'La Route Machame est la voie la plus populaire du Kilimandjaro, reconnue pour son efficacité en matière d\'acclimatation et ses paysages variés.',
      sections: [
        {
          heading: 'Description de l\'Itinéraire',
          content: 'Le sentier débute à Machame Gate sur le versant sud-ouest. L\'itinéraire est caractérisé par une série de montées raides et est physiquement exigeant. C\'est une traversée non symétrique : l\'ascension finale se fait depuis le Camp de Barafu, et la descente est effectuée par la Route Mweka. La logistique repose entièrement sur le camping. La Durée standard de 7 jours est la plus recommandée.'
        },
        {
          heading: 'Avantages Analytiques (Pros)',
          subSections: [
            {
              title: '1. Efficacité d\'Acclimatation (Différence Clé)',
              content: 'L\'avantage distinctif de Machame réside dans son Profil d\'Acclimatation basé sur le principe du "Climb High, Sleep Low" (Monter Haut, Dormir Bas). Contrairement aux voies linéaires (comme Marangu ou Rongai), Machame expose stratégiquement le corps à des altitudes de choc (comme la Lava Tower à environ 4600m) avant de descendre pour la nuit à une altitude plus basse. Cette variation est physiologiquement la plus efficace pour stimuler l\'adaptation et garantit un haut taux de réussite sur une durée de 7 jours.'
            },
            {
              title: '2. Vues Spectaculaires',
              content: 'Le parcours est extrêmement varié. Il offre des Vues Spectaculaires sur le Mur de Barranco et les paysages changeants (landes et désert alpin), ce qui rend l\'expérience esthétiquement plus riche que les approches douces du Nord.'
            },
            {
              title: '3. Accessibilité Logistique',
              content: 'L\'Accessibilité est bonne, car le point de départ nécessite un transfert routier modéré depuis Moshi/Arusha, comparativement plus court que celui de Lemosho.'
            }
          ]
        },
        {
          heading: 'Inconvénients Analytiques (Cons)',
          subSections: [
            {
              title: '1. Très Forte Fréquentation',
              content: 'Machame est une route à Très Forte Fréquentation. Son succès attire un trafic élevé, ce qui signifie que le faible isolement est un facteur de l\'expérience, surtout aux camps de base. Cela contraste fortement avec les voies à faible densité (Northern Circuit, Umbwe). Le trafic est à son apogée en haute saison comme en janvier.'
            },
            {
              title: '2. Exigence Physique Élevée',
              content: 'Le sentier est physiquement exigeant. Les montées raides et les longues journées de marche demandent une très bonne condition physique pour éviter l\'épuisement avant l\'ascension finale.'
            }
          ]
        },
        {
          heading: '🧭 Le Conseil du Guide Local',
          subSections: [
            {
              title: 'Gestion de la Fréquentation',
              content: 'Si vous choisissez Machame en haute saison (Janvier), préparez-vous mentalement à l\'affluence au niveau du Mur de Barranco. Notre conseil est de commencer la journée de marche vers le Mur très tôt (idéalement avant 7h00) pour éviter les "bouchons" et profiter d\'une montée plus rapide et plus sûre.'
            },
            {
              title: 'Préparation Physique',
              content: 'Ne sous-estimez pas l\'Exigence Physique. Travaillez votre endurance en côte avant de venir ; la réussite sur Machame dépend de votre capacité à enchaîner les jours de dénivelé positif.'
            },
            {
              title: 'Hydratation',
              content: 'Malgré l\'efficacité de l\'acclimatation, l\'erreur la plus fréquente que nous observons est un manque d\'hydratation le jour de la montée à Lava Tower. Boire au moins 4 litres ce jour-là est crucial.'
            }
          ]
        }
      ]
    },
    {
      id: 'marangu',
      title: 'Route Marangu : L\'Analyse Ultime (La Voie des Cabanes)',
      subtitle: 'La Plus Rapide',
      difficulty: 'Difficile',
      duration: '5 jours',
      description: 'La Route Marangu est l\'itinéraire historique du Kilimandjaro, unique pour sa logistique en cabanes, mais célèbre pour son profil d\'acclimatation inefficace et son taux de réussite comparativement bas.',
      sections: [
        {
          heading: 'Description de l\'Itinéraire',
          content: 'Le sentier débute à Marangu Gate (approx 1860m) sur le versant sud-est. La première journée traverse une forêt tropicale dense et luxuriante avant d\'atteindre Mandara Hut. L\'itinéraire continue ensuite vers des landes alpines ouvertes jusqu\'à Horombo Hut. Marangu est la seule voie symétrique du Kilimandjaro : l\'ascension et la descente se font par le même chemin. La logistique est unique : l\'hébergement se fait en cabanes (dortoirs) tout au long du parcours.'
        },
        {
          heading: 'Avantages Analytiques (Pros)',
          subSections: [
            {
              title: '1. Logistique Simplifiée (Différence Clé)',
              content: 'L\'hébergement en cabanes simplifie grandement la logistique. Cela élimine le besoin de tentes et réduit la quantité de matériel lourd à transporter pour l\'équipe de porteurs, faisant de Marangu une option souvent moins coûteuse.'
            },
            {
              title: '2. Accès Logistique et Durée Courte',
              content: 'Son Accessibilité Logistique est la meilleure : le transfert routier depuis Moshi/Arusha est le plus court. La courte Durée (5 jours) est un attrait pour ceux ayant des contraintes de temps strictes.'
            }
          ]
        },
        {
          heading: 'Inconvénients Analytiques (Cons)',
          subSections: [
            {
              title: '1. Efficacité d\'Acclimatation (Risque Élevé)',
              content: 'L\'inconvénient majeur réside dans son Profil d\'Acclimatation linéaire et rapide. L\'Efficacité de l\'Acclimatation est faible, car Marangu ne permet pas la stratégie du "Climb High, Sleep Low". Cette absence de variation est la cause directe de son très faible taux de réussite et du risque élevé de Mal Aigu des Montagnes (MAM).'
            },
            {
              title: '2. Expérience et Fréquentation',
              content: 'C\'est une route à Très Forte Fréquentation. L\'expérience est la moins riche esthétiquement (moins de Vues Spectaculaires) car l\'aller-retour sur le même sentier rend les paysages répétitifs. L\'Exigence Physique est très élevée si vous choisissez 5 jours, car la vitesse de montée impose une pression intense au corps.'
            }
          ]
        }
      ]
    },
    {
      id: 'lemosho',
      title: 'Route Lemosho : L\'Analyse Ultime (Voie Pittoresque et Optimale)',
      subtitle: 'La Plus Sûre',
      difficulty: 'Modérée',
      duration: '8 jours',
      description: 'La Route Lemosho est l\'une des voies les plus longues et est considérée comme la meilleure combinaison de sécurité, de vues et d\'acclimatation. Elle est l\'alternative premium à la Route Machame.',
      sections: [
        {
          heading: 'Description de l\'Itinéraire',
          content: 'L\'itinéraire débute à Londorossi Gate (approx 2100m) sur le Versant Ouest, nécessitant le plus long transfert routier initial. La progression est lente, traversant d\'abord la forêt tropicale vierge (souvent boueuse) puis le vaste Plateau de Shira avant de fusionner avec la Route Machame au camp de Barranco. Lemosho est une voie de traversée non symétrique : la montée et la descente se font par des chemins différents (descente par Mweka), ce qui maximise la variété des paysages. La logistique est basée sur le camping exclusivement (tentes). La Durée standard de 8 jours est fortement recommandée, car elle est le facteur clé du taux de réussite.'
        },
        {
          heading: 'Avantages Analytiques (Pros)',
          subSections: [
            {
              title: '1. Efficacité d\'Acclimatation Maximale (Différence Clé)',
              content: 'Le Profil d\'Acclimatation est optimal. Sa Durée de 8 jours garantit l\'acclimatation la plus progressive en réduisant le gain d\'altitude moyen par jour. Elle utilise la stratégie du "Climb High, Sleep Low" (par exemple, montée vers Lava Tower, descente vers Barranco), ce qui lui confère le taux de réussite au sommet le plus élevé (souvent 90% sur 8 jours).'
            },
            {
              title: '2. Vues Spectaculaires et Isolement Initial',
              content: 'Elle offre les plus belles Vues Spectaculaires sur les glaciers, le Plateau de Shira et la face Ouest. Elle présente une Faible Fréquentation sur ses premiers jours (Jours 1-3), garantissant un excellent isolement et un sentiment de wilderness (milieu sauvage).'
            },
            {
              title: '3. Exigence Physique Gérable (Endurance)',
              content: 'L\'Exigence Physique quotidienne est modérée car l\'effort est étalé. L\'endurance est plus importante que l\'intensité de la montée.'
            }
          ]
        },
        {
          heading: 'Inconvénients Analytiques (Cons)',
          subSections: [
            {
              title: '1. Logistique Complexe et Coût Élevé',
              content: 'L\'éloignement du point de départ (Londorossi) augmente significativement la logistique et le coût global de l\'expédition (coût de transfert plus important). Ce temps de route peut être fatigant avant même le début du trek.'
            },
            {
              title: '2. Fréquentation Après la Jonction',
              content: 'Après le Plateau de Shira et le camp de Barranco, la route rejoint le sentier très fréquenté de Machame/Barranco. Cela signifie que le faible isolement est perdu sur les jours cruciaux (Jours 4-7).'
            },
            {
              title: '3. Longueur du Parcours',
              content: 'La distance totale de la randonnée est l\'une des plus longues (environ 65km jusqu\'au sommet), ce qui demande une préparation spécifique en matière d\'endurance.'
            }
          ]
        }
      ]
    },
    {
      id: 'umbwe',
      title: 'Route Umbwe : L\'Analyse Ultime (La Voie Extrême et Technique)',
      subtitle: 'La Plus Extrême',
      difficulty: 'Très Difficile',
      duration: '5-6 jours',
      description: 'La Route Umbwe est la voie d\'ascension la plus courte et la plus raide du Kilimandjaro. Elle est reconnue pour son approche extrêmement directe, son exigence physique maximale, et son profil d\'acclimatation dangereux en raison de sa rapidité.',
      sections: [
        {
          heading: 'Description de l\'Itinéraire',
          content: 'Le sentiel débute à Umbwe Gate (approx 1600m) sur le versant sud. L\'itinéraire est caractérisé par une inclinaison constante et agressive dès le premier jour, traversant une forêt dense et peu fréquentée. Le parcours est rapide : après deux jours d\'ascension très raide, la voie rejoint les itinéraires Machame et Lemosho au Camp de Barranco (approx 3980m). C\'est une traversée non symétrique : l\'ascension se fait par Umbwe/Barafu, et la descente est effectuée par la Route Mweka. Sa logistique repose entièrement sur le camping. La Durée standard de 5 ou 6 jours est le format le plus court du Kilimandjaro.'
        },
        {
          heading: 'Analyse du Profil d\'Acclimatation',
          content: 'L\'inconvénient majeur d\'Umbwe réside dans son Profil d\'Acclimatation très agressif. Contrairement à Machame, qui utilise le principe "Climb High, Sleep Low", Umbwe est une voie linéaire et rapide dans son approche initiale. Le gain d\'altitude par jour est maximal, souvent au-delà des limites physiologiques recommandées. L\'Efficacité d\'Acclimatation est pratiquement nulle en raison du taux d\'élévation trop rapide sur les premiers jours. C\'est pourquoi Umbwe enregistre le taux de réussite le plus bas et le risque d\'évacuation le plus élevé par Mal Aigu des Montagnes (MAM). Seuls les grimpeurs ayant une pré-acclimatation devraient l\'envisager.'
        },
        {
          heading: 'Analyse de la Fréquentation et de l\'Expérience',
          content: 'Umbwe est une route à Très Faible Fréquentation. Son exigence physique et son risque la maintiennent à l\'écart du trafic de masse. Le faible trafic garantit un excellent isolement sur les deux premiers jours, offrant une véritable expérience de wilderness. En revanche, le parcours offre des vues spectaculaires et directes sur la face sud et les glaciers du Kibo en raison de l\'approche verticale et rapprochée. L\'expérience d\'isolement est perdue après la jonction au Camp de Barranco, où les grimpeurs rejoignent le flux de Machame et Lemosho.'
        },
        {
          heading: '🧭 Le Conseil du Guide Local',
          subSections: [
            {
              title: '1. Réservé aux Experts (Sécurité)',
              content: 'Nous insistons : cette route est strictement réservée aux grimpeurs ayant une expérience confirmée en haute altitude et une pré-acclimatation récente (ex: Mont Meru). Le corps n\'a pas le temps de s\'adapter naturellement à ce rythme.'
            },
            {
              title: '2. Préparation Verticale',
              content: 'Votre entraînement doit se concentrer sur les montées très raides et soutenues. Les bâtons de randonnée sont absolument essentiels pour la stabilité et pour soulager les genoux dans les sections raides.'
            },
            {
              title: '3. Gestion du Stress',
              content: 'Préparez-vous mentalement à l\'effort. L\'ascension est psychologiquement éprouvante en raison de la raideur constante et du manque de progression horizontale.'
            }
          ]
        }
      ]
    }
  ]

  // English equivalents for the routes (used when locale !== 'fr')
  const routesEn = [
    {
      id: 'machame',
      title: 'Machame Route: Detailed Analysis (The Most Effective Route)',
      subtitle: 'Most Popular',
      difficulty: 'Moderate',
      duration: '7 days',
      description: "The Machame Route is the most popular Kilimanjaro route, known for effective acclimatisation and varied scenery.",
      sections: [
        {
          heading: 'Itinerary Description',
          content: 'The trail starts at Machame Gate on the south-western side. The route features steep ascents and is physically demanding. It is a non-symmetrical traverse: final ascent from Barafu Camp and descent via the Mweka Route. Logistics are entirely camping-based. The standard 7-day duration is recommended.'
        },
        {
          heading: 'Analytical Advantages (Pros)',
          subSections: [
            {
              title: "1. Effective Acclimatisation (Key Difference)",
              content: 'Machame\'s advantage is its acclimatisation profile based on the "Climb High, Sleep Low" principle. It exposes the body to higher altitudes (e.g., Lava Tower ~4600m) then descends for sleep, which improves adaptation and success rates on a 7-day schedule.'
            },
            {
              title: '2. Spectacular Views',
              content: 'The route is very varied and offers spectacular views of the Barranco Wall and changing alpine landscapes, making the experience visually richer than milder northern approaches.'
            },
            {
              title: '3. Good Logistical Access',
              content: 'Access is reasonable with a moderate transfer from Moshi/Arusha, typically shorter than Lemosho.'
            }
          ]
        },
        {
          heading: 'Analytical Disadvantages (Cons)',
          subSections: [
            {
              title: '1. High Traffic',
              content: 'Machame has very high traffic. This means less solitude, especially at camps and on popular sections like the Barranco Wall.'
            },
            {
              title: '2. Physical Demand',
              content: 'The trail is physically demanding with steep climbs and long walking days, requiring solid fitness to avoid fatigue before the summit push.'
            }
          ]
        },
        {
          heading: 'Local Guide Advice',
          subSections: [
            {
              title: 'Managing Crowd',
              content: 'If choosing Machame in high season, start key sections early (before 07:00) to avoid congestion and have a faster, safer ascent.'
            },
            {
              title: 'Physical Preparation',
              content: 'Train uphill endurance in advance. Success on Machame depends on repeated days of sustained elevation gain.'
            },
            {
              title: 'Hydration',
              content: 'Hydration is critical—aim for at least 4L on days like the Lava Tower ascent.'
            }
          ]
        }
      ]
    },
    {
      id: 'marangu',
      title: "Marangu Route: The Ultimate Analysis (The Hut Route)",
      subtitle: 'Fastest',
      difficulty: 'Hard',
      duration: '5 days',
      description: 'Marangu is the historic Kilimanjaro route, notable for hut accommodation but criticized for less effective acclimatisation and lower summit success rates.',
      sections: [
        {
          heading: 'Itinerary Description',
          content: 'The trail starts at Marangu Gate (~1860m) on the south-east side. The first day crosses dense rainforest before reaching Mandara Hut. The route then moves into alpine moorland to Horombo Hut. Marangu is symmetrical: ascent and descent use the same path. Accommodation is in huts all along the way.'
        },
        {
          heading: 'Pros',
          subSections: [
            {
              title: '1. Simplified Logistics',
              content: 'Hut accommodation simplifies logistics and removes the need for tents, often reducing costs.'
            },
            {
              title: '2. Shorter Duration and Easy Access',
              content: 'Shortest transfer from Moshi/Arusha and a brief itinerary make it attractive for those with limited time.'
            }
          ]
        },
        {
          heading: 'Cons',
          subSections: [
            {
              title: '1. Poor Acclimatisation',
              content: 'Marangu\'s linear profile provides less effective acclimatisation, leading to lower success rates and higher risk of AMS.'
            },
            {
              title: '2. Crowding and Repetitive Scenery',
              content: 'High traffic and the same in-and-out trail limit scenic variety and can make the experience feel crowded.'
            }
          ]
        }
      ]
    },
    {
      id: 'lemosho',
      title: 'Lemosho Route: The Ultimate Analysis (Scenic & Optimal Route)',
      subtitle: 'Safest',
      difficulty: 'Moderate',
      duration: '8 days',
      description: 'Lemosho is one of the longest routes and balances safety, views and acclimatisation. It is considered a premium alternative to Machame.',
      sections: [
        {
          heading: 'Itinerary Description',
          content: 'Starts at Londorossi Gate (~2100m) on the west side with a longer initial transfer. It crosses pristine rainforest and the Shira Plateau before joining Machame at Barranco Camp. It is a non-symmetrical traverse with camping accommodation.'
        },
        {
          heading: 'Pros',
          subSections: [
            {
              title: '1. Best Acclimatisation',
              content: 'An 8-day profile provides the most progressive acclimatisation, using the "Climb High, Sleep Low" approach and offering the highest summit success rates.'
            },
            {
              title: '2. Spectacular Views and Initial Isolation',
              content: 'Outstanding glacier and plateau views with low traffic in the first days, offering a true wilderness feel.'
            },
            {
              title: '3. Manageable Daily Effort',
              content: 'Daily efforts are moderate and spread across the itinerary, favouring endurance over intensity.'
            }
          ]
        },
        {
          heading: 'Cons',
          subSections: [
            {
              title: '1. Higher Logistics and Cost',
              content: 'Longer transfers and more complex logistics increase the overall cost.'
            },
            {
              title: '2. Loss of Isolation After Junction',
              content: 'After crossing Shira and Barranco, the route joins busier trails, reducing initial solitude.'
            },
            {
              title: '3. Longer Distance',
              content: 'Longer distances require targeted endurance training.'
            }
          ]
        }
      ]
    },
    {
      id: 'umbwe',
      title: 'Umbwe Route: The Ultimate Analysis (Extreme & Technical)',
      subtitle: 'Most Extreme',
      difficulty: 'Very Difficult',
      duration: '5-6 days',
      description: 'Umbwe is the shortest, steepest and most direct route on Kilimanjaro, requiring high fitness and pre-acclimatisation.',
      sections: [
        {
          heading: 'Itinerary Description',
          content: 'Starts at Umbwe Gate (~1600m) on the south side with an immediate steep ascent through forest. The route quickly reaches higher paths and joins Machame/Lemosho near Barranco Camp. It is camping-based and is the shortest route in days.'
        },
        {
          heading: 'Acclimatisation Profile',
          content: 'Umbwe\'s aggressive profile gives little time for acclimatisation, resulting in higher AMS risk and lower success rates. It is recommended only for experienced, pre-acclimatised climbers.'
        },
        {
          heading: 'Experience and Traffic',
          content: 'Very low traffic and an intense, technical ascent provide a wilderness experience but require expert fitness and preparation.'
        },
        {
          heading: 'Local Guide Advice',
          subSections: [
            {
              title: '1. Reserved for Experts',
              content: 'Suitable only for climbers with recent high-altitude experience.'
            },
            {
              title: '2. Vertical Preparation',
              content: 'Training should focus on steep sustained climbs; trekking poles are essential.'
            },
            {
              title: '3. Mental Preparation',
              content: 'Prepare for sustained physical and mental effort.'
            }
          ]
        }
      ]
    }
  ]

  const routes = locale === 'fr' ? routesFr : routesEn

  const faqsFr = [
    {
      question: 'Quelle est la meilleure route pour un première-fois grimpeur?',
      answer: 'La Route Lemosho (8 jours) est recommandée pour les première-fois. Elle offre l\'équilibre optimal entre acclimatation progressive, vues spectaculaires et taux de réussite élevé (90%). Machame (7 jours) est également populaire mais plus intense physiquement.'
    },
    {
      question: 'Quelle est la différence entre camping et cabanes?',
      answer: 'Marangu est la seule route avec cabanes (dortoirs), simplifiant la logistique mais limitant l\'acclimatation. Toutes les autres routes utilisent le camping, offrant plus de flexibilité et une meilleure acclimatation.'
    },
    {
      question: 'Quel est le taux de réussite pour chaque route?',
      answer: 'Lemosho 8 jours: ~90%, Machame 7 jours: ~85%, Rongai 5-6 jours: ~75%, Marangu 5 jours: ~65%, Umbwe 5-6 jours: ~50%.'
    },
    {
      question: 'Quelle est la période idéale pour grimper?',
      answer: 'Janvier-Février et Juillet-Septembre sont les meilleures périodes. Évitez la saison des pluies (Mars-Mai).'
    },
    {
      question: 'Combien de temps faut-il pour l\'entraînement avant le trek?',
      answer: 'Prévoyez 3-6 mois d\'entraînement: cardio, renforcement des jambes et entraînement en côte.'
    },
    {
      question: 'Quelle est la différence d\'altitude entre les camps?',
      answer: 'Les camps varient; par ex. Machame Gate ~1500m → Sommet 5895m. Les gains journaliers plus faibles favorisent une meilleure acclimatation.'
    }
  ]

  const faqsEn = [
    {
      question: 'Which route is best for a first-time climber?',
      answer: 'The Lemosho Route (8 days) is recommended for first-timers: progressive acclimatisation, great views and high summit success (~90%). Machame (7 days) is also popular but more physically demanding.'
    },
    {
      question: 'What is the difference between camping and huts?',
      answer: 'Marangu uses huts (dormitories), simplifying logistics but offering less effective acclimatisation. Other routes use camping, which supports better acclimatisation strategies.'
    },
    {
      question: 'What are the success rates by route?',
      answer: 'Approx: Lemosho 8d ~90%, Machame 7d ~85%, Rongai 5-6d ~75%, Marangu 5d ~65%, Umbwe 5-6d ~50%.'
    },
    {
      question: 'When is the best time to climb?',
      answer: 'January-February and July-September are ideal. Avoid the long rains (March-May).'
    },
    {
      question: 'How long should I train before the trek?',
      answer: 'Plan 3-6 months of regular training focusing on cardio, leg strength and hill endurance.'
    },
    {
      question: 'What are the altitude differences between camps?',
      answer: 'Example: Machame Gate ~1500m → Summit 5895m. Smaller daily gains support better acclimatisation.'
    }
  ]

  const faqs = locale === 'fr' ? faqsFr : faqsEn

  const handleLearnMore = (routeId: string) => {
    setExpandedRoute(routeId)
    // Scroll to detailed analyses section smoothly
    setTimeout(() => {
      const detailedSection = document.querySelector('[data-section="detailed-analyses"]')
      if (detailedSection) {
        detailedSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  const RouteSummaryCard = ({ route }: any) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden h-full animate-fadeIn">
      <div className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] p-4 text-white">
        <h3 className="text-lg font-bold">{route.subtitle}</h3>
      </div>
      <div className="p-5 space-y-4">
        <h4 className="font-bold text-gray-800 line-clamp-2">{route.title}</h4>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{route.duration}</span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{locale === 'fr' ? `Difficulté: ${route.difficulty}` : `Difficulty: ${route.difficulty}`}</span>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-[#00A896]" />
            <span className="sr-only">Duration</span>
            <span className="text-sm text-gray-600">{route.duration}</span>
          </div>
        </div>
        <button
          onClick={() => handleLearnMore(route.id)}
          className="w-full mt-4 bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-2 rounded transition-all duration-300"
        >
          {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero1.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn leading-tight">
            {locale === 'fr' ? "Les 7 Voies d'Ascension du Kilimandjaro" : 'The 7 Ascent Routes of Kilimanjaro'}
          </h1>
          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl animate-slideInRight">
            {locale === 'fr' ? 'Analyse Complète, Comparée et Conseils d\'Expert Local' : 'Comprehensive, comparative analysis and local expert advice'}
          </p>
        </div>
      </section>

      {/* Article Meta Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author={locale === 'fr' ? 'Guide Local Kilimandjaro' : 'Kilimanjaro Local Guide'}
            date={locale === 'fr' ? 'Décembre 2025' : 'December 2025'}
            readingTime={locale === 'fr' ? '12 min de lecture' : '12 min read'}
          />
        </div>
      </section>

      {/* Inline TOC removed — using left sticky TOC inside detailed section */}

      {/* Routes grid removed — summaries are available via the left sticky TOC and detailed section */}

      {/* Detailed Routes Section */}
        <section className="py-16 bg-white" data-section="detailed-analyses">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center animate-fadeIn">
              {locale === 'fr' ? 'Analyses Détaillées' : 'Detailed Analyses'}
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="md:flex md:items-start md:gap-8">
                {/* Left sidebar: sticky TOC + compact accordion / summaries */}
                <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start transform md:-translate-x-8 lg:-translate-x-12">
                  <div className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm mb-6">
                    <TOC
                      title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                      items={routes.map(r => ({ id: `${r.id}-detail`, label: locale === 'fr' ? r.title : r.title, level: 2 }))}
                      onSelect={(id: string) => { const routeId = id.replace('-detail',''); setExpandedRoute(routeId) }}
                    />
                  </div>

                  <div className="space-y-3">
                    {routes.map((route) => (
                      <div key={route.id} className={`bg-white rounded-lg border ${expandedRoute === route.id ? 'border-[#00A896] shadow-md' : 'border-gray-100'} p-3`}>
                        <button onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)} className="text-left w-full">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{route.title}</h4>
                              <div className="text-xs text-gray-500 mt-1">{route.duration} • {locale === 'fr' ? `Difficulté: ${route.difficulty}` : `Difficulty: ${route.difficulty}`}</div>
                            </div>
                            <div className="ml-3 flex-shrink-0 text-gray-400">{expandedRoute === route.id ? '–' : '+'}</div>
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </aside>

                {/* Main content area */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {routes.map((route) => (
                      <div key={route.id} id={`${route.id}-detail`} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                        {/* Route Header - Expandable */}
                        <button
                          onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)}
                          className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                        >
                          <div className="flex-1 pr-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 leading-snug">{route.title}</h2>
                            <p className="text-gray-600">{route.description}</p>
                          </div>
                          <div className="mt-1 flex-shrink-0">
                            {expandedRoute === route.id ? (
                              <ChevronUp className="h-6 w-6 text-[#00A896] animate-pulse-glow" />
                            ) : (
                              <ChevronDown className="h-6 w-6 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {/* Expanded Content */}
                        {expandedRoute === route.id && (
                          <div className="px-6 pb-6 border-t border-gray-200 space-y-6 animate-slideInLeft">
                            {route.sections.map((section, idx) => (
                              <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center leading-snug">
                                  <span className="inline-block w-1 h-6 bg-[#00A896] mr-3 rounded"></span>
                                  {section.heading}
                                </h3>
                                {section.content && (
                                  <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                                )}
                                {section.subSections && (
                                  <div className="space-y-4 ml-4 border-l-4 border-[#72D9C4] pl-4">
                                    {section.subSections.map((subSection, subIdx) => (
                                      <div key={subIdx} className="animate-slideInRight" style={{ animationDelay: `${subIdx * 0.05}s` }}>
                                        <h4 className="font-semibold text-gray-800 mb-2">{subSection.title}</h4>
                                        <p className="text-gray-700 leading-relaxed text-sm">{subSection.content}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fadeIn">
              {locale === 'fr' ? 'Questions Fréquemment Posées' : 'Frequently Asked Questions'}
            </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 hover:bg-gray-50 transition-colors text-left flex justify-between items-center"
                >
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedFAQ === idx ? (
                      <Minus className="h-5 w-5 text-[#00A896]" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 pb-4 border-t border-gray-200 animate-slideInLeft">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Reads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <TopReads
            title={locale === 'fr' ? 'Lectures Connexes' : 'Related Reads'}
            locale={locale}
            posts={[
              {
                id: 'packing',
                titleEn: 'Packing Checklist: Layers, Boots & Sleep System',
                titleFr: 'Checklist : Couches, Chaussures et Système de Couchage',
                descriptionEn: 'Detailed guidance on layering, footwear, sleeping systems and essentials for Kilimanjaro.',
                descriptionFr: 'Guide détaillé sur les couches, chaussures, matériel de couchage et essentiels pour le Kilimandjaro.',
                link: `/${locale}/trips/packing-guide`,
              },
              {
                id: 'acclimatisation',
                titleEn: 'Acclimatisation: Climb High, Sleep Low & Hydration',
                titleFr: 'Acclimatation : Monter Haut, Dormir Bas & Hydratation',
                descriptionEn: 'Proven acclimatisation strategies, pacing and hydration practices to increase summit success.',
                descriptionFr: 'Stratégies éprouvées d\'acclimatation, rythme et hydratation pour augmenter les chances d\'atteindre le sommet.',
                link: `/${locale}/trips/acclimatisation`,
              },
            ]}
          />
        </div>
      </section>


      {/* Newsletter CTA - same style used on trip pages */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kilimanjaro-summit.jpg"
            alt="Kilimanjaro background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{t('newsletter.title')}</h2>
          <h3 className="text-2xl font-bold mb-6">{t('newsletter.subtitle')}</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">{t('newsletter.description')}</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={locale === 'fr' ? 'Prénom' : 'First name'}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={locale === 'fr' ? 'Votre adresse email' : 'Email address'}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
              {locale === 'fr' ? "S'abonner" : 'Subscribe'}
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
