import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/library/LangChange';
import { CartProvider } from '@/library/CartContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mridakriti',
  description: 'Mridakriti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
