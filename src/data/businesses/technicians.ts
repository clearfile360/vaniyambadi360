import { Business } from '../../types';

export const TECHNICIANS_BUSINESSES: Business[] = [
  {
    id: 'tech-1',
    slug: 'coolcare-ac-service-and-gas-refilling',
    name: 'CoolCare AC Service & Gas Refilling Technician',
    category: 'Appliance & AC Technicians',
    categoryId: 'technicians',
    tagline: 'Doorstep Inverter Split & Window AC Installation, Foam Wash & Freon Gas Top-up',
    description: 'Specialist AC technician in Vaniyambadi with 12+ years experience servicing Samsung, LG, Daikin, Voltas, Lloyd, and Blue Star air conditioners. Experts in jet-pump wet wash, PCB board repair, copper pipe brazing, R32/R410 gas refilling, and compressor replacement.',
    logo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80',
    address: '45, C.L. Road, Opp. Bharat Petroleum, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98428 77611',
    whatsapp: '919842877611',
    email: 'coolcare.ac.vnb@gmail.com',
    openingHours: 'Mon - Sun: 8:00 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 88,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    consultationFee: '₹250 / Inspection & Diagnosis Charge',
    establishedYear: 2012,
    specialties: ['Jet Pump AC Foam Wash', 'Inverter AC Gas Charging', 'AC Dismantling & Fitting', 'PCB Board Repair', 'Leakage Testing & Copper Brazing'],
    services: [
      { name: 'High Pressure Jet Pump AC Wet Wash', description: 'Deep cleaning indoor cooling coil, blower, filter, and outdoor condenser with anti-bacterial foam.', priceEstimate: '₹499' },
      { name: 'R32 / R410A Eco Gas Refilling', description: 'Complete vacuuming, pressure test, and full eco refrigerant charging.', priceEstimate: '₹1,600' },
      { name: 'Split AC Uninstallation & Reinstallation', description: 'Safely pumping down refrigerant gas, bracket mounting, and copper piping setup.', priceEstimate: '₹1,200' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Why is my AC not cooling properly?', answer: 'Common causes include dirty filters, dust on cooling coils, low gas pressure due to micro leaks, or a faulty compressor capacitor. Our technician will inspect and explain on-site.' },
      { question: 'Do you provide doorstep AC service in Muslimpur and Valayampattu?', answer: 'Yes, we cover all areas of Vaniyambadi including Muslimpur, Valayampattu, Khaderpet, and New Town.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 2450,
    whatsappClicks: 620,
    leadsCount: 135
  },
  {
    id: 'tech-2',
    slug: 'master-home-appliance-repair-technician',
    name: 'Master Washing Machine & Refrigerator Repair',
    category: 'Appliance & AC Technicians',
    categoryId: 'technicians',
    tagline: 'Expert Technician for Front Load, Top Load, Double Door Fridge & Microwave',
    description: 'Certified doorstep repair technician for all major brands including IFB, Whirlpool, Bosch, Samsung, LG, and Godrej. Specializing in washing machine drum noise, spin error, water drain pump failure, fridge cooling loss, thermostat repair, and inverter compressor setup.',
    logo: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1000&auto=format&fit=crop&q=80',
    address: 'Shop 8, New Town Bazaar Street, Vaniyambadi',
    area: 'New Town',
    phone: '+91 97871 44320',
    whatsapp: '919787144320',
    email: 'masterappliances.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 46,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    consultationFee: '₹200 / Visiting Charge',
    establishedYear: 2014,
    specialties: ['Front Load Washing Machine', 'Double Door Refrigerator', 'Inverter Board Repair', 'Drain Pump & Motor Change', 'Defrost Sensor Fix'],
    services: [
      { name: 'Washing Machine Drum & Motor Repair', description: 'Bearing replacement, spider arm change, belt tensioning, and noise elimination.', priceEstimate: '₹650 onwards' },
      { name: 'Refrigerator Gas Leakage & Charging', description: 'Condenser coil repair, capillary tube flushing, and genuine gas refilling.', priceEstimate: '₹1,400' },
      { name: 'Microwave Oven Magnetron Repair', description: 'Fixing non-heating issues, spark in cavity, and touch panel keypad repair.', priceEstimate: '₹450' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you use original spare parts?', answer: 'Yes, we fit 100% genuine brand factory spares with a 90-day service warranty.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1680,
    whatsappClicks: 390,
    leadsCount: 84
  },
  {
    id: 'tech-3',
    slug: 'premier-led-tv-and-audio-repair-technician',
    name: 'Premier Smart LED TV & Audio Repair Technician',
    category: 'Appliance & AC Technicians',
    categoryId: 'technicians',
    tagline: 'Chip-Level LED TV Backlight Repair, Display Panel Bond & Motherboard Fix',
    description: 'Expert chip-level electronics technician in Vaniyambadi. Specializing in Sony Bravia, Samsung, LG, Mi, OnePlus 4K Smart TV repairs. Fixes sound but no picture (backlight failure), vertical lines on screen, Android boot loop, HDMI port failure, and power supply repairs.',
    logo: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1000&auto=format&fit=crop&q=80',
    address: '102, Trunk Road, Near Government Hospital, Vaniyambadi',
    area: 'Trunk Road',
    phone: '+91 94436 22091',
    whatsapp: '919443622091',
    email: 'premiertv.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:30 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 39,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: false,
    specialties: ['LED TV Backlight Replacement', 'Smart TV Motherboard Repair', 'Display Bonding & COF Repair', 'Home Theatre Audio Fix', 'Power Board Repair'],
    services: [
      { name: 'LED TV Backlight Strips Replacement', description: 'Complete set aluminum backlight strip replacement for uniform brightness.', priceEstimate: '₹950 onwards' },
      { name: 'Smart TV Main Board Chip Repair', description: 'Resolving red light blinking, Android hanging logo, and software re-flashing.', priceEstimate: '₹800' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What if my TV display panel glass is cracked?', answer: 'Broken outer display panel glass replacement is usually expensive; we will inspect and provide an honest cost vs replacement guidance.' }
    ],
    googleMapQuery: 'Trunk Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1390,
    whatsappClicks: 280,
    leadsCount: 62
  },
  {
    id: 'tech-4',
    slug: 'vani-inverter-ups-and-battery-specialist',
    name: 'Vani Inverter, UPS & Solar Battery Technician',
    category: 'Appliance & AC Technicians',
    categoryId: 'technicians',
    tagline: 'Inverter Board Repair, Tubular Battery Water Top-up & Solar System Fitting',
    description: 'Local expert technician for Microtek, Luminous, Exide, V-Guard, and Su-Kam inverters. Offering doorstep battery distilled water top-up, battery health testing, inverter card repair, solar panel wiring, and emergency backup troubleshooting.',
    logo: 'https://images.unsplash.com/photo-1548611716-300185989264?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1548611716-300185989264?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Railway Station Road, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98947 51100',
    whatsapp: '919894751100',
    email: 'vaniinverter.vnb@gmail.com',
    openingHours: 'Mon - Sun: 8:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 42,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Inverter Board Repair', 'Tubular Battery Service', 'Solar Hybrid Inverter Installation', 'Battery Health Checkup', 'Doorstep Water Top-up'],
    services: [
      { name: 'Inverter MOSFET Card & Transformer Repair', description: 'Fixing battery non-charging, overload warning beep, and output voltage drop.', priceEstimate: '₹450' },
      { name: 'Doorstep Battery Maintenance & Acid Check', description: 'Distilled water filling, terminal cleaning, and gravity check for battery longevity.', priceEstimate: '₹250' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1548611716-300185989264?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Why is my inverter making a continuous beeping sound?', answer: 'A continuous beep often signals low battery voltage, overload, or a blown internal fuse. Call us for quick diagnosis.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1250,
    whatsappClicks: 260,
    leadsCount: 54
  }
];
