'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react'
// We purposely avoid calling `useTranslations('Footer')` here because
// next-intl will throw MISSING_MESSAGE when the namespace isn't loaded.
// Instead import the locale JSON files directly and pick the correct
// namespace for the current locale, falling back to English when needed.
 
import enMessagesRaw from '../../locales/en.json'
import frMessagesRaw from '../../locales/fr.json'

interface Messages {
  Footer?: Record<string, string>;
}

const enMessages = enMessagesRaw as Messages
const frMessages = frMessagesRaw as Messages

export function LocaleFooter() {
  const pathname = usePathname()

  // Determine the current locale and pick the appropriate messages object.
  // We do this client-side (this component is `use client`) so we read the
  // pathname and decide between `frMessages` and `enMessages`. If the
  // `Footer` namespace is missing in the chosen locale, fall back to English.
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale = segments[0] && ['fr', 'en'].includes(segments[0]) ? segments[0] : 'fr';

  const messagesForLocale = currentLocale === 'fr' ? frMessages : enMessages
  const footerNamespace = messagesForLocale?.Footer ?? enMessages.Footer ?? {}

  const t = (key: string) => {
    try {
      // prefer locale footer, otherwise fallback to English, otherwise return key
      return footerNamespace?.[key] ?? enMessages.Footer?.[key] ?? key
    } catch (_) {
      return key
    }
  }


  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('company')}</h3>
            <p className="text-gray-300 mb-4">
              {t('description')}
            </p>
            {/* tagline removed as requested */}
            <div className="flex space-x-4">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${currentLocale}/about`} className="text-gray-300 hover:text-white">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/destinations`} className="text-gray-300 hover:text-white">
                  {t('destinations')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/blog`} className="text-gray-300 hover:text-white">
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/contact`} className="text-gray-300 hover:text-white">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              {t('destinations')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${currentLocale}/destinations/climb-kilimanjaro`} className="text-gray-300 hover:text-white">
                  {t('kilimanjaro')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/destinations/tanzania-safari`} className="text-gray-300 hover:text-white">
                  {t('safari')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/destinations/zanzibar-beach-holidays`} className="text-gray-300 hover:text-white">
                  {t('zanzibar')}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLocale}/destinations/ngorongoro-crater`} className="text-gray-300 hover:text-white">
                  {t('ngorongoro')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">
              {t('contactInfo')}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-300 mt-1 mr-2" />
                <span>
                  {t('address')}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-gray-300 mr-2" />
                <span>{t('phone')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-gray-300 mr-2" />
                <span>{t('email')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>
                &copy; {new Date().getFullYear()} {t('company')}. {t('rights')}
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href={`/${currentLocale}/terms`} className="text-gray-300 hover:text-white">
                {t('terms')}
              </Link>
              <Link href={`/${currentLocale}/privacy`} className="text-gray-300 hover:text-white">
                {t('privacy')}
              </Link>
              <Link href={`/${currentLocale}/work-with-us`} className="text-gray-300 hover:text-white">
                {t('workWithUs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}