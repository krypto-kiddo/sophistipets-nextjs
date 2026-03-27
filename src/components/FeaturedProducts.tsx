import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: '1',
    name: 'Adult Chicken & Vegetables 2.8kg',
    brand: 'Pedigree',
    price: 655,
    originalPrice: 720,
    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2018/10/pedigree_fixed-300x300.png',
    rating: 5,
    reviewCount: 2,
    badge: 'Bestseller',
    bg: '#f7f3ec',
  },
  {
    id: '2',
    name: 'Maxi Puppy 1kg',
    brand: 'Royal Canin',
    price: 1030,
    originalPrice: 1150,
    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2018/05/royal-canin-300x300.webp',
    rating: 5,
    reviewCount: 2,
    badge: 'Bestseller',
    bg: '#eef2f6',
  },
  {
    id: '3',
    name: 'Diced Chicken Treat',
    brand: 'Chip Chop',
    price: 215,
    originalPrice: null,
    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2020/12/chip-chop-300x300.jpg',
    rating: 4,
    reviewCount: 0,
    badge: null,
    bg: '#f4f0ea',
  },
  {
    id: '4',
    name: 'Milk Chew Stick',
    brand: 'Milky Chew',
    price: 390,
    originalPrice: null,
    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2020/12/milky-Chew-300x300.webp',
    rating: 4,
    reviewCount: 0,
    badge: null,
    bg: '#f7f4ef',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '1px' }}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? '★' : '☆'
      ).join('')}
    </span>
  )
}

export default function FeaturedProducts() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <div className="sec">

          {/* Header */}
          <div className="sh">
            <div>
              <div className="sh-label">Vet-approved picks</div>
              <div className="sh-title">Recommended <em>for You</em></div>
            </div>
            <Link href="/shop" className="sh-link">View all products →</Link>
          </div>

          {/* Grid */}
          <div className="prod-grid">
            {products.map((p) => (
              <div key={p.id} className="prod-card">

                {/* Image */}
                <div
                  className="prod-img"
                  style={{ background: p.bg }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'contain', padding: '16px' }}
                    sizes="300px"
                  />
                  {p.badge && (
                    <span className="prod-badge">{p.badge}</span>
                  )}
                  <button className="prod-fav" aria-label="Add to wishlist">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <div className="prod-body">
                  <div className="prod-brand">{p.brand}</div>
                  <div className="prod-name">{p.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                    <Stars rating={p.rating} />
                    <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>
                      ({p.reviewCount})
                    </span>
                  </div>
                  <div className="prod-foot">
                    <div>
                      <span className="prod-price">₹{p.price.toLocaleString('en-IN')}</span>
                      {p.originalPrice && (
                        <span className="prod-was">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    <button className="prod-add" aria-label="Add to cart">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}