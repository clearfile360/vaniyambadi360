import { Business } from '../../types';

export const HOSPITALS_BUSINESSES: Business[] = [
  {
    id: 'hosp-1',
    slug: 'islamiah-general-hospital',
    name: 'Vaniyambadi Islamiah General & Emergency Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Compassionate 24/7 Care with Modern ICU & Specialist Doctors',
    description: 'Serving Vaniyambadi for over 40 years with 24-hour emergency trauma care, general surgery, pediatrics, gynecology & obstetrics, cardiology OPD, dialysis unit, digital X-ray, ultrasound, and pharmacy.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1000&auto=format&fit=crop&q=80',
    address: 'Hospital Road, Near Islamiah College Campus, New Town',
    area: 'New Town',
    phone: '+91 04174 232100',
    whatsapp: '919443311200',
    email: 'contact@islamiahhospital.org',
    website: 'https://islamiahhospital.org',
    openingHours: 'Open 24 Hours (OPD: 9:00 AM - 1:00 PM & 5:00 PM - 8:30 PM)',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 128,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    specialties: ['24/7 Casualty & Emergency', 'Maternity & Childbirth', 'Laparoscopic Surgery', 'Dialysis Center'],
    services: [
      { name: '24/7 Emergency Casualty Care', description: 'Immediate doctor availability, trauma response, cardiac stabilization, and ambulance service.', priceEstimate: 'Nominal OPD' },
      { name: 'Maternity & Gynecology Delivery Care', description: 'Normal and C-section childbirth with experienced female gynecologists.', priceEstimate: 'Package available' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is Chief Minister’s Health Insurance Scheme (CMCHIS) accepted?', answer: 'Yes, we are empaneled under CMCHIS and private insurance cashless providers.' }
    ],
    googleMapQuery: 'Islamiah College, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 2980,
    whatsappClicks: 380,
    leadsCount: 145
  },
  {
    id: 'hosp-2',
    slug: 'government-hospital-vaniyambadi',
    name: 'Government Headquarters Hospital Vaniyambadi',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Government Healthcare Center with 24/7 Casualty, Maternity & Blood Bank',
    description: 'Key public healthcare institution in Vaniyambadi with 200+ beds, 24/7 casualty, maternity ward, pediatric care, blood bank, digital radiology, snakebite emergency treatment, and Chief Minister Health Scheme support.',
    logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    address: 'Jamath Road, near Bus Stand, Vaniyambadi',
    area: 'New Town',
    phone: '+91 04174 225244',
    whatsapp: '919445001234',
    email: 'ghvaniyambadi@gmail.com',
    openingHours: 'Open 24 Hours',
    openNowStatus: true,
    rating: 4.3,
    reviewCount: 95,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: true,
    specialties: ['24/7 Emergency Casualty', 'Maternity Ward', 'Blood Bank', 'Free Dialysis', 'CMCHIS Insurance'],
    services: [
      { name: '24/7 Free Casualty & Emergency', description: 'Immediate trauma treatment, emergency resuscitation, and 108 ambulance dispatch.', priceEstimate: 'Free' },
      { name: 'Maternity Delivery Care & Immunization', description: '24/7 labor room, neonatal care, and free infant vaccination.', priceEstimate: 'Free' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is 24-hour blood bank available?', answer: 'Yes, government blood bank operates round the clock.' }
    ],
    googleMapQuery: 'Jamath Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 2450,
    whatsappClicks: 210,
    leadsCount: 90
  },
  {
    id: 'hosp-3',
    slug: 'kafeel-emergency-care-azeem-hospital',
    name: 'Kafeel Emergency Care & Azeem Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Premier 24/7 Emergency, Cardiac & Trauma Care Unit',
    description: 'Modern multispecialty hospital located on PJN Road, Khaderpet. Equipped with 24/7 ventilator ICU, emergency trauma care, orthopedic surgery, general medicine, cardiac monitoring, and lab testing.',
    logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1000&auto=format&fit=crop&q=80',
    address: 'B.J. Nehru Road (PJN Road), Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 99442 38110',
    whatsapp: '919944238110',
    email: 'kafeelhospital.vnb@gmail.com',
    openingHours: 'Open 24 Hours',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 78,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    specialties: ['Ventilator ICU', 'Trauma & Fracture Surgery', 'General Medicine OPD', 'Diabetic Foot Care'],
    services: [
      { name: 'ICU Critical Care & Ventilator', description: 'Advanced patient monitors, central oxygen line, and dedicated critical care doctors.', priceEstimate: 'Hospital Tariff' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is ambulance service available for emergency patients?', answer: 'Yes, call 99442 38110 for quick ICU ambulance pickup.' }
    ],
    googleMapQuery: 'PJN Road, Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 1850,
    whatsappClicks: 310,
    leadsCount: 88
  },
  {
    id: 'hosp-4',
    slug: 'ikram-hospital-vaniyambadi',
    name: 'Ikram Hospital & Diagnostic Center',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'General Medicine, Pediatrics & Diagnostic Radiology Specialist',
    description: 'Located in Neelfield, Vaniyambadi. Renowned for general physician consultations, child health OPD, maternity care, full computerized lab testing, ultrasound scanning, and pharmacy.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1000&auto=format&fit=crop&q=80',
    address: '147, Mandi Dadamiyan Street, Neelfield, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94433 86681',
    whatsapp: '919443386681',
    email: 'ikramhospital@gmail.com',
    openingHours: 'Mon - Sun: 8:00 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 64,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Pediatrics & Child Care', 'Diabetic & Hypertension OPD', 'Ultrasound Scan'],
    services: [
      { name: 'Pediatric Child Doctor OPD', description: 'Routine checkups, growth monitoring, fever treatment, and pediatric vaccination.', priceEstimate: '₹250 OPD' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Are blood tests done on-site?', answer: 'Yes, full automated lab with same-day digital test reports.' }
    ],
    googleMapQuery: 'Neelfield, Vaniyambadi, Tamil Nadu',
    viewsCount: 1420,
    whatsappClicks: 210,
    leadsCount: 52
  },
  {
    id: 'hosp-5',
    slug: 'david-multispeciality-hospital',
    name: 'David Multispeciality Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Orthopedic Joint Replacement, Urology & General Surgery',
    description: 'Opposite Khaderpet Masjid on Railway Station Road. Specializing in advanced orthopedic joint replacement, arthroscopy, urology, kidney stone laser surgery, laparoscopic hernia repair, and 24/7 casualty.',
    logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    address: 'Opposite Khaderpet Masjid, Railway Station Road, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94432 11980',
    whatsapp: '919443211980',
    email: 'davidhospital.vnb@gmail.com',
    openingHours: 'Open 24 Hours',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 71,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: false,
    specialties: ['Orthopedics & Fractures', 'Laser Kidney Stone Surgery', 'Laparoscopic Surgery'],
    services: [
      { name: 'Orthopedic Fracture & Joint Surgery', description: 'Advanced C-arm guided bone fracture fixation and knee replacement.', priceEstimate: 'Package' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is laser stone surgery available without big incision?', answer: 'Yes, minimally invasive laser lithotripsy is conducted by consultant urologists.' }
    ],
    googleMapQuery: 'Railway Station Road, Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 1650,
    whatsappClicks: 290,
    leadsCount: 74
  },
  {
    id: 'hosp-6',
    slug: 'vijaya-ortho-care-hospital',
    name: 'Vijaya Ortho Care & Bone Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Bone Joint Specialist, Spine Care & Trauma Surgery',
    description: 'Dedicated orthopedic and trauma center on Jamath Road, Noorullahpet. Specializing in complex bone fracture surgeries, back pain spine therapy, arthritis care, and physiotherapy rehabilitation.',
    logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1000&auto=format&fit=crop&q=80',
    address: '283/20, Jamath Road, Noorullahpet, Vaniyambadi',
    area: 'New Town',
    phone: '+91 90036 22638',
    whatsapp: '919003622638',
    email: 'vijayaorthocare@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 52,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Bone Fracture Surgery', 'Spine & Joint Pain', 'Physiotherapy Unit'],
    services: [
      { name: 'Bone & Joint Specialist Consultation', description: 'X-ray evaluation, fracture casting, and arthritis management.', priceEstimate: '₹300 Consultation' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is physiotherapy center attached?', answer: 'Yes, full physical rehab equipment and qualified physiotherapist on duty.' }
    ],
    googleMapQuery: 'Jamath Road, Noorullahpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 1210,
    whatsappClicks: 195,
    leadsCount: 48
  },
  {
    id: 'hosp-7',
    slug: 'sadha-hospital-bypass-road',
    name: 'Sadha Multispeciality Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'State-of-the-art Surgery, Emergency & ICU on Bypass Road',
    description: 'Modern hospital campus located on New Town Bypass Road. Offering 24/7 trauma emergency, general lap surgery, neurology consultations, ENT OPD, and 24-hour ambulance.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1000&auto=format&fit=crop&q=80',
    address: 'Bypass Road, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 99942 14888',
    whatsapp: '919994214888',
    email: 'sadhahospital@gmail.com',
    openingHours: 'Open 24 Hours',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 49,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['General & Laparoscopic Surgery', 'Neurology OPD', '24/7 Casualty'],
    services: [
      { name: 'General Physician & Surgery OPD', description: 'Comprehensive diagnostic consultations and minor surgical procedures.', priceEstimate: '₹300 OPD' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Where is Sadha Hospital located?', answer: 'Directly on New Town Bypass Road with spacious car parking facility.' }
    ],
    googleMapQuery: 'Bypass Road, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1150,
    whatsappClicks: 180,
    leadsCount: 42
  },
  {
    id: 'hosp-8',
    slug: 'ar-rahman-hospital-khaderpet',
    name: 'Ar-Rahman Hospital & Nursing Care',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Quality General Medicine, Gynecology & Affordable Care',
    description: 'Serving Khaderpet community with general medicine, high-risk pregnancy maternity care, female gynecologist OPD, pediatric vaccinations, and lab diagnostics.',
    logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    address: 'Hameenabad, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94432 99010',
    whatsapp: '919443299010',
    email: 'arrahmanhospital.vnb@gmail.com',
    openingHours: 'Mon - Sun: 8:30 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 38,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Gynecology & Maternity', 'Pediatric Care', 'General Medicine'],
    services: [
      { name: 'Maternity Checkup & Ultrasound', description: 'Antenatal care packages, Doppler scan, and female doctor consultations.', priceEstimate: 'Affordable' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Are lady doctors available for female consultation?', answer: 'Yes, experienced senior lady doctors are available for OPD every day.' }
    ],
    googleMapQuery: 'Hameenabad, Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 980,
    whatsappClicks: 160,
    leadsCount: 35
  },
  {
    id: 'hosp-9',
    slug: 'dr-vasantha-hospital',
    name: 'Dr. Vasantha Hospital & Maternity Home',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Trusted Women’s Health, Childbirth & Infertility Care',
    description: 'Established over 25 years ago on PJN Road. Highly trusted maternity home for normal delivery, C-section delivery, infertility counseling, and women health care.',
    logo: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1000&auto=format&fit=crop&q=80',
    address: '4/1, B.J. Nehru Road (PJN Road), Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 99527 78962',
    whatsapp: '919952778962',
    email: 'drvasanthahospital@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 62,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Maternity Delivery', 'Infertility Treatment', 'PCOS Management'],
    services: [
      { name: 'Maternity Normal Delivery Package', description: 'Safe, hygienic delivery under guidance of senior obstetricians.', priceEstimate: 'Package' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is prior booking required for pregnancy OPD?', answer: 'Walk-ins welcomed, or call 99527 78962 to book token.' }
    ],
    googleMapQuery: 'PJN Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1350,
    whatsappClicks: 240,
    leadsCount: 58
  },
  {
    id: 'hosp-10',
    slug: 'malar-multispeciality-hospital',
    name: 'Malar Multispeciality Hospital',
    category: 'Hospitals & Doctors',
    categoryId: 'hospitals',
    tagline: 'Multi-Specialty Care Near New Town Bus Stand',
    description: 'Conveniently situated on C.N. Annadurai Road near Vaniyambadi New Town Bus Stand. Comprehensive healthcare with cardiology, gastroenterology, skin disease OPD, and blood lab.',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1000&auto=format&fit=crop&q=80',
    address: 'Ground Floor, C.N. Annadurai Road, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 94432 77110',
    whatsapp: '919443277110',
    email: 'malarhospital.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 44,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Cardiology OPD', 'Dermatology & Skin Care', 'General Medicine'],
    services: [
      { name: 'Full Body Health Screening', description: 'Includes ECG, Lipid Profile, Sugar, Liver & Kidney Function Tests.', priceEstimate: '₹990' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Where is Malar Hospital in New Town?', answer: 'Just 100 meters from New Town Bus Stand on C.N. Annadurai Road.' }
    ],
    googleMapQuery: 'CN Annadurai Road, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1080,
    whatsappClicks: 190,
    leadsCount: 40
  }
];
