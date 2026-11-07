import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} | CasinoTop`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'топ онлайн казино',
    'рейтинг казино 2026',
    'лучшие онлайн казино',
    'казино на реальные деньги',
    'онлайн казино с бонусом',
    'промокод казино',
    '1win',
    'jetton',
    'getx',
    'moriwin',
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: '/',
    languages: { ru: '/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.description,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Топ онлайн казино 2026 — рейтинг CasinoTop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.title} | ${SITE.name}`,
    description: SITE.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'games',
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#05060b',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex" content="all" />
      </head>
      <body>{children}</body>
    </html>
  );
}
