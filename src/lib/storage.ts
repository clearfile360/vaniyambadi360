import { Business, BusinessReview, InquiryLead, LocalJob, LocalEvent } from '../types';
import { SAMPLE_BUSINESSES, SAMPLE_REVIEWS, SAMPLE_JOBS, SAMPLE_EVENTS } from '../data/vaniyambadiData';

const STORAGE_KEYS = {
  BUSINESSES: 'v360_businesses_v1',
  REVIEWS: 'v360_reviews_v1',
  SAVED_FAVORITES: 'v360_favorites_v1',
  LEADS: 'v360_leads_v1',
  JOBS: 'v360_jobs_v1',
  EVENTS: 'v360_events_v1',
};

// Helper safely accessing localStorage
export const getStoredBusinesses = (): Business[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.BUSINESSES);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading stored businesses', err);
  }
  return SAMPLE_BUSINESSES;
};

export const saveBusinesses = (businesses: Business[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.BUSINESSES, JSON.stringify(businesses));
  } catch (err) {
    console.error('Error saving businesses', err);
  }
};

export const getStoredReviews = (): BusinessReview[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading stored reviews', err);
  }
  return SAMPLE_REVIEWS;
};

export const addReview = (review: Omit<BusinessReview, 'id' | 'date'>): BusinessReview => {
  const allReviews = getStoredReviews();
  const newReview: BusinessReview = {
    ...review,
    id: 'r_' + Date.now(),
    date: 'Just now',
  };
  const updatedReviews = [newReview, ...allReviews];
  try {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(updatedReviews));
  } catch (err) {
    console.error('Error saving review', err);
  }

  // Update business review count and average rating
  const businesses = getStoredBusinesses();
  const busIndex = businesses.findIndex(b => b.id === review.businessId);
  if (busIndex !== -1) {
    const busReviews = updatedReviews.filter(r => r.businessId === review.businessId);
    const avgRating = Number((busReviews.reduce((acc, curr) => acc + curr.rating, 0) / busReviews.length).toFixed(1));
    businesses[busIndex].reviewCount = busReviews.length;
    businesses[busIndex].rating = avgRating;
    saveBusinesses(businesses);
  }

  return newReview;
};

export const getSavedFavorites = (): string[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SAVED_FAVORITES);
    if (data) return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
  return [];
};

export const toggleFavorite = (businessId: string): string[] => {
  const current = getSavedFavorites();
  let updated: string[];
  if (current.includes(businessId)) {
    updated = current.filter(id => id !== businessId);
  } else {
    updated = [...current, businessId];
  }
  try {
    localStorage.setItem(STORAGE_KEYS.SAVED_FAVORITES, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
  return updated;
};

export const getStoredLeads = (): InquiryLead[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.LEADS);
    if (data) return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
  return [];
};

export const addInquiryLead = (lead: Omit<InquiryLead, 'id' | 'createdAt' | 'status'>): InquiryLead => {
  const leads = getStoredLeads();
  const newLead: InquiryLead = {
    ...lead,
    id: 'lead_' + Date.now(),
    createdAt: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }),
    status: 'new'
  };
  const updated = [newLead, ...leads];
  try {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }

  // Increment leads count on business
  const businesses = getStoredBusinesses();
  const busIndex = businesses.findIndex(b => b.id === lead.businessId);
  if (busIndex !== -1) {
    businesses[busIndex].leadsCount = (businesses[busIndex].leadsCount || 0) + 1;
    saveBusinesses(businesses);
  }

  return newLead;
};

export const recordWhatsAppClick = (businessId: string) => {
  const businesses = getStoredBusinesses();
  const idx = businesses.findIndex(b => b.id === businessId);
  if (idx !== -1) {
    businesses[idx].whatsappClicks = (businesses[idx].whatsappClicks || 0) + 1;
    saveBusinesses(businesses);
  }
};

export const recordProfileView = (businessId: string) => {
  const businesses = getStoredBusinesses();
  const idx = businesses.findIndex(b => b.id === businessId);
  if (idx !== -1) {
    businesses[idx].viewsCount = (businesses[idx].viewsCount || 0) + 1;
    saveBusinesses(businesses);
  }
};

export const addNewBusiness = (businessData: Omit<Business, 'id' | 'slug' | 'rating' | 'reviewCount' | 'viewsCount' | 'whatsappClicks' | 'leadsCount'>): Business => {
  const businesses = getStoredBusinesses();
  const slug = businessData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const newBusiness: Business = {
    ...businessData,
    id: 'b_' + Date.now(),
    slug: slug + '-' + Math.floor(Math.random() * 1000),
    rating: 5.0,
    reviewCount: 1,
    viewsCount: 12,
    whatsappClicks: 2,
    leadsCount: 1
  };
  const updated = [newBusiness, ...businesses];
  saveBusinesses(updated);
  return newBusiness;
};

export const getStoredJobs = (): LocalJob[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.JOBS);
    if (data) return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
  return SAMPLE_JOBS;
};

export const addJobListing = (job: Omit<LocalJob, 'id' | 'postedDate'>): LocalJob => {
  const jobs = getStoredJobs();
  const newJob: LocalJob = {
    ...job,
    id: 'job_' + Date.now(),
    postedDate: 'Today'
  };
  const updated = [newJob, ...jobs];
  try {
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(updated));
  } catch (err) {
    console.error(err);
  }
  return newJob;
};

export const getStoredEvents = (): LocalEvent[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EVENTS);
    if (data) return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
  return SAMPLE_EVENTS;
};
