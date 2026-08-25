import { Clock, Calendar, Sparkles } from 'lucide-react'

export default function ReminderScreen({ onBook, showToast }) {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Smart Nudges</p>
        <h1>Your Reminders</h1>
      </div>

      <div className="glass-card reminder-card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', marginBottom: '8px' }}>
              <Clock size={16} />
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Due This Week</span>
            </div>
            <h2 style={{ marginBottom: '4px' }}>Keratin Hair Spa</h2>
            <p>It's been 45 days since your last spa. Time for some care.</p>
          </div>
          <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--accent-gold)' }}>
            <Sparkles size={24} />
          </div>
        </div>
        
        <button className="btn-primary" onClick={onBook}>
          <Calendar size={18} />
          Book Now
        </button>
      </div>

      <div className="glass-card" style={{ opacity: 0.7 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              <Clock size={16} />
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Coming up next month</span>
            </div>
            <h2 style={{ marginBottom: '4px', fontSize: '18px' }}>Eyebrow Threading</h2>
            <p>Usually done every 4 weeks.</p>
          </div>
        </div>
        <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: '14px', width: 'auto' }} onClick={() => showToast('Reminder snoozed for 1 week.')}>
          Schedule for Later
        </button>
      </div>
    </div>
  )
}
