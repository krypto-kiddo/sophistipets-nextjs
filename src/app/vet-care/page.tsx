import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
  title: '24x7 Emergency Vet in Kolkata — Sophistipets, Bhowanipore',
  description:
    'Sophistipets offers round-the-clock emergency veterinary care, advanced surgery, ICU monitoring, and in-house pharmacy in Bhowanipore, Kolkata. Call +91 98313 92669 anytime.',
  keywords: [
    '24x7 vet Kolkata',
    'emergency vet Kolkata',
    'emergency vet Bhowanipore',
    'pet hospital Kolkata',
    'vet near me Kolkata',
    'animal hospital Kolkata',
    'dog emergency vet Kolkata',
    'cat emergency vet Kolkata',
    'pet ICU Kolkata',
    'vet open at night Kolkata',
    'pet surgery Kolkata',
    'veterinary clinic Bhowanipore',
  ],
  openGraph: {
    title: '24x7 Emergency Vet in Kolkata — Sophistipets',
    description: 'Round-the-clock emergency veterinary care in Bhowanipore, Kolkata. Advanced surgery, ICU, in-house pharmacy. Call anytime.',
    url: 'https://sophistipets.com/vet-care',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'VeterinaryCare',
      name: 'Sophistipets',
      description:
        'Full-service veterinary clinic in Bhowanipore, Kolkata offering 24x7 emergency care, advanced surgery, ICU monitoring, and in-house pharmacy.',
      url: 'https://sophistipets.com',
      telephone: '+919831392669',
      openingHours: 'Mo-Su 00:00-23:59',
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
      sameAs: [],
      medicalSpecialty: [
        'Veterinary Surgery',
        'Emergency Medicine',
        'Critical Care',
        'Preventive Medicine',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a 24x7 emergency vet available in Kolkata?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sophistipets in Bhowanipore, Kolkata operates a 24x7 emergency veterinary line at +91 98313 92669. A qualified vet is available at any hour — not a voicemail or callback system.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if my pet has an emergency at night in Kolkata?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Call Sophistipets immediately at +91 98313 92669. Our emergency line is answered 24x7 by a qualified vet. We are located at 10A Gour Ghosh Road, Bhowanipore, Kolkata — 700025.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sophistipets have surgical facilities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sophistipets has an in-house surgical suite with post-operative ICU monitoring capabilities. Emergency surgical interventions are available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there an in-house pharmacy at Sophistipets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sophistipets has an in-house pharmacy where prescribed medicines are dispensed the same day as the consultation. Pet parents who consult our vet receive a 15% discount on prescribed medicines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my pet be admitted for overnight monitoring at Sophistipets?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sophistipets offers medical boarding exclusively for pets requiring round-the-clock monitoring and treatment. This is not a general boarding service — it is reserved for pets with active medical needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Sophistipets located in Kolkata?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sophistipets is located at 10A Gour Ghosh Road, Bhowanipore, Kolkata — 700025. It is accessible from South Kolkata including Kalighat, Rashbehari, Hazra, and Ballygunge.',
          },
        },
      ],
    },
  ],
}

const vetServices = [
  { icon: '🩺', title: 'General Consultation', desc: 'Routine checkups, health assessments, and preventive care for dogs and cats.' },
  { icon: '⚡', title: '24×7 Emergency Care', desc: 'Round-the-clock emergency response. A real vet answers, every time.' },
  { icon: '🏥', title: 'Surgical Interventions', desc: 'In-house surgical suite for planned and emergency procedures.' },
  { icon: '💊', title: 'In-house Pharmacy', desc: 'Same-day prescription dispensing with 15% off on consultation.' },
  { icon: '🛏️', title: 'Medical Boarding', desc: 'ICU-level monitoring for pets requiring round-the-clock observation.' },
  { icon: '💉', title: 'Vaccination & Deworming', desc: 'Complete preventive care schedules tailored to your pet\'s age and breed.' },
  { icon: '🔬', title: 'Diagnostics', desc: 'In-house diagnostic testing to support fast, accurate clinical decisions.' },
  { icon: '🧬', title: 'Post-op Monitoring', desc: 'Dedicated post-surgical care and recovery monitoring.' },
]

const steps = [
  {
    num: '01',
    title: 'Call us anytime',
    desc: 'Dial +91 98313 92669 — our emergency line is answered 24x7 by a qualified vet, not a receptionist.',
  },
  {
    num: '02',
    title: 'Bring your pet in',
    desc: 'We are at 10A Gour Ghosh Road, Bhowanipore. Walk in directly for emergencies — no appointment needed.',
  },
  {
    num: '03',
    title: 'Your pet gets treated',
    desc: 'Assessment, diagnosis, treatment, and if needed — surgical intervention or ICU admission, all under one roof.',
  },
]

const faqs = [
  {
    q: 'Is there a 24x7 emergency vet available in Kolkata?',
    a: 'Yes. Sophistipets operates a 24x7 emergency veterinary line at +91 98313 92669. A qualified vet is available at any hour — not a voicemail or callback system.',
  },
  {
    q: 'What should I do if my pet has an emergency at night?',
    a: 'Call us immediately at +91 98313 92669. Our emergency line is always answered. We are located at 10A Gour Ghosh Road, Bhowanipore — accessible from Kalighat, Rashbehari, Hazra, and Ballygunge.',
  },
  {
    q: 'Does Sophistipets perform surgeries?',
    a: 'Yes. We have an in-house surgical suite and can perform both planned and emergency surgical procedures. Post-operative ICU monitoring is available on-site.',
  },
  {
    q: 'Can I get medicines from Sophistipets after a consultation?',
    a: 'Yes. Our in-house pharmacy dispenses prescribed medicines the same day. Pet parents who consult our vet receive a 15% discount on all prescribed medicines.',
  },
  {
    q: 'Can my pet stay overnight for monitoring?',
    a: 'Yes — medical boarding is available exclusively for pets with active medical needs requiring round-the-clock monitoring. This is not a general boarding service.',
  },
  {
    q: 'What areas in Kolkata is Sophistipets accessible from?',
    a: 'We are in Bhowanipore, easily accessible from South Kolkata including Kalighat, Rashbehari, Hazra, Ballygunge, Alipore, and Tollygunge.',
  },
]

export default function VetCarePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <AnnouncementBar />
      <Navbar activePath="/vet-care" />

      <main>

        {/* ── HERO ── */}
        <div style={{ background: 'var(--text)', padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(184,145,42,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '64px', alignItems: 'center', position: 'relative' }}>

            <div>
              {/* Live badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(109,191,138,0.12)', border: '1px solid rgba(109,191,138,0.25)',
                borderRadius: '20px', padding: '6px 14px', marginBottom: '24px',
              }}>
                <span style={{ width: '7px', height: '7px', background: '#6DBF8A', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: '12px', color: '#6DBF8A', fontWeight: 500, letterSpacing: '0.3px' }}>
                  Vet available now — Emergency line open
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
                Kolkata&apos;s{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                  24×7 emergency
                </em>{' '}
                vet clinic.
              </h1>

              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: '32px', maxWidth: '460px' }}>
                Advanced veterinary care, surgical interventions, ICU monitoring, and an in-house pharmacy — all available round the clock in Bhowanipore, South Kolkata.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <a href="tel:+919831392669">
                  <button className="btn-primary" style={{ fontSize: '14px', padding: '13px 28px' }}>
                    Call +91 98313 92669
                  </button>
                </a>
                <a href="https://wa.me/919831392669" target="_blank" rel="noopener noreferrer">
                  <button className="btn-soft" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)', fontSize: '14px', padding: '13px 28px' }}>
                    WhatsApp Us
                  </button>
                </a>
              </div>

              {/* Trust strip */}
              <div style={{ display: 'flex', gap: '28px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { n: '24×7', l: 'Emergency Line' },
                  { n: '15%', l: 'Off on Medicines' },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'var(--font-lora), serif', fontSize: '24px', color: 'var(--white)', fontWeight: 400 }}>{s.n}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '3px', letterSpacing: '0.3px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/5', position: 'relative', border: '1px solid rgba(255,255,255,0.08)' }}>
              <Image
                src="https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Veterinary care at Sophistipets Kolkata"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>

        {/* ── THE 24×7 PROMISE ── */}
        <div style={{ background: 'var(--gold-pale)', borderBottom: '1px solid var(--gold-soft)', padding: '56px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="sh-label" style={{ marginBottom: '10px' }}>Our promise</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '32px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                What 24×7 actually <em style={{ fontStyle: 'italic' }}>means here</em>
              </h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.9, fontWeight: 300 }}>
              In Kolkata, most clinics that claim 24-hour availability mean a phone number that goes to voicemail after 10pm. At Sophistipets, 24×7 means a qualified vet picks up the call — at 2am, at 4am, on a public holiday. It means your pet is assessed and treated without waiting for morning. This was the gap that drove Adhiraj Dasgupta to build Sophistipets, and it remains the non-negotiable core of everything we do.
            </p>
          </div>
        </div>

        {/* ── SERVICES GRID ── */}
        <div style={{ background: 'var(--bg)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="sh-label" style={{ textAlign: 'center', marginBottom: '10px' }}>What we treat</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '34px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                Veterinary services <em style={{ fontStyle: 'italic' }}>under one roof</em>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {vetServices.map((svc) => (
                <div
                  key={svc.title}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: '14px',
                    padding: '24px 20px',
                    transition: 'all 0.18s',
                  }}
                  className="vet-service-card"
                >
                  <div style={{ fontSize: '26px', marginBottom: '12px' }}>{svc.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '7px' }}>{svc.title}</div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>{svc.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="sh-label" style={{ textAlign: 'center', marginBottom: '10px' }}>Simple process</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '34px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                What happens when you <em style={{ fontStyle: 'italic' }}>call us</em>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ position: 'relative' }}>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '28px',
                      right: '-12px',
                      width: '24px',
                      height: '1px',
                      background: 'var(--gold-soft)',
                      zIndex: 1,
                    }} />
                  )}
                  <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px 24px' }}>
                    <div style={{ fontFamily: 'var(--font-lora), serif', fontSize: '13px', color: 'var(--gold)', letterSpacing: '1.5px', marginBottom: '14px' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '10px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY TRUST US ── */}
        <div style={{ background: 'var(--bg)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative', border: '1px solid var(--border)' }}>
              <Image
                src="https://images.unsplash.com/photo-1632236542159-809925d85fc0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sophistipets emergency veterinary care Kolkata"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="sh-label" style={{ marginBottom: '10px' }}>Why trust us</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '32px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2, marginBottom: '16px' }}>
                Science-first care, <em style={{ fontStyle: 'italic' }}>always</em>
              </h2>
              <p style={{ fontSize: '14.5px', color: 'var(--text-2)', lineHeight: 1.9, fontWeight: 300, marginBottom: '24px' }}>
                Sophistipets was founded by Adhiraj Dasgupta, a biotechnologist with a doctoral background. Every treatment protocol at Sophistipets is built on clinical evidence — not convention, not guesswork. This is what separates us from a walk-in clinic.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'PhD biotechnologist-led clinical protocols',
                  'Transparent diagnosis and treatment planning',
                  'No unnecessary procedures — ever',
                  'Every pet treated with the same urgency',
                ].map((pt) => (
                  <div key={pt} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', background: 'var(--gold-pale)', border: '1px solid var(--gold-soft)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '13.5px', color: 'var(--text-2)', lineHeight: 1.5, fontWeight: 300 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="sh-label" style={{ textAlign: 'center', marginBottom: '10px' }}>Common questions</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '34px', fontWeight: 400, color: 'var(--text)', lineHeight: 1.2 }}>
                Frequently asked <em style={{ fontStyle: 'italic' }}>questions</em>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--border)',
                    borderRadius: i === 0 ? '12px 12px 2px 2px' : i === faqs.length - 1 ? '2px 2px 12px 12px' : '2px',
                    padding: '24px 28px',
                  }}
                >
                  <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── LOCATION + CTA ── */}
        <div style={{ background: 'var(--text)', padding: '72px 32px' }}>
          <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="sh-label" style={{ color: 'var(--gold)', marginBottom: '12px' }}>Find us</div>
              <h2 style={{ fontFamily: 'var(--font-lora), serif', fontSize: '32px', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2, marginBottom: '16px' }}>
                Visit us in <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>Bhowanipore</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {[
                  { icon: '📍', text: '10A Gour Ghosh Road, Bhowanipore, Kolkata – 700025' },
                  { icon: '📞', text: '+91 98313 92669 / +91 89814 08631' },
                  { icon: '✉️', text: 'sophistipets.bhowanipore@gmail.com' },
                  { icon: '🕐', text: 'Emergency line: 24×7 · Clinic hours: 9am – 9pm' },
                ].map((item) => (
                  <div key={item.text} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                    <span style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, fontWeight: 300 }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:+919831392669">
                  <button className="btn-primary">Call Now</button>
                </a>
                <a
                  href="https://maps.google.com/?q=10A+Gour+Ghosh+Road+Bhowanipore+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-soft" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)' }}>
                    Get Directions
                  </button>
                </a>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              aspectRatio: '4/3',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1!2d88.3433!3d22.5230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s10A+Gour+Ghosh+Road+Bhowanipore+Kolkata!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sophistipets location map"
              />
            </div>
          </div>
        </div>

        <Newsletter />
      </main>

      <Footer />
    </>
  )
}