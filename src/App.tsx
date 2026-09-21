/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { GAMES_DATA, ALL_GENRES, ALL_PLATFORMS } from './data/games';
import { Game, Genre } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedSpotlight } from './components/FeaturedSpotlight';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';
import { WatchlistModal } from './components/WatchlistModal';
import { SurpriseModal } from './components/SurpriseModal';
import { Footer } from './components/Footer';
import { 
  Gamepad2, 
  Filter, 
  SlidersHorizontal, 
  Grid, 
  List, 
  RotateCcw, 
  Search, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'All'>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string | 'All'>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'newest' | 'title'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Modals state
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  // Persistent Watchlist / Saved Games in LocalStorage
  const [savedGameIds, setSavedGameIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('android_gamehub_saved');
      return stored ? JSON.parse(stored) : ['elden-ring', 'cyberpunk-2077'];
    } catch {
      return ['elden-ring', 'cyberpunk-2077'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('android_gamehub_saved', JSON.stringify(savedGameIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedGameIds]);

  const toggleSaveGame = (gameId: string) => {
    setSavedGameIds((prev) => 
      prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]
    );
  };

  const removeSavedGame = (gameId: string) => {
    setSavedGameIds((prev) => prev.filter((id) => id !== gameId));
  };

  const clearSavedGames = () => {
    setSavedGameIds([]);
  };

  // Filter & Sort Logic
  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      // Search matching
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        game.title.toLowerCase().includes(q) ||
        game.developer.toLowerCase().includes(q) ||
        game.publisher.toLowerCase().includes(q) ||
        game.genre.toLowerCase().includes(q) ||
        game.tags.some((t) => t.toLowerCase().includes(q)) ||
        game.subGenres.some((sg) => sg.toLowerCase().includes(q));

      // Genre matching
      const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre;

      // Platform matching
      const matchesPlatform = 
        selectedPlatform === 'All' || 
        game.platforms.some((p) => p.toLowerCase().includes(selectedPlatform.toLowerCase()));

      return matchesSearch && matchesGenre && matchesPlatform;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'newest') {
        return b.releaseYear - a.releaseYear;
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }, [searchQuery, selectedGenre, selectedPlatform, sortBy]);

  // Featured Spotlight game
  const spotlightGame = useMemo(() => {
    return GAMES_DATA.find((g) => g.featured) || GAMES_DATA[0];
  }, []);

  // Saved Games full objects
  const savedGamesList = useMemo(() => {
    return GAMES_DATA.filter((g) => savedGameIds.includes(g.id));
  }, [savedGameIds]);

  const scrollToGames = () => {
    const el = document.getElementById('games-library-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSelectedPlatform('All');
    setSortBy('rating');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar
        savedCount={savedGameIds.length}
        onOpenSaved={() => setIsWatchlistOpen(true)}
        onOpenSurprise={() => setIsSurpriseOpen(true)}
        onScrollToGames={scrollToGames}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
          onScrollToGames={scrollToGames}
          totalGames={GAMES_DATA.length}
        />

        {/* Featured Spotlight (only shown when not actively searching or filtering by niche) */}
        {!searchQuery && selectedGenre === 'All' && selectedPlatform === 'All' && (
          <FeaturedSpotlight
            game={spotlightGame}
            onSelectGame={setSelectedGame}
            isSaved={savedGameIds.includes(spotlightGame.id)}
            onToggleSave={toggleSaveGame}
          />
        )}

        {/* GAMES SECTION */}
        <section 
          id="games-library-section" 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Gamepad2 className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                  Universal Gaming Directory
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
                {selectedGenre === 'All' ? 'Complete Game Library' : `${selectedGenre} Games`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Showing <strong className="text-white">{filteredGames.length}</strong> of {GAMES_DATA.length} verified titles
                {searchQuery && <span> matching "<span className="text-cyan-300">{searchQuery}</span>"</span>}
              </p>
            </div>

            {/* View Mode Toggle & Reset */}
            <div className="flex items-center gap-2 shrink-0">
              {(searchQuery || selectedGenre !== 'All' || selectedPlatform !== 'All' || sortBy !== 'rating') && (
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}

              {/* Grid / List switch */}
              <div className="flex items-center p-1 rounded-xl bg-[#0f172a] border border-slate-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-black font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-black font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Detailed List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="space-y-4 mb-8 bg-[#0b101c] p-4 sm:p-5 rounded-2xl border border-slate-800 shadow-xl">
            {/* Genre Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs uppercase font-bold text-slate-400 shrink-0 flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-cyan-400" />
                Genre:
              </span>
              <button
                onClick={() => setSelectedGenre('All')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedGenre === 'All'
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                All Genres
              </button>
              {ALL_GENRES.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    selectedGenre === genre
                      ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            {/* Platform & Sort dropdowns */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
              {/* Platform Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  Platform:
                </span>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="bg-[#101726] text-xs text-slate-200 py-1.5 px-3 rounded-xl border border-slate-700/80 focus:border-cyan-500 focus:outline-none"
                  id="platform-filter-select"
                >
                  <option value="All">All Platforms</option>
                  {ALL_PLATFORMS.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#101726] text-xs text-slate-200 py-1.5 px-3 rounded-xl border border-slate-700/80 focus:border-cyan-500 focus:outline-none"
                  id="sort-select"
                >
                  <option value="rating">Metascore / Rating (High to Low)</option>
                  <option value="newest">Release Year (Newest First)</option>
                  <option value="title">Game Title (A to Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* GAME CARDS GRID / LIST */}
          {filteredGames.length > 0 ? (
            <div 
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  onSelect={setSelectedGame}
                  isSaved={savedGameIds.includes(game.id)}
                  onToggleSave={toggleSaveGame}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            /* No Results Fallback */
            <div className="text-center py-20 px-4 bg-[#0d1322] rounded-3xl border border-dashed border-slate-800">
              <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white uppercase font-display">
                No Games Found
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-1 mb-6">
                We couldn’t find any games matching your current search "{searchQuery}" or filter combination.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                Reset Filters & Search
              </button>
            </div>
          )}
        </section>
      </main>

      {/* GAME DETAIL MODAL */}
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
        isSaved={selectedGame ? savedGameIds.includes(selectedGame.id) : false}
        onToggleSave={toggleSaveGame}
        allGames={GAMES_DATA}
        onSelectGame={setSelectedGame}
      />

      {/* SAVED GAMES / WATCHLIST MODAL */}
      <WatchlistModal
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        savedGames={savedGamesList}
        onSelectGame={setSelectedGame}
        onRemoveGame={removeSavedGame}
        onClearAll={clearSavedGames}
      />

      {/* SURPRISE / RANDOM GAME MODAL */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        games={GAMES_DATA}
        onSelectGame={setSelectedGame}
      />

      {/* FOOTER WITH PROMINENT "Made by ANDROID" */}
      <Footer
        onSelectGenre={(genre) => {
          setSelectedGenre(genre);
          scrollToGames();
        }}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
}
