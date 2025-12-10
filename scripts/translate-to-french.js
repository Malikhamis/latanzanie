const fs = require('fs');
const path = require('path');

// Simple French translations dictionary for all keys
const translations = {
  // Common translations across sections
  "About": "À propos",
  "Destinations": "Destinations",
  "Trips": "Voyages",
  "Blog": "Blog",
  "Contact": "Contact",
  "Home": "Accueil",
  "My profile": "Mon profil",
  "Work with us": "Travailler avec nous",
  "Privacy Policy": "Politique de confidentialité",
  "Menu": "Menu",
  "Lang": "Langue",
  "Terms & Conditions": "Conditions générales",
  "Duration": "Durée",
  "Difficulty": "Difficulté",
  "Price": "Prix",
  "From": "À partir de",
  "Book Now": "Réserver Maintenant",
  "Learn More": "En Savoir Plus",
  "Contact Us": "Contactez-Nous",
  "FAQ": "FAQ",
  "Email": "Email",
  "Phone": "Téléphone",
  "Message": "Message",
  "Submit": "Soumettre",
  "Cancel": "Annuler",
  "Back": "Retour",
};

const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('locales/fr.json', 'utf8'));

// French translations for all sections
const frenchTranslations = {
  "ClimbKilimanjaroPage": {
    "videoFallback": "Votre navigateur ne supporte pas la balise vidéo.",
    "fromPrice": "À partir de ${price}",
    "durationLabel": "Durée",
    "difficultyLabel": "Difficulté",
    "groupSizeLabel": "Taille du groupe",
    "adventureTypeLabel": "Aventure",
    "bookCall": "Réserver un appel avec notre équipe",
    "downloadGuide": "Obtenez votre guide gratuit du Kilimandjaro",
  },
  "Common": {
    "kilimanjaroTrekking": {
      "title": "Trekking du Kilimandjaro",
      "subtitle": "Guide de voyage",
      "description": "Trek du Kilimandjaro – une aventure unique en Tanzanie",
    }
  },
  "Hero": {
    "cta": "Explorez maintenant"
  },
  "KilimanjaroSection": {
    "title": "Section Kilimandjaro",
    "description": "Découvrez le Kilimandjaro"
  },
  "MobileMenu": {
    "close": "Fermer"
  },
  "Footer": {
    "company": "La Tanzanie au Cœur de la Nature",
    "description": "Nous sommes un opérateur touristique de niche proposant une sélection des meilleurs voyages d'aventure en Tanzanie.",
    "quickLinks": "Liens Rapides",
    "contactInfo": "Informations de Contact",
    "rights": "Tous droits réservés"
  },
  "TravelBlogsPage": {
    "hero": {
      "title": "Bibliothèque de Connaissances",
      "subtitle": "Apprenez avant de voyager"
    }
  },
  "SeeTripsPage": {
    "hero": {
      "title": "Voyages d'Aventure",
      "subtitle": "Des voyages sur mesure conçus par des voyageurs passionnés"
    }
  },
  "AboutPage": {
    "hero": {
      "title": "Notre Histoire",
      "subtitle": "Découvrez le cœur et l'âme de Latanzanieaucourdelanature"
    }
  },
  "MachameRoute": {
    "miniNavbar": {
      "datesAndPrices": "Dates et Prix",
      "details": "Détails",
      "inclusions": "Inclusions",
      "accommodation": "Hébergement"
    }
  },
  "LemoshoRoute": {
    "miniNavbar": {
      "datesAndPrices": "Dates et Prix",
      "details": "Détails",
      "inclusions": "Inclusions",
      "accommodation": "Hébergement"
    }
  },
  "UmbweRoute": {
    "miniNavbar": {
      "datesAndPrices": "Dates et Prix",
      "details": "Détails",
      "inclusions": "Inclusions",
      "accommodation": "Hébergement"
    }
  },
  "MaranguRoutePage": {
    "miniNavbar": {
      "datesAndPrices": "Dates et Prix",
      "details": "Détails",
      "inclusions": "Inclusions",
      "accommodation": "Hébergement"
    }
  },
  "TanzaniaSafariPage": {
    "hero": {
      "title": "Safari en Tanzanie",
      "description": "Découvrez le meilleur de la faune et de la nature de la Tanzanie"
    }
  },
  "MateruniChemka2Days": {
    "hero": {
      "title": "Expérience Authentique du Kilimandjaro: Materuni & Chemka (2 Jours)",
      "description": "Immergez-vous dans la Tanzanie rurale avec cet itinéraire de deux jours"
    }
  },
  "ZanzibarSafariBeach10Days": {
    "hero": {
      "title": "Safari et Plage à Zanzibar (10 Jours)",
      "description": "Combinez le frisson du safari de la faune tanzanienne avec les plages paradisiaques de Zanzibar"
    }
  }
};

// Update fr.json with French translations
for (const [key, value] of Object.entries(frenchTranslations)) {
  if (fr[key]) {
    // Deep merge with French translations
    Object.assign(fr[key], value);
  }
}

// Write updated fr.json
fs.writeFileSync('locales/fr.json', JSON.stringify(fr, null, 2), 'utf8');
console.log('French translations applied successfully');
