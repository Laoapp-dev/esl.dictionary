import React from 'react';
import { Icon } from '../common/Icon.jsx';
import { categories } from '../../utils/constants.js';

export const CategoryPills = ({ onCategorySelect }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-lg font-bold text-slate-800">Browse by Category</h2>
        <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
          View All <Icon name="ChevronRight" size={16} />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
        {categories.slice(0, 8).map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategorySelect(cat.name)}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 active:scale-95 transition-all"
          >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
            <span className="text-sm font-medium text-slate-700 whitespace-nowrap">{cat.name}</span>
            <span className="text-xs text-slate-400">{cat.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPills;
