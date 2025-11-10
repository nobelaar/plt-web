import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://plt.network'),
  title: {
    default: 'PLT — Poder, Libertad, Tecnología',
    template: '%s | PLT'
  },
  description:
    'PLT es una blockchain soberana construida con Cosmos SDK para ofrecer infraestructura digital abierta, transparente y eficiente.',
  keywords: [
    'PLT',
    'Blockchain argentina',
    'Cosmos SDK',
    'Infraestructura digital',
    'Soberanía tecnológica'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://plt.network',
    siteName: 'PLT',
    title: 'PLT — Poder, Libertad, Tecnología',
    description:
      'Infraestructura soberana basada en Cosmos SDK para operar sin intermediarios y con gobernanza abierta.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLT — Poder, Libertad, Tecnología',
    description:
      'Infraestructura soberana basada en Cosmos SDK para operar sin intermediarios y con gobernanza abierta.'
  },
  alternates: {
    canonical: '/'
  },
  category: 'technology'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
