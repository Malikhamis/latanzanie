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
  const [selectedMonths, setSelectedMonths] = useState<string[]>([])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>([])
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [showEarlierDates, setShowEarlierDates] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showAllInclusions, setShowAllInclusions] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('MaranguRoutePage')
  // Safe translation accessor that returns a fallback string when the key is missing
  const safeT = (key: string, fallback = ''): string => {
    try {
      const maybe = t(key) as unknown
      if (typeof maybe === 'string') return maybe
      return fallback
    } catch (e) {
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
        { date: 'Feb 4, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from USD3,350', deposit: 'Deposit USD250' },
        { date: 'Feb 14, 2026', route: '7 Day - Lemosho Route', status: 'Open for bookings', price: 'from USD3,050', deposit: 'Deposit USD250' },
        { date: 'Feb 17, 2026', route: '8 Day - Lemosho Route', status: 'Few spaces left', price: 'from USD3,350', deposit: 'Deposit USD250' },
        { date: 'Feb 25, 2026', route: '8 Day - Lemosho Route • Full Moon', status: 'Few spaces left', price: 'from USD3,350', deposit: 'Deposit USD250', promo: true }
      ],
      '2026-Mar': [
        { date: 'Mar 3, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from USD3,350', deposit: 'Deposit USD250' },
        { date: 'Mar 10, 2026', route: '7 Day - Lemosho Route', status: 'Open for bookings', price: 'from USD3,050', deposit: 'Deposit USD250' },
        { date: 'Mar 17, 2026', route: '8 Day - Lemosho Route', status: 'Open for bookings', price: 'from USD3,350', deposit: 'Deposit USD250' },
        { date: 'Mar 27, 2026', route: '8 Day - Lemosho Route • Full Moon', status: 'Open for bookings', price: 'from USD3,350', deposit: 'Deposit USD250' }
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
            priority
            unoptimized
          />
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
              
              {/* Map Image - Full width */}
              <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                <Image src="/images/marangu-route-map.jpg" alt="Carte de la Route Marangu" fill className="object-cover" />
              </div>
              
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
                      <Image src="/images/moshi.jpg" alt="Descente finale vers la Porte Marangu" fill className="object-cover" />
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
      <section ref={datesPricesRef} className="py-16 bg-gradient-to-br from-[#F0FCF9] via-[#E8F8F5] to-[#DDF5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent">
            {t('datesAndPrices.title')}
          </h2>
          
          <div className="w-full md:max-w-5xl md:mx-auto">
            {/* Top Cards - Group Discounts & Propose Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#B8EDE3] rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#4DC5B5] to-[#00A896] rounded-xl mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('datesAndPrices.groupDiscounts')}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t('datesAndPrices.dontSeeDates')}</p>
                <button 
                  onClick={() => setIsInquiryFormOpen(true)}
                  className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                >
                  {t('datesAndPrices.enquireButton')}
                </button>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border-2 border-[#B8EDE3] rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-[#4DC5B5] to-[#00A896] rounded-xl mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{t('datesAndPrices.proposeNewDate')}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{t('datesAndPrices.proposeDateDescription')}</p>
                <button 
                  onClick={() => setIsInquiryFormOpen(true)}
                  className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full"
                >
                  {t('datesAndPrices.proposeDateButton')}
                </button>
              </div>
            </div>
            
            {/* Bottom Section - When & Group Options */}
            <div className="w-full md:max-w-4xl md:mx-auto bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 overflow-hidden px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* When Section - Left (wider) */}
          <div className="p-8 md:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <Calendar className="mr-2 h-6 w-6 text-[#00A896]" />
                      {t('datesAndPrices.when')}
                    </h3>
                    <span className="bg-gradient-to-r from-[#E8F8F5] to-[#D0F0E8] text-[#008576] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                      {selectedMonths.length} {t('datesAndPrices.selected')}
                    </span>
                  </div>
                  <div className="mb-6">
                    <button 
                      onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-[#00A896] bg-white text-left flex justify-between items-center hover:border-[#72D9C4] transition-colors"
                    >
                      <span className="font-medium text-gray-700">{selectedMonths.length > 0 ? `${selectedMonths.length} ${t('datesAndPrices.selected')}` : t('datesAndPrices.selectMonth')}</span>
                      <svg className={`transform transition-transform ${isWhenDropdownOpen ? 'rotate-180' : ''} fill-current h-5 w-5 text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </button>
                    
                    {isWhenDropdownOpen && (
                      <div className="border-2 border-[#B8EDE3] rounded-xl mt-3 p-6 max-h-72 overflow-y-auto bg-gradient-to-br from-white to-[#E8F8F5] shadow-lg">
                        <div className="grid grid-cols-3 gap-3">
                          <div className="font-bold text-gray-900 col-span-3 mb-2 text-lg">2025</div>
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                            const monthKey = `2025-${month}`;
                            const isSelected = selectedMonths.includes(monthKey);
                            const translatedMonth = safeT(`months.${month}`, month);
                            return (
                              <button 
                                key={monthKey} 
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedMonths(selectedMonths.filter(m => m !== monthKey));
                                  } else {
                                    setSelectedMonths([...selectedMonths, monthKey]);
                                  }
                                }}
                                className={`font-semibold py-3 px-2 rounded-lg transition-all duration-200 text-sm ${
                                  isSelected 
                                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white shadow-md transform scale-105' 
                                    : 'bg-white hover:bg-[#E8F8F5] text-gray-700 border border-gray-200 hover:border-[#B8EDE3]'
                                }`}
                              >
                                {translatedMonth}
                              </button>
                            );
                          })}
                          <div className="font-bold text-gray-900 col-span-3 mt-4 mb-2 text-lg">2026</div>
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                            const monthKey = `2026-${month}`;
                            const isSelected = selectedMonths.includes(monthKey);
                            const translatedMonth = safeT(`months.${month}`, month);
                            return (
                              <button 
                                key={monthKey} 
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedMonths(selectedMonths.filter(m => m !== monthKey));
                                  } else {
                                    setSelectedMonths([...selectedMonths, monthKey]);
                                  }
                                }}
                                className={`font-semibold py-3 px-2 rounded-lg transition-all duration-200 text-sm ${
                                  isSelected 
                                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white shadow-md transform scale-105' 
                                    : 'bg-white hover:bg-[#E8F8F5] text-gray-700 border border-gray-200 hover:border-[#B8EDE3]'
                                }`}
                              >
                                {translatedMonth}
                              </button>
                            );
                          })}
                          <div className="font-bold text-gray-900 col-span-3 mt-4 mb-2 text-lg">2027</div>
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                            const monthKey = `2027-${month}`;
                            const isSelected = selectedMonths.includes(monthKey);
                            const translatedMonth = safeT(`months.${month}`, month);
                            return (
                              <button 
                                key={monthKey} 
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedMonths(selectedMonths.filter(m => m !== monthKey));
                                  } else {
                                    setSelectedMonths([...selectedMonths, monthKey]);
                                  }
                                }}
                                className={`font-semibold py-3 px-2 rounded-lg transition-all duration-200 text-sm ${
                                  isSelected 
                                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white shadow-md transform scale-105' 
                                    : 'bg-white hover:bg-[#E8F8F5] text-gray-700 border border-gray-200 hover:border-[#B8EDE3]'
                                }`}
                              >
                                {translatedMonth}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Display selected months (grouped by month) */}
                  {selectedMonths.length > 0 && (
                    <div className="pt-6 border-t-2 border-gray-200 bg-gradient-to-br from-[#E8F8F5] to-[#D0F0E8] rounded-xl p-6 mt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <h4 className="text-xl font-bold text-gray-900">{selectedMonths.length > 1 ? `${selectedMonths.length} ${t('datesAndPrices.selected')}` : t('datesAndPrices.when')}</h4>
                        </div>
                        <button onClick={() => setShowEarlierDates(!showEarlierDates)} className="text-sm text-gray-600 underline">
                          {showEarlierDates ? safeT('datesAndPrices.showEarlierHidden', 'Hide earlier dates') : safeT('datesAndPrices.showEarlier', 'Show earlier dates')}
                        </button>
                      </div>

                      {/* Data for months - small local map to render sample cards matching design */}
                      {selectedMonths.map((monthKey) => {
                        // monthKey format: '2026-Feb'
                        const [year, month] = monthKey.split('-')
                        const heading = `${month} ${year}`

                        // Read translated dates for this month (supports JSON string or delimited string), falls back to sample data
                        const rawList = getDatesForMonth(monthKey)
                        // If the user has selected itineraries, filter the list to those routes (default includes current route)
                        const list = (rawList || []).filter((item) => {
                          if (!selectedItineraries || selectedItineraries.length === 0) return true
                          return selectedItineraries.some(si => {
                            try {
                              return item.route && item.route.toLowerCase().includes(si.toLowerCase())
                            } catch (e) {
                              return false
                            }
                          })
                        })

                        return (
                          <div key={monthKey} className="mb-6">
                            <h5 className="text-2xl font-bold mb-4">{heading}</h5>
                                <div className="space-y-4">
                                  {list.length > 0 ? (
                                    list.map((item, idx) => (
                                      <div key={idx} className={`w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${item.promo ? 'border-pink-300' : 'border-[#E8F8F5]'}`}>
                                        {item.promo && (
                                          <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-t-2xl text-center">Save $150pp on all trips booked before 30th November — Quote "WONDERLAND" to your Destination Expert. exclusions apply</div>
                                        )}
                                          <div className="p-3 md:p-5 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 w-full">
                                            <div className="flex items-start gap-3 w-full md:w-1/3">
                                              <div className="rounded-md border border-gray-200 p-2 md:p-3 text-gray-700 bg-white flex-shrink-0">
                                                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                                              </div>
                                              <div>
                                                <div className="text-lg md:text-xl font-semibold leading-tight text-gray-900">{item.date}</div>
                                                <div className="text-sm md:text-sm text-gray-500 mt-1">{item.route}</div>
                                              </div>
                                            </div>

                                            <div className="md:flex-1 mt-2 md:mt-0 md:px-6 flex flex-col md:flex-row md:items-center md:justify-start gap-1 w-full">
                                              <div className={`text-sm md:text-sm font-semibold ${item.status && item.status.includes('Open') ? 'text-green-500' : 'text-orange-500'}`}>{item.status}</div>
                                              <div className="text-sm md:text-sm text-gray-500">{item.price} <span className="mx-2">|</span> {item.deposit}</div>
                                            </div>

                                            <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3">
                                              <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-[12px] shadow-sm w-full md:w-auto text-base font-semibold">{t('datesAndPrices.enquireButton')}</button>
                                              <button className="text-gray-400 p-2 md:hidden" aria-label="expand">▾</button>
                                              <button className="text-gray-400 p-2 hidden md:block" aria-label="expand">▾</button>
                                            </div>
                                          </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center">
                                      <p className="text-gray-700 text-lg mb-4">{safeT('datesAndPrices.noDeparturesMessage', 'No departures for this itinerary in the selected month.')}</p>
                                      <button onClick={() => setIsContactModalOpen(true)} className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white font-semibold py-2 px-6 rounded-lg">{safeT('datesAndPrices.contactUsCTA', 'Contact us to request alternate dates')}</button>
                                    </div>
                                  )}
                                </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
                
                {/* Group Joining Options - Right (sidebar) */}
                <div className="p-8 md:col-span-1">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                      <Users className="mr-2 h-6 w-6 text-[#00A896]" />
                      {t('datesAndPrices.groupOptions')}
                    </h3>
                    <span className="bg-gradient-to-r from-[#E8F8F5] to-[#D0F0E8] text-[#008576] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                      {selectedItineraries.length} {t('datesAndPrices.selected')}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <button 
                      onClick={() => setIsItineraryDropdownOpen(!isItineraryDropdownOpen)}
                      className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-[#00A896] bg-white text-left flex justify-between items-center hover:border-[#72D9C4] transition-colors mb-4"
                    >
                      <span className="font-medium text-gray-700">{selectedItineraries.length > 0 ? `${selectedItineraries.length} ${t('datesAndPrices.selected')}` : t('datesAndPrices.selectGroup')}</span>
                      <svg className={`transform transition-transform ${isItineraryDropdownOpen ? 'rotate-180' : ''} fill-current h-5 w-5 text-gray-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </button>
                    
                    {isItineraryDropdownOpen && (
                      <div className="border-2 border-[#B8EDE3] rounded-xl p-6 bg-gradient-to-br from-white to-[#E8F8F5] shadow-lg space-y-3">
                        {[safeT('datesAndPrices.soloTraveler', 'Solo Traveler'), safeT('datesAndPrices.couple', 'Couple'), safeT('datesAndPrices.familyGroup', 'Family Group'), safeT('datesAndPrices.friendsGroup', 'Friends Group'), safeT('datesAndPrices.corporateGroup', 'Corporate Group')].map((groupOption) => {
                          const isSelected = selectedItineraries.includes(groupOption);
                          return (
                            <div key={groupOption} className="flex items-center p-3 rounded-lg hover:bg-white/80 transition-colors">
                              <input
                                type="checkbox"
                                id={groupOption}
                                checked={isSelected}
                                onChange={() => {
                                  if (isSelected) {
                                    setSelectedItineraries(selectedItineraries.filter(i => i !== groupOption));
                                  } else {
                                    setSelectedItineraries([...selectedItineraries, groupOption]);
                                  }
                                }}
                                className="h-5 w-5 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded cursor-pointer"
                              />
                              <label htmlFor={groupOption} className="ml-3 block text-gray-800 font-medium text-base cursor-pointer">
                                {groupOption}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-0">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            {t('gallery.title')}
          </h2>
          
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/marangu-route-overview.jpg" alt="Marangu Route Gallery Image 1" fill className="object-cover" />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Marangu Route Gallery Image 2" fill className="object-cover" />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-day0.jpg" alt="Marangu Route Gallery Image 3" fill className="object-cover" />
              </div>
              <div className="col-span-2 md:col-span-1 relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image src="/images/kilimanjaro-marangu.jpg" alt="Marangu Route Gallery Image 4" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">{t('faqs.title')}</h2>
          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
              { question: "Comment on sėche ses affaires s'il pleut ?", answer: "Utilisez des sacs étanches et des sacs zip pour isoler le linge mouillé. Au camp, étendez vos affaires sur une corde (l'équipe aide souvent) et changez rapidement en couches sèches. Privilégiez les tissus à séchage rapide." }
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
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
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