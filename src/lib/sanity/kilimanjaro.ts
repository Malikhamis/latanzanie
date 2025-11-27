import { getClient } from './client'

// Define the route data structure
export interface KilimanjaroRoute {
  routeId: string
  name: string
  baseSuccessRate: number
  difficulty?: string
  duration?: number
  description?: string
  bestTimeToClimb?: string[]
}

// Function to fetch all Kilimanjaro routes from Sanity
export async function getAllKilimanjaroRoutes(): Promise<KilimanjaroRoute[]> {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not initialized')
    return []
  }
  
  try {
    const query = `*[_type == "kilimanjaroRoute"] {
      routeId,
      name,
      baseSuccessRate,
      difficulty,
      duration,
      description,
      bestTimeToClimb
    }`
    
    const routes = await client.fetch(query)
    return routes
  } catch (error) {
    console.error('Failed to fetch Kilimanjaro routes from Sanity:', error)
    return []
  }
}

// Function to fetch a specific Kilimanjaro route by ID
export async function getKilimanjaroRouteById(routeId: string): Promise<KilimanjaroRoute | null> {
  const client = getClient()
  if (!client) {
    console.warn('Sanity client not initialized')
    return null
  }
  
  try {
    const query = `*[_type == "kilimanjaroRoute" && routeId == $routeId][0] {
      routeId,
      name,
      baseSuccessRate,
      difficulty,
      duration,
      description,
      bestTimeToClimb
    }`
    
    const route = await client.fetch(query, { routeId })
    return route || null
  } catch (error) {
    console.error(`Failed to fetch Kilimanjaro route ${routeId} from Sanity:`, error)
    return null
  }
}