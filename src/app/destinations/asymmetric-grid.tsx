'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import '../tailgrid.css' // Import Tailgrid CSS for this component

export default function AsymmetricDestinationsGrid() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  // Sample destinations data with featured items for asymmetric layout
  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park Safari",
      region: "Northern Tanzania",
      price: 2490,
      duration: "7 days",
      rating: 5.0,
      type: "Safari",
      description: "Experience the world-famous Great Migration and witness the incredible diversity of wildlife.",
      featured: true, // This will span multiple columns/rows
      size: "large" // Large card for featured destination
    },
    {
      id: 2,
      name: "Kilimanjaro Climb - Machame Route",
      region: "Northern Tanzania",
      price: 3190,
      duration: "7 days",
      rating: 5.0,
      type: "Climbing",
      description: "Conquer Africa's highest peak with our expert guides on the scenic Machame route.",
      featured: false,
      size: "normal"
    },
    {
      id: 3,
      name: "Zanzibar Beach Holiday",
      region: "Zanzibar",
      price: 1890,
      duration: "5 days",
      rating: 4.9,
      type: "Beach",
      description: "Relax on pristine beaches and explore the rich cultural heritage of Stone Town.",
      featured: false,
      size: "normal"
    },
    {
      id: 4,
      name: "Ngorongoro Crater Safari",
      region: "Northern Tanzania",
      price: 1990,
      duration: "2 days",
      rating: 4.8,
      type: "Safari",
      description: "Descend into the world's largest intact caldera and see the densest concentration of wildlife.",
      featured: true, // This will span multiple columns/rows
      size: "large"
    },
    {
      id: 5,
      name: "Mount Meru Climb",
      region: "Northern Tanzania",
      price: 1690,
      duration: "4 days",
      rating: 4.7,
      type: "Climbing",
      description: "A challenging but rewarding climb to Tanzania's second-highest peak with stunning views.",
      featured: false,
      size: "normal"
    },
    {
      id: 6,
      name: "Selous Game Reserve Safari",
      region: "Southern Tanzania",
      price: 2290,
      duration: "4 days",
      rating: 4.6,
      type: "Safari",
      description: "Explore one of the largest protected areas in Africa with boat safaris and walking tours.",
      featured: false,
      size: "normal"
    },
    {
      id: 7,
      name: "Tarangire National Park",
      region: "Northern Tanzania",
      price: 1290,
      duration: "2 days",
      rating: 4.5,
      type: "Safari",
      description: "Known for its large elephant herds and baobab trees, offering a unique safari experience.",
      featured: false,
      size: "normal"
    },
    {
      id: 8,
      name: "Lake Manyara National Park",
      region: "Northern Tanzania",
      price: 990,
      duration: "1 day",
      rating: 4.3,
      type: "Safari",
      description: "Famous for its tree-climbing lions and flamingo-filled soda lake.",
      featured: true, // This will span multiple columns/rows
      size: "large"
    }
  ]

  // Filter destinations based on search criteria
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          destination.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion
    const matchesPrice = priceRange === 'all' || 
                         (priceRange === 'budget' && destination.price < 2000) ||
                         (priceRange === 'mid' && destination.price >= 2000 && destination.price <= 3000) ||
                         (priceRange === 'luxury' && destination.price > 3000)
    
    return matchesSearch && matchesRegion && matchesPrice
  })

  // Get unique regions for filter
  const regions = [...new Set(destinations.map(d => d.region))]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with geometric border */}
      <div className="relative h-96 bg-gradient-to-r from-orange-800 to-orange-600 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Destinations
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the incredible experiences that await you in Tanzania
          </p>
        </div>
        
        {/* Geometric border effect */}
        <div className="absolute bottom-0 left-0 right-0 h-12">
          <div className="h-full w-full flex">
            <div className="h-full w-1/3 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
            <div className="h-full w-1/3 bg-white/80" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
            <div className="h-full w-1/3 bg-white/60" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}></div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search destinations..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select
                  id="region"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="all">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select
                  id="price"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A896]"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget (Under $2000)</option>
                  <option value="mid">Mid-range ($2000-$3000)</option>
                  <option value="luxury">Luxury (Over $3000)</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576]"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedRegion('all')
                    setPriceRange('all')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asymmetric Destinations grid using Tailgrid */}
      <div className="py-16 max-w-7xl mx-auto px-4">
        {/* Using Tailgrid's grid-template-areas for asymmetric layout */}
        <div className="grid-trip-asymmetric gap-6">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                destination.featured ? 'featured-destination' : 'normal-destination'
              }`}
              style={{ width: '328px', height: '478px' }}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full" style={{ height: '200px' }} />
              <div className="p-6 flex flex-col h-[278px]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-bold text-gray-800">
                    {destination.name}
                  </h3>
                  <span className="text-lg font-bold text-gray-800">
                    ${destination.price}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">
                    {destination.duration}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-sm font-medium text-gray-800">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F8F5] text-[#008576]">
                    {destination.type}
                  </span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
              No destinations found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more results
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedRegion('all')
                setPriceRange('all')
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}