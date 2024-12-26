import React from 'react';
import { Home, Code2, Cloud, BookOpen, Settings, Phone, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

function SidebarItem({ icon, label, isActive, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('repositories');
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <div className="w-64 bg-white h-screen border-r fixed left-0 top-16 flex flex-col">
      <div className="p-4 flex-1">
        <div className="mb-6">
          <select className="w-full p-2 border rounded-lg">
            <option>{user?.username}</option>
          </select>
        </div>

        <nav className="space-y-1">
          <SidebarItem
            icon={<Home className="h-5 w-5" />}
            label="Repositories"
            isActive={activeItem === 'repositories'}
            onClick={() => setActiveItem('repositories')}
          />
          <SidebarItem
            icon={<Code2 className="h-5 w-5" />}
            label="AI Code Review"
            isActive={activeItem === 'code-review'}
            onClick={() => setActiveItem('code-review')}
          />
          <SidebarItem
            icon={<Cloud className="h-5 w-5" />}
            label="Cloud Security"
            isActive={activeItem === 'cloud-security'}
            onClick={() => setActiveItem('cloud-security')}
          />
          <SidebarItem
            icon={<BookOpen className="h-5 w-5" />}
            label="How to Use"
            isActive={activeItem === 'how-to-use'}
            onClick={() => setActiveItem('how-to-use')}
          />
          <SidebarItem
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            isActive={activeItem === 'settings'}
            onClick={() => setActiveItem('settings')}
          />
        </nav>
      </div>

      {/* Bottom fixed section */}
      <div className="p-4 border-t bg-gray-50">
        <div className="space-y-2">
          <SidebarItem
            icon={<Phone className="h-5 w-5" />}
            label="Support"
            isActive={activeItem === 'support'}
            onClick={() => setActiveItem('support')}
          />
          <SidebarItem
            icon={<LogOut className="h-5 w-5" />}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}