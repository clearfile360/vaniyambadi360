import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  LanguageCode,
  LANGUAGES,
  LanguageOption,
  getUITranslation,
  getCategoryTranslation,
  getAreaTranslation
} from '../lib/translations';

interface LanguageContextType {
  currentLang: LanguageCode;
  currentLangOption: LanguageOption;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
  tCategory: (catId: string, defaultObj: { name: string; description: string }) => { name: string; description: string };
  tArea: (areaName: string) => string;
  translateText: (text: string) => Promise<string>;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLangState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('vaniyambadi_lang');
      if (saved && ['en', 'ta', 'ur', 'hi'].includes(saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const currentLangOption = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const isRTL = !!currentLangOption.isRTL;

  useEffect(() => {
    try {
      localStorage.setItem('vaniyambadi_lang', currentLang);
    } catch {
      // ignore
    }

    // Set dir attribute on body / html for RTL support (Urdu)
    document.documentElement.lang = currentLang;
    if (isRTL) {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  }, [currentLang, isRTL]);

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLangState(lang);
  };

  const t = (key: string, fallback?: string): string => {
    return getUITranslation(key, currentLang, fallback);
  };

  const tCategory = (catId: string, defaultObj: { name: string; description: string }) => {
    return getCategoryTranslation(catId, currentLang, defaultObj);
  };

  const tArea = (areaName: string): string => {
    return getAreaTranslation(areaName, currentLang);
  };

  const translateText = async (text: string): Promise<string> => {
    if (currentLang === 'en' || !text) return text;
    try {
      const res = await fetch('/api/ai/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang: currentLang }),
      });
      if (!res.ok) return text;
      const data = await res.json();
      return data.translatedText || text;
    } catch (e) {
      console.warn('Translate error:', e);
      return text;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        currentLangOption,
        setLanguage,
        t,
        tCategory,
        tArea,
        translateText,
        isRTL
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
