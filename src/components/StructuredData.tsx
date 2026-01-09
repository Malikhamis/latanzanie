import Script from 'next/script'

interface OrganizationSchemaProps {
  locale: string
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "La Tanzanie au Cœur de la Nature",
    "alternateName": "Tanzania at Heart of Nature",
    "description": locale === 'fr' 
      ? "Agence de voyage spécialisée en safaris éthiques et ascension du Kilimandjaro en Tanzanie"
      : "Travel agency specialized in ethical safaris and Kilimanjaro climbs in Tanzania",
    "url": "https://www.latanzanieaucourdelanature.com",
    "logo": "https://www.latanzanieaucourdelanature.com/images/logo.png",
    "image": "https://www.latanzanieaucourdelanature.com/images/kilimanjaro-summit.jpg",
    "telephone": "+255782825692",
    "email": "contact@latanzanieaucourdelanature.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TZ",
      "addressLocality": "Moshi",
      "addressRegion": "Kilimanjaro"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-3.0674",
      "longitude": "37.3556"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Tanzania"
    },
    "sameAs": [
      "https://www.facebook.com/latanzanieaucourdelanature",
      "https://www.instagram.com/latanzanieaucourdelanature"
    ],
    "priceRange": "€€-€€€",
    "serviceType": ["Safari Tours", "Mountain Climbing", "Cultural Tours", "Beach Holidays"],
  }

  return (
    <Script id="organization-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script id="breadcrumb-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface TripSchemaProps {
  name: string
  description: string
  price: number
  currency: string
  duration: string
  url: string
  image: string
}

export function TripSchema({ name, description, price, currency, duration, url, image }: Omit<TripSchemaProps, 'locale'>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": name,
    "description": description,
    "image": `https://www.latanzanieaucourdelanature.com${image}`,
    "url": url,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "La Tanzanie au Cœur de la Nature",
      "url": "https://www.latanzanieaucourdelanature.com"
    },
    "touristType": ["Adventure", "Nature", "Cultural"],
    "itinerary": {
      "@type": "ItemList",
      "description": duration
    }
  }

  return (
    <Script id="trip-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}

interface ParkSchemaProps {
  name: string
  description: string
  region: string
}

export function ParkSchema({ name, description, region }: Omit<ParkSchemaProps, 'locale'>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": name,
    "description": description,
    "image": `https://www.latanzanieaucourdelanature.com/images/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": region,
      "addressCountry": "TZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-3.0674",
      "longitude": "37.3556"
    },
    "touristType": ["Nature", "Wildlife", "Photography"]
  }

  return (
    <Script id="park-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
