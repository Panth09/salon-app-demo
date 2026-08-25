import { useState } from 'react'
import { Check, Info } from 'lucide-react'

export default function BookingScreen({ showToast, onConfirm }) {
  const [addons, setAddons] = useState({ deepConditioning: false, massage: false })

  const basePrice = 1200;
  let total = basePrice;
  if (addons.deepConditioning) total += 500;
  if (addons.massage) total += 350;

  const handleConfirm = () => {
    showToast(`Booking Confirmed! ₹${total} paid via Wallet.`);
    if (onConfirm) onConfirm();
  };

  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Step 2 of 3</p>
        <h1>Customize Service</h1>
      </div>

      <div className="glass-card" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px' }}>Keratin Hair Spa</h2>
        <p>1 hr 30 mins • ₹{basePrice}</p>
      </div>

      <h3 style={{ marginBottom: '16px' }}>Recommended Add-ons</h3>
      
      <div 
        className={`addon-item ${addons.deepConditioning ? 'selected' : ''}`}
        onClick={() => {
          setAddons({...addons, deepConditioning: !addons.deepConditioning});
          if (!addons.deepConditioning) showToast('Added Deep Conditioning Mask');
        }}
      >
        <div>
          <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Deep Conditioning Mask
            <Info size={14} color="var(--text-secondary)" />
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>+15 mins • ₹500</div>
        </div>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--accent-gold)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: addons.deepConditioning ? 'var(--accent-gold)' : 'transparent' }}>
          {addons.deepConditioning && <Check size={16} color="#121212" />}
        </div>
      </div>

      <div 
        className={`addon-item ${addons.massage ? 'selected' : ''}`}
        onClick={() => {
          setAddons({...addons, massage: !addons.massage});
          if (!addons.massage) showToast('Added Extended Head Massage');
        }}
      >
        <div>
          <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Extended Head Massage
            <Info size={14} color="var(--text-secondary)" />
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>+10 mins • ₹350</div>
        </div>
        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--accent-gold)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: addons.massage ? 'var(--accent-gold)' : 'transparent' }}>
          {addons.massage && <Check size={16} color="#121212" />}
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '24px', background: 'rgba(212, 175, 55, 0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Base Price</span>
          <span>₹{basePrice}</span>
        </div>
        {addons.deepConditioning && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Deep Conditioning</span>
            <span>₹500</span>
          </div>
        )}
        {addons.massage && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Extended Massage</span>
            <span>₹350</span>
          </div>
        )}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', margin: '12px 0' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '18px' }}>
          <span>Total</span>
          <span style={{ color: 'var(--accent-gold)' }}>₹{total}</span>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
        <button className="btn-primary" onClick={handleConfirm}>Confirm & Pay ₹{total}</button>
      </div>
    </div>
  )
}
