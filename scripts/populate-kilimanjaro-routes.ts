import { createClient } from 'next-sanity'

// Sanity configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_SECRET_TOKEN

if (!projectId || !dataset || !token) {
  console.error('Missing Sanity environment variables')
  process.exit(1)
}

// Create Sanity client with write access
const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2023-05-03',
  useCdn: false,
})

// Sample Kilimanjaro routes data
const routes = [
  {
    _type: 'kilimanjaroRoute',
    routeId: 'lemosho-8',
    name: 'Lemosho Route - 8 Days',
    baseSuccessRate: 95,
    difficulty: 'intermediate',
    duration: 8,
    description: 'The Lemosho Route is one of the most scenic paths to the summit of Mount Kilimanjaro.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'lemosho-7',
    name: 'Lemosho Route - 7 Days',
    baseSuccessRate: 90,
    difficulty: 'intermediate',
    duration: 7,
    description: 'A slightly shorter version of the Lemosho Route with the same stunning scenery.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'machame-7',
    name: 'Machame Route - 7 Days',
    baseSuccessRate: 85,
    difficulty: 'intermediate',
    duration: 7,
    description: 'The Machame Route is one of the most popular paths to the summit of Mount Kilimanjaro.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'machame-6',
    name: 'Machame Route - 6 Days',
    baseSuccessRate: 80,
    difficulty: 'advanced',
    duration: 6,
    description: 'A challenging 6-day trek on the Machame Route.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'marangu-6',
    name: 'Marangu Route - 6 Days',
    baseSuccessRate: 75,
    difficulty: 'beginner',
    duration: 6,
    description: 'The Marangu Route is known as the "Coca-Cola Route" and is one of the easier paths.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'rongai-6',
    name: 'Rongai Route - 6 Days',
    baseSuccessRate: 85,
    difficulty: 'intermediate',
    duration: 6,
    description: 'The Rongai Route approaches Kilimanjaro from the north and offers unique views.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  {
    _type: 'kilimanjaroRoute',
    routeId: 'northern-circuit-9',
    name: 'Northern Circuit - 9 Days',
    baseSuccessRate: 95,
    difficulty: 'intermediate',
    duration: 9,
    description: 'The Northern Circuit is the newest and longest route, offering the highest success rates.',
    bestTimeToClimb: ['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  }
]

async function populateRoutes() {
  console.log('Populating Kilimanjaro routes...')
  
  try {
    // Create new routes
    const transaction = client.transaction()
    
    routes.forEach(route => {
      transaction.create(route)
    })
    
    const result = await transaction.commit()
    console.log(`Successfully created ${result.results.length} routes`)
  } catch (error) {
    console.error('Error populating routes:', error)
    process.exit(1)
  }
}

populateRoutes()