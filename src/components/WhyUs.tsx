import Link from 'next/link'

const points = [
  {
    id: '01',
    title: 'PhD in Biochemistry — Founder',
    desc: 'Every treatment protocol built on doctoral-level science, not commercial shortcuts.',
  },
  {
    id: '02',
    title: '15% off all prescribed medicines',
    desc: 'Vet consultations come with exclusive medicine discounts, only at Sophistipets.',
  },
  {
    id: '03',
    title: '24×7 emergency — a real vet, every time',
    desc: 'Not a helpline. Not a voicemail. A qualified vet, any hour of the night.',
  },
]

const cards = [
  {
    id: 'emergency',
    icon: '⚡',
    title: '24×7 Emergency',
    desc: 'Critical care, always on. Day or night, we\'re here.',
    highlight: true,
  },
  {
    id: 'surgery',
    icon: '🏥',
    title: 'Advanced Surgery',
    desc: 'In-house surgical suite with post-op ICU monitoring.',
    highlight: false,
  },
  {
    id: 'pharmacy',
    icon: '💊',
    title: 'In-house Pharmacy',
    desc: 'Same-day prescription and dispensing.',
    highlight: false,
  },
  {
    id: 'phd',
    icon: '🎓',
    title: 'PhD-backed Protocols',
    desc: 'Science-first approach to every pet\'s health.',
    highlight: false,
  },
]

export default function WhyUs() {
  return (
    <div
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '64px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        {/* LEFT */}
        <div>
          <div className="sh-label">Why Sophistipets</div>
          <h2
            style={{
              fontFamily: 'var(--font-lora), serif',
              fontSize: '34px',
              fontWeight: 400,
              color: 'var(--text)',
              lineHeight: 1.22,
              marginBottom: '14px',
              marginTop: '10px',
            }}
          >
            Where science meets{' '}
            <em style={{ fontStyle: 'italic' }}>genuine care</em>
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-2)',
              lineHeight: 1.85,
              marginBottom: '28px',
              fontWeight: 300,
              maxWidth: '420px',
            }}
          >
            We&apos;re not a pet store that added a vet corner. We&apos;re a
            full-spectrum pet care centre — the only one in South Kolkata where
            your pet can receive emergency treatment and go home with
            vet-prescribed nutrition the same day.
          </p>

          {/* Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
            {points.map((pt) => (
              <div key={pt.id} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                {/* Check */}
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: 'var(--gold-pale)',
                    border: '1px solid var(--gold-soft)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                {/* Text */}
                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: 'var(--text)',
                      marginBottom: '3px',
                    }}
                  >
                    {pt.title}
                  </strong>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.6 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/about">
            <button className="btn-primary">Meet Our Team</button>
          </Link>
        </div>

        {/* RIGHT — cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                background: card.highlight ? 'var(--gold-pale)' : 'var(--white)',
                border: `1px solid ${card.highlight ? 'var(--gold-soft)' : 'var(--border)'}`,
                borderRadius: '12px',
                padding: '22px',
                transition: 'all 0.18s',
              }}
              className="why-card"
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{card.icon}</div>
              <div
                style={{
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '6px',
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-2)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {card.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}