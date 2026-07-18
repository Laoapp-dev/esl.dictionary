import React from 'react';
import { Icon } from '../components/common/Icon.jsx';
import wordsData from '../data/words.json';
import { getCategoryColor } from '../utils/helpers.js';

export const CategoryPage = ({ categoryName, onWordSelect }) => {
  const filteredWords = wordsData.filter(w => w.category === categoryName);
  const color = getCategoryColor(categoryName);

  return (
    <div className="animate-slide-in pb-24 lg:pb-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
        <h1 className="text-2xl font-bold text-slate-900">{categoryName}</h1>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-medium">
          {filteredWords.length} words
        </span>
      </div>

      {filteredWords.length === 0 ? (
        <div className="text-center py-16">
          <Icon name="BookOpen" size={48} className="text-slate-300 mx-auto mb-4" />
          <p className="text-slate-400">No words in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredWords.map((word) => (
            <button
              key={word.id}
              onClick={() => onWordSelect(word)}
              className="text-left bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-900">{word.word}</h3>
                <span className="text-xs text-slate-400">{word.part_of_speech}</span>
              </div>
              <p className="text-sm text-slate-500 line-clamp-2">{word.definition}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
