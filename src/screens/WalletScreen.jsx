import { Plus, ArrowDownLeft, ArrowUpRight } from 'lucide-react'

export default function WalletScreen({ showToast }) {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Welcome back, Priya</p>
        <h1>Salon Credit</h1>
      </div>

      <div className="glass-card" style={{ marginBottom: '32px' }}>
        <p>Available Balance</p>
        <div className="wallet-balance">₹2,450</div>
        <button className="btn-primary" onClick={() => showToast('Wallet recharge flow initiated.')}>
          <Plus size={20} />
          Add Funds
        </button>
      </div>

      <h3>Recent Transactions</h3>
      <div className="glass-card transaction-list">
        <div className="transaction-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '8px', borderRadius: '50%', color: '#4ade80' }}>
              <ArrowDownLeft size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Refund: Cancelled Blowdry</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Today, 10:30 AM</div>
            </div>
          </div>
          <div className="tx-amount positive">+₹800</div>
        </div>

        <div className="transaction-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: '50%', color: 'var(--text-secondary)' }}>
              <ArrowUpRight size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Paid for Root Touch-up</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Aug 15, 2:00 PM</div>
            </div>
          </div>
          <div className="tx-amount negative">-₹1,200</div>
        </div>

        <div className="transaction-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(74, 222, 128, 0.1)', padding: '8px', borderRadius: '50%', color: '#4ade80' }}>
              <ArrowDownLeft size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Cashback: Diwali Offer</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Oct 24, 6:00 PM</div>
            </div>
          </div>
          <div className="tx-amount positive">+₹300</div>
        </div>
      </div>
    </div>
  )
}
