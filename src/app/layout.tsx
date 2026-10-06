import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KALAPRITI (कलाप्रिति) | Loops of Love — Crochet MBA Presentation & Artisan House',
  description:
    'A high-end editorial showcase and MBA business presentation for Kalapriti, founded by Tisha Vaghasiya. Elevating handmade crochet into a scalable DTC artisan enterprise.',
  keywords: [
    'Crochet MBA Presentation',
    'Kalapriti',
    'Tisha Vaghasiya',
    'Artisanal Crochet',
    'Amigurumi Idols',
    'Custom Portrait Dolls',
    'Handmade Keepsakes',
    'Slow Fashion',
  ],
  icons: {
    icon: '/assets/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="bg-parchment-50 text-espresso-900 antialiased selection:bg-terracotta/20 selection:text-espresso-900">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
