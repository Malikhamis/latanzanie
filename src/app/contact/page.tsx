import ContactFormClient from '@/components/ContactFormClient'
import { getTranslations } from 'next-intl/server'

export default async function ContactPage() {
  // Use server-side translation lookup where possible. To keep the build
  // stable during this cleanup, fall back to a plain English messages object
  // which will be passed to the client form component. This avoids invoking
  // client-only translation hooks during prerender.

  // If you want to wire this to next-intl properly, replace the messages
  // object below with values from `await getTranslations('ContactPage')`.
  const messages = {
    heroTitle: 'Contact Us',
    heroSubtitle: 'Get in touch with our team to plan your trip',
    formTitle: 'Send us a message',
    successTitle: 'Thanks — we received your message',
    successMessage: 'We will get back to you within 48 hours.',
    submitError: 'Failed to submit the form. Please try again later.',
    nameLabel: 'Your name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    destinationLabel: 'Destination',
    destinationPlaceholder: 'Choose a destination',
    destinations: {
      kilimanjaro: 'Kilimanjaro',
      safari: 'Safari',
      zanzibar: 'Zanzibar',
      ngorongoro: 'Ngorongoro',
      selous: 'Selous',
      meru: 'Meru'
    },
    travelDateLabel: 'Preferred travel date',
    messageLabel: 'Message',
    submitting: 'Sending…',
    submit: 'Send message',
    contactInfoTitle: 'Contact information',
    contactInfo: {
      address: { title: 'Address', line1: 'PO Box 123', line2: 'Arusha, Tanzania' },
      phone: { title: 'Phone', number: '+255782825692' },
      email: { title: 'Email', address: 'hello@example.com' },
      hours: { title: 'Opening hours', line1: 'Mon–Fri 9:00–17:00', line2: '', line3: '' }
    },
    urgentHelpTitle: 'Need urgent help?',
    liveChat: 'Live chat',
    phoneCall: 'Request a call'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative h-96 bg-gradient-to-r from-[#5BC4AF] to-[#008576] flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{messages.heroTitle}</h1>
          <p className="text-xl max-w-3xl mx-auto">{messages.heroSubtitle}</p>
        </div>
      </div>

      <div className="py-8 md:py-16 max-w-7xl mx-auto px-3 md:px-4">
        <div className="grid-contact gap-6 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-gray-800">{messages.formTitle}</h2>
            <ContactFormClient messages={messages} />
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-8 sticky top-24">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 md:mb-6 text-gray-800">{messages.contactInfoTitle}</h3>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{messages.contactInfo.address.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{messages.contactInfo.address.line1}<br />{messages.contactInfo.address.line2}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{messages.contactInfo.phone.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{messages.contactInfo.phone.number}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{messages.contactInfo.email.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{messages.contactInfo.email.address}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{messages.contactInfo.hours.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{messages.contactInfo.hours.line1}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">{messages.urgentHelpTitle}</h4>
                <button className="w-full mb-3 border rounded-md py-2">{messages.liveChat}</button>
                <button className="w-full border rounded-md py-2">{messages.phoneCall}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}