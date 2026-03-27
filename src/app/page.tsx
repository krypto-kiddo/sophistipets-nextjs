import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesBar from '@/components/ServicesBar'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar activePath="/" />
      <Hero />
      <ServicesBar />
    </main>
  )
}