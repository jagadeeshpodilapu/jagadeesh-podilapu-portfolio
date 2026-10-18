import type { Metadata } from 'next';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { site } from '@/data/site';
import { Navbar } from '@/components/navbar';

const heading = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-heading' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: `${site.name} — ${site.role}`,
  description: site.description,
  openGraph: { title: `${site.name} — ${site.role}`, description: site.description, images: ['/og-image.png'], type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${heading.variable} ${body.variable}`} suppressHydrationWarning><body><Navbar />{children}<Analytics /></body></html>;
}
