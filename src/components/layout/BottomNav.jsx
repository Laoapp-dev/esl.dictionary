import React from 'react';
import { Icon } from '../common/Icon.jsx';
import { navItems } from '../../utils/constants.js';

export const BottomNav = ({ activeTab, onTabChange, activeCategory, onCategoryChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200/60 lg:hidden safe-area-pb">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { onTabChange(item.id); onCategoryChange(null); }}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[64px] ${
              activeTab === item.id && !activeCategory
                ? 'text-primary-600'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className={`p-1.5 rounded-lg transition-all duration-200 ${
              activeTab === item.id && !activeCategory
                ? 'bg-primary-50'
                : ''
            }`}>
              <Icon name={item.icon} size={22} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
