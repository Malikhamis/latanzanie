export const blogCategories = [
  {
    id: 1,
    titleEn: 'The 7 Ascent Routes of Kilimanjaro: Complete Analysis, Comparison & Expert Local Advice',
    titleFr: "Les 7 Voies d'Ascension du Kilimandjaro : Analyse Complète, Comparée et Conseils d'Expert Local",
    subtitleEn: 'Comprehensive Route Guide',
    subtitleFr: 'Guide de voyage',
    descriptionEn: "Explore all 7 Kilimanjaro routes with detailed analysis, expert comparisons, and local insights. Choose the best path for your adventure to the Roof of Africa.",
    descriptionFr: "Randonnée du Kilimandjaro — une aventure unique au sommet de l'Afrique. Tout ce que vous devez savoir.",
    image: '/images/card1.jpg',
    link: 'kilimanjaro-routes'
  },
  {
    id: 2,
    titleEn: 'Choosing the Right Season for Hiking: The Truth Every Hiker Must Know',
    titleFr: "Choisir la Bonne Saison pour la Randonnée: La Vérité que Tout Randonneur Doit Connaître",
    subtitleEn: 'Seasonal Planning Guide',
    subtitleFr: 'Guide de Planification Saisonnière',
    descriptionEn: "Learn how weather, trails, temperature, and visibility change by season. Discover why January-March and June-October are ideal, and why April-May should be avoided.",
    descriptionFr: "Découvrez comment la météo, les sentiers, la température et la visibilité changent selon les saisons. Pourquoi janvier à mars et juin à octobre sont idéals.",
    image: '/images/days7.jpg',
    link: 'choose-season'
  },
  {
    id: 3,
    titleEn: 'Kilimanjaro — The 5 Climate Zones and Altitudes',
    titleFr: 'Kilimandjaro : Le Guide Complet des 5 Zones Climatiques et Altitudes',
    subtitleEn: 'Five Climate Bands Guide',
    subtitleFr: 'Guide des 5 zones climatiques',
    descriptionEn: "Expert guide on Kilimanjaro's 5 climate zones, their challenges and altitude advice.",
    descriptionFr: "Guide expert sur les 5 zones climatiques du Kilimandjaro et conseils d'altitude.",
    image: '/images/daysf3.jpg',
    link: 'climate-zones'
  },
  {
    id: 4,
    titleEn: 'Best time to climb Kilimanjaro',
    titleFr: 'Quelle est la meilleure période pour faire l’ascension du Kilimandjaro ?',
    subtitleEn: 'Travel Guide',
    subtitleFr: 'Guide de voyage',
    descriptionEn: 'When to climb Kilimanjaro: guide to dry and rainy seasons, route recommendations, and tips to maximize summit success.',
    descriptionFr: 'Quand gravir le Kilimandjaro : guide des saisons sèches et humides, recommandations de routes et conseils pour maximiser vos chances au sommet.',
    image: '/images/best-season.jpg',
    link: 'best-season'
  },
  {
    id: 5,
    titleEn: 'How to dry your gear when it rains',
    titleFr: 'Comment sécher ses affaires en trek quand il pleut ?',
    subtitleEn: 'Practical Guide',
    subtitleFr: 'Conseils pratiques d’un guide local',
    descriptionEn: 'Practical techniques used by local guides to dry clothes, gloves and small items during rainy treks on Kilimanjaro.',
    descriptionFr: 'Techniques pratiques utilisées par les guides locaux pour sécher les vêtements et petits articles pendant les treks sous la pluie.',
    image: '/images/drying-gear.jpg',
    link: 'drying-gear'
  },
  {
    id: 6,
    titleEn: 'How to dress for the 5 climate zones of Kilimanjaro',
    titleFr: 'Comment s’habiller pour affronter les 5 zones climatiques du Kilimandjaro ?',
    subtitleEn: 'Clothing Guide',
    subtitleFr: 'Guide vestimentaire',
    descriptionEn: 'Practical clothing advice to cross Kilimanjaro’s five climate zones from rainforest to summit.',
    descriptionFr: 'Conseils pratiques pour s’habiller en traversant les cinq zones climatiques du Kilimandjaro.',
    image: '/images/dress-zones.jpg',
    link: 'dress-for-zones'
  }
  ,
  {
    id: 7,
    titleEn: 'Altitude Health: Symptoms and How to Prevent Acute Mountain Sickness (AMS)',
    titleFr: 'Santé en altitude : Symptômes et prévention du Mal Aigu des Montagnes (MAM)',
    subtitleEn: 'Health & Safety',
    subtitleFr: 'Santé en altitude',
    descriptionEn: 'Recognize true AMS symptoms and practical prevention tips for climbing Kilimanjaro.',
    descriptionFr: 'Reconnaître les véritables symptômes du MAM et conseils pratiques pour prévenir le MAM lors de l ascension du Kilimandjaro.',
    image: '/images/altitude-health.jpg',
    link: 'sante-en-altitude'
  },
  {
    id: 8,
    titleEn: 'Physical Preparation for Kilimanjaro',
    titleFr: 'Préparation physique pour le Kilimandjaro',
    subtitleEn: 'Fitness & Training Guide',
    subtitleFr: 'Guide forme & entraînement',
    descriptionEn: 'What fitness level is really needed for Kilimanjaro? How to train, what to expect, and how to succeed even if you are not an athlete.',
    descriptionFr: 'Quel niveau physique est réellement nécessaire pour le Kilimandjaro ? Comment se préparer, à quoi s’attendre, et réussir même sans être sportif.',
    image: '/images/hero2.jpg',
    link: 'niveau-physique-kilimandjaro'
  }
]

export type BlogCategory = (typeof blogCategories)[number]
