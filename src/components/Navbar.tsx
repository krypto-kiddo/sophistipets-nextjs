'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Services', href: '/services' },
  { label: 'Vet Care', href: '/vet-care' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar({ activePath = '/' }: { activePath?: string }) {
  const [cartCount] = useState(0)

  return (
    <nav
      style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src="/logo.png"
              alt="Sophistipets logo"
              width={34}
              height={34}
              style={{ objectFit: 'contain' }}
            />
            <span
              style={{
                fontFamily: 'var(--font-lora), serif',
                fontSize: '21px',
                color: 'var(--text)',
                letterSpacing: '0.3px',
              }}
            >
              Sophisti
              <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                pets
              </span>
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <ul
          style={{
            display: 'flex',
            gap: '28px',
            listStyle: 'none',
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontSize: '13px',
                  color:
                    activePath === link.href ? 'var(--text)' : 'var(--text-2)',
                  textDecoration: 'none',
                  fontWeight: activePath === link.href ? 500 : 400,
                  letterSpacing: '0.2px',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* Search */}
          <button
            aria-label="Search"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-2)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Account */}
          <button
            aria-label="Account"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-2)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Cart */}
          <button
            aria-label="Cart"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-2)',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  background: 'var(--gold)',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: 0,
                  right: '-1px',
                }}
              />
            )}
          </button>

          {/* Book Appointment CTA */}
          <button className="btn-primary" style={{ padding: '9px 20px', fontSize: '12.5px' }}>
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  )
}