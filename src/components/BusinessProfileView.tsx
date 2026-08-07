import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Mail, 
  Globe, 
  Clock, 
  Star, 
  CheckCircle, 
  Share2, 
  Bookmark, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  UserCheck, 
  HelpCircle, 
  Camera, 
  ChevronRight,
  ExternalLink,
  Calendar,
  Building,
  Crown,
  Check,
  AlertCircle
} from 'lucide-react';
import { Business, BusinessReview, InquiryLead } from '../types';
import { addReview, addInquiryLead, recordWhatsAppClick, getStoredReviews } from '../lib/storage';

interface BusinessProfileViewProps {
  business: Business;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectBusiness: (b: Business) => void;
  allBusinesses: Business[];
  onOpenAddBusiness: () => void;
}

export const BusinessProfileView: React.FC<BusinessProfileViewProps> = ({
  business,
  onBack,
  isSaved,
  onToggleSave,
  onSelectBusiness,
  allBusinesses,
  onOpenAddBusiness
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'gallery' | 'reviews' | 'ai' | 'lead'>('overview');
  
  // Reviews state
  const [reviewsList, setReviewsList] = useState<BusinessReview[]>([]);
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewSubmittedMsg, setReviewSubmittedMsg] = useState('');

  // Lead Inquiry state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadService, setLeadService] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // AI Chat state for this profile
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiChatHistory, setAiChatHistory] = useState<{ sender: 'user' | 'ai'; text: string }[]>([
    {
      sender: 'ai',
      text: `Hello! I am the AI Assistant for ${business.name}. How can I assist you with services, timings, fees, or appointment information today?`
    }
  ]);
  const [aiLoading, setAiLoading] = useState(false);

  // Share message toast
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load reviews
    const allR = getStoredReviews();
    setReviewsList(allR.filter(r => r.businessId === business.id));
  }, [business.id]);

  // Handle AI question submission
  const handleAskAI = async (questionText: string) => {
    if (!questionText.trim() || aiLoading) return;
    
    const userMsg = questionText.trim();
    setAiQuestion('');
    setAiChatHistory(prev => [...prev, { sender: 'user', text: userMsg }]);
    setAiLoading(true);

    try {
      const res = await fetch('/api/ai/ask-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: business.name,
          category: business.category,
          tagline: business.tagline,
          description: business.description,
          address: business.address,
          area: business.area,
          openingHours: business.openingHours,
          consultationFee: business.consultationFee,
          services: business.services,
          faqs: business.faqs,
          specialties: business.specialties,
          question: userMsg
        })
      });

      const data = await res.json();
      if (data.answer) {
        setAiChatHistory(prev => [...prev, { sender: 'ai', text: data.answer }]);
      } else {
        setAiChatHistory(prev => [...prev, { sender: 'ai', text: "Thank you for asking! For exact details, please reach out via phone or WhatsApp." }]);
      }
    } catch (err) {
      setAiChatHistory(prev => [...prev, { sender: 'ai', text: "Sorry, I had trouble answering that moment. Please contact the business directly using the WhatsApp button!" }]);
    } finally {
      setAiLoading(false);
    }
  };

  // Submit Review
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName.trim() || !newComment.trim()) return;

    const added = addReview({
      businessId: business.id,
      userName: newReviewerName.trim(),
      rating: newRating,
      comment: newComment.trim(),
      verifiedCustomer: true
    });

    setReviewsList(prev => [added, ...prev]);
    setNewReviewerName('');
    setNewComment('');
    setReviewSubmittedMsg('Thank you! Your review has been published.');
    setTimeout(() => setReviewSubmittedMsg(''), 4000);
  };

  // Submit Lead Form
  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim() || !leadPhone.trim()) return;

    addInquiryLead({
      businessId: business.id,
      businessName: business.name,
      userName: leadName.trim(),
      userPhone: leadPhone.trim(),
      serviceRequested: leadService || 'General Inquiry',
      message: leadMessage.trim() || 'Callback requested via Vaniyambadi360.'
    });

    setLeadSubmitted(true);
  };

  // Share link
  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Filter nearby businesses
  const nearby = allBusinesses
    .filter(b => b.id !== business.id && (b.area === business.area || b.categoryId === business.categoryId))
    .slice(0, 3);

  // Suggested AI queries based on category
  const getSuggestedQuestions = () => {
    if (business.categoryId === 'lawyers') {
      return [
        'What is your consultation fee for property disputes?',
        'Can you prepare a sale deed and handle registration?',
        'What documents are needed for title check?',
        'What are your court working days?'
      ];
    }
    if (business.categoryId === 'restaurants') {
      return [
        'What is the price of Mutton Biryani?',
        'Do you provide marriage catering service?',
        'Are family AC dining seats available?',
        'What are your lunch & dinner timings?'
      ];
    }
    if (business.categoryId === 'leather') {
      return [
        'Are all footwear items made from genuine leather?',
        'Do you offer custom leather jacket stitching?',
        'Do you ship parcels outside Vaniyambadi?',
        'What are your shop opening hours?'
      ];
    }
    if (business.categoryId === 'ca') {
      return [
        'What is your monthly fee for GST filing?',
        'How many days does new GST registration take?',
        'Do you help with Income Tax Return filing?'
      ];
    }
    return [
      'What services do you provide?',
      'What are your opening timings?',
      'How can I book an appointment?',
      'Where is your exact location?'
    ];
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-3 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          
          {/* Back button & SEO Breadcrumbs */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 bg-slate-800 px-2.5 py-1.5 rounded-lg border border-slate-700 flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-slate-400 hidden sm:inline">vaniyambadi360.in</span>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-amber-300 font-medium truncate max-w-[180px] sm:max-w-none">
              business / {business.slug}
            </span>
          </div>

          {/* Share & Save */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={() => onToggleSave(business.id)}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Profile Banner & Hero Header */}
      <div className="bg-slate-900 text-white relative">
        
        {/* Cover Photo */}
        <div className="relative h-60 sm:h-80 md:h-96 w-full bg-slate-950 overflow-hidden">
          <img
            src={business.coverImage}
            alt={business.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        {/* Profile Card Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-24 sm:-mt-32 pb-8">
          <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl backdrop-blur-md">
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              
              {/* Logo & Main Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl border-4 border-slate-800 bg-white overflow-hidden shadow-2xl flex-shrink-0">
                  <img src={business.logo} alt="" className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {business.category}
                    </span>
                    {business.planTier === 'pro' && (
                      <span className="bg-amber-400 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow">
                        <Crown className="w-3.5 h-3.5" /> Official Business Webpage
                      </span>
                    )}
                    {business.verified && (
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Verified Identity
                      </span>
                    )}
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1">
                    {business.name}
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 font-medium mb-3 italic">
                    "{business.tagline}"
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <div className="flex items-center gap-1 bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded">
                      <Star className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{business.rating}</span>
                    </div>
                    <span className="font-semibold text-slate-400">
                      {business.reviewCount} Reviews
                    </span>
                    <span className="text-slate-600">•</span>
                    <div className="flex items-center gap-1 text-slate-300">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span>{business.address} ({business.area})</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Box */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 border-slate-800">
                
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${business.phone}`}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello ${business.name}, I am contacting you from your Vaniyambadi360 profile.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => recordWhatsAppClick(business.id)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setActiveTab('lead')}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request Callback / Lead Form</span>
                </button>

              </div>

            </div>

            {/* Profile Navigation Tabs Bar */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-800 overflow-x-auto text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Overview & About
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'services'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Services & Pricing ({business.services.length})
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'gallery'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Photo Gallery ({business.gallery.length})
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Reviews ({reviewsList.length})
              </button>

              {/* Ask AI Tab */}
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'ai'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold shadow-md border border-indigo-400/40'
                    : 'text-amber-300 hover:bg-slate-800 border border-amber-500/30'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Ask AI Assistant</span>
              </button>

              <button
                onClick={() => setActiveTab('lead')}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'lead'
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Inquiry Form
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Main Tab Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                
                {/* About Description Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-amber-600" />
                    <span>About {business.name}</span>
                  </h2>

                  <p className="text-slate-700 text-sm md:text-base leading-relaxed whitespace-pre-line mb-6">
                    {business.description}
                  </p>

                  {/* Consultation fee & Specs */}
                  {(business.consultationFee || business.establishedYear) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-xs md:text-sm">
                      {business.consultationFee && (
                        <div>
                          <span className="text-slate-500 font-medium block">Consultation / Service Rate:</span>
                          <span className="font-bold text-amber-950 text-base">{business.consultationFee}</span>
                        </div>
                      )}
                      {business.establishedYear && (
                        <div>
                          <span className="text-slate-500 font-medium block">Established Year:</span>
                          <span className="font-bold text-slate-900 text-base">{business.establishedYear}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Specialties Pills */}
                  {business.specialties && business.specialties.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                        Key Specialties & Practice Areas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {business.specialties.map((spec, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200">
                            ✓ {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Featured Services Preview Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Services Offered</h2>
                    <button
                      onClick={() => setActiveTab('services')}
                      className="text-xs text-amber-700 font-bold hover:underline"
                    >
                      View All ({business.services.length}) →
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {business.services.slice(0, 4).map((s, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-sm text-slate-900">{s.name}</h3>
                          {s.priceEstimate && (
                            <span className="bg-amber-100 text-amber-900 text-[11px] font-extrabold px-2 py-0.5 rounded">
                              {s.priceEstimate}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600">{s.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQs Card */}
                {business.faqs && business.faqs.length > 0 && (
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      <span>Frequently Asked Questions</span>
                    </h2>

                    <div className="space-y-4">
                      {business.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                          <h3 className="font-bold text-sm text-slate-900 mb-1 flex items-start gap-2">
                            <span className="text-amber-600">Q:</span> {faq.question}
                          </h3>
                          <p className="text-xs text-slate-700 leading-relaxed pl-5">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* SERVICES & PRICING TAB */}
            {activeTab === 'services' && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Complete Services & Pricing</h2>
                <p className="text-xs text-slate-500 mb-6">Rates and estimates provided directly by {business.name}.</p>

                <div className="grid grid-cols-1 gap-4">
                  {business.services.map((s, idx) => (
                    <div key={idx} className="p-5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-base text-slate-900 mb-1">{s.name}</h3>
                        <p className="text-xs text-slate-600 max-w-xl">{s.description}</p>
                      </div>

                      {s.priceEstimate && (
                        <div className="bg-amber-400/20 text-amber-950 border border-amber-400/40 font-black text-sm px-3 py-1.5 rounded-xl whitespace-nowrap self-start sm:self-auto">
                          {s.priceEstimate}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PHOTO GALLERY TAB */}
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-amber-600" />
                  <span>Photo & Work Gallery</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {business.gallery.map((img, idx) => (
                    <div key={idx} className="h-48 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 group relative">
                      <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CUSTOMER REVIEWS TAB */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                
                {/* Leave a review box */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Write a Customer Review</h2>
                  <p className="text-xs text-slate-500 mb-4">Share your experience with {business.name} in Vaniyambadi.</p>

                  {reviewSubmittedMsg && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3 rounded-xl mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>{reviewSubmittedMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs md:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={newReviewerName}
                          onChange={(e) => setNewReviewerName(e.target.value)}
                          placeholder="e.g. M. Subhan"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Rating *</label>
                        <select
                          value={newRating}
                          onChange={(e) => setNewRating(Number(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                        >
                          <option value={5}>⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                          <option value={4}>⭐⭐⭐⭐ (4/5 Very Good)</option>
                          <option value={3}>⭐⭐⭐ (3/5 Average)</option>
                          <option value={2}>⭐⭐ (2/5 Poor)</option>
                          <option value={1}>⭐ (1/5 Terrible)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Review Comments *</label>
                      <textarea
                        required
                        rows={3}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write details about service quality, fees, staff behavior, or food quality..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl shadow transition-colors cursor-pointer"
                    >
                      Publish Review
                    </button>
                  </form>
                </div>

                {/* Reviews List */}
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm space-y-4">
                  <h2 className="text-lg font-bold text-slate-900">Customer Ratings & Comments</h2>

                  {reviewsList.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">No reviews yet. Be the first to leave a review!</p>
                  ) : (
                    reviewsList.map((r) => (
                      <div key={r.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900">{r.userName}</span>
                            {r.verifiedCustomer && (
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                Verified Customer
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400">{r.date}</span>
                        </div>

                        <div className="flex items-center gap-1 text-amber-500 text-xs">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed">{r.comment}</p>

                        {r.ownerReply && (
                          <div className="mt-2 p-3 bg-amber-50 border-l-2 border-amber-500 rounded-r-xl text-xs">
                            <span className="font-bold text-amber-900 block mb-0.5">Response from Owner:</span>
                            <span className="text-slate-700">{r.ownerReply}</span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>

              </div>
            )}

            {/* ASK AI TAB */}
            {activeTab === 'ai' && (
              <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-white">Ask AI Profile Assistant</h2>
                      <p className="text-xs text-slate-400">Powered by Gemini 3.6 Flash & {business.name} data</p>
                    </div>
                  </div>

                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Live Response
                  </span>
                </div>

                {/* Suggested Quick Questions Chips */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">Suggested Quick Questions:</span>
                  <div className="flex flex-wrap gap-2">
                    {getSuggestedQuestions().map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAskAI(q)}
                        className="bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs px-3 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer text-left"
                      >
                        ⚡ {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat History Container */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 h-80 overflow-y-auto space-y-3">
                  {aiChatHistory.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col max-w-[88%] ${
                        msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                      }`}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs md:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-amber-500 text-slate-950 font-medium rounded-br-none'
                            : 'bg-slate-850 text-slate-200 border border-slate-800 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 px-1">
                        {msg.sender === 'user' ? 'You' : `AI Assistant`}
                      </span>
                    </div>
                  ))}

                  {aiLoading && (
                    <div className="flex items-center gap-2 text-xs text-amber-400 italic">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-bounce" />
                      <span>Thinking response...</span>
                    </div>
                  )}
                </div>

                {/* Input form */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={aiQuestion}
                    onChange={(e) => setAiQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAskAI(aiQuestion)}
                    placeholder="Ask anything (e.g. Can they draft a deed? What are consultation fees?)..."
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
                  />
                  <button
                    onClick={() => handleAskAI(aiQuestion)}
                    disabled={aiLoading || !aiQuestion.trim()}
                    className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold p-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {/* INQUIRY LEAD FORM TAB */}
            {activeTab === 'lead' && (
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-1">Send Direct Callback Request</h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details to receive an instant call/message from {business.name} team.
                </p>

                {leadSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-extrabold text-slate-900 text-lg">Inquiry Sent Successfully!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      Your callback request has been logged in {business.name}’s Vaniyambadi360 owner portal. They will reach out to your phone shortly.
                    </p>
                    <button
                      onClick={() => setLeadSubmitted(false)}
                      className="text-xs text-amber-700 font-bold underline pt-2"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4 text-xs md:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="e.g. S. Imran Basha"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Mobile Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Service Required</label>
                      <select
                        value={leadService}
                        onChange={(e) => setLeadService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                      >
                        <option value="">Select a service...</option>
                        {business.services.map((s, idx) => (
                          <option key={idx} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Brief Inquiry Message</label>
                      <textarea
                        rows={3}
                        value={leadMessage}
                        onChange={(e) => setLeadMessage(e.target.value)}
                        placeholder="Describe your requirement (e.g. Need land title check near New Town)..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      Submit Callback Request
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* Right Sidebar Column (Contact Card, Google Map, Owner Claim) */}
          <div className="space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Contact & Hours</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Full Address:</span>
                  <span className="font-semibold text-slate-800">{business.address}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Opening Hours:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5">
                    {business.openingHours}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Phone Number:</span>
                  <a href={`tel:${business.phone}`} className="font-bold text-slate-900 hover:text-amber-700">
                    {business.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">WhatsApp Direct:</span>
                  <a
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-600 hover:underline"
                  >
                    +{business.whatsapp}
                  </a>
                </div>

                {business.website && (
                  <div>
                    <span className="text-slate-400 block font-medium">Official Website:</span>
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-indigo-600 hover:underline truncate block"
                    >
                      {business.website}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Google Map Location Simulation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Map Location</span>
                </span>
                <span className="text-[11px] font-semibold text-slate-500">{business.area}</span>
              </h2>

              <div className="w-full h-44 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative flex items-center justify-center">
                <iframe
                  title="Vaniyambadi Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(business.googleMapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                />
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.googleMapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Get Directions on Maps
              </a>
            </div>

            {/* Claim / Upgrade Listing Widget */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 border border-slate-700 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                <Crown className="w-4 h-4" /> Own this business?
              </div>
              <h3 className="font-extrabold text-sm text-white">
                Claim this profile or create a custom mini-website!
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Get direct WhatsApp lead buttons, AI profile assistant, photos, and top search placement for ₹499/mo.
              </p>
              <button
                onClick={onOpenAddBusiness}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md cursor-pointer"
              >
                Claim / Upgrade Listing
              </button>
            </div>

            {/* Related Businesses in Vaniyambadi */}
            {nearby.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
                <h3 className="font-bold text-sm text-slate-900 pb-2 border-b border-slate-100">
                  Nearby Businesses in {business.area}
                </h3>
                <div className="space-y-3">
                  {nearby.map((nb) => (
                    <div
                      key={nb.id}
                      onClick={() => onSelectBusiness(nb)}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0">
                        <img src={nb.logo} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1 text-xs">
                        <h4 className="font-bold text-slate-900 group-hover:text-amber-700 truncate">
                          {nb.name}
                        </h4>
                        <p className="text-slate-500 truncate">{nb.category}</p>
                        <span className="text-[10px] text-amber-600 font-semibold">★ {nb.rating} ({nb.reviewCount})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
