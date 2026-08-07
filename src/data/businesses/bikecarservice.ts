import { Business } from '../../types';

export const BIKE_CAR_SERVICE_BUSINESSES: Business[] = [
  {
    id: 'auto-1',
    slug: 'express-car-care-and-water-wash',
    name: 'Express Car Care, Foam Water Wash & Wheel Balancing',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Automatic Underbody Water Wash, Foam Cleaning, Wheel Alignment & AC Service',
    description: 'Vaniyambadi’s premier multi-brand car service station on C.L. Road. Equipped with hydraulic ramp for 360-degree underbody chassis water wash, snow foam wash, computer 3D wheel alignment, synthetic engine oil change, and ceramic coating.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: '102, C.L. Road, Near New Town Signal, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98425 88900',
    whatsapp: '919842588900',
    email: 'expresscarwash.vnb@gmail.com',
    openingHours: 'Mon - Sun: 8:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 145,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    specialties: ['Underbody Hydraulic Foam Wash', '3D Wheel Alignment & Balancing', 'Full Synthetic Oil Change', 'Car AC Gas Refill'],
    services: [
      { name: 'Full Body Foam Wash & Vacuum Cleaning', description: 'Snow foam body wash, underbody high pressure wash, interior vacuuming & dashboard polish.', priceEstimate: '₹450' },
      { name: 'Periodic Engine Oil Maintenance Service', description: 'Engine oil replacement, oil filter, air filter cleaning & 25-point inspection.', priceEstimate: '₹2,200' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'How much time does full car water wash and interior cleaning take?', answer: 'Takes approximately 45 minutes with our hydraulic ramp system.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 2600,
    whatsappClicks: 490,
    leadsCount: 110
  },
  {
    id: 'auto-2',
    slug: 'star-royal-enfield-and-bullet-mechanic',
    name: 'Star Royal Enfield & Bullet Specialist Garage',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Classic 350, Hunter, Meteor Engine Overhaul & Custom Accessories',
    description: 'Expert Royal Enfield mechanic shop in Khaderpet serving Bullet enthusiasts for 18 years. Specialized in engine noise troubleshooting, clutch plate replacement, custom exhaust, silencer installation, and ceramic polish.',
    logo: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: '28, Khaderpet Station Road, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 97891 22400',
    whatsapp: '919789122400',
    email: 'bulletstar.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 112,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    specialties: ['Royal Enfield Engine Rebuild', 'Custom Exhaust Fitting', 'Disc Brake Service'],
    services: [
      { name: 'Royal Enfield Full General Service', description: 'Liquid Gun engine oil replacement, spark plug cleaning, chain lube & brake adjustment.', priceEstimate: '₹850' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you tune BS6 Royal Enfield EFI fuel injectors?', answer: 'Yes, computer scanner diagnosis available for all BS6 RE models.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 2100,
    whatsappClicks: 380,
    leadsCount: 85
  },
  {
    id: 'auto-3',
    slug: 'maruti-suzuki-and-hyundai-car-mechanic',
    name: 'National Multi-Brand Car Repair & Tinkering Works',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Body Tinkering, Paint Booth Touchup, Clutch Work & Suspension Overhaul',
    description: 'Full-service automobile workshop in New Town. Specializing in Maruti Suzuki, Hyundai, Tata, and Mahindra cars with computer scanner fault diagnosis, body dent repair, baked paint booth painting, and suspension bush replacement.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Sub-Registrar Office, Court Road, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 94432 99400',
    whatsapp: '919443299400',
    email: 'nationalcarcare.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 88,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Car Body Denting & Painting', 'Clutch Plate Overhaul', 'OBD Scanner Fault Diagnosis'],
    services: [
      { name: 'Computer OBD Fault Code Scan', description: 'Detect check engine light warnings, sensor errors & clear fault codes.', priceEstimate: '₹400' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you handle insurance claim tinkers and accident repairs?', answer: 'Yes, insurance claim estimation and cashless facility guidance available.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1750,
    whatsappClicks: 290,
    leadsCount: 68
  },
  {
    id: 'auto-4',
    slug: 'two-wheeler-multi-brand-service-center',
    name: 'New Town Two-Wheeler Multi-Brand Service Station',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Honda Activa, TVS Jupiter, Hero Splendor Engine Service & Water Wash',
    description: 'Fast two-wheeler service center for scooters and motorcycles. Engine oil change, carburetor/FI cleaning, drum/disc brake shoe change, puncture repair, and tubeless tyre replacement.',
    logo: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Near New Town Bus Stand, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98942 33100',
    whatsapp: '919894233100',
    email: 'newtownbikeservice@gmail.com',
    openingHours: 'Mon - Sat: 8:30 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 74,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Honda Activa Scooter Service', 'Hero Honda Engine Tuneup', 'Tubeless Tyre Puncture'],
    services: [
      { name: 'Scooter / Bike Full Water Wash & Oil Service', description: 'Castrol 20W40 oil change, spark plug cleanup, cable oiling & foam wash.', priceEstimate: '₹450' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'How long does scooter general service take?', answer: 'Express service completed within 1 hour.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1520,
    whatsappClicks: 250,
    leadsCount: 58
  },
  {
    id: 'auto-5',
    slug: 'ceat-and-michelin-tyre-showroom-vaniyambadi',
    name: 'Vani Tyre Care - CEAT, MRF & Michelin Tubeless Store',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Car & Bike Tubeless Tyres, Alloy Wheels & Nitrogen Air Fill',
    description: 'Authorized tyre dealer on C.L. Road stocking MRF, CEAT, Apollo, Michelin, and Bridgestone tubeless tyres for all cars, SUVs, and motorcycles. Computerized wheel balancing and nitrogen inflation.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: '68, C.L. Road, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98425 11900',
    whatsapp: '919842511900',
    email: 'vanityrecare@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 65,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Car Tubeless Tyres', 'Computer Wheel Balancing', 'Nitrogen Air Station'],
    services: [
      { name: '4-Wheel Alignment & Balancing Package', description: '3D laser wheel alignment + 4 wheel balancing with counterweights.', priceEstimate: '₹600' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is company unconditional warranty included for tyres?', answer: 'Yes, full manufacturer registration for unconditional warranty against cuts.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1390,
    whatsappClicks: 230,
    leadsCount: 52
  },
  {
    id: 'auto-6',
    slug: 'exide-and-amaron-car-battery-hub',
    name: 'Amaron & Exide Auto Battery Center',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Zero Maintenance Car & Bike Batteries, Jumpstart Service & Old Battery Exchange',
    description: 'Authorized Amaron Pitstop and Exide battery station on Trunk Road. Emergency doorstep car battery jumpstart, battery health testing, alternator charging check, and old battery exchange.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: '32, Trunk Road, Near Old Bus Stand, Vaniyambadi',
    area: 'Trunk Road',
    phone: '+91 97890 22100',
    whatsapp: '919789022100',
    email: 'amaron.vnb@gmail.com',
    openingHours: 'Mon - Sat: 8:30 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 58,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Amaron Hi-Way Car Battery', 'Exide Bike Battery', 'Doorstep Battery Jumpstart'],
    services: [
      { name: 'Car Battery Replacement with Old Exchange', description: 'Amaron FLO 55-month warranty battery installation.', priceEstimate: '₹4,200 (After Old Exchange)' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you come to home for dead battery jumpstart in Vaniyambadi?', answer: 'Yes, emergency technician visits within 20 minutes across Vaniyambadi town.' }
    ],
    googleMapQuery: 'Trunk Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1250,
    whatsappClicks: 210,
    leadsCount: 48
  },
  {
    id: 'auto-7',
    slug: 'ktm-and-yamaha-r15-performance-garage',
    name: 'High performance Bike Garage (Yamaha / KTM / TVS Apache)',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Yamaha R15, KTM Duke 200/390, TVS Apache Engine Tuning & Chain Clean',
    description: 'Specialist performance bike garage in Khaderpet catering to Yamaha R15/MT15, KTM Duke, and TVS Apache riders. Motul full synthetic oil, sprocket replacement, and brake pad upgrades.',
    logo: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Railway Station Road, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94433 11800',
    whatsapp: '919443311800',
    email: 'performancebikes.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:30 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 62,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Yamaha R15 Engine Service', 'Motul 300V Synthetic Oil', 'Brass Chain & Sprocket Fitment'],
    services: [
      { name: 'KTM / Yamaha Full Synthetic Service', description: 'Motul 7100 synthetic oil, coolant flush, chain lube & brake overhaul.', priceEstimate: '₹1,250' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is Motul 300V factory line oil available in stock?', answer: 'Yes, original sealed Motul synthetic oils in stock.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 1410,
    whatsappClicks: 260,
    leadsCount: 59
  },
  {
    id: 'auto-8',
    slug: 'auto-electrical-and-ac-works-vaniyambadi',
    name: 'New Town Auto Electricals & Car AC Gas Leak Specialist',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Car AC Cooling Coil Replacement, Self Starter Repair & LED Headlight Upgrade',
    description: 'Auto electrical and AC technician in New Town. Specializing in car AC gas leak detection, cooling coil replacement, alternator wiring, self starter motor repair, and LED projector headlight installation.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Government Hospital Gate, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98942 11800',
    whatsapp: '919894211800',
    email: 'autoelectric.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 48,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Car AC Gas Leak Detection', 'Self Starter Repair', 'LED Headlight Upgrade'],
    services: [
      { name: 'Car AC Vacuum & R134a Gas Refill', description: 'Vacuum pressure test, compressor oil refill & R134a gas charging.', priceEstimate: '₹1,200' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Why is my car AC blowing warm air?', answer: 'Common causes are refrigerant gas leak, blown fuse, or compressor clutch issue.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1180,
    whatsappClicks: 195,
    leadsCount: 45
  },
  {
    id: 'auto-9',
    slug: 'valayampattu-heavy-vehicle-mechanic',
    name: 'Valayampattu Commercial Lorry & Auto Workshop',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: 'Tannery Goods Lorry Engine Repair, Diesel Injector Service & Auto Rickshaw',
    description: 'Commercial diesel engine workshop in Valayampattu industrial area. Servicing Ashok Leyland lorries, Tata Ace, Mahindra Bolero pickup vans, and Bajaj auto rickshaws.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Tannery Road, Valayampattu, Vaniyambadi',
    area: 'Valayampattu',
    phone: '+91 94432 44100',
    whatsapp: '919443244100',
    email: 'valayampattumotors@gmail.com',
    openingHours: 'Mon - Sat: 8:00 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 38,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Tata Ace & Bolero Pickup Service', 'Diesel Fuel Injector Calibration', 'Lorry Leaf Spring Repair'],
    services: [
      { name: 'Commercial Vehicle Engine Oil & Filter Change', description: 'Heavy diesel engine oil service for pickup trucks.', priceEstimate: '₹2,800' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you carry out emergency breakdown road service for lorries?', answer: 'Yes, breakdown mechanic team available within 15 km radius.' }
    ],
    googleMapQuery: 'Valayampattu, Vaniyambadi, Tamil Nadu',
    viewsCount: 920,
    whatsappClicks: 145,
    leadsCount: 32
  },
  {
    id: 'auto-10',
    slug: 'car-accessories-and-android-system-vaniyambadi',
    name: 'Car Studio - Android Touchscreen, Seat Covers & Detailing',
    category: 'Bike & Car Service',
    categoryId: 'bike-car-service',
    tagline: '9-inch Android Stereo Systems, PU Leather Seat Covers & Ambient Lighting',
    description: 'Modern car customization and accessories studio on C.L. Road. Offering 9/10-inch Android touchscreen music systems, rear reverse cameras, custom bucket seat covers, 7D floor mats, and interior ambient lighting.',
    logo: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Bus Stand Commercial Complex, C.L. Road, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98425 99100',
    whatsapp: '919842599100',
    email: 'carstudio.vnb@gmail.com',
    openingHours: 'Mon - Sun: 9:30 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 76,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Android Touchscreen Stereo', 'PU Leather Bucket Seat Covers', '7D Floor Mats'],
    services: [
      { name: '9-Inch IPS Android Touchscreen System', description: '2GB RAM / 32GB ROM Android player with Apple CarPlay & AHD reverse camera.', priceEstimate: '₹6,500' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Will installing Android system void car original warranty?', answer: 'No, installation done using OEM coupler-to-coupler wiring without cutting original wires.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1680,
    whatsappClicks: 310,
    leadsCount: 72
  }
];
