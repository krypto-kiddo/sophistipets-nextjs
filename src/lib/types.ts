export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  badge?: string
  category: string
  bgColor?: string
}

export interface Category {
  id: string
  name: string
  emoji: string
  slug: string
}

export interface Service {
  id: string
  name: string
  description: string
  isLive?: boolean
  liveLabel?: string
}

export interface NavLink {
  label: string
  href: string
}