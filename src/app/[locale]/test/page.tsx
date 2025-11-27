'use client'

import { useTranslations } from 'next-intl';

// Disable static generation for this page
export const dynamic = 'force-dynamic';

export default function TestPage() {
  const t = useTranslations('HomePage');
  
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('subtitle')}
        </p>
      </div>
    </div>
  );
}