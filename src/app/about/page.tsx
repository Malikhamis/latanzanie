import { Button } from '@/components/ui/button'
import '../tailgrid.css'

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "John Mwakasungula",
      role: "Fondateur & Expert Safari",
      bio: "Avec plus de 15 ans d'expérience dans la conservation de la faune tanzanienne et le tourisme, John apporte une expertise inégalée à chaque aventure."
    },
    {
      id: 2,
      name: "Sarah Kimaro",
      role: "Guide d'escalade & Montagnarde",
      bio: "Guide certifiée du Kilimandjaro avec plusieurs tentatives réussies d'ascension, Sarah garantit des expériences d'escalade sûres et mémorables."
    },
    {
      id: 3,
      name: "Michael Nkamba",
      role: "Spécialiste culturel",
      bio: "Michael connecte les voyageurs avec la culture tanzanienne authentique grâce à des expériences communautaires soigneusement organisées."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section with diagonal line */}
      <div className="relative h-96 bg-gradient-to-r from-[#5BC4AF] to-[#008576] flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Notre histoire
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrir les merveilles naturelles de la Tanzanie à travers des expériences authentiques
          </p>
        </div>
        
        {/* Diagonal line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-12">
          <div 
            className="h-full w-full" 
            style={{ 
              clipPath: 'polygon(0 0, 100% 100%, 100% 0)',
              background: 'linear-gradient(to bottom right, #f3f4f6 50%, transparent 50%)'
            }}
          ></div>
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 max-w-7xl mx-auto px-4">
        {/* Our Mission */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">
                Notre mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chez Latanzanieaucourdelanature, nous croyons que le voyage doit être transformateur. 
                Notre mission est de connecter les voyageurs avec les paysages les plus spectaculaires de la Tanzanie 
                tout en soutenant les communautés locales et en préservant l'environnement naturel pour les générations futures.
              </p>
              <p className="text-lg text-gray-600">
                Nous nous engageons en faveur d'un tourisme responsable qui respecte à la fois la faune et les cultures locales, 
                en veillant à ce que chaque voyage contribue positivement aux lieux et aux personnes que nous visitons.
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
        </section>

        {/* Timeline/Story */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-gray-800">
            Notre parcours
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#B8EDE3]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">2010</h3>
                    <h4 className="text-lg font-semibold mb-3 text-[#00A896]">Le commencement</h4>
                    <p className="text-gray-600">
                      Fondée par des guides tanzaniens locaux passionnés par le partage de la beauté naturelle 
                      incroyable de leur pays natal avec le monde entier.
                    </p>
                  </div>
                </div>
                <div className="md:pl-12 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#00A896] border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:order-2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">2015</h3>
                    <h4 className="text-lg font-semibold mb-3 text-[#00A896]">Reconnaissance internationale</h4>
                    <p className="text-gray-600">
                      Reconnue par National Geographic comme l'un des principaux opérateurs touristiques durables 
                      d'Afrique de l'Est pour nos efforts de conservation.
                    </p>
                  </div>
                </div>
                <div className="md:order-1 md:pr-12 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#00A896] border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">2020</h3>
                    <h4 className="text-lg font-semibold mb-3 text-[#00A896]">Partenariat communautaire</h4>
                    <p className="text-gray-600">
                      Élargi nos programmes pour inclure des initiatives de tourisme communautaire, 
                      bénéficiant directement aux villages locaux près de nos destinations.
                    </p>
                  </div>
                </div>
                <div className="md:pl-12 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#00A896] border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:order-2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-serif font-bold mb-2 text-gray-800">2025</h3>
                    <h4 className="text-lg font-semibold mb-3 text-[#00A896]">Vers l'avenir</h4>
                    <p className="text-gray-600">
                      Continuer à innover dans le tourisme durable tout en élargissant nos offres 
                      pour inclure de nouvelles destinations et expériences à travers la Tanzanie.
                    </p>
                  </div>
                </div>
                <div className="md:order-1 md:pr-12 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#00A896] border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-gray-800">
            Découvrez notre équipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#00A896] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">
            Prêt à découvrir la Tanzanie ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour un voyage inoubliable à travers les paysages les plus spectaculaires de la Tanzanie.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#72D9C4] to-[#00A896] hover:from-[#5BC4AF] hover:to-[#008576] text-white"
            asChild
          >
            <a href="/contact">Planifiez votre aventure</a>
          </Button>
        </div>
      </div>
    </div>
  )
}