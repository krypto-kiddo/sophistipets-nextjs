import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesBar from '@/components/ServicesBar'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import PromoBand from '@/components/PromoBand'
import WhyUs from '@/components/WhyUs'
import Brands from '@/components/Brands'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

const schema = {
  '@context': 'https://schema.org',
  '@type': ['PetStore', 'VeterinaryCare'],
  name: 'Sophistipets',
  description:
    "Kolkata's only full-service pet care centre. Advanced veterinary surgery, 24×7 emergency care, expert grooming, and 500+ premium products in Bhowanipore.",
  url: 'https://sophistipets.com',
  telephone: ['+919831392669', '+918981408631'],
  email: 'sophistipets.bhowanipore@gmail.com',
  openingHours: ['Mo-Su 09:00-21:00'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10A Gour Ghosh Road',
    addressLocality: 'Bhowanipore',
    addressRegion: 'Kolkata',
    postalCode: '700025',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.5230',
    longitude: '88.3433',
  },
  hasMap: 'https://maps.google.com/?q=10A+Gour+Ghosh+Road+Bhowanipore+Kolkata',
  priceRange: '₹₹',
  image: 'https://sophistipets.com/logo.png',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI',
  areaServed: [
    'Bhowanipore', 'Kalighat', 'Rashbehari', 'Hazra', 'Ballygunge',
    'Alipore', 'Tollygunge', 'South Kolkata',
  ],
  sameAs: [],
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AnnouncementBar />
      <Navbar activePath="/" />
      <Hero />
      <ServicesBar />
      <Categories />
      <PromoBand />
      <FeaturedProducts />
      <WhyUs />
      <Brands />
      <Newsletter />
      <Footer />
    </main>
  )
}