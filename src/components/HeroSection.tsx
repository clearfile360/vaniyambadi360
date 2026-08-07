import React from 'react';
import { Search, MapPin, Sparkles, Building, Scale, Activity, Utensils, Briefcase, FileText, CheckCircle2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, LanguageCode } from '../lib/translations';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  selectedArea: string;
  onSelectArea: (area: string) => void;
  onOpenTownAI: () => void;
  onOpenIntroPost?: () => void;
  totalListingsCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedArea,
  onSelectArea,
  onOpenTownAI,
  onOpenIntroPost,
  totalListingsCount
}) => {
  const { currentLang, setLanguage, t } = useLanguage();

  const popularKeywords = [
    { label: 'Advocate Ramesh', query: 'Lawyer' },
    { label: 'Famous Star Biryani', query: 'Biryani' },
    { label: 'Khaderpet Leather', query: 'Leather' },
    { label: 'GST Consultant', query: 'GST' },
    { label: 'Sub-Registrar Document Writer', query: 'Document Writer' },
    { label: 'Islamiah Hospital', query: 'Hospital' },
  ];

  return (
    <div className="relative bg-[#F5F2ED] border-b border-[#141414]/20 text-[#141414] pt-8 pb-12 md:pt-10 md:pb-16">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Prominent Language Switcher Bar inside Hero */}
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5 bg-[#141414] text-[#F5F2ED] p-1.5 mb-6 border border-[#141414] shadow-md">
          {LANGUAGES.map((l) => {
            const isActive = currentLang === l.code;
            return (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-3 py-1.5 text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#FF6321] text-white shadow'
                    : 'bg-white/10 text-stone-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.homePageLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Top Editorial Badge */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
          <div className="inline-flex items-center gap-2 bg-[#141414] text-[#F5F2ED] px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            <span className="w-1.5 h-1.5 bg-[#FF6321]" />
            <span>{t('hero_badge', 'Vaniyambadi’s Premier Digital Directory & Business Network')}</span>
          </div>

          {onOpenIntroPost && (
            <button
              onClick={onOpenIntroPost}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF6321] to-amber-500 hover:brightness-110 text-white px-3 py-1 text-[10px] uppercase tracking-widest font-extrabold border border-black shadow-sm cursor-pointer"
            >
              <Sparkles className="w-3 h-3 fill-white" />
              <span>LEVEL 2 ELITE • Read Announcement / அறிமுகம்</span>
            </button>
          )}
        </div>

        {/* Main Title */}
        <h1 className="serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141414] mb-3 leading-tight">
          {t('hero_title_p1', 'Discover Everything in')} <span className="italic text-[#FF6321]">{t('hero_title_town', 'Vaniyambadi')}</span>
        </h1>
        <p className="text-sm md:text-base text-stone-700 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          {t('hero_subtitle', 'Search local lawyers, doctors, biryani joints, leather tanneries, CA consultants, document writers & institutions across Khaderpet, C.L. Road & New Town.')}
        </p>

        {/* Primary Search Bar Component */}
        <div className="bg-white border-2 border-[#141414] p-3 shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-2">
            
            {/* Keyword Input */}
            <div className="flex items-center gap-2 bg-[#F5F2ED] px-3.5 py-2.5 w-full border border-[#141414]">
              <Search className="w-5 h-5 text-[#FF6321] flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t('hero_search_placeholder', 'Search advocate, biryani, leather, GST, hospital...')}
                className="bg-transparent text-[#141414] placeholder-stone-500 text-sm md:text-base focus:outline-none w-full font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs uppercase tracking-widest font-bold text-stone-500 hover:text-[#141414] px-1.5 py-0.5 border border-stone-400"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Town AI Prompt CTA */}
            <button
              onClick={onOpenTownAI}
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#FF6321] hover:bg-[#e05316] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 transition-all cursor-pointer whitespace-nowrap shadow"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>{t('hero_ask_ai_btn', 'Ask AI Guide')}</span>
            </button>

          </div>

          {/* Quick Popular Keyword Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mt-3 pt-2.5 border-t border-[#141414]/15 text-xs">
            <span className="text-[10px] uppercase font-bold tracking-widest text-stone-600 mr-1">{t('hero_popular_search', 'Popular Search:')}</span>
            {popularKeywords.map((item) => (
              <button
                key={item.label}
                onClick={() => onSearchChange(item.query)}
                className="bg-[#F5F2ED] hover:bg-[#141414] hover:text-[#F5F2ED] text-[#141414] px-2.5 py-1 border border-[#141414]/30 transition-all text-[11px] font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Local Verification Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8 pt-4 border-t border-[#141414]/20 text-xs font-semibold text-stone-700">
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF6321]" />
            <span>{totalListingsCount}+ {t('hero_stat_listings', 'Local Listings')}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF6321]" />
            <span>{t('hero_stat_verified', '100% Verified Profiles')}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF6321]" />
            <span>{t('hero_stat_whatsapp', 'Direct WhatsApp Leads')}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FF6321]" />
            <span>{t('hero_stat_gemini', 'Gemini AI Assistant')}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
