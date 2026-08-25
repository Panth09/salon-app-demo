import { ArrowRight, Sparkles } from 'lucide-react'

export default function LandingScreen({ onStartDemo }) {
  return (
    <div className="web-dashboard" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexDirection: 'column' }}>
      
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={{ marginBottom: '48px', animation: 'fadeIn 0.6s ease-out' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--accent-gold)', padding: '8px 16px', borderRadius: '30px', fontWeight: 600, letterSpacing: '1px', fontSize: '14px', marginBottom: '24px' }}>
            <Sparkles size={16} />
            THE SALON RETENTION ENGINE
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.2', marginBottom: '24px' }}>A memory system for salons that <span style={{ color: 'var(--accent-rose)' }}>forgot how to remember.</span></h1>
        </div>

        <div className="metric-grid" style={{ gap: '32px', marginBottom: '48px', animation: 'fadeIn 0.8s ease-out' }}>
          <div className="glass-card" style={{ padding: '32px', textAlign: 'left' }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>The Problem</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              Meet Priya. She's been going to the same salon for 3 years. But the salon doesn't know when her last visit was, what she got done, or when her spa is due.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '12px' }}>
              So she forgets. The salon forgets. And one day, she clicks an Instagram ad for a new salon. Loyal customers leave silently because nobody remembers them.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '32px', textAlign: 'left', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(183, 110, 121, 0.05))' }}>
            <h3 style={{ color: '#4ade80', marginBottom: '12px' }}>The Solution</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
              What if the salon remembered Priya as much as she trusted them? Retention is cheaper than acquisition.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginTop: '12px' }}>
              We designed a 5-Screen System that solves one thing: <strong>Never forget the relationship.</strong> Smart wallets, automated reminders, transparent add-ons, and an owner dashboard powered by data.
            </p>
          </div>
        </div>

        <div style={{ animation: 'fadeIn 1s ease-out' }}>
          <button 
            className="btn-primary" 
            style={{ width: 'auto', display: 'inline-flex', padding: '16px 48px', fontSize: '18px', borderRadius: '30px' }}
            onClick={onStartDemo}
          >
            Launch Live Demo
            <ArrowRight size={20} />
          </button>
          <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
            Interactive Demo • Customer App & Owner Portal Included
          </p>
        </div>
      </div>

    </div>
  )
}
