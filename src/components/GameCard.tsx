import React from 'react';
import { Game } from '../types';
import { Star, Bookmark, Calendar, ArrowRight, Layers } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
  isSaved: boolean;
  onToggleSave: (gameId: string) => void;
  viewMode?: 'grid' | 'list';
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelect,
  isSaved,
  onToggleSave,
  viewMode = 'grid',
}) => {
  // Score color helper
  const getRatingBadgeClass = (score: number) => {
    if (score >= 90) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
    if (score >= 80) return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
    return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="group relative bg-[#0e1524] hover:bg-[#121b2d] rounded-2xl border border-slate-800 hover:border-cyan-500/50 p-4 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        id={`game-row-${game.id}`}
      >
        {/* Thumbnail */}
        <div 
          onClick={() => onSelect(game)}
          className="relative w-full sm:w-44 h-32 rounded-xl overflow-hidden shrink-0 cursor-pointer bg-slate-900"
        >
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-sm text-cyan-300 border border-cyan-500/30">
            {game.genre}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className={`px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1 ${getRatingBadgeClass(game.rating)}`}>
              <Star className="w-3 h-3 fill-current" />
              {game.rating}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {game.releaseYear}
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 font-medium truncate">
              {game.developer}
            </span>
          </div>

          <h3 
            onClick={() => onSelect(game)}
            className="text-lg font-bold text-white font-display uppercase tracking-wide group-hover:text-cyan-300 transition-colors cursor-pointer truncate"
          >
            {game.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 mt-1 mb-2.5">
            {game.shortDescription}
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap gap-1">
            {game.platforms.slice(0, 4).map((p) => (
              <span key={p} className="px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 text-[11px] border border-slate-800">
                {p}
              </span>
            ))}
            {game.platforms.length > 4 && (
              <span className="px-1.5 py-0.5 rounded bg-slate-900/90 text-slate-400 text-[10px]">
                +{game.platforms.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0 justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
          <button
            onClick={() => onSelect(game)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/30 text-xs font-bold transition-all"
          >
            <span>Intel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onToggleSave(game.id)}
            className={`p-2 rounded-xl border text-xs transition-all ${
              isSaved
                ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                : 'bg-slate-900 border-slate-700/80 text-slate-400 hover:text-white'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save game'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-400' : ''}`} />
          </button>
        </div>
      </div>
    );
  }

  // Default: Grid View
  return (
    <div 
      className="group relative flex flex-col bg-[#0e1524] rounded-2xl border border-slate-800/90 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
      id={`game-card-${game.id}`}
    >
      {/* Cover Artwork Container */}
      <div 
        onClick={() => onSelect(game)}
        className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer bg-slate-950"
      >
        <img
          src={game.coverImage}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {/* Genre Badge */}
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-black/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
            {game.genre}
          </span>

          {/* Rating Pill */}
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold backdrop-blur-md border ${getRatingBadgeClass(game.rating)}`}>
            <Star className="w-3 h-3 fill-current" />
            <span>{game.rating}</span>
          </div>
        </div>

        {/* Bookmark quick icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(game.id);
          }}
          className={`absolute bottom-3 right-3 z-10 p-2 rounded-xl backdrop-blur-md transition-all ${
            isSaved
              ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
              : 'bg-black/60 hover:bg-black/80 text-slate-300 hover:text-white border border-white/10'
          }`}
          title={isSaved ? 'In your Watchlist' : 'Add to Watchlist'}
          id={`save-btn-${game.id}`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-black' : ''}`} />
        </button>
      </div>

      {/* Body Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Release year & Developer */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {game.releaseYear}
            </span>
            <span className="truncate max-w-[150px] text-right text-slate-400">
              {game.developer}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(game)}
            className="text-lg font-bold text-white font-display uppercase tracking-wide group-hover:text-cyan-300 transition-colors cursor-pointer mb-2 line-clamp-1"
          >
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-300/90 leading-relaxed mb-4 line-clamp-2">
            {game.shortDescription}
          </p>
        </div>

        <div>
          {/* Platform badges */}
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1.5 flex items-center gap-1">
              <Layers className="w-3 h-3 text-cyan-400" />
              Platforms:
            </p>
            <div className="flex flex-wrap gap-1">
              {game.platforms.slice(0, 3).map((p) => (
                <span
                  key={p}
                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                >
                  {p}
                </span>
              ))}
              {game.platforms.length > 3 && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-900 text-cyan-400 border border-slate-800">
                  +{game.platforms.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Details CTA button */}
          <button
            onClick={() => onSelect(game)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 border border-slate-700/80 hover:border-transparent text-slate-200 hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300"
            id={`open-intel-${game.id}`}
          >
            <span>View Game Intel</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
