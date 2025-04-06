import type { Metadata } from 'next'
import './globals.css'
import { inter } from './_lib/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | VanLife',
    default: 'Vanlife',
  },
  description:
    'Vanlife is a van rental services that provide various vans for any type',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  )
}
