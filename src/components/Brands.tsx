import Image from 'next/image'
import Link from 'next/link'

const brands = [
  { id: 'bellotta',   name: 'Bellotta',   logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-3.png',  slug: '/shop?brand=bellotta' },
  { id: 'chip-chop',  name: 'Chip Chop',  logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-7.png',  slug: '/shop?brand=chip-chop' },
  { id: 'kittos',     name: 'Kittos',     logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-4.png',  slug: '/shop?brand=kittos' },
  { id: 'me-o',       name: 'Me-O',       logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-2.png',  slug: '/shop?brand=me-o' },
  { id: 'pedigree',   name: 'Pedigree',   logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-6.png',  slug: '/shop?brand=pedigree' },
  { id: 'royal-canin',name: 'Royal Canin',logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-5.png',  slug: '/shop?brand=royal-canin' },
  { id: 'whiskas',    name: 'Whiskas',    logo: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/02/Frame-1.png',  slug: '/shop?brand=whiskas' },
]

export default function Brands() {
  return (
    <div
      style={{
        background: 'var(--white)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '40px 32px',
      }}
    >
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

        {/* Label */}
        <div
          style={{
            fontSize: '10.5px',
            color: 'var(--text-3)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: '28px',
          }}
        >
          Trusted brands we stock
        </div>

        {/* Brand row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={brand.slug}
              className="brand-chip"
            >
              {/* Logo */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="48px"
                />
              </div>
              {/* Name */}
              <span className="brand-chip-name">{brand.name}</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}