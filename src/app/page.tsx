import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar activePath="/" />
    </main>
  )
}