// Import path module to work with file paths
import { createClient } from 'next-sanity'
import * as path from 'path'
import * as fs from 'fs'

// Function to load environment variables from .env.local
function loadEnvVars() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  const envContent = fs.readFileSync(envPath, 'utf8')
  
  const lines = envContent.split('\n')
  lines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=')
      const value = valueParts.join('=').trim()
      // Remove quotes if present
      const cleanValue = value.startsWith('"') && value.endsWith('"') 
        ? value.slice(1, -1) 
        : value.startsWith("'") && value.endsWith("'") 
        ? value.slice(1, -1) 
        : value
      process.env[key.trim()] = cleanValue
    }
  })
}

// Load environment variables
loadEnvVars()

// Direct client creation for script usage
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_SECRET_TOKEN,
  useCdn: false,
})

// Sample data for 7 Tanzanian national parks
const sampleParks = [
  {
    _type: 'nationalPark',
    title: 'Serengeti National Park',
    slug: { _type: 'slug', current: 'serengeti' },
    region: 'Northern Tanzania',
    overview: 'Famous for the annual migration of over 1.5 million wildebeest and 250,000 zebras.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Ngorongoro Conservation Area',
    slug: { _type: 'slug', current: 'ngorongoro' },
    region: 'Northern Tanzania',
    overview: 'UNESCO World Heritage Site containing the Ngorongoro Crater, the world\'s largest intact caldera.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Mount Kilimanjaro National Park',
    slug: { _type: 'slug', current: 'kilimanjaro' },
    region: 'Northern Tanzania',
    overview: 'Home to Africa\'s highest peak, Mount Kilimanjaro, and diverse ecological zones.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Selous Game Reserve',
    slug: { _type: 'slug', current: 'selous' },
    region: 'Southern Tanzania',
    overview: 'One of the largest faunal reserves in the world, known for its untouched wilderness.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Ruaha National Park',
    slug: { _type: 'slug', current: 'ruaha' },
    region: 'Southern Tanzania',
    overview: 'Tanzania\'s largest national park with diverse wildlife and the Great Ruaha River.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Tarangire National Park',
    slug: { _type: 'slug', current: 'tarangire' },
    region: 'Northern Tanzania',
    overview: 'Known for its large elephant herds and the Tarangire River which attracts wildlife.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  },
  {
    _type: 'nationalPark',
    title: 'Mahale Mountains National Park',
    slug: { _type: 'slug', current: 'mahale' },
    region: 'Western Tanzania',
    overview: 'Remote park on the shores of Lake Tanganyika, known for its chimpanzee population.',
    isTanzanian: true,
    entranceFees: {
      conservationFee: {
        citizen: 56000,
        nonCitizen: 70
      },
      campingFee: {
        citizen: 15000,
        nonCitizen: 25
      },
      vehicleFee: {
        citizen: 56000,
        nonCitizen: 70
      }
    }
  }
]

async function importParks() {
  try {
    console.log('Importing sample parks data...')
    
    // Import parks one by one
    for (const park of sampleParks) {
      const result = await client.create(park)
      console.log(`Created park: ${result.title} (${result._id})`)
    }
    
    console.log('Sample data import completed!')
  } catch (error) {
    console.error('Error importing sample data:', error)
  }
}

// Run the import function
importParks()