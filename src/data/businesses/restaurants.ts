import { Business } from '../../types';

export const RESTAURANTS_BUSINESSES: Business[] = [
  {
    id: 'rest-1',
    slug: 'vaniyambadi-star-biryani-house',
    name: 'Vaniyambadi Famous Star Biryani',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Authentic Traditional Seeraga Samba Mutton Biryani Since 1978',
    description: 'Renowned across Tamil Nadu, Vaniyambadi Star Biryani offers rich, aromatic firewood-cooked Seeraga Samba mutton biryani, chicken 65, brinjal gravy (Kathirikai Pachadi), and sweet Bread Halwa. Family AC dining room available.',
    logo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: '112, C.L. Road, opposite SBI Bank, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98423 55110',
    whatsapp: '919842355110',
    email: 'starbiryani.vnb@gmail.com',
    openingHours: 'Mon - Sun: 11:30 AM - 10:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 312,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    specialties: ['Special Mutton Biryani', 'Chicken Biryani', 'Nattu Kozhi Fry', 'Bread Halwa', 'Kathirikai Pachadi'],
    services: [
      { name: 'Special Mutton Biryani (Full)', description: 'Tender mutton cooked in traditional firewood cauldron with Seeraga Samba rice.', priceEstimate: '₹280' },
      { name: 'Chicken Biryani (Full)', description: 'Juicy chicken biryani served with Kathirikai Pachadi and onion raita.', priceEstimate: '₹210' },
      { name: 'Bulk Marriage & Event Catering', description: 'Authentic Vaniyambadi biryani catering for weddings (50 - 2,000 persons).', priceEstimate: 'Custom quote' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you take bulk catering orders for weddings in Vaniyambadi?', answer: 'Yes! We cater for weddings and bulk events anywhere in Tirupathur and Vellore.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 3890,
    whatsappClicks: 840,
    leadsCount: 190
  },
  {
    id: 'rest-2',
    slug: 'ahmedia-hotel-vaniyambadi',
    name: 'Ahmedia Hotel & Biryani Center',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Legendary Vaniyambadi Biryani Institution Established 1975',
    description: 'A historic culinary icon in Vaniyambadi since 1975. Legendary for firewood Dum Mutton Biryani, Chicken 65, Mutton Chops, Brain Fry, and homemade Bread Halwa.',
    logo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: '3/7, C.N. Annadurai Road, Near Bus Stand, Vaniyambadi',
    area: 'New Town',
    phone: '+91 94432 60120',
    whatsapp: '919443260120',
    email: 'ahmediahotel.vnb@gmail.com',
    openingHours: 'Mon - Sun: 11:00 AM - 11:00 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 285,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    specialties: ['Ahmedia Mutton Biryani', 'Mutton Brain Fry', 'Chicken 65', 'Bread Halwa'],
    services: [
      { name: 'Ahmedia Special Mutton Biryani', description: 'Traditional Dum biryani cooked with secret family spice blend.', priceEstimate: '₹290' },
      { name: 'Mutton Brain & Chops Fry', description: 'Spicy tawa fried brain masala and succulent mutton chops.', priceEstimate: '₹180' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is parcel facility available for long distance travel?', answer: 'Yes, special hot-pack thermal container packing is available for travelers.' }
    ],
    googleMapQuery: 'CN Annadurai Road, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 3410,
    whatsappClicks: 720,
    leadsCount: 160
  },
  {
    id: 'rest-3',
    slug: 'ambur-star-biryani-vaniyambadi-branch',
    name: 'Ambur Star Biryani Vaniyambadi NH48',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'World-Renowned Legacy Biryani Since 1890',
    description: 'Located on Chennai-Bangalore Highway NH-48 near Vaniyambadi Toll. Serving legendary Ambur-Vaniyambadi style Seeraga Samba mutton biryani, chicken biryani, grilled chicken, and falooda.',
    logo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=1000&auto=format&fit=crop&q=80',
    address: 'NH-48 Bangalore-Chennai Highway, near Puthu Kovil Toll, Vaniyambadi',
    area: 'Ambur Road',
    phone: '+91 98941 22330',
    whatsapp: '919894122330',
    email: 'vaniyambadi@amburstarbriyani.com',
    website: 'https://amburstarbriyani.com',
    openingHours: 'Mon - Sun: 11:00 AM - 11:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 240,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    specialties: ['Highway Mutton Biryani', 'BBQ & Tandoori Chicken', 'Falooda'],
    services: [
      { name: 'Mutton Biryani Combo', description: 'Includes Seeraga Samba Mutton Biryani, Chicken 65, Kathirikai Pachadi, and Sweet.', priceEstimate: '₹340' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is highway parking space available for cars and buses?', answer: 'Yes, spacious parking for over 50 vehicles with clean restrooms.' }
    ],
    googleMapQuery: 'NH 48, Vaniyambadi, Tamil Nadu',
    viewsCount: 2950,
    whatsappClicks: 510,
    leadsCount: 130
  },
  {
    id: 'rest-4',
    slug: 'kr-beef-biryani-vaniyambadi',
    name: 'KR Beef Biryani Hotel',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Famous Local Flavor & Mouthwatering Spicy Beef Biryani',
    description: 'Extremely popular among locals for mouthwatering firewood beef biryani, beef Chukka, beef seekh kebab, and spicy gravy.',
    logo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Railway Station, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 97890 88210',
    whatsapp: '919789088210',
    email: 'krbeefbiryani@gmail.com',
    openingHours: 'Mon - Sun: 12:00 PM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 198,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Spicy Beef Biryani', 'Beef Chukka Fry', 'Seekh Kebab'],
    services: [
      { name: 'Special Beef Biryani', description: 'Tender beef chunks cooked in Seeraga Samba rice with aromatic spices.', priceEstimate: '₹180' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What time does fresh biryani batch get ready?', answer: 'First batch at 12:00 PM afternoon and second batch at 7:00 PM evening.' }
    ],
    googleMapQuery: 'Railway Station Road, Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 2210,
    whatsappClicks: 430,
    leadsCount: 98
  },
  {
    id: 'rest-5',
    slug: 'khaja-restaurant-vaniyambadi',
    name: 'Khaja Family Restaurant & Biryani',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Multicuisine Mughlai, Tandoori & Seeraga Samba Biryani',
    description: 'Family dining restaurant on C.L. Road. Serving chicken/mutton biryani, tandoori chicken, butter naan, kadai mutton, and fresh juices.',
    logo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: '45, C.L. Road, Near Royal Theater, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98425 44100',
    whatsapp: '919842544100',
    email: 'khajarestaurant@gmail.com',
    openingHours: 'Mon - Sun: 11:30 AM - 10:30 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 142,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Family AC Hall', 'Mutton Biryani', 'Tandoori Roti & Gravies'],
    services: [
      { name: 'Mutton Biryani & Tandoori Combo', description: 'Full Mutton Biryani + Half Tandoori Chicken + Soft Drink.', priceEstimate: '₹360' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is AC family section separate?', answer: 'Yes, private AC section for families on 1st floor.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1780,
    whatsappClicks: 310,
    leadsCount: 72
  },
  {
    id: 'rest-6',
    slug: 'taj-biryani-hotel-vaniyambadi',
    name: 'Taj Biryani Hotel & Fast Food',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Rich Aromas, Tender Meat & Fast Door Delivery',
    description: 'Popular spot for quick biryani bites, fried rice, chicken lollipop, shawarma, and authentic Vaniyambadi brinjal pachadi.',
    logo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Trunk Road Junction, Vaniyambadi',
    area: 'Trunk Road',
    phone: '+91 94433 22900',
    whatsapp: '919443322900',
    email: 'tajbiryani.vnb@gmail.com',
    openingHours: 'Mon - Sun: 11:00 AM - 11:00 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 110,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Chicken Biryani', 'Chicken Lollipop', 'Chicken Shawarma'],
    services: [
      { name: 'Chicken Biryani + Lollipop Combo', description: 'Hot chicken biryani served with crisp fried lollipop.', priceEstimate: '₹220' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you deliver to home addresses in Vaniyambadi?', answer: 'Yes, free home delivery within 3 km for orders above ₹300.' }
    ],
    googleMapQuery: 'Trunk Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1490,
    whatsappClicks: 260,
    leadsCount: 61
  },
  {
    id: 'rest-7',
    slug: 'mustaq-hotel-biryani',
    name: 'Mustaq Hotel Traditional Biryani',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Authentic Firewood Cooked Mutton Biryani Since 1988',
    description: 'Deeply rooted in traditional Vaniyambadi Dum cooking. Known for soft mutton pieces, balanced non-greasy spice, and traditional sweet Bread Halwa.',
    logo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Mosque Street, Muslimpur, Vaniyambadi',
    area: 'Muslimpur',
    phone: '+91 98942 55800',
    whatsapp: '919894255800',
    email: 'mustaqhotel@gmail.com',
    openingHours: 'Mon - Sun: 12:00 PM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 135,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Muslimpur Mutton Biryani', 'Bread Halwa', 'Nattu Kozhi Chukka'],
    services: [
      { name: 'Mutton Biryani (Full Deg)', description: 'Full Deg biryani booking for private family parties and Nikah functions.', priceEstimate: 'Per Deg Rate' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Can we book 1 Deg biryani for family function?', answer: 'Yes, please inform 1 day in advance.' }
    ],
    googleMapQuery: 'Mosque Street, Muslimpur, Vaniyambadi, Tamil Nadu',
    viewsCount: 1620,
    whatsappClicks: 290,
    leadsCount: 68
  },
  {
    id: 'rest-8',
    slug: 'darbar-hyderabadi-biryani-vaniyambadi',
    name: 'Darbar Hyderabadi & Vaniyambadi Fusion Biryani',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Hyderabadi Basmati Dum Biryani & Local Seeraga Samba Favorites',
    description: 'Offering both long-grain Hyderabadi Basmati biryani and traditional local Seeraga Samba biryani alongside grilled chicken and butter chicken masala.',
    logo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Islamiah College, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 97891 11400',
    whatsapp: '919789111400',
    email: 'darbarbiryani.vnb@gmail.com',
    openingHours: 'Mon - Sun: 11:30 AM - 10:30 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 92,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Hyderabadi Chicken Dum Biryani', 'Grilled Chicken', 'Butter Naan'],
    services: [
      { name: 'Hyderabadi Basmati Chicken Biryani', description: 'Long grain Basmati rice Dum biryani served with Mirchi Ka Salan.', priceEstimate: '₹220' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is student discount available for Islamiah College students?', answer: 'Yes, 10% discount on showing valid student ID card.' }
    ],
    googleMapQuery: 'Islamiah College, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1310,
    whatsappClicks: 220,
    leadsCount: 52
  },
  {
    id: 'rest-9',
    slug: 'arshad-beef-biryani-vaniyambadi',
    name: 'Arshad Beef Biryani & Kebab Corner',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'Famous Tender Beef Biryani & Charcoal Grilled Kebabs',
    description: 'Renowned spot in Khaderpet for charcoal-grilled seekh kebabs, spicy beef biryani, beef boti fry, and hot parottas with gravy.',
    logo: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Fort Masjid, Fort Area, Vaniyambadi',
    area: 'Fort Area',
    phone: '+91 94432 88100',
    whatsapp: '919443288100',
    email: 'arshadbiryani@gmail.com',
    openingHours: 'Mon - Sun: 12:30 PM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 115,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Charcoal Seekh Kebab', 'Beef Biryani', 'Parotta Gravy'],
    services: [
      { name: 'Charcoal Beef Seekh Kebab (Plate)', description: 'Juicy spiced minced beef skewers grilled over coals.', priceEstimate: '₹140' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What time are kebabs hot and fresh?', answer: 'Kebabs start from 4:30 PM evening onwards.' }
    ],
    googleMapQuery: 'Fort Area, Vaniyambadi, Tamil Nadu',
    viewsCount: 1510,
    whatsappClicks: 280,
    leadsCount: 65
  },
  {
    id: 'rest-10',
    slug: 'chola-family-restaurant-vaniyambadi',
    name: 'Chola Multi-Cuisine Family Restaurant',
    category: 'Biryani & Restaurants',
    categoryId: 'restaurants',
    tagline: 'South Indian Non-Veg Meals, Biryani & Chinese Delights',
    description: 'Spacious multi-cuisine family restaurant offering South Indian banana leaf non-veg meals, fish fry, prawn masala, biryani, and Chinese noodles.',
    logo: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=1000&auto=format&fit=crop&q=80',
    address: 'Opposite Govt Hospital, Jamath Road, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98422 99400',
    whatsapp: '919842299400',
    email: 'cholarestaurant.vnb@gmail.com',
    openingHours: 'Mon - Sun: 10:30 AM - 10:30 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 88,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    specialties: ['Banana Leaf Non-Veg Meals', 'Vanjaram Fish Fry', 'Mutton Biryani'],
    services: [
      { name: 'Special Non-Veg Banana Leaf Meals', description: 'Unlimited rice with chicken gravy, mutton gravy, fish curry, kootu & rasam.', priceEstimate: '₹180' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is fresh sea fish available daily?', answer: 'Yes, fresh fish fry prepared on order.' }
    ],
    googleMapQuery: 'Jamath Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1250,
    whatsappClicks: 210,
    leadsCount: 48
  }
];
