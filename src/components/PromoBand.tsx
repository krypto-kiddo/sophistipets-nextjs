export default function PromoBand() {
  return (
    <div
      style={{
        background: 'var(--gold-pale)',
        borderTop: '1px solid var(--gold-soft)',
        borderBottom: '1px solid var(--gold-soft)',
        padding: '16px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <p style={{ fontSize: '13.5px', color: 'var(--text-2)' }}>
          ✦{' '}
          <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>
            This week:
          </strong>{' '}
          Get 15% off all medicines with any vet consultation — in-store &amp; online.
        </p>
        <button className="btn-sm">Claim Offer</button>
      </div>
    </div>
  )
}