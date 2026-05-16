import Link from 'next/link'
import type { Metadata } from 'next'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pet Care Blog — Coming Soon | Sophistipets',
  description: 'The Sophistipets blog is launching soon — expert advice on pet nutrition, veterinary care, grooming, and responsible pet ownership in Kolkata.',
  openGraph: {
    title: 'Sophistipets Blog — Coming Soon',
    description: 'Expert pet care advice from Sophistipets, Kolkata. Launching soon.',
    url: 'https://sophistipets.com/blog',
  },
}

const upcomingTopics = [
  { icon: '🩺', label: 'Veterinary Advice' },
  { icon: '🥗', label: 'Pet Nutrition' },
  { icon: '✂️', label: 'Grooming Tips' },
  { icon: '🐾', label: 'Responsible Ownership' },
  { icon: '🚨', label: 'Emergency First Aid' },
  { icon: '💉', label: 'Vaccination Guides' },
]

export default function BlogComingSoonPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar activePath="/blog" />

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
              Science-backed pet care.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                Written plainly.
              </em>
            </h1>

            <p style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}>
              The Sophistipets blog is coming soon — clinical guidance on nutrition, emergency response, grooming, and responsible pet ownership, written by our veterinary team.
            </p>

            {/* Topics preview */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '48px',
            }}>
              {upcomingTopics.map((topic) => (
                <div
                  key={topic.label}
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
                  <span style={{ fontSize: '24px' }}>{topic.icon}</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, letterSpacing: '0.3px' }}>
                    {topic.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vet-care">
                <button className="btn-primary">Book a Consultation</button>
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
