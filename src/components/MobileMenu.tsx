'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Park } from '@/types/park'
import { useTranslations } from 'next-intl'

interface MobileMenuProps {
  parks: Pick<Park, '_id' | 'title' | 'slug'>[]
}

export function MobileMenu({ parks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('MobileMenu');

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">{t('parks')}</h3>
                <ul className="space-y-2">
                  {parks.map((park) => (
                    <li key={park.slug.current}>
                      <Link 
                        href={`/parks/${park.slug.current}`}
                        className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 rounded"
                        onClick={() => setIsOpen(false)}
                      >
                        {park.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/about"
                      className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('about')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact"
                      className="block py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}