import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Phone, Clock, PlusCircle, CheckCircle, Tag, Building } from 'lucide-react';
import { LocalJob, LocalEvent } from '../types';
import { getStoredJobs, getStoredEvents, addJobListing } from '../lib/storage';
import { useLanguage } from '../context/LanguageContext';

export const JobsAndEventsView: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'jobs' | 'events'>('jobs');
  const [jobs, setJobs] = useState<LocalJob[]>(getStoredJobs());
  const [events, setEvents] = useState<LocalEvent[]>(getStoredEvents());

  // Post Job State
  const [showPostJob, setShowPostJob] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobLocation, setJobLocation] = useState('New Town, Vaniyambadi');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [jobPostedMsg, setJobPostedMsg] = useState(false);

  const handlePostJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim() || !companyName.trim() || !contactPhone.trim()) return;

    const newJ = addJobListing({
      title: jobTitle.trim(),
      companyName: companyName.trim(),
      location: jobLocation.trim() || 'Vaniyambadi',
      jobType: 'Full-time',
      salaryRange: salaryRange.trim() || 'Market standard',
      description: jobDescription.trim() || 'Contact employer directly for details.',
      contactPhone: contactPhone.trim(),
      category: 'Local Employment'
    });

    setJobs(prev => [newJ, ...prev]);
    setJobPostedMsg(true);
    setTimeout(() => {
      setJobPostedMsg(false);
      setShowPostJob(false);
      setJobTitle('');
      setCompanyName('');
      setContactPhone('');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#141414]/20">
        <div>
          <span className="text-[#FF6321] font-bold text-xs uppercase tracking-wider block mb-1">
            Vaniyambadi Digital Ecosystem
          </span>
          <h1 className="serif text-2xl md:text-3xl font-extrabold text-[#141414]">
            {t('jobs_title', 'Local Town Jobs, Events & Announcements')}
          </h1>
          <p className="text-xs md:text-sm text-stone-600 mt-1">
            {t('jobs_subtitle', 'Discover employment opportunities, sales events, and medical camps in Vaniyambadi')}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-white p-1.5 border-2 border-[#141414]">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
              activeTab === 'jobs'
                ? 'bg-[#141414] text-white shadow'
                : 'text-[#141414] hover:text-[#FF6321]'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#FF6321]" />
            <span>{t('jobs_hiring', 'Jobs & Hiring')} ({jobs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-extrabold transition-all cursor-pointer ${
              activeTab === 'events'
                ? 'bg-[#141414] text-white shadow'
                : 'text-[#141414] hover:text-[#FF6321]'
            }`}
          >
            <Calendar className="w-4 h-4 text-[#FF6321]" />
            <span>{t('jobs_events', 'Events & Camps')} ({events.length})</span>
          </button>
        </div>
      </div>

      {/* JOBS SECTION */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <h2 className="serif text-xl font-extrabold text-[#141414]">{t('jobs_hiring', 'Jobs & Hiring')}</h2>
            <button
              onClick={() => setShowPostJob(!showPostJob)}
              className="flex items-center gap-1.5 bg-[#FF6321] hover:bg-[#e05316] text-white font-extrabold text-xs px-3.5 py-2 transition-all cursor-pointer border border-[#141414]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{t('jobs_post_cta', '+ Post Job or Event (Free)')}</span>
            </button>
          </div>

          {/* Post Job Form Box */}
          {showPostJob && (
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-base font-extrabold text-white">Post a Local Job Listing</h3>

              {jobPostedMsg ? (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-xl flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Job posted live on Vaniyambadi360!</span>
                </div>
              ) : (
                <form onSubmit={handlePostJobSubmit} className="space-y-3 text-xs md:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Job Designation *</label>
                      <input
                        type="text"
                        required
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Tally Accountant / Store Supervisor"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Company / Shop Name *</label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Khaderpet Leather Exports"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Vaniyambadi Location</label>
                      <input
                        type="text"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                        placeholder="e.g. C.L. Road"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Monthly Salary Range</label>
                      <input
                        type="text"
                        value={salaryRange}
                        onChange={(e) => setSalaryRange(e.target.value)}
                        placeholder="e.g. ₹18,000 - ₹25,000"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Contact Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+91 98423 00000"
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Role Description</label>
                    <textarea
                      rows={2}
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Requirements, experience needed, working hours..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl shadow cursor-pointer"
                  >
                    Publish Job Listing
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map((job) => (
              <div key={job.id} className="p-5 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      {job.jobType}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Posted {job.postedDate}</span>
                  </div>

                  <h3 className="font-extrabold text-base md:text-lg text-slate-900 leading-tight">{job.title}</h3>
                  <p className="text-xs font-bold text-amber-700 flex items-center gap-1 mt-0.5">
                    <Building className="w-3.5 h-3.5" /> {job.companyName}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-500 my-2">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}</span>
                    <span>•</span>
                    <span className="font-semibold text-slate-800">{job.salaryRange}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{job.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">Vaniyambadi Verified Employer</span>
                  <a
                    href={`tel:${job.contactPhone}`}
                    className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" /> Apply via Call
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* EVENTS SECTION */}
      {activeTab === 'events' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev) => (
            <div key={ev.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-44 w-full bg-slate-900">
                  <img src={ev.image} alt="" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-full uppercase shadow">
                    {ev.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-extrabold text-base text-slate-900 leading-tight">{ev.title}</h3>
                  <p className="text-xs font-bold text-amber-700">{ev.organizer}</p>

                  <div className="space-y-1 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-600" /> {ev.date}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {ev.time}</div>
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {ev.location}</div>
                  </div>

                  <p className="text-xs text-slate-600 pt-2 leading-relaxed">{ev.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => alert(`Saved event: ${ev.title}. Visit location on specified dates!`)}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                >
                  Save Event Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
