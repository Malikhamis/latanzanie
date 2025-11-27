"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { submitContactForm } from '@/lib/actions/contact'

type Props = {
  messages: any
}

export default function ContactFormClient({ messages }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', phone: '', destination: '', travelDate: '', message: '' })
      } else {
        setSubmitError(result.error || messages.submitError)
      }
    } catch (err) {
      console.error(err)
      setSubmitError(messages.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-[#E8F8F5] border border-[#B8EDE3] rounded-lg p-4 md:p-6 mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-serif font-bold text-[#008576] mb-2">{messages.successTitle}</h3>
        <p className="text-[#00A896]">{messages.successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{messages.nameLabel} *</label>
        <input id="name" name="name" required className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.name} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{messages.emailLabel} *</label>
          <input id="email" name="email" type="email" required className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{messages.phoneLabel}</label>
          <input id="phone" name="phone" className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.phone} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">{messages.destinationLabel}</label>
          <select id="destination" name="destination" className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.destination} onChange={handleChange}>
            <option value="">{messages.destinationPlaceholder}</option>
            <option value="kilimanjaro">{messages.destinations?.kilimanjaro}</option>
            <option value="safari">{messages.destinations?.safari}</option>
            <option value="zanzibar">{messages.destinations?.zanzibar}</option>
            <option value="ngorongoro">{messages.destinations?.ngorongoro}</option>
            <option value="selous">{messages.destinations?.selous}</option>
            <option value="meru">{messages.destinations?.meru}</option>
          </select>
        </div>
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">{messages.travelDateLabel}</label>
          <input id="travelDate" name="travelDate" type="date" className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.travelDate} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{messages.messageLabel}</label>
        <textarea id="message" name="message" rows={3} className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md" value={formData.message} onChange={handleChange}></textarea>
      </div>

      {submitError && <div className="bg-red-50 border border-red-200 rounded-lg p-3"><p className="text-red-700">{submitError}</p></div>}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#72D9C4] to-[#00A896]">
        {isSubmitting ? messages.submitting : messages.submit}
      </Button>
    </form>
  )
}
