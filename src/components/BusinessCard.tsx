import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Bookmark, 
  ExternalLink,
  Globe,
  Clock,
  Zap,
  Crown
} from 'lucide-react';
import { Business } from '../types';
import { recordWhatsAppClick } from '../lib/storage';
import { useLanguage } from '../context/LanguageContext';
import { calculateDistanceKm, getBusinessLatLng } from '../lib/location';

interface BusinessCardProps {
  business: Business;
  onSelectBusiness: (business: Business) => void;
  onOpenAIModal: (business: Business) => void;
  isSaved: boolean;
  onToggleSave: (businessId: string) => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onSelectBusiness,
  onOpenAIModal,
  isSaved,
  onToggleSave
}) => {
  const { t, tArea, tCategory } = useLanguage();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    recordWhatsAppClick(business.id);
    const text = encodeURIComponent(`Hello ${business.name}, I found your profile on Vaniyambadi360.in. I would like to inquire about your services.`);
    window.open(`https://wa.me/${business.whatsapp}?text=${text}`, '_blank');
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`tel:${business.phone}`, '_self');
  };

  const translatedCat = tCategory(business.categoryId || business.category.toLowerCase(), { name: business.category, description: '' });

  return (
    <div 
      onClick={() => onSelectBusiness(business)}
      className="group relative bg-white border-2 border-[#141414] overflow-hidden shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] hover:shadow-[6px_6px_0px_0px_rgba(20,20,20,1)] transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Cover Image & Badges Header */}
      <div className="relative h-44 sm:h-48 w-full bg-[#141414] overflow-hidden border-b-2 border-[#141414]">
        <img
          src={business.coverImage}
          alt={business.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {(business.planTier === 'elite' || business.planTier === 'premium' || business.isElite) && (
              <span className="bg-gradient-to-r from-[#FF6321] to-amber-500 text-white font-extrabold text-[9px] uppercase tracking-widest px-2 py-0.5 border border-black shadow-md flex items-center gap-1">
                <Crown className="w-3 h-3 text-white fill-white" /> LEVEL 2 ELITE
              </span>
            )}
            {business.planTier === 'pro' && !business.isElite && (
              <span className="bg-[#FF6321] text-white font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#141414] flex items-center gap-1">
                <Crown className="w-3 h-3 text-white" /> {t('card_pro_site', 'Pro Site')}
              </span>
            )}
            {business.verified && (
              <span className="bg-emerald-700 text-white font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#141414] flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> {t('card_verified', 'Verified')}
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(business.id);
            }}
            className="p-1.5 bg-[#141414] text-white border border-white/30 transition-colors cursor-pointer"
            title="Save business"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#FF6321] fill-[#FF6321]' : 'text-stone-300'}`} />
          </button>
        </div>

        {/* Floating Logo & Name on Cover */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end gap-3 z-10">
          <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-[#141414] bg-white overflow-hidden flex-shrink-0">
            <img src={business.logo} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text-white min-w-0 flex-1">
            <div className="text-[10px] font-bold text-[#FF6321] tracking-widest uppercase truncate">
              {translatedCat.name}
            </div>
            <h3 className="serif font-bold text-base sm:text-lg leading-tight text-white group-hover:text-[#FF6321] transition-colors line-clamp-1">
              {business.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Tagline */}
          <p className="text-xs text-stone-700 line-clamp-2 mb-3 italic font-serif">
            "{business.tagline}"
          </p>

          {/* Location & Opening Status */}
          <div className="flex items-center justify-between text-xs text-stone-600 mb-2 gap-2">
            <div className="flex items-center gap-1.5 truncate font-semibold text-[#141414]">
              <MapPin className="w-3.5 h-3.5 text-[#FF6321] flex-shrink-0" />
              <span className="truncate">{tArea(business.area)}</span>
              <span className="bg-[#141414] text-white text-[9px] font-bold px-1.5 py-0.2 tracking-wider flex-shrink-0">
                {calculateDistanceKm(getBusinessLatLng(business))} km
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
              <Clock className="w-3 h-3 text-stone-400" />
              <span className={business.openNowStatus ? 'text-emerald-700' : 'text-stone-500'}>
                {business.openNowStatus ? t('card_open_now', 'Open Now') : t('card_closed', 'Closed')}
              </span>
            </div>
          </div>

          {/* Rating & Review Count */}
          <div className="flex items-center justify-between text-xs bg-[#F5F2ED] border border-[#141414]/20 p-2 mb-3">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center bg-[#141414] text-white font-bold px-1.5 py-0.5 text-[10px]">
                <Star className="w-3 h-3 fill-[#FF6321] text-[#FF6321] mr-0.5" />
                {business.rating}
              </div>
              <span className="text-stone-600 font-medium text-[11px]">
                ({business.reviewCount} {t('card_reviews', 'reviews')})
              </span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6321] hover:underline">
              {business.planTier === 'pro' ? t('card_mini_site', 'Mini-Site →') : t('card_view_profile', 'View Profile →')}
            </span>
          </div>

          {/* Key Services Pill Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {business.services.slice(0, 3).map((serv, idx) => (
              <span key={idx} className="bg-[#F5F2ED] text-[#141414] text-[10px] font-semibold px-2 py-0.5 border border-[#141414]/20">
                {serv.name}
              </span>
            ))}
            {business.services.length > 3 && (
              <span className="text-[10px] text-stone-500 font-medium py-0.5">
                +{business.services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="pt-3 border-t border-[#141414]/15 grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-wider">
          
          {/* Phone call */}
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-1 bg-[#F5F2ED] hover:bg-[#141414] hover:text-white text-[#141414] py-2 border border-[#141414] transition-colors cursor-pointer"
            title="Call Phone"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t('card_call', 'Call')}</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-1 bg-emerald-700 hover:bg-emerald-800 text-white py-2 border border-[#141414] transition-colors cursor-pointer"
            title="WhatsApp Chat"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('card_whatsapp', 'WhatsApp')}</span>
          </button>

          {/* Ask AI Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAIModal(business);
            }}
            className="flex items-center justify-center gap-1 bg-[#141414] hover:bg-[#FF6321] text-white py-2 border border-[#141414] transition-colors cursor-pointer"
            title="Ask AI about this business"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6321]" />
            <span>{t('card_ask_ai', 'Ask AI')}</span>
          </button>

        </div>
      </div>
    </div>
  );
};
