import Link from 'next/link'
import Image from 'next/image'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'


export const metadata = {
  title: 'Services — Sophistipets',
  description:
    'Comprehensive pet care services in Kolkata — advanced veterinary care, 24×7 emergency, grooming, dog walking, nutrition and everyday essentials.',
}

const services = [
  {
    id: 'vet-care',
    num: '01',
    name: 'Advanced Vet Care & Pharmacy',
    tagline: 'Clinical excellence, not just convenience.',
    description:
      'Our veterinary team handles everything from routine checkups and preventive care to complex diagnostics and post-surgical monitoring. The in-house pharmacy means prescribed medicines are dispensed the same day — no running around the city after a consultation. Every protocol is built on rigorous clinical science, backed by our founder\'s background in biochemistry.',
    highlights: [
      'Comprehensive health examinations',
      'In-house diagnostic testing',
      'Surgical interventions',
      'Post-operative care & monitoring',
      'In-house pharmacy with 15% consultation discount',
      'Vaccination & deworming schedules',
    ],
    image: '/vetcare.jpg',
    imageAlt: 'Advanced veterinary care at Sophistipets',
    accent: 'var(--gold-pale)',
    border: 'var(--gold-soft)',
  },
  {
    id: 'emergency',
    num: '02',
    name: 'Round-the-Clock Emergency & Critical Care',
    tagline: 'Because emergencies don\'t wait for morning.',
    description:
      'This is the service that Sophistipets was founded to provide. A real vet, available at any hour — not a voicemail, not a callback system. Our emergency and critical care unit handles trauma, sudden illness, post-surgical complications, and conditions requiring intensive monitoring. Medical boarding is available exclusively for pets that need round-the-clock observation and treatment.',
    highlights: [
      '24×7 emergency vet on call',
      'Critical care & ICU monitoring',
      'Trauma and acute illness management',
      'Medical boarding for critical cases',
      'Post-surgical intensive monitoring',
      'Emergency surgical interventions',
    ],
    image: '/emergency.jpg',
    imageAlt: 'Emergency pet care available 24x7',
    accent: 'var(--bg2)',
    border: 'var(--border)',
  },
  {
    id: 'grooming',
    num: '03',
    name: 'Grooming',
    tagline: 'A gentle experience your pet will actually enjoy.',
    description:
      'Our grooming service is designed with the animal\'s comfort as the priority — not speed, not volume. Each session is handled with patience and care, tailored to your pet\'s temperament and coat type. From a basic bath and brush to full grooming sessions, every appointment is a calm, unhurried experience.',
    highlights: [
      'Bath, blow-dry & brush',
      'Breed-specific haircuts',
      'Nail trimming & ear cleaning',
      'De-shedding treatments',
      'Medicated baths on vet recommendation',
      'Gentle handling for anxious pets',
    ],
    image: '/grooming.jpg',
    imageAlt: 'Expert pet grooming at Sophistipets',
    accent: 'var(--gold-pale)',
    border: 'var(--gold-soft)',
  },
  {
    id: 'walks',
    num: '04',
    name: 'Walks & Training',
    tagline: 'Structure, discipline, and a good run.',
    description:
      'Regular, disciplined walks are as important for a dog\'s mental health as they are for physical fitness. Our walking service follows structured routes with trained handlers who understand canine behaviour. Basic obedience training is available for dogs that need it — from leash manners to foundational commands.',
    highlights: [
      'Structured daily walks',
      'Trained, experienced handlers',
      'Behaviour-aware approach',
      'Basic obedience training',
      'Leash manners & recall training',
      'Suitable for all breeds and sizes',
    ],
    image: '/training.jpg',
    imageAlt: 'Dog walking and training services',
    accent: 'var(--bg2)',
    border: 'var(--border)',
  },
  {
    id: 'nutrition',
    num: '05',
    name: 'Nutrition, Toys & Everyday Essentials',
    tagline: 'Everything your pet needs, stocked and ready.',
    description:
      'Beyond healthcare, Sophistipets carries a curated selection of nutrition products, toys, and everyday essentials from trusted brands — Royal Canin, Pedigree, Whiskas, Chip Chop, and more. Vet-recommended diets are available in-store, and our team can advise on the right nutrition plan based on your pet\'s health profile.',
    highlights: [
      'Premium pet food — dogs & cats',
      'Vet-recommended therapeutic diets',
      'Treats & chews',
      'Toys & enrichment products',
      'Accessories & hygiene products',
      'Brands: Royal Canin, Pedigree, Whiskas & more',
    ],
    image: '/toys.jpg',
    imageAlt: 'Pet nutrition and everyday essentials',
    accent: 'var(--gold-pale)',
    border: 'var(--gold-soft)',
  },
]

export default function ServicesPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar activePath="/services" />

      <main>

        {/* ── HERO ── */}
        <div
          style={{
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--border)',
            padding: '72px 32px 64px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="sh-label" style={{ textAlign: 'center', marginBottom: '12px' }}>
              What we offer
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '48px',
                fontWeight: 400,
                color: 'var(--text)',
                lineHeight: 1.15,
                marginBottom: '18px',
              }}
            >
              Care that goes{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                beyond the basics
              </em>
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-2)',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              From emergency surgery at 3am to a gentle grooming session on a
              Sunday afternoon — Sophistipets is built to be the only pet care
              address you ever need in Kolkata.
            </p>
          </div>

          {/* Anchor pills */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '36px',
            }}
          >
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="service-pill"
              >
                {svc.name}
              </a>
            ))}
          </div>
        </div>

        {/* ── SERVICE BLOCKS ── */}
        <div>
          {services.map((svc, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div
                key={svc.id}
                id={svc.id}
                style={{
                  borderBottom: '1px solid var(--border)',
                  background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)',
                }}
              >
                <div
                  style={{
                    maxWidth: '1180px',
                    margin: '0 auto',
                    padding: '72px 32px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '64px',
                    alignItems: 'center',
                    direction: imageLeft ? 'ltr' : 'rtl',
                  }}
                >
                  {/* Image side */}
                  <div style={{ direction: 'ltr' }}>
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '4/3',
                        borderRadius: imageLeft ? '4px 16px 4px 16px' : '16px 4px 16px 4px',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <Image
                        src={svc.image}
                        alt={svc.imageAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle num overlay */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          background: 'rgba(253,250,246,0.92)',
                          border: '1px solid var(--border)',
                          borderRadius: '6px',
                          padding: '5px 12px',
                          fontFamily: 'var(--font-lora), serif',
                          fontSize: '12px',
                          color: 'var(--gold)',
                          letterSpacing: '1.5px',
                        }}
                      >
                        {svc.num}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div style={{ direction: 'ltr' }}>
                    <h2
                      style={{
                        fontFamily: 'var(--font-lora), serif',
                        fontSize: '28px',
                        fontWeight: 400,
                        color: 'var(--text)',
                        lineHeight: 1.25,
                        marginBottom: '8px',
                      }}
                    >
                      {svc.name}
                    </h2>
                    <p
                      style={{
                        fontSize: '13.5px',
                        color: 'var(--gold)',
                        fontStyle: 'italic',
                        fontFamily: 'var(--font-lora), serif',
                        lineHeight: 1.5,
                        marginBottom: '20px',
                      }}
                    >
                      {svc.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: '14.5px',
                        color: 'var(--text-2)',
                        lineHeight: 1.9,
                        fontWeight: 300,
                        marginBottom: '28px',
                      }}
                    >
                      {svc.description}
                    </p>

                    {/* Highlights */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                      }}
                    >
                      {svc.highlights.map((h) => (
                        <div
                          key={h}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            background: svc.accent,
                            border: `1px solid ${svc.border}`,
                            borderRadius: '8px',
                            padding: '10px 12px',
                          }}
                        >
                          <span style={{ color: 'var(--gold)', fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>✦</span>
                          <span style={{ fontSize: '12.5px', color: 'var(--text-2)', lineHeight: 1.5, fontWeight: 300 }}>
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            background: 'var(--text)',
            padding: '72px 32px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '520px', margin: '0 auto' }}>
            <div className="sh-label" style={{ color: 'var(--gold)', textAlign: 'center', marginBottom: '14px' }}>
              Get in touch
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '34px',
                fontWeight: 400,
                color: 'var(--white)',
                marginBottom: '14px',
                lineHeight: 1.25,
              }}
            >
              Have questions about{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>
                any service?
              </em>
            </h2>
            <p
              style={{
                fontSize: '14.5px',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '32px',
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Call us, WhatsApp us, or walk in. We&apos;re at 10A Gour Ghosh
              Road, Bhowanipore — and our emergency line is always answered.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919831392669">
                <button className="btn-primary">Call +91 98313 92669</button>
              </a>
              <a
                href="https://wa.me/919831392669"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn-soft"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  WhatsApp Us
                </button>
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