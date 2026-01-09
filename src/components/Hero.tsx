"use client"

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function Hero() {
  const t = useTranslations('Hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const router = useRouter()
  const pathname = usePathname()

  const navigateToSeeTrips = () => {
    // Derive locale from the current path (first segment) if present
    const segments = (pathname || '').split('/').filter(Boolean)
    const locale = segments.length > 0 && ['en', 'fr'].includes(segments[0]) ? segments[0] : 'fr'
    router.push(`/${locale}/see-trips`)
  }

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      const video = videoRef.current;
      
      video.addEventListener('error', () => {
        // Video failed to load - fallback to gradient background
        setVideoError(true);
      });

      video.play().catch(() => {
        // Autoplay blocked or failed - silent catch
      });
    }
  }, []);

  // Add poster image for faster initial load
  const posterImage = '/images/kilimanjaro-summit.jpg';

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pb-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videoError ? (
          <div className="w-full h-full bg-gradient-to-br from-[#5BC4AF] to-[#008576]" />
        ) : (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            poster={posterImage}
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src="/videos/tanzania-landscape3.mp4" type="video/mp4" />
            {t('videoFallback')}
          </video>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content - Aligned to the left */}
      <div className="relative z-10 text-white px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl ml-0"> {/* Changed from centered to left-aligned */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4"> {/* Increased text size */}
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl"> {/* Reduced text size */}
            {t('subtitle')}
          </p>
          <div className="flex">
            <Button size="lg" className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576]" onClick={navigateToSeeTrips}>
              {t('exploreTrips')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave effect at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto text-white"
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}