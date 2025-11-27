'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Briefcase, Users, TrendingUp, Award, Globe, Heart, Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export default function WorkWithUsPage() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const t = useTranslations('WorkWithUsPage')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsApplicationModalOpen(false)
  }

  const benefits = [
    {
      icon: Globe,
      titleKey: 'benefits.globalImpact.title',
      descKey: 'benefits.globalImpact.description'
    },
    {
      icon: Users,
      titleKey: 'benefits.teamCulture.title',
      descKey: 'benefits.teamCulture.description'
    },
    {
      icon: TrendingUp,
      titleKey: 'benefits.growth.title',
      descKey: 'benefits.growth.description'
    },
    {
      icon: Award,
      titleKey: 'benefits.recognition.title',
      descKey: 'benefits.recognition.description'
    }
  ]

  const positions = [
    {
      id: 1,
      titleKey: 'positions.tourGuide.title',
      locationKey: 'positions.tourGuide.location',
      typeKey: 'positions.tourGuide.type',
      descKey: 'positions.tourGuide.description'
    },
    {
      id: 2,
      titleKey: 'positions.travelCoordinator.title',
      locationKey: 'positions.travelCoordinator.location',
      typeKey: 'positions.travelCoordinator.type',
      descKey: 'positions.travelCoordinator.description'
    },
    {
      id: 3,
      titleKey: 'positions.contentCreator.title',
      locationKey: 'positions.contentCreator.location',
      typeKey: 'positions.contentCreator.type',
      descKey: 'positions.contentCreator.description'
    },
    {
      id: 4,
      titleKey: 'positions.customerSuccess.title',
      locationKey: 'positions.customerSuccess.location',
      typeKey: 'positions.customerSuccess.type',
      descKey: 'positions.customerSuccess.description'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/kilimanjaro-summit.jpg" 
            alt="Work With Us" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <Briefcase className="w-16 h-16 mx-auto text-gray-300" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <button 
              onClick={() => setIsApplicationModalOpen(true)}
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center text-lg"
            >
              {t('hero.cta')}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto text-gray-700 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('mission.title')}
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('mission.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('mission.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {t(benefit.titleKey)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(benefit.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('positions.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              {t('positions.subtitle')}
            </p>
            
            <div className="space-y-6">
              {positions.map((position) => (
                <div key={position.id} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {t(position.titleKey)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{t(position.locationKey)}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{t(position.typeKey)}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {t(position.descKey)}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button 
                        onClick={() => setIsApplicationModalOpen(true)}
                        className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center whitespace-nowrap"
                      >
                        {t('positions.apply')}
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              {t('contact.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Mail className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.email.label')}</h3>
                <a href="mailto:careers@latanzanie.com" className="text-gray-600 hover:text-gray-900">
                  careers@latanzanie.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Phone className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.phone.label')}</h3>
                <a href="tel:+255782825692" className="text-gray-600 hover:text-gray-900">
                  +255782825692
                </a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <MapPin className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('contact.location.label')}</h3>
                <p className="text-gray-600">
                  Arusha, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplicationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsApplicationModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{t('modal.title')}</h2>
                <button 
                  onClick={() => setIsApplicationModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-8">
                {t('modal.description')}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('modal.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      {t('modal.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('modal.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('modal.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('modal.position')}
                  </label>
                  <select
                    id="position"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  >
                    <option value="">{t('modal.selectPosition')}</option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.id}>
                        {t(pos.titleKey)}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('modal.resume')}
                  </label>
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('modal.coverLetter')}
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={4}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder={t('modal.coverLetterPlaceholder')}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
                  >
                    {t('modal.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
