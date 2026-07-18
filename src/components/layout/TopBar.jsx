import React, { useState } from 'react';
import { Icon } from '../common/Icon.jsx';
import { useIsMobile } from '../../hooks/useMediaQuery.js';

export const TopBar = ({ onMenuToggle, title, streak = 5 }) => {
  const isMobile = useIsMobile();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 rounded-xl hover:bg-slate-100 active:scale-95 transition-all"
          aria-label="Open menu"
        >
          <Icon name="Menu" size={24} className="text-slate-700" />
        </button>

        <h1 className="text-lg font-bold text-slate-900">{title}</h1>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-orange-50 border border-orange-200">
            <Icon name="Flame" size={16} className="text-orange-500" />
            <span className="text-sm font-bold text-orange-600">{streak}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
