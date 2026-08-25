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
  const [balance, setBalance] = useState(2450)
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'positive', title: 'Refund: Cancelled Blowdry', date: 'Today, 10:30 AM', amount: 800 },
    { id: 2, type: 'negative', title: 'Paid for Root Touch-up', date: 'Aug 15, 2:00 PM', amount: 1200 },
    { id: 3, type: 'positive', title: 'Cashback: Diwali Offer', date: 'Oct 24, 6:00 PM', amount: 300 },
  ])

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }

  const handleAddFunds = () => {
    setBalance(prev => prev + 1000);
    setTransactions(prev => [{ id: Date.now(), type: 'positive', title: 'Wallet Recharge', date: 'Just now', amount: 1000 }, ...prev]);
    showToast('Successfully added ₹1000 to Wallet');
  };

  const handleBookingConfirm = (amount, title) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setTransactions(prev => [{ id: Date.now(), type: 'negative', title, date: 'Just now', amount }, ...prev]);
      showToast(`Booking Confirmed! ₹${amount} deducted from Wallet.`);
      setActiveTab('wallet');
    } else {
      showToast('Insufficient Wallet Balance! Please add funds.');
    }
  };

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
          {activeTab === 'wallet' && <WalletScreen showToast={showToast} balance={balance} transactions={transactions} onAddFunds={handleAddFunds} />}
          {activeTab === 'reminder' && <ReminderScreen showToast={showToast} onBook={() => setActiveTab('booking')} />}
          {activeTab === 'booking' && <BookingScreen showToast={showToast} onConfirm={handleBookingConfirm} balance={balance} />}
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
