import React from 'react';
import { 
  Scale, 
  Activity, 
  Utensils, 
  Briefcase, 
  FileText, 
  PenTool, 
  GraduationCap, 
  ShoppingBag, 
  Smartphone, 
  Home, 
  Wrench, 
  Dumbbell, 
  Zap,
  Cpu,
  ShoppingCart,
  Stethoscope,
  Globe,
  Hammer,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/vaniyambadiData';
import { useLanguage } from '../context/LanguageContext';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory
}) => {
  const { t, tCategory } = useLanguage();

  // Map icon names to Lucide icons safely
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-5 h-5 text-[#FF6321]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#FF6321]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#FF6321]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#FF6321]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#FF6321]" />;
      case 'PenTool': return <PenTool className="w-5 h-5 text-[#FF6321]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#FF6321]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#FF6321]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#FF6321]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#FF6321]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#FF6321]" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-[#FF6321]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#FF6321]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#FF6321]" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-[#FF6321]" />;
      case 'Cross':
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#FF6321]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#FF6321]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#FF6321]" />;
      default: return <Briefcase className="w-5 h-5 text-[#FF6321]" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-b border-[#141414]/15">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <h2 className="serif text-2xl md:text-3xl font-bold text-[#141414]">
            {t('cat_heading', 'Popular Business Categories')}
          </h2>
          <p className="text-xs md:text-sm text-stone-600 mt-1 font-medium">
            {t('cat_subheading', 'Browse verified local services and shops across Vaniyambadi')}
          </p>
        </div>

        {selectedCategory && (
          <button
            onClick={() => onSelectCategory('')}
            className="text-xs uppercase font-bold tracking-widest text-[#FF6321] hover:underline cursor-pointer"
          >
            {t('cat_clear', 'Clear Selected Category')}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const translatedCat = tCategory(cat.id, { name: cat.name, description: cat.description });

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? '' : cat.id)}
              className={`flex flex-col items-start p-4 text-left transition-all duration-200 border-2 cursor-pointer group ${
                isSelected
                  ? 'bg-[#141414] text-white border-[#141414] shadow-[4px_4px_0px_0px_rgba(255,99,33,1)]'
                  : 'bg-white text-[#141414] border-[#141414] hover:shadow-[3px_3px_0px_0px_rgba(20,20,20,1)]'
              }`}
            >
              <div className={`p-2 mb-3 border border-[#141414] ${
                isSelected ? 'bg-white/10' : 'bg-[#F5F2ED]'
              }`}>
                {getCategoryIcon(cat.iconName)}
              </div>

              <h3 className={`font-bold text-xs md:text-sm line-clamp-1 mb-1 ${
                isSelected ? 'text-white' : 'text-[#141414] group-hover:text-[#FF6321]'
              }`}>
                {translatedCat.name}
              </h3>

              <div className="flex items-center justify-between w-full text-[10px] uppercase tracking-wider font-bold mt-auto pt-2 border-t border-[#141414]/10">
                <span className={isSelected ? 'text-[#FF6321]' : 'text-stone-500'}>
                  {cat.featuredCount}+ {t('listingsCount', 'Listings')}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                  isSelected ? 'text-[#FF6321]' : 'text-[#141414]'
                }`} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
