import React, { useState, useEffect, useMemo } from 'react';
import { 
  getStoredBusinesses, 
  getSavedFavorites, 
  toggleFavorite, 
  saveBusinesses,
  recordProfileView 
} from './lib/storage';
import { Business } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { BusinessCard } from './components/BusinessCard';
import { BusinessProfileView } from './components/BusinessProfileView';
import { AddBusinessModal } from './components/AddBusinessModal';
import { OwnerDashboardModal } from './components/OwnerDashboardModal';
import { JobsAndEventsView } from './components/JobsAndEventsView';
import { TownAIAssistantModal } from './components/TownAIAssistantModal';
import { IntroPostModal } from './components/IntroPostModal';
import { SEOKeywordsBanner } from './components/SEOKeywordsBanner';
import { Footer } from './components/Footer';
import { Filter, X, Check, Search, Sparkles, Building2, MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { CATEGORIES, CATEGORY_GROUPS } from './data/vaniyambadiData';
import { calculateDistanceKm, getBusinessLatLng } from './lib/location';

export default function App() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  
  // Navigation & View state
  const [activeTab, setActiveTab] = useState<'directory' | 'jobs-events' | 'saved'>('directory');

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [openNowOnly, setOpenNowOnly] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'all' | 'premium' | 'pro' | 'elite'>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'featured' | 'distance'>('featured');

  // Favorites
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);

  // Modals
  const [addBusinessOpen, setAddBusinessOpen] = useState(false);
  const [ownerDashboardOpen, setOwnerDashboardOpen] = useState(false);
  const [townAIOpen, setTownAIOpen] = useState(false);
  const [introPostOpen, setIntroPostOpen] = useState(false);

  // Load Initial Data
  useEffect(() => {
    const list = getStoredBusinesses();
    setBusinesses(list);
    setSavedFavorites(getSavedFavorites());
  }, []);

  // Handle Toggle Save / Bookmark
  const handleToggleFavorite = (bId: string) => {
    const updated = toggleFavorite(bId);
    setSavedFavorites(updated);
  };

  // Open Business Profile View
  const handleSelectBusiness = (b: Business) => {
    recordProfileView(b.id);
    setSelectedBusiness(b);
  };

  // When a new business is added
  const handleBusinessAdded = (newB: Business) => {
    const updated = getStoredBusinesses();
    setBusinesses(updated);
    setSelectedBusiness(newB);
  };

  // Filtered Businesses
  const filteredBusinesses = useMemo(() => {
    return businesses.filter(b => {
      // Saved tab filter
      if (activeTab === 'saved' && !savedFavorites.includes(b.id)) {
        return false;
      }

      // Search query (matches name, description, area, services, category, tagline)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = b.name.toLowerCase().includes(q);
        const matchesCat = b.category.toLowerCase().includes(q);
        const matchesArea = b.area.toLowerCase().includes(q);
        const matchesTagline = b.tagline.toLowerCase().includes(q);
        const matchesDesc = b.description.toLowerCase().includes(q);
        const matchesService = b.services.some(s => s.name.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q));
        const matchesSpecialty = b.specialties?.some(sp => sp.toLowerCase().includes(q));

        if (!matchesName && !matchesCat && !matchesArea && !matchesTagline && !matchesDesc && !matchesService && !matchesSpecialty) {
          return false;
        }
      }

      // Category filter (supports category groups like professional-services)
      if (selectedCategory) {
        const group = CATEGORY_GROUPS.find(g => g.id === selectedCategory);
        if (group) {
          if (!group.categoryIds.includes(b.categoryId)) {
            return false;
          }
        } else if (b.categoryId !== selectedCategory) {
          return false;
        }
      }

      // Area filter
      if (selectedArea !== 'All Areas' && b.area !== selectedArea) {
        return false;
      }

      // Open now filter
      if (openNowOnly && !b.openNowStatus) {
        return false;
      }

      // Tier filter
      if (selectedTier !== 'all') {
        if (selectedTier === 'elite' && !(b.planTier === 'elite' || b.isElite || b.planTier === 'premium')) {
          return false;
        }
        if (selectedTier !== 'elite' && b.planTier !== selectedTier) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'distance') {
        const distA = calculateDistanceKm(getBusinessLatLng(a));
        const distB = calculateDistanceKm(getBusinessLatLng(b));
        return distA - distB;
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      if (sortBy === 'reviews') {
        return b.reviewCount - a.reviewCount;
      }
      // default: featured first then rating
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating - a.rating;
    });
  }, [businesses, activeTab, savedFavorites, searchQuery, selectedCategory, selectedArea, openNowOnly, selectedTier, sortBy]);

  // Selected category object
  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F2ED] font-sans text-[#141414] flex flex-col selection:bg-[#FF6321] selection:text-white">
      
      {/* Sticky Global Navbar */}
      <Navbar
        selectedArea={selectedArea}
        onSelectArea={setSelectedArea}
        onOpenAddBusiness={() => setAddBusinessOpen(true)}
        onOpenOwnerDashboard={() => setOwnerDashboardOpen(true)}
        onOpenTownAI={() => setTownAIOpen(true)}
        onOpenIntroPost={() => setIntroPostOpen(true)}
        savedCount={savedFavorites.length}
        onShowSavedOnly={() => {
          setActiveTab('saved');
          setSelectedBusiness(null);
        }}
        onGoHome={() => {
          setSelectedBusiness(null);
          setActiveTab('directory');
          setSearchQuery('');
          setSelectedCategory('');
        }}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedBusiness(null);
        }}
      />

      {/* RENDER DEDICATED PROFILE PAGE IF SELECTED */}
      {selectedBusiness ? (
        <BusinessProfileView
          business={selectedBusiness}
          onBack={() => setSelectedBusiness(null)}
          isSaved={savedFavorites.includes(selectedBusiness.id)}
          onToggleSave={handleToggleFavorite}
          onSelectBusiness={handleSelectBusiness}
          allBusinesses={businesses}
          onOpenAddBusiness={() => setAddBusinessOpen(true)}
        />
      ) : activeTab === 'jobs-events' ? (
        /* LOCAL JOBS & EVENTS VIEW */
        <JobsAndEventsView />
      ) : (
        /* MAIN DIRECTORY VIEW */
        <main className="flex-1 pb-16">
          
          {/* Hero Banner with Search Bar */}
          <HeroSection
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedArea={selectedArea}
            onSelectArea={setSelectedArea}
            onOpenTownAI={() => setTownAIOpen(true)}
            onOpenIntroPost={() => setIntroPostOpen(true)}
            totalListingsCount={businesses.length}
          />

          {/* Popular Categories Cards Grid */}
          <CategoryGrid
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Main Listings Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            
            {/* Filter & Results Controls Bar */}
            <div className="bg-white p-4 border-2 border-[#141414] shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              
              {/* Category & Results Header */}
              <div>
                <h2 className="serif text-xl md:text-2xl font-bold text-[#141414] flex items-center gap-2">
                  <span>
                    {activeTab === 'saved'
                      ? 'Your Saved Listings'
                      : currentCategoryObj
                      ? `${currentCategoryObj.name} in Vaniyambadi`
                      : 'Verified Local Businesses'}
                  </span>
                  <span className="bg-[#FF6321] text-white text-xs font-bold px-2 py-0.5 border border-[#141414]">
                    {filteredBusinesses.length}
                  </span>
                </h2>
                {currentCategoryObj && (
                  <p className="text-xs text-stone-600 mt-1 font-medium">
                    {currentCategoryObj.description}
                  </p>
                )}
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 text-xs w-full md:w-auto">
                
                {/* Filter by Tier */}
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value as any)}
                  className="bg-[#F5F2ED] border border-[#141414] px-3 py-2 font-bold text-[#141414] text-xs uppercase tracking-wider focus:outline-none cursor-pointer"
                >
                  <option value="all">All Tiers</option>
                  <option value="elite">Level 2 Elite Verified</option>
                  <option value="premium">Featured Only (₹499)</option>
                  <option value="pro">Pro Webpages (₹999)</option>
                </select>

                {/* Filter Open Now */}
                <button
                  onClick={() => setOpenNowOnly(!openNowOnly)}
                  className={`px-3 py-2 font-bold text-xs uppercase tracking-wider border border-[#141414] transition-all cursor-pointer ${
                    openNowOnly
                      ? 'bg-[#141414] text-white'
                      : 'bg-[#F5F2ED] text-[#141414] hover:bg-white'
                  }`}
                >
                  {openNowOnly ? '✓ Open Now' : 'Open Now'}
                </button>

                {/* Sort dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#F5F2ED] border border-[#141414] px-3 py-2 font-bold text-[#141414] text-xs uppercase tracking-wider focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="distance">Nearest First (Distance)</option>
                  <option value="rating">Highest Rating</option>
                  <option value="reviews">Most Reviews</option>
                </select>

              </div>

            </div>

            {/* Active Filter Tags */}
            {(selectedCategory || selectedArea !== 'All Areas' || searchQuery || openNowOnly || selectedTier !== 'all') && (
              <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
                <span className="text-stone-600 font-bold uppercase tracking-widest text-[10px]">Active Filters:</span>
                
                {searchQuery && (
                  <span className="bg-[#141414] text-white font-bold px-2.5 py-1 text-[11px] flex items-center gap-1 border border-[#141414]">
                    Search: "{searchQuery}"
                    <X className="w-3.5 h-3.5 cursor-pointer text-[#FF6321]" onClick={() => setSearchQuery('')} />
                  </span>
                )}

                {selectedCategory && (
                  <span className="bg-[#141414] text-white font-bold px-2.5 py-1 text-[11px] flex items-center gap-1 border border-[#141414]">
                    Category: {currentCategoryObj?.name}
                    <X className="w-3.5 h-3.5 cursor-pointer text-[#FF6321]" onClick={() => setSelectedCategory('')} />
                  </span>
                )}

                {selectedArea !== 'All Areas' && (
                  <span className="bg-[#141414] text-white font-bold px-2.5 py-1 text-[11px] flex items-center gap-1 border border-[#141414]">
                    Area: {selectedArea}
                    <X className="w-3.5 h-3.5 cursor-pointer text-[#FF6321]" onClick={() => setSelectedArea('All Areas')} />
                  </span>
                )}

                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setSelectedArea('All Areas');
                    setOpenNowOnly(false);
                    setSelectedTier('all');
                  }}
                  className="text-[#FF6321] font-bold uppercase tracking-wider text-[11px] hover:underline pl-2"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* BUSINESS CARDS GRID */}
            {filteredBusinesses.length === 0 ? (
              <div className="bg-white border-2 border-[#141414] p-12 text-center shadow-[4px_4px_0px_0px_rgba(20,20,20,1)] space-y-4 my-8">
                <Building2 className="w-12 h-12 text-stone-400 mx-auto" />
                <h3 className="serif text-xl font-bold text-[#141414]">No businesses found matching your filter</h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Try clearing your search keyword or switching area filters. You can also add a new local business to Vaniyambadi360!
                </p>
                <button
                  onClick={() => setAddBusinessOpen(true)}
                  className="bg-[#FF6321] hover:bg-[#e05316] text-white font-bold text-xs uppercase tracking-widest px-5 py-2.5 transition-all shadow cursor-pointer border border-[#141414]"
                >
                  + Add Business Now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map((b) => (
                  <BusinessCard
                    key={b.id}
                    business={b}
                    onSelectBusiness={handleSelectBusiness}
                    onOpenAIModal={(business) => {
                      recordProfileView(business.id);
                      setSelectedBusiness(business);
                    }}
                    isSaved={savedFavorites.includes(b.id)}
                    onToggleSave={handleToggleFavorite}
                  />
                ))}
              </div>
            )}

          </section>

          {/* Hyperlocal SEO Keywords Banner */}
          <SEOKeywordsBanner
            onSearchKeyword={(kw) => {
              setSearchQuery(kw);
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
          />

        </main>
      )}

      {/* Global Modals */}
      <AddBusinessModal
        isOpen={addBusinessOpen}
        onClose={() => setAddBusinessOpen(false)}
        onBusinessAdded={handleBusinessAdded}
      />

      <OwnerDashboardModal
        isOpen={ownerDashboardOpen}
        onClose={() => setOwnerDashboardOpen(false)}
        onSelectBusiness={(b) => {
          setSelectedBusiness(b);
          setOwnerDashboardOpen(false);
        }}
      />

      <TownAIAssistantModal
        isOpen={townAIOpen}
        onClose={() => setTownAIOpen(false)}
      />

      <IntroPostModal
        isOpen={introPostOpen}
        onClose={() => setIntroPostOpen(false)}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          setSelectedBusiness(null);
          setActiveTab('directory');
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }}
        onOpenAddBusiness={() => setAddBusinessOpen(true)}
        onOpenOwnerDashboard={() => setOwnerDashboardOpen(true)}
        onOpenTownAI={() => setTownAIOpen(true)}
      />

    </div>
  );
}
