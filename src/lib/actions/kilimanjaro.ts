'use server'

import { createServerActionClient } from '@/lib/supabase/serverActionsClient'
import { getClient } from '@/lib/sanity/client'
// import { getKilimanjaroRouteById } from '@/lib/sanity/kilimanjaro' // Removed unused import

// Define the shape of our calculator data
interface CalculatorData {
  unitSystem: 'metric' | 'imperial'
  height: number
  weight: number
  age: number
  gender: string
  route: string
  stamina: string
  altitudeExperience: string
  improvements: string
  email: string
}

// Define the route data structure
interface RouteData {
  name: string
  baseRate: number
}

// Mock route data - in a real implementation, this would come from Sanity
const routeData: Record<string, RouteData> = {
  'lemosho-8': { name: 'Lemosho Route - 8 Days', baseRate: 95 },
  'lemosho-7': { name: 'Lemosho Route - 7 Days', baseRate: 90 },
  'machame-7': { name: 'Machame Route - 7 Days', baseRate: 85 },
  'machame-6': { name: 'Machame Route - 6 Days', baseRate: 80 },
  'marangu-6': { name: 'Marangu Route - 6 Days', baseRate: 75 },
  'rongai-6': { name: 'Rongai Route - 6 Days', baseRate: 85 },
  'northern-9': { name: 'Northern Circuit - 9 Days', baseRate: 95 },
}

// Function to fetch route data from Sanity
async function getRouteDataFromSanity(): Promise<Record<string, RouteData>> {
  try {
    // Fetch all routes from Sanity
    const client = getClient()
    if (!client) {
      console.warn('Sanity client not initialized, using mock data')
      return routeData
    }
    
    const query = `*[_type == "kilimanjaroRoute"] {
      routeId,
      name,
      baseSuccessRate
    }`
    
    const routes = await client.fetch(query)
    const routeMap: Record<string, RouteData> = {}
    
    interface SanityRoute {
      routeId: string;
      name: string;
      baseSuccessRate: number;
    }
    
    routes.forEach((route: SanityRoute) => {
      routeMap[route.routeId] = {
        name: route.name,
        baseRate: route.baseSuccessRate
      }
    })
    
    return routeMap
  } catch (error) {
    console.error('Failed to fetch route data from Sanity, using mock data:', error)
    return routeData
  }
}

// Calculate BMI based on unit system
function calculateBMI(height: number, weight: number, unitSystem: 'metric' | 'imperial'): number {
  if (unitSystem === 'metric') {
    // Height in cm, weight in kg
    const heightInMeters = height / 100
    return weight / (heightInMeters * heightInMeters)
  } else {
    // Height in inches, weight in lbs
    return (weight / (height * height)) * 703
  }
}

// Calculate the success rate based on the algorithm
async function calculateSuccessRate(data: CalculatorData): Promise<number> {
  // Get route data (from Sanity in a real implementation)
  const routeMap = await getRouteDataFromSanity()
  
  // Find the selected route
  const routeInfo = routeMap[data.route]
  if (!routeInfo) {
    throw new Error('Invalid route selected')
  }
  
  let rate = routeInfo.baseRate
  
  // Apply training adjustment
  switch (data.stamina) {
    case 'poor':
      rate -= 10
      break
    case 'fair':
      // No change
      break
    case 'good':
      rate += 5
      break
    case 'excellent':
      rate += 10
      break
  }
  
  // Apply altitude adjustment
  if (data.altitudeExperience === 'no') {
    rate -= 10
  } else {
    rate += 5
  }
  
  // Apply BMI adjustment
  const bmi = calculateBMI(data.height, data.weight, data.unitSystem)
  if (bmi < 18.5 || bmi > 25) {
    rate -= 5
  }
  
  // Ensure rate is between 0 and 100
  return Math.max(0, Math.min(100, Math.round(rate)))
}

// Analyze results to provide personalized feedback
function analyzeResults(data: CalculatorData, successRate?: number) {
  const strengths: string[] = []
  const areasToImprove: string[] = []
  
  const bmi = calculateBMI(data.height, data.weight, data.unitSystem)
  
  // BMI analysis
  if (bmi >= 18.5 && bmi <= 25) {
    strengths.push('Your BMI is in the optimal range for high-altitude trekking')
  } else if (bmi < 18.5) {
    areasToImprove.push('Consider gaining some weight to improve energy reserves')
  } else {
    areasToImprove.push('Consider losing some weight to reduce strain on your body')
  }
  
  // Stamina analysis
  if (data.stamina === 'good' || data.stamina === 'excellent') {
    strengths.push('Your fitness level gives you a significant advantage')
  } else if (data.stamina === 'poor') {
    areasToImprove.push('Focus on cardiovascular training before your climb')
  }
  
  // Altitude experience analysis
  if (data.altitudeExperience === 'yes') {
    strengths.push('Previous altitude experience will help with acclimatization')
  } else {
    areasToImprove.push('Consider altitude training or spending time at elevation before your climb')
  }
  
  // Optionally provide feedback based on success rate if provided
  if (successRate !== undefined) {
    if (successRate >= 80) {
      strengths.push('Your overall preparation puts you in a strong position for success')
    } else if (successRate < 60) {
      areasToImprove.push('Consider additional preparation to improve your chances of success')
    }
  }
  
  return { strengths, areasToImprove }
}

export async function calculateKilimanjaroSuccess(formData: CalculatorData) {
  try {
    // Calculate the success rate
    const successRate = await calculateSuccessRate(formData)
    
    // Analyze results for feedback
    const { strengths, areasToImprove } = analyzeResults(formData)
    
    // Store lead data in Supabase
    const supabase = await createServerActionClient()
    
    const { error } = await supabase
      .from('kilimanjaro_leads')
      .insert({
        unit_system: formData.unitSystem,
        height: formData.height,
        weight: formData.weight,
        age: formData.age,
        gender: formData.gender,
        route: formData.route,
        stamina: formData.stamina,
        altitude_experience: formData.altitudeExperience,
        improvements: formData.improvements,
        email: formData.email,
        success_rate: successRate,
      })
    
    if (error) {
      console.error('Error inserting lead data:', error)
      throw new Error('Failed to save lead data')
    }
    
    // Return the results
    return {
      success: true,
      successRate,
      strengths,
      areasToImprove,
    }
  } catch (error) {
    console.error('Error calculating Kilimanjaro success rate:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to calculate success rate',
    }
  }
}