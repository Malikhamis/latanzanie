'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, User, Mail, Phone, MessageSquare, Info, Map, Book, Send } from 'lucide-react'
import { Park } from '@/types/park'
import { usePathname } from 'next/navigation'

import { useTranslations } from 'next-intl'
import { submitContactForm } from '@/lib/actions/contact'


interface NavigationProps {
  parks: Pick<Park, '_id' | 'title' | 'slug'>[]
}


export function Navigation({ parks }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  // Contact modal state removed - now linking directly to contact page
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('Navigation')
  
  // Determine the current locale from the pathname using the same approach as LanguageSwitcher
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale: 'fr' | 'en' = segments[0] && (segments[0] === 'fr' || segments[0] === 'en') ? segments[0] : 'fr';

  useEffect(() => {
    setMounted(true)
    
    // Function to close menus when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu if open and click is outside
      if (isMenuOpen) {
        const mobileMenuButton = document.querySelector('button[aria-label="menu"], button[onclick*="setIsMenuOpen"], .mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenuButton && !mobileMenuButton.contains(event.target as Node) && 
            mobileMenu && !mobileMenu.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
      
      // Close desktop menu if open and click is outside
      if (isDesktopMenuOpen) {
        const desktopMenuButton = document.querySelector('button[onclick*="setIsDesktopMenuOpen"], .desktop-menu-toggle');
        const desktopMenu = document.querySelector('.desktop-menu');
        if (desktopMenuButton && !desktopMenuButton.contains(event.target as Node) && 
            desktopMenu && !desktopMenu.contains(event.target as Node)) {
          setIsDesktopMenuOpen(false);
        }
      }
      

      
      // Close chat modal if open and click is outside
      if (isChatOpen) {
        const chatModal = document.querySelector('.chat-modal');
        if (chatModal && !chatModal.contains(event.target as Node)) {
          setIsChatOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isDesktopMenuOpen, isChatOpen])

  // Handle form submission
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const result = await submitContactForm(formValues);
      if (result.success) {
        setSubmitSuccess(true);
        // Reset form
        setFormValues({ name: '', email: '', phone: '', destination: '', travelDate: '', message: '' });
        // Redirect to contact page after success
        window.location.href = `/${currentLocale}/contact`;
      } else {
        setSubmitError(result.error || t('ContactPage.submitError'));
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(t('ContactPage.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };
  


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200 hidden md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center space-x-8">
              <Link href={`/${currentLocale}`} className="text-lg md:text-xl font-serif font-bold text-[#00A896] -ml-6 truncate">
                la Tanzanie au cœur de la nature
              </Link>
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
              {/* Parks section removed as requested */}
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
              <Link 
                href={`/${currentLocale}/contact`}
                className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t('contact')}
              </Link>
              {/* Menu Button for Desktop */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-gray-100 desktop-menu-toggle"
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
        

      </nav>
      
      {/* Mobile Menu Sidebar - Only visible on mobile when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 top-0 w-full h-1/2 z-50 mobile-menu">
          {/* Sidebar with clean modern design */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              {/* Logo Text - Only visible in mobile menu */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <Link 
                  href={`/${currentLocale}`} 
                  className="text-base font-serif font-bold text-[#00A896] block text-center truncate"
                  onClick={() => setIsMenuOpen(false)}
                >
                  la Tanzanie au cœur de la nature
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
              } mobile-menu-toggle`}
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
            <Link 
              href={`/${currentLocale}/contact`}
              className="flex flex-col items-center justify-center min-w-[68px] h-16 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:scale-105"
            >
              <div className="relative">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/90 shadow-md transition-all duration-300 hover:bg-white">
                  <MessageSquare className="h-6 w-6 text-[#008576]" strokeWidth={2.5} />
                </div>
              </div>
              <span className="text-xs font-semibold mt-1.5 tracking-wide text-white/90">{t('contact')}</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 chat-modal">
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
      

    </>
  )
}