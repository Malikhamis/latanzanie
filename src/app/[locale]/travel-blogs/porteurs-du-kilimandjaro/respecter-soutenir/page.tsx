"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import AuthorMeta from "@/components/ui/AuthorMeta";
import TOC from "@/components/ui/TOC";
import Image from "next/image";
import "../../../../tailgrid.css";

export default function RespecterSoutenirPage() {
  const locale = useLocale();
  const author = locale === "fr" ? "Par un guide local" : "By a local guide";
  const date = "2025-12-17";
  const readingTime = locale === "fr" ? "5 min de lecture" : "5 min read";

  const sections = [
    {
      id: "introduction",
      title: locale === "fr" ? "Comment respecter et soutenir les porteurs" : "How to respect and support porters",
      content: `Lorsqu’on rêve de gravir le Kilimandjaro, il est facile de se concentrer uniquement sur son propre objectif : atteindre le sommet. Pourtant, chaque expédition repose sur le travail acharné des porteurs, véritables piliers de l’ascension. Respecter et soutenir ces hommes et femmes est non seulement une question d’éthique, mais aussi un moyen d’assurer la sécurité et le bon déroulement du trek.`
    },
    {
      id: "limites-charge",
      title: locale === "fr" ? "Respecter les limites de charge" : "Respect weight limits",
      content: `Les porteurs transportent déjà des charges importantes, souvent jusqu’à 20 kg, qui incluent tentes, nourriture, sacs de couchage et matériel de cuisine. Les voyageurs doivent éviter de demander aux porteurs de transporter leurs objets personnels de façon excessive. Respecter la limite de poids légale permet de prévenir les blessures et l’épuisement, et montre que l’on reconnaît l’importance de leur travail.`
    },
    {
      id: "dignite-politesse",
      title: locale === "fr" ? "Traiter les porteurs avec dignité et politesse" : "Treat porters with dignity and politeness",
      content: `Les porteurs ne sont pas des serviteurs : ce sont des professionnels qui assurent la réussite du trek. Les voyageurs doivent toujours les traiter avec respect, éviter les comportements arrogants ou exigeants, et remercier régulièrement pour leur effort. Un simple mot de reconnaissance ou un sourire peut avoir un impact positif énorme sur le moral d’un porteur.`
    },
    {
      id: "suivre-guides",
      title: locale === "fr" ? "Suivre les recommandations des guides" : "Follow the guides' recommendations",
      content: `Les guides locaux sont là pour coordonner le groupe et veiller à la sécurité des porteurs. Écouter leurs consignes, ne pas marcher trop vite ou perturber la répartition des charges, et respecter le rythme prévu permet aux porteurs de travailler dans de bonnes conditions et réduit le risque d’accident.`
    },
    {
      id: "pourboires-equitables",
      title: locale === "fr" ? "Contribuer aux pourboires de manière équitable" : "Contribute fair tips",
      content: `Le pourboire est une part importante du revenu des porteurs. Les voyageurs responsables prévoient une contribution juste, distribuée de manière transparente et équitable. Cela montre une reconnaissance tangible de l’effort fourni par les porteurs tout au long de l’ascension.`
    },
    {
      id: "bien-etre",
      title: locale === "fr" ? "Être attentif à leur bien-être" : "Be attentive to their well-being",
      content: `Les porteurs travaillent dans des conditions physiques et climatiques difficiles. Les voyageurs peuvent les soutenir en veillant à ne pas créer de situations dangereuses, en partageant parfois de l’eau ou de la nourriture si nécessaire, et en respectant les règles de sécurité établies par l’agence et KPAP.`
    },
    {
      id: "conclusion",
      title: locale === "fr" ? "Conclusion" : "Conclusion",
      content: `Soutenir les porteurs n’est pas seulement un acte de politesse : c’est un engagement éthique et pratique. Respecter leur travail, leur sécurité et leur dignité rend l’ascension plus sûre et plus humaine pour tous, tout en valorisant ceux qui rendent chaque sommet possible.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero + back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>
      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta author={author} date={date} readingTime={readingTime} />
        </div>
      </section>
      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} />
        </div>
      </section>
      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} />
              </div>
            </aside>
            <div className="flex-1 space-y-8">
              {sections.map(s => (
                <section key={s.id} id={s.id} className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{s.title}</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">{s.content}</div>
                </section>
              ))}
              {/* Canonical route cards section (after notes) */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
                    <p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
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
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
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
                      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
