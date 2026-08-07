import React, { useState } from 'react';
import { X, CheckCircle, Crown, Zap, Sparkles, Building, Phone, MapPin, Globe, Check } from 'lucide-react';
import { Business, PlanTier } from '../types';
import { CATEGORIES, VANIYAMBADI_AREAS } from '../data/vaniyambadiData';
import { addNewBusiness } from '../lib/storage';

interface AddBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBusinessAdded: (b: Business) => void;
}

export const AddBusinessModal: React.FC<AddBusinessModalProps> = ({
  isOpen,
  onClose,
  onBusinessAdded
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>('premium');
  const [step, setStep] = useState<1 | 2>(1); // Step 1: Select Plan, Step 2: Fill Business Info

  // Form Fields
  const [name, setName] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [area, setArea] = useState(VANIYAMBADI_AREAS[1] || 'C.L. Road');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [openingHours, setOpeningHours] = useState('Mon - Sat: 9:30 AM - 8:30 PM');
  const [consultationFee, setConsultationFee] = useState('');
  const [service1, setService1] = useState('');
  const [service2, setService2] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) return;

    const selectedCategoryObj = CATEGORIES.find(c => c.id === category) || CATEGORIES[0];

    const newBus = addNewBusiness({
      name: name.trim(),
      category: selectedCategoryObj.name,
      categoryId: selectedCategoryObj.id,
      tagline: tagline.trim() || `Top Quality ${selectedCategoryObj.name} in Vaniyambadi`,
      description: description.trim() || `${name} provides professional services in ${area}, Vaniyambadi.`,
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop&q=80',
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
      address: address.trim(),
      area: area,
      phone: phone.trim(),
      whatsapp: whatsapp.trim() || phone.replace(/[^0-9]/g, ''),
      email: email.trim() || 'contact@vaniyambadi360.in',
      openingHours: openingHours,
      openNowStatus: true,
      verified: true,
      claimed: true,
      planTier: selectedPlan,
      featured: selectedPlan !== 'free',
      consultationFee: consultationFee.trim(),
      specialties: [selectedCategoryObj.name, 'Local Vaniyambadi Expert'],
      services: [
        { name: service1 || 'Primary Consultation & Service', description: 'Available directly at Vaniyambadi premises.', priceEstimate: consultationFee || 'Standard Rate' },
        { name: service2 || 'On-Demand Inquiry Response', description: 'Direct phone & WhatsApp support.', priceEstimate: 'Free Quote' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80'
      ],
      faqs: [
        { question: `What are the working timings for ${name}?`, answer: openingHours },
        { question: `Where is ${name} located in Vaniyambadi?`, answer: `${address}, ${area}, Vaniyambadi.` }
      ],
      googleMapQuery: `${address}, Vaniyambadi, Tamil Nadu`
    });

    setSubmitted(true);
    setTimeout(() => {
      onBusinessAdded(newBus);
      onClose();
      setSubmitted(false);
      setStep(1);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-0.5">
              Vaniyambadi360 Merchant Portal
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white">
              List / Claim Your Business in Vaniyambadi
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black text-slate-900">Listing Published Successfully!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Your business is now live on Vaniyambadi360.in with direct WhatsApp lead buttons and SEO metadata.
            </p>
          </div>
        ) : (
          <div className="p-6 md:p-8 space-y-6">
            
            {/* Step 1: Select Plan Tier */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Choose Listing Plan</h3>
                  <p className="text-xs text-slate-500">
                    Transform your local shop or office into a digital business profile.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Free Plan */}
                  <div
                    onClick={() => setSelectedPlan('free')}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === 'free'
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Free Tier</span>
                      <div className="text-2xl font-black text-slate-900 mb-2">₹0 <span className="text-xs text-slate-500 font-normal">/ forever</span></div>
                      <ul className="text-xs text-slate-600 space-y-2 mb-4">
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Basic Address Listing</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Phone Contact Card</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Category Search placement</li>
                      </ul>
                    </div>

                    <button className={`w-full py-2 rounded-xl text-xs font-bold ${
                      selectedPlan === 'free' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Select Free
                    </button>
                  </div>

                  {/* Premium Plan (₹499/mo) */}
                  <div
                    onClick={() => setSelectedPlan('premium')}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                      selectedPlan === 'premium'
                        ? 'border-amber-500 bg-amber-50/50 ring-2 ring-amber-400/40'
                        : 'border-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-4 bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">
                      Most Popular
                    </span>

                    <div>
                      <div className="flex items-center gap-1 text-amber-600 font-bold text-xs uppercase mb-1">
                        <Zap className="w-3.5 h-3.5 fill-amber-500" /> Premium Listing
                      </div>
                      <div className="text-2xl font-black text-slate-900 mb-2">₹499 <span className="text-xs text-slate-500 font-normal">/ month</span></div>
                      <ul className="text-xs text-slate-700 space-y-2 mb-4 font-medium">
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Featured Badge & Top Placement</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Direct Chat Button</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Customer Lead Inquiry Form</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Photo Gallery & Review Replies</li>
                      </ul>
                    </div>

                    <button className={`w-full py-2 rounded-xl text-xs font-extrabold ${
                      selectedPlan === 'premium' ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Select Premium
                    </button>
                  </div>

                  {/* Pro Plan (₹999/mo) */}
                  <div
                    onClick={() => setSelectedPlan('pro')}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === 'pro'
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-400/40'
                        : 'border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1 text-indigo-700 font-bold text-xs uppercase mb-1">
                        <Crown className="w-3.5 h-3.5 fill-indigo-600" /> Pro Webpage Plan
                      </div>
                      <div className="text-2xl font-black text-slate-900 mb-2">₹999 <span className="text-xs text-slate-500 font-normal">/ month</span></div>
                      <ul className="text-xs text-slate-700 space-y-2 mb-4 font-medium">
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Complete Dedicated Mini-Website</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Integrated Gemini AI Chatbot</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Custom Domain Support</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-600" /> Full SEO Optimization</li>
                      </ul>
                    </div>

                    <button className={`w-full py-2 rounded-xl text-xs font-extrabold ${
                      selectedPlan === 'pro' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Select Pro Webpage
                    </button>
                  </div>

                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl shadow-lg transition-colors cursor-pointer"
                >
                  Continue to Fill Business Details →
                </button>
              </div>
            )}

            {/* Step 2: Form Input */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-amber-700">
                    Selected Plan: <span className="uppercase text-slate-900">{selectedPlan}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-500 underline font-semibold"
                  >
                    Change Plan
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Business / Shop Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Advocate / Royal Tanneries"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Category *</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Vaniyambadi Area *</label>
                    <select
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 font-bold focus:outline-none focus:border-amber-500"
                    >
                      {VANIYAMBADI_AREAS.filter(a => a !== 'All Areas').map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Street Address *</label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Door No. 12, C.L. Road, Near Bus Stand"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98423 00000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="919842300000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Consultation / Service Rate</label>
                    <input
                      type="text"
                      value={consultationFee}
                      onChange={(e) => setConsultationFee(e.target.value)}
                      placeholder="e.g. ₹500 / ₹280 per plate"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Business Tagline</label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. Expert Civil Law & Property Sale Deed Guidance in Vaniyambadi"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Detailed Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your services, experience, specialization, and customer guarantees..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl transition-colors"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="w-2/3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl shadow-lg transition-colors cursor-pointer"
                  >
                    Publish Webpage Profile
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
