import React from 'react';
import { Icon } from '../components/common/Icon.jsx';

export const SettingsPage = () => {
  return (
    <div className="animate-slide-in pb-24 lg:pb-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Settings</h1>
      
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Appearance</h2>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Icon name="Sun" size={20} className="text-slate-400" />
              <span className="text-slate-700">Dark Mode</span>
            </div>
            <span className="text-sm text-slate-400">Coming soon</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Language</h2>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Icon name="Globe" size={20} className="text-slate-400" />
              <span className="text-slate-700">Translation Language</span>
            </div>
            <span className="text-sm font-medium text-primary-600">Lao & Thai</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">About</h2>
          <p className="text-sm text-slate-500">VocabLearner v1.0.0</p>
          <p className="text-sm text-slate-400 mt-1">Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
