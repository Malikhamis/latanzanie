import type { Metadata } from "next";
import "./globals.css";
import "./tailgrid.css";

// NOTE: Removed `next/font/google` usage to avoid remote font fetching during
// local builds (environments without network access). We rely on the CSS
// in `globals.css` / system font stack instead. If you want to re-enable
// Google Fonts for production, use the `next/font/google` call in a CI
// environment with network access or self-host the fonts.
const geistSans = { variable: "" };
const geistMono = { variable: "" };

export const metadata: Metadata = {
  metadataBase: new URL('https://www.latanzanieaucourdelanature.com'),
  title: {
    default: "La Tanzanie au Cœur de la Nature | Safaris & Ascension du Kilimandjaro",
    template: "%s | La Tanzanie au Cœur de la Nature"
  },
  description: "Découvrez la Tanzanie authentique avec nos safaris éthiques, l'ascension du Kilimandjaro et les plages de Zanzibar. Tourisme responsable avec des guides locaux experts.",
  keywords: ["Tanzanie", "Safari", "Kilimandjaro", "Zanzibar", "Voyage Tanzanie", "Safari authentique", "Ascension Kilimandjaro", "Tourisme éthique", "Parc Serengeti", "Cratère Ngorongoro"],
  authors: [{ name: "La Tanzanie au Cœur de la Nature" }],
  creator: "La Tanzanie au Cœur de la Nature",
  publisher: "La Tanzanie au Cœur de la Nature",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    url: 'https://www.latanzanieaucourdelanature.com',
    siteName: 'La Tanzanie au Cœur de la Nature',
    title: 'La Tanzanie au Cœur de la Nature | Safaris & Kilimandjaro',
    description: 'Découvrez la Tanzanie authentique avec nos safaris éthiques et ascensions du Kilimandjaro. Tourisme responsable avec des guides locaux experts.',
    images: [
      {
        url: '/images/kilimanjaro-summit.jpg',
        width: 1200,
        height: 630,
        alt: 'Ascension du Kilimandjaro avec La Tanzanie au Cœur de la Nature',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Tanzanie au Cœur de la Nature | Safaris & Kilimandjaro',
    description: 'Safaris éthiques et ascensions du Kilimandjaro en Tanzanie avec des guides locaux experts',
    images: ['/images/kilimanjaro-summit.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/fr',
      'en': '/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}