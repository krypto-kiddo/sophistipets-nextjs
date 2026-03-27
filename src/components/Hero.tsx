'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '56px 32px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '56px',
        alignItems: 'center',
      }}
    >
      {/* LEFT — Copy */}
      <div>
        {/* Eyebrow tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            fontSize: '11.5px',
            color: 'var(--gold)',
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            fontWeight: 500,
            marginBottom: '20px',
          }}
        >
          <span
            style={{
              width: '20px',
              height: '1px',
              background: 'var(--gold-soft)',
              display: 'inline-block',
            }}
          />
          Kolkata&apos;s Premier Pet Care Destination
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '52px',
            lineHeight: 1.18,
            fontWeight: 400,
            color: 'var(--text)',
            marginBottom: '16px',
          }}
        >
          One roof for
          <br />
          every{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            pet need
          </em>
          <br />
          you have.
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '14.5px',
            color: 'var(--text-2)',
            lineHeight: 1.8,
            maxWidth: '420px',
            marginBottom: '28px',
            fontWeight: 300,
          }}
        >
          From advanced veterinary surgery to everyday nutrition — Sophistipets
          brings clinical expertise and genuine warmth together, right here in
          Bhowanipore.
        </p>

        {/* Founder card */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            background: 'var(--gold-pale)',
            border: '1px solid var(--gold-soft)',
            borderRadius: '10px',
            padding: '14px 18px',
            marginBottom: '30px',
            maxWidth: '420px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              background: 'var(--gold-soft)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-lora), serif',
              fontSize: '13px',
              color: 'var(--gold)',
              flexShrink: 0,
              fontWeight: 500,
            }}
          >
            Dr
          </div>
          <div
            style={{
              fontSize: '12.5px',
              color: 'var(--text-2)',
              lineHeight: 1.5,
            }}
          >
            <strong
              style={{
                display: 'block',
                color: 'var(--text)',
                fontSize: '13px',
                fontWeight: 500,
                marginBottom: '2px',
              }}
            >
              PhD-backed clinical care
            </strong>
            Founded by a biochemist with a doctorate — every protocol rooted in
            science, not guesswork.
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link href="/vet-care">
            <button className="btn-primary">Book a Vet Visit</button>
          </Link>
          <Link href="/shop">
            <button className="btn-soft">Explore Shop</button>
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: '36px',
            marginTop: '36px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {[
            { n: '24', sup: '/7', label: 'Emergency Vet' },
            { n: '500', sup: '+', label: 'Products' },
            { n: '15', sup: '%', label: 'Off Medicines' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '26px',
                  color: 'var(--text)',
                  fontWeight: 400,
                }}
              >
                {stat.n}
                <span style={{ fontSize: '14px', color: 'var(--gold)' }}>
                  {stat.sup}
                </span>
              </div>
              <div
                style={{
                  fontSize: '11px',
                  color: 'var(--text-3)',
                  marginTop: '3px',
                  letterSpacing: '0.3px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '4/5',
          background: 'var(--bg2)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/hero.jpg"
          alt="A happy pet at Sophistipets"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />

        {/* Live pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              background: '#6DBF8A',
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '12px', color: 'var(--text-2)' }}>
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
              Vet available now
            </strong>{' '}
            · Emergency line open
          </span>
        </div>
      </div>
    </section>
  )
}