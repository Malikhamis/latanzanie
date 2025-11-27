import { createClient, type SanityClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

let _client: SanityClient | null = null

// Note: This client should only be used server-side or in preview mode
// For regular client-side requests, use the API routes instead
export function getClient(): SanityClient | null {
  // Return cached client if already created
  if (_client) {
    return _client
  }
  
  // Check if we have valid environment variables
  if (!projectId || !dataset) {
    console.warn('Missing Sanity environment variables')
    return null
  }
  
  // Validate projectId format
  if (!projectId.match(/^[a-z0-9-]+$/)) {
    console.warn('Invalid Sanity projectId format')
    return null
  }
  
  // Create and cache the client
  _client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === 'production',
    // Only use token server-side to prevent exposing it to client
    token: typeof window === 'undefined' ? process.env.SANITY_SECRET_TOKEN : undefined,
  })
  
  return _client
}