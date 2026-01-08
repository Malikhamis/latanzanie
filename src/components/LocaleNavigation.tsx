'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, User, Mail, Phone, MessageSquare, Home, Info, Map, Book } from 'lucide-react'
import { Park } from '@/types/park'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { blogCategories } from '@/lib/blogCategories'

interface LocaleNavigationProps {
  parks: Pick<Park, '_id' | 'title' | 'slug'>[]
}

export function LocaleNavigation({ parks }: LocaleNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Navigation')
  const tCommon = useTranslations('Common')
  
  // Determine the current locale from the pathname
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr';

  // Function to map park data to translations based on current locale
  const mapParkDataToTranslations = (park: Pick<Park, '_id' | 'title' | 'slug'>) => {
    // Map French park names to translation keys
    const parkTranslations: Record<string, string> = {
      'Parc National du Serengeti': 'parks.serengeti',
      'Cratère du Ngorongoro': 'parks.ngorongoro',
      'Parc National de la Tarangire': 'parks.tarangire',
      'Serengeti National Park': 'parks.serengeti',
      'Ngorongoro Crater': 'parks.ngorongoro',
      'Tarangire National Park': 'parks.tarangire'
    };

    const translationKey = parkTranslations[park.title];
    if (translationKey) {
      return {
        ...park,
        title: tCommon(`${translationKey}.title`)
      };
    }
    
    // If no mapping found, return the park as is
    return park;
  };

  // Map all parks to their translated versions
  const translatedParks = parks.map(mapParkDataToTranslations);

  useEffect(() => {
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
      {/* Desktop Navigation - Fixed at top */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="flex items-center">
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
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-[60] pt-0">
                    {blogCategories.map((cat) => (
                      <Link
                        key={cat.link}
                        href={`/${currentLocale}/travel-blogs/${cat.link}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {currentLocale === 'fr' ? cat.titleFr : cat.titleEn}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation - Right side items */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Link href={`/${currentLocale}/see-trips`} className="text-gray-700 hover:text-gray-900 font-medium flex items-center border border-black px-3 py-1 rounded">
                  {t('trips')}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block z-[60] pt-0">
                  <Link href={`/${currentLocale}/destinations/tanzania-safari`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('destinations')}
                  </Link>
                  <Link href={`/${currentLocale}/destinations/climb-kilimanjaro`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('trips')}
                  </Link>
                  <Link href={`/${currentLocale}/destinations/zanzibar-beach-holidays`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {t('blog')}
                  </Link>
                </div>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
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
          </div>
        </div>
        
        {/* Desktop Menu Sidebar - Covers full width horizontally */}
        {isDesktopMenuOpen && (
          <div className="hidden md:block fixed left-0 top-16 right-0 h-1/2 z-50">
            {/* Sidebar with clean modern design */}
            <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-b border-gray-200 h-full">
              <div className="container mx-auto px-4 py-6">
                {/* Close button only */}
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setIsDesktopMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Menu Items - Without logo text */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    <li>
                      <Link 
                        href={`/${currentLocale}`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsDesktopMenuOpen(false)}
                      >
                        {t('home')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/terms`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsDesktopMenuOpen(false)}
                      >
                        {t('terms')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/privacy`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
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
        )}
      </nav>
      
      {/* Mobile Bottom Navigation - Fixed at bottom, no top navigation bar */}
      <div className="md:hidden">
        {/* Custom Sidebar Menu - Only visible on mobile when menu is open */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Full screen sidebar with logo and language switcher */}
            <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg h-full flex flex-col">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link 
                  href={`/${currentLocale}`} 
                  className="text-2xl font-serif font-bold text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Latanzanieaucourdelanature
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="container mx-auto px-4 py-6 flex-grow overflow-y-auto">
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
                        href={`/${currentLocale}/about`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('about')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/see-trips`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('trips')}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={`/${currentLocale}/travel-blogs`} 
                        className="block py-3 text-gray-700 hover:text-gray-900 font-medium text-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('blog')}
                      </Link>
                    </li>
                    </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile Bottom Navigation - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 safe-area-inset">
          <div className="grid grid-cols-5">
            {/* Menu button replaces Home icon */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col items-center justify-center py-3 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Menu className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('menu')}</span>
            </button>
            <Link 
              href={`/${currentLocale}/about`} 
              className="flex flex-col items-center justify-center py-3 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Info className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('about')}</span>
            </Link>
            <Link 
              href={`/${currentLocale}/see-trips`} 
              className="flex flex-col items-center justify-center py-3 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Map className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('trips')}</span>
            </Link>
            <Link 
              href={`/${currentLocale}/travel-blogs`} 
              className="flex flex-col items-center justify-center py-3 text-gray-700 hover:text-green-600 transition-colors"
            >
              <Book className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('blog')}</span>
            </Link>
            <button 
              onClick={() => console.log('AI Chatbot clicked')}
              className="flex flex-col items-center justify-center py-3 text-gray-700 hover:text-green-600 transition-colors"
            >
              <MessageSquare className="h-5 w-5 mb-1" />
              <span className="text-xs">{t('aiChat')}</span>
            </button>
          </div>
        </div>
      </div>
      
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
                <h2 className="text-3xl font-bold text-gray-800">
                  {t('contactModal.title')}
                </h2>
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
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {t('contactModal.contactUs')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('contactModal.description')}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t('contactModal.emailUs')}
                        </h4>
                        <p className="text-gray-600">info@latanzanieaucoeurdelanature.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t('contactModal.callUs')}
                        </h4>
                        <p className="text-gray-600">+255782825692</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="h-6 w-6 text-green-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {t('contactModal.chatWithUs')}
                        </h4>
                        <p className="text-gray-600">
                          {t('contactModal.available')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-800 mb-3">
                      {t('contactModal.whyChooseUs')}
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">
                          {t('contactModal.localExperts')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">
                          {t('contactModal.responsibleTravel')}
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">
                          {t('contactModal.customizedPlanning')}
                        </span>
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
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
                        className="block w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">
                          {t('contactModal.selectTrip')}
                        </option>
                        <option value="kilimanjaro">
                          {t('trips')}
                        </option>
                        <option value="safari">
                          {t('destinations')}
                        </option>
                        <option value="zanzibar">
                          {t('blog')}
                        </option>
                        <option value="nepal">
                          {t('contact')}
                        </option>
                        <option value="everest">
                          {t('about')}
                        </option>
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
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                          placeholder={t('contactModal.messagePlaceholder')}
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy-policy"
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                        {t('contactModal.accept')}{' '}
                        <Link href={`/${currentLocale}/privacy`} className="text-[#00A896] hover:text-[#008576]">
                          {t('contactModal.privacyPolicy')}
                        </Link>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
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