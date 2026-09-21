import React, { useState } from 'react';
import { Game } from '../types';
import { X, Sparkles, RefreshCw, ArrowRight, Star, Calendar } from 'lucide-react';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: Game[];
  onSelectGame: (game: Game) => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({
  isOpen,
  onClose,
  games,
  onSelectGame,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [chosenIndex, setChosenIndex] = useState(() => Math.floor(Math.random() * games.length));

  if (!isOpen || games.length === 0) return null;

  const currentGame = games[chosenIndex] || games[0];

  const handleSpin = () => {
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      setChosenIndex(Math.floor(Math.random() * games.length));
      counter++;
      if (counter > 10) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 80);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-[#0c1220] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-[#0e172a] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white font-display uppercase tracking-wider">
              Random Game Discovery
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-slate-700 bg-slate-950 shadow-inner group">
            <img
              src={currentGame.coverImage}
              alt={currentGame.title}
              className={`w-full h-full object-cover transition-all duration-300 ${
                isSpinning ? 'blur-sm scale-105' : 'blur-0 scale-100'
              }`}
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-black/80 text-cyan-300 border border-cyan-500/30">
              {currentGame.genre}
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-black/80 text-amber-300 border border-amber-500/30">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{currentGame.rating}</span>
            </div>
          </div>

          <h3 className="text-2xl font-extrabold text-white font-display uppercase tracking-wide mb-1">
            {currentGame.title}
          </h3>

          <p className="text-xs text-slate-400 mb-3 flex items-center justify-center gap-2">
            <span>By <strong className="text-slate-200">{currentGame.developer}</strong></span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {currentGame.releaseYear}</span>
          </p>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-6 bg-[#090e1a] p-3 rounded-xl border border-slate-800">
            {currentGame.shortDescription}
          </p>

          <div className="flex items-center gap-3 justify-center">
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSpinning ? 'animate-spin text-cyan-400' : ''}`} />
              <span>Roll Again</span>
            </button>

            <button
              onClick={() => {
                onSelectGame(currentGame);
                onClose();
              }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <span>Inspect Intel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
