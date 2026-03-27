'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire to email service (Mailchimp, Resend etc.)
    setSubmitted(true)
  }

  return (
    <div
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '72px 32px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '480px', margin: '0 auto' }}>

        <div className="sh-label" style={{ textAlign: 'center', marginBottom: '12px' }}>
          Stay Connected
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-lora), serif',
            fontSize: '32px',
            fontWeight: 400,
            color: 'var(--text)',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}
        >
          For the <em style={{ fontStyle: 'italic' }}>devoted</em> pet parent
        </h2>

        <p
          style={{
            fontSize: '13.5px',
            color: 'var(--text-2)',
            marginBottom: '28px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Vet tips, new arrivals, and exclusive offers — delivered gently,
          once a week. No noise.
        </p>

        {submitted ? (
          <div
            style={{
              background: 'var(--gold-pale)',
              border: '1px solid var(--gold-soft)',
              borderRadius: '8px',
              padding: '14px 20px',
              fontSize: '13.5px',
              color: 'var(--gold)',
              fontWeight: 500,
            }}
          >
            ✓ You&apos;re in — welcome to the Sophistipets family!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1,
                padding: '13px 18px',
                border: 'none',
                fontSize: '13px',
                fontFamily: 'var(--font-inter), sans-serif',
                color: 'var(--text)',
                outline: 'none',
                background: 'transparent',
              }}
            />
            <button
              type="submit"
              className="btn-sm"
              style={{ borderRadius: '0 6px 6px 0' }}
            >
              Subscribe
            </button>
          </form>
        )}

        <p
          style={{
            fontSize: '11.5px',
            color: 'var(--text-3)',
            marginTop: '12px',
          }}
        >
          🔒 No spam, ever. Unsubscribe anytime.
        </p>

      </div>
    </div>
  )
}