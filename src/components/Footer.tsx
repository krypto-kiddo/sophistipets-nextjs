import Link from 'next/link'
import Image from 'next/image'

const shopLinks = [
  { label: 'Dog Food',     href: '/shop?category=dog-food' },
  { label: 'Cat Food',     href: '/shop?category=cat-food' },
  { label: 'Treats',       href: '/shop?category=treats' },
  { label: 'Medicines',    href: '/shop?category=medicine' },
  { label: 'Accessories',  href: '/shop?category=accessories' },
  { label: 'Toys',         href: '/shop?category=toys' },
]

const serviceLinks = [
  { label: '24×7 Vet Care',   href: '/vet-care' },
  { label: 'Surgery & ICU',   href: '/services/surgery' },
  { label: 'Grooming',        href: '/services/grooming' },
  { label: 'Dog Walking',     href: '/services/dog-walking' },
  { label: 'Vaccination',     href: '/services/vaccination' },
  { label: 'Pharmacy',        href: '/services/pharmacy' },
]

const companyLinks = [
  { label: 'About Us',     href: '/about' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Track Order',  href: '/track-order' },
  { label: 'Returns',      href: '/returns' },
  { label: 'Contact',      href: '/contact' },
]

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div
        style={{
          fontSize: '10.5px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.25)',
          marginBottom: '16px',
          fontWeight: 500,
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="footer-link"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text)', padding: '56px 32px 28px' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand col */}
          <div>
            {/* Logo + wordmark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Image
                src="/logo.png"
                alt="Sophistipets"
                width={28}
                height={28}
                style={{ objectFit: 'contain', 
    opacity: 0.85,
    background: 'var(--white)',
    borderRadius: '50%',
    padding: '3px', }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-lora), serif',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: 'var(--white)',
                }}
              >
                Sophisti
                <em style={{ fontStyle: 'italic', color: 'var(--gold-soft)' }}>pets</em>
              </span>
            </div>

            <p
              style={{
                fontSize: '12.5px',
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1.8,
                marginBottom: '20px',
                maxWidth: '240px',
                fontWeight: 300,
              }}
            >
              Kolkata&apos;s full-service pet care centre — clinical excellence
              and everyday warmth, in the heart of Bhowanipore.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                {
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  text: '10A Gour Ghosh Road, Bhowanipore, Kolkata – 700025',
                },
                {
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.3">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1.14h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
                    </svg>
                  ),
                  text: '+91 98313 92669 / 89814 08631',
                },
                {
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gold-soft)" strokeWidth="1.3">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  text: 'sophistipets.bhowanipore@gmail.com',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.35)',
                    fontWeight: 300,
                  }}
                >
                  <span style={{ marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <FooterCol title="Shop"    links={shopLinks} />
          <FooterCol title="Services" links={serviceLinks} />
          <FooterCol title="Company" links={companyLinks} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11.5px',
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          <span>© 2026 Sophistipets. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy" className="footer-link-sm">Privacy Policy</Link>
            <Link href="/terms"   className="footer-link-sm">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}