import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { id: 'dog-food',    name: 'Dog Food',    slug: '/shop?category=dog-food',    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/ChatGPT-Image-Mar-10-2026-09_30_54-AM-1-1.png' },
  { id: 'cat-food',    name: 'Cat Food',    slug: '/shop?category=cat-food',    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-10.png' },
  { id: 'treats',      name: 'Treats',      slug: '/shop?category=treats',      image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-20.png' },
  { id: 'grooming',    name: 'Grooming',    slug: '/shop?category=grooming',    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-21.png' },
  { id: 'toys',        name: 'Toys',        slug: '/shop?category=toys',        image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-23.png' },
  { id: 'medicine',    name: 'Medicine',    slug: '/shop?category=medicine',    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-22.png' },
  { id: 'vaccines',    name: 'Vaccines',    slug: '/shop?category=vaccines',    image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-17.png' },
  { id: 'accessories', name: 'Accessories', slug: '/shop?category=accessories', image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/Image-18.png' },
  { id: 'cat-treats',  name: 'Cat Treats',  slug: '/shop?category=cat-treats',  image: 'https://sophistipets.acodez.ca/wp-content/uploads/2026/03/ChatGPT-Image-Mar-6-2026-11_51_29-AM-1.png' },
]

export default function Categories() {
  return (
    <div className="wrap">
      <div className="sec">

        {/* Header */}
        <div className="sh">
          <div>
            <div className="sh-label">Browse</div>
            <div className="sh-title">Shop by <em>Category</em></div>
          </div>
          <Link href="/shop" className="sh-link">View all →</Link>
        </div>

        {/* Scrollable row */}
        <div className="cat-scroll-row">
          {categories.map((cat) => (
            <Link key={cat.id} href={cat.slug} className="cat-card-carousel">
              <div className="cat-img-wrap-lg">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="160px"
                />
              </div>
              <div className="cat-name-lg">{cat.name}</div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}