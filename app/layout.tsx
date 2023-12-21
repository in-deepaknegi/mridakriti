import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script';
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mridakrit",
    "url": "https://www.mridakriti.com"
  };

  return (
    <html lang="en">
      <Script id="my-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
