'use client'

import { useState, useEffect, useRef } from 'react'
import { Hero } from '@/components/Hero'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const t = useTranslations('HomePage');
  const tCommon = useTranslations('Common');
  const pathname = usePathname();
  const segments = pathname?.split('/').filter(Boolean) || []
  const locale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr'
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderCount = 8
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const autoPlayRef = useRef<number | null>(null)

  // Start autoplay for mobile slider and cleanup
  useEffect(() => {
    if (autoPlayRef.current == null) {
      autoPlayRef.current = window.setInterval(() => {
        setSliderIndex((prev) => (prev + 1) % sliderCount)
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current != null) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
    }
  }, [sliderCount])

  const pauseAutoPlay = () => {
    if (autoPlayRef.current != null) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const resumeAutoPlay = () => {
    if (autoPlayRef.current == null) {
      autoPlayRef.current = window.setInterval(() => {
        setSliderIndex((prev) => (prev + 1) % sliderCount)
      }, 4000)
    }
  }

  const goNext = () => setSliderIndex((prev) => (prev + 1) % sliderCount)
  const goPrev = () => setSliderIndex((prev) => (prev - 1 + sliderCount) % sliderCount)

  const handleTouchStart = (e: React.TouchEvent) => {
    pauseAutoPlay()
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) {
      resumeAutoPlay()
      return
    }
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (diff > threshold) {
      goNext()
    } else if (diff < -threshold) {
      goPrev()
    }
    touchStartX.current = null
    touchEndX.current = null
    // resume autoplay after touch
    resumeAutoPlay()
  }

  // Adventure trips data - Including both Materuni experiences
  const adventureTrips = [
    {
      id: 1,
      title: tCommon('trips.kilimanjaro.title'),
      image: "/images/kilimanjaro-summit.jpg",
      price: 2000,
      rating: 5.0,
      duration: tCommon('trips.kilimanjaro.duration'),
      description: tCommon('trips.kilimanjaro.description'),
      link: `/${locale}/trips/climb-kilimanjaro`
    },
    {
      id: 2,
      title: tCommon('trips.safari.title'),
      image: "/images/tanzania-safari.jpg",
      price: 1000,
      rating: 5.0,
      duration: tCommon('trips.safari.duration'),
      description: tCommon('trips.safari.description'),
      link: `/${locale}/trips/tanzania-safari`
    },
    {
      id: 3,
      title: 'Expérience Authentique Kilimandjaro : Materuni & Chemka (2 Jours)',
      image: "/images/materuni-waterfall.jpg",
      price: 150,
      rating: 5.0,
      duration: '2 jours',
      description: 'Plongez au cœur de la Tanzanie rurale avec cet itinéraire de deux jours. Découvrez la richesse culturelle du peuple Chagga et terminez par la relaxation absolue dans une oasis naturelle. Idéal pour ceux qui cherchent l\'aventure, la culture et la détente.',
      link: `/${locale}/trips/materuni-chemka-2-days`
    },
    {
      id: 4,
      title: 'Immersion Culturelle Chagga',
      image: "/images/materuni-cultural-tour.jpg",
      price: 80,
      rating: 5.0,
      duration: '1 jour',
      description: 'Plongez dans la culture Chagga authentique avec café, cascade secrète et traditions locales au pied du Kilimandjaro.',
      link: `/${locale}/trips/materuni-cultural-tour`
    },
    {
      id: 5,
      title: tCommon('trips.zanzibar.title'),
      image: "/images/zanzibar-beach.jpg",
      price: 1500,
      rating: 5.0,
      duration: tCommon('trips.zanzibar.duration'),
      description: tCommon('trips.zanzibar.description'),
      link: `/${locale}/trips/zanzibar-beach-holidays`
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Remove padding top to make hero section start immediately after navbar */}
      <div>
        <Hero />
        
        {/* Adventure Trips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {t('featuredTrips')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adventureTrips.map((trip) => (
                <Link 
                  key={trip.id} 
                  href={trip.link}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-96 cursor-pointer ${trip.id === 3 || trip.id === 4 ? 'h-[32rem]' : ''}`}
                >
                  {/* Image part with zigzag bottom border */}
                  <div className={`${trip.id === 3 || trip.id === 4 ? 'h-[70%]' : 'h-[60%]'} bg-gray-200 relative`}>
                    <Image 
                      src={trip.image} 
                      alt={trip.title}
                      fill
                      className={`${trip.id === 3 ? 'object-cover object-[50%_30%]' : (trip.id === 4 ? 'object-cover object-top' : 'object-cover')}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Zigzag border pattern */}
                    <div className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden z-10">
                      <svg 
                        viewBox="0 0 1440 40" 
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <path 
                          fill="white" 
                          d="M0,20L80,15C160,10,320,0,480,5C640,10,800,30,960,30C1120,30,1280,10,1360,0L1440,10L1440,40L1360,40C1280,40,1120,40,960,40C800,40,640,40,480,40C320,40,160,40,80,40L0,40Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Details part - adjusted for different card types */}
                  <div className="flex-1 flex flex-col justify-between p-5 bg-white">

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {trip.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {trip.description}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold bg-gradient-to-r from-[#72D9C4] to-[#00A896] bg-clip-text text-transparent">
                          {tCommon('fromPrice', { price: trip.price })}
                        </span>
                        <div className="flex items-center text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">
                            {trip.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="ml-1 text-sm font-medium text-gray-800">
                          {trip.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href={`/${locale}/trips/tanzania-safari`}
                className="inline-block bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t('seeAllTrips')}
              </Link>
            </div>
          </div>
        </section>
        

        {/* Recent Photos Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {tCommon('recentAdventures.title')}
              </h2>
            </div>
            
            {/* Grid for desktop, slider for mobile */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden w-full relative">
                  <Image
                    src={`/images/g${i + 1}.jpg`}
                    alt={`Recent adventure ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
            
            {/* Slider for mobile */}
            <div className="md:hidden max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl">
                {/* Slider container */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseEnter={pauseAutoPlay}
                  onMouseLeave={resumeAutoPlay}
                >
                  {[...Array(sliderCount)].map((_, i) => (
                    <div key={i} className="min-w-full relative">
                      <div className="aspect-square rounded-xl overflow-hidden w-full relative">
                        <Image
                          src={`/images/g${i + 1}.jpg`}
                          alt={`Recent adventure ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Slider controls */}
                <button
                  onClick={() => { pauseAutoPlay(); goPrev(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => { pauseAutoPlay(); goNext(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Slider indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[...Array(sliderCount)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSliderIndex(i)}
                      className={`w-3 h-3 rounded-full ${i === sliderIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        

      </div>
    </div>
  )
}