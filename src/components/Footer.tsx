import React from 'react';
import { MapPin, Phone, Mail, Globe, ShieldCheck, Heart, Sparkles, Building, ExternalLink } from 'lucide-react';
import { CATEGORIES, VANIYAMBADI_AREAS } from '../data/vaniyambadiData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onSelectCategory: (catId: string) => void;
  onOpenAddBusiness: () => void;
  onOpenOwnerDashboard: () => void;
  onOpenTownAI: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenAddBusiness,
  onOpenOwnerDashboard,
  onOpenTownAI
}) => {
  const { t, tCategory, tArea } = useLanguage();

  return (
    <footer className="bg-[#141414] text-stone-300 text-xs border-t-2 border-[#141414] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF6321] text-white font-serif font-bold text-lg flex items-center justify-center">
                360
              </div>
              <span className="serif text-xl font-bold text-white">
                Vaniyambadi<span className="text-[#FF6321]">360</span>.in
              </span>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              {t('footer_desc', 'Vaniyambadi’s official hyperlocal business discovery platform. Connecting local residents, students, and businesses across Khaderpet, C.L. Road, New Town, Ambur Road & Muslimpur.')}
            </p>

            <div className="pt-2 flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-400">
              <ShieldCheck className="w-4 h-4 text-[#FF6321]" />
              <span>Independent Directory for Vaniyambadi Town</span>
            </div>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="font-bold text-[#FF6321] text-[10px] uppercase tracking-widest mb-3">Top Directory</h3>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => {
                const translatedCat = tCategory(cat.id, { name: cat.name, description: cat.description });
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => onSelectCategory(cat.id)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {translatedCat.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Town Areas */}
          <div>
            <h3 className="font-bold text-[#FF6321] text-[10px] uppercase tracking-widest mb-3">Key Areas</h3>
            <ul className="space-y-2">
              {VANIYAMBADI_AREAS.filter(a => a !== 'All Areas').slice(0, 6).map((area) => (
                <li key={area}>
                  <span className="text-stone-400">{tArea(area)}, Vaniyambadi</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Merchants & Tools */}
          <div>
            <h3 className="font-bold text-[#FF6321] text-[10px] uppercase tracking-widest mb-3">{t('for_business', 'For Business Owners')}</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenAddBusiness} className="text-[#FF6321] hover:underline font-bold cursor-pointer">
                  {t('add_business_free', '+ List New Business (Free)')}
                </button>
              </li>
              <li>
                <button onClick={onOpenAddBusiness} className="hover:text-white cursor-pointer">
                  Upgrade to ₹499 Premium
                </button>
              </li>
              <li>
                <button onClick={onOpenAddBusiness} className="hover:text-white cursor-pointer">
                  Create Pro Mini-Website (₹999)
                </button>
              </li>
              <li>
                <button onClick={onOpenOwnerDashboard} className="hover:text-white cursor-pointer">
                  {t('owner_dashboard', 'Owner Lead Dashboard')}
                </button>
              </li>
              <li>
                <button onClick={onOpenTownAI} className="hover:text-white cursor-pointer">
                  {t('ask_ai_guide', 'Ask Town AI Hub')}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Developer & Maintainer Branding Section - UNIKORN360 */}
        <div className="pt-8 border-t border-white/10 bg-[#1A1A1A] p-6 border border-stone-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#FF6321] font-bold block mb-1">
                Designed, Developed & Maintained By
              </span>
              <h4 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                UNIKORN360 AI Solutions Pvt. Ltd.
                <span className="bg-[#FF6321]/20 text-[#FF6321] text-[9px] px-2 py-0.5 border border-[#FF6321]/40 uppercase tracking-widest">
                  Vaniyambadi HQ
                </span>
              </h4>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <a
                href="https://wa.me/919884824360"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-black font-bold px-3 py-1.5 flex items-center gap-1.5 hover:bg-[#20bd5a] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 98848 24360</span>
              </a>
              <a
                href="mailto:contact.unikorn360@gmail.com"
                className="bg-stone-800 text-stone-200 border border-stone-700 font-bold px-3 py-1.5 flex items-center gap-1.5 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF6321]" />
                <span>contact.unikorn360@gmail.com</span>
              </a>
              <a
                href="https://www.unikorn360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF6321] text-white font-bold px-3 py-1.5 flex items-center gap-1.5 hover:bg-[#e05318] transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>www.unikorn360.com</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-400 text-xs">
            {/* Services provided */}
            <div>
              <h5 className="font-bold text-stone-200 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6321]" />
                Core Capabilities & Advisory
              </h5>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-stone-300">
                <li>• Business Consulting</li>
                <li>• AI & Systems Strategy</li>
                <li>• Finance Advisory</li>
                <li>• Compliance & Subsidy</li>
                <li>• Corporate Branding</li>
                <li>• Project Consulting</li>
              </ul>
            </div>

            {/* Registered Office */}
            <div>
              <h5 className="font-bold text-stone-200 text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#FF6321]" />
                Registered Office Address
              </h5>
              <p className="text-[11px] leading-relaxed text-stone-300">
                Old No: 1078/B, New No: 1708/1, VK Complex, P.J.N. Road, 1st Floor, Shop No: 3, Kamarajapuram, Vaniyambadi, Tirupathur District, Tamil Nadu – 635751, India
              </p>
            </div>

            {/* Social Channels */}
            <div>
              <h5 className="font-bold text-stone-200 text-[10px] uppercase tracking-widest mb-2">
                Social Profiles & Connect
              </h5>
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider font-bold">
                <span className="bg-stone-800 border border-stone-700 px-2 py-1 text-stone-300">
                  Instagram: @unikorn360official
                </span>
                <span className="bg-stone-800 border border-stone-700 px-2 py-1 text-stone-300">
                  Facebook: unikorn360
                </span>
                <span className="bg-stone-800 border border-stone-700 px-2 py-1 text-stone-300">
                  LinkedIn: @Unikorn360
                </span>
                <span className="bg-stone-800 border border-stone-700 px-2 py-1 text-stone-300">
                  X / Twitter: @Unikorn360
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-400 text-[10px] uppercase tracking-widest">
          <div>
            © 2026 UNIKORN360 AI Solutions Pvt. Ltd.. All rights reserved. • Intelligent Systems. Real-World Impact.
          </div>
          <div className="flex items-center gap-1 text-stone-300">
            <span>Built with local pride for Vaniyambadi</span>
            <Heart className="w-3.5 h-3.5 text-[#FF6321] fill-[#FF6321]" />
          </div>
        </div>

      </div>
    </footer>
  );
};

