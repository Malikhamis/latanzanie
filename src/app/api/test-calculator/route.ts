import { NextResponse } from 'next/server'
import { calculateKilimanjaroSuccess } from '@/lib/actions/kilimanjaro'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    console.log('Received form data:', formData)
    
    const result = await calculateKilimanjaroSuccess(formData)
    console.log('Calculation result:', result)
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error during calculation:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to calculate success rate' },
      { status: 500 }
    )
  }
}