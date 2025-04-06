import type { Metadata } from 'next';
import '../globals.css';
import { SanityLive } from '@/sanity/lib/live';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <SanityLive />
    </main>
  );
}
