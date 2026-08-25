import { useState } from 'react'
import { Wallet, Bell, CalendarPlus, Share2, BarChart2, Briefcase, UserCircle } from 'lucide-react'
import WalletScreen from './screens/WalletScreen'
import ReminderScreen from './screens/ReminderScreen'
import BookingScreen from './screens/BookingScreen'
import ReferralScreen from './screens/ReferralScreen'
import DashboardScreen from './screens/DashboardScreen'
import LandingScreen from './screens/LandingScreen'

function App() {
  const [isDemoStarted, setIsDemoStarted] = useState(false)
  const [activeTab, setActiveTab] = useState('wallet')
  const [viewMode, setViewMode] = useState('customer') // 'customer' or 'owner'
  const [toasts, setToasts] = useState([])

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }

  if (!isDemoStarted) {
    return (
      <div className="app-container">
        <LandingScreen onStartDemo={() => setIsDemoStarted(true)} />
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className="toast">{t.message}</div>
        ))}
      </div>

      <button 
        className="mode-toggle"
        onClick={() => {
          setViewMode(viewMode === 'customer' ? 'owner' : 'customer');
          showToast(`Switched to ${viewMode === 'customer' ? 'Owner Portal' : 'Customer App'}`);
        }}
      >
        {viewMode === 'customer' ? <Briefcase size={18} /> : <UserCircle size={18} />}
        {viewMode === 'customer' ? 'Switch to Owner Portal' : 'Switch to Customer App'}
      </button>

      {viewMode === 'customer' ? (
        <div className="mobile-frame">
          {activeTab === 'wallet' && <WalletScreen showToast={showToast} />}
          {activeTab === 'reminder' && <ReminderScreen showToast={showToast} onBook={() => setActiveTab('booking')} />}
          {activeTab === 'booking' && <BookingScreen showToast={showToast} onConfirm={() => setActiveTab('wallet')} />}
          {activeTab === 'referral' && <ReferralScreen showToast={showToast} />}

          <nav className="bottom-nav">
            <button 
              className={`nav-item ${activeTab === 'wallet' ? 'active' : ''}`}
              onClick={() => setActiveTab('wallet')}
            >
              <Wallet size={24} />
              <span>Wallet</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'reminder' ? 'active' : ''}`}
              onClick={() => setActiveTab('reminder')}
            >
              <Bell size={24} />
              <span>Reminders</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveTab('booking')}
            >
              <CalendarPlus size={24} />
              <span>Book</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'referral' ? 'active' : ''}`}
              onClick={() => setActiveTab('referral')}
            >
              <Share2 size={24} />
              <span>Refer</span>
            </button>
          </nav>
        </div>
      ) : (
        <DashboardScreen showToast={showToast} />
      )}
    </div>
  )
}

export default App
