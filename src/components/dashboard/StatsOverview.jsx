import React from 'react';
import { Icon } from '../common/Icon.jsx';

export const StatsOverview = ({ stats = { learned: 0, streak: 5, mastered: 0, minutes: 0 } }) => {
  const statItems = [
    { label: 'Words Learned', value: stats.learned, icon: 'BookOpen', color: '#4f46e5', bg: 'bg-primary-50' },
    { label: 'Day Streak', value: stats.streak, icon: 'Flame', color: '#f97316', bg: 'bg-orange-50' },
    { label: 'Mastered', value: stats.mastered, icon: 'Trophy', color: '#10b981', bg: 'bg-emerald-50' },
    { label: 'Minutes', value: stats.minutes, icon: 'Clock', color: '#8b5cf6', bg: 'bg-violet-50' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {statItems.map((item) => (
        <div key={item.label} className="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm">
          <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
            <Icon name={item.icon} size={20} style={{ color: item.color }} />
          </div>
          <p className="text-2xl font-bold text-slate-900">{item.value}</p>
          <p className="text-xs text-slate-400 font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
