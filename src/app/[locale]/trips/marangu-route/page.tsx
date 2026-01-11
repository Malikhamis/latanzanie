'use client'

import { useState, useRef, useEffect } from 'react'

import { Clock, MapPin, User, Calendar, Bed, CheckCircle, XCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Faq from '@/components/ui/faq'

export default function MaranguRoutePage() {
  // Hardcoded French content for Marangu Route
  const safeT = (key: string, fallback = ''): string => {
    const frMessages: Record<string, string> = {
      'miniNavbar.datesAndPrices': "Dates & Prix",
      'miniNavbar.proposeDate': "Proposer une date",
      // Add other translations as needed
    };
    return frMessages[key] || fallback;
  };
  
  // provide backwards-compatible `t` used across the file by delegating to safeT
  const t = (key: string, fallback = '') => safeT(key, fallback);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  const [isWhenDropdownOpen, setIsWhenDropdownOpen] = useState(false)
  const [isItineraryDropdownOpen, setIsItineraryDropdownOpen] = useState(false)
  const [selectedMonths, setSelectedMonths] = useState<string[]>(['2026-Jan'])
  const [selectedItineraries, setSelectedItineraries] = useState<string[]>(['Solo Traveler', 'Couple'])
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false)
  const [showEarlierDates, setShowEarlierDates] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showAllInclusions, setShowAllInclusions] = useState(false)
  const monthDropdownRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null);
  
  // Function to get dates for a specific month
  const getDatesForMonth = (monthKey: string) => {
    // monthKey format: '2026-Feb'
    const [year, month] = monthKey.split('-');
    const heading = `${month} ${year}`;
    
    // Return sample data based on the selected month and year
    const monthDates: Record<string, Array<any>> = {
      'Jan': [
        { date: 'Jan 1, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jan 8, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jan 15, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jan 22, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jan 29, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Feb': [
        { date: 'Feb 5, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Feb 12, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Feb 19, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Feb 26, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Mar': [
        { date: 'Mar 5, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Mar 12, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Mar 19, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Mar 26, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Apr': [
        { date: 'Apr 2, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Apr 9, 2026', route: '5 Day - Marangu Route', status: 'Waitlisted', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'May': [
        { date: 'May 7, 2026', route: '5 Day - Marangu Route', status: 'Limited availability', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'May 14, 2026', route: '5 Day - Marangu Route', status: 'Limited availability', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Jun': [
        { date: 'Jun 4, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jun 11, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jun 18, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jun 25, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Jul': [
        { date: 'Jul 2, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jul 9, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jul 16, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jul 23, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Jul 30, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Aug': [
        { date: 'Aug 6, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Aug 13, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Aug 20, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Aug 27, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Sep': [
        { date: 'Sep 3, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Sep 10, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Sep 17, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Sep 24, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Oct': [
        { date: 'Oct 1, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Oct 8, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Oct 15, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Oct 22, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Oct 29, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Nov': [
        { date: 'Nov 5, 2026', route: '5 Day - Marangu Route', status: 'Limited availability', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Nov 12, 2026', route: '5 Day - Marangu Route', status: 'Limited availability', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ],
      'Dec': [
        { date: 'Dec 3, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Dec 10, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Dec 17, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Dec 24, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' },
        { date: 'Dec 31, 2026', route: '5 Day - Marangu Route', status: 'Open for bookings', prices: { 'Solo Traveler': '€1,800', 'Couple': '€1,600', 'Family Group': '€1,600', 'Friends Group': '€1,600', 'Corporate Group': '€1,600' }, deposit: '€100' }
      ]
    };
    
    return monthDates[month] || [{
      date: `${month} 10, ${year}`,
      route: '5 Day - Marangu Route',
      status: 'Open for bookings',
      prices: {
        'Solo Traveler': '€1,800',
        'Couple': '€1,600',
        'Family Group': '€1,600',
        'Friends Group': '€1,600',
        'Corporate Group': '€1,600'
      },
      deposit: '€100'
    }];
  };

  // Refs for scrolling to sections
  const inclusionsRef = useRef<HTMLElement>(null);
  const accommodationRef = useRef<HTMLElement>(null);
  const datesPricesRef = useRef<HTMLElement>(null);

  // Hardcoded French inclusions content
  const allInclusions: string[] = [
    "Deux nuits d'hébergement à l'hôtel",
    "Transport privé aller-retour depuis l'aéroport international du Kilimandjaro jusqu'à votre hôtel à Moshi",
    "Guides qualifiés avec équipage de montagne",
    "Droits d'entrée au parc national",
    "TVA de 18 % sur les frais d'excursion et les services",
    "hut fee montagne",
    "Frais de sauvetage",
    "Tous les repas en montagne (petit-déjeuner, déjeuner et dîner)",
    "Guides et porteurs",
    "Hébergement et droits d'entrée en montagne",
    "Oxymètre de pouls",
    "Trousse de premiers secours",
    "Urgence respiratoire",
    "Salaires équitables pour les guides et les porteurs, approuvés par l'Autorité du parc national du Kilimandjaro"
  ]

  // Display inclusions based on state
  const displayedInclusions = showAllInclusions ? allInclusions : allInclusions.slice(0, 10)

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

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
              Conquérir le Toit de l&apos;Afrique : L&apos;Ascension du Kilimandjaro par la Route Marangu en 5 Jours
            </h1>
            
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg text-white">Kilimandjaro</span>
            </div>
            
            <div className="flex items-center mb-3">
              <Clock className="mr-2 h-4 w-4 text-white" />
              <span className="text-lg font-bold text-white">5 jours</span>
            </div>
            
            <p className="text-white text-base leading-relaxed">
              Tanzanie. Bienvenue en Tanzanie ! À votre arrivée à l&apos;aéroport international du Kilimandjaro, vous serez accueilli par votre guide. Ensemble, vous prendrez la route en direction de Moshi (environ 60 minutes de route). Vous êtes déjà à votre lodge.
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
              Conquérir le Toit de l&apos;Afrique : L&apos;Ascension du Kilimandjaro par la Route Marangu en 5 Jours
            </h1>
            
            <div className="flex items-center mb-3">
              <MapPin className="mr-2 h-5 w-5 text-white" />
              <span className="text-2xl text-white">Kilimandjaro</span>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="mr-2 h-5 w-5 text-white" />
              <span className="text-xl text-white">5 jours</span>
            </div>
            
            <p className="text-white mb-4 text-xl">
              Tanzanie. Bienvenue en Tanzanie ! À votre arrivée à l'aéroport international du Kilimandjaro, vous serez accueilli par votre guide. Ensemble, vous prendrez la route en direction de Moshi (environ 60 minutes de route). Vous êtes déjà à votre lodge.
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
                1800€
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
                Dates et Prix
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
                Proposer une date
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white border-2 border-green-600 shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                Détails
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'inclusions' 
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white border-2 border-green-600 shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(inclusionsRef)}
              >
                Inclusions
              </button>
              <button 
                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 text-base ${
                  activeSection === 'accommodation' 
                    ? 'bg-gradient-to-r from-[#72D9C4] to-[#00A896] text-white border-2 border-[#00A896] shadow-lg' 
                    : 'bg-white text-gray-600 hover:text-gray-800 border-2 border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => scrollToSection(accommodationRef)}
              >
                Hébergement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Navbar - Mobile View Only */}
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

      {/* Detailed Itinerary Section */}
      <section className="py-5 mt-0 md:mt-0">
        <div className="container mx-auto px-0">
          
          {/* Detailed Itinerary Title - Only on left side below mini navbar */}
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-12 mt-4 md:mt-0">
              Itinéraire détaillé
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
                      Jour 0 : Aéroport du Kilimanjaro Moshi
                    </h3>
                    <p className="text-gray-600 mb-4 text-xl">
                      Kilimanjaro depuis Moshi,
                    </p>
                    <p className="text-gray-600 mb-4 text-xl">
                      Tanzanie. Bienvenue en Tanzanie ! À votre arrivée à l'aéroport international du Kilimandjaro, vous serez accueilli par votre guide. Ensemble, vous prendrez la route en direction de Moshi (environ 60 minutes de route). Vous êtes déjà à votre lodge.
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
                      Jour 1 : Porte Marangu vers Mandara Hut
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Le premier jour d'ascension commence par le transfert vers la Porte Marangu (1,860,m). Après les formalités d'enregistrement, la randonnée s'engage dans la forêt tropicale luxuriante. Le chemin est généralement facile et progressif. En option, un détour vers le Cratère Maundi est possible. Après 3 à 4 heures de marche pour environ 8,km, vous atteignez Mandara Hut (2700m) pour la nuit.
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Altitude:</strong> 1,860,m (6,100,ft) - 2,700,m (8,875,ft)
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Distance / Durée:</strong> 8,km (5,mi) - temps de randonnée 3-4
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
                      Jour 2 : Mandara Hut vers Horombo Hut
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Vous quittez la forêt tropicale pour les vastes zones de lande. Le chemin est ascendant et offre des vues magnifiques sur le sommet du Mawenzi et le dôme de Kibo. La zone est caractérisée par les lobélies géantes. Après 5 à 6 heures de marche pour environ 12,km, vous arrivez à Horombo Hut (3,700,m). C'est là que vous passerez la nuit et commencerez à ressentir les effets de l'altitude.
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Altitude:</strong> 2,700,m (8,875,ft) - 3,700,m
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Distance / Durée:</strong> 12,km (7,5,mi) - temps de randonnée 5-6
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
                      Jour 3 : Horombo Hut vers Kibo Hut
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Cette étape vous mène à travers le désert alpin stérile. Le paysage devient rocheux, souvent décrit comme « lunaire ». La marche s'effectue sur le col du Kilimanjaro, entre le Kibo et le Mawenzi. Après 5 à 6 heures de marche pour environ 9,km, vous atteignez Kibo Hut (4,700,m), le camp de base. L'après-midi est consacré au repos, au dîner et à la préparation méticuleuse pour l'ascension du sommet prévue très tôt le matin.
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Altitude:</strong> 3,700,m (12,200,ft) - 4,700m
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Distance Durée:</strong> 9,km (5,5,mi) - temps de randonnée 5-6
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
                      Jour 4 : L'Assaut du Sommet et Descente vers Horombo Hut
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Le quatrième jour est le plus décisif. L'ascension du sommet débute très tôt (entre minuit et 2h00 du matin) dans l'obscurité, nécessitant l'utilisation de lampes frontales. La progression s'effectue sur des éboulis raides et épais ou de la neige, via de nombreux lacets, jusqu'à Gilman's Point (5,685,m) situé sur le bord du cratère. La montée se poursuit jusqu'à l'Uhuru Peak (5,895,m), le point culminant de l'Afrique. La phase d'ascension est la plus difficile et exige le port de toutes les couches vestimentaires chaudes. Un rythme lent, (Pole Pole) (lentement en Swahili), est essentiel. Après avoir immortalisé l'instant au sommet, la longue descente commence. Un arrêt est prévu à Kibo Hut pour un déjeuner et un court repos avant de poursuivre la descente jusqu'à Horombo Hut (3,700,m).
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Altitude:</strong> 4,700,m (15,500,ft) - 5,895,m (19,340,ft)
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Distance / Durée:</strong> 15,km (13mi) - temps de randonnée 6-8
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
                      Jour 5 : Horombo Hut vers la Porte Marangu
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Le dernier jour est une longue mais agréable descente finale. Vous traversez la lande, puis le sentier forestier luxuriant jusqu'à la Porte Marangu (1,860,m). À basse altitude, le chemin peut être boueux. Après 5 à 6 heures de marche, vous atteignez la porte où un véhicule vous attend pour le transfert vers votre hôtel à Moshi. Vous recevez alors votre certificat d'ascension, marquant l'achèvement de votre expédition
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Altitude:</strong> 3,700\,m (12,200,ft)
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Distance / Durée:</strong> 20,km (12,5,mi) / 5 - 6 heures de marche
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
                      VOL DE RETOUR AU DÉPART DE L'AÉROPORT INTERNATIONAL DU KILIMANDJARO (JRO)
                    </h3>
                    <p className="text-gray-500 mb-4 text-lg md:text-xl">
                      Après l'effort et le succès de l'ascension, le Jour 6 marque la fin de cette aventure extraordinaire. Suite à une dernière nuit de repos bien méritée, vous profitez d'un petit-déjeuner tranquille. Notre équipe viendra vous chercher à votre hébergement et assurera votre transfert privé vers l'Aéroport International du Kilimanjaro (JRO). C'est l'occasion de faire vos adieux à la Tanzanie, emportant avec vous des souvenirs inoubliables du Toit de l'Afrique. Si vous ne souhaitez pas que le voyage se termine si vite, n'hésitez pas à prolonger votre séjour pour un safari dans le Serengeti ou quelques jours de détente sur les plages de Zanzibar !
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
            Inclusions et Exclusions
          </h2>
          
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Price Includes - Full width on mobile */}
                <div className="border-r-0 md:border-r border-gray-200 pr-0 md:pr-8 pb-8 md:pb-0">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Prix comprend</h3>
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
                      {showAllInclusions ? 'Voir moins' : 'Voir plus'}
                      <svg className={`ml-1 h-4 w-4 transform ${showAllInclusions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllInclusions ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Price Does Not Include - Full width on mobile */}
                <div className="pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0 border-gray-200 md:border-t-transparent">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Prix ne comprend pas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>L'avion</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Visa</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Pourboires</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Assurance</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Objet personnels</span>
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
              Hébergement
            </h2>
          </div>
          
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-96 rounded-xl overflow-hidden">
                  <Image src="/images/lala.jpg" alt="Marangu Huts Exterior" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Huttes Marangu</h3>
                  <p className="text-gray-500 mb-6 text-lg md:text-xl">
                    Les huttes Marangu sont les seules huttes permanentes du Kilimandjaro. Elles sont plus confortables que les tentes, avec des murs en pierre et des toits en tôle. Chaque hutte accueille 6 personnes et dispose de lits avec matelas (pas de draps fournis). Les toilettes et les douches sont situées à l'extérieur des huttes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Trip - Compact Design */}
      <section ref={datesPricesRef} className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Book your trip
          </h2>
          
          {/* Compact Action Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div 
              onClick={() => setIsInquiryFormOpen(true)}
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
              onClick={() => setIsInquiryFormOpen(true)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📅</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base">Don&apos;t see your dates?</h3>
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
            
            {/* Group Options Selector */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsItineraryDropdownOpen(!isItineraryDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="text-gray-600">Group Options</span>
                  <span className="font-semibold">{selectedItineraries.length} Selected</span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${isItineraryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isItineraryDropdownOpen && (
                <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-3">
                  {['Solo Traveler', 'Couple', 'Family Group', 'Friends Group', 'Corporate Group'].map((opt, index) => {
                    const isSelected = selectedItineraries.includes(opt);
                    return (
                      <label key={opt} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={isSelected} 
                          onChange={() => {
                            if (isSelected) {
                              setSelectedItineraries(selectedItineraries.filter(s => s !== opt));
                            } else {
                              setSelectedItineraries([...selectedItineraries, opt]);
                            }
                          }} 
                          className="w-4 h-4 text-[#00A896] rounded"
                        />
                        <span className="text-base text-gray-800">{opt}</span>
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
            {selectedMonths.map((monthKey: string) => {
              const [year, month] = monthKey.split('-')
              const rawList = getDatesForMonth(monthKey)
              const list = (rawList || [])
              
              return list.map((item: any, idx: number) => {
                // Calculate price based on selected group options
                let displayPrice = item.prices && item.prices['Solo Traveler'] ? item.prices['Solo Traveler'] : item.price || 'Price not available';
                const displayDeposit = item.deposit || 'Deposit not available';
                
                if (selectedItineraries.length > 0) {
                  // If any group option is selected, use the price for that option
                  // For simplicity, if multiple options are selected, we'll use the first one
                  const selectedGroup = selectedItineraries[0];
                  if (item.prices && item.prices[selectedGroup]) {
                    displayPrice = item.prices[selectedGroup];
                  }
                }
                
                // No additional formatting needed - prices are already in correct format (e.g., '€1,800', '€100')
                
                return (
                <div key={`${monthKey}-${idx}`} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900 text-base">{item.route}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-base text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-600">{item.status}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">Available</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <div className="text-right">
                        <div className="text-base text-gray-600">from <span className="font-semibold text-gray-900">{displayPrice}</span></div>
                        <div className="text-sm text-gray-500">Deposit {displayDeposit}</div>
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
                )
              })
            })}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don&apos;t see your dates?</h3>
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

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-0">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            Galerie
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
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">FAQs</h2>
          <Faq
            items={[
              { question: "Quel est la température les différents jours et comment s'habiller.", answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet." },
              { question: "Quelles chaussures pour marcher et sur le campement.", answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement." },
              { question: "Et les chaussettes ? Lesquelles et combien ?", answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules." },
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
            Restez informé
          </h2>
          <h3 className="text-2xl font-bold mb-6">
            Recevez nos conseils d'experts
          </h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières informations sur les ascensions du Kilimandjaro.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Prénom"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
              S'inscrire
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
                <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
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
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Votre e-mail"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Votre téléphone"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Votre message"
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
                    J'accepte la <Link href="/privacy" className="text-[#00A896] hover:text-[#008576]">politique de confidentialité</Link>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Envoyer la demande
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
                <h2 className="text-2xl font-bold text-gray-800">Prêt à conquérir le Mont Kilimandjaro ?</h2>
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
                Nous vous enverrons un itinéraire personnalisé et vous mettrons en contact avec l'un de nos experts en Tanzanie.
              </p>
              
              {/* Inquiry Form */}
              <form onSubmit={(e) => {
                e.preventDefault()
                // Form submission logic would go here
                setIsInquiryFormOpen(false)
              }} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    id="inquiry-name"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Entrez votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-email" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Votre e-mail
                  </label>
                  <input
                    type="email"
                    id="inquiry-email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    placeholder="Entrez votre e-mail"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry-travellers" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Nombre de voyageurs
                  </label>
                  <select
                    id="inquiry-travellers"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  >
                    <option value="">Sélectionner le nombre</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'voyageur' : 'voyageurs'}</option>
                    ))}
                    <option value="10+">10+ voyageurs</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="inquiry-dates" className="block text-lg md:text-xl font-medium text-gray-700 mb-1">
                    Quand souhaitez-vous voyager ?
                  </label>
                  <select
                    id="inquiry-dates"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                    required
                  >
                    <option value="">Sélectionner le nombre</option>
                    <option value="Janvier 2025">Janvier 2025</option>
                    <option value="Février 2025">Février 2025</option>
                    <option value="Mars 2025">Mars 2025</option>
                    <option value="Avril 2025">Avril 2025</option>
                    <option value="Mai 2025">Mai 2025</option>
                    <option value="Juin 2025">Juin 2025</option>
                    <option value="Juillet 2025">Juillet 2025</option>
                    <option value="Août 2025">Août 2025</option>
                    <option value="Septembre 2025">Septembre 2025</option>
                    <option value="Octobre 2025">Octobre 2025</option>
                    <option value="Novembre 2025">Novembre 2025</option>
                    <option value="Décembre 2025">Décembre 2025</option>
                    <option value="Janvier 2026">Janvier 2026</option>
                    <option value="Février 2026">Février 2026</option>
                    <option value="Mars 2026">Mars 2026</option>
                    <option value="Avril 2026">Avril 2026</option>
                    <option value="Mai 2026">Mai 2026</option>
                    <option value="Juin 2026">Juin 2026</option>
                    <option value="Juillet 2026">Juillet 2026</option>
                    <option value="Août 2026">Août 2026</option>
                    <option value="Septembre 2026">Septembre 2026</option>
                    <option value="Octobre 2026">Octobre 2026</option>
                    <option value="Novembre 2026">Novembre 2026</option>
                    <option value="Décembre 2026">Décembre 2026</option>
                    <option value="Janvier 2027">Janvier 2027</option>
                    <option value="Février 2027">Février 2027</option>
                    <option value="Mars 2027">Mars 2027</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-semibold py-3 px-6 rounded-lg transition-colors">Go</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

                