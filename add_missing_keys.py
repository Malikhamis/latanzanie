import json

# Update French file
with open('locales/fr.json', 'r', encoding='utf-8-sig') as f:
    fr_data = json.load(f)

# Add missing keys to ZanzibarDivingCulture5Days
if 'ZanzibarDivingCulture5Days' in fr_data:
    fr_data['ZanzibarDivingCulture5Days']['inclusions'].update({
        'priceIncludes': 'Le prix comprend',
        'priceDoesNotInclude': 'Le prix n\'inclut pas',
        'exclusions': {
            'visa': 'Visa',
            'airfares': 'Billets d\'avion',
            'personalExpenses': 'Dépenses personnelles',
            'tips': 'Pourboires'
        },
        'seeMore': 'Voir plus',
        'seeFewer': 'Voir moins'
    })
    fr_data['ZanzibarDivingCulture5Days'].update({
        'miniNavbar': {
            'datesAndPrices': 'Dates et Prix',
            'proposeDate': 'Proposer une Date',
            'itinerary': 'Itinéraire',
            'inclusions': 'Inclusions',
            'practicalInfo': 'Informations Pratiques'
        },
        'newsletter': {
            'title': 'Restez à jour',
            'subtitle': 'Inscrivez-vous à notre newsletter',
            'description': 'Recevez les dernières offres et conseils de voyage'
        },
        'inquiryForm': {
            'name': 'Nom',
            'email': 'Email',
            'date': 'Date proposée',
            'message': 'Message',
            'submit': 'Envoyer'
        }
    })

with open('locales/fr.json', 'w', encoding='utf-8') as f:
    json.dump(fr_data, f, indent=2, ensure_ascii=False)

# Update English file
with open('locales/en.json', 'r', encoding='utf-8-sig') as f:
    en_data = json.load(f)

if 'ZanzibarDivingCulture5Days' in en_data:
    en_data['ZanzibarDivingCulture5Days']['inclusions'].update({
        'priceIncludes': 'Price Includes',
        'priceDoesNotInclude': 'Price Does Not Include',
        'exclusions': {
            'visa': 'Visa',
            'airfares': 'Airfares',
            'personalExpenses': 'Personal expenses',
            'tips': 'Tips'
        },
        'seeMore': 'See More',
        'seeFewer': 'See Fewer'
    })
    en_data['ZanzibarDivingCulture5Days'].update({
        'miniNavbar': {
            'datesAndPrices': 'Dates & Prices',
            'proposeDate': 'Propose Date',
            'itinerary': 'Itinerary',
            'inclusions': 'Inclusions',
            'practicalInfo': 'Practical Info'
        },
        'newsletter': {
            'title': 'Stay Updated',
            'subtitle': 'Subscribe to our newsletter',
            'description': 'Get the latest travel deals and tips'
        },
        'inquiryForm': {
            'name': 'Name',
            'email': 'Email',
            'date': 'Proposed Date',
            'message': 'Message',
            'submit': 'Submit'
        }
    })

with open('locales/en.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

print('Missing keys added successfully!')
