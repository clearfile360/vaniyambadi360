import React, { useState, useEffect } from 'react';
import { X, LayoutDashboard, Phone, MessageSquare, Eye, Users, CheckCircle, Clock, Search, Filter } from 'lucide-react';
import { Business, InquiryLead } from '../types';
import { getStoredBusinesses, getStoredLeads } from '../lib/storage';

interface OwnerDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBusiness: (b: Business) => void;
}

export const OwnerDashboardModal: React.FC<OwnerDashboardModalProps> = ({
  isOpen,
  onClose,
  onSelectBusiness
}) => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [leads, setLeads] = useState<InquiryLead[]>([]);
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>('all');

  useEffect(() => {
    if (isOpen) {
      const bList = getStoredBusinesses();
      setBusinesses(bList);
      const lList = getStoredLeads();
      setLeads(lList);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = selectedBusinessId === 'all' 
    ? leads 
    : leads.filter(l => l.businessId === selectedBusinessId);

  const totalViews = businesses.reduce((acc, curr) => acc + (curr.viewsCount || 0), 0);
  const totalWhatsapp = businesses.reduce((acc, curr) => acc + (curr.whatsappClicks || 0), 0);
  const totalLeads = leads.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-black">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">
                Vaniyambadi360 Merchant Analytics
              </span>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Owner Dashboard & Leads Portal
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          
          {/* Top Analytics Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="p-4 bg-amber-50 border border-amber-200/80 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">Total Profile Views</span>
                <span className="text-2xl font-black text-slate-900">{totalViews}</span>
              </div>
              <div className="p-3 bg-amber-100 rounded-xl text-amber-800">
                <Eye className="w-6 h-6" />
              </div>
            </div>

            <div className="p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">WhatsApp Click-Throughs</span>
                <span className="text-2xl font-black text-slate-900">{totalWhatsapp}</span>
              </div>
              <div className="p-3 bg-emerald-100 rounded-xl text-emerald-800">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>

            <div className="p-4 bg-indigo-50 border border-indigo-200/80 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-600 block">Direct Inquiry Leads</span>
                <span className="text-2xl font-black text-slate-900">{totalLeads}</span>
              </div>
              <div className="p-3 bg-indigo-100 rounded-xl text-indigo-800">
                <Users className="w-6 h-6" />
              </div>
            </div>

          </div>

          {/* Business Filter selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs md:text-sm">
            <span className="font-bold text-slate-700">Filter Inquiries by Business:</span>
            <select
              value={selectedBusinessId}
              onChange={(e) => setSelectedBusinessId(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-900 focus:outline-none focus:border-amber-500"
            >
              <option value="all">All My Listed Businesses ({businesses.length})</option>
              {businesses.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.area})
                </option>
              ))}
            </select>
          </div>

          {/* Registered Businesses Quick List */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">Your Published Mini-Websites / Listings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {businesses.map((b) => (
                <div
                  key={b.id}
                  onClick={() => {
                    onSelectBusiness(b);
                    onClose();
                  }}
                  className="p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-amber-400 hover:shadow-md cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={b.logo} alt="" className="w-10 h-10 rounded-lg object-cover border" />
                    <div className="min-w-0">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-amber-700 truncate">{b.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{b.category} • {b.area}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded uppercase">
                    {b.planTier}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Leads Table */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">Recent Customer Lead Inquiries ({filteredLeads.length})</h3>

            {filteredLeads.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 text-xs">
                No customer callback requests logged yet. Share your Vaniyambadi360 profile link to generate leads!
              </div>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm">{lead.userName}</span>
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                          {lead.serviceRequested || 'General'}
                        </span>
                      </div>
                      <span className="text-slate-400 text-[11px]">{lead.createdAt}</span>
                    </div>

                    <p className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 italic">
                      "{lead.message}"
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-500 font-medium">For: <strong className="text-slate-800">{lead.businessName}</strong></span>
                      <a
                        href={`tel:${lead.userPhone}`}
                        className="flex items-center gap-1 bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-500 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Customer ({lead.userPhone})
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
