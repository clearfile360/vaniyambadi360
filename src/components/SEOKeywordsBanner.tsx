import React from 'react';
import { Search, Globe, TrendingUp, Sparkles } from 'lucide-react';
import { SEO_KEYWORDS } from '../data/vaniyambadiData';

interface SEOKeywordsBannerProps {
  onSearchKeyword: (kw: string) => void;
}

export const SEOKeywordsBanner: React.FC<SEOKeywordsBannerProps> = ({ onSearchKeyword }) => {
  return (
    <section className="bg-[#141414] text-[#F5F2ED] py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-[#141414] my-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="bg-[#FF6321] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest inline-block mb-3">
              Hyperlocal SEO Identity Network
            </span>
            <h2 className="serif text-2xl md:text-3xl font-bold text-white">
              Ranking Vaniyambadi Businesses for Thousands of Search Terms
            </h2>
            <p className="text-xs md:text-sm text-stone-300 max-w-2xl mt-2 font-normal">
              Every shop and advocate on Vaniyambadi360 gets a dedicated webpage (<code className="text-[#FF6321]">vaniyambadi360.in/business/name</code>) that ranks on search engines for local queries.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 p-3.5 border border-white/20 text-xs text-stone-200">
            <TrendingUp className="w-5 h-5 text-[#FF6321] flex-shrink-0" />
            <div>
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">Organic Traffic Booster</span>
              <span className="text-stone-300 text-[11px]">Turns unlisted shops into local online identities</span>
            </div>
          </div>
        </div>

        {/* Keywords Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {SEO_KEYWORDS.map((kw, idx) => (
            <button
              key={idx}
              onClick={() => onSearchKeyword(kw.split(' ')[0])}
              className="bg-white/10 hover:bg-[#FF6321] text-stone-200 hover:text-white p-2.5 border border-white/20 transition-all text-xs text-left flex items-center justify-between group cursor-pointer"
            >
              <span className="truncate pr-1">"{kw}"</span>
              <Search className="w-3 h-3 text-stone-400 group-hover:text-white flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
