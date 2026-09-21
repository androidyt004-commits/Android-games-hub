import React from 'react';
import { Game } from '../types';
import { X, Bookmark, Trash2, ArrowRight, ExternalLink } from 'lucide-react';

interface WatchlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedGames: Game[];
  onSelectGame: (game: Game) => void;
  onRemoveGame: (gameId: string) => void;
  onClearAll: () => void;
}

export const WatchlistModal: React.FC<WatchlistModalProps> = ({
  isOpen,
  onClose,
  savedGames,
  onSelectGame,
  onRemoveGame,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-[#0b101c] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl my-auto text-left flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        id="watchlist-modal-card"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-[#0e1627] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                Saved Games Watchlist
              </h2>
              <p className="text-xs text-slate-400">
                {savedGames.length} {savedGames.length === 1 ? 'game' : 'games'} bookmarked for quick reference
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {savedGames.length === 0 ? (
            <div className="text-center py-12 px-4">
              <Bookmark className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-base font-bold text-white">Your Watchlist is Empty</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 mb-6">
                Click the bookmark icon on any game card or detail view to save titles to your personal hub.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider"
              >
                Browse Games
              </button>
            </div>
          ) : (
            savedGames.map((game) => (
              <div
                key={game.id}
                className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#0e1524] hover:bg-[#121a2d] border border-slate-800/80 hover:border-cyan-500/40 transition-all group"
              >
                <div 
                  onClick={() => {
                    onSelectGame(game);
                    onClose();
                  }}
                  className="flex items-center gap-3.5 min-w-0 cursor-pointer flex-1"
                >
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/30">
                        {game.genre}
                      </span>
                      <span className="text-xs text-slate-400">
                        {game.releaseYear}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {game.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      {game.developer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onSelectGame(game);
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-black transition-all"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onRemoveGame(game.id)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-all"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedGames.length > 0 && (
          <div className="p-4 border-t border-slate-800 bg-[#090d16] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-red-400 hover:text-red-300 font-semibold px-3 py-1.5 rounded-lg hover:bg-red-500/10 transition-colors"
            >
              Clear Watchlist
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
