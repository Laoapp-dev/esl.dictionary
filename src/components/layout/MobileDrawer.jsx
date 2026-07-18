import React from 'react';
import { Icon } from '../common/Icon.jsx';
import { categories } from '../../utils/constants.js';

export const MobileDrawer = ({ isOpen, onClose, activeCategory, onCategoryChange, onTabChange }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden animate-slide-in shadow-2xl flex flex-col">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-violet-600 flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">VocabLearner</h1>
              <p className="text-xs text-slate-400">8,000+ words</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-100">
            <Icon name="X" size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Categories</p>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  onCategoryChange(cat.name);
                  onTabChange('categories');
                  onClose();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  activeCategory === cat.name
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="flex-1 text-left">{cat.name}</span>
                <span className="text-xs text-slate-400">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
