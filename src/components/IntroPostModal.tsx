import React from 'react';
import { X, Sparkles, Share2, Phone, Mail, Globe, MapPin, Building2, ShieldCheck, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IntroPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroPostModal: React.FC<IntroPostModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyPost = () => {
    const text = `
🌟 Welcome to Vaniyambadi360.in - Level 2 Elite Digital Directory 🌟
வணக்கம் வாணியம்பாடி மக்களே! Vaniyambadi360.in இணையதளத்திற்கு வரவேற்கிறோம்!

📍 Vaniyambadi's premier digital hub for Local Businesses, e-Sevai Government Services (Tahsildar Office), 24/7 Medicals, Professional Electricians, Plumbers, and Supermarkets.

✨ Designed, Developed & Maintained by UNIKORN360 AI Solutions Pvt. Ltd.
📞 Contact: +91 98848 24360 | contact.unikorn360@gmail.com
🌐 Website: https://www.unikorn360.com
📍 Registered Office: VK Complex, PJN Road, Kamarajapuram, Vaniyambadi – 635751
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#F5F2ED] border-2 border-[#141414] shadow-2xl my-8 overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#141414] text-white p-5 flex items-center justify-between border-b-2 border-[#FF6321]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF6321] text-white font-black text-xs uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 fill-white" />
              <span>LEVEL 2 ELITE ANNOUNCEMENT</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#2A2A2A] text-stone-300 hover:text-white hover:bg-[#FF6321] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="p-6 md:p-8 space-y-8 max-h-[75vh] overflow-y-auto">

          {/* Intro Title */}
          <div className="text-center space-y-3 pb-6 border-b-2 border-stone-300">
            <span className="text-[#FF6321] font-extrabold text-xs uppercase tracking-widest bg-[#FF6321]/10 px-3 py-1 border border-[#FF6321]/30">
              Official Launch Announcement / அதிகாரப்பூர்வ அறிவிப்பு
            </span>
            <h2 className="serif text-2xl md:text-3xl font-bold text-[#141414] leading-tight">
              Welcome to Vaniyambadi360.in
            </h2>
            <p className="text-stone-600 font-medium text-sm max-w-xl mx-auto">
              Level 2 Elite Local Business Directory, Government e-Sevai Helpdesk, Emergency Medicals & Professional Services Platform for Vaniyambadi.
            </p>
          </div>

          {/* Bilingual Announcement Post */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Tamil Post */}
            <div className="bg-white p-6 border border-stone-300 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321]">
                  தமிழ் அறிவிப்பு (TAMIL POST)
                </span>
                <span className="text-xs bg-stone-100 px-2 py-0.5 text-stone-600 font-semibold">
                  தமிழ்
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#141414] leading-snug">
                வணக்கம் வாணியம்பாடி மக்களே! 💐
              </h3>
              <p className="text-stone-700 text-xs leading-relaxed">
                நமது வாணியம்பாடி நகரத்திற்கான பிரத்யேக <strong>Level 2 Elite Digital Directory & e-Sevai Portal (Vaniyambadi360.in)</strong> இப்போது அதிகாரப்பூர்வமாகத் தொடங்கப்பட்டுள்ளது!
              </p>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="font-bold text-[#141414]">முக்கிய வசதிகள்:</div>
                <ul className="space-y-1.5 pl-4 list-disc">
                  <li><strong>அரசு e-சேவை மையங்கள்:</strong> வட்டாட்சியர் அலுவலகம் (Tahsildar Office), சாதி, வருமானம், பட்டா சிட்டா, வில்லங்க சான்று வழிகாட்டல்கள்.</li>
                  <li><strong>24/7 மருத்துவமனைகள் & பார்மசிகள்:</strong> இரவு நேர அவசர மருந்து கடைகள் மற்றும் குழந்தைகள்/மகப்பேறு மருத்துவர்கள்.</li>
                  <li><strong>தொழில்நுட்ப வல்லுநர்கள் (Professional Services):</strong> எலக்ட்ரீஷியன்கள், பிளம்பர்கள், ஏசி மெக்கானிக்ஸ் & வக்கீல்கள்.</li>
                  <li><strong>சூப்பர் மார்க்கெட்டுகள்:</strong> வீட்டு உபயோக பொருட்கள் & ஆர்கானிக் காய்கறிகள்.</li>
                </ul>
              </div>
            </div>

            {/* English Post */}
            <div className="bg-white p-6 border border-stone-300 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6321]">
                  ENGLISH ANNOUNCEMENT
                </span>
                <span className="text-xs bg-stone-100 px-2 py-0.5 text-stone-600 font-semibold">
                  English
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#141414] leading-snug">
                Greetings People of Vaniyambadi! 🏙️
              </h3>
              <p className="text-stone-700 text-xs leading-relaxed">
                We are thrilled to present <strong>Vaniyambadi360.in (Level 2 Elite Edition)</strong> – your comprehensive local discovery platform for verified businesses, emergency services, and civic support.
              </p>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="font-bold text-[#141414]">Key Capabilities:</div>
                <ul className="space-y-1.5 pl-4 list-disc">
                  <li><strong>e-Sevai & Civic Hub:</strong> Direct guidance for Tahsildar / Taluk office certificates, Patta Chitta, and EC deeds.</li>
                  <li><strong>24/7 Medicals & Clinics:</strong> Round-the-clock emergency pharmacies, pediatricians, & gynecologists.</li>
                  <li><strong>Skilled Experts:</strong> Electricians, plumbers, AC technicians, lawyers, and CA consultants.</li>
                  <li><strong>Distance Radar:</strong> Sort listings by exact distance from Town Center or Tahsildar office.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Designed & Maintained by UNIKORN360 */}
          <div className="bg-[#141414] text-white p-6 border-l-4 border-[#FF6321] space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#FF6321] font-bold block">
                  Designed, Developed & Maintained By
                </span>
                <h4 className="text-xl font-extrabold text-white tracking-wide">
                  UNIKORN360 AI Solutions Pvt. Ltd.
                </h4>
                <p className="text-xs text-stone-400 mt-1">
                  Intelligent Systems. Real-World Impact. • Vaniyambadi Headquarters
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyPost}
                  className="bg-[#FF6321] text-white font-bold text-xs px-4 py-2 flex items-center gap-2 hover:bg-[#e05318] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Post!' : 'Copy Post Announcement'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-3 border-t border-stone-800">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF6321]" />
                <span>+91 98848 24360</span>
              </div>
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-4 h-4 text-[#FF6321]" />
                <span className="truncate">contact.unikorn360@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FF6321]" />
                <a href="https://www.unikorn360.com" target="_blank" rel="noreferrer" className="underline hover:text-[#FF6321]">
                  www.unikorn360.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#FF6321]" />
                <span>PJN Road, Kamarajapuram</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-200 p-4 flex items-center justify-between border-t border-stone-300 text-xs font-bold text-stone-700">
          <span>© 2026 UNIKORN360 AI Solutions Pvt. Ltd.</span>
          <button
            onClick={onClose}
            className="bg-[#141414] text-white px-5 py-2 uppercase tracking-wider font-bold hover:bg-[#FF6321] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
