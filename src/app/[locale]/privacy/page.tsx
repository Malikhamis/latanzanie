'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ChevronDown, Shield, FileText, Lock, Eye, Users, Server } from 'lucide-react'
import { Hero } from '@/components/Hero'

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage')
  const [openSection, setOpenSection] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index)
  }

  // Privacy content sections
  const privacySections = [
    {
      id: 1,
      title: "Collecte de vos Informations Personnelles",
      icon: <Shield className="w-6 h-6" />,
      content: `
        <p>Nous collectons plusieurs types d'informations dans le but de vous fournir une expérience exceptionnelle sur nos safaris et de vous offrir un service amélioré :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li><strong>Informations personnelles :</strong> Nom complet, adresse e-mail, numéro de téléphone, date de naissance, préférences de voyage</li>
          <li><strong>Informations de paiement :</strong> Détails de carte de crédit/débit (traités via un système de paiement sécurisé tiers)</li>
          <li><strong>Informations de voyage :</strong> Dates de voyage préférées, destinations, nombre de voyageurs, préférences d'hébergement</li>
          <li><strong>Informations techniques :</strong> Adresse IP, type de navigateur, pages visitées sur notre site</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Utilisation de vos Informations",
      icon: <FileText className="w-6 h-6" />,
      content: `
        <p>Nous utilisons les informations collectées pour :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Traiter et gérer vos réservations de safari</li>
          <li>Personnaliser votre expérience de voyage</li>
          <li>Communiquer avec vous concernant vos réservations et services</li>
          <li>Améliorer nos services et votre expérience utilisateur</li>
          <li>Vous envoyer des newsletters et offres promotionnelles (avec votre consentement)</li>
          <li>Assurer la sécurité et prévenir la fraude</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Partage de vos Informations",
      icon: <Users className="w-6 h-6" />,
      content: `
        <p>Nous ne vendons, ne louons ni ne commercialisons vos informations personnelles. Nous partageons vos informations uniquement dans les situations suivantes :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Avec des prestataires de services tiers (hébergement, transport) pour exécuter vos réservations</li>
          <li>Avec des autorités légales si requis par la loi</li>
          <li>Avec vos consentement explicite</li>
          <li>Dans le cadre d'une fusion ou acquisition (avec notification préalable)</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Sécurité de vos Données",
      icon: <Lock className="w-6 h-6" />,
      content: `
        <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Chiffrement SSL pour toutes les transmissions de données</li>
          <li>Serveurs sécurisés derrière pare-feux</li>
          <li>Accès restreint aux employés autorisés seulement</li>
          <li>Sauvegardes régulières et protocoles de récupération</li>
          <li>Contrôles d'accès physiques et logiques aux installations</li>
        </ul>
      `
    },
    {
      id: 5,
      title: "Vos Droits",
      icon: <Eye className="w-6 h-6" />,
      content: `
        <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Droit d'accès à vos données personnelles</li>
          <li>Droit de rectification de vos données inexactes</li>
          <li>Droit à l'effacement de vos données</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit de vous opposer au traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p class="mt-3">Pour exercer ces droits, contactez-nous à info@latanzanieaucoeurdelanature.com</p>
      `
    },
    {
      id: 6,
      title: "Cookies et Technologies Similaires",
      icon: <Server className="w-6 h-6" />,
      content: `
        <p>Nous utilisons des cookies et technologies similaires pour :</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li>Améliorer votre expérience de navigation</li>
          <li>Analyser le trafic et les tendances d'utilisation</li>
          <li>Personnaliser le contenu et les publicités</li>
          <li>Se souvenir de vos préférences</li>
        </ul>
        <p class="mt-3">Vous pouvez configurer votre navigateur pour refuser tous les cookies, mais cela pourrait limiter votre utilisation de certaines fonctionnalités de notre site.</p>
      `
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Privacy Policy Header */}
      <div className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Chez La Tanzanie au Cœur de la Nature, nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos informations personnelles.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              La présente Politique de Confidentialité décrit comment La Tanzanie au Cœur de la Nature collecte, utilise, divulgue et protège les informations que vous nous fournissez lorsque vous utilisez notre site Web et nos services de réservation de safari en Tanzanie.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cette politique s'applique à toutes les activités de traitement des données effectuées par nos soins, conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables en matière de protection des données.
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          {privacySections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#00A896]">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openSection === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openSection === index && (
                <div 
                  className="px-8 pb-6 pt-2 border-t border-gray-100 animate-fadeIn"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-[#72D9C4] to-[#00A896] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Des Questions sur notre Politique de Confidentialité ?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Si vous avez des questions concernant cette politique ou si vous souhaitez exercer vos droits en matière de protection des données, veuillez nous contacter.
          </p>
          <a 
            href="mailto:info@latanzanieaucoeurdelanature.com" 
            className="inline-block bg-white text-[#00A896] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            info@latanzanieaucoeurdelanature.com
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Cette politique de confidentialité a été mise à jour le {new Date().toLocaleDateString('fr-FR')}.</p>
        </div>
      </div>
    </div>
  )
}