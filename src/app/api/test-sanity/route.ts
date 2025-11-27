import { getClient } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export async function GET() {
  try {
    // Check if Sanity client is initialized
    const client = getClient()
    if (!client) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Sanity client not initialized. Check your environment variables.'
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // Test query to check if we can connect to Sanity
    const query = groq`count(*[_type == "nationalPark"])`
    
    const count = await client.fetch(query)
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: `Connected to Sanity. Found ${count} national parks.`,
      count 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? (error as Error).stack : undefined
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}