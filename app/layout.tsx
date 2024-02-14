import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mridakriti',
  description: "On an endless journey to create experiences that inspire others. Always motived by design that's honest, aesthetic and natural. Probably the only designer you'll ever need.",
  metadataBase: new URL('https://www.mridakriti.com/'),
  openGraph: {
    type: "website",
    url: "https://www.mridakriti.com/",
    title: "Mridakriti",
    description: "On an endless journey to create experiences that inspire others. Always motived by design that's honest, aesthetic and natural. Probably the only designer you'll ever need.",
    siteName: "Mridakriti",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
