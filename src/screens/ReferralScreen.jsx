import { Copy, Gift, Share } from 'lucide-react'

export default function ReferralScreen({ showToast }) {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Love our service?</p>
        <h1>Refer & Earn</h1>
      </div>

      <div className="glass-card" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(183, 110, 121, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--accent-rose)', marginBottom: '16px' }}>
          <Gift size={40} />
        </div>
        <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>Give ₹500, Get ₹500</h2>
        <p style={{ marginBottom: '24px' }}>
          Gift your friends ₹500 off their first visit. Once they complete a service, you get ₹500 in your Salon Wallet.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '4px' }}>
          <div style={{ flex: 1, padding: '12px', fontFamily: 'monospace', fontSize: '18px', fontWeight: 600, letterSpacing: '2px' }}>
            PRIYA500
          </div>
          <button 
            style={{ background: 'var(--bg-card)', border: 'none', color: 'var(--accent-gold)', padding: '12px 16px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}
            onClick={() => showToast('Code PRIYA500 copied to clipboard!')}
          >
            <Copy size={16} />
            Copy
          </button>
        </div>
      </div>

      <button className="btn-primary" style={{ marginBottom: '32px' }} onClick={() => showToast('Opening WhatsApp...')}>
        <Share size={20} />
        Share via WhatsApp
      </button>

      <h3>Your Impact</h3>
      <div className="metric-grid" style={{ marginTop: '16px' }}>
        <div className="glass-card metric-card" style={{ padding: '16px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Friends Joined</div>
          <div className="metric-value">3</div>
        </div>
        <div className="glass-card metric-card" style={{ padding: '16px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Earned Credits</div>
          <div className="metric-value">₹1,500</div>
        </div>
      </div>
    </div>
  )
}
