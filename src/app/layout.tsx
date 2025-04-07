import type { Metadata } from 'next';
import './globals.css';
import { inter } from './_lib/fonts';
import Footer from '@/components/Footer';
import { SanityLive } from '@/sanity/lib/live';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: {
    template: '%s | VanLife',
    default: 'Vanlife',
  },
  description:
    'Vanlife is a van rental services that provide various vans for any type',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Header />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
