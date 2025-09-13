import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopBanner from '@/components/TopBanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { WishlistProvider } from '@/contexts/WishlistContext'
import ToastProvider from '@/components/ToastProvider'
import WishlistModal from '@/components/WishlistModal'

const inter = Inter({ 
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rare-vault.vercel.app'),
  title: 'RAREVAULT — Редкие коллекционные товары',
  description: 'Лимитированные издания, 1 из 300. Тестовый прототип интернет-магазина редких коллекционных товаров.',
  keywords: 'коллекционные товары, винил, комиксы, фигурки, редкие издания, лимитированные серии',
  authors: [{ name: 'RAREVAULT' }],
  openGraph: {
    title: 'RAREVAULT — Редкие коллекционные товары',
    description: 'Лимитированные издания, 1 из 300. Тестовый прототип интернет-магазина редких коллекционных товаров.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'RAREVAULT',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'RAREVAULT — Редкие коллекционные товары',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: 'noindex, nofollow', // Test prototype
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <TopBanner />
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
              <WishlistModal />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
