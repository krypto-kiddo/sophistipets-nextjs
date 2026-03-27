import Link from 'next/link'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'About Us — Sophistipets',
  description: 'The story behind Sophistipets — founded by Adhiraj Dasgupta to bridge the gap between compassionate animal care and advanced veterinary services in Kolkata.',
}

const values = [
  {
    id: '01',
    title: 'Timely Care Above All',
    desc: 'Every hour matters in a medical emergency. Our 24×7 availability exists because we have seen firsthand what delayed care costs.',
  },
  {
    id: '02',
    title: 'Transparency in Treatment',
    desc: 'Pet parents deserve to understand what is happening, why, and what it costs. No ambiguity, no shortcuts.',
  },
  {
    id: '03',
    title: 'Science-First Protocols',
    desc: 'Every treatment decision is grounded in clinical evidence. Compassion without competence is not enough.',
  },
]

const services = [
  'Veterinary Consultation',
  'Advanced Surgical Care',
  'Emergency & Critical Care',
  '24×7 Medical Boarding',
  'In-house Pharmacy',
  'Vaccination & Preventive Care',
]

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar activePath="/about" />

      <main>

        {/* ── HERO ── */}
        <div
          style={{
            background: 'var(--text)',
            padding: '96px 32px 80px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle radial glow */}
          <div style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(184,145,42,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                fontWeight: 500,
                marginBottom: '24px',
              }}
            >
              Our Story
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '52px',
                fontWeight: 400,
                color: 'var(--white)',
                lineHeight: 1.12,
                marginBottom: '24px',
              }}
            >
              Built from loss.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                Driven by purpose.
              </em>
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Sophistipets was born from a simple, painful truth — that
              accessible, round-the-clock veterinary care should never be a
              luxury in a city like Kolkata.
            </p>
          </div>
        </div>

        {/* ── ORIGIN STORY ── */}
        <div style={{ background: 'var(--bg)', padding: '80px 32px' }}>
          <div
            style={{
              maxWidth: '1180px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            {/* Sticky label */}
            <div style={{ position: 'sticky', top: '96px' }}>
              <div className="sh-label">The Founder</div>
              <h2
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '32px',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
              >
                Adhiraj<br />Dasgupta
              </h2>
              {/* Founder avatar placeholder */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'var(--gold-pale)',
                  border: '1px solid var(--gold-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '32px',
                  color: 'var(--gold)',
                  fontWeight: 400,
                }}
              >
                AD
              </div>
              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-3)',
                  marginTop: '12px',
                  letterSpacing: '0.3px',
                  fontWeight: 300,
                }}
              >
                Founder, Sophistipets
              </p>
            </div>

            {/* Story content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

              {/* Block 1 */}
              <div className="about-block">
                <div className="about-block-num">01</div>
                <h3 className="about-block-title">Where it began</h3>
                <p className="about-block-body">
                  Adhiraj&apos;s relationship with animals didn&apos;t start in a clinic
                  — it started on the streets. Strays, rescued squirrels, injured
                  birds, fragile kittens that arrived without warning and left a
                  mark that never faded. Each encounter deepened a sense of
                  responsibility that would eventually shape everything that
                  Sophistipets stands for today.
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)' }} />

              {/* Block 2 */}
              <div className="about-block">
                <div className="about-block-num">02</div>
                <h3 className="about-block-title">The gap that couldn&apos;t be ignored</h3>
                <p className="about-block-body">
                  Repeated experiences of losing rescued animals — not from lack
                  of effort, but from lack of accessible emergency veterinary
                  care in Kolkata — made the problem impossible to look away
                  from. A city of millions, and yet a pet in critical condition
                  after midnight had nowhere reliable to go. That gap became the
                  core motivation behind SophistiPets.
                </p>
                <blockquote className="about-quote">
                  &ldquo;Timely veterinary care, emergency treatment, and surgical
                  support should be accessible to every pet parent in Kolkata —
                  not just the fortunate few.&rdquo;
                </blockquote>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)' }} />

              {/* Block 3 */}
              <div className="about-block">
                <div className="about-block-num">03</div>
                <h3 className="about-block-title">What Sophistipets is today</h3>
                <p className="about-block-body">
                  Today, Sophistipets operates as a holistic pet care centre in
                  Bhowanipore — focused on professional medical reliability,
                  transparency, and compassionate care. Not a conventional retail
                  pet store, but a full-spectrum facility where your pet can
                  receive emergency treatment, surgical intervention, and
                  round-the-clock monitoring under one trusted roof.
                </p>
                <p className="about-block-body" style={{ marginTop: '16px' }}>
                  The philosophy is simple and firm: every animal deserves
                  access to the same standard of care that Adhiraj wished had
                  existed when he needed it most.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ── MISSION STRIP ── */}
        <div style={{ background: 'var(--text)', padding: '64px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
              }}
            >
              <div>
                <div className="sh-label" style={{ color: 'var(--gold)' }}>Our Mission</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-lora), serif',
                    fontSize: '34px',
                    fontWeight: 400,
                    color: 'var(--white)',
                    lineHeight: 1.22,
                    marginTop: '10px',
                    marginBottom: '16px',
                  }}
                >
                  One roof.{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                    Complete care.
                  </em>
                </h2>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.85,
                    fontWeight: 300,
                    marginBottom: '28px',
                  }}
                >
                  Sophistipets bridges the gap between compassionate animal care
                  and advanced veterinary, surgical, and emergency services —
                  making world-class pet healthcare accessible in Kolkata.
                </p>
                <Link href="/vet-care">
                  <button className="btn-primary">Book a Consultation</button>
                </Link>
              </div>

              {/* Services list */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                }}
              >
                {services.map((svc) => (
                  <div
                    key={svc}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '16px 18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: '14px' }}>✦</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                      {svc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── VALUES ── */}
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="sh-label" style={{ textAlign: 'center', marginBottom: '10px' }}>
                What we stand for
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '34px',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.2,
                }}
              >
                Our <em style={{ fontStyle: 'italic' }}>core values</em>
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
              }}
            >
              {values.map((v) => (
                <div
                  key={v.id}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '32px 28px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-lora), serif',
                      fontSize: '13px',
                      color: 'var(--gold)',
                      letterSpacing: '1px',
                      marginBottom: '16px',
                    }}
                  >
                    {v.id}
                  </div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: 'var(--text)',
                      marginBottom: '10px',
                      lineHeight: 1.4,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--text-2)',
                      lineHeight: 1.75,
                      fontWeight: 300,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'var(--gold-pale)',
            borderTop: '1px solid var(--gold-soft)',
            borderBottom: '1px solid var(--gold-soft)',
            padding: '64px 32px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '32px',
                fontWeight: 400,
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}
            >
              Your pet deserves{' '}
              <em style={{ fontStyle: 'italic' }}>better care.</em>
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-2)',
                marginBottom: '28px',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Visit us at 10A Gour Ghosh Road, Bhowanipore — or call our
              24×7 emergency line anytime.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Link href="/vet-care">
                <button className="btn-primary">Book an Appointment</button>
              </Link>
              <a href="tel:+919831392669">
                <button className="btn-soft">Call Us Now</button>
              </a>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}