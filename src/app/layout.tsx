import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Sophistipets — Care. Comfort. Quality for Your Pets.',
  description:
    "Kolkata's only full-service pet care centre. Advanced veterinary surgery, 24×7 emergency care, expert grooming, and 500+ premium products in Bhowanipore.",
  keywords: [
    'pet store kolkata',
    'vet bhowanipore',
    'pet grooming kolkata',
    '24x7 vet kolkata',
    'dog food kolkata',
    'sophistipets',
  ],
  openGraph: {
    title: 'Sophistipets',
    description: "Kolkata's premier pet care destination",
    url: 'https://sophistipets.com',
    siteName: 'Sophistipets',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}