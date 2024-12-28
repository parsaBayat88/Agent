import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Trophy,
  Cpu,
  Calendar,
  CreditCard,
  Menu,
  Building2
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
  { path: '/dashboard/leads', icon: Users, label: 'Leads' },
  { path: '/dashboard/achievements', icon: Trophy, label: 'Achievements' },
  { path: '/dashboard/ai-tools', icon: Cpu, label: 'AI Tools' },
  { path: '/dashboard/calendar', icon: Calendar, label: 'Calendar' },
  { path: '/dashboard/billing', icon: CreditCard, label: 'Billing' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const location = useLocation();

  return (
    <div className={`glass-card border-r border-white/20 transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-20'
    } min-h-screen relative z-10`}>
      <div className="p-4 flex justify-between items-center">
        {isOpen && (
          <div className="flex items-center gap-2">
            <Building2 size={24} className="text-primary-600" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              RealAI
            </h1>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="p-2 hover:bg-primary-100 rounded-xl transition-colors"
        >
          <Menu size={24} className="text-primary-600" />
        </button>
      </div>
      
      <nav className="mt-8 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2.5 mb-1 rounded-xl transition-all
                ${isActive 
                  ? 'bg-primary-100 text-primary-700' 
                  : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }
                ${isOpen ? 'gap-3' : 'justify-center'}`}
            >
              <Icon size={20} />
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}