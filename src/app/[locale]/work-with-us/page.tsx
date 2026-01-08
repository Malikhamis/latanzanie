'use client'

import { useState } from 'react'
import { Briefcase, Heart, Mail, Phone, MapPin } from 'lucide-react'

export default function WorkWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Partnership request:', formData)
    // Reset form
    setFormData({ name: '', company: '', email: '', message: '' })
    alert('Votre demande de partenariat a été envoyée avec succès!')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl text-gray-900 mb-4">
              Collaborons pour des ascensions responsables et authentiques du Kilimandjaro
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Collaborons pour offrir des ascensions responsables et authentiques du Kilimandjaro
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-6">
                Vous êtes une agence de voyage, un tour-opérateur, un guide indépendant, une entreprise ou un créateur de voyages d'aventure ?
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous serions ravis de collaborer avec vous.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En tant que guide local certifié du Kilimandjaro, né et basé en Tanzanie, je propose des partenariats solides fondés sur la sécurité, l'éthique et l'expérience terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-12">
              Pourquoi travailler avec nous ?
            </h2>
            
            <div className="space-y-12">
              <div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-4">
                    ❤️ Nous aimons profondément ce que nous faisons
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Guider sur le Kilimandjaro est bien plus qu'un travail pour nous. C'est une passion, une fierté et une responsabilité. Cet amour de la montagne se reflète dans notre engagement, notre énergie sur le terrain et la qualité de chaque ascension que nous encadrons.
                  </p>
                </div>
              </div>
              
              <div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-4">
                    🤝 Un partenaire fiable et transparent
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Travailler avec nous, c'est choisir un partenaire :
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>1) ponctuel et organisé,</li>
                    <li>2) clair sur les coûts et la logistique,</li>
                    <li>3) Personnalisation : Des itinéraires adaptés aux besoins spécifiques de vos clients.</li>
                    <li>4) engagé dans une communication simple et honnête.</li>
                    <li>5) Éthique & Respect : Une gestion humaine des équipes (porteurs et cuisiniers).</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Nous construisons des partenariats durables, basés sur la confiance.
                  </p>
                </div>
              </div>
              
              <div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-4">
                    ⭐ Une expérience centrée sur le client
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    La réussite, la sécurité et le bien-être des clients sont toujours notre priorité. Chaque programme est adapté au niveau, aux attentes et aux objectifs du groupe.
                  </p>
                </div>
              </div>
              
              <div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-4">
                    🤍 Plus qu'une collaboration, une aventure partagée
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nous ne cherchons pas seulement des partenaires, mais des collaborateurs qui partagent les mêmes valeurs : passion, respect, professionnalisme et amour de la montagne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">
              Me contacter
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Nom & prénom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Entrez votre nom complet"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Société/Marque</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Nom de votre société ou marque"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Décrivez votre projet de partenariat..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#00A896] hover:bg-[#008576] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                Envoyer ma demande de partenariat
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}
