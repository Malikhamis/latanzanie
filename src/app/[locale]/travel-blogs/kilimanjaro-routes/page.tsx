'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import '../../../tailgrid.css'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import ClientWrapper from './ClientWrapper'

export default async function KilimanjaroRoutesPage({ params }: { params: Promise<{ locale?: string }> }) {
  const awaitedParams = await params;
  const locale = awaitedParams?.locale || 'fr';
  const t = await getTranslations('BlogPosts.kilimanjaro-routes');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero6.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      <ClientWrapper locale={locale} />

    </div>
  )
}
