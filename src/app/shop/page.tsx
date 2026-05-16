import Link from 'next/link'
import type { Metadata } from 'next'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Shop — Coming Soon | Sophistipets',
  description: 'Sophistipets online shop is launching soon. 500+ premium pet food, accessories, and healthcare products delivered to your door in Kolkata.',
  openGraph: {
    title: 'Sophistipets Shop — Coming Soon',
    description: '500+ premium pet products launching soon. Kolkata delivery.',
    url: 'https://sophistipets.com/shop',
  },
}

const upcomingCategories = [
  { icon: '🥩', label: 'Premium Pet Food' },
  { icon: '🧸', label: 'Toys & Enrichment' },
  { icon: '💊', label: 'Healthcare & Supplements' },
  { icon: '🛁', label: 'Grooming Essentials' },
  { icon: '🛏️', label: 'Beds & Carriers' },
  { icon: '🦮', label: 'Collars & Leashes' },
]

export default function ShopComingSoonPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar activePath="/shop" />

      <main>
        <div
          style={{
            background: 'var(--text)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Radial glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '600px',
            background: 'radial-gradient(ellipse, rgba(184,145,42,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: '640px', textAlign: 'center', position: 'relative' }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(184,145,42,0.1)',
              border: '1px solid rgba(184,145,42,0.25)',
              borderRadius: '20px',
              padding: '6px 16px',
              marginBottom: '32px',
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 500, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Coming Soon
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '52px',
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}
            >
              500+ premium products.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                Delivered to your door.
              </em>
            </h1>

            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: '48px',
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}>
              The Sophistipets online store is launching very soon — curated pet food, healthcare essentials, grooming products, and more. In the meantime, visit us in-store at Bhowanipore.
            </p>

            {/* Categories preview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '48px',
            }}>
              {upcomingCategories.map((cat) => (
                <div
                  key={cat.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '20px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{cat.icon}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, letterSpacing: '0.3px' }}>
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vet-care">
                <button className="btn-primary">Book a Vet Appointment</button>
              </Link>
              <a href="https://wa.me/919831392669" target="_blank" rel="noopener noreferrer">
                <button
                  className="btn-soft"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.65)',
                  }}
                >
                  Ask on WhatsApp
                </button>
              </a>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
