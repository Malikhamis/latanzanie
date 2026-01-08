'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Faq from '@/components/ui/faq'
import { MapPin, Clock, Calendar, User, CheckCircle, X, Users, Bed, XCircle } from 'lucide-react'

export default function MachameRoutePage() {
  // read locale from the route params
  const params = useParams() as { locale?: string };
  const currentLocale = params?.locale === 'fr' ? 'fr' : 'en';

  // Hardcoded French content for Machame Route
  const safeT = (key: string, fallback = ''): string => {
    const frMessages: Record<string, string> = {
      'hero.title': "L'Itinéraire Machame (7 Jours de Trek) : L'Ascension Panoramique",
      'hero.breadcrumb': "Tanzanie > Kilimandjaro > Route Machame",
      'hero.duration': "9 jours (7 jours de trek)",
      'hero.description': "Souvent appelée la \"voie du Whisky\", la voie Machame est l'itinéraire le plus populaire du Kilimandjaro, et ce, pour de bonnes raisons. Elle offre des paysages spectaculaires et variés, traversant cinq zones climatiques distinctes. Cet itinéraire de 7 jours sur la montagne est fortement recommandé. Il comprend un jour d'acclimatation plus court entre le camp de Barranco et le camp de Karanga, ce qui est crucial pour s'adapter à l'altitude et augmente considérablement vos chances d'atteindre le sommet en toute sécurité.",
      'hero.price': "À partir de 2 000 €",
      'miniNavbar.datesAndPrices': "Dates & Prix",
      'miniNavbar.proposeDate': "Proposer une date",
      'miniNavbar.details': "Détails",
      'miniNavbar.inclusions': "Inclusions",
      'miniNavbar.accommodation': "Hébergement",
      'detailedItineraryTitle': "Itinéraire détaillé",
      'itinerary.day0.title': "Jour d'Arrivée : Aéroport International du Kilimandjaro (JRO) → Moshi ou Arusha",
      'itinerary.day0.altitude': "Altitude : 850 m / 2 790 ft",
      'itinerary.day0.accommodation': "Logement : Hôtel",
      'itinerary.day0.description': "À votre arrivée à l'aéroport international du Kilimandjaro (JRO), un membre de notre équipe vous accueillera et vous conduira à votre hôtel à Moshi ou Arusha. Ce transfert vous permettra de vous détendre et de vous remettre de votre vol.\n\nDans la soirée, votre guide principal viendra à votre hôtel pour un briefing complet sur l'ascension. Il examinera votre équipement pièce par pièce pour s'assurer que vous avez tout ce qu'il faut, répondra à toutes vos questions et vous préparera mentalement pour l'aventure à venir.",
      'itinerary.day1.title': "Jour 1 du Trek : Machame Gate (1 800 m) → Machame Camp (2 835 m)",
      'itinerary.day1.walkingTime': "Temps de marche : 5-7 heures",
      'itinerary.day1.distance': "Distance : 11 km / 7 miles",
      'itinerary.day1.altitudeGain': "Altitude (Gain) : 1 035 m / 3 396 ft",
      'itinerary.day1.habitat': "Habitat : Forêt tropicale",
      'itinerary.day1.description': "Après le petit-déjeuner, nous nous rendons à la porte Machame (environ 1 heure de route de Moshi). Une fois les formalités d'enregistrement terminées, vous ferez vos adieux à la civilisation et commencerez votre ascension. Le premier jour est une montée régulière à travers une magnifique et dense forêt tropicale. Le sentier est bien entretenu mais peut être boueux et glissant. En chemin, gardez les yeux ouverts pour apercevoir les singes Colobes noirs et blancs. Vous arriverez au camp Machame en fin d'après-midi, où vos tentes seront déjà montées.",
      'itinerary.day2.title': "Jour 2 du Trek : Machame Camp (2 835 m) → Shira Camp (3 850 m)",
      'itinerary.day2.walkingTime': "Temps de marche : 4-6 heures",
      'itinerary.day2.distance': "Distance : 5 km / 3 miles",
      'itinerary.day2.altitudeGain': "Altitude (Gain) : 1 015 m / 3 330 ft",
      'itinerary.day2.habitat': "Habitat : Landes",
      'itinerary.day2.description': "Vous quitterez la forêt tropicale pour entrer dans la zone des landes. Le sentier devient plus raide et le paysage s'ouvre, offrant des vues magnifiques sur les plaines en contrebas. La végétation change radicalement, avec des bruyères géantes et des séneçons. L'étape d'aujourd'hui est plus courte, ce qui aide à l'acclimatation. Vous traverserez une petite vallée avant de monter sur le plateau de Shira, où vous atteindrez le camp Shira 2. Par temps clair, le sommet de Kibo et le mont Meru à l'ouest sont visibles.",
      'itinerary.day3.title': "Jour 3 du Trek : Shira Camp (3 850 m) → Lava Tower (4 600 m) → Barranco Camp (3 900 m)",
      'itinerary.day3.walkingTime': "Temps de marche : 6-8 heures",
      'itinerary.day3.distance': "Distance : 10 km / 6 miles",
      'itinerary.day3.altitudeMax': "Altitude (Max) : 4 600 m / 15 090 ft",
      'itinerary.day3.habitat': "Habitat : Désert alpin",
      'itinerary.day3.description': "Aujourd'hui est crucial pour l'acclimatation : \"Monter haut, dormir bas\". Vous monterez jusqu'à la Lava Tower (4 600 m), où vous déjeunerez. Vous pourriez commencer à ressentir les effets de l'altitude, mais c'est parfaitement normal. Après le déjeuner, vous descendrez dans la magnifique vallée de Barranco (3 900 m), où vous passerez la nuit. Cette descente aide énormément votre corps à s'adapter à l'altitude. Le camp de Barranco est spectaculaire, niché sous l'imposant mur de Barranco et entouré de séneçons géants.",
      'itinerary.day4.title': "Jour 4 du Trek : Barranco Camp (3 900 m) → Karanga Camp (3 995 m)",
      'itinerary.day4.walkingTime': "Temps de marche : 3-5 heures",
      'itinerary.day4.distance': "Distance : 5 km / 3 miles",
      'itinerary.day4.altitudeGain': "Altitude (Gain) : 95 m / 311 ft",
      'itinerary.day4.habitat': "Habitat : Désert alpin",
      'itinerary.day4.description': "C'est la journée qui distingue l'itinéraire de 7 jours de celui de 6 jours. Elle commence par le défi le plus excitant de la journée : le Mur de Barranco. Il ne s'agit pas d'escalade technique, mais d'une \"escalade facile\" (scrambling) où vous devrez utiliser vos mains et vos pieds pour gravir la paroi de 250 mètres. Vos guides seront là pour vous assurer une progression sûre et amusante.\n\nUne fois au sommet, vous serez récompensé par des vues imprenables. Le reste de la journée est une série de montées et de descentes à travers les vallées alpines jusqu'au camp de Karanga. Cette courte journée est essentielle pour renforcer votre acclimatation avant la montée finale vers le camp de base.",
      'itinerary.day5.title': "Jour 5 du Trek : Karanga Camp (3 995 m) → Barafu Camp (4 673 m)",
      'itinerary.day5.walkingTime': "Temps de marche : 3-4 heures",
      'itinerary.day5.distance': "Distance : 4 km / 2.5 miles",
      'itinerary.day5.altitudeGain': "Altitude (Gain) : 678 m / 2 224 ft",
      'itinerary.day5.habitat': "Habitat : Désert alpin / Arctique",
      'itinerary.day5.description': "Une autre journée de marche courte et régulière pour préserver votre énergie. Vous traverserez un paysage aride et rocheux, rejoignant la jonction avec la voie Mweka. La montée vers le camp Barafu (\"glace\" en swahili) est constante. Le camp est situé sur une crête exposée et venteuse, offrant des vues spectaculaires sur les pics de Kibo et Mawenzi.\n\nVous arriverez au camp pour le déjeuner, ce qui vous laissera tout l'après-midi pour vous reposer, préparer votre équipement pour le sommet, manger un dîner tôt (vers 17h30) et essayer de dormir le plus possible. L'excitation et la nervosité montent !",
      'itinerary.day6.title': "Jour 6 du Trek : JOUR DU SOMMET - Barafu (4 673 m) → Uhuru Peak (5 895 m) → Mweka Camp (3 100 m)",
      'itinerary.day6.walkingTime': "Temps de marche : 11-14 heures (6-8h de montée / 5-6h de descente)",
      'itinerary.day6.distance': "Distance : 17 km / 10.5 miles (5 km montée / 12 km descente)",
      'itinerary.day6.altitudeGain': "Altitude (Gain) : 1 222 m / 4 009 ft",
      'itinerary.day6.altitudeLoss': "Altitude (Perte) : 2 795 m / 9 170 ft",
      'itinerary.day6.habitat': "Habitat : Arctique / Landes",
      'itinerary.day6.description': "Le grand jour commence. Le réveil a lieu vers 23h30. Après un thé chaud et des biscuits, vous commencerez votre ascension finale dans l'obscurité et le froid. La montée est raide, se faisant \"pole pole\" (lentement, lentement) sur un sentier en lacets à travers les éboulis. C'est l'épreuve mentale et physique la plus difficile du trek.\n\nAprès environ 6 heures, vous atteindrez Stella Point (5 756 m), sur le bord du cratère, juste à temps pour assister au lever de soleil le plus spectaculaire de votre vie. Après une courte pause, vous continuerez le long du bord du cratère enneigé pendant encore 45 à 60 minutes pour atteindre le véritable sommet : Uhuru Peak (5 895 m), le point le plus haut de l'Afrique !\n\nAprès les photos et les célébrations, vous entamerez la longue descente. Vous retournerez à Barafu pour un repas chaud bien mérité et une courte sieste, avant de continuer à descendre vers le camp de Mweka.",
      'itinerary.day7.title': "Jour 7 du Trek : Mweka Camp (3 100 m) → Mweka Gate (1 640 m) → Hôtel",
      'itinerary.day7.walkingTime': "Temps de marche : 3-4 heures",
      'itinerary.day7.distance': "Distance : 10 km / 6 miles",
      'itinerary.day7.altitudeLoss': "Altitude (Perte) : 1 460 m / 4 790 ft",
      'itinerary.day7.habitat': "Habitat : Forêt tropicale",
      'itinerary.day7.description': "Votre dernier matin sur la montagne commence par un petit-déjeuner copieux, suivi de la traditionnelle cérémonie des pourboires pour remercier vos guides, cuisiniers et porteurs.\n\nEnsuite, vous entamerez une descente pittoresque et facile à travers la forêt tropicale luxuriante. Le sentier est bien tracé mais peut être glissant. À votre arrivée à la porte Mweka, vous signerez le registre et recevrez votre certificat de sommet officiel (certificat vert pour Stella Point, or pour Uhuru Peak).\n\nNotre véhicule vous attendra pour vous ramener à votre hôtel à Moshi ou Arusha. La première douche chaude depuis une semaine sera inoubliable !",
      'itinerary.departureDay.title': "Jour de Départ : Moshi ou Arusha → Aéroport (JRO)",
      'itinerary.departureDay.description': "Profitez d'un petit-déjeuner tranquille à votre hôtel. En fonction de votre horaire de vol, vous pourrez vous détendre, acheter des souvenirs ou explorer la ville. Nous organiserons votre transfert retour vers l'aéroport international du Kilimandjaro (JRO) pour votre vol de retour, ou pour la suite de votre aventure (safari ou Zanzibar).",
      'inclusions.title': "Inclusions et Exclusions",
      'inclusions.priceIncludes': "Le Prix Comprend",
      'inclusions.priceDoesNotInclude': "Le Prix Ne Comprend Pas",
      'inclusions.seeMore': "Voir plus",
      'inclusions.seeFewer': "Voir moins",
      'inclusions.exclusions.visa': "Visa tanzanien",
      'inclusions.exclusions.airfares': "Billets d'avion",
      'inclusions.exclusions.transfers': "Transferts aéroport (40 $ US par personne par transfert)",
      'inclusions.exclusions.insurance': "Assurance voyage",
      'inclusions.exclusions.tips': "Pourboires pour l'équipe de montagne",
      'inclusions.exclusions.singleSupplement': "Supplément chambre simple (si nécessaire)",
      'inclusions.items': "Deux nuits d'hébergement à l'hôtel|||Transport privé aller-retour depuis l'aéroport international du Kilimandjaro jusqu'à votre hôtel à Moshi|||Guides qualifiés avec équipage de montagne|||Droits d'entrée au parc national|||TVA de 18 % sur les frais d'excursion et les services|||Tout le matériel de camping ; montagne|||Frais de sauvetage|||Tous les repas en montagne (petit-déjeuner, déjeuner et dîner)|||Guides et porteurs|||Hébergement et droits d'entrée en montagne|||Oxymètre de pouls|||Trousse de premiers secours|||Urgence respiratoire|||Salaires équitables pour les guides et les porteurs, approuvés par l'Autorité du parc national du Kilimandjaro",
      'datesAndPrices.title': "Dates et Prix",
      'datesAndPrices.groupDiscounts': "Réductions de groupe",
      'datesAndPrices.dontSeeDates': "Vous ne voyez pas vos dates ?",
      'datesAndPrices.enquireButton': "Demander plus de détails",
      'datesAndPrices.proposeNewDate': "Proposer une nouvelle date",
      'datesAndPrices.proposeDateDescription': "Veuillez proposer une nouvelle date de départ",
      'datesAndPrices.proposeDateButton': "Proposer une Nouvelle Date",
      'datesAndPrices.when': "Quand",
      'datesAndPrices.selected': "sélectionné(s)",
      'datesAndPrices.selectMonth': "Sélectionnez les mois",
      'datesAndPrices.groupOptions': "Options de groupe",
      'datesAndPrices.selectGroup': "Sélectionnez le type de groupe",
      'datesAndPrices.soloTraveler': "Voyageur solo",
      'datesAndPrices.couple': "Couple",
      'datesAndPrices.familyGroup': "Groupe familial",
      'datesAndPrices.friendsGroup': "Groupe d'amis",
      'datesAndPrices.corporateGroup': "Groupe d'entreprise",
      'datesAndPrices.fromPrice': "À partir de 2 000 €",
      'datesAndPrices.noDeparturesMessage': "Aucun départ pour cet itinéraire dans le mois sélectionné.",
      'datesAndPrices.contactUsCTA': "Contactez-nous pour demander des dates alternatives",
      'accommodation.title': "Hébergement",
      'accommodation.camps.title': "Camps de montagne",
      'accommodation.camps.description': "Sur la route Machame, vous séjournerez dans des tentes de haute qualité à quatre saisons dans des camps désignés. Chaque campement est situé stratégiquement pour une acclimatation optimale et offre une vue imprenable sur la montagne.",
      'gallery.title': "Galerie de photos",
      'faqs.title': "Questions fréquemment posées",
      'newsletter.title': "Si vous aimez voyager,",
      'newsletter.subtitle': "rejoignez notre newsletter",
      'newsletter.description': "Recevez les dernières nouvelles sur les joyaux d'aventure cachés, les voyages de lancement à prix réduit et bien plus encore directement dans votre boîte de réception",
      'newsletter.firstNamePlaceholder': "Prénom",
      'newsletter.emailPlaceholder': "Email",
      'newsletter.button': "S'inscrire !",
      'contactModal.title': "Réserver un appel avec notre équipe",
      'contactModal.name': "Nom complet",
      'contactModal.namePlaceholder': "Jean Dupont",
      'contactModal.email': "Adresse email",
      'contactModal.emailPlaceholder': "jean@example.com",
      'contactModal.phone': "Numéro de téléphone",
      'contactModal.phonePlaceholder': "+255 123 456 789",
      'contactModal.message': "Message",
      'contactModal.messagePlaceholder': "Dites-nous en plus sur vos projets de voyage...",
      'contactModal.accept': "J'accepte la",
      'contactModal.privacyPolicy': "Politique de confidentialité",
      'contactModal.submit': "Envoyer la demande",
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
  };
  
  // Fallback sample dates (small set) and parser to read translated month data if provided
  const fallbackSampleDates: Record<string, Array<any>> = {
    '2026-Jan': [
      { 
        date: 'Jan 4, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jan 11, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jan 18, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jan 25, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Feb': [
      { 
        date: 'Feb 1, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Feb 8, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Feb 15, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Feb 22, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Mar': [
      { 
        date: 'Mar 7, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Mar 14, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Mar 21, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Mar 28, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Apr': [
      { 
        date: 'Apr 4, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Apr 11, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Waitlisted', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-May': [
      { 
        date: 'May 2, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'May 9, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Jun': [
      { 
        date: 'Jun 6, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jun 13, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jun 20, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jun 27, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Jul': [
      { 
        date: 'Jul 4, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jul 11, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jul 18, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Jul 25, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Aug': [
      { 
        date: 'Aug 1, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Aug 8, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Aug 15, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Aug 22, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Aug 29, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Sep': [
      { 
        date: 'Sep 5, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Sep 12, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Sep 19, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Sep 26, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Oct': [
      { 
        date: 'Oct 3, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Oct 10, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Oct 17, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Oct 24, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Oct 31, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Nov': [
      { 
        date: 'Nov 6, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Nov 13, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Limited availability', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      }
    ],
    '2026-Dec': [
      { 
        date: 'Dec 4, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Dec 11, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Dec 18, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
        },
        deposit: '€100' 
      },
      { 
        date: 'Dec 25, 2026', 
        route: '7 Day - Machame Route', 
        status: 'Open for bookings', 
        prices: {
          'Solo Traveler': '€2,000',
          'Couple': '€2,000',
          'Family Group': '€1,800',
          'Friends Group': '€1,800',
          'Corporate Group': '€1,800'
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
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['Solo Traveler', 'Couple'])
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [showAllInclusions, setShowAllInclusions] = useState(false)
  
  // Refs for scrolling
  const datesPricesRef = useRef<HTMLElement>(null)
  const inclusionsRef = useRef<HTMLElement>(null)
  const accommodationRef = useRef<HTMLElement>(null)
  const monthDropdownRef = useRef<HTMLDivElement>(null)

  // provide backwards-compatible `t` used across the file by delegating to safeT
  const t = (key: string, fallback = '') => safeT(key, fallback)

  // detect locale from the earlier-determined `currentLocale` to tweak mobile-only layout
  const isFrench = true
  
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

  // Display inclusions based on state
  const displayedInclusions = showAllInclusions ? allInclusions : allInclusions.slice(0, 10)

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

  // Track active section on scroll
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
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

    const defaultItinerary = safeT('defaultItinerary', 'Machame Route')
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
      {/* Hero Section - With image background */}
      <section className="relative h-[450px] md:h-[500px] overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-machame.jpg" 
            alt="Kilimanjaro Machame Route" 
            fill
            className="object-cover w-full h-full"
            style={{ objectPosition: '50% 35%' }}
            priority
            unoptimized
          />
        </div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Square card positioned at bottom border - hidden in mobile, positioned on desktop */}
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

    {/* Spacer for floating card on desktop - slightly larger when French to
      accommodate longer translated text in the floating card */}
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
                {t('miniNavbar.details')}
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
          
          {/* Detailed Itinerary Title - Only on left side below mini navbar */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              {t('detailedItineraryTitle')}
            </h2>
          </div>
          
          <div className="w-full mt-0">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              
              
              
              {/* Day 0 - Details first, then image for both desktop and mobile */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day0.title')}</h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="text-sm px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day0.altitude')}</span>
                      <span className="text-sm px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day0.accommodation')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day0.description')}</p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/arrival1.jpg" alt="Arrival Day" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 1 - Image first on desktop, details second (alternating) */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day1.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.altitudeGain')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day1.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t('itinerary.day1.description')}</p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/gate1.jpg" alt="Day 1 - Machame Gate" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 - Details first, then image */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day2.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day2.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day2.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day2.altitudeGain')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day2.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t('itinerary.day2.description')}</p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/machamer.jpg" alt="Day 2 - Shira Camp" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 - Image first on desktop, details second */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day3.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day3.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day3.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day3.altitudeMax')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day3.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day3.description')}</p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/lava1.jpg" alt="Day 3 - Lava Tower" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4 - Details first, then image */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day4.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day4.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day4.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day4.altitudeGain')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day4.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day4.description')}</p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/barranco.jpg" alt="Day 4 - Barranco Wall" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 5 - Image first on desktop, details second */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day5.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day5.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day5.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day5.altitudeGain')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day5.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day5.description')}</p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/barafu.jpg" alt="Day 5 - Barafu Camp" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 6 - Summit Day - Details first, then image */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day6.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.altitudeGain')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day6.altitudeLoss')}</span>
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

              {/* Day 7 - Image first on desktop, details second */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.day7.title')}</h3>
                    <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day7.walkingTime')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day7.distance')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day7.altitudeLoss')}</span>
                      <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-[#E8F8F5] text-[#008576] rounded-full font-semibold">{t('itinerary.day7.habitat')}</span>
                    </div>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed whitespace-pre-line">{t('itinerary.day7.description')}</p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/mweka.jpg" alt="Day 7 - Descent" fill className="object-cover" unoptimized />
                    </div>
                  </div>
                </div>
              </div>

              {/* Departure Day - Details first, then image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('itinerary.departureDay.title')}</h3>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">{t('itinerary.departureDay.description')}</p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
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
              const [year, month] = monthKey.split('-')
              const rawList = getDatesForMonth(monthKey)
              const list = (rawList || [])
              
              return list.map((item, idx) => {
                // Calculate price based on selected group options
                let displayPrice = item.prices && item.prices['Solo Traveler'] ? item.prices['Solo Traveler'] : item.price || 'Price not available';
                let displayDeposit = item.deposit || 'Deposit not available';
                
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
                {/* Price Includes - Full width on mobile */}
                <div className="pr-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('inclusions.priceIncludes')}</h3>
                  <ul className="space-y-3">
                    {displayedInclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                  {allInclusions.length > 10 && (
                    <button 
                      onClick={() => setShowAllInclusions(!showAllInclusions)}
                      className="mt-6 text-[#00A896] hover:text-[#008576] font-medium flex items-center"
                    >
                      {showAllInclusions ? t('inclusions.seeFewer') : t('inclusions.seeMore')}
                      <svg className={`ml-1 h-4 w-4 transform ${showAllInclusions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllInclusions ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Price Does Not Include - Full width on mobile */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('inclusions.priceDoesNotInclude')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.visa')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.airfares')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.transfers')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.insurance')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.tips')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.singleSupplement')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  <Image src="/images/machame-camp.jpg" alt="Machame Camp" fill className="object-cover" unoptimized />
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
                <Image src="/images/machame-route-overview.jpg" alt="Machame Route Gallery Image 1" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Machame Route Gallery Image 2" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Machame Route Gallery Image 3" fill className="object-cover" unoptimized />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-machame.jpg" alt="Machame Route Gallery Image 4" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">{t('faqs.title')}</h2>
          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
              { question: "Comment on sėche ses affaires s'il pleut ?", answer: "Utilisez des sacs étanches et des sacs zip pour isoler le linge mouillé. Au camp, étendez vos affaires sur une corde (l'équipe aide souvent) et changez rapidement en couches sèches. Privilégiez les tissus à séchage rapide." }
            ]}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-machame.jpg" 
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
