'use client'

import { useState, useEffect } from 'react'
// TODO: In a real implementation, import Sanity client and fetch route data
// import { getKilimanjaroRoutes } from '@/lib/sanity/kilimanjaro'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { calculateKilimanjaroSuccess } from '@/lib/actions/kilimanjaro'

export default function KilimanjaroCalculator() {
  // State for form inputs
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric')
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [age, setAge] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [route, setRoute] = useState<string>('')
  const [stamina, setStamina] = useState<string>('')
  const [altitudeExperience, setAltitudeExperience] = useState<string>('')
  const [improvements, setImprovements] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  
  // State for results
  const [successRate, setSuccessRate] = useState<number | null>(null)
  const [strengths, setStrengths] = useState<string[]>([])
  const [areasToImprove, setAreasToImprove] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
  const [routeOptions, setRouteOptions] = useState<{
    id: string;
    name: string;
    baseRate: number;
  }[]>([
    { id: 'lemosho-8', name: 'Lemosho Route - 8 Days', baseRate: 95 },
    { id: 'lemosho-7', name: 'Lemosho Route - 7 Days', baseRate: 90 },
    { id: 'machame-7', name: 'Machame Route - 7 Days', baseRate: 85 },
    { id: 'machame-6', name: 'Machame Route - 6 Days', baseRate: 80 },
    { id: 'marangu-6', name: 'Marangu Route - 6 Days', baseRate: 75 },
    { id: 'rongai-6', name: 'Rongai Route - 6 Days', baseRate: 85 },
    { id: 'northern-9', name: 'Northern Circuit - 9 Days', baseRate: 95 },
  ])

  // Fetch route data from API (data comes from Sanity)
  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        const response = await fetch('/api/kilimanjaro-routes')
        const data = await response.json()
        console.log('Fetched route data:', data)
        
        // Check if we got valid data
        if (Array.isArray(data) && data.length > 0) {
          setRouteOptions(data)
        }
      } catch (error) {
        console.error('Failed to fetch route data from Sanity:', error)
        // Keep using mock data if API fails
      }
    }
    fetchRouteData()
  }, [])

  // Calculate BMI based on unit system
  const calculateBMI = () => {
    if (!height || !weight) return 0
    
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)
    
    if (isNaN(heightNum) || isNaN(weightNum)) return 0
    
    if (unitSystem === 'metric') {
      // Height in cm, weight in kg
      const heightInMeters = heightNum / 100
      return weightNum / (heightInMeters * heightInMeters)
    } else {
      // Height in inches, weight in lbs
      return (weightNum / (heightNum * heightNum)) * 703
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    // Validate required fields
    if (!height || !weight || !age || !gender || !route || !stamina || !altitudeExperience || !email) {
      setError('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }
    
    try {
      // Prepare data for Server Action
      const formData = {
        unitSystem,
        height: parseFloat(height),
        weight: parseFloat(weight),
        age: parseInt(age),
        gender,
        route,
        stamina,
        altitudeExperience,
        improvements,
        email,
      }
      
      // Call Server Action
      const result = await calculateKilimanjaroSuccess(formData)
      
      if (result.success) {
        setSuccessRate(result.successRate ?? null)
        setStrengths(result.strengths ?? [])
        setAreasToImprove(result.areasToImprove ?? [])
      } else {
        setError(result.error || 'Failed to calculate success rate')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      console.error('Error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset results when inputs change
  useEffect(() => {
    setSuccessRate(null)
    setStrengths([])
    setAreasToImprove([])
    setError(null)
  }, [height, weight, age, gender, route, stamina, altitudeExperience, improvements, unitSystem])

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kilimanjaro Success Rate Calculator</h1>
          <p className="text-xl text-gray-600">
            Get a personalized assessment of your chances to reach Uhuru Peak
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Calculate Your Success Rate</CardTitle>
            <CardDescription>
              Fill in the form below to get a personalized success rate prediction for your Kilimanjaro climb
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Unit Toggle */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-base">Unit System</Label>
                  <ToggleGroup 
                    type="single" 
                    value={unitSystem} 
                    onValueChange={(value: string) => value && setUnitSystem(value as 'metric' | 'imperial')}
                    className="mt-2"
                  >
                    <ToggleGroupItem value="metric" aria-label="Metric units">
                      Metric (kg, cm)
                    </ToggleGroupItem>
                    <ToggleGroupItem value="imperial" aria-label="Imperial units">
                      Imperial (lbs, in)
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
              
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="height">
                    Height ({unitSystem === 'metric' ? 'cm' : 'inches'})
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unitSystem === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="weight">
                    Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unitSystem === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g., 30"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select value={gender} onValueChange={setGender} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Route Selection */}
              <div>
                <Label htmlFor="route">Choose Route</Label>
                <Select value={route} onValueChange={setRoute} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a route" />
                  </SelectTrigger>
                  <SelectContent>
                    {routeOptions.map((route) => (
                      <SelectItem key={route.id} value={route.id}>
                        {route.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Stamina Evaluation */}
              <div>
                <Label>Stamina Evaluation</Label>
                <RadioGroup value={stamina} onValueChange={setStamina} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="poor" />
                    <Label htmlFor="poor">Poor - I rarely exercise</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fair" id="fair" />
                    <Label htmlFor="fair">Fair - I exercise occasionally</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="good" />
                    <Label htmlFor="good">Good - I exercise regularly (3-4 times/week)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="excellent" />
                    <Label htmlFor="excellent">Excellent - I'm very active/trained</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Altitude Experience */}
              <div>
                <Label>Previous High Altitude Experience?</Label>
                <RadioGroup value={altitudeExperience} onValueChange={setAltitudeExperience} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="alt-yes" />
                    <Label htmlFor="alt-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="alt-no" />
                    <Label htmlFor="alt-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Improvements Textarea */}
              {altitudeExperience === 'yes' && (
                <div>
                  <Label htmlFor="improvements">What improvements would you make for your next high-altitude adventure?</Label>
                  <Textarea
                    id="improvements"
                    value={improvements}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setImprovements(e.target.value)}
                    placeholder="Share your experience and insights..."
                  />
                </div>
              )}
              
              {/* Email */}
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-center py-2">
                  {error}
                </div>
              )}
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Calculating...' : 'Evaluate My Success Rate'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Results Section */}
        {successRate !== null && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Personalized Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                {/* Progress Ring/Gauge */}
                <div className="relative w-64 h-64 mb-8">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={successRate >= 80 ? "#10b981" : successRate >= 60 ? "#f59e0b" : "#ef4444"}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * successRate) / 100}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Center text */}
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dy="7"
                      fontSize="20"
                      fontWeight="bold"
                      fill="#1f2937"
                    >
                      {successRate}%
                    </text>
                  </svg>
                </div>
                
                {/* Feedback Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <Card className="bg-[#E8F8F5] border-[#B8EDE3]">
                    <CardHeader>
                      <CardTitle className="text-[#008576]">Your Strengths</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {strengths.map((strength, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#00A896] mr-2">✓</span>
                            <span className="text-[#00A896]">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-amber-50 border-amber-200">
                    <CardHeader>
                      <CardTitle className="text-amber-800">Area to Improve</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {areasToImprove.map((area, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-500 mr-2">!</span>
                            <span className="text-amber-700">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 w-full">
                  <Button 
                    className="w-full py-6 text-lg"
                    onClick={() => {
                      // Redirect to the booking page with the selected route pre-filled
                      window.location.href = `/enquire?route=${encodeURIComponent(route)}`
                    }}
                  >
                    Book My Trip with {successRate}% Confidence
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}