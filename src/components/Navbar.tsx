import React, { useState } from 'react';
import { Search, MapPin, PlusCircle, Bookmark, Sparkles, Building2, LayoutDashboard, Menu, X, Globe } from 'lucide-react';
import { VANIYAMBADI_AREAS } from '../data/vaniyambadiData';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, LanguageCode } from '../lib/translations';

interface NavbarProps {
  selectedArea: string;
  onSelectArea: (area: string) => void;
  onOpenAddBusiness: () => void;
  onOpenOwnerDashboard: () => void;
  onOpenTownAI: () => void;
  onOpenIntroPost?: () => void;
  savedCount: number;
  onShowSavedOnly: () => void;
  onGoHome: () => void;
  activeTab: string;
  setActiveTab: (tab: 'directory' | 'jobs-events' | 'saved') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedArea,
  onSelectArea,
  onOpenAddBusiness,
  onOpenOwnerDashboard,
  onOpenTownAI,
  onOpenIntroPost,
  savedCount,
  onShowSavedOnly,
  onGoHome,
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLang, setLanguage, t, tArea } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-[#141414] text-[#F5F2ED] border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-baseline gap-2.5 cursor-pointer" onClick={onGoHome}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FF6321] text-white font-black text-lg md:text-xl flex items-center justify-center font-serif">
              360
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="serif text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Vaniyambadi<span className="text-[#FF6321]">360</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#FF6321] font-bold border border-[#FF6321]/40 px-1.5 py-0.5 hidden sm:inline-block">
                  Directory
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 hidden sm:block">
                {t('nav_hyperlocal', 'Hyperlocal Discovery Platform')}
              </p>
            </div>
          </div>

          {/* Location Area Selector */}
          <div className="hidden lg:flex items-center bg-white/10 border border-white/20 px-3 py-1.5 text-xs text-stone-200 gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF6321] flex-shrink-0" />
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{t('nav_areaLabel', 'Area:')}</span>
            <select
              value={selectedArea}
              onChange={(e) => onSelectArea(e.target.value)}
              className="bg-transparent text-white font-semibold text-xs focus:outline-none cursor-pointer pr-1"
            >
              {VANIYAMBADI_AREAS.map((area) => (
                <option key={area} value={area} className="bg-[#141414] text-white">
                  {tArea(area)}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-[11px] font-bold uppercase tracking-widest">
            <button
              onClick={() => {
                setActiveTab('directory');
                onGoHome();
              }}
              className={`transition-colors py-1 ${
                activeTab === 'directory'
                  ? 'text-[#FF6321] border-b-2 border-[#FF6321]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {t('nav_directory', 'Directory')}
            </button>

            <button
              onClick={() => setActiveTab('jobs-events')}
              className={`transition-colors py-1 ${
                activeTab === 'jobs-events'
                  ? 'text-[#FF6321] border-b-2 border-[#FF6321]'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {t('nav_jobsEvents', 'Jobs & Events')}
            </button>

            {/* AI Assistant Hub Button */}
            <button
              onClick={onOpenTownAI}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 border border-white/30 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6321] animate-pulse" />
              <span>{t('nav_askAI', 'Ask AI Hub')}</span>
            </button>

            {/* Tamil & English Announcement Post Button */}
            {onOpenIntroPost && (
              <button
                onClick={onOpenIntroPost}
                className="flex items-center gap-1 bg-gradient-to-r from-[#FF6321] to-amber-500 hover:brightness-110 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1.5 border border-white/20 transition-all cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3 h-3 fill-white" />
                <span>அறிவிப்பு / Intro</span>
              </button>
            )}

            {/* Saved Favorites */}
            <button
              onClick={onShowSavedOnly}
              className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                activeTab === 'saved' ? 'text-[#FF6321]' : 'text-stone-300 hover:text-white'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'text-[#FF6321] fill-[#FF6321]' : 'text-stone-400'}`} />
              <span>{t('nav_saved', 'Saved')} ({savedCount})</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="flex items-center gap-1 bg-white/10 border border-white/20 px-2 py-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#FF6321]" />
              <select
                value={currentLang}
                onChange={(e) => setLanguage(e.target.value as LanguageCode)}
                className="bg-transparent text-white font-bold text-[11px] focus:outline-none cursor-pointer"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code} className="bg-[#141414] text-white">
                    {l.flag} {l.nativeName}
                  </option>
                ))}
              </select>
            </div>

            {/* Owner Portal */}
            <button
              onClick={onOpenOwnerDashboard}
              className="flex items-center gap-1 text-stone-300 hover:text-[#FF6321] transition-colors cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-[#FF6321]" />
              <span>{t('nav_dashboard', 'Dashboard')}</span>
            </button>

            {/* Add Business CTA */}
            <button
              onClick={onOpenAddBusiness}
              className="bg-[#FF6321] hover:bg-[#e05316] text-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{t('nav_addBusiness', 'Add Business +')}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTownAI}
              className="p-2 bg-[#FF6321] text-white text-xs font-bold"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/20 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-white/20 px-4 pt-3 pb-5 space-y-3">
          
          {/* Language Switcher in Mobile */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-stone-300">
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5 text-[#FF6321]" /> Language:
            </span>
            <div className="flex gap-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-0.5 text-[10px] font-bold border ${
                    currentLang === l.code ? 'bg-[#FF6321] text-white border-[#FF6321]' : 'bg-white/10 text-stone-300 border-white/20'
                  }`}
                >
                  {l.flag} {l.nativeName}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-stone-300">
            <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 text-[#FF6321]" /> {t('nav_areaLabel', 'Area:')}
            </span>
            <select
              value={selectedArea}
              onChange={(e) => {
                onSelectArea(e.target.value);
                setMobileMenuOpen(false);
              }}
              className="bg-white/10 text-[#FF6321] font-bold text-xs px-2 py-1 border border-white/20"
            >
              {VANIYAMBADI_AREAS.map((area) => (
                <option key={area} value={area} className="bg-[#141414] text-white">
                  {tArea(area)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] uppercase font-bold tracking-widest">
            <button
              onClick={() => {
                setActiveTab('directory');
                onGoHome();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-white/10 text-white border border-white/10"
            >
              {t('nav_directory', 'Directory')}
            </button>
            <button
              onClick={() => {
                setActiveTab('jobs-events');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-white/10 text-white border border-white/10"
            >
              {t('nav_jobsEvents', 'Jobs & Events')}
            </button>
            <button
              onClick={() => {
                onShowSavedOnly();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-white/10 text-white border border-white/10 flex items-center justify-between"
            >
              <span>{t('nav_saved', 'Saved')}</span>
              <span className="bg-[#FF6321] text-white px-1.5 text-[10px]">
                {savedCount}
              </span>
            </button>
            <button
              onClick={() => {
                onOpenOwnerDashboard();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-white/10 text-[#FF6321] border border-white/10 flex items-center gap-1"
            >
              <LayoutDashboard className="w-3.5 h-3.5" /> {t('nav_dashboard', 'Dashboard')}
            </button>
          </div>

          <button
            onClick={() => {
              onOpenAddBusiness();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 bg-[#FF6321] text-white font-bold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{t('nav_addBusiness', 'Add Business +')}</span>
          </button>
        </div>
      )}
    </header>
  );
};
