import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesBar from '@/components/ServicesBar'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar activePath="/" />
      <Hero />
      <ServicesBar />
      <Categories />
      <FeaturedProducts />
    </main>
  )
}