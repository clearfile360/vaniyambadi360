export type PlanTier = 'free' | 'premium' | 'pro' | 'elite';

export interface BusinessReview {
  id: string;
  businessId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verifiedCustomer?: boolean;
  ownerReply?: string;
}

export interface BusinessService {
  name: string;
  description: string;
  priceEstimate?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  logo: string;
  coverImage: string;
  address: string;
  area: string; // e.g. Khaderpet, C.L. Road, New Town, Ambur Road, Muslimpur
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  openingHours: string;
  openNowStatus: boolean;
  rating: number;
  reviewCount: number;
  verified: boolean;
  claimed: boolean;
  planTier: PlanTier; // free, premium, pro, elite
  featured?: boolean;
  isElite?: boolean;
  trustScore?: number; // e.g. 98% rating
  
  // Specific details
  services: BusinessService[];
  gallery: string[];
  faqs: FAQItem[];
  googleMapQuery: string;
  latLng?: { lat: number; lng: number };
  
  // Extra profile fields for Pro mini-websites
  customDomain?: string;
  appointmentEnabled?: boolean;
  consultationFee?: string;
  establishedYear?: number;
  specialties?: string[];
  
  // Quick stats
  viewsCount?: number;
  whatsappClicks?: number;
  leadsCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  popularSearchTerms: string[];
  featuredCount: number;
}

export interface InquiryLead {
  id: string;
  businessId: string;
  businessName: string;
  userName: string;
  userPhone: string;
  userEmail?: string;
  message: string;
  serviceRequested?: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'closed';
}

export interface LocalJob {
  id: string;
  title: string;
  companyName: string;
  businessId?: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Urgent';
  salaryRange: string;
  description: string;
  contactPhone: string;
  postedDate: string;
  category: string;
}

export interface LocalEvent {
  id: string;
  title: string;
  organizer: string;
  businessId?: string;
  location: string;
  date: string;
  time: string;
  description: string;
  image: string;
  tag: 'Sale' | 'Medical' | 'Community' | 'Education' | 'Culture';
}

export interface FilterState {
  searchQuery: string;
  category: string;
  area: string;
  minRating: number;
  openNowOnly: boolean;
  verifiedOnly: boolean;
  tier: 'all' | 'premium' | 'pro' | 'elite';
  sortBy: 'rating' | 'reviews' | 'featured' | 'newest' | 'distance';
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
