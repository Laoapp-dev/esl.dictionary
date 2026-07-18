import React from 'react';
import { WordOfTheDay } from '../components/dashboard/WordOfTheDay.jsx';
import { LearningModeCard } from '../components/dashboard/LearningModeCard.jsx';
import { StatsOverview } from '../components/dashboard/StatsOverview.jsx';
import { CategoryPills } from '../components/dashboard/CategoryPills.jsx';
import { learningModes } from '../utils/constants.js';
import { getTodayWord } from '../utils/helpers.js';
import wordsData from '../data/words.json';

export const Dashboard = ({ onModeSelect, onCategorySelect }) => {
  const todayWord = getTodayWord(wordsData);

  return (
    <div className="space-y-6 sm:space-y-8 pb-24 lg:pb-8">
      {/* Stats */}
      <StatsOverview stats={{ learned: 0, streak: 5, mastered: 0, minutes: 12 }} />
      
      {/* Word of the Day */}
      <WordOfTheDay word={todayWord} />
      
      {/* Categories */}
      <CategoryPills onCategorySelect={onCategorySelect} />
      
      {/* Learning Modes */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-4 px-1">Learning Modes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {learningModes.map((mode) => (
            <LearningModeCard 
              key={mode.id} 
              mode={mode} 
              onClick={() => onModeSelect(mode.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
