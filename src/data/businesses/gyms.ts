import { Business } from '../../types';

export const GYMS_BUSINESSES: Business[] = [
  {
    id: 'gym-1',
    slug: 'power-flex-fitness-gym-vaniyambadi',
    name: 'PowerFlex Unisex Fitness Gym & CrossFit Studio',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Modern AC Gym, Imported Jerai Strength Equipment & Certified Personal Trainers',
    description: 'Vaniyambadi’s premier air-conditioned fitness center on C.L. Road. Featuring imported Jerai Fitness strength machines, Olympic weightlifting platforms, commercial treadmills, CrossFit functional zone, steam bath, and certified personal trainers.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Floor 2, Royal Complex, C.L. Road, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98425 33900',
    whatsapp: '919842533900',
    email: 'powerflexgym.vnb@gmail.com',
    openingHours: 'Mon - Sat: 5:00 AM - 10:00 PM | Sun: 6:00 AM - 12:00 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 158,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    specialties: ['Bodybuilding Strength Training', 'Weight Loss Fat Burn', 'Exclusive Ladies Timings', 'Steam Bath & Diet Plan'],
    services: [
      { name: 'Monthly General Gym Membership', description: 'Full access to cardio zone, weight training, locker room & trainer guidance.', priceEstimate: '₹1,200/mo' },
      { name: 'Personalized Weight Loss Transformation (3 Months)', description: 'Dedicated personal trainer with customized macro meal plan.', priceEstimate: '₹6,000' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is there a separate exclusive timing batch for women?', answer: 'Yes! Dedicated ladies batch from 10:30 AM to 1:00 PM with female fitness instructor.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 2900,
    whatsappClicks: 520,
    leadsCount: 128
  },
  {
    id: 'gym-2',
    slug: 'iron-paradise-gym-khaderpet',
    name: 'Iron Paradise Bodybuilding & Powerlifting Club',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Hardcore Heavy Weightlifting, Dumbbells up to 50kg & Body Transformation',
    description: 'Popular hardcore weightlifting gym in Khaderpet. Fully equipped with heavy dumbbells up to 50kg, squat racks, bench press, deadlift platforms, and competition bodybuilders coaching.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: '42, Railway Station Road, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 97891 11200',
    whatsapp: '919789111200',
    email: 'ironparadisegym@gmail.com',
    openingHours: 'Mon - Sat: 5:30 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 124,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    specialties: ['Powerlifting Bench & Squat', 'Heavy Weightlifting', 'District Competition Prep'],
    services: [
      { name: 'Monthly Gym Membership', description: 'Access to all free weights and plate-loaded machines.', priceEstimate: '₹800/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you prepare athletes for Mr. Tamil Nadu bodybuilding contests?', answer: 'Yes, experienced state champion coach guides posing, nutrition & contest prep.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 2350,
    whatsappClicks: 410,
    leadsCount: 95
  },
  {
    id: 'gym-3',
    slug: 'she-fit-ladies-only-fitness-and-aerobics',
    name: 'SheFit Exclusive Ladies Fitness & Aerobics Studio',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: '100% Women-Only Privacy, Aerobics, Zumba, Weight Loss & Postpartum Fitness',
    description: 'Exclusive ladies-only AC fitness center in New Town with female trainers. Offering Zumba dance workouts, weight loss cardio, strength training, PCOS management workouts, and yoga.',
    logo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Government Hospital, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 94432 88100',
    whatsapp: '919443288100',
    email: 'shefitvnb@gmail.com',
    openingHours: 'Mon - Sat: 6:00 AM - 7:00 PM (All Women)',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 96,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['100% Ladies Only Environment', 'Zumba & Aerobics Classes', 'PCOS & Thyroid Fat Loss'],
    services: [
      { name: 'Monthly Ladies Aerobics & Gym Package', description: 'Includes cardio machines, group aerobics session & weight loss tracking.', priceEstimate: '₹1,500/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is the entire gym staff female?', answer: 'Yes, 100% female staff and trainers for complete privacy.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 2100,
    whatsappClicks: 390,
    leadsCount: 92
  },
  {
    id: 'gym-4',
    slug: 'fitness-one-ac-gym-new-town',
    name: 'Fitness One AC Gym & Cardio Club',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Modern Treadmills, Ellipticals, Cable Crossover & Group Workouts',
    description: 'Modern fully air-conditioned fitness club in New Town. Equipped with commercial motor treadmills, cross trainers, spin bikes, multi-station cable crossover, and personal locker facility.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Opposite Sub-Registrar Office, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98942 22100',
    whatsapp: '919894222100',
    email: 'fitnessone.vnb@gmail.com',
    openingHours: 'Mon - Sat: 5:00 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 78,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['AC Cardio Zone', 'Commercial Treadmills', 'Cable Crossover Machines'],
    services: [
      { name: '3-Month Membership Offer', description: 'Discounted quarterly package with free body fat composition analysis.', priceEstimate: '₹3,000' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Are daily trial workout sessions allowed?', answer: 'Yes, ₹100 day-pass available for guest trial workouts.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1650,
    whatsappClicks: 280,
    leadsCount: 64
  },
  {
    id: 'gym-5',
    slug: 'champion-sports-and-martial-arts-academy',
    name: 'Champion Karate, Taekwondo & Kickboxing Academy',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Self Defense Karate Classes for Kids, Kickboxing & Fitness Training',
    description: 'Renowned martial arts and combat fitness school in Muslimpur. Training school children and adults in Shotokan Karate, Kickboxing fat loss, self-defense, and black belt belt grading.',
    logo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Clock Tower, Muslimpur, Vaniyambadi',
    area: 'Muslimpur',
    phone: '+91 98425 77100',
    whatsapp: '919842577100',
    email: 'championkarate.vnb@gmail.com',
    openingHours: 'Mon - Sat: 6:00 AM - 8:00 AM & 5:00 PM - 8:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 65,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Shotokan Karate Black Belt', 'Kickboxing Fitness', 'Kids Self-Defense'],
    services: [
      { name: 'Kids Weekend Karate Coaching', description: 'Weekly 3-class martial arts training with belt grading exams.', priceEstimate: '₹600/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What is the minimum age for kids karate admission?', answer: 'Children from 5 years and above can join.' }
    ],
    googleMapQuery: 'Muslimpur, Vaniyambadi, Tamil Nadu',
    viewsCount: 1420,
    whatsappClicks: 230,
    leadsCount: 52
  },
  {
    id: 'gym-6',
    slug: 'pulse-fit-crossfit-and-functional-center',
    name: 'PulseFit Functional Fitness & HIIT Studio',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'CrossFit Battle Ropes, Kettlebell Conditioning & Calisthenics',
    description: 'High-intensity functional training studio on Trunk Road. Specializing in battle ropes, kettlebell workouts, plyometric box jumps, pull-up bars calisthenics, and stamina building.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: '88, Trunk Road, Vaniyambadi',
    area: 'Trunk Road',
    phone: '+91 97890 55100',
    whatsapp: '919789055100',
    email: 'pulsefitstudio@gmail.com',
    openingHours: 'Mon - Sat: 5:30 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 54,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['CrossFit Functional Conditioning', 'Calisthenics Bodyweight', 'HIIT Fat Burn'],
    services: [
      { name: 'HIIT & Functional Group Workout', description: '45-minute daily high intensity interval training circuit.', priceEstimate: '₹1,000/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is functional training suitable for beginners?', answer: 'Yes, exercises modified according to individual fitness levels.' }
    ],
    googleMapQuery: 'Trunk Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1280,
    whatsappClicks: 210,
    leadsCount: 48
  },
  {
    id: 'gym-7',
    slug: 'fort-area-classic-gym-vaniyambadi',
    name: 'Fort Area Classic Fitness Gym',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Budget Friendly Weight Training & Fat Loss Cardio',
    description: 'Long-standing neighborhood budget gym near Fort Clock Tower. Offering basic weight benches, lat pulldown machines, treadmills, and friendly atmosphere.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Clock Tower, Fort Area, Vaniyambadi',
    area: 'Fort Area',
    phone: '+91 94433 22100',
    whatsapp: '919443322100',
    email: 'fortclassicgym@gmail.com',
    openingHours: 'Mon - Sat: 5:30 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 42,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Budget Weights', 'Fat Loss Guidance', 'Student Discounts'],
    services: [
      { name: 'Monthly Gym Pass', description: 'Affordable monthly subscription for students & workers.', priceEstimate: '₹500/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is special discount available for college students?', answer: 'Yes, ₹400 monthly pass for college students showing ID card.' }
    ],
    googleMapQuery: 'Fort Area, Vaniyambadi, Tamil Nadu',
    viewsCount: 1050,
    whatsappClicks: 175,
    leadsCount: 38
  },
  {
    id: 'gym-8',
    slug: 'yoga-and-meditation-center-vaniyambadi',
    name: 'Sanjeevani Traditional Yoga & Pranayama Studio',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Hatha Yoga, Back Pain Relief, Stress Management & Pranayama Breathing',
    description: 'Peaceful yoga studio in C.L. Road. Certified yoga guru teaching traditional Hatha yoga asanas, Surya Namaskar, pranayama breathing, therapeutic back pain relief exercises, and stress relief meditation.',
    logo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Floor 1, C.L. Road, Near Bus Stand, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98942 66100',
    whatsapp: '919894266100',
    email: 'sanjeevaniyoga.vnb@gmail.com',
    openingHours: 'Mon - Sat: 6:00 AM - 10:00 AM & 5:00 PM - 7:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 48,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Hatha Yoga Asanas', 'Pranayama & Meditation', 'Therapeutic Yoga for Back Pain'],
    services: [
      { name: 'Monthly Daily Morning Yoga Classes', description: '1-hour morning yoga & pranayama breathing session.', priceEstimate: '₹800/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Can senior citizens with joint stiffness join yoga classes?', answer: 'Yes, gentle chair yoga and stretching suitable for elderly persons.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1190,
    whatsappClicks: 195,
    leadsCount: 44
  },
  {
    id: 'gym-9',
    slug: 'valayampattu-fitness-club',
    name: 'Valayampattu Fitness Club & Bodybuilding Hub',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Weight Gain, Muscle Building & Industrial Worker Fitness Pass',
    description: 'Spacious gym facility serving tannery workers and youth in Valayampattu with heavy dumbells, cable pulldown, squat cage, and muscle gain diet guidance.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Industrial Estate, Valayampattu, Vaniyambadi',
    area: 'Valayampattu',
    phone: '+91 94432 33100',
    whatsapp: '919443233100',
    email: 'valayampattugym@gmail.com',
    openingHours: 'Mon - Sat: 5:00 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 36,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Muscle Mass Building', 'Heavy Duty Dumbbells', 'Protein Shake Bar'],
    services: [
      { name: 'Monthly Workout Pass', description: 'Full access to weights and basic cardio machines.', priceEstimate: '₹600/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you sell authentic whey protein supplements?', answer: 'Yes, original branded ON and MuscleBlaze protein supplements with GST bill.' }
    ],
    googleMapQuery: 'Valayampattu, Vaniyambadi, Tamil Nadu',
    viewsCount: 940,
    whatsappClicks: 150,
    leadsCount: 32
  },
  {
    id: 'gym-10',
    slug: 'ambur-road-wellness-and-aerobics-hub',
    name: 'Vani Active Life Gym & Supplement Store',
    category: 'Gyms & Fitness',
    categoryId: 'gyms',
    tagline: 'Air Conditioned Gym, Treadmills & Imported Whey Protein Store',
    description: 'Modern wellness center on Ambur Road featuring air-conditioned cardio section, strength machinery, and in-house authentic whey protein & mass gainer supplement store.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Bus Stand, Ambur Road, Vaniyambadi',
    area: 'Ambur Road',
    phone: '+91 98422 99100',
    whatsapp: '919842299100',
    email: 'vactivelife.vnb@gmail.com',
    openingHours: 'Mon - Sat: 5:30 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 52,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['AC Gym Facilities', 'Authentic Whey Protein Store', 'Fat Loss Workout'],
    services: [
      { name: 'Monthly Gym & Protein Package', description: 'Gym membership with discount on whey protein purchases.', priceEstimate: '₹1,000/mo' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is protein supplement authenticity guaranteed?', answer: '100% authentic with scratch brand verification code on every tub.' }
    ],
    googleMapQuery: 'Ambur Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1310,
    whatsappClicks: 220,
    leadsCount: 49
  }
];
