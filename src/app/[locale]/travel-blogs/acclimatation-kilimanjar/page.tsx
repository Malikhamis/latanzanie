'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import ClientWrapper from './ClientWrapper'

export default async function AcclimatationKilimanjarPage({ params }: { params: Promise<{ locale?: string }> }) {
  const awaitedParams = await params;
  const locale = awaitedParams?.locale || 'fr';
  const t = await getTranslations('BlogPosts.acclimatation-kilimanjar');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      <ClientWrapper locale={locale} />

      {/* Canonical route cards section (after notes) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt pour une aventure ?</h2>
            <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 1 800 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️5 jours</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours</p>
                <p className="text-gray-600 text-sm mb-4">Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !</p>
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 2 200 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️7 jours</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours</p>
                <p className="text-gray-600 text-sm mb-4">La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro.</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/sante-en-altitude hero.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                    <p className="text-[#00A896] font-semibold">À partir de 1 900 €</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️6 jours</div>
                    <div className="text-yellow-400">★★★★☆ (4.5)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)</p>
                <p className="text-gray-600 text-sm mb-4">Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés.</p>
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA block at the end, canonical format */}
      <section className="py-16 text-white relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/kilimanjaro-summit.jpg" alt="Kilimanjaro background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl font-semibold mb-4">Prêt à commencer ?</h2>
          <h3 className="text-2xl font-bold mb-6">Rejoignez-nous pour l'aventure</h3>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">Contactez-nous pour en savoir plus sur nos routes</p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Prénom"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none bg-white w-full"
            />
            <button className="bg-[#00A896] hover:bg-[#008576] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 w-full sm:w-auto">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}