import { Business, Category, LocalJob, LocalEvent } from '../types';
import { ALL_BUSINESSES } from './businesses';

export const VANIYAMBADI_AREAS = [
  'All Areas',
  'Tahsildar Office Road',
  'Khaderpet',
  'C.L. Road',
  'New Town',
  'Ambur Road',
  'Muslimpur',
  'Trunk Road',
  'Fort Area',
  'Mosque Street',
  'Valayampattu'
];

export interface CategoryGroup {
  id: string;
  name: string;
  description: string;
  categoryIds: string[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Electricians, plumbers, AC & home technicians, consultants, lawyers, and individual service experts.',
    categoryIds: ['electricians-plumbers', 'technicians', 'consultants', 'lawyers', 'ca', 'document-writers', 'professional-services']
  },
  {
    id: 'health-medical',
    name: 'Healthcare & Medicals',
    description: '24/7 pharmacies, doctors clinics, pediatricians, hospitals, and medical suppliers.',
    categoryIds: ['medicals', 'hospitals']
  },
  {
    id: 'public-esevai',
    name: 'Government Offices & e-Sevai',
    description: 'Tahsildar office, Taluk e-Sevai, Sub-Registrar, Court, and CSC digital centers.',
    categoryIds: ['esevai']
  },
  {
    id: 'groceries-shopping',
    name: 'Supermarkets & Groceries',
    description: 'Hypermarkets, fresh vegetable bazaars, dry fruits, and provision stores.',
    categoryIds: ['supermarkets']
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'professional-services',
    name: 'Professional Services',
    slug: 'professional-services',
    iconName: 'Wrench',
    description: 'Electricians, plumbers, AC & home appliance technicians, building consultants, lawyers, and skilled experts in Vaniyambadi.',
    popularSearchTerms: ['Electrician near me Vaniyambadi', 'Plumber Khaderpet', 'AC service technician Vaniyambadi', 'Civil consultant'],
    featuredCount: 84
  },
  {
    id: 'lawyers',
    name: 'Lawyers & Advocates',
    slug: 'lawyers',
    iconName: 'Scale',
    description: 'Civil law, property registration, criminal defense, sale deed assistance, and tax attorneys in Vaniyambadi.',
    popularSearchTerms: ['Best advocate in Vaniyambadi', 'Civil lawyer Khaderpet', 'Sale deed lawyer Vaniyambadi', 'Document writer lawyer'],
    featuredCount: 18
  },
  {
    id: 'hospitals',
    name: 'Hospitals & Doctors',
    slug: 'hospitals',
    iconName: 'Activity',
    description: '24/7 emergency care, multispecialty hospitals, pediatricians, dental clinics, and diagnostic labs.',
    popularSearchTerms: ['Hospital near C.L. Road', 'Dentist in New Town Vaniyambadi', '24/7 Emergency hospital Vaniyambadi'],
    featuredCount: 24
  },
  {
    id: 'restaurants',
    name: 'Biryani & Restaurants',
    slug: 'restaurants',
    iconName: 'Utensils',
    description: 'World-famous Vaniyambadi mutton biryani, authentic Mughlai cuisine, family dining, and sweets.',
    popularSearchTerms: ['Best Vaniyambadi Biryani', 'Family restaurant Ambur road', 'Mutton biryani near me Vaniyambadi'],
    featuredCount: 32
  },
  {
    id: 'leather',
    name: 'Leather & Tanneries',
    slug: 'leather',
    iconName: 'Briefcase',
    description: 'Finished leather, genuine leather jackets, footwear, belts, bags, and tannery chemical suppliers.',
    popularSearchTerms: ['Leather shoes Khaderpet', 'Leather jacket wholesale Vaniyambadi', 'Tannery suppliers Vaniyambadi'],
    featuredCount: 45
  },
  {
    id: 'ca',
    name: 'CA & Tax Consultants',
    slug: 'ca',
    iconName: 'FileText',
    description: 'Chartered accountants, GST registration, income tax filing, accounting services, and audit firms.',
    popularSearchTerms: ['GST consultant Vaniyambadi', 'Chartered Accountant C.L. Road', 'Tax filing helper Vaniyambadi'],
    featuredCount: 14
  },
  {
    id: 'document-writers',
    name: 'Document Writers',
    slug: 'document-writers',
    iconName: 'PenTool',
    description: 'Sub-registrar office assistants, land deed writers, power of attorney, stamp paper vendors, affidavit drafters.',
    popularSearchTerms: ['Document writer near Sub Registrar Office Vaniyambadi', 'Stamp paper vendor Khaderpet'],
    featuredCount: 12
  },
  {
    id: 'schools',
    name: 'Schools & Colleges',
    slug: 'schools',
    iconName: 'GraduationCap',
    description: 'State board, Matriculation, CBSE schools, Islamiah College, arts, science, and engineering institutes.',
    popularSearchTerms: ['Best CBSE school Vaniyambadi', 'Islamiah College admission', 'Matriculation school New Town'],
    featuredCount: 28
  },
  {
    id: 'textiles',
    name: 'Textiles & Sarees',
    slug: 'textiles',
    iconName: 'ShoppingBag',
    description: 'Silk sarees, ready-made dress materials, wedding wear, suiting, shirting, and abaya collections in Muslimpur.',
    popularSearchTerms: ['Silk saree shop Muslimpur Vaniyambadi', 'Ready-made clothes Khaderpet', 'Abaya shop Vaniyambadi'],
    featuredCount: 36
  },
  {
    id: 'electronics',
    name: 'Electronics & Mobiles',
    slug: 'electronics',
    iconName: 'Smartphone',
    description: 'Smartphone sales & repair, laptops, home appliances, AC dealers, and smart TV showrooms on C.L. Road.',
    popularSearchTerms: ['Mobile repair shop C.L. Road', 'AC dealer Vaniyambadi', 'Laptop service center New Town'],
    featuredCount: 22
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    slug: 'real-estate',
    iconName: 'Home',
    description: 'Residential plots, commercial shops for rent, independent houses, farmland, and building contractors.',
    popularSearchTerms: ['Shop for rent Khaderpet Vaniyambadi', 'House sale New Town Vaniyambadi', 'Plots for sale Trunk Road'],
    featuredCount: 19
  },
  {
    id: 'bike-car-service',
    name: 'Bike & Car Service',
    slug: 'bike-car-service',
    iconName: 'Wrench',
    description: 'Multi-brand car wash, wheel alignment, motorcycle mechanics, spare parts dealers, and roadside assistance.',
    popularSearchTerms: ['Bike mechanic Ambur road', 'Car water wash Vaniyambadi', 'Two wheeler service center'],
    featuredCount: 25
  },
  {
    id: 'gyms',
    name: 'Gyms & Fitness',
    slug: 'gyms',
    iconName: 'Dumbbell',
    description: 'Unisex fitness centers, bodybuilding gyms, cardio setups, personal trainers, and nutrition counseling.',
    popularSearchTerms: ['Gym near New Town Vaniyambadi', 'Unisex gym Vaniyambadi', 'Fitness trainer C.L. Road'],
    featuredCount: 10
  },
  {
    id: 'electricians-plumbers',
    name: 'Electricians & Plumbers',
    slug: 'electricians-plumbers',
    iconName: 'Zap',
    description: 'Licensed home electricians, pipe plumbers, motor rewinding, short circuit repair, and doorstep sanitary fittings.',
    popularSearchTerms: ['Electrician near me Vaniyambadi', 'Plumber Khaderpet', 'Motor rewinding Ambur road', 'Doorstep plumbing Vaniyambadi'],
    featuredCount: 34
  },
  {
    id: 'technicians',
    name: 'Appliance & AC Technicians',
    slug: 'technicians',
    iconName: 'Cpu',
    description: 'AC jet foam wash, gas refilling, washing machine, double door fridge, smart TV backlight repair, and inverter technicians.',
    popularSearchTerms: ['AC service technician Vaniyambadi', 'Washing machine repair New Town', 'TV repair C.L. Road', 'Inverter repair Vaniyambadi'],
    featuredCount: 29
  },
  {
    id: 'consultants',
    name: 'Consultants & Experts',
    slug: 'consultants',
    iconName: 'Briefcase',
    description: 'Civil engineering building plan consultants, overseas study & visa guidance, business ISO auditors, and IT/software consultants.',
    popularSearchTerms: ['DTCP building plan consultant Vaniyambadi', 'Visa consultant New Town', 'ISO consultant Vaniyambadi', 'Website designer Vaniyambadi'],
    featuredCount: 21
  },
  {
    id: 'supermarkets',
    name: 'Supermarkets & Groceries',
    slug: 'supermarkets',
    iconName: 'ShoppingCart',
    description: 'Fresh vegetables, organic staples, hypermarkets, monthly grocery packs, and home delivery.',
    popularSearchTerms: ['Supermarket in Vaniyambadi', 'Grocery store C.L. Road', 'Hypermarket Tahsildar office road', 'Home delivery grocery'],
    featuredCount: 26
  },
  {
    id: 'medicals',
    name: 'Medicals & Pharmacies',
    slug: 'medicals',
    iconName: 'Cross',
    description: '24/7 pharmacies, night medicals, pediatricians, gynecologists, surgical supplies, and doctor clinics near Tahsildar office.',
    popularSearchTerms: ['24 hours medicals Vaniyambadi', 'Pharmacy near Tahsildar office', 'Child specialist doctor Vaniyambadi', 'Gynecologist doctor clinic'],
    featuredCount: 38
  },
  {
    id: 'esevai',
    name: 'e-Sevai & Digital Services',
    slug: 'esevai',
    iconName: 'Globe',
    description: 'Government e-Sevai Maiyam at Taluk office, Patta Chitta, Community/Income certificate, Aadhaar/PAN, Passport, and CSC online center.',
    popularSearchTerms: ['e-Sevai maiyam Tahsildar office Vaniyambadi', 'Patta transfer online Vaniyambadi', 'CSC center New Town', 'PAN card apply Vaniyambadi'],
    featuredCount: 15
  },
  {
    id: 'hardwares',
    name: 'Hardwares, Sanitaryware & Paints',
    slug: 'hardwares',
    iconName: 'Hammer',
    description: 'Paints tinting store, power tools, Parryware sanitaryware, CPVC pipes, water tanks, and building hardwares near Taluk office.',
    popularSearchTerms: ['Hardware shop C.L. Road Vaniyambadi', 'Sanitaryware Tahsildar office road', 'Asian paints dealer Vaniyambadi', 'Water tank dealer'],
    featuredCount: 31
  }
];

export const SAMPLE_BUSINESSES: Business[] = ALL_BUSINESSES;

export const SAMPLE_REVIEWS = [
  {
    id: 'r1',
    businessId: 'b1',
    userName: 'K. Mohammed Farooq',
    rating: 5,
    comment: 'Advocate Ramesh sir cleared our land title issue in just 3 days. Very transparent legal advice and highly reasonable consultation charges. Best advocate in Vaniyambadi!',
    date: '2 weeks ago',
    verifiedCustomer: true,
    ownerReply: 'Thank you Farooq sahib. Delighted to serve your family with clear legal title verification.'
  },
  {
    id: 'r2',
    businessId: 'b1',
    userName: 'S. Vijaykumar',
    rating: 5,
    comment: 'Prepared our partition deed and sale draft for property near New Town. Handled everything smoothly at Sub Registrar office.',
    date: '1 month ago',
    verifiedCustomer: true
  },
  {
    id: 'r3',
    businessId: 'b2',
    userName: 'Arun Kumar',
    rating: 5,
    comment: 'Authentic Vaniyambadi biryani at its best! The mutton piece was so soft and Seeraga samba rice aroma is unforgettable. Must visit when coming to Vaniyambadi.',
    date: '3 days ago',
    verifiedCustomer: true
  },
  {
    id: 'r4',
    businessId: 'b3',
    userName: 'Imran Khan',
    rating: 5,
    comment: 'Bought a pair of genuine leather formal oxfords in Khaderpet shop. Superb stitch quality and comfortable sole at half the price of big showroom brands.',
    date: '5 days ago',
    verifiedCustomer: true
  }
];

export const SAMPLE_JOBS: LocalJob[] = [
  {
    id: 'j1',
    title: 'Accounts & GST Executive',
    companyName: 'Vani GST & Tax Consultancy',
    businessId: 'b4',
    location: 'C.L. Road, Vaniyambadi',
    jobType: 'Full-time',
    salaryRange: '₹15,000 - ₹22,000 / month',
    description: 'Looking for a candidate with Tally Prime / Zoho Books knowledge to handle monthly GST filing, customer invoicing, and bank reconciliation.',
    contactPhone: '+91 99524 88320',
    postedDate: 'Yesterday',
    category: 'Finance & Accounting'
  },
  {
    id: 'j2',
    title: 'Leather Goods Quality Checker',
    companyName: 'Khaderpet Leather Hub',
    businessId: 'b3',
    location: 'Khaderpet, Vaniyambadi',
    jobType: 'Full-time',
    salaryRange: '₹18,000 - ₹25,000 / month',
    description: 'Experience in checking finished sheepskin leather jackets, footwear stitching, and export packaging quality.',
    contactPhone: '+91 97890 12345',
    postedDate: '3 days ago',
    category: 'Leather Industry'
  },
  {
    id: 'j3',
    title: 'Staff Nurse (GNM / B.Sc)',
    companyName: 'Islamiah General Hospital',
    businessId: 'b5',
    location: 'New Town, Vaniyambadi',
    jobType: 'Urgent',
    salaryRange: '₹16,000 - ₹24,000 / month',
    description: 'Staff nurses for Ward & ICU duty. Shift rotation with night allowance and staff hostel facility.',
    contactPhone: '+91 04174 232100',
    postedDate: '4 days ago',
    category: 'Healthcare'
  }
];

export const SAMPLE_EVENTS: LocalEvent[] = [
  {
    id: 'e1',
    title: 'Vaniyambadi Mega Leather & Footwear Expo 2026',
    organizer: 'Vaniyambadi Leather Manufacturers Association',
    location: 'Trade Center Ground, Khaderpet, Vaniyambadi',
    date: 'Aug 20 - Aug 25, 2026',
    time: '10:00 AM - 9:00 PM',
    description: 'Direct factory discount up to 40% on genuine leather jackets, formal shoes, ladies boots, wallets, and travel bags. Free admission!',
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80',
    tag: 'Sale'
  },
  {
    id: 'e2',
    title: 'Free Cardiology & Diabetes Health Screening Camp',
    organizer: 'Vaniyambadi Islamiah General Hospital',
    location: 'Hospital Auditorium, New Town, Vaniyambadi',
    date: 'Aug 15, 2026',
    time: '8:00 AM - 2:00 PM',
    description: 'Free blood sugar test, ECG, doctor consultation, and guidance by senior cardiologists from Chennai.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80',
    tag: 'Medical'
  },
  {
    id: 'e3',
    title: 'Grand Admission Drive 2026-27',
    organizer: 'Islamiah College (Autonomous)',
    location: 'Campus Office, New Town',
    date: 'Ongoing till Aug 30',
    time: '9:00 AM - 4:00 PM',
    description: 'Applications open for B.Sc Data Science, B.Com Computer Applications, and M.Sc Bio-Chemistry.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
    tag: 'Education'
  }
];

export const SEO_KEYWORDS = [
  'Best advocate in Vaniyambadi',
  'Civil lawyer Khaderpet',
  'GST consultant Vaniyambadi',
  'Famous Star Biryani Vaniyambadi',
  'Leather shoes Khaderpet Vaniyambadi',
  'Hospital in New Town Vaniyambadi',
  'Document writer near Sub Registrar Vaniyambadi',
  'Shop for rent C.L. Road Vaniyambadi',
  'Mobile repair shop Vaniyambadi',
  'Islamiah College admission 2026',
  'Silk saree shop Muslimpur',
  'Car wash Ambur Road Vaniyambadi'
];
