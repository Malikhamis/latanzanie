'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronUp, ChevronDown, Plus, Minus, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react'
import { useLocale } from 'next-intl'

export default function KilimanjaroRoutesPage() {
  const [expandedRoute, setExpandedRoute] = useState<string | null>('machame')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const routes = [
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

  const faqs = [
    {
      question: 'Quelle est la meilleure route pour un première-fois grimpeur?',
      answer: 'La Route Lemosho (8 jours) est recommandée pour les première-fois. Elle offre l\'équilibre optimal entre acclimatation progressive, vues spectaculaires et taux de réussite élevé (90%). Machame (7 jours) est également populaire mais plus intense physiquement.'
    },
    {
      question: 'Quelle est la différence entre camping et cabanes?',
      answer: 'Marangu est la seule route avec cabanes (dortoirs), simplifiant la logistique mais limitant l\'acclimatation. Toutes les autres routes (Machame, Lemosho, Umbwe) utilisent le camping, offrant plus de flexibilité et une meilleure acclimatation grâce à la stratégie "Climb High, Sleep Low".'
    },
    {
      question: 'Quel est le taux de réussite pour chaque route?',
      answer: 'Lemosho 8 jours: ~90%, Machame 7 jours: ~85%, Rongai 5-6 jours: ~75%, Marangu 5 jours: ~65%, Umbwe 5-6 jours: ~50%. La durée et l\'acclimatation sont les facteurs clés.'
    },
    {
      question: 'Quelle est la période idéale pour grimper?',
      answer: 'Janvier-Février et Juillet-Septembre sont les meilleures périodes. Janvier offre des conditions sèches mais plus de foule. Juillet-Septembre est moins fréquenté. Évitez Mars-Mai (pluie longue) et Octobre-Novembre (pluie courte).'
    },
    {
      question: 'Combien de temps faut-il pour l\'entraînement avant le trek?',
      answer: 'Prévoyez 3-6 mois d\'entraînement régulier. Focalisez-vous sur: cardio (hiking, running), renforcement des jambes, endurance en côte. Pour Umbwe, une pré-acclimatation (Mont Meru) est cruciale.'
    },
    {
      question: 'Quelle est la différence d\'altitude entre les camps?',
      answer: 'Machame: Machame Gate (1500m) → Summit (5895m). Lemosho: Londorossi (2100m) → Summit (5895m). Les gains d\'altitude quotidiens varient: Machame ~700m/jour, Lemosho ~500m/jour. Faible gain = meilleure acclimatation.'
    }
  ]

  const RouteSummaryCard = ({ route }: any) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden h-full animate-fadeIn">
      <div className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] p-4 text-white">
        <h3 className="text-lg font-bold">{route.subtitle}</h3>
      </div>
      <div className="p-5 space-y-4">
        <h4 className="font-bold text-gray-800 line-clamp-2">{route.title}</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-[#00A896]" />
            <span>{route.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <TrendingUp className="h-4 w-4 mr-2 text-[#00A896]" />
            <span>Difficulté: {route.difficulty}</span>
          </div>
        </div>
        <button
          onClick={() => setExpandedRoute(route.id)}
          className="w-full mt-4 bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-2 rounded transition-all duration-300"
        >
          En savoir plus
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 168, 150, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(0, 168, 150, 0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white py-20 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            ← Retour aux blogs
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Les 7 Voies d'Ascension du Kilimandjaro
          </h1>
          <p className="text-lg md:text-xl text-[#E8F8F5] max-w-3xl animate-slideInRight">
            Analyse Complète, Comparée et Conseils d'Expert Local
          </p>
        </div>
      </section>

      {/* Routes Grid Summary Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fadeIn">
            Comparaison des Voies Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {routes.map((route, idx) => (
              <div key={route.id} style={{ animationDelay: `${idx * 0.1}s` }} className="animate-fadeIn">
                <RouteSummaryCard route={route} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Routes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fadeIn">
            Analyses Détaillées
          </h2>
          <div className="max-w-5xl mx-auto space-y-4">
            {routes.map((route) => (
              <div key={route.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeIn">
                {/* Route Header - Expandable */}
                <button
                  onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)}
                  className="w-full px-6 py-6 hover:bg-gray-100 transition-colors text-left flex justify-between items-start"
                >
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{route.title}</h2>
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
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
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
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fadeIn">
            Questions Fréquemment Posées
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#5BC4AF] to-[#008576] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            Prêt à Grimper le Kilimandjaro?
          </h2>
          <p className="text-lg text-[#E8F8F5] mb-8 animate-slideInLeft">
            Choisissez votre route et laissez nos experts vous guider vers le sommet avec sécurité et succès.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#00A896] font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform animate-slideInRight flex items-center justify-center mx-auto">
            Demander une consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

    </div>
  )
}
