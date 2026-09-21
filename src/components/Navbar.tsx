import React, { useState } from 'react';
import { Gamepad2, Bookmark, Sparkles, Search, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenSurprise: () => void;
  onScrollToGames: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenSurprise,
  onScrollToGames,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090d16]/90 border-b border-cyan-500/20 shadow-2xl shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0d1322] rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-display uppercase group-hover:text-cyan-300 transition-colors">
                ANDROID
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-display uppercase">
                GAMEHUB
              </span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-cyan-400/70 font-mono -mt-1 font-semibold">
              Universal Game Intel
            </p>
          </div>
        </div>

        {/* Desktop Quick Search bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="navbar-search-input"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (e.target.value) {
                  onScrollToGames();
                }
              }}
              placeholder="Search games, developers, genres..."
              className="w-full bg-[#111827]/90 text-sm text-slate-200 placeholder-slate-500 pl-10 pr-4 py-2 rounded-xl border border-slate-700/60 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setShowSearchInput(!showSearchInput)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
            aria-label="Toggle search"
            id="mobile-search-toggle"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Random / Surprise Game */}
          <button
            onClick={onOpenSurprise}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 text-xs sm:text-sm font-semibold transition-all shadow-sm group"
            id="surprise-game-button"
            title="Discover a random game"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          {/* Saved Games / Watchlist */}
          <button
            onClick={onOpenSaved}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-emerald-500/60 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
            id="watchlist-button"
          >
            <Bookmark className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Saved</span>
            {savedCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold text-black bg-emerald-400 rounded-full shadow-sm shadow-emerald-500/50">
                {savedCount}
              </span>
            )}
          </button>

          {/* Catalog link */}
          <button
            onClick={onScrollToGames}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
            id="browse-games-button"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Library</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search */}
      {showSearchInput && (
        <div className="md:hidden px-4 pb-3 pt-1 border-t border-slate-800/80 bg-[#0d1322]">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                onScrollToGames();
              }}
              placeholder="Search all games..."
              className="w-full bg-[#162035] text-sm text-slate-200 placeholder-slate-500 pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:border-cyan-500 focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 border-t border-slate-800 bg-[#0d1322] space-y-2">
          <button
            onClick={() => {
              onScrollToGames();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-lg bg-slate-800/80 text-white font-medium text-sm flex items-center justify-between"
          >
            <span>Explore All Games</span>
            <Compass className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            onClick={() => {
              onOpenSurprise();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-lg bg-slate-800/80 text-white font-medium text-sm flex items-center justify-between"
          >
            <span>Surprise Game Discovery</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            onClick={() => {
              onOpenSaved();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2.5 rounded-lg bg-slate-800/80 text-white font-medium text-sm flex items-center justify-between"
          >
            <span>Saved Games Watchlist</span>
            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
              {savedCount}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
