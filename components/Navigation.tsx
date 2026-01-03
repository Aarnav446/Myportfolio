import React, { useState } from 'react';
import { Rocket, Atom, Code2 } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Launchpad', href: '#home', icon: Rocket },
  { label: 'Laboratory', href: '#projects', icon: Atom },
  { label: 'Control Center', href: '#skills', icon: Code2 },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <div className="glass-card rounded-full px-2 py-2 flex items-center justify-between shadow-sm">
        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={() => setActiveSection(item.href.replace('#', ''))}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-white shadow-md text-primary font-bold scale-105' 
                      : 'text-slate-600 hover:text-primary hover:bg-white/50'
                  }`}
                >
                  {React.createElement(item.icon, { size: 18 })}
                  <span className={`hidden md:block text-xs font-mono tracking-wider ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};