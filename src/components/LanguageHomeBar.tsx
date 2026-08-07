import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES, LanguageCode } from '../lib/translations';
import { Globe, Sparkles } from 'lucide-react';

export const LanguageHomeBar: React.FC = () => {
  const { currentLang, setLanguage, t } = useLanguage();

  return (
    <div className="bg-[#141414] text-[#F5F2ED] border-b border-white/10 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Title / Label */}
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-stone-300">
          <Globe className="w-4 h-4 text-[#FF6321]" />
          <span>{t('home_lang_switcher_title', 'Select Language Home Page:')}</span>
        </div>

        {/* 4 Language Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {LANGUAGES.map((lang: { code: LanguageCode; flag: string; homePageLabel: string; nativeName: string }) => {
            const isActive = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-bold text-xs transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#FF6321] text-white border-[#FF6321] shadow-sm'
                    : 'bg-white/10 text-stone-200 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-sm">{lang.flag}</span>
                <span>{lang.homePageLabel}</span>
                {isActive && <Sparkles className="w-3 h-3 text-white animate-pulse" />}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
