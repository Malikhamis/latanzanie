'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, User, Mail, Phone, MessageSquare, Home, Info, Map, Book, Send } from 'lucide-react'
import { Park } from '@/types/park'
import { usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { blogCategories } from '@/lib/blogCategories'

interface NavigationProps {
  parks: Pick<Park, '_id' | 'title' | 'slug'>[]
}

export function Navigation({ parks }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Navigation')
  
  // Determine the current locale from the pathname using the same approach as LanguageSwitcher
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale = segments[0] && routing.locales.includes(segments[0] as any) ? segments[0] : 'fr';

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsContactModalOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200 hidden md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {/* Logo - at the left end on desktop */}
              <Link href={`/${currentLocale}`} className="text-2xl font-serif font-bold text-gray-800 mr-8">
                Latanzanieaucourdelanature
              </Link>
              
              {/* Desktop Navigation - Left side items */}
              <div className="flex space-x-8">
                <Link href={`/${currentLocale}/about`} className="text-gray-700 hover:text-gray-900 font-medium">
                  {t('about')}
                </Link>
                <div className="relative group">
                  <Link href={`/${currentLocale}/travel-blogs`} className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                    {t('blog')}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                    <div className="absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-60 pt-0">
                      <Link
                        href={`/${currentLocale}/travel-blogs/climb-kilimanjaro`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('blogKilimanjaro')}
                      </Link>
                      <Link
                        href={`/${currentLocale}/travel-blogs/tanzania-safari`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('blogTanzaniaSafari')}
                      </Link>
                      <Link
                        href={`/${currentLocale}/travel-blogs/zanzibar-beach-holidays`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {t('blogZanzibar')}
                      </Link>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation - Right side items */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group">
                <Link href={`/${currentLocale}/see-trips`} className="text-gray-700 hover:text-gray-900 font-medium flex items-center border border-black px-3 py-1 rounded">
                  {t('trips')}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute right-0 mt-0 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-60 pt-0">
                  <Link href={`/${currentLocale}/trips/climb-kilimanjaro`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('tripClimbKilimanjaro')}</Link>
                  <Link href={`/${currentLocale}/trips/tanzania-safari`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('tripTanzaniaSafari')}</Link>
                  <Link href={`/${currentLocale}/trips/zanzibar-beach-holidays`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{t('tripZanzibarBeach')}</Link>
                </div>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t('contact')}
              </button>
              {/* Menu Button for Desktop */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-gray-100"
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Mobile top navbar removed - all mobile navigation through bottom menu */}
          </div>
        </div>
        
        {/* Desktop Menu Sidebar - Covers full width horizontally */}
        {isDesktopMenuOpen && (
          <div className="hidden md:block fixed left-0 top-16 right-0 z-50">
            {/* Sidebar with clean modern design */}
            <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-gray-200">
              <div className="container mx-auto px-4 py-6">
                {/* Menu Items - Removed About Us, See Trips, and Travel Blogs since they're in bottom nav */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    <li>
                      <Link 
                        href={`/${currentLocale}`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('home')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/work-with-us`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('workWithUs')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/privacy`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('privacy')}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Menu Sidebar - Covers full width horizontally */}
        {isDesktopMenuOpen && (
          <div className="hidden md:block fixed left-0 top-16 right-0 z-50">
            {/* Sidebar with clean modern design */}
            <div className="bg-white bg-opacity-95 backdrop-blur-md shadow-lg border-b border-gray-200">
              <div className="container mx-auto px-4 py-4">
                {/* Close button only */}
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setIsDesktopMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Left Column - Menu Items */}
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          href={`/${currentLocale}`} 
                          className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-base"
                          onClick={() => setIsDesktopMenuOpen(false)}
                        >
                          {t('home')}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/${currentLocale}/work-with-us`} 
                          className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-base"
                          onClick={() => setIsDesktopMenuOpen(false)}
                        >
                          {t('workWithUs')}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/${currentLocale}/terms`} 
                          className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-base"
                          onClick={() => setIsDesktopMenuOpen(false)}
                        >
                          {t('terms')}
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href={`/${currentLocale}/privacy`} 
                          className="block py-2 text-gray-700 hover:text-gray-900 font-medium text-base"
                          onClick={() => setIsDesktopMenuOpen(false)}
                        >
                          {t('privacy')}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  

                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Mobile Menu Sidebar - Only visible on mobile when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 top-0 w-full h-1/2 z-50">
          {/* Sidebar with clean modern design */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              {/* Logo Text - Only visible in mobile menu */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <Link 
                  href={`/${currentLocale}`} 
                  className="text-2xl font-serif font-bold text-gray-800 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Latanzanieaucourdelanature
                </Link>
              </div>
              
              {/* Menu Items */}
              <nav className="flex-1">
                <ul className="space-y-4">
                  <li>
                    <Link 
                      href={`/${currentLocale}`} 
                      className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('home')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/${currentLocale}/work-with-us`} 
                      className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('workWithUs')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={`/${currentLocale}/privacy`} 
                      className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t('privacy')}
                    </Link>
                  </li>
                </ul>
              </nav>
              

            </div>
          </div>
        </div>
      )}
      
      {/* Stylish Bottom Navigation Bar - Gradient Background with Unique Icons - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Gradient background with subtle pattern */}
        <div className="relative bg-gradient-to-r from-[#72D9C4] via-[#4DC5B5] to-[#00A896] shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          {/* Subtle wave pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wave-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
          
          {/* Navigation items */}
          <div className="relative flex justify-around items-center h-20 px-3">
            {/* Menu Button - Hamburger with unique animation */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white/25 backdrop-blur-md shadow-lg scale-105' 
                  : 'hover:bg-white/15 hover:scale-105'
              }`}
            >
              <div className="relative">
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl ${
                  isMenuOpen ? 'bg-white shadow-md' : 'bg-white/90'
                } transition-all duration-300`}>
                  <Menu className={`h-6 w-6 ${
                    isMenuOpen ? 'text-[#00A896]' : 'text-[#008576]'
                  }`} strokeWidth={2.5} />
                </div>
              </div>
              <span className={`text-xs font-semibold mt-1.5 tracking-wide ${
                isMenuOpen ? 'text-white' : 'text-white/90'
              }`}>{t('menu')}</span>
            </button>
            
            {/* About Button - Info icon in shield */}
            <Link 
              href={`/${currentLocale}/about`}
              className={`flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 ${
                mounted && pathname === `/${currentLocale}/about` 
                  ? 'bg-white/25 backdrop-blur-md shadow-lg scale-105' 
                  : 'hover:bg-white/15 hover:scale-105'
              }`}
            >
              <div className="relative">
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl ${
                  mounted && pathname === `/${currentLocale}/about` ? 'bg-white shadow-md' : 'bg-white/90'
                } transition-all duration-300`}>
                  <Info className={`h-6 w-6 ${
                    mounted && pathname === `/${currentLocale}/about` ? 'text-[#00A896]' : 'text-[#008576]'
                  }`} strokeWidth={2.5} />
                </div>
              </div>
              <span className={`text-xs font-semibold mt-1.5 tracking-wide ${
                mounted && pathname === `/${currentLocale}/about` ? 'text-white' : 'text-white/90'
              }`}>{t('about')}</span>
            </Link>
            
            {/* Trips Button - Map in circular badge (Elevated center piece) */}
            <Link 
              href={`/${currentLocale}/see-trips`}
              className={`flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 ${
                mounted && (pathname?.includes('/trips') || pathname === `/${currentLocale}/see-trips`) 
                  ? 'bg-white/25 backdrop-blur-md shadow-lg scale-105' 
                  : 'hover:bg-white/15 hover:scale-105'
              }`}
            >
              <div className="relative">
                {/* Elevated badge effect */}
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  mounted && (pathname?.includes('/trips') || pathname === `/${currentLocale}/see-trips`) 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/90 shadow-md'
                } transition-all duration-300`}>
                  <Map className={`h-6 w-6 ${
                    mounted && (pathname?.includes('/trips') || pathname === `/${currentLocale}/see-trips`) 
                      ? 'text-[#00A896]' 
                      : 'text-[#008576]'
                  }`} strokeWidth={2.5} />
                </div>
              </div>
              <span className={`text-xs font-semibold mt-1.5 tracking-wide ${
                mounted && (pathname?.includes('/trips') || pathname === `/${currentLocale}/see-trips`) 
                  ? 'text-white' 
                  : 'text-white/90'
              }`}>{t('trips')}</span>
            </Link>
            
            {/* Blog Button - Book icon in rounded square */}
            <Link 
              href={`/${currentLocale}/travel-blogs`}
              className={`flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 ${
                mounted && pathname?.includes('/travel-blogs') 
                  ? 'bg-white/25 backdrop-blur-md shadow-lg scale-105' 
                  : 'hover:bg-white/15 hover:scale-105'
              }`}
            >
              <div className="relative">
                <div className={`w-9 h-9 flex items-center justify-center rounded-xl ${
                  mounted && pathname?.includes('/travel-blogs') ? 'bg-white shadow-md' : 'bg-white/90'
                } transition-all duration-300`}>
                  <Book className={`h-6 w-6 ${
                    mounted && pathname?.includes('/travel-blogs') ? 'text-[#00A896]' : 'text-[#008576]'
                  }`} strokeWidth={2.5} />
                </div>
              </div>
              <span className={`text-xs font-semibold mt-1.5 tracking-wide ${
                mounted && pathname?.includes('/travel-blogs') ? 'text-white' : 'text-white/90'
              }`}>{t('blog')}</span>
            </Link>
            
            {/* Contact Button - Message in rounded badge */}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:scale-105"
            >
              <div className="relative">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/90 shadow-md transition-all duration-300 hover:bg-white">
                  <MessageSquare className="h-6 w-6 text-[#008576]" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-xs font-semibold mt-1.5 tracking-wide text-white/90">{t('contact')}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          ></div>
          
          {/* Chat Modal Content */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] flex flex-col z-10">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{t('aiChat')}</h2>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-[#E8F8F5] text-sm mt-1">{t('chatPromptHeader')}</p>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-xs shadow-sm">
                    <p className="text-gray-800">{t('chatInitialAssistant')}</p>
                  </div>
                </div>
                
                {/* Add more chat messages here as needed */}
              </div>
            </div>
            
            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex">
                <input
                  type="text"
                  placeholder={t('chatInputPlaceholder')}
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A896] focus:border-transparent"
                />
                <button className="bg-[#00A896] hover:bg-[#008576] text-white px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur - completely transparent with blur effect */}
          <div 
            className="absolute inset-0 backdrop-blur-lg"
            onClick={() => setIsContactModalOpen(false)}
          ></div>
          
          {/* Modal Content - Larger and with two semi parts */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-8">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{t('contactModal.title')}</h2>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>
              
              {/* Two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column - Contact information */}
                <div className="bg-[#E8F8F5] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{t('contactModal.contactUs')}</h3>
                  <p className="text-gray-600 mb-6">
                    {t('contactModal.description')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">{t('contactModal.emailUs')}</h4>
                        <p className="text-gray-600">info@latanzanieaucourdelanature.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">{t('contactModal.callUs')}</h4>
                        <p className="text-gray-600">+255782825692</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">{t('contactModal.chatWithUs')}</h4>
                        <p className="text-gray-600">{t('contactModal.available')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-800 mb-3">{t('contactModal.whyChooseUs')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{t('contactModal.localExperts')}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{t('contactModal.responsibleTravel')}</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{t('contactModal.customizedPlanning')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Right column - Contact form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contactModal.fullName')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                          placeholder={t('contactModal.namePlaceholder')}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contactModal.emailAddress')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                          placeholder={t('contactModal.emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contactModal.phoneNumber')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                          placeholder="+255782825692"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="trip" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contactModal.interestedTrip')}
                      </label>
                      <select
                        id="trip"
                        className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                      >
                        <option value="">{t('contactModal.selectTrip')}</option>
                        <option value="kilimanjaro">{t('trips')}</option>
                        <option value="safari">{t('destinations')}</option>
                        <option value="zanzibar">{t('blog')}</option>
                        <option value="nepal">{t('contact')}</option>
                        <option value="everest">{t('about')}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contactModal.message')}
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          rows={4}
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#00A896] focus:border-[#00A896]"
                          placeholder={t('contactModal.messagePlaceholder')}
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy-policy"
                        type="checkbox"
                        className="h-4 w-4 text-[#00A896] focus:ring-[#00A896] border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                        {t('contactModal.accept')} <Link href={`/${currentLocale}/privacy`} className="text-[#00A896] hover:text-[#008576]">{t('contactModal.privacyPolicy')}</Link>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
                      >
                        {t('contactModal.sendRequest')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}