'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation'
// Import raw locale JSON so we can safely read non-string message shapes
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import enMessages from '../../../../../locales/en.json'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import frMessages from '../../../../../locales/fr.json'
import { Phone, Download, Star, Users, Clock, MapPin, User, Calendar, Bed, Map, CheckCircle, XCircle, Info } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Faq from '@/components/ui/faq'

export default function MaranguRoutePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [isGroupDropdownOpen, setIsGroupDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['marangu'])
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [showEarlierDates, setShowEarlierDates] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showAllInclusions, setShowAllInclusions] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null);
  const monthDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (monthDropdownRef.current && !monthDropdownRef.current.contains(event.target as Node)) {
        setIsWhenDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const t = useTranslations('MaranguRoutePage')
  // Safe translation accessor that returns a fallback string when the key is missing
  const safeT = (key: string, fallback = ''): string => {
    // For data-driven keys (datesByMonth, datesAndPrices) we avoid calling
    // next-intl's `t` because missing namespaces cause it to throw a
    // MISSING_MESSAGE runtime error. Return the fallback for these keys so
    // the UI can continue to function and parse JSON-driven data separately.
    // Also skip keys that are known to be missing or cause MISSING_MESSAGE errors.
    if (
      key.startsWith('datesByMonth.') || 
      key.startsWith('datesAndPrices.') ||
      key.startsWith('itinerary.departureDay.') ||
      key.startsWith('inclusions.exclusions.')
    ) {
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
  
  // Refs for scrolling to sections
  const inclusionsRef = useRef<HTMLElement>(null);
  const accommodationRef = useRef<HTMLElement>(null);
  const datesPricesRef = useRef<HTMLElement>(null);
  
  // All inclusions data is provided via i18n to ensure localized content.
  // We try to read an array from the translations; if missing, fall back to an empty array.
  const allInclusions: string[] = (() => {
    try {
      const maybe = t('inclusions.items') as unknown
      if (typeof maybe === 'string' && maybe.length) {
        return (maybe as string).split('|||').map(s => s.trim()).filter(Boolean)
      }
      return []
    } catch (e) {
      return []
    }
  })()

  // Display inclusions based on state
  const displayedInclusions = showAllInclusions ? allInclusions : allInclusions.slice(0, 10)
  
  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

    // Fallback sample dates (used when translations haven't been provided yet)
    const fallbackSampleDates: Record<string, Array<any>> = {
      '2026-Feb': [
        { date: 'Feb 4, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from €2,200', deposit: 'Deposit €250' },
        { date: 'Feb 14, 2026', route: '7 Day - Lemosho Route', status: 'Open for bookings', price: 'from €2,000', deposit: 'Deposit €250' },
        { date: 'Feb 17, 2026', route: '8 Day - Lemosho Route', status: 'Few spaces left', price: 'from €2,200', deposit: 'Deposit €250' },
        { date: 'Feb 25, 2026', route: '8 Day - Lemosho Route • Full Moon', status: 'Few spaces left', price: 'from €2,200', deposit: 'Deposit €250', promo: true }
      ],
      '2026-Mar': [
        { date: 'Mar 3, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from €2,200', deposit: 'Deposit €250' },
        { date: 'Mar 10, 2026', route: '7 Day - Lemosho Route', status: 'Open for bookings', price: 'from €2,000', deposit: 'Deposit €250' },
        { date: 'Mar 17, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from €2,200', deposit: 'Deposit €250' },
        { date: 'Mar 27, 2026', route: '8 Day - Lemosho Route • Full Moon', status: 'Open for bookings', price: 'from €2,200', deposit: 'Deposit €250' }
      ]
    }

    // Read translated month data. Supports two formats from translations:
    // 1) A JSON string containing an array of objects (preferred), e.g. '[{"date":"...","route":"..."}]'
    // 2) A delimited string where entries are separated by '|||' and fields by ':::' (legacy fallback).
    // Implementation note: next-intl's `t()` may throw or return non-string values for message keys
    // (which results in MALFORMED_ARGUMENT errors). To avoid that, we attempt `t()` but fall back
    // to reading the raw locale JSON for the current route when necessary.
    // We import the JSONs directly so we can safely handle both string and array shapes.
  const params = useParams() as { locale?: string }
  const currentLocale = params?.locale || 'en'
  const localeMessages: any = currentLocale === 'fr' ? frMessages : enMessages

    const getDatesForMonth = (monthKey: string): Array<any> => {
      let rawStr = ''

      // Prefer reading the raw locale JSON directly (safer than calling t() for complex values)
      try {
        const node = localeMessages?.MaranguRoutePage?.datesByMonth?.[monthKey]
        if (typeof node === 'string') rawStr = node
        else if (Array.isArray(node)) rawStr = JSON.stringify(node)
      } catch (e) {
        // ignore and try t() below
      }

      // If raw JSON didn't yield a value, try using next-intl safely as a fallback
      if (!rawStr) {
        try {
          const maybe = t(`datesByMonth.${monthKey}`) as unknown
          if (typeof maybe === 'string') rawStr = maybe
        } catch (e) {
          // swallow and continue to final fallback
        }
      }

      if (rawStr && typeof rawStr === 'string' && rawStr.length) {
        const s = rawStr
        // Try JSON first
        if (s.trim().startsWith('[')) {
          try {
            const parsed = JSON.parse(s)
            if (Array.isArray(parsed)) return parsed
          } catch (e) {
            // fallthrough to delimited parsing
          }
        }

        // Delimited format: entry1|||entry2|||... where each entry is date:::route:::status:::price:::deposit:::promo
        const entries = s.split('|||').map(e => e.trim()).filter(Boolean)
        const parsedEntries = entries.map((entry) => {
          const parts = entry.split(':::').map(p => p.trim())
          return {
            date: parts[0] || '',
            route: parts[1] || '',
            status: parts[2] || '',
            price: parts[3] || '',
            deposit: parts[4] || '',
            promo: parts[5] === 'promo' || parts[5] === 'true'
          }
        })
        if (parsedEntries.length) return parsedEntries
      }

      // Final fallback to in-file samples
      return fallbackSampleDates[monthKey] || []
    }

  // Helper function to calculate date range
  const calculateDateRange = (startDate: Date, durationDays: number = 8) => {
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + durationDays - 1)
    
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const startMonth = monthNames[startDate.getMonth()]
    const startDay = startDate.getDate()
    const endDay = endDate.getDate()
    const year = startDate.getFullYear()
    
    return `${startMonth} ${startDay}-${endDay}, ${year}`
  }

  // Generate 5 sample dates based on selected month
  const generateSampleDates = (monthKey: string, durationDays: number = 8) => {
    const [yearStr, monthStr] = monthKey.split('-')
    const year = parseInt(yearStr)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = monthNames.indexOf(monthStr)
    
    if (monthIndex === -1) return []
    
    const dates = []
    for (let i = 0; i < 5; i++) {
      const startDate = new Date(year, monthIndex, 5 + (i * 7))
      dates.push({
        startDate,
        dateRange: calculateDateRange(startDate, durationDays)
      })
    }
    return dates
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

  // On mount, set sensible defaults:
  // - show the current month by default in the "When" selector
  // - select the current route as the default itinerary for filtering
  useEffect(() => {
    // Smart default month picker: pick the next month (from now) that has translated entries
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

    // default itinerary: leave empty so we show all available routes by default
    setSelectedItineraries((prev) => {
      if (!prev || prev.length === 0) return []
      return prev
    })
  }, [])

  // Handle scroll to determine active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height
      
      // Check each section from bottom to top for accurate detection
      if (accommodationRef.current) {
        const top = accommodationRef.current.offsetTop - 100;
        const bottom = top + accommodationRef.current.offsetHeight;
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection('accommodation');
          return;
        }
      }
      
      if (inclusionsRef.current) {
        const top = inclusionsRef.current.offsetTop - 100;
        const bottom = top + inclusionsRef.current.offsetHeight;
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection('inclusions');
          return;
        }
      }
      
      if (datesPricesRef.current) {
        const top = datesPricesRef.current.offsetTop - 100;
        const bottom = top + datesPricesRef.current.offsetHeight;
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection('datesPrices');
          return;
        }
      }
      
      // Default to empty if not in any section
      setActiveSection('');
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Mobile bottom padding to account for fixed bottom navbar */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>
      {/* Hero Section - With image background */}
      <section className="relative h-[450px] md:h-[500px] overflow-visible">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/kilimanjaro-marangu.jpg" 
            alt="Kilimanjaro Marangu Route" 
            fill
            className="object-cover"
            priority />
        </div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Square card positioned at bottom border - hidden in mobile, positioned on desktop */}
        <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[700px] translate-y-[50%] bg-gradient-to-r from-[#008576]/40 to-[#00968A]/40 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-30" style={{height: 'auto'}}>
          <div className="p-6">
            <h1 className="text-xl font-serif font-semibold mb-3 text-white">
              {t('hero.title')}
            </h1>
            
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg text-white">{t('hero.breadcrumb')}</span>
            </div>
            
            <div className="flex items-center mb-3">
              <Clock className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg font-bold text-white">{t('hero.duration')}</span>
            </div>
            
            <p className="text-white text-base leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for floating card on desktop */}
      <div className="hidden md:block" style={{height: '140px'}}></div>

      {/* Square Card Section - Separate in mobile view with wavy intersection */}
      <div className="w-full px-0 md:hidden -mt-1">
        <div className="w-full bg-gradient-to-r from-[#008576]/40 to-[#00968A]/40 backdrop-blur-sm shadow-xl overflow-hidden relative" style={{height: '350px'}}>
          {/* Wavy separator */}
          <div className="absolute -top-6 left-0 right-0 h-6 overflow-hidden">
            <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
              <path fill="#000000" fillOpacity="0.5" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
          <div className="p-4 pt-10">
            <h1 className="text-xl font-serif font-semibold mb-4 text-white">
              {t('hero.title')}
            </h1>
            
            <div className="flex items-center mb-3">
              <MapPin className="mr-2 h-5 w-5 text-white" />
              <span className="text-2xl text-white">{t('hero.breadcrumb')}</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-white" />
              <span className="text-xl text-white">{t('hero.duration')}</span>
            </div>
            
            <p className="text-white mb-4 text-xl">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Desktop View Only - Positioned below floating card */}
      <div className="hidden md:block bg-white py-4 sticky z-30 border-b border-gray-200 shadow-sm" style={{top: '64px'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-[#00A896] font-bold text-xl bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent pr-4 border-r border-gray-300">
                {t('hero.price')}
              </span>
              <button 
                className={`font-medium px-4 py-2 border-2 rounded-lg flex items-center transition-all duration-300 text-base ${
                  activeSection === 'datesPrices' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(datesPricesRef)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {t('miniNavbar.datesAndPrices')}
              </button>
              <button 
                className={`font-medium px-4 py-2 border-2 rounded-lg flex items-center transition-all duration-300 text-base ${
                  activeSection === 'datesPrices' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setIsInquiryFormOpen(true)}
              >
                <User className="mr-2 h-4 w-4" />
                {t('miniNavbar.proposeDate')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white border-2 border-green-600 shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                {t('miniNavbar.details')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white border-2 border-green-600 shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                {t('miniNavbar.inclusions')}
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'accommodation' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(accommodationRef)}
              >
                {t('miniNavbar.accommodation')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Mobile View Only */}
  <div className="md:hidden bg-white py-6 sticky top-0 z-40 border-b border-gray-200">
        <div className="flex justify-center px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => scrollToSection(datesPricesRef)}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('miniNavbar.datesAndPrices')}
            </button>
            <button className="text-gray-600 font-medium hover:text-gray-800 px-4 py-2 border-2 border-gray-300 rounded-lg flex items-center text-lg" onClick={() => setIsInquiryFormOpen(true)}>
              <User className="mr-2 h-4 w-4" />
              {t('miniNavbar.proposeDate')}
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Itinerary Section */}
      <section className="py-5 mt-0 md:mt-0">
        <div className="container mx-auto px-0">
          
          {/* Detailed Itinerary Title - Only on left side below mini navbar */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              {t('detailedItineraryTitle')}
            </h2>
          </div>
          
          <div className="w-full mt-12">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              
              {/* Day 0 - Details first, then image for both desktop and mobile */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day0.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day0.location')}
                    </p>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day0.description')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/arrival.jpg" alt="Vol de retour depuis l'Aéroport du Kilimandjaro" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 1 - Details first, then image for both desktop and mobile (desktop alternates) */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day1.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day1.description')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.altitude')}:</strong> {t('itinerary.day1.altitude')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.distanceDuration')}:</strong> {t('itinerary.day1.distanceDuration')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/gate.jpg" alt="Arrivée à l'Aéroport du Kilimandjaro" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 - Details first, then image for both desktop and mobile */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day2.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day2.description')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.altitude')}:</strong> {t('itinerary.day2.altitude')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.distanceDuration')}:</strong> {t('itinerary.day2.distanceDuration')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/mandara.jpg" alt="Landes et Montées" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 - Details first, then image for both desktop and mobile (desktop alternates) */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day3.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day3.description')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.altitude')}:</strong> {t('itinerary.day3.altitude')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.distanceDuration')}:</strong> {t('itinerary.day3.distanceDuration')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/kibo.png" alt="Désert Alpin" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4 - Details first, then image for both desktop and mobile */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day4.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day4.description')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.altitude')}:</strong> {t('itinerary.day4.altitude')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.distanceDuration')}:</strong> {t('itinerary.day4.distanceDuration')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/kilele.jpg" alt="Assaut du Sommet" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 5 - Details first, then image for both desktop and mobile (desktop alternates) */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile, right on desktop */}
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day5.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day5.description')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.altitude')}:</strong> {t('itinerary.day5.altitude')}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>{t('itinerary.distanceDuration')}:</strong> {t('itinerary.day5.distanceDuration')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile, left on desktop */}
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/marangu-forest.jpg" alt="Descente vers Horombo Hut" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 6 - Details first, then image for both desktop and mobile */}
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Details - Always first on mobile and desktop */}
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day6.title')}
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      {t('itinerary.day6.description')}
                    </p>
                  </div>
                  {/* Image - Always second on mobile and desktop */}
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/bye.jpg" alt="Descente finale vers la Porte Marangu" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section ref={inclusionsRef} className="py-16">
        <div className="container mx-auto px-0">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            {t('inclusions.title')}
          </h2>
          
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Price Includes - Full width on mobile */}
                <div className="border-r-0 md:border-r border-gray-200 pr-0 md:pr-8 pb-8 md:pb-0">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('inclusions.priceIncludes')}</h3>
                  <ul className="space-y-3">
                    {displayedInclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 h-5 w-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                  {allInclusions.length > 10 && (
                    <button 
                      onClick={() => setShowAllInclusions(!showAllInclusions)}
                      className="mt-6 text-[#00A896] hover:text-[#008576] font-medium flex items-center"
                    >
                      {showAllInclusions ? t('inclusions.seeFewer') : t('inclusions.seeMore')}
                      <svg className={`ml-1 h-4 w-4 transform ${showAllInclusions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllInclusions ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Price Does Not Include - Full width on mobile */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t('inclusions.priceDoesNotInclude')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.visa')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.airfares')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.transfers')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.insurance')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.tips')}</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{t('inclusions.exclusions.singleSupplement')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section ref={accommodationRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-center mb-8">
            <Bed className="mr-2 h-6 w-6 text-gray-800" />
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              {t('accommodation.title')}
            </h2>
          </div>
          
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  <Image src="/images/lala.jpg" alt="Marangu Huts Exterior" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t('accommodation.huts.title')}</h3>
                  <p className="text-gray-500 mb-6 text-lg md:text-xl">
                    {t('accommodation.huts.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates & Prices Section */}
      <section ref={datesPricesRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
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
                  <h3 className="font-semibold text-gray-900 text-base">Don't see your dates?</h3>
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
                  <span className="font-semibold">{selectedMonths.length > 0 ? selectedMonths[0].replace('-', ' ') : 'January 2026'}</span>
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
            
            {/* Route Selector - Shows only this route */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsGroupDropdownOpen(!isGroupDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Route</span>
                  <span className="font-semibold">{selectedItineraries.length} Selected</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isGroupDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isGroupDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedItineraries.includes('lemosho')} 
                      onChange={() => {
                        if (selectedItineraries.includes('lemosho')) {
                          setSelectedItineraries(selectedItineraries.filter(s => s !== 'lemosho'));
                        } else {
                          setSelectedItineraries([...selectedItineraries, 'lemosho']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-base text-gray-800">Lemosho Route - 7/8 Days</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedItineraries.includes('machame')} 
                      onChange={() => {
                        if (selectedItineraries.includes('machame')) {
                          setSelectedItineraries(selectedItineraries.filter(s => s !== 'machame'));
                        } else {
                          setSelectedItineraries([...selectedItineraries, 'machame']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-base text-gray-800">Machame Route - 6/7 Days</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedItineraries.includes('marangu')} 
                      onChange={() => {
                        if (selectedItineraries.includes('marangu')) {
                          setSelectedItineraries(selectedItineraries.filter(s => s !== 'marangu'));
                        } else {
                          setSelectedItineraries([...selectedItineraries, 'marangu']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-base text-gray-800">Marangu Route - 5/6 Days</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedItineraries.includes('umbwe')} 
                      onChange={() => {
                        if (selectedItineraries.includes('umbwe')) {
                          setSelectedItineraries(selectedItineraries.filter(s => s !== 'umbwe'));
                        } else {
                          setSelectedItineraries([...selectedItineraries, 'umbwe']);
                        }
                      }} 
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-base text-gray-800">Umbwe Route - 6/7 Days</span>
                  </label>
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
            {selectedItineraries.includes('marangu') && generateSampleDates(selectedMonths[0] || '2026-Jan', 8).map((dateInfo, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 text-base">Marangu Route - 5/6 Days</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{dateInfo.dateRange}</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-600">The "Coca-Cola" route with hut accommodation</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="text-right">
                      <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">€1,800</span></div>
                      <div className="text-sm text-gray-500">Deposit €100</div>
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
            ))}
          </div>
          
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don't see your dates?</h3>
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
                  <label htmlFor="name" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.name')}
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
                  <label htmlFor="email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.email')}
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
                  <label htmlFor="phone" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('contactModal.phonePlaceholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('contactModal.message')}
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
                  <label htmlFor="privacy-policy" className="ml-2 block text-lg md:text-xl text-gray-700">
                    {t('contactModal.agreeTo')} <a href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('contactModal.privacyPolicy')}</a>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {t('contactModal.sendRequest')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {isInquiryFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsInquiryFormOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{t('inquiryForm.title')}</h2>
                <button 
                  onClick={() => setIsInquiryFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-500 mb-6 text-lg md:text-xl">
                {t('inquiryForm.description')}
              </p>
              
              {/* Inquiry Form */}
              <form onSubmit={(e) => {
                e.preventDefault()
                // Form submission logic would go here
                setIsInquiryFormOpen(false)
              }} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('inquiryForm.yourName')}
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('inquiryForm.enterYourName')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('inquiryForm.yourEmail')}
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder={t('inquiryForm.enterYourEmail')}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-travellers" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('inquiryForm.noOfTravellers')}
                  </label>
                  <select
                    id="inquiry-travellers"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  >
                    <option value="">{t('inquiryForm.selectNumber')}</option>
                    {[4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? t('inquiryForm.traveller') : t('inquiryForm.travellers')}</option>
                    ))}
                    <option value="10+">{t('inquiryForm.tenPlusTravellers')}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="inquiry-dates" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('inquiryForm.whenTravel')}
                  </label>
                  <select
                    id="inquiry-dates"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  >
                    <option value="">{t('inquiryForm.selectNumber')}</option>
                    <option value="January 2025">{t('inquiryForm.jan2025')}</option>
                    <option value="February 2025">{t('inquiryForm.feb2025')}</option>
                    <option value="March 2025">{t('inquiryForm.mar2025')}</option>
                    <option value="April 2025">{t('inquiryForm.apr2025')}</option>
                    <option value="May 2025">{t('inquiryForm.may2025')}</option>
                    <option value="June 2025">{t('inquiryForm.jun2025')}</option>
                    <option value="July 2025">{t('inquiryForm.jul2025')}</option>
                    <option value="August 2025">{t('inquiryForm.aug2025')}</option>
                    <option value="September 2025">{t('inquiryForm.sep2025')}</option>
                    <option value="October 2025">{t('inquiryForm.oct2025')}</option>
                    <option value="November 2025">{t('inquiryForm.nov2025')}</option>
                    <option value="December 2025">{t('inquiryForm.dec2025')}</option>
                    <option value="January 2026">{t('inquiryForm.jan2026')}</option>
                    <option value="February 2026">{t('inquiryForm.feb2026')}</option>
                    <option value="March 2026">{t('inquiryForm.mar2026')}</option>
                    <option value="April 2026">{t('inquiryForm.apr2026')}</option>
                    <option value="May 2026">{t('inquiryForm.may2026')}</option>
                    <option value="June 2026">{t('inquiryForm.jun2026')}</option>
                    <option value="July 2026">{t('inquiryForm.jul2026')}</option>
                    <option value="August 2026">{t('inquiryForm.aug2026')}</option>
                    <option value="September 2026">{t('inquiryForm.sep2026')}</option>
                    <option value="October 2026">{t('inquiryForm.oct2026')}</option>
                    <option value="November 2026">{t('inquiryForm.nov2026')}</option>
                    <option value="December 2026">{t('inquiryForm.dec2026')}</option>
                    <option value="January 2027">{t('inquiryForm.jan2027')}</option>
                    <option value="February 2027">{t('inquiryForm.feb2027')}</option>
                    <option value="March 2027">{t('inquiryForm.mar2027')}</option>
                    <option value="April 2027">{t('inquiryForm.apr2027')}</option>
                    <option value="May 2027">{t('inquiryForm.may2027')}</option>
                    <option value="June 2027">{t('inquiryForm.jun2027')}</option>
                    <option value="July 2027">{t('inquiryForm.jul2027')}</option>
                    <option value="August 2027">{t('inquiryForm.aug2027')}</option>
                    <option value="September 2027">{t('inquiryForm.sep2027')}</option>
                    <option value="October 2027">{t('inquiryForm.oct2027')}</option>
                    <option value="November 2027">{t('inquiryForm.nov2027')}</option>
                    <option value="December 2027">{t('inquiryForm.dec2027')}</option>
                  </select>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {t('contactModal.go')}
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
              
              <p className="text-gray-600 mb-6 text-lg md:text-xl">
                {t('downloadModal.description')}
              </p>
              
              {/* Download Form */}
              <form onSubmit={(e) => {
                e.preventDefault()
                // Download logic would go here
                setIsDownloadModalOpen(false)
              }} className="space-y-4">
                <div>
                  <label htmlFor="download-name" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('downloadModal.name')}
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
                  <label htmlFor="download-email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    {t('downloadModal.email')}
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
                  <label htmlFor="download-privacy-policy" className="ml-2 block text-lg md:text-xl text-gray-700">
                    {t('downloadModal.agreeTo')} <a href="/privacy" className="text-[#00A896] hover:text-[#008576]">{t('downloadModal.privacyPolicy')}</a>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    {t('downloadModal.download')}
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