import React from 'react';
import { Search, ShieldCheck, Cpu, Layers, Disc, ArrowRight, Flame } from 'lucide-react';
import { Genre } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedGenre: Genre | 'All';
  onSelectGenre: (genre: Genre | 'All') => void;
  onScrollToGames: () => void;
  totalGames: number;
}

const POPULAR_GENRES: Genre[] = [
  'RPG',
  'FPS & Shooter',
  'Racing',
  'Survival Horror',
  'Fighting',
  'Strategy',
  'Sports',
  'Indie'
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedGenre,
  onSelectGenre,
  onScrollToGames,
  totalGames,
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1628] via-[#090d16] to-[#090d16]">
      {/* Background ambient futuristic lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle futuristic cyber grid background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Futuristic Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Universal Video Game Information Engine</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display uppercase leading-[1.08] mb-6">
            ANDROID <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">GAMEHUB</span>
          </h1>

          {/* Clean Description */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
            Your definitive universal encyclopedia for video games across every platform and genre.
            Explore comprehensive game specifications, release milestones, system hardware requirements, 
            and deep gameplay intelligence without clutter or fluff.
          </p>

          {/* Central Interactive Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center bg-[#131b2e] rounded-2xl border border-slate-700/80 p-1.5 shadow-2xl shadow-cyan-950/30 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
              <Search className="w-5 h-5 text-cyan-400 ml-3.5 shrink-0" />
              <input
                type="text"
                id="hero-search-input"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onScrollToGames();
                }}
                placeholder="Search games by title, franchise, or developer (e.g. Elden Ring, Capcom)..."
                className="w-full bg-transparent px-3.5 py-3 text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={onScrollToGames}
                className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-black font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                id="hero-search-btn"
              >
                <span>Explore</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Genre Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              Quick Filter:
            </span>
            <button
              onClick={() => {
                onSelectGenre('All');
                onScrollToGames();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedGenre === 'All'
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
              }`}
            >
              All Genres ({totalGames})
            </button>
            {POPULAR_GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => {
                  onSelectGenre(genre);
                  onScrollToGames();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedGenre === genre
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Feature Highlights / Telemetry */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/60 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">All Genres</p>
                <p className="text-sm font-bold text-white">FPS, RPG, Sims & More</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Disc className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Multi-Platform</p>
                <p className="text-sm font-bold text-white">PC, Consoles, Mobile</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <Cpu className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Hardware Intel</p>
                <p className="text-sm font-bold text-white">Min & Rec PC Specs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Verified Info</p>
                <p className="text-sm font-bold text-white">100% Unbiased Data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
