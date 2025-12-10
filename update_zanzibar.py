import json

# Update French file
with open('locales/fr.json', 'r', encoding='utf-8-sig') as f:
    fr_data = json.load(f)

fr_data['ZanzibarDivingCulture5Days'] = {
    'hero': {
        'title': "L'Archipel des Sens : Plongée & Culture à Zanzibar (5 Jours)",
        'breadcrumb': 'Tanzanie > Zanzibar',
        'description': "Le meilleur de l'Île aux Épices en format express. Ce n'est pas un simple séjour balnéaire, c'est une immersion intense dans le cœur palpitant de l'océan Indien. En cinq jours seulement, vous vivrez le contraste saisissant de Zanzibar : de l'éclat turquoise des fonds marins de Mnemba et du Safari Blue à l'authenticité vibrante des ruelles labyrinthiques de Stone Town.",
        'durationLabel': 'Durée',
        'duration': '5 jours',
        'priceLabel': 'À partir de',
        'price': '€850'
    },
    'miniNavbar': {
        'itinerary': 'Itinéraire',
        'inclusions': 'Inclusions',
        'practicalInfo': 'Informations Pratiques'
    },
    'detailedItineraryTitle': 'Itinéraire Détaillé',
    'itinerary': {
        'day1': {
            'title': 'Jour 1 : Transfert à l\'hôtel',
            'description': 'Ce jour-là, vous arriverez à l\'aéroport international de Zanzibar. À votre arrivée, vous rencontrerez notre chauffeur juste à côté de l\'arrivée. Le chauffeur affichera votre nom sur le panneau. La prise en charge dépendra des détails de votre vol. Vous enverrez les détails de votre vol lorsque vous confirmerez le forfait. Pas de frais supplémentaires pour le transfert vers votre hôtel.'
        },
        'day2': {
            'title': 'Jour 2 : Safari Blue Trip pour une journée complète',
            'description': 'Ce sera une journée complète de navigation autour des mangroves et de plongée en apnée le long de la baie de Menai, l\'un des meilleurs récifs coralliens de Zanzibar. Navigation vers l\'île de Kwale, détente sur un banc de sable, baignade et snorkeling. Savourez le meilleur barbecue de fruits de mer frais : poulpe, homard, calmar, poisson, etc. Goûtez des fruits frais exotiques tels que la banane, la pastèque, l\'ananas, les mangues.'
        },
        'day3': {
            'title': 'Jour 3 : Demi-journée - Dauphins de Mnemba et apnée',
            'description': 'Nagez avec les dauphins et prenez des photos incroyables. Faites de la plongée avec tuba et observez une variété de poissons tropicaux colorés, de coraux et d\'autres créatures marines. Explorez les récifs coralliens et la vie marine autour de l\'île de Mnemba. Cette demi-journée vous fera découvrir l\'autre partie de la côte nord de Zanzibar, Matemwe.'
        },
        'day4': {
            'title': 'Jour 4 : Stone Town, Ferme d\'Épices et Prison Island',
            'description': 'Cette journée, vous explorerez en goûtant et en sentant différentes épices cultivées et utilisées dans la cuisine de Zanzibar ; Cardamome, cannelle, poivre noir, clous de girofle, etc. Apprenez l\'histoire et la culture du peuple de Zanzibar avec un guide touristique professionnel local à Stone Town en visitant les lieux les plus emblématiques. Savourez un délicieux déjeuner composé de riz épicé préparé localement à la ferme avec du poisson frais et des fruits tels que des bananes, des mangues, des ananas, etc. Observez et prenez des photos des tortues géantes d\'Aldabra sur Prison Island. Et découvrez la brève histoire de Prison Island.'
        },
        'day5': {
            'title': 'Jour 5 : Transfert à l\'aéroport, au revoir !',
            'description': 'Après cinq jours de vacances à Zanzibar, ce jour-là, vous prendrez votre vol de retour. Le chauffeur vous conduira à l\'aéroport selon vos horaires de vol. Kwaheri!'
        }
    },
    'inclusions': {
        'title': 'Inclus',
        'items': '1) Hébergement|||2) Transferts aller-retour de l\'aéroport à l\'hôtel|||3) Petit-déjeuner|||4) Transport pendant les excursions|||5) Entrées|||6) L\'eau pendant les excursions|||7) Un chauffeur/guide professionnel|||8) Toutes les taxes et TVA|||9) Cartes SIM locales'
    },
    'pricing': {
        'price': '€850'
    }
}

with open('locales/fr.json', 'w', encoding='utf-8') as f:
    json.dump(fr_data, f, indent=2, ensure_ascii=False)

# Update English file
with open('locales/en.json', 'r', encoding='utf-8-sig') as f:
    en_data = json.load(f)

en_data['ZanzibarDivingCulture5Days'] = {
    'hero': {
        'title': 'The Senses Archipelago: Diving & Culture in Zanzibar (5 Days)',
        'breadcrumb': 'Tanzania > Zanzibar',
        'description': 'The best of the Spice Island in express format. This is not a simple beach stay; it\'s an intense immersion in the beating heart of the Indian Ocean. In just five days, you\'ll experience the striking contrast of Zanzibar: from the turquoise brilliance of Mnemba\'s underwater world and the Safari Blue to the vibrant authenticity of Stone Town\'s labyrinthine streets.',
        'durationLabel': 'Duration',
        'duration': '5 days',
        'priceLabel': 'From',
        'price': '€850'
    },
    'miniNavbar': {
        'itinerary': 'Itinerary',
        'inclusions': 'Inclusions',
        'practicalInfo': 'Practical Info'
    },
    'detailedItineraryTitle': 'Detailed Itinerary',
    'itinerary': {
        'day1': {
            'title': 'Day 1: Transfer to Hotel',
            'description': 'You will arrive at Zanzibar International Airport. Upon arrival, you will meet our driver just outside arrivals. The driver will display your name on a sign. Pick-up timing will depend on your flight details, which you\'ll provide when confirming your package. No additional charges for airport transfer to your hotel.'
        },
        'day2': {
            'title': 'Day 2: Full Day Safari Blue Trip',
            'description': 'A full day of sailing around mangroves and snorkeling along Menai Bay, one of Zanzibar\'s best coral reefs. Sail to Kwale Island, relax on a sandbank, swim and snorkel. Enjoy the best fresh seafood barbecue: octopus, lobster, squid, fish, etc. Taste exotic fresh fruits such as bananas, watermelon, pineapple, and mangoes.'
        },
        'day3': {
            'title': 'Day 3: Half-Day - Mnemba Dolphins & Snorkeling',
            'description': 'Swim with dolphins and capture incredible photos. Snorkel and observe a variety of colorful tropical fish, corals and other marine creatures. Explore the coral reefs and marine life around Mnemba Island. This half-day will take you to the other part of Zanzibar\'s northern coast, Matemwe.'
        },
        'day4': {
            'title': 'Day 4: Stone Town, Spice Farm & Prison Island',
            'description': 'Explore while tasting and smelling different spices cultivated and used in Zanzibar cuisine; cardamom, cinnamon, black pepper, cloves, etc. Learn the history and culture of the Zanzibar people with a professional local tour guide in Stone Town, visiting the most iconic sites. Enjoy a delicious lunch of locally-prepared spiced rice at the farm with fresh fish and fruits such as bananas, mangoes, pineapples, etc. View and photograph giant Aldabra tortoises on Prison Island and discover its brief history.'
        },
        'day5': {
            'title': 'Day 5: Transfer to Airport, Farewell!',
            'description': 'After five days of vacation in Zanzibar, you will take your return flight. Your driver will take you to the airport according to your flight schedule. Kwaheri!'
        }
    },
    'inclusions': {
        'title': 'Included',
        'items': '1) Accommodation|||2) Round-trip airport to hotel transfers|||3) Breakfast|||4) Transport during excursions|||5) Entrance fees|||6) Water during excursions|||7) A professional driver/guide|||8) All taxes and VAT|||9) Local SIM cards'
    },
    'pricing': {
        'price': '€850'
    }
}

with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

print('Both files updated successfully!')
