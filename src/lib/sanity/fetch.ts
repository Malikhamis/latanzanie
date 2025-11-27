import { Park } from '@/types/park'

// Function to get the base URL for API calls
function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin
  }
  // Server-side
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Default to localhost for development
  return 'http://localhost:3000'
}

// Function to fetch all parks via our API route (proxy)
export async function getAllParks(): Promise<Park[]> {
  try {
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/api/parks`
    
    const response = await fetch(url, { 
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      console.warn(`Failed to fetch parks: ${response.status} ${response.statusText}`)
      // Return fallback data when API route fails
      return [
        {
          _id: '1',
          title: 'Parc National du Serengeti',
          slug: { current: 'serengeti' },
          region: 'Nord de la Tanzanie',
          overview: 'Fameux pour la Grande Migration annuelle des gnous et des zèbres, le parc du Serengeti est l\'un des sites de safari les plus emblématiques d\'Afrique.'
        },
        {
          _id: '2',
          title: 'Cratère du Ngorongoro',
          slug: { current: 'ngorongoro' },
          region: 'Nord de la Tanzanie',
          overview: 'Le cratère du Ngorongoro est le plus grand cratère volcanique ininterrompu au monde et abrite une densité exceptionnelle de faune.'
        },
        {
          _id: '3',
          title: 'Parc National de la Tarangire',
          slug: { current: 'tarangire' },
          region: 'Nord de la Tanzanie',
          overview: 'Célèbre pour ses grands troupeaux d\'éléphants et ses baobabs majestueux, la Tarangire offre un paysage de savane emblématique.'
        }
      ]
    }

    const { parks } = await response.json()
    return parks
  } catch (error) {
  console.warn('Error fetching parks via API route:', error)
    // Return fallback data when API route fails
    // Note: This fallback data should be handled at the component level with proper translations
    return [
      {
        _id: '1',
        title: 'Parc National du Serengeti',
        slug: { current: 'serengeti' },
        region: 'Nord de la Tanzanie',
        overview: 'Fameux pour la Grande Migration annuelle des gnous et des zèbres, le parc du Serengeti est l\'un des sites de safari les plus emblématiques d\'Afrique.'
      },
      {
        _id: '2',
        title: 'Cratère du Ngorongoro',
        slug: { current: 'ngorongoro' },
        region: 'Nord de la Tanzanie',
        overview: 'Le cratère du Ngorongoro est le plus grand cratère volcanique ininterrompu au monde et abrite une densité exceptionnelle de faune.'
      },
      {
        _id: '3',
        title: 'Parc National de la Tarangire',
        slug: { current: 'tarangire' },
        region: 'Nord de la Tanzanie',
        overview: 'Célèbre pour ses grands troupeaux d\'éléphants et ses baobabs majestueux, la Tarangire offre un paysage de savane emblématique.'
      }
    ]
  }
}

// Function to fetch navigation data
export async function getNavigationData(): Promise<Pick<Park, '_id' | 'title' | 'slug'>[]> {
  try {
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/api/parks`
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    
    if (!response.ok) {
      console.warn(`Failed to fetch navigation data: ${response.status} ${response.statusText}`)
      // Return fallback navigation items when API route fails
      return [
        {
          _id: '1',
          title: 'Parc National du Serengeti',
          slug: { current: 'serengeti' }
        },
        {
          _id: '2',
          title: 'Cratère du Ngorongoro',
          slug: { current: 'ngorongoro' }
        },
        {
          _id: '3',
          title: 'Parc National de la Tarangire',
          slug: { current: 'tarangire' }
        }
      ]
    }

    const { parks } = await response.json()

    return parks.map((park: Park) => ({
      _id: park._id,
      title: park.title,
      slug: park.slug
    }))
  } catch (error) {
  console.warn('Error fetching navigation data via API route:', error)
    // Return fallback data when API route fails
    return [
      {
        _id: '1',
        title: 'Parc National du Serengeti',
        slug: { current: 'serengeti' }
      },
      {
        _id: '2',
        title: 'Cratère du Ngorongoro',
        slug: { current: 'ngorongoro' }
      },
      {
        _id: '3',
        title: 'Parc National de la Tarangire',
        slug: { current: 'tarangire' }
      }
    ]
  }
}

// Function to fetch a single park by slug
export async function getParkBySlug(slug: string): Promise<Park | null> {
  // For now, we'll implement a simple version that returns null
  // In a real implementation, you would create a similar API route for single park fetching
  console.warn('getParkBySlug is not yet implemented with the new API approach')
  return null
}