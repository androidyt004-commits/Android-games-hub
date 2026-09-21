import React, { useState, useEffect } from 'react';
import { Game } from '../types';
import { 
  X, 
  Star, 
  Calendar, 
  Building2, 
  Cpu, 
  HardDrive, 
  Layers, 
  Bookmark, 
  Share2, 
  Check, 
  Sparkles, 
  ChevronRight,
  ShieldAlert,
  Gamepad
} from 'lucide-react';

interface GameDetailModalProps {
  game: Game | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (gameId: string) => void;
  allGames: Game[];
  onSelectGame: (game: Game) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  onClose,
  isSaved,
  onToggleSave,
  allGames,
  onSelectGame,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'specs' | 'media'>('overview');
  const [copied, setCopied] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<string | null>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedScreenshot) {
          setSelectedScreenshot(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedScreenshot]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (game) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [game]);

  if (!game) return null;

  const handleShare = () => {
    const shareText = `Check out ${game.title} on ANDROID GAMEHUB! Genre: ${game.genre} | Rating: ${game.rating}/100`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Find related games in same genre
  const relatedGames = allGames
    .filter((g) => g.id !== game.id && (g.genre === game.genre || g.tags.some(t => game.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0b101c] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/40 my-auto text-left flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
        id="game-detail-modal"
      >
        {/* Modal Header Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-950">
          <img
            src={game.bannerImage || game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b101c] via-[#0b101c]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b101c]/90 via-transparent to-transparent hidden sm:block" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-red-500/80 text-slate-300 hover:text-white border border-white/10 transition-all"
            id="close-detail-modal"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Floating Meta */}
          <div className="absolute bottom-4 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500 text-black">
                  {game.genre}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-700">
                  {game.releaseYear}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-900/90 text-slate-300 border border-slate-700 flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-amber-400" />
                  {game.ageRating}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight">
                {game.title}
              </h2>
              <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-0.5">
                Developer: <span className="text-white font-bold">{game.developer}</span> • Publisher: {game.publisher}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleSave(game.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSaved
                    ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                    : 'bg-black/60 hover:bg-black/90 text-white border-white/20'
                }`}
                id="modal-toggle-save"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-black' : ''}`} />
                <span>{isSaved ? 'Saved in Watchlist' : 'Save Game'}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-black/60 hover:bg-black/90 text-slate-200 border border-white/20 text-xs sm:text-sm font-semibold transition-all"
                title="Share Game"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-800 bg-[#0e1524] px-4 sm:px-8 flex items-center gap-2 sm:gap-6 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Intel
          </button>

          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'highlights'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Gameplay Highlights
          </button>

          {game.systemRequirements && (
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-3.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
                activeTab === 'specs'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              PC Requirements
            </button>
          )}

          <button
            onClick={() => setActiveTab('media')}
            className={`py-3.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeTab === 'media'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Gallery ({game.screenshots.length})
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Specification Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#080d17] p-4 rounded-2xl border border-slate-800">
                <div className="p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1 font-semibold">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    Review Score
                  </span>
                  <p className="text-xl font-extrabold text-white mt-0.5">
                    {game.rating}<span className="text-xs text-slate-400 font-normal"> / 100</span>
                  </p>
                </div>

                <div className="p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1 font-semibold">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    Release Date
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    {game.releaseDate}
                  </p>
                </div>

                <div className="p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1 font-semibold">
                    <Cpu className="w-3 h-3 text-emerald-400" />
                    Game Engine
                  </span>
                  <p className="text-sm font-bold text-white mt-1 truncate" title={game.engine}>
                    {game.engine}
                  </p>
                </div>

                <div className="p-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1 font-semibold">
                    <Gamepad className="w-3 h-3 text-indigo-400" />
                    Game Modes
                  </span>
                  <p className="text-sm font-bold text-white mt-1 truncate">
                    {game.modes.join(', ')}
                  </p>
                </div>
              </div>

              {/* Synopsis */}
              <div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-display mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Synopsis & Universe
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-[#0e1627]/60 p-4 rounded-xl border border-slate-800">
                  {game.synopsis}
                </p>
              </div>

              {/* Supported Platforms */}
              <div>
                <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Hardware & Platform Availability
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#11192b] text-slate-200 border border-slate-700/80 shadow-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sub-genres and Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Sub-Genres & Design
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {game.subGenres.map((sg) => (
                      <span key={sg} className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 text-cyan-300 border border-slate-800">
                        {sg}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Database Tags
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {game.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 text-slate-300 border border-slate-800">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HIGHLIGHTS */}
          {activeTab === 'highlights' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-3">
                Key Gameplay & Technical Features
              </h3>
              <div className="space-y-3">
                {game.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#0e1627]/80 border border-slate-800"
                  >
                    <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 border border-cyan-500/30">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SYSTEM REQUIREMENTS */}
          {activeTab === 'specs' && game.systemRequirements && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <Cpu className="w-4 h-4" />
                <span>Verified PC Hardware Benchmark Specifications</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Minimum */}
                <div className="p-5 rounded-2xl bg-[#090e1a] border border-slate-800">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-display">
                      Minimum Requirements
                    </h4>
                    <span className="text-[11px] text-slate-400">Target: 1080p 30 FPS</span>
                  </div>

                  <dl className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <dt className="text-slate-400 text-xs">Operating System</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.minimum.os}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Processor (CPU)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.minimum.cpu}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Graphics Card (GPU)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.minimum.gpu}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">System Memory (RAM)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.minimum.ram}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Storage</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.minimum.storage}</dd>
                    </div>
                  </dl>
                </div>

                {/* Recommended */}
                <div className="p-5 rounded-2xl bg-[#090e1a] border border-emerald-500/30">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 font-display">
                      Recommended Hardware
                    </h4>
                    <span className="text-[11px] text-emerald-300">Target: 1080p/1440p 60+ FPS</span>
                  </div>

                  <dl className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <dt className="text-slate-400 text-xs">Operating System</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.recommended.os}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Processor (CPU)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.recommended.cpu}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Graphics Card (GPU)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.recommended.gpu}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">System Memory (RAM)</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.recommended.ram}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 text-xs">Storage</dt>
                      <dd className="font-semibold text-white">{game.systemRequirements.recommended.storage}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MEDIA GALLERY */}
          {activeTab === 'media' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Click any screenshot to inspect high-resolution preview.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.screenshots.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedScreenshot(img)}
                    className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-all"
                  >
                    <img
                      src={img}
                      alt={`${game.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-white">
                      Screenshot {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Games in Genre Recommendation */}
          {relatedGames.length > 0 && (
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center justify-between">
                <span>Related Titles in {game.genre}</span>
                <span className="text-cyan-400 font-normal">Explore more</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedGames.map((related) => (
                  <div
                    key={related.id}
                    onClick={() => {
                      onSelectGame(related);
                      setActiveTab('overview');
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090e1a] hover:bg-[#11192e] border border-slate-800/80 hover:border-cyan-500/50 cursor-pointer transition-all group"
                  >
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                        {related.title}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {related.releaseYear} • {related.rating}/100
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-slate-800 bg-[#090d16] flex items-center justify-between shrink-0 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Verified Information Record #{game.id}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold"
          >
            Close Window
          </button>
        </div>
      </div>

      {/* Fullscreen Screenshot Lightbox */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedScreenshot(null)}
        >
          <img
            src={selectedScreenshot}
            alt="Expanded preview"
            className="max-w-full max-h-full rounded-xl object-contain shadow-2xl"
          />
          <button
            onClick={() => setSelectedScreenshot(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};
