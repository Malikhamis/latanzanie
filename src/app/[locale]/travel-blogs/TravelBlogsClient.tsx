"use client";

// Simplified version to avoid prerendering issues
'use client';

import TopicCard from '@/components/ui/TopicCard';
import '../../tailgrid.css';
import { useState, useEffect } from 'react';

export default function TravelBlogsClient({ params }: { params?: { locale?: string } }) {
	const [mounted, setMounted] = useState(false);
	const locale = params?.locale || 'en';

	useEffect(() => {
		setMounted(true);
	}, []);

	// Don't render on server to avoid prerender issues
	if (!mounted) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bg-gray-50 flex flex-col min-h-screen">
			<div className="flex-grow">
				{/* Hero Section - Knowledge Library Style */}
				<section className="bg-white py-16">
					<div className="container mx-auto px-4">
						<div className="text-center max-w-3xl mx-auto">
							<h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
								{locale === 'fr' ? 'Connaissance & Guides' : 'Knowledge & Guides'}
							</h1>
							<p className="text-lg text-gray-700 leading-relaxed">
								{locale === 'fr' ? 'Guides, conseils et articles pratiques pour grimper le Kilimandjaro' : 'Guides, tips and practical articles for climbing Kilimanjaro'}
							</p>
						</div>
					</div>
				</section>

				{/* Categories Section (custom cards only) */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{locale === 'fr' ? 'Choisissez un sujet' : 'Choose a topic'}</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<TopicCard
								key="climb-kilimanjaro"
								title="Kilimandjaro"
								imageSrc="/images/thero.jpg"
								href={`/${locale}/travel-blogs/climb-kilimanjaro`}
							/>
							<TopicCard
								key="safari-tanzanie"
								title="Safari en Tanzanie"
								imageSrc="/images/tanzania-safari.jpg"
								href={`/${locale}/travel-blogs/tanzania-safari`}
							/>
							<TopicCard
								key="vacances-zanzibar"
								title="Vacances à Zanzibar"
								imageSrc="/images/zanzibar-beach-holidays.jpg"
								href={`/${locale}/travel-blogs/zanzibar-beach-holidays`}
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
