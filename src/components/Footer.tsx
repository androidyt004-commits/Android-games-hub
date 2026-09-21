import React from 'react';
import { Gamepad2, Shield, Heart, Terminal, Sparkles } from 'lucide-react';
import { ALL_GENRES } from '../data/games';
import { Genre } from '../types';

interface FooterProps {
  onSelectGenre: (genre: Genre | 'All') => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectGenre, onScrollToTop }) => {
  return (
    <footer className="mt-20 border-t border-cyan-500/20 bg-[#060a12] text-slate-400 relative overflow-hidden" id="main-footer">
      {/* Subtle futuristic background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={onScrollToTop}>
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white font-display uppercase">
                  ANDROID <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">GAMEHUB</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-cyan-400 font-mono">
                  Universal Gaming Encyclopedia
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A comprehensive, unbiased gaming database cataloging verified video games across PC, PlayStation, Xbox, Nintendo Switch, and mobile platforms. Built for real gamers seeking factual hardware specs and gameplay intelligence.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                No ads or clickbait
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                Non-copyrighted reference use
              </span>
            </div>
          </div>

          {/* Quick Genres */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4 font-display flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Game Categories
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {ALL_GENRES.slice(0, 8).map((genre) => (
                <button
                  key={genre}
                  onClick={() => {
                    onSelectGenre(genre);
                    const el = document.getElementById('games-library-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left text-slate-400 hover:text-cyan-300 transition-colors py-1 truncate"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Standards & Transparency */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-4 font-display">
              Information Standard
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• System hardware benchmarks</li>
              <li>• Verified developer & publisher data</li>
              <li>• Multi-platform release tracking</li>
              <li>• Content advisories & ESRB ratings</li>
              <li>• Key gameplay mechanics breakdown</li>
            </ul>
          </div>
        </div>

        {/* PROMINENT REQUIREMENT: "Made by ANDROID" */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} ANDROID GAMEHUB. All game titles, trademarks, and associated logos belong to their respective publishers.
          </p>

          {/* Prominent, clean "Made by ANDROID" badge */}
          <div 
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0d1627] via-[#101b33] to-[#0d1627] border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10 hover:border-cyan-400 transition-all group"
            id="made-by-android-badge"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
              Made by <strong className="text-white text-sm font-black font-display tracking-widest group-hover:text-cyan-400 transition-colors">ANDROID</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
