// Test script to simulate calculator form submission
async function testCalculator() {
  console.log('Testing Kilimanjaro Success Rate Calculator...')
  
  try {
    // Make a POST request to the calculator endpoint
    const response = await fetch('http://localhost:3000/api/test-calculator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        unitSystem: 'metric',
        height: 175, // cm
        weight: 70, // kg
        age: 30,
        gender: 'male',
        route: 'lemosho-8',
        stamina: 'good',
        altitudeExperience: 'yes',
        improvements: 'Would spend more time acclimatizing',
        email: 'test@example.com'
      })
    })
    
    const result = await response.json()
    console.log('Calculation result:', result)
  } catch (error) {
    console.error('Error during calculation:', error)
  }
}

testCalculator()