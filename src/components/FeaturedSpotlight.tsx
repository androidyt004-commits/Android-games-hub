import React from 'react';
import { Game } from '../types';
import { Star, Sparkles, Calendar, Monitor, Award, Bookmark, ArrowUpRight } from 'lucide-react';

interface FeaturedSpotlightProps {
  game: Game;
  onSelectGame: (game: Game) => void;
  isSaved: boolean;
  onToggleSave: (gameId: string) => void;
}

export const FeaturedSpotlight: React.FC<FeaturedSpotlightProps> = ({
  game,
  onSelectGame,
  isSaved,
  onToggleSave,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="featured-spotlight-section">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white font-display uppercase">
            Spotlight Game of the Hub
          </h2>
        </div>
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-950/50 border border-cyan-800/40">
          Featured Intel
        </span>
      </div>

      <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-br from-[#121a2e] to-[#0c121e] shadow-2xl shadow-cyan-950/20 group">
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1424] via-[#0d1424]/90 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/80 to-transparent z-10 md:hidden" />

        <div className="grid grid-cols-1 md:grid-cols-12 relative z-20">
          {/* Information Column */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-emerald-500 text-black">
                  {game.genre}
                </span>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{game.rating}/100 Metacritic</span>
                </div>

                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {game.releaseYear}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                {game.title}
              </h3>

              {/* Developer & Engine */}
              <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-4 flex flex-wrap items-center gap-2">
                <span>By <strong className="text-white">{game.developer}</strong></span>
                <span className="text-slate-600">•</span>
                <span>Published by <strong className="text-slate-300">{game.publisher}</strong></span>
                <span className="text-slate-600">•</span>
                <span>Engine: <span className="text-slate-300">{game.engine}</span></span>
              </p>

              {/* Synopsis */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                {game.synopsis}
              </p>

              {/* Platforms */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                  Verified Platforms:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {game.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/60"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => onSelectGame(game)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
                id="spotlight-view-intel"
              >
                <span>Full Game Intel</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onToggleSave(game.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  isSaved
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                    : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
                id="spotlight-save-toggle"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-400 text-emerald-400' : ''}`} />
                <span>{isSaved ? 'Saved in Watchlist' : 'Add to Watchlist'}</span>
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5 relative h-72 md:h-auto min-h-[300px]">
            <img
              src={game.bannerImage || game.coverImage}
              alt={game.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              onError={(e) => {
                // Fallback gradient if external image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Overlay badge on image */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-200">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>{game.ageRating}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
