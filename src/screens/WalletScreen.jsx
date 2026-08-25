import { Plus, ArrowDownLeft, ArrowUpRight } from 'lucide-react'

export default function WalletScreen({ showToast, balance, transactions, onAddFunds }) {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Welcome back, Priya</p>
        <h1>Salon Credit</h1>
      </div>

      <div className="glass-card" style={{ marginBottom: '32px' }}>
        <p>Available Balance</p>
        <div className="wallet-balance">₹{balance.toLocaleString()}</div>
        <button className="btn-primary" onClick={onAddFunds}>
          <Plus size={20} />
          Add Funds
        </button>
      </div>

      <h3>Recent Transactions</h3>
      <div className="glass-card transaction-list">
        {transactions.map(tx => (
          <div key={tx.id} className="transaction-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: tx.type === 'positive' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: '50%', color: tx.type === 'positive' ? '#4ade80' : 'var(--text-secondary)' }}>
                {tx.type === 'positive' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{tx.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{tx.date}</div>
              </div>
            </div>
            <div className={`tx-amount ${tx.type}`}>
              {tx.type === 'positive' ? '+' : '-'}₹{tx.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
