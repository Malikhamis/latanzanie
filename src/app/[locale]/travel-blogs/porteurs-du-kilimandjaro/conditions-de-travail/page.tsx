"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import AuthorMeta from "@/components/ui/AuthorMeta";
import TOC from "@/components/ui/TOC";
import Image from "next/image";
import "../../../../tailgrid.css";

export default function ConditionsDeTravailPage() {
  const locale = useLocale();
  const author = locale === "fr" ? "Par un guide local" : "By a local guide";
  const date = "2025-12-17";
  const readingTime = locale === "fr" ? "7 min de lecture" : "7 min read";

  const sections = [
    {
      id: "introduction",
      title: locale === "fr" ? "Conditions de travail des porteurs" : "Porters' working conditions",
      content: `Gravir le Mont Kilimandjaro est un rêve pour beaucoup de randonneurs, mais rares sont ceux qui connaissent la réalité derrière chaque ascension réussie.
Cette phrase souligne que l’expérience des randonneurs ne reflète pas la véritable complexité de l’ascension. Beaucoup se concentrent sur le sommet et les paysages, sans réaliser que chaque pas, chaque tente montée et chaque repas préparé dépend d’un travail invisible mais crucial : celui des porteurs.

Les porteurs, véritables piliers de l’expédition, assurent que le matériel, la nourriture et les camps soient prêts pour les randonneurs.
Ici, on met en avant le rôle central des porteurs. Ils ne se contentent pas de porter des charges ; ils garantissent que tout fonctionne pour que les randonneurs puissent marcher plus léger, dormir au chaud et manger correctement. Sans eux, une ascension serait non seulement plus difficile, mais parfois impossible.

Cependant, leur travail se déroule dans des conditions souvent extrêmement exigeantes.
Cette phrase introduit la difficulté réelle de leur métier : terrains difficiles, altitude élevée, météo extrême et lourdes charges.`
    },
    {
      id: "charges-longues-journees",
      title: locale === "fr" ? "Des charges lourdes et des journées longues" : "Heavy loads and long days",
      content: `Les porteurs transportent quotidiennement des sacs pesant jusqu’à 20 kg, comprenant tentes, sacs de couchage, nourriture, eau et matériel de cuisine.
Cette phrase montre concrètement ce que chaque porteur porte : tout le nécessaire pour l’expédition entière. Ce poids ne concerne pas uniquement leurs affaires, mais celles de toute l’équipe, ce qui nécessite une force et une endurance remarquables.

Certaines expéditions plus anciennes ou moins réglementées imposaient parfois des charges plus lourdes, ce qui augmentait considérablement les risques de blessures.
Avant l’instauration de règles strictes comme celles du KPAP, les porteurs devaient parfois transporter beaucoup plus que leur capacité physique. Cela provoquait fatigue extrême, douleurs chroniques et blessures. 

Chaque journée de marche peut durer 6 à 10 heures, sur des sentiers escarpés, boueux ou rocheux, avec des pentes raides et parfois des zones glaciaires près du sommet.
Ceci précise l’extrême exigence physique du travail. Marcher de longues heures avec des charges lourdes sur des terrains difficiles demande une endurance exceptionnelle, et chaque faux pas peut provoquer un accident.

Ces longues journées demandent une endurance physique exceptionnelle. Les porteurs doivent marcher rapidement tout en maintenant la stabilité des charges, adapter leur rythme à l’altitude et assurer la sécurité des randonneurs qui les suivent.`
    },
    {
      id: "defis-altitude-climat",
      title: locale === "fr" ? "Les défis liés à l’altitude et au climat" : "Altitude and climate challenges",
      content: `À mesure que l’on monte sur le Kilimandjaro, l’air devient plus rare et plus froid. Les porteurs doivent travailler dans des conditions où l’oxygène est limité, ce qui augmente la fatigue et la difficulté de porter des charges lourdes.
Cette phrase explique le défi physiologique : moins d’oxygène = effort plus intense, fatigue plus rapide, risque de mal aigu des montagnes. Cela montre que leur travail est beaucoup plus difficile que celui d’un randonneur qui transporte un sac léger.

Les conditions climatiques sont également imprévisibles : pluie, vent, froid intense, neige ou brouillard peuvent rendre la marche dangereuse. Les porteurs doivent rester concentrés et résilients pour éviter les accidents et protéger le matériel.
Ici, on met en avant la vigilance constante et l’adaptabilité requises. Les porteurs doivent non seulement porter des charges, mais aussi anticiper les risques et protéger le groupe et le matériel.

Cette combinaison de charge lourde, d’altitude et de climat extrême rend leur travail très exigeant.
Cette phrase résume l’ampleur du défi : physique, mental et environnemental. Le lecteur comprend que les porteurs accomplissent un travail exceptionnel qui dépasse la simple logistique.`
    },
    {
      id: "organisation-rythme",
      title: locale === "fr" ? "L’organisation et le rythme de travail" : "Organization and work rhythm",
      content: `Pour gérer ces conditions difficiles, les porteurs suivent une organisation stricte.
L’organisation n’est pas optionnelle : elle est vitale pour que tout le monde reste en sécurité et que les charges restent équilibrées.

Les charges sont réparties pour respecter la limite de 20 kg, les plus expérimentés avancent en tête pour préparer les camps et sécuriser le chemin, tandis que d’autres suivent pour équilibrer les charges et aider en cas de difficulté.
Cette phrase montre la coordination et la stratégie : chaque porteur a un rôle précis, la répartition des charges est calculée, et la progression est collective. Cela permet de protége`
    },
    {
      id: "agence-responsable",
      title: locale === "fr" ? "Comment une agence responsable traite-t-elle ses porteurs ?" : "How does a responsible agency treat its porters?",
      content: `Gravir le Kilimandjaro est une aventure incroyable, mais ce qui fait réellement réussir une expédition, ce sont les porteurs. Une agence responsable comprend que leur rôle va bien au-delà de transporter des charges : ce sont eux qui assurent la sécurité, la logistique et le bon déroulement du trek. La manière dont une agence traite ses porteurs reflète directement son éthique et son professionnalisme.

Pour commencer, une agence responsable veille à ce que les porteurs ne dépassent jamais la limite légale de 20 kg. Cette règle n’est pas là pour être arbitraire : elle protège la santé des porteurs, réduit le risque de blessures et permet de maintenir un rythme sûr pour tout le groupe. Chaque sac est réparti de manière stratégique, les tentes, la nourriture et les équipements étant distribués afin que personne ne soit surchargé et que chacun puisse marcher en sécurité, même sur les pentes raides ou en altitude.

Ensuite, une agence responsable fournit un équipement adapté. Les porteurs reçoivent des chaussures robustes, des gants, des vestes chaudes et parfois des bâtons pour soutenir leur équilibre. L’accès à l’eau potable et à une nourriture suffisante est aussi garanti, car il est impossible de travailler efficacement si les besoins de base ne sont pas respectés. Ces mesures permettent aux porteurs de rester en bonne santé, de réduire la fatigue et d’accomplir leur travail avec efficacité, même dans des conditions climatiques extrêmes.

La rémunération et le respect sont également essentiels. Une agence responsable s’assure que chaque porteur est payé équitablement et reçoit des pourboires transparents. Les pauses sont planifiées pour permettre la récupération, et les soins médicaux sont disponibles en cas de besoin. Au-delà de l’argent, le respect quotidien est crucial : reconnaître leur rôle, écouter leurs besoins et traiter chaque porteur avec dignité transforme leur travail en une expérience valorisante et sûre.

Enfin, une agence responsable organise le trek avec précision pour protéger les porteurs. Le rythme des marches, la répartition des camps et l’ordre des porteurs sur le sentier sont pensés pour maximiser la sécurité et réduire la fatigue. Les plus expérimentés aident les autres et garantissent que tout se déroule harmonieusement. Chaque décision prise par l’agence reflète la compréhension que le succès de l’expédition dépend autant des porteurs que des randonneurs.`
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
