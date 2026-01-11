'use client'

import { useState, useRef, useEffect } from 'react'
import NewsletterForm from '../NewsletterForm';
import { Clock, MapPin, Calendar, User, CheckCircle, XCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function ZanzibarDivingCulture5DaysPage() {
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showAllInclusions, setShowAllInclusions] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['zanzibar-diving-culture-5-days'])
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isRouteDropdownOpen, setIsRouteDropdownOpen] = useState(false)
  
  const inclusionsRef = useRef<HTMLElement>(null)
  const datesPricesRef = useRef<HTMLElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)
  const monthDropdownRef = useRef<HTMLDivElement>(null)
  
  const t = useTranslations('ZanzibarDivingCulture5Days')

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

  // Generate sample dates (5 dates per package)
  const generateSampleDates = (selectedMonth: string) => {
    const [yearStr, monthStr] = selectedMonth.split('-');
    const year = parseInt(yearStr);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = monthNames.indexOf(monthStr);
    
    if (monthIndex === -1) return [];
    
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const departureDate = new Date(year, monthIndex, 5 + (i * 7));
      dates.push({
        startDate: departureDate,
        dateRange: calculateDateRange(departureDate, 5)
      });
    }
    return dates;
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const allInclusions = t('inclusions.items').split('|||').map(s => s.trim()).filter(Boolean)
  const displayedInclusions = showAllInclusions ? allInclusions : allInclusions.slice(0, 8)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      if (datesPricesRef.current) {
        const top = datesPricesRef.current.offsetTop - 100
        const bottom = top + datesPricesRef.current.offsetHeight
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection('datesPrices')
          return
        }
      }

      if (inclusionsRef.current) {
        const top = inclusionsRef.current.offsetTop - 100
        const bottom = top + inclusionsRef.current.offsetHeight
        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection('inclusions')
          return
        }
      }

      setActiveSection('')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white w-full">
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] overflow-visible">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/zanzibar-diving.jpg" 
            alt="Zanzibar Diving & Culture" 
            fill
            className="object-cover"
            priority />
        </div>
        
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
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

      <div className="hidden md:block" style={{height: '140px'}}></div>

      {/* Mobile Hero Card */}
      <div className="w-full px-0 md:hidden -mt-1">
        <div className="w-full bg-gradient-to-r from-[#008576]/40 to-[#00968A]/40 backdrop-blur-sm shadow-xl overflow-hidden relative" style={{height: '350px'}}>
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

      {/* Mini Navbar - Desktop */}
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
                {t('miniNavbar.inclusions')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Mobile */}
      <div className="md:hidden bg-white py-4 sticky top-0 z-40 border-b border-gray-200">
        <div className="px-4">
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-[#f8d7da] text-[#721c24] font-medium hover:bg-[#f1b0b7] px-4 py-2 border border-[#f5c6cb] rounded-lg flex items-center justify-center text-sm" onClick={() => scrollToSection(datesPricesRef)}>
              <Calendar className="mr-2 h-4 w-4" />
              {t('miniNavbar.datesAndPrices')}
            </button>
            <button className="bg-[#00A896] text-white font-medium hover:bg-[#008576] px-4 py-2 border border-[#00A896] rounded-lg flex items-center justify-center text-sm" onClick={() => setIsInquiryFormOpen(true)}>
              <User className="mr-2 h-4 w-4" />
              {t('miniNavbar.proposeDate')}
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Itinerary */}
      <section className="py-5 mt-0 md:mt-0">
        <div className="container mx-auto px-0">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              {t('detailedItineraryTitle')}
            </h2>
          </div>
          
          <div className="w-full mt-12">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              
              {/* Day 1 */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day1.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day1.description')}
                    </p>
                  </div>
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/znz1.jpg" alt="Day 1" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/znz2.jpg" alt="Day 2" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day2.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day3.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day3.description')}
                    </p>
                  </div>
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/znz3.jpg" alt="Day 3" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 4 */}
              <div className="mb-12 pb-8 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/znz4.jpg" alt="Day 4" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day4.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day4.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Day 5 */}
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('itinerary.day5.title')}
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      {t('itinerary.day5.description')}
                    </p>
                  </div>
                  <div className="order-2">
                    <div className="relative w-full h-96 rounded-xl overflow-hidden">
                      <Image src="/images/znz5.jpg" alt="Day 5" fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section ref={inclusionsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t('inclusions.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                <CheckCircle className="mr-2" />
                {t('inclusions.priceIncludes')}
              </h3>
              <ul className="space-y-2">
                {displayedInclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              {allInclusions.length > 8 && (
                <button
                  onClick={() => setShowAllInclusions(!showAllInclusions)}
                  className="mt-4 text-[#00A896] hover:text-[#008576] font-semibold"
                >
                  {showAllInclusions ? t('inclusions.seeFewer') : t('inclusions.seeMore')}
                </button>
              )}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <XCircle className="mr-2" />
                {t('inclusions.priceDoesNotInclude')}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('inclusions.exclusions.visa')}</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('inclusions.exclusions.airfares')}</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('inclusions.exclusions.personalExpenses')}</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="mr-2 h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{t('inclusions.exclusions.tips')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dates & Prices - Full Booking Section */}
      <section ref={datesPricesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Book your trip
          </h2>
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div className="text-2xl">💰</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Group Discounts</h3>
                <p className="text-sm text-gray-600">Enquire for more details</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Don&apos;t see your dates?</h3>
                <p className="text-sm text-gray-600">Please propose a new departure</p>
              </div>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* When Dropdown */}
            <div className="relative flex-1" ref={monthDropdownRef}>
              <button
                onClick={() => setIsWhenDropdownOpen(!isWhenDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">
                  <span className="text-gray-500 mr-2">When</span>
                  <span className="font-medium">{selectedMonths[0]?.replace('-', ' ') || '2026 Jan'}</span>
                </span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isWhenDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isWhenDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">2026</h4>
                      <div className="grid grid-cols-3 gap-2">
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
                              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
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
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">2027</h4>
                      <div className="grid grid-cols-3 gap-2">
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
                              className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
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
                </div>
              )}
            </div>
            
            {/* Route Dropdown */}
            <div className="relative flex-1">
              <button
                onClick={() => setIsRouteDropdownOpen(!isRouteDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">
                  <span className="text-gray-500 mr-2">Route</span>
                  <span className="font-medium">1 Selected</span>
                </span>
                <svg className={`w-5 h-5 text-gray-400 transition-transform ${isRouteDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isRouteDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedItineraries.includes('zanzibar-diving-culture-5-days')}
                      onChange={() => {
                        if (selectedItineraries.includes('zanzibar-diving-culture-5-days')) {
                          setSelectedItineraries([]);
                        } else {
                          setSelectedItineraries(['zanzibar-diving-culture-5-days']);
                        }
                      }}
                      className="w-4 h-4 text-[#00A896] rounded"
                    />
                    <span className="text-sm text-gray-800">Zanzibar Diving & Culture - 5 Days</span>
                  </label>
                </div>
              )}
            </div>
          </div>
          
          {/* Show earlier dates link */}
          <div className="mb-6">
            <button className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-1">
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
            {generateSampleDates(selectedMonths[0] || '2026-Jan').map((dateInfo, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 text-base">Zanzibar Diving & Culture - 5 Days</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{dateInfo.dateRange}</span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-600">Diving and cultural exploration</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="text-right">
                      <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">€850</span></div>
                      <div className="text-sm text-gray-500">Deposit €100</div>
                    </div>
                    <button
                      onClick={() => setIsInquiryFormOpen(true)}
                      className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-md text-base font-medium transition-colors whitespace-nowrap"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Removed the show more/less functionality since we're now showing all dates */}
          
          {/* Don't see your dates section */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <div className="inline-block p-3 bg-gray-50 rounded-full mb-4">
              <Calendar className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don&apos;t see your dates?</h3>
            <p className="text-gray-600 text-base mb-6">We can create it if bookable!</p>
            <button
              onClick={() => setIsInquiryFormOpen(true)}
              className="bg-[#00A896] hover:bg-[#008576] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Propose Dates
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/zanzibar-beach.jpg" 
            alt="Zanzibar Beach" 
            fill
            className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">{t('newsletter.title')}</h2>
          <h3 className="text-2xl font-bold mb-6">{t('newsletter.subtitle')}</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {t('newsletter.description')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <NewsletterForm t={t} />
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      {isInquiryFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsInquiryFormOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full z-10 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
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
              
              <form onSubmit={(e) => {
                e.preventDefault()
                setIsInquiryFormOpen(false)
              }} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiryForm.name')}
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiryForm.email')}
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-date" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiryForm.date')}
                  </label>
                  <input
                    type="date"
                    id="inquiry-date"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('inquiryForm.message')}
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    {t('inquiryForm.submit')}
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
