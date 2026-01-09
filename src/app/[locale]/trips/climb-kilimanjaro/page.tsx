'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Download, Star, Users, Clock, MapPin, Calendar, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Faq from '@/components/ui/faq'

export default function ClimbKilimanjaroPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['lemosho', 'machame', 'marangu', 'umbwe'])
  const monthDropdownRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('ClimbKilimanjaroPage')
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) || []
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr'

  // Calculate date range for a trip
  const calculateDateRange = (startDate: Date, durationDays: number): string => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + durationDays - 1);
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const startMonth = monthNames[startDate.getMonth()];
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    const year = startDate.getFullYear();
    
    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  };

  // Generate sample dates for each route (5 dates per route)
  const generateSampleDates = (routeId: string, durationDays: number, selectedMonth: string) => {
    const [yearStr, monthStr] = selectedMonth.split('-');
    const year = parseInt(yearStr);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = monthNames.indexOf(monthStr);
    
    if (monthIndex === -1) return [];
    
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const departureDate = new Date(year, monthIndex, 5 + (i * 7)); // Weekly departures starting on 5th
      dates.push({
        startDate: departureDate,
        dateRange: calculateDateRange(departureDate, durationDays)
      });
    }
    return dates;
  };

  // Safe translation accessor that returns a fallback string when the key is missing
  const safeT = (key: string, fallback = ''): string => {
    // For data-driven keys (datesByMonth, datesAndPrices) we avoid calling
    // next-intl's `t` because missing namespaces cause it to throw a
    // MISSING_MESSAGE runtime error. Return the fallback for these keys so
    // the UI can continue to function and parse JSON-driven data separately.
    if (key.startsWith('datesByMonth.') || key.startsWith('datesAndPrices.')) {
      return fallback
    }

    // next-intl's `t` throws if a key is missing; wrap to ensure we never propagate an exception
    try {
      const maybe = t(key) as unknown
      if (typeof maybe === 'string') return maybe
      return fallback
    } catch (e) {
      // swallow and return fallback to avoid runtime MISSING_MESSAGE crashes
      return fallback
    }
  }

  // Actual Kilimanjaro routes available
  const kilimanjaroRoutes = [
    {
      id: 'lemosho',
      name: 'Lemosho Route',
      durationDays: 8,
      duration: '8 days',
      price: '€2,200',
      deposit: '€100',
      difficulty: 'Moderate',
      successRate: '95%',
      slug: 'lemosho-route'
    },
    {
      id: 'machame',
      name: 'Machame Route',
      durationDays: 7,
      duration: '7 days',
      price: '€2,000',
      deposit: '€100',
      difficulty: 'Moderate',
      successRate: '85%',
      slug: 'machame-route'
    },
    {
      id: 'marangu',
      name: 'Marangu Route',
      durationDays: 6,
      duration: '6 days',
      price: '€1,800',
      deposit: '€100',
      difficulty: 'Easy',
      successRate: '75%',
      slug: 'marangu-route'
    },
    {
      id: 'umbwe',
      name: 'Umbwe Route',
      durationDays: 7,
      duration: '7 days',
      price: '€1,900',
      deposit: '€100',
      difficulty: 'Challenging',
      successRate: '70%',
      slug: 'umbwe-route'
    }
  ]

  // Itinerary options (id + localized label) used for filtering and UI
  const itineraryOptions = kilimanjaroRoutes.map(route => ({
    id: route.id,
    label: route.name
  }))

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setIsWhenDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

  // Smart default month picker and default itinerary selection
  useEffect(() => {
    const now = new Date()
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const monthsToCheck: string[] = []
    for (let i = 0; i < 18; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1)
      const m = monthNames[d.getMonth()]
      monthsToCheck.push(`${d.getFullYear()}-${m}`)
    }

    let foundMonth: string | null = null
    for (const mk of monthsToCheck) {
      const raw = safeT(`datesByMonth.${mk}`, '')
      if (raw && raw.length > 0) {
        foundMonth = mk
        break
      }
    }

    const initialMonth = foundMonth || `${now.getFullYear()}-${monthNames[now.getMonth()]}`

    setSelectedMonths((prev) => {
      if (!prev || prev.length === 0) return [initialMonth]
      return prev
    })

    // pick a sensible default itinerary id (not the localized label)
    const defaultItineraryId = 'lemosho'
    setSelectedMonths((prev) => prev)
    // ensure a sensible default itinerary is selected if none chosen
    setSelectedItineraries((prev) => {
      if (prev && prev.length > 0) return prev
      return [defaultItineraryId]
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simplified without video background */}
      <section className="relative bg-gradient-to-r from-[#5BC4AF] to-[#008576] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Trip Information */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t('hero.title')}
              </h1>
              
              <div className="flex items-center mb-4">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-lg">Trips/Climb Kilimanjaro</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5" />
                  <span className="text-lg">{t('hero.durationLabel')}: {t('hero.duration')}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5" />
                  <span className="text-lg">{t('hero.difficultyLabel')}: {t('hero.difficulty')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3 h-5 w-5" />
                  <span className="text-lg">{t('hero.groupSizeLabel')}: {t('hero.groupSize')}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-3 h-5 w-5" />
                  <span className="text-lg">{t('hero.adventureTypeLabel')}: {t('hero.adventureType')}</span>
                </div>
              </div>
              
              <div className="text-3xl font-bold mb-8">
                {t('hero.price')}
              </div>
              
              <p className="text-xl mb-8 max-w-2xl">
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-[#008576] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2" />
                  {t('hero.bookCall')}
                </button>
                <button 
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center border border-white"
                >
                  <Download className="mr-2" />
                  {t('hero.downloadGuide')}
                </button>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 relative overflow-hidden">
              <Image 
                src="/images/kilimanjaro-summit.jpg" 
                alt="Climb Kilimanjaro" 
                fill
                className="object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Itineraries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('itineraries.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            {t('itineraries.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Marangu Route */}
            <Link href={`/${currentLocale}/trips/marangu-route`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block">
              <div className="relative h-48">
                <Image src="/images/marangu-route.jpg" alt="Marangu Route" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {t('itineraries.marangu.price')}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t('itineraries.marangu.title')}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {t('itineraries.marangu.description')}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{t('itineraries.marangu.duration')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(5.0)</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lemosho Route */}
            <Link href={`/${currentLocale}/trips/lemosho-route`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block">
              <div className="relative h-48">
                <Image src="/images/lemosho-route.jpg" alt="Lemosho Route" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {safeT('itineraries.lemosho.price', 'À partir de 2 200 €')}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {safeT('itineraries.lemosho.title', "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours")}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {safeT('itineraries.lemosho.description', "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro.")}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{safeT('itineraries.lemosho.duration', '7 jours')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(5.0)</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Umbwe Route */}
            <Link href={`/${currentLocale}/trips/umbwe-route`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block">
              <div className="relative h-48">
                <Image src="/images/kilimanjaro-umbwe.jpg" alt="Umbwe Route" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {safeT('itineraries.umbwe.price', 'À partir de 1 900 €')}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {safeT('itineraries.umbwe.title', "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)")}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {safeT('itineraries.umbwe.description', "Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés.")}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{safeT('itineraries.umbwe.duration', '6 jours')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(5.0)</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Machame Route */}
            <Link href={`/${currentLocale}/trips/machame-route`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 block">
              <div className="relative h-48">
                <Image src="/images/machame-route.jpg" alt="Machame Route" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {safeT('itineraries.machame.price', 'À partir de 2 000 €')}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {safeT('itineraries.machame.title', "L'Itinéraire Machame (7 Jours de Trek) : L'Ascension Panoramique")}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {safeT('itineraries.machame.description', "Souvent appelée la voie du Whisky, la voie Machame est l'itinéraire le plus populaire du Kilimandjaro.")}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{safeT('itineraries.machame.duration', '7 jours')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(5.0)</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Book Your Trip - Compact Design */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Book your trip
          </h2>
          
          {/* Compact Action Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">💰</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Group Discounts</h3>
                  <p className="text-gray-600 text-sm">Enquire for more details</p>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Don&#39;t see your dates?</h3>
                  <p className="text-gray-600 text-sm">Please propose a new departure</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Compact Inline */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* When Selector */}
            <div ref={monthDropdownRef} className="relative flex-1">
              <button 
                onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">When</span>
                  <span className="font-semibold">{selectedMonths.length > 0 ? selectedMonths[0] : 'February 2026'}</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isWhenDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isWhenDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto">
                  {/* 2025 */}
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-gray-900 mb-3">2025</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2025-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-500 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2026 */}
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-gray-900 mb-3">2026</h4>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2026-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* 2027 */}
                  <div>
                    <h4 className="text-base font-bold text-gray-900 mb-3">2027</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => {
                        const monthKey = `2027-${month}`;
                        const isSelected = selectedMonths.includes(monthKey);
                        return (
                          <button 
                            key={monthKey} 
                            onClick={() => {
                              setSelectedMonths([monthKey]);
                              setIsWhenDropdownOpen(false);
                            }}
                            className={`py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                              isSelected 
                                ? 'bg-[#00A896] text-white' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {month}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Itinerary Selector */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsItineraryDropdownOpen(!isItineraryDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Itinerary</span>
                  <span className="font-semibold">{selectedItineraries.length} Selected</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isItineraryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isItineraryDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  {itineraryOptions.map((opt) => {
                    const isSelected = selectedItineraries.includes(opt.id);
                    return (
                      <label key={opt.id} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={isSelected} 
                          onChange={() => {
                            if (isSelected) {
                              setSelectedItineraries(selectedItineraries.filter(s => s !== opt.id));
                            } else {
                              setSelectedItineraries([...selectedItineraries, opt.id]);
                            }
                          }} 
                          className="w-4 h-4 text-[#00A896] rounded"
                        />
                        <span className="text-base text-gray-800">{opt.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          
          {/* Show earlier dates link */}
          <div className="text-center mb-4">
            <button className="text-base text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Show earlier dates
            </button>
          </div>
          
          {/* Date Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              {selectedMonths.length > 0 
                ? selectedMonths[0].replace('-', ' ') 
                : 'Jan 2026'}
            </h3>
          </div>
          
          {/* Trip Dates - List Style */}
          <div className="space-y-3 mb-6">
            {kilimanjaroRoutes
              .filter((route: typeof kilimanjaroRoutes[0]) => selectedItineraries.length === 0 || selectedItineraries.includes(route.id))
              .flatMap((route: typeof kilimanjaroRoutes[0]) => {
                const sampleDates = generateSampleDates(route.id, route.durationDays, selectedMonths[0] || '2026-Jan');
                return sampleDates.map((dateInfo, index) => (
                  <div key={`${route.id}-${index}`} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900 text-base">{route.name}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{dateInfo.dateRange}</span>
                          </div>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-gray-600">{route.difficulty} • {route.successRate} success</span>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="text-right">
                          <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">{route.price}</span></div>
                          <div className="text-sm text-gray-500">Deposit {route.deposit}</div>
                        </div>
                        <button 
                          onClick={() => setIsContactModalOpen(true)}
                          className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                        >
                          Enquire
                        </button>
                      </div>
                    </div>
                  </div>
                ));
              })
            }
          </div>
          
          {/* Show More/Less Button */}
          {/* Removed the show more/less functionality since we're now showing all dates for all selected routes */}
          
          {/* Show later dates link */}
          <div className="text-center mb-8">
            <button className="text-base text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
              Show later dates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Don't see your dates section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-white rounded-full mb-4">
              <Calendar className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don&#39;t see your dates?</h3>
            <p className="text-gray-600 text-base mb-6">We can create it if bookable!</p>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Propose Dates
            </button>
          </div>
        </div>
      </section>







      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('faqs.title')}</h2>
          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
              { question: "Kilimandjaro : Faut-il se doucher pendant une ascension de 8 à 10 jours ?", answer: "Non, il n’est généralement pas possible de prendre une vraie douche lors d'une ascension du Kilimandjaro. Les camps de haute altitude sont situés dans des zones sauvages protégées, dépourvues d'installations sanitaires modernes ou d'eau courante. L’eau y est une ressource précieuse, réservée en priorité à la cuisine et à l’hydratation des grimpeurs.\n\nCependant, ne pas se doucher ne signifie pas négliger l’hygiène. Nos randonneurs utilisent des solutions simples et efficaces pour rester frais et en bonne santé tout au long du trek :\n\n1). Toilette quotidienne : Une bassine d'eau tiède et un gant de toilette sont fournis par notre équipe chaque matin et soir.\n\n2). Lingettes biodégradables : Idéales pour un nettoyage rapide du corps tout en respectant l'environnement.\n\n3). Lavage fréquent des mains : Une étape cruciale pour garantir votre santé et éviter les bactéries en groupe.\n\n4). Change régulier : Le renouvellement des vêtements techniques et des sous-vêtements est essentiel.\n\n5). Hygiène des pieds : Un soin rigoureux pour prévenir les ampoules et les infections durant la marche.\n\nPourquoi la douche n’est pas une priorité en altitude ?\nEn haute montagne, votre corps mobilise toute son énergie pour l'acclimatation. Se doucher à l'eau froide augmente considérablement le risque de fatigue et de refroidissement (hypothermie légère). Pour réussir votre sommet, votre priorité doit rester l’hydratation, le repos et l’adaptation progressive à l’altitude.\n\nL’avis du guide : Passer 8 à 10 jours sans douche est tout à fait normal et fait partie de l'aventure. Avec une hygiène de base bien gérée, vous resterez en pleine forme et concentré sur votre objectif : atteindre le pic Uhuru." }
            ]}
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-marangu.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            {t('newsletter.title')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {t('newsletter.subtitle')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {t('newsletter.description')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder={t('newsletter.firstNamePlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              {t('newsletter.button')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{t('contactModal.title')}</h2>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactModal.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.namePlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactModal.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.emailPlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactModal.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.phonePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contactModal.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.messagePlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    {t('contactModal.agreeTo')} <Link href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('contactModal.privacyPolicy')}</Link>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    {t('contactModal.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Download Modal */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsDownloadModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full z-10">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{t('downloadModal.title')}</h2>
                <button 
                  onClick={() => setIsDownloadModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t('downloadModal.description')}
              </p>
              
              {/* Download Form */}
              <form onSubmit={(e) => {
                e.preventDefault()
                // Download logic would go here
                setIsDownloadModalOpen(false)
              }} className="space-y-4">
                <div>
                  <label htmlFor="download-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('downloadModal.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="download-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('downloadModal.namePlaceholder')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="download-email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('downloadModal.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="download-email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('downloadModal.emailPlaceholder')}
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="download-privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="download-privacy-policy" className="ml-2 block text-sm text-gray-700">
                    {t('downloadModal.agreeTo')} <Link href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('downloadModal.privacyPolicy')}</Link>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    {t('downloadModal.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}