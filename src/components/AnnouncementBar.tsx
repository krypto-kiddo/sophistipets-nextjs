export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: 'var(--bg3)',
        color: 'var(--text-2)',
        fontSize: '13px',
        textAlign: 'center',
        padding: '8px 16px',
        letterSpacing: '0.4px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      Free delivery above ₹499 &nbsp;·&nbsp; 24×7 Emergency Vet:{' '}
      <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>
        +91 98313 92669
      </strong>{' '}
      &nbsp;·&nbsp; Bhowanipore, Kolkata
    </div>
  )
}