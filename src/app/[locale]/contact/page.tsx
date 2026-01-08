'use client';

// Disable static generation for this page
export const dynamic = 'force-dynamic';


import { useTranslations } from 'next-intl';
import ContactFormClient from '@/components/ContactFormClient';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  
  // Define trip destinations with proper French titles
  const destinations = {
    'climb-kilimanjaro': 'Grimper le Kilimandjaro',
    'tanzania-safari': 'Safari en Tanzanie',
    'zanzibar-beach-holidays': 'Vacances à Zanzibar',
    'lemosho-route': "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours",
    'machame-route': "L'Itinéraire Machame (7 Jours de Trek) : L'Ascension Panoramique",
    'marangu-route': 'Route Marangu (6 Jours)',
    'materuni-chemka-2-days': 'Excursion Materuni et Sources d\'Eau Chaude de Chemka (2 Jours)',
    'safari-bivouac-4-days': 'Safari en Bivouac (4 Jours)',
    'safari-bivouac-8-days': 'Safari en Bivouac (8 Jours)',
    'safari-kilimanjaro-6-days': 'Safari et Mont Kilimandjaro (6 Jours)',
    'umbwe-route': 'Route Umbwe (6 Jours)',
    'zanzibar-complete-escape-8-days': 'Évasion Complete à Zanzibar (8 Jours)',
    'zanzibar-diving-culture-5-days': 'Plongée et Culture à Zanzibar (5 Jours)',
    'zanzibar-safari-beach-10-days': "Safari et Plages de Zanzibar (10 Jours) : L'Appel Sauvage de l'Afrique de l'Est"
  };

  const messages = {
    destinationLabel: 'Voyage intéressé',
    destinationPlaceholder: t('destinationPlaceholder') || 'Choisissez un voyage',
    destinations,
    nameLabel: t('nameLabel'),
    emailLabel: t('emailLabel'),
    phoneLabel: t('phoneLabel'),
    travelDateLabel: t('travelDateLabel'),
    messageLabel: t('messageLabel'),
    submitting: t('submitting'),
    submit: t('submit'),
    formTitle: t('formTitle'),
    successTitle: t('successTitle'),
    successMessage: t('successMessage'),
    submitError: t('submitError'),
    contactInfoTitle: t('contactInfoTitle'),
    contactInfo: {
      address: { 
        title: t('contactInfo.address.title'), 
        line1: t('contactInfo.address.line1'), 
        line2: t('contactInfo.address.line2') 
      },
      phone: { 
        title: t('contactInfo.phone.title'), 
        number: t('contactInfo.phone.number') || '+255782825692' 
      },
      email: { 
        title: t('contactInfo.email.title'), 
        address: 'info@latanzanieaucoeurdelanature.com' 
      },
      hours: { 
        title: t('contactInfo.hours.title'), 
        line1: t('contactInfo.hours.line1'), 
        line2: t('contactInfo.hours.line2'), 
        line3: t('contactInfo.hours.line3') 
      }
    },
    urgentHelpTitle: t('urgentHelpTitle'),
    liveChat: t('liveChat'),
    phoneCall: t('phoneCall')
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Compact header */}
      <div className="bg-[#5BC4AF] py-3 px-4 flex items-center justify-between">
        <h1 className="text-white text-lg font-semibold">{t('heroTitle')}</h1>
      </div>

      {/* Main content - fills remaining space */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Form section */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">{messages.formTitle}</h2>
          <ContactFormClient messages={messages} />
        </div>

        {/* Contact info section */}
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <h3 className="text-md font-semibold mb-3 text-gray-800">{messages.contactInfoTitle}</h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-xs text-gray-600">{messages.contactInfo.address.title}</h4>
              <p className="text-xs text-gray-700">{messages.contactInfo.address.line1}</p>
              <p className="text-xs text-gray-700">{messages.contactInfo.address.line2}</p>
            </div>

            <div>
              <h4 className="font-medium text-xs text-gray-600">{messages.contactInfo.phone.title}</h4>
              <p className="text-xs text-gray-700">{messages.contactInfo.phone.number}</p>
            </div>

            <div>
              <h4 className="font-medium text-xs text-gray-600">{messages.contactInfo.email.title}</h4>
              <p className="text-xs text-gray-700">{messages.contactInfo.email.address}</p>
            </div>

            <div>
              <h4 className="font-medium text-xs text-gray-600">{messages.contactInfo.hours.title}</h4>
              <p className="text-xs text-gray-700">{messages.contactInfo.hours.line1}</p>
              <p className="text-xs text-gray-700">{messages.contactInfo.hours.line2}</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <h4 className="font-medium text-xs text-gray-600 mb-2">{messages.urgentHelpTitle}</h4>
            <div className="flex gap-2">
              <button className="flex-1 border border-gray-300 rounded py-1.5 text-xs">{messages.liveChat}</button>
              <button className="flex-1 border border-gray-300 rounded py-1.5 text-xs">{messages.phoneCall}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}