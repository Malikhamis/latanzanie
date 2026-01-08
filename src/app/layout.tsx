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
    default: "La Tanzanie au Coeur de la Nature",
    template: "%s | La Tanzanie au Coeur de la Nature"
  },
  description: "Discover authentic Tanzania: safaris, Kilimanjaro climbs, and Zanzibar beaches. Responsible tourism with expert local guides.",
  openGraph: {
    type: 'website',
    url: 'https://www.latanzanieaucourdelanature.com',
    siteName: 'La Tanzanie au Coeur de la Nature',
    images: [
      {
        url: '/images/kilimanjaro-summit.jpg',
        width: 1200,
        height: 630,
        alt: 'Kilimanjaro Summit'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Tanzanie au Coeur de la Nature',
    description: 'Discover authentic Tanzania: safaris, Kilimanjaro climbs, and Zanzibar beaches.',
    images: ['/images/kilimanjaro-summit.jpg'],
  },
};

export const viewport = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

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