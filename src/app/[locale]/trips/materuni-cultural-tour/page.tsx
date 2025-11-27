'use client'

import { useTranslations } from 'next-intl'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Coffee, Droplets, Users, Clock, MapPin, Heart, CheckCircle, XCircle, Camera, Utensils, Mountain, Palmtree, Sprout } from 'lucide-react'

export default function MateruniCulturalTour() {
  const t = useTranslations('MateruniCulturalTour')
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  
  const overviewRef = useRef<HTMLDivElement | null>(null)
  const itineraryRef = useRef<HTMLDivElement | null>(null)
  const inclusionsRef = useRef<HTMLDivElement | null>(null)
  const practicalInfoRef = useRef<HTMLDivElement | null>(null)
  const bookingRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop - 100; // Offset for navbar height
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  // Safe translation helper
  const safeT = (key: string, fallback = '') => {
    try {
      return t(key)
    } catch {
      return fallback
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Premium Parallax Effect */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/materuni-waterfall.jpg"
            alt="Materuni Waterfall"
            fill
            className="object-cover"
            priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Floating Coffee Bean Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-pulse">
            <Coffee className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse delay-100">
            <Droplets className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-pulse delay-200">
            <Mountain className="w-20 h-20 text-white" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="text-white/80 text-sm mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {safeT('hero.breadcrumb', 'Tanzania > Cultural Experiences > Materuni')}
            </div>

            {/* Title with Gradient Underline */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {safeT('hero.title', 'Full Day: Chagga Cultural Immersion')}
              <div className="w-24 h-1 bg-gradient-to-r from-[#72D9C4] to-[#00A896] mt-3 rounded-full"></div>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              {safeT('hero.description', 'Discover the authentic soul of the Chagga people')}
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <div>
                    <div className="text-xs opacity-80">{safeT('hero.durationLabel', 'Duration')}</div>
                    <div className="text-sm font-semibold">{safeT('hero.duration', '1 Full Day')}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-4 h-4" />
                  <div>
                    <div className="text-xs opacity-80">{safeT('hero.groupSizeLabel', 'Group Size')}</div>
                    <div className="text-sm font-semibold">{safeT('hero.groupSize', '2-15 people')}</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-4 h-4" />
                  <div>
                    <div className="text-xs opacity-80">{safeT('hero.difficultyLabel', 'Difficulty')}</div>
                    <div className="text-sm font-semibold">{safeT('hero.difficulty', 'Easy to Moderate')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => scrollToSection(bookingRef)}
                className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-bold py-3 px-6 text-sm md:text-base rounded-full transition-all duration-300 shadow-2xl hover:shadow-[#00A896]/50 hover:scale-105"
              >
                {safeT('hero.bookNow', 'Book Now')} - {safeT('hero.price', '€80')}
              </button>
              <button 
                onClick={() => setShowInquiryForm(true)}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-6 text-sm md:text-base rounded-full transition-all duration-300 border-2 border-white/30"
              >
                {safeT('hero.contactUs', 'Contact Us')}
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="white" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Overview Section with Card Design */}
      <section ref={overviewRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {safeT('overview.title', 'A Day at the Heart of Chagga Authenticity')}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#72D9C4] to-[#00A896] mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {safeT('overview.intro', 'This unique experience immerses you in the daily life of the Chagga people')}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <Coffee className="w-6 h-6 md:w-7 md:h-7 text-[#00A896]" />
                {safeT('overview.highlights', 'Experience Highlights')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00A896] hover:scale-105">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center flex-shrink-0 mt-1">
                        {i === 1 && <Sprout className="w-5 h-5 text-white" />}
                        {i === 2 && <Droplets className="w-5 h-5 text-white" />}
                        {i === 3 && <Palmtree className="w-5 h-5 text-white" />}
                        {i === 4 && <Coffee className="w-5 h-5 text-white" />}
                        {i === 5 && <Utensils className="w-5 h-5 text-white" />}
                        {i === 6 && <Users className="w-5 h-5 text-white" />}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {safeT(`overview.highlight${i}`, `Highlight ${i}`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section with Timeline Design */}
      <section ref={itineraryRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {safeT('itinerary.title', 'Detailed Daily Program')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#72D9C4] to-[#00A896] mx-auto rounded-full mb-12"></div>

            {/* Morning Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-xl p-3 shadow-lg">
                  <Mountain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{safeT('itinerary.morning.time', 'Morning (7:00 AM - 11:00 AM)')}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{safeT('itinerary.morning.title', 'The Journey, Kihamba & Hiking')}</h3>
                </div>
              </div>
              
              <div className="space-y-4 ml-4 md:ml-6 border-l-4 border-[#FFD700] pl-4 md:pl-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-white text-xs md:text-sm font-bold">{step}</span>
                      {safeT(`itinerary.morning.step${step}.title`, `Step ${step}`)}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {safeT(`itinerary.morning.step${step}.description`, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Midday Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#00A896] to-[#72D9C4] rounded-xl p-3 shadow-lg">
                  <Droplets className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{safeT('itinerary.midday.time', 'Midday (11:00 AM - 2:00 PM)')}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{safeT('itinerary.midday.title', 'The Waterfall Reward & Lunch')}</h3>
                </div>
              </div>
              
              <div className="space-y-4 ml-4 md:ml-6 border-l-4 border-[#00A896] pl-4 md:pl-6">
                {[1, 2].map((step) => (
                  <div key={step} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#00A896] to-[#72D9C4] flex items-center justify-center text-white text-xs md:text-sm font-bold">{step}</span>
                      {safeT(`itinerary.midday.step${step}.title`, `Step ${step}`)}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {safeT(`itinerary.midday.step${step}.description`, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Afternoon Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-xl p-3 shadow-lg">
                  <Coffee className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{safeT('itinerary.afternoon.time', 'Afternoon (2:00 PM - 5:00 PM)')}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{safeT('itinerary.afternoon.title', 'Coffee Craft & Chagga Hospitality')}</h3>
                </div>
              </div>
              
              <div className="space-y-4 ml-4 md:ml-6 border-l-4 border-[#8B4513] pl-4 md:pl-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#8B4513] to-[#D2691E] flex items-center justify-center text-white text-xs md:text-sm font-bold">{step}</span>
                      {safeT(`itinerary.afternoon.step${step}.title`, `Step ${step}`)}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {safeT(`itinerary.afternoon.step${step}.description`, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section ref={inclusionsRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {safeT('inclusions.title', 'What\'s Included')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#72D9C4] to-[#00A896] mx-auto rounded-full mb-12"></div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Inclusions */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-[#00A896]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{safeT('inclusions.title', 'Price Includes')}</h3>
                </div>
                <ul className="space-y-4">
                  {['transport', 'guide', 'waterfallFee', 'coffeeWorkshop', 'lunch', 'water'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#00A896] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{safeT(`inclusions.${item}`, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-gray-400">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{safeT('exclusions.title', 'Not Included')}</h3>
                </div>
                <ul className="space-y-4">
                  {['tips', 'personalExpenses', 'extraDrinks'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{safeT(`exclusions.${item}`, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section ref={practicalInfoRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {safeT('practicalInfo.title', 'Practical Information')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#72D9C4] to-[#00A896] mx-auto rounded-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['whatToBring', 'fitness', 'weather', 'cultural', 'booking', 'community'].map((item, index) => (
                <div key={item} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-5 md:p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-[#00A896]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#72D9C4] to-[#00A896] flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {safeT(`practicalInfo.${item}.title`, '')}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {safeT(`practicalInfo.${item}.description`, '')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={bookingRef} className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/materuni-waterfall.jpg" 
            alt="Newsletter Background" 
            fill
            className="object-cover"
            priority />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            {safeT('bookingSection.title', 'Ready for an authentic experience?')}
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            {safeT('bookingSection.subtitle', 'Book your Materuni cultural tour')}
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            {safeT('bookingSection.description', 'Join us for an unforgettable day with the Chagga people at the foot of Kilimanjaro')}
          </p>
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block">
              <div className="text-4xl md:text-5xl font-bold mb-2">{safeT('bookingSection.price', '€80')}</div>
              <div className="text-lg opacity-90">{safeT('bookingSection.perPerson', 'per person')}</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => setShowBookingForm(true)}
              className="bg-white text-[#00A896] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 text-base md:text-lg"
            >
              {safeT('bookingSection.bookNow', 'Book Now')}
            </button>
            <button 
              onClick={() => setShowInquiryForm(true)}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 border-2 border-white/30 text-base md:text-lg"
            >
              {safeT('bookingSection.contactButton', 'Get More Info')}
            </button>
          </div>
        </div>
      </section>

      {/* Modal Placeholders */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowBookingForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <XCircle className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{safeT('bookingForm.title', 'Book Your Materuni Tour')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('bookingForm.name', 'Full Name')}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('bookingForm.email', 'Email')}</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('bookingForm.groupSize', 'Group Size')}</label>
                <input type="number" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('bookingForm.date', 'Preferred Date')}</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('bookingForm.message', 'Special Requests')}</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white py-3 rounded-md transition-colors font-semibold">
                {safeT('bookingForm.submit', 'Confirm Booking')}
              </button>
            </form>
          </div>
        </div>
      )}

      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowInquiryForm(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <XCircle className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{safeT('inquiryForm.title', 'Get More Information')}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.name', 'Full Name')}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.email', 'Email')}</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.phone', 'Phone (Optional)')}</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{safeT('inquiryForm.message', 'Your Questions')}</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00A896] focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white py-3 rounded-md transition-colors font-semibold">
                {safeT('inquiryForm.submit', 'Send Inquiry')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
