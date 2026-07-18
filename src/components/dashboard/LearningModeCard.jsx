import React from 'react';
import { Icon } from '../common/Icon.jsx';

export const LearningModeCard = ({ mode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: mode.bgLight }}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{ background: mode.gradient }}
          >
            <Icon name={mode.icon} size={24} />
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
            {mode.stats}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{mode.title}</h3>
        <p className="text-xs text-slate-400 font-medium mb-2">{mode.subtitle}</p>
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{mode.description}</p>

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: mode.color }}>
          <span>Start Learning</span>
          <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};

export default LearningModeCard;
