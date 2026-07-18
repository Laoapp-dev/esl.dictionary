import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar.jsx';
import { BottomNav } from './components/layout/BottomNav.jsx';
import { TopBar } from './components/layout/TopBar.jsx';
import { MobileDrawer } from './components/layout/MobileDrawer.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { useIsMobile } from './hooks/useMediaQuery.js';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const getPageTitle = () => {
    if (activeCategory) return activeCategory;
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'categories': return 'Categories';
      case 'favorites': return 'Favorites';
      case 'stats': return 'Progress';
      case 'settings': return 'Settings';
      default: return 'VocabLearner';
    }
  };

  const renderContent = () => {
    if (selectedMode) {
      return (
        <div className="animate-slide-in pb-24 lg:pb-8">
          <div className="flex items-center gap-3 mb-6">
            <button 
              onClick={() => setSelectedMode(null)}
              className="p-2 rounded-xl hover:bg-slate-100 active:scale-95 transition-all"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-bold text-slate-900 capitalize">{selectedMode} Mode</h1>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-slate-200/60 text-center">
            <p className="text-slate-500">Coming in Phase 2...</p>
          </div>
        </div>
      );
    }

    if (activeCategory) {
      return <CategoryPage categoryName={activeCategory} onWordSelect={(w) => console.log(w)} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            onModeSelect={setSelectedMode}
            onCategorySelect={(cat) => { setActiveCategory(cat); setActiveTab('categories'); }}
          />
        );
      case 'categories':
        return (
          <div className="animate-slide-in pb-24 lg:pb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">All Categories</h1>
            <p className="text-slate-500">Select a category from the sidebar to browse words.</p>
          </div>
        );
      case 'favorites':
        return (
          <div className="animate-slide-in pb-24 lg:pb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Favorites</h1>
            <p className="text-slate-500">Your favorited words will appear here.</p>
          </div>
        );
      case 'stats':
        return (
          <div className="animate-slide-in pb-24 lg:pb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Progress</h1>
            <p className="text-slate-500">Track your learning progress here.</p>
          </div>
        );
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard onModeSelect={setSelectedMode} onCategorySelect={setActiveCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Top Bar */}
      <TopBar 
        onMenuToggle={() => setDrawerOpen(true)} 
        title={getPageTitle()}
      />

      {/* Desktop Sidebar */}
      <Sidebar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        isOpen={true}
      />

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <BottomNav 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  );
}

export default App;
