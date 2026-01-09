import { NextResponse } from 'next/server'
import { getClient } from '@/lib/sanity/client'

export async function GET() {
  try {
    const client = getClient()
    if (!client) {
      console.warn('Sanity client not initialized')
      return NextResponse.json(
        { error: 'Sanity client not initialized' },
        { status: 500 }
      )
    }
    
    const query = `*[_type == "kilimanjaroRoute"] {
      routeId,
      name,
      baseSuccessRate
    }`
    
    const routes = await client.fetch(query)
    
    // Transform the data to match the expected format
    interface KilimanjaroRoute {
      routeId: string;
      name: string;
      baseSuccessRate: number;
    }
    
    interface FormattedRoute {
      id: string;
      name: string;
      baseRate: number;
    }
    
    const formattedRoutes: FormattedRoute[] = routes.map((route: KilimanjaroRoute) => ({
      id: route.routeId,
      name: route.name,
      baseRate: route.baseSuccessRate
    }));
    
    return NextResponse.json(formattedRoutes)
  } catch (error) {
    console.error('Failed to fetch Kilimanjaro routes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch routes' },
      { status: 500 }
    )
  }
}