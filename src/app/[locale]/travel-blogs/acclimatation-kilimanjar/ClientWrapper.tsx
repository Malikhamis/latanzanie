'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthorMeta from '@/components/ui/AuthorMeta';
import TOC from '@/components/ui/TOC';

type ClientWrapperProps = {
  locale: string;
};

export default function ClientWrapper({ locale }: ClientWrapperProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const sections = [
    { id: 'introduction', title: 'Pole Pole&quot; et &quot;Monter haut, dormir bas&quot; : Comment bien s&apos;acclimater sur le Kilimandjaro' },
    { id: 'pole-pole', title: 'Pole Pole&quot; : Avancer lentement pour protéger votre santé' },
    { id: 'monter-dormir', title: 'Monter haut, dormir bas&quot; : Optimiser la récupération nocturne' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <>
      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author="Guide Local"
            date="2024"
            readingTime="5 min"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title="Sommaire"
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }); }}
          />
        </div>
      </section>

      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC
                  title="Sommaire"
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={(id: string) => { setExpandedSections({ ...expandedSections, [id]: true }); }}
                />
              </div>
            </aside>
            <div className="flex-1 space-y-8">
              {/* Introduction */}
              <section id="introduction" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pole Pole&quot; et &quot;Monter haut, dormir bas&quot; : Comment bien s&apos;acclimater sur le Kilimandjaro
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Gravir le Kilimandjaro est bien plus qu&apos;une simple randonnée : c&apos;est un véritable défi pour le corps. L&apos;<Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link> impose des contraintes physiologiques importantes, car l&apos;oxygène se fait plus rare à mesure que l&apos;on monte. Pour un randonnéeur, atteindre le sommet en toute sécurité ne dépend pas seulement de la <Link href={`/${locale}/travel-blogs/niveau-physique-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">force physique</Link>, mais surtout de la capacité du corps à s&apos;acclimater progressivement.</p>
                  <p className="mb-4">Le <Link href={`/${locale}/travel-blogs/sante-en-altitude`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">Mal Aigu des Montagnes (MAM)</Link> peut survenir rapidement si l&apos;acclimatation est insuffisante, entraînant des maux de tête, fatigue intense, nausées ou essoufflement. Pour réduire ces risques et maximiser les chances de succès, deux principes simples mais essentiels sont appliqués sur toutes mes ascensions : &quot;Pole Pole&quot; et &quot;monter haut, dormir bas&quot;.</p>
                  <p className="mb-4">L&apos;acclimatation est un processus qui nécessite du temps et de la patience.</p>
                </div>
              </section>

              {/* Pole Pole */}
              <section id="pole-pole" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pole Pole&quot; : Avancer lentement pour protéger votre santé
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Pole Pole&quot;, qui signifie lentement, doucement en swahili, est bien plus qu&apos;une expression : c&apos;est une règle de sécurité en haute <Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link>.</p>
                  <p className="mb-4">Monter trop rapidement empêche le corps de s&apos;adapter au manque d&apos;oxygène. Les muscles, le cerveau et le cœur sont alors soumis à un stress important, ce qui augmente le risque de <Link href={`/${locale}/travel-blogs/sante-en-altitude`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">MAM</Link>. À l&apos;inverse, un rythme lent et régulier permet au corps de produire progressivement plus de globules rouges, essentiels pour transporter l&apos;oxygène.</p>
                  <p className="mb-4">Avantages du rythme &quot;Pole Pole&quot; :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Réduction de la fatigue et de l&apos;essoufflement</li>
                    <li>Diminution du risque de maux de tête et nausées</li>
                    <li>Meilleure régulation de la respiration et du rythme cardiaque</li>
                  </ul>
                  <p className="mb-4">Conseil pratique : Faites de petites pauses fréquentes, observez votre respiration et écoutez les signaux de votre corps. Même si le rythme semble lent, il augmente considérablement vos chances de succès sur le Kilimandjaro.</p>
                </div>
              </section>

              {/* Monter haut, dormir bas */}
              <section id="monter-dormir" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Monter haut, dormir bas&quot; : Optimiser la récupération nocturne
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Ce principe consiste à gravir une <Link href={`/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro`} className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link> plus élevée pendant la journée puis redescendre pour dormir. L&apos;exposition temporaire à une altitude supérieure stimule l&apos;adaptation du corps, tandis que le sommeil à une altitude plus basse permet une récupération optimale avec plus d&apos;oxygène disponible.</p>
                  <p className="mb-4">Exemple concret : Monter à 4,000 mètres pendant la journée, puis redescendre à 3,200 mètres pour passer la nuit.</p>
                  <p className="mb-4">Bénéfices :</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Stimulation de la production de globules rouges</li>
                    <li>Réduction du risque de MAM sévère</li>
                    <li>Sommeil plus réparateur pour mieux récupérer et continuer l&apos;ascension</li>
                  </ul>
                </div>
              </section>

              {/* Conclusion */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">L&apos;acclimatation est la clé du succès lors de l&apos;ascension du Kilimandjaro. En respectant les principes de &quot;Pole Pole&quot; et &quot;monter haut, dormir bas&quot;, vous augmentez considérablement vos chances d&apos;atteindre le sommet en bonne santé.</p>
                  <p className="mb-4">Souvenez-vous que chaque montée est unique, et que votre corps réagit différemment selon les conditions. Écoutez vos signaux corporels et adaptez-vous en conséquence.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}