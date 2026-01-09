"use client"

import React from "react"
import { MessageCircle, Calendar, Phone } from "lucide-react"

type Props = {
  label?: string
  whatsappLink?: string
  calendlyLink?: string
  phoneNumber?: string
  className?: string
  locale?: string
}

// Sensible defaults for contact links (can be overridden via props)
const DEFAULT_PHONE = "+255782825692"
const DEFAULT_WA = `https://wa.me/${DEFAULT_PHONE.replace(/\D/g, "")}?text=Bonjour%20%2F%20Hello%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20une%20ascension%20du%20Kilimandjaro`
const DEFAULT_CALENDLY = "https://calendly.com/latanzanie"

export default function InlineCTA({
  whatsappLink,
  calendlyLink,
  phoneNumber,
  className = "flex gap-3 items-center",
  locale = "en",
}: Props) {
  const wa = whatsappLink || DEFAULT_WA
  const cal = calendlyLink || DEFAULT_CALENDLY
  const phone = phoneNumber || DEFAULT_PHONE

  const waLabel = locale === "fr" ? "WhatsApp" : "WhatsApp"
  const calLabel = locale === "fr" ? "Réserver un appel" : "Book a call"
  const phoneLabel = locale === "fr" ? "Appeler" : "Call us"

  return (
    <div className={className}>
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          {waLabel}
        </a>
      )}
      {cal && (
        <a
          href={cal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition-colors"
        >
          <Calendar className="h-4 w-4" />
          {calLabel}
        </a>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded transition-colors"
        >
          <Phone className="h-4 w-4" />
          {phoneLabel}
        </a>
      )}
    </div>
  );
}
