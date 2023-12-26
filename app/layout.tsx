import type { Metadata } from 'next'
import Head from 'next/head';
import Script from 'next/script';
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/library/LangChange';
import { CartProvider } from '@/library/CartContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mridakriti',
  description: 'Mridakriti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mridakriti'
  };

  return (
    <html lang="en">
      <Script id='json-ld' type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        key='json-ld' />
      < CartProvider >
        <LanguageProvider>
          <body className={inter.className}>
            {children}
          </body>
        </LanguageProvider>
      </CartProvider>
    </html>
  )
}
