import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { LocaleFooter } from '@/components/LocaleFooter';
import { getNavigationData } from '@/lib/sanity/fetch';
import type { Park } from '@/types/park';
import { Metadata } from 'next';
import { OrganizationSchema } from '@/components/StructuredData';

// Define the supported locales
const locales = ['fr', 'en'];

// Dynamic rendering for all locale pages
// This allows next-intl to handle locale routing dynamically

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const translations = {
    fr: {
      title: "La Tanzanie au Cœur de la Nature | Safaris Authentiques & Kilimandjaro",
      description: "Découvrez la Tanzanie authentique avec nos safaris éthiques, l'ascension du Kilimandjaro et les plages paradisiaques de Zanzibar. Guides locaux experts, tourisme responsable.",
    },
    en: {
      title: "Tanzania at Heart of Nature | Authentic Safaris & Kilimanjaro",
      description: "Discover authentic Tanzania with our ethical safaris, Kilimanjaro climbs and paradisiacal Zanzibar beaches. Expert local guides, responsible tourism.",
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.fr;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://www.latanzanieaucourdelanature.com/${locale}`,
      siteName: 'La Tanzanie au Cœur de la Nature',
      images: [
        {
          url: '/images/kilimanjaro-summit.jpg',
          width: 1200,
          height: 630,
          alt: 'Tanzania Safari and Kilimanjaro',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/kilimanjaro-summit.jpg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params before using them
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as typeof locales[number])) notFound();

  // Providing all messages to the client side for the specific locale
  const messages = await getMessages({ locale });
  // Diagnostic logs to help debug missing translation keys (remove after debugging)
  try {
    // Print top-level namespaces and specifically check MaranguRoutePage
    // This will appear in the Next.js server terminal output
     
    console.log('[i18n] loaded message namespaces for', locale, Object.keys(messages));
     
    console.log('[i18n] MaranguRoutePage present?', Boolean((messages as Record<string, unknown>).MaranguRoutePage));
    if ((messages as any).MaranguRoutePage) {
       
      console.log('[i18n] datesAndPrices keys:', Object.keys(((messages as Record<string, unknown>).MaranguRoutePage as Record<string, unknown>)?.datesAndPrices || {}));
    }
  } catch (e) {
     
    console.error('[i18n] diagnostic log failed', e);
  }
  
  // Fetch navigation data (typed). Be defensive: if the fetch fails for any
  // reason, fall back to an empty array to avoid crashing prerender.
  let parks: Array<Pick<Park, '_id' | 'title' | 'slug'>> = []
  try {
    parks = await getNavigationData()
  } catch (e) {
     
    console.warn('[nav] getNavigationData failed, falling back to empty nav', e)
    parks = []
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <OrganizationSchema locale={locale} />
      <Navigation parks={parks} />
      <main className="flex-grow md:pt-16 pt-0 pb-16 md:pb-0">
        {children}
      </main>
      <LocaleFooter />
    </NextIntlClientProvider>
  );
}