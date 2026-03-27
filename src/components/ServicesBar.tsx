'use client'

import { useState } from 'react'

const services = [
  {
    id: 'emergency',
    name: 'Emergency Vet',
    description: 'Critical & ICU care',
    isLive: true,
    liveLabel: '● Live 24×7',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'surgery',
    name: 'Surgery & Pharmacy',
    description: 'In-house surgical care',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
      </svg>
    ),
  },
  {
    id: 'grooming',
    name: 'Grooming',
    description: 'Gentle expert grooming',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 'walking',
    name: 'Dog Walking',
    description: 'Disciplined walks & training',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'shop',
    name: 'Pet Shop',
    description: '500+ products stocked',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
]

export default function ServicesBar() {
  const [active, setActive] = useState('emergency')

  return (
    <div
      style={{
        background: 'var(--white)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
        }}
      >
        {services.map((svc, i) => {
          const isActive = active === svc.id
          return (
            <div
              key={svc.id}
              onClick={() => setActive(svc.id)}
              className={`svc-item ${isActive ? 'active' : ''}`}
              style={{
                borderLeft: i === 0 ? '1px solid var(--border)' : undefined,
              }}
            >
              <div className="svc-icon-wrap">
                {svc.icon}
              </div>

              {/* Name */}
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  marginBottom: '3px',
                }}
              >
                {svc.name}
              </div>

              {/* Description */}
              <div
                style={{
                  fontSize: '11.5px',
                  color: 'var(--text-3)',
                  lineHeight: 1.5,
                }}
              >
                {svc.description}
              </div>

              {/* Live badge */}
              {svc.isLive && (
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '8px',
                    fontSize: '10.5px',
                    color: 'var(--gold)',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                  }}
                >
                  {svc.liveLabel}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}