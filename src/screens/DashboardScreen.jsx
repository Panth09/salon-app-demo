import { useState } from 'react'
import { Users, TrendingUp, CalendarCheck, Repeat, LayoutDashboard, Settings, Bell, Search, Clock, MoreVertical, CheckCircle2 } from 'lucide-react'

// --- Sub Components for Dashboard Views ---

const OverviewView = () => (
  <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
    {/* Hero Metric */}
    <div className="glass-card" style={{ marginBottom: '32px', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(183, 110, 121, 0.1))', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '8px' }}>Today's Total Revenue</p>
          <div style={{ fontSize: '56px', fontWeight: 700, color: '#fff' }}>₹14,500</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4ade80', fontSize: '16px', fontWeight: 600, background: 'rgba(74, 222, 128, 0.1)', padding: '8px 16px', borderRadius: '20px' }}>
          <TrendingUp size={20} />
          +12% vs last week
        </div>
      </div>
    </div>

    {/* Metric Grid (4 columns on Desktop) */}
    <div className="metric-grid">
      <div className="glass-card metric-card">
        <Repeat size={32} color="var(--accent-gold)" style={{ margin: '0 auto' }} />
        <div className="metric-value">68%</div>
        <div style={{ color: 'var(--text-secondary)' }}>Repeat Customers</div>
      </div>
      
      <div className="glass-card metric-card">
        <CalendarCheck size={32} color="var(--accent-rose)" style={{ margin: '0 auto' }} />
        <div className="metric-value">12</div>
        <div style={{ color: 'var(--text-secondary)' }}>Appointments Today</div>
      </div>

      <div className="glass-card metric-card">
        <Users size={32} color="#4ade80" style={{ margin: '0 auto' }} />
        <div className="metric-value">₹3.2k</div>
        <div style={{ color: 'var(--text-secondary)' }}>Referral Revenue</div>
      </div>

      <div className="glass-card metric-card">
        <TrendingUp size={32} color="#60a5fa" style={{ margin: '0 auto' }} />
        <div className="metric-value">₹850</div>
        <div style={{ color: 'var(--text-secondary)' }}>Avg Add-on / Bill</div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="dashboard-bottom-grid">
      
      <div className="glass-card">
        <h3 style={{ marginBottom: '24px' }}>Top Performing Services</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '16px' }}>Keratin Hair Spa</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-gold)' }}>24 booked</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '16px' }}>Global Hair Color</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-gold)' }}>18 booked</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '16px' }}>Deep Tissue Massage</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-gold)' }}>12 booked</span>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <h3 style={{ marginBottom: '24px' }}>Recent Wallet Reloads</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Priya Sharma</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Added via UPI • 10 mins ago</div>
            </div>
            <span style={{ fontWeight: 600, color: '#4ade80' }}>+₹2,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Neha Gupta</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Added via Credit Card • 1 hr ago</div>
            </div>
            <span style={{ fontWeight: 600, color: '#4ade80' }}>+₹5,000</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Riya Singh</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Refund from Cancelled Booking</div>
            </div>
            <span style={{ fontWeight: 600, color: '#4ade80' }}>+₹800</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppointmentsView = () => (
  <div className="glass-card" style={{ animation: 'fadeIn 0.4s ease-out' }}>
    <h2 style={{ marginBottom: '24px' }}>Today's Schedule</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[
        { time: '10:00 AM', client: 'Priya Sharma', service: 'Keratin Hair Spa + Deep Conditioning', staff: 'Rahul', status: 'In Progress' },
        { time: '11:30 AM', client: 'Anita Desai', service: 'Global Color', staff: 'Simran', status: 'Upcoming' },
        { time: '01:00 PM', client: 'Kavita Singh', service: 'Classic Pedicure', staff: 'Pooja', status: 'Upcoming' },
        { time: '02:30 PM', client: 'Megha Gupta', service: 'Bridal Makeup Trial', staff: 'Simran', status: 'Upcoming' }
      ].map((apt, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: apt.status === 'In Progress' ? '4px solid var(--accent-gold)' : '4px solid transparent' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ width: '80px', fontWeight: 600, color: 'var(--accent-gold)' }}>{apt.time}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '18px' }}>{apt.client}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>{apt.service} • with {apt.staff}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {apt.status === 'In Progress' ? <Clock size={20} color="#60a5fa" /> : <CalendarCheck size={20} color="var(--text-secondary)" />}
            <span style={{ color: apt.status === 'In Progress' ? '#60a5fa' : 'var(--text-secondary)' }}>{apt.status}</span>
            <MoreVertical size={20} color="var(--text-secondary)" style={{ marginLeft: '16px', cursor: 'pointer' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CustomersView = () => (
  <div className="glass-card" style={{ animation: 'fadeIn 0.4s ease-out' }}>
    <h2 style={{ marginBottom: '24px' }}>Customer CRM</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr style={{ color: 'var(--text-secondary)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <th style={{ padding: '16px' }}>Name</th>
          <th style={{ padding: '16px' }}>Last Visit</th>
          <th style={{ padding: '16px' }}>Wallet Balance</th>
          <th style={{ padding: '16px' }}>Total Spent</th>
          <th style={{ padding: '16px' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { name: 'Priya Sharma', lastVisit: 'Today', balance: '₹2,450', total: '₹34,000', status: 'Loyal' },
          { name: 'Neha Gupta', lastVisit: '1 week ago', balance: '₹5,000', total: '₹12,500', status: 'Active' },
          { name: 'Riya Singh', lastVisit: '2 months ago', balance: '₹800', total: '₹4,200', status: 'At Risk' },
          { name: 'Anjali Verma', lastVisit: '3 days ago', balance: '₹0', total: '₹21,000', status: 'Loyal' }
        ].map((cust, i) => (
          <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <td style={{ padding: '16px', fontWeight: 600 }}>{cust.name}</td>
            <td style={{ padding: '16px', color: 'var(--text-secondary)' }}>{cust.lastVisit}</td>
            <td style={{ padding: '16px', color: 'var(--accent-gold)' }}>{cust.balance}</td>
            <td style={{ padding: '16px' }}>{cust.total}</td>
            <td style={{ padding: '16px' }}>
              <span style={{ background: cust.status === 'Loyal' ? 'rgba(74, 222, 128, 0.1)' : cust.status === 'At Risk' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.1)', color: cust.status === 'Loyal' ? '#4ade80' : cust.status === 'At Risk' ? '#ef4444' : 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600 }}>
                {cust.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ReportsView = () => (
  <div style={{ animation: 'fadeIn 0.4s ease-out', display: 'flex', flexDirection: 'column', gap: '24px' }}>
    
    <div className="glass-card">
      <h2 style={{ marginBottom: '24px' }}>Revenue Trends (Last 7 Days)</h2>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { day: 'Mon', h: '40%', val: '₹4.2k' },
          { day: 'Tue', h: '60%', val: '₹6.8k' },
          { day: 'Wed', h: '50%', val: '₹5.5k' },
          { day: 'Thu', h: '80%', val: '₹9.1k' },
          { day: 'Fri', h: '90%', val: '₹12.4k' },
          { day: 'Sat', h: '100%', val: '₹14.5k' },
          { day: 'Sun', h: '70%', val: '₹8.2k' },
        ].map((bar, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <div style={{ width: 'clamp(20px, 4vw, 40px)', height: bar.h, background: i === 5 ? 'var(--accent-gold)' : 'rgba(212, 175, 55, 0.3)', borderRadius: '6px 6px 0 0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: i === 5 ? 'var(--accent-gold)' : 'var(--text-secondary)', fontWeight: 600 }}>{bar.val}</div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{bar.day}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="dashboard-bottom-grid">
      <div className="glass-card">
         <h3 style={{ marginBottom: '16px' }}>Client Retention</h3>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}><span>New Clients</span> <span style={{color: '#4ade80', fontWeight: 600}}>32%</span></div>
         <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '24px' }}>
            <div style={{ width: '32%', height: '100%', background: '#4ade80', borderRadius: '4px' }}></div>
         </div>

         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}><span>Returning Clients</span> <span style={{color: 'var(--accent-gold)', fontWeight: 600}}>68%</span></div>
         <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
            <div style={{ width: '68%', height: '100%', background: 'var(--accent-gold)', borderRadius: '4px' }}></div>
         </div>
      </div>

      <div className="glass-card">
         <h3 style={{ marginBottom: '16px' }}>Service Popularity</h3>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}><span>Hair Care & Spas</span> <span style={{fontWeight: 600}}>45%</span></div>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}><span>Color & Styling</span> <span style={{fontWeight: 600}}>30%</span></div>
         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '14px' }}><span>Skincare</span> <span style={{fontWeight: 600}}>15%</span></div>
         <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}><span>Nails & Other</span> <span style={{fontWeight: 600}}>10%</span></div>
      </div>
    </div>

  </div>
);

// --- Main Component ---

export default function DashboardScreen({ showToast }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <OverviewView />;
      case 'appointments': return <AppointmentsView />;
      case 'customers': return <CustomersView />;
      case 'reports': return <ReportsView />;
      default: return <OverviewView />;
    }
  }

  return (
    <div className="web-dashboard">
      
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar glass-card" style={{ padding: '24px 16px' }}>
        <div style={{ marginBottom: '40px', padding: '0 16px' }}>
          <h2 style={{ color: 'var(--accent-gold)' }}>Ignitra Salon</h2>
          <p style={{ fontSize: '12px' }}>Premium Management</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </div>
          <div className={`sidebar-item ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => setActiveTab('appointments')}>
            <CalendarCheck size={20} />
            <span>Appointments</span>
          </div>
          <div className={`sidebar-item ${activeTab === 'customers' ? 'active' : ''}`} onClick={() => setActiveTab('customers')}>
            <Users size={20} />
            <span>Customers</span>
          </div>
          <div className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
            <TrendingUp size={20} />
            <span>Reports</span>
          </div>
        </nav>

        <div style={{ marginTop: 'auto' }}>
          <div className="sidebar-item" onClick={() => showToast('Opening Settings...')}>
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="dashboard-main">
        
        {/* Top Bar */}
        <header className="dashboard-header-web">
          <div>
            <h1 style={{ fontSize: '28px', textTransform: 'capitalize' }}>{activeTab}</h1>
            <p>Welcome back, Admin. Here's what's happening today.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ background: 'var(--bg-card)', padding: '12px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', border: 'var(--glass-border)' }}>
              <Search size={18} color="var(--text-secondary)" />
              <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none' }} />
            </div>
            <button 
              style={{ background: 'var(--bg-card)', border: 'var(--glass-border)', padding: '12px', borderRadius: '12px', cursor: 'pointer', color: 'white' }}
              onClick={() => showToast('You have 3 new notifications.')}
            >
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        {renderContent()}

      </main>
    </div>
  )
}
