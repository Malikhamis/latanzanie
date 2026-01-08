'use client'

import { Button } from '@/components/ui/button'
import '../../tailgrid.css'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { submitNewsletterSubscription } from '@/lib/actions/contact'

// Disable static generation for this page
export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const result = await submitNewsletterSubscription({ firstName, email });
      if (result.success) {
        setSubmitSuccess(true);
        setFirstName('');
        setEmail('');
      } else {
        setSubmitError(result.error || 'Failed to subscribe');
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setSubmitError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/abouthero.jpg"
            alt="About La Tanzanie"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto drop-shadow-md">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Story Section with Heritage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            {t('story.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                {t('story.heritage.title')}
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <p>{t('story.heritage.paragraph1')}</p>
                <p>{t('story.heritage.paragraph2')}</p>
                <p>{t('story.heritage.paragraph3')}</p>
                <p>{t('story.heritage.paragraph4')}</p>
              </div>
            </div>

            <div className="relative">
              <div className="transform rotate-3 shadow-2xl rounded-lg overflow-hidden">
                <Image 
                  src="/images/team-tanzania.jpg" 
                  alt={t('story.imageCaption')}
                  width={600}
                  height={400}
                  className="w-full h-auto" />
              </div>
              <p className="mt-6 text-center text-xl font-semibold text-gray-800 italic">
                {t('story.imageCatchphrase')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('engagement.title')}
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('engagement.paragraph1')}</p>
            <p>{t('engagement.paragraph2')}</p>
            <p>{t('engagement.paragraph3')}</p>
            <p>{t('engagement.paragraph4')}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t('values.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {t('values.subtitle')}
            </p>
            <p className="text-2xl font-semibold text-teal-600">
              {t('values.conviction')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Value 1: Heritage */}
            <div className="border-l-4 border-teal-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.heritage.title')}
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>{t('values.heritage.paragraph1')}</p>
                <p>{t('values.heritage.paragraph2')}</p>
              </div>
            </div>

            {/* Value 2: Nature */}
            <div className="border-l-4 border-green-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.nature.title')}
              </h3>
              <p className="text-gray-700">
                {t('values.nature.description')}
              </p>
            </div>

            {/* Value 3: Authenticity */}
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {t('values.authenticity.title')}
              </h3>
              <p className="text-gray-700">
                {t('values.authenticity.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Foire Aux Questions</h2>
          
          <div className="space-y-4">
            {[
              { 
                question: "Quel est la température les différents jours et comment s'habiller.", 
                answer: "Les températures varient fortement selon l'altitude et la saison : en journée elles peuvent se situer entre ~5–15°C selon l'étape, et près du sommet il peut faire bien en dessous de zéro. Habillez‑vous par couches : couche de base respirante, couche isolante (polaire), veste coupe‑vent/imperméable ; bonnet et gants sont essentiels pour les nuits et le sommet."
              },
              { 
                question: "Quelles chaussures pour marcher et sur le campement.", 
                answer: "Privilégiez des chaussures de trekking robustes et montantes (protection de la cheville), avec bonne adhérence et imperméabilité (Gore‑Tex ou équivalent). Emportez également des sandales ou chaussures légères pour le campement."
              },
              { 
                question: "Et les chaussettes ? Lesquelles et combien ?", 
                answer: "Apportez 3–4 paires de chaussettes techniques (laine mérinos ou synthétique) : une paire par jour et une paire chaude pour la nuit. Évitez le coton ; des liners peuvent aider contre les ampoules."
              },
              { 
                question: "Kilimandjaro : Faut-il se doucher pendant une ascension de 8 à 10 jours ?", 
                answer: "Non, il n’est généralement pas possible de prendre une vraie douche lors d'une ascension du Kilimandjaro. Les camps de haute altitude sont situés dans des zones sauvages protégées, dépourvues d'installations sanitaires modernes ou d'eau courante. L’eau y est une ressource précieuse, réservée en priorité à la cuisine et à l’hydratation des grimpeurs.\n\nCependant, ne pas se doucher ne signifie pas négliger l’hygiène. Nos randonneurs utilisent des solutions simples et efficaces pour rester frais et en bonne santé tout au long du trek :\n\n1). Toilette quotidienne : Une bassine d'eau tiède et un gant de toilette sont fournis par notre équipe chaque matin et soir.\n\n2). Lingettes biodégradables : Idéales pour un nettoyage rapide du corps tout en respectant l'environnement.\n\n3). Lavage fréquent des mains : Une étape cruciale pour garantir votre santé et éviter les bactéries en groupe.\n\n4). Change régulier : Le renouvellement des vêtements techniques et des sous-vêtements est essentiel.\n\n5). Hygiène des pieds : Un soin rigoureux pour prévenir les ampoules et les infections durant la marche.\n\nPourquoi la douche n’est pas une priorité en altitude ?\nEn haute montagne, votre corps mobilise toute son énergie pour l'acclimatation. Se doucher à l’eau froide augmente considérablement le risque de fatigue et de refroidissement (hypothermie légère). Pour réussir votre sommet, votre priorité doit rester l’hydratation, le repos et l’adaptation progressive à l’altitude.\n\nL’avis du guide : Passer 8 à 10 jours sans douche est tout à fait normal et fait partie de l'aventure. Avec une hygiène de base bien gérée, vous resterez en pleine forme et concentré sur votre objectif : atteindre le pic Uhuru."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/kilimanjaro-sunset.jpg" 
            alt="Kilimanjaro"
            fill
            className="object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-xl mb-2">
            {t('newsletter.subtitle')}
          </p>
          <p className="text-lg mb-8 opacity-90">
            {t('newsletter.description')}
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t('newsletter.firstNamePlaceholder')}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.emailPlaceholder')}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : t('newsletter.button')}
            </Button>
          </form>
          {submitSuccess && (
            <div className="mt-4 text-green-600 text-center">
              Successfully subscribed to the newsletter!
            </div>
          )}
          {submitError && (
            <div className="mt-4 text-red-600 text-center">
              {submitError}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}