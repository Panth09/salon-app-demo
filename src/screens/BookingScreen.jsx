import { useState, useRef, useEffect } from 'react'
import { Check, Info } from 'lucide-react'

const servicesList = [
  { id: 'keratin', name: 'Keratin Hair Spa', duration: '1 hr 30 mins', price: 1200 },
  { id: 'haircut', name: 'Premium Haircut', duration: '45 mins', price: 800 },
  { id: 'color', name: 'Global Hair Color', duration: '2 hrs', price: 2500 },
  { id: 'facial', name: 'Glow Facial', duration: '1 hr', price: 1500 }
];

const datesList = ['Today, 25 Aug', 'Tomorrow, 26 Aug', 'Thu, 27 Aug', 'Fri, 28 Aug', 'Sat, 29 Aug'];

function HorizontalScroll({ children }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <div ref={scrollRef} style={{ flexShrink: 0, display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', margin: '0 -24px 16px -24px', paddingLeft: '24px', paddingRight: '24px', scrollBehavior: 'smooth' }} className="hide-scrollbar">
      {children}
    </div>
  )
}

export default function BookingScreen({ showToast, onConfirm }) {
  const [selectedService, setSelectedService] = useState(servicesList[0]);
  const [selectedDate, setSelectedDate] = useState(datesList[0]);
  const [selectedTime, setSelectedTime] = useState('10:00 AM')
  const [addons, setAddons] = useState({ deepConditioning: false, massage: false })

  let total = selectedService.price;
  if (addons.deepConditioning) total += 500;
  if (addons.massage) total += 350;

  const handleConfirm = () => {
    showToast(`Booking Confirmed for ${selectedDate}! ₹${total} paid via Wallet.`);
    if (onConfirm) onConfirm();
  };

  return (
    <div className="screen-container">
      <div className="screen-header">
        <p>Step 2 of 3</p>
        <h1>Customize Service</h1>
      </div>

      <h3 style={{ marginBottom: '16px' }}>Select Service</h3>
      <HorizontalScroll>
        {servicesList.map(srv => (
          <div 
            key={srv.id}
            role="button"
            onClick={() => setSelectedService(srv)}
            className={`service-card ${selectedService.id === srv.id ? 'selected' : ''}`}
            style={{ minWidth: '160px', padding: '16px', textAlign: 'left', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>{srv.name}</div>
            <div style={{ fontSize: '12px', color: selectedService.id === srv.id ? '#121212' : 'var(--text-secondary)' }}>{srv.duration} • ₹{srv.price}</div>
          </div>
        ))}
      </HorizontalScroll>

      <h3 style={{ marginBottom: '16px' }}>Select Date</h3>
      <HorizontalScroll>
        {datesList.map(date => (
          <div 
            key={date}
            role="button"
            onClick={() => setSelectedDate(date)}
            className={`service-card ${selectedDate === date ? 'selected' : ''}`}
            style={{ padding: '12px 20px', flexShrink: 0, borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {date}
          </div>
        ))}
      </HorizontalScroll>

      <h3 style={{ marginBottom: '16px' }}>Select Time</h3>
      <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '32px' }}>
        {[
          { time: '10:00 AM', status: 'available' },
          { time: '11:30 AM', status: 'full' },
          { time: '01:00 PM', status: 'available' },
          { time: '02:30 PM', status: 'full' },
          { time: '04:00 PM', status: 'available' },
          { time: '05:30 PM', status: 'available' }
        ].map(slot => (
          <div 
            key={slot.time}
            role="button"
            className={`service-card ${selectedTime === slot.time ? 'selected' : ''}`}
            onClick={() => slot.status === 'available' && setSelectedTime(slot.time)}
            style={{ 
              padding: '12px', 
              textAlign: 'center',
              opacity: slot.status === 'full' ? 0.5 : 1,
              cursor: slot.status === 'full' ? 'not-allowed' : 'pointer',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ fontSize: '14px', fontWeight: 600, textDecoration: slot.status === 'full' ? 'line-through' : 'none' }}>{slot.time}</div>
            <div style={{ fontSize: '10px', color: slot.status === 'full' ? '#ef4444' : (selectedTime === slot.time ? '#121212' : '#4ade80'), marginTop: '4px' }}>
              {slot.status === 'full' ? 'Booked' : 'Available'}
            </div>
          </div>
        ))}
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
          <span style={{ color: 'var(--text-secondary)' }}>{selectedService.name}</span>
          <span>₹{selectedService.price}</span>
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
