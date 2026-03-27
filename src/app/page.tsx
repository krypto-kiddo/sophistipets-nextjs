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

export default function Home() {
  return (
    <main>
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