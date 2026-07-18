import React, { useState } from 'react';
import { Icon } from '../common/Icon.jsx';
import { useSpeech } from '../../hooks/useSpeech.js';
import { getCategoryColor, getDifficultyColor, getDifficultyLabel, getDifficultyBg } from '../../utils/helpers.js';

export const WordOfTheDay = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { speak, isSpeaking } = useSpeech();

  if (!word) return null;

  const catColor = getCategoryColor(word.category);
  const diffColor = getDifficultyColor(word.difficulty);

  return (
    <div className="animate-slide-in">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500">
            <Icon name="Sparkles" size={16} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-slate-800">Word of the Day</h2>
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </span>
      </div>

      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-[0.03]" style={{ background: catColor, transform: 'translate(30%, -30%)' }} />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span 
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: getDifficultyBg(word.difficulty), color: diffColor }}
              >
                {getDifficultyLabel(word.difficulty)}
              </span>
              <span 
                className="px-2.5 py-1 rounded-lg text-xs font-medium text-white"
                style={{ backgroundColor: catColor }}
              >
                {word.category}
              </span>
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-xl hover:bg-slate-50 active:scale-90 transition-all"
            >
              <Icon 
                name="Heart" 
                size={20} 
                className={isLiked ? 'text-red-500 fill-red-500' : 'text-slate-300'} 
              />
            </button>
          </div>

          <div className="mb-4">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-1">{word.word}</h3>
            <p className="text-sm text-slate-400 italic">{word.part_of_speech}</p>
          </div>

          <p className="text-slate-600 text-base leading-relaxed mb-5">{word.definition}</p>

          <div className="bg-slate-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-slate-500 italic">"{word.sentence}"</p>
          </div>

          {showTranslation && (
            <div className="animate-fade-in space-y-2 mb-4 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-violet-50 border border-primary-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">Lao</span>
                <p className="text-sm text-slate-700">{word.lao_translation}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">Thai</span>
                <p className="text-sm text-slate-700">{word.thai_translation}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => speak(word.word)}
              disabled={isSpeaking}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 active:scale-95 transition-all disabled:opacity-60"
            >
              <Icon name={isSpeaking ? "Volume2" : "Play"} size={16} />
              {isSpeaking ? 'Speaking...' : 'Pronounce'}
            </button>
            <button
              onClick={() => speak(word.sentence, 0.85)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 active:scale-95 transition-all"
            >
              <Icon name="Volume2" size={16} />
              Sentence
            </button>
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 active:scale-95 transition-all"
            >
              <Icon name="Globe" size={16} />
              {showTranslation ? 'Hide' : 'Translate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
