import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sophistipets — Care. Comfort. Quality for Your Pets.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(184,145,42,0.15) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
            marginBottom: '20px',
            position: 'relative',
          }}
        >
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '72px',
              fontWeight: 400,
              color: '#FFFFFF',
              letterSpacing: '-1px',
            }}
          >
            Sophisti
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: '72px',
              fontWeight: 400,
              color: '#B8912A',
              fontStyle: 'italic',
              letterSpacing: '-1px',
            }}
          >
            pets
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'rgba(184,145,42,0.5)',
            marginBottom: '20px',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '22px',
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Care. Comfort. Quality.
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: '14px',
            color: 'rgba(184,145,42,0.7)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Bhowanipore, Kolkata
        </div>
      </div>
    ),
    { ...size }
  )
}
