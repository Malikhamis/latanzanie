// Test script to simulate calculator form submission
import { calculateKilimanjaroSuccess } from '../src/lib/actions/kilimanjaro'

async function testCalculator() {
  console.log('Testing Kilimanjaro Success Rate Calculator...')
  
  // Sample form data
  const formData = {
    unitSystem: 'metric' as const,
    height: 175, // cm
    weight: 70, // kg
    age: 30,
    gender: 'male',
    route: 'lemosho-8',
    stamina: 'good',
    altitudeExperience: 'yes',
    improvements: 'Would spend more time acclimatizing',
    email: 'test@example.com'
  }
  
  try {
    console.log('Submitting form data:', formData)
    const result = await calculateKilimanjaroSuccess(formData)
    console.log('Calculation result:', result)
    
    if (result.success) {
      console.log(`Success Rate: ${result.successRate}%`)
      console.log('Strengths:', result.strengths)
      console.log('Areas to Improve:', result.areasToImprove)
    } else {
      console.error('Calculation failed:', result.error)
    }
  } catch (error) {
    console.error('Error during calculation:', error)
  }
}

testCalculator()