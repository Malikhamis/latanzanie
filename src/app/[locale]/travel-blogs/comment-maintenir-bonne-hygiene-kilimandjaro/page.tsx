 'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale, useTranslations } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

// Helper function to process route links in text
function processRouteLinks(text: string, locale: string) {
  // Split text by the route names to create an array of parts
  const parts = text.split(/(Machame|Lemosho|Marangu)/gi);
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    if (lowerPart === 'machame') {
      return (
        <Link 
          key={`route-link-${index}`}
          href={`/${locale}/trips/machame-route`}
          className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
        >
          {part}
        </Link>
      );
    } else if (lowerPart === 'lemosho') {
      return (
        <Link 
          key={`route-link-${index}`}
          href={`/${locale}/trips/lemosho-route`}
          className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
        >
          {part}
        </Link>
      );
    } else if (lowerPart === 'marangu') {
      return (
        <Link 
          key={`route-link-${index}`}
          href={`/${locale}/trips/marangu-route`}
          className="text-[#00A896] hover:text-[#008576] font-medium font-medium"
        >
          {part}
        </Link>
      );
    } else {
      return part;
    }
  });
}

// Content moved to FR_SECTIONS object


const FR_TITLES: Record<string,string> = {
	overview: 'Comment maintenir une bonne hygiène au Kilimandjaro',
	conditions: 'Comprendre les conditions d’hygiène sur le Kilimandjaro',
	noShower: 'Pas de douche sur le Kilimandjaro',
	camps: 'Des camps rustiques et autonomie',
	toiletsIntro: 'Les différents types de toilettes',
	publicToilets: 'Les toilettes publiques des camps',
	privateToilets: 'Les toilettes portables privées',
	mental: 'Préparation mentale et physique'
}

const FR_SECTIONS: Record<string,string> = {
	overview: `Guide pratique par un guide local du Kilimandjaro

L’ascension du mont Kilimandjaro est une aventure exceptionnelle, mais elle se déroule dans des conditions très différentes du quotidien. L’un des sujets les plus sous-estimés par les randonneurs est l’hygiène personnelle. Sans douches, avec une eau limitée et des camps isolés, beaucoup se demandent comment rester propre pendant plusieurs jours de trek.

La réalité est simple : une bonne hygiène sur le Kilimandjaro est indispensable pour rester en bonne santé et réussir le sommet. En tant que guide local, je constate souvent que les grimpeurs qui respectent les règles d’hygiène sont ceux qui terminent le trek dans les meilleures conditions.
`,

	conditions: `Avant de partir à l’ascension du mont Kilimandjaro, il est essentiel de comprendre une réalité simple : le confort moderne n’existe pas sur la montagne. Le Kilimandjaro est une zone naturelle protégée, sans infrastructures hôtelières, et l’hygiène y fonctionne selon des règles très différentes de celles du quotidien.
`,

	noShower: `Il n’y a aucune douche sur le mont Kilimandjaro, quelle que soit la voie choisie (Machame, Lemosho, Marangu, Rongai ou Northern Circuit). L’eau disponible en montagne est une ressource précieuse, collectée depuis des rivières ou des sources naturelles, puis traitée par l’équipe.

Cette eau est prioritairement utilisée pour :

1) La boisson

2) La préparation des repas

3) Le lavage des mains et de la vaisselle

Il n’est donc pas possible de se laver entièrement comme à la maison. L’hygiène repose sur des solutions simples et adaptées à l’environnement.
`,

	camps: `Les camps du mont Kilimandjaro sont volontairement simples et rustiques. Ils ne sont pas conçus pour offrir du confort, mais pour permettre aux randonneurs de se reposer tout en respectant l’environnement fragile de la montagne. Dans chaque camp, on trouve uniquement l’essentiel : des tentes pour dormir, une zone commune pour les repas et des installations sanitaires très basiques.

Dans ces conditions, l’hygiène repose presque entièrement sur l’autonomie personnelle du randonneur. Un sac bien préparé permet de rester propre malgré l’absence d’infrastructures modernes.
`,

	toiletsIntro: `Lorsque l’on parle d’hygiène sur le mont Kilimandjaro, les toilettes sont souvent l’un des premiers sujets qui inquiètent les randonneurs. Comprendre les différentes options disponibles sur la montagne est essentiel pour bien se préparer et éviter les surprises désagréables.
`,

	publicToilets: `Chaque camp sur le Kilimandjaro dispose généralement de toilettes publiques fournies par le parc national. Ces installations sont très simples : il peut s’agir de cabines en bois ou de structures temporaires en plastique. Leur objectif principal est de répondre aux besoins de base, sans offrir de confort moderne.

Quelques points à connaître : elles sont souvent peu entretenues, le papier toilette n’est pas toujours fourni et il n’y a pas d’eau pour se laver les mains. Le gel hydroalcoolique est donc indispensable.
`,

	privateToilets: `Pour améliorer le confort et l’hygiène, certaines équipes de guides installent des toilettes portables privées dans les camps. Ces installations sont beaucoup plus propres, offrent plus d’intimité et sont nettoyées régulièrement. Pour les ascensions de plusieurs jours, les toilettes privées sont fortement recommandées.
`,

	mental: `Gravir le Kilimandjaro ne se résume pas à marcher : c’est un défi mental et émotionnel. La préparation mentale — réduire le stress, éviter les mauvaises surprises et accepter les conditions de vie en altitude — est essentielle pour réussir l’ascension.

> « Sur le Kilimandjaro, l’autonomie n’est pas un choix, c’est une nécessité. Celui qui s’organise bien reste propre, en bonne santé et plus fort jusqu’au sommet. »
`
}

/* 
const contentEn = `Maintaining good personal hygiene on Kilimanjaro

Practical guide from a local Kilimanjaro guide

Climbing Mount Kilimanjaro is an extraordinary adventure, but it takes place in conditions very different from daily life. One often overlooked topic is personal hygiene. With no showers, limited water and remote camps, many trekkers wonder how to stay clean for several days.

Good hygiene on Kilimanjaro is essential to stay healthy and reach the summit. From my experience as a local guide, trekkers who follow basic hygiene routines complete the trek in better condition.

Key points:

- No showers on the mountain: water is scarce and prioritized for drinking, cooking and basic washing.
- Camps are simple and require personal autonomy: bring wipes, hand sanitizer and separate bags for dirty items.
- Portable private toilets greatly improve comfort and reduce health risks; consider booking them when available.

Mental preparation matters: accept simple living conditions, plan for limited water, and keep a nightly routine (cleaning, change of clothes, foot care) to preserve energy and avoid issues.`;
*/

const EN_TITLES: Record<string,string> = {
  overview: 'Maintaining good hygiene on Kilimanjaro',
  conditions: 'Understanding hygiene conditions on Kilimanjaro',
  noShower: 'No showers on Kilimanjaro',
  camps: 'Camps and self-sufficiency',
  toiletsIntro: 'Types of toilets on the mountain',
  publicToilets: 'Public camp toilets',
  privateToilets: 'Private portable toilets',
  mental: 'Mental and physical preparation'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `Maintaining good personal hygiene on Kilimanjaro
  
  Practical guide from a local Kilimanjaro guide
  
  Climbing Mount Kilimanjaro is an extraordinary adventure, but it takes place in conditions very different from daily life. One often overlooked topic is personal hygiene. With no showers, limited water and remote camps, many trekkers wonder how to stay clean for several days.
  
  Good hygiene on Kilimanjaro is essential to stay healthy and reach the summit. From my experience as a local guide, trekkers who follow basic hygiene routines complete the trek in better condition.
  
  Key points:
  
  - No showers on the mountain: water is scarce and prioritized for drinking, cooking and basic washing.
  - Camps are simple and require personal autonomy: bring wipes, hand sanitizer and separate bags for dirty items.
  - Portable private toilets greatly improve comfort and reduce health risks; consider booking them when available.
  
  Mental preparation matters: accept simple living conditions, plan for limited water, and keep a nightly routine (cleaning, change of clothes, foot care) to preserve energy and avoid issues.`,
  conditions: `Modern comforts are absent on the mountain. Expect basic facilities and limited water.`,
  noShower: `There are no showers on any Kilimanjaro route; water is prioritized for drinking and cooking.`,
  camps: `Camps are basic; personal autonomy and preparation are essential for daily hygiene.`,
  toiletsIntro: `Toilets vary from basic shared cabins to optional private portable toilets provided by some operators.`,
  publicToilets: `Public toilets are rudimentary, often without toilet paper or running water — bring supplies.`,
  privateToilets: `Private toilets improve cleanliness, privacy and reduce health risks on multi-day treks.`,
  mental: `Mental preparation helps you accept simple living conditions and maintain routines during the trek.`
}

export default function CommentMaintenirPage() {
	const locale = useLocale()
	const t = useTranslations('BlogPosts.comment-maintenir-bonne-hygiene-kilimandjaro')
	// Removed unused variables: title and subtitle
	const meta = { author: t('meta.author'), date: t('meta.date'), readingTime: t('meta.readingTime') }
	function renderContent(content: string, locale: string) {
		const lines = content.split(/\r?\n/)
		const nodes: JSX.Element[] = []
		let i = 0
		let keyIndex = 0

		while (i < lines.length) {
			if (lines[i].startsWith('>')) {
				const blockLines: string[] = []
				while (i < lines.length && lines[i].startsWith('>')) {
					blockLines.push(lines[i].replace(/^>\s?/, ''))
					i++
				}
					nodes.push(
						<blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-black mb-4">
							{blockLines.join('\n')}
						</blockquote>
					)
				continue
			}

			const para: string[] = []
			while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>')) {
				para.push(lines[i])
				i++
			}
					if (para.length) {
						nodes.push(
							<p key={`p-${keyIndex++}`} className="mb-2 text-black">
								{processRouteLinks(para.join(' '), locale)}
							</p>
						)
					}

			while (i < lines.length && lines[i].trim() === '') {
				i++
			}
		}

		return nodes
	}

	const ids = ['overview','conditions','noShower','camps','toiletsIntro','publicToilets','privateToilets','mental']
	const sections = ids.map(id => ({
			id,
			title: locale === 'fr' ? FR_TITLES[id] ?? id : locale === 'en' ? EN_TITLES[id] ?? id : t(`sections.${id}.title`),
			content: locale === 'fr' ? FR_SECTIONS[id] ?? '' : locale === 'en' ? EN_SECTIONS[id] ?? '' : t(`sections.${id}.content`)
		}))

	return (
		<div className="min-h-screen bg-white">
			<section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}>
				<div className="container mx-auto px-4">
					<Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
						{locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
					</Link>
				</div>
			</section>

			<section className="py-12 border-b border-gray-200">
				<div className="container mx-auto px-4 max-w-4xl">
					<AuthorMeta author={meta.author} date={meta.date} readingTime={meta.readingTime} />
				</div>
			</section>

			<section className="md:hidden py-8 bg-white border-b border-gray-200">
				<div className="container mx-auto px-4">
					<TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-7xl mx-auto md:flex md:gap-8">
						<aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
							<div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
								<TOC title={locale === 'fr' ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
							</div>
						</aside>

						<div className="flex-1 space-y-6">
							<div className="mb-8">
								<h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{locale === 'fr' ? 'Comment maintenir une bonne hygiène au Kilimandjaro' : 'Maintaining good hygiene on Kilimanjaro'}</h1>
								<p className="text-base md:text-lg text-gray-600 max-w-3xl">{locale === 'fr' ? 'Conseils pratiques et indispensables pour rester propre sur le trek.' : 'Practical tips to stay clean on trek.'}</p>
							</div>

							<article id="overview" className="bg-gray-50 rounded-lg shadow-md p-6">
								<div>
									{sections.map(s => (
										<article key={s.id} id={s.id} className="mb-8">
											<h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
														<div className="prose max-w-none text-black">{renderContent(s.content, locale)}</div>
										</article>
									))}
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>

						<section className="py-16 bg-white">
							<div className="container mx-auto px-4 max-w-6xl">
								<div className="text-center mb-12">
									<h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt pour une aventure ?</h2>
									<p className="text-gray-600 text-lg">Explorez nos meilleures routes du Kilimandjaro</p>
								</div>

								<div className="grid md:grid-cols-3 gap-8">
									<div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
										<div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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
											<p className="text-gray-700 mb-4">Conquérir le Toit de l&apos;Afrique : L&apos;Ascension du Kilimandjaro par la Route Marangu en 5 Jours</p>
											<p className="text-gray-600 text-sm mb-4">Envie de vous tenir sur le toit de l&apos;Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !</p>
											<Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
												En savoir plus
											</Link>
										</div>
									</div>

									<div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
										<div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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
											<p className="text-gray-700 mb-4">L&apos;Aventure Panoramique : Itinéraire Lemosho en 7 Jours</p>
											<p className="text-gray-600 text-sm mb-4">La voie Lemosho est réputée comme l&apos;un des itinéraires les plus spectaculaires. Elle offre des vues imprenables sur les flancs ouest et sud du Kilimandjaro.</p>
											<Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
												En savoir plus
											</Link>
										</div>
									</div>

									<div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
										<div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/hygiene-hero.jpg')" }}></div>
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
											<p className="text-gray-700 mb-4">L&apos;Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)</p>
											<p className="text-gray-600 text-sm mb-4">Souvent décrite comme la voie la plus courte et la plus ardue du Kilimandjaro, l&apos;itinéraire Umbwe est parfait pour les randonneurs expérimentés.</p>
											<Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">
												En savoir plus
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
		</div>
	)
}

