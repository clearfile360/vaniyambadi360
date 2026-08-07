import { Business } from '../../types';

export const SUPERMARKETS_BUSINESSES: Business[] = [
  {
    id: 'super-1',
    slug: 'vani-supermarket-and-fresh-mart',
    name: 'Vani Supermarket & Daily Fresh Mart',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Vaniyambadi’s Premium Family Supermarket – Fresh Vegetables, Grocery & Home Essentials',
    description: 'Spacious air-conditioned multi-story supermarket on C.L. Road offering imported chocolates, organic staples, fresh farm vegetables, dairy, household plasticware, frozen foods, and daily essential deals with home delivery.',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1000&auto=format&fit=crop&q=80',
    address: '142, C.L. Road, Near Indian Bank, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 94432 10988',
    whatsapp: '919443210988',
    email: 'vanisupermarket@gmail.com',
    openingHours: 'Mon - Sun: 7:30 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 142,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    establishedYear: 2010,
    specialties: ['Fresh Organic Produce', 'Monthly Provision Packs', 'Imported Confectionery', 'Doorstep Express Delivery', 'Sodexo Accepted'],
    latLng: { lat: 12.6820, lng: 78.6162 },
    services: [
      { name: 'Monthly Home Grocery Kit Delivery', description: 'Customized rice, oil, pulses, and spice provision packages delivered free within 5km.', priceEstimate: '₹2,999 package' },
      { name: 'Fresh Organic Farm Vegetables & Fruits', description: 'Daily direct arrivals from Ooty and Krishnagiri farms.', priceEstimate: 'Market Rate' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you offer doorstep grocery delivery in Vaniyambadi?', answer: 'Yes, WhatsApp your grocery list to +91 94432 10988 for free same-day home delivery on orders above ₹1,000.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 3200,
    whatsappClicks: 710,
    leadsCount: 160
  },
  {
    id: 'super-2',
    slug: 'royal-hypermarket-and-provisions',
    name: 'Royal Hypermarket & Departmental Store',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Wide Range of Groceries, Kitchenware, Cosmetics & Daily Needs near Taluk Office',
    description: 'Convenient shopping destination near Tahsildar / Taluk Office Road. Stocking premium quality basmati rice, dry fruits, spices, bakery items, organic honey, cookware, and personal care products at wholesale discounted prices.',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Taluk Office, Tahsildar Office Road, New Town, Vaniyambadi',
    area: 'Tahsildar Office Road',
    phone: '+91 98942 55430',
    whatsapp: '919894255430',
    email: 'royalhypermarket.vnb@gmail.com',
    openingHours: 'Mon - Sat: 8:00 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 86,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    establishedYear: 2015,
    specialties: ['Seeraga Samba & Basmati Rice', 'Wholesale Dry Fruits & Nuts', 'Kitchenware & Stainless Steel', 'Bakery & Snacks', 'Card & UPI Payment'],
    latLng: { lat: 12.6862, lng: 78.6212 },
    services: [
      { name: 'Bulk Wedding & Event Grocery Supply', description: 'Wholesale pricing for marriage catering provisions and dry fruit gift boxes.', priceEstimate: 'Wholesale Rate' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is parking space available near Tahsildar Office Road branch?', answer: 'Yes, spacious 2-wheeler and 4-wheeler parking is available in front of the store.' }
    ],
    googleMapQuery: 'Tahsildar Office Road, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 2150,
    whatsappClicks: 430,
    leadsCount: 95
  },
  {
    id: 'super-3',
    slug: 'new-town-fresh-bazaar-and-organic-vegetables',
    name: 'New Town Fresh Bazaar & Organic Vegetables',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Farm-Fresh Green Vegetables, Fruits & Daily Milk Products in New Town',
    description: 'Clean, hygienic neighborhood grocery market stocking farm-fresh leafy greens, hill country vegetables, daily cow milk, paneer, ghee, and packaged kitchen spices.',
    logo: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1000&auto=format&fit=crop&q=80',
    address: '45, New Town Main Road, Opposite Government Girls Higher Secondary School, Vaniyambadi',
    area: 'New Town',
    phone: '+91 97890 44211',
    whatsapp: '919789044211',
    email: 'newtownfresh@gmail.com',
    openingHours: 'Mon - Sun: 6:30 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 64,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2018,
    specialties: ['Direct Hill Farm Vegetables', 'A2 Pure Cow Milk', 'Cold Pressed Cooking Oils', 'Fresh Coconut & Sprouts'],
    latLng: { lat: 12.6812, lng: 78.6238 },
    services: [
      { name: 'Daily Morning Milk & Vegetable Basket', description: 'Early morning doorstep delivery of fresh milk, curd, and daily green vegetables.', priceEstimate: 'Monthly Subscription' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What time do fresh vegetables arrive daily?', answer: 'Fresh farm stock arrives every morning by 6:30 AM.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1600,
    whatsappClicks: 310,
    leadsCount: 70
  },
  {
    id: 'super-4',
    slug: 'metro-wholesale-provision-and-rice-depot',
    name: 'Metro Wholesale Provision & Rice Depot',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Wholesale Rice Bags, Cooking Oils, Pulses & Marriage Catering Supplies',
    description: 'Major wholesale provision market in Khaderpet supplying 25kg & 50kg rice bags (Seeraga Samba, Ponni, IR20), refined sunflower oil cans, pulses, and dry spices for retail shops, hotels, and family functions.',
    logo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1000&auto=format&fit=crop&q=80',
    address: '18, Khaderpet Bazaar Street, Near Leather Market, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94421 88900',
    whatsapp: '919442188900',
    email: 'metrorice.vnb@gmail.com',
    openingHours: 'Mon - Sat: 8:00 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 110,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    establishedYear: 1998,
    specialties: ['Aged Seeraga Samba Rice', 'Wholesale Oil Cans', 'Bulk Catering Orders', 'Direct Mill Rates'],
    latLng: { lat: 12.6882, lng: 78.6152 },
    services: [
      { name: 'Biryani Rice Special Bulk Bags (26kg)', description: 'Export quality premium Seeraga Samba & Basmati rice for wedding biryani catering.', priceEstimate: 'Mill Wholesale Price' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you deliver rice bags to home in Vaniyambadi?', answer: 'Yes, free auto delivery for orders of 2 or more 25kg rice bags.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 2900,
    whatsappClicks: 620,
    leadsCount: 145
  },
  {
    id: 'super-5',
    slug: 'heritage-dry-fruits-spices-and-gourmet-mart',
    name: 'Heritage Dry Fruits, Spices & Gourmet Mart',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Premium Almonds, Cashews, Dates, saffron, Gourmet Spices & Gift Boxes',
    description: 'Specialty dry fruit showroom on Ambur Road stocking imported Iranian dates, Kashmiri saffron, premium walnuts, roasted pistachios, organic honey, and custom marriage gift hampers.',
    logo: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1000&auto=format&fit=crop&q=80',
    address: '88, Ambur Road, Near Petrol Bunk, Vaniyambadi',
    area: 'Ambur Road',
    phone: '+91 98422 99110',
    whatsapp: '919842299110',
    email: 'heritagedryfruits.vnb@gmail.com',
    openingHours: 'Mon - Sun: 9:00 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 78,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    establishedYear: 2012,
    specialties: ['Imported Arabian Dates', 'Organic Kashmiri Saffron', 'Roasted & Salted Nuts', 'Wedding Dry Fruit Gift Packs'],
    latLng: { lat: 12.6912, lng: 78.6282 },
    services: [
      { name: 'Custom Marriage Dry Fruit Gift Boxes', description: 'Designer brass/wooden boxes loaded with premium cashews, raisins, and dates.', priceEstimate: 'From ₹499/box' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Are dates imported directly?', answer: 'Yes, fresh Ajwa, Mabroom, and Medjool dates imported directly from Saudi Arabia and UAE.' }
    ],
    googleMapQuery: 'Ambur Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 2050,
    whatsappClicks: 490,
    leadsCount: 110
  },
  {
    id: 'super-6',
    slug: 'al-rayan-organic-and-import-food-store',
    name: 'Al-Rayan Organic & Import Food Store',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Imported Chocolates, Halal Frozen Meats, Arabian Spices & Olive Oil',
    description: 'Unique boutique import market in Muslimpur featuring Middle Eastern fruit juices, extra virgin olive oils, Turkish delights, halal frozen nuggets/sausages, and imported biscuits.',
    logo: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=1000&auto=format&fit=crop&q=80',
    address: '22, Main Road, Muslimpur, Vaniyambadi',
    area: 'Muslimpur',
    phone: '+91 97871 55660',
    whatsapp: '919787155660',
    email: 'alrayanimport@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 52,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2019,
    specialties: ['Halal Certified Frozen Foods', 'Imported Chocolates', 'Extra Virgin Olive Oil', 'Arabian Fruit Juices'],
    latLng: { lat: 12.6792, lng: 78.6122 },
    services: [
      { name: 'Imported Gourmet Snack & Beverage Basket', description: 'Curated selection of chocolates, chips, and juices.', priceEstimate: 'Custom Pricing' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you keep halal certified frozen items?', answer: 'Yes, 100% halal certified frozen chicken items and frozen parathas available.' }
    ],
    googleMapQuery: 'Muslimpur, Vaniyambadi, Tamil Nadu',
    viewsCount: 1450,
    whatsappClicks: 280,
    leadsCount: 60
  },
  {
    id: 'super-7',
    slug: 'crescent-departmental-store-and-daily-dairy',
    name: 'Crescent Departmental Store & Daily Dairy',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Trusted Daily Provisions, Dairy Products, Stationery & Personal Care on C.L. Road',
    description: 'Popular everyday provision store near Bus Stand offering monthly grocery bundles, fresh butter, ghee, ice creams, school stationery, and household cleaning supplies.',
    logo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1000&auto=format&fit=crop&q=80',
    address: '62, C.L. Road, Near Bus Stand Signal, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 94435 77120',
    whatsapp: '919443577120',
    email: 'crescentdept.vnb@gmail.com',
    openingHours: 'Mon - Sun: 7:00 AM - 9:30 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 48,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2008,
    specialties: ['Fresh Buffalo Butter & Ghee', 'Monthly Provision Kits', 'Stationery & Notebooks', 'Quick Billing'],
    latLng: { lat: 12.6825, lng: 78.6168 },
    services: [
      { name: 'Express Neighborhood Delivery', description: 'Deliveries sent to C.L. Road, Khaderpet, and New Town.', priceEstimate: 'Free above ₹500' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Are sodexo food coupons accepted?', answer: 'Yes, Sodexo cards and UPI apps accepted.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1380,
    whatsappClicks: 260,
    leadsCount: 52
  },
  {
    id: 'super-8',
    slug: 'family-fresh-mart-and-frozen-foods',
    name: 'Family Fresh Mart & Frozen Foods',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Frozen Peas, Ice Creams, Bakery, Cookware & Modern Grocery Hub near Court',
    description: 'Modern family shopping mart situated on Tahsildar / Court Road providing frozen snacks, dairy delicacies, non-stick cookware, juices, infant foods, and cleaning supplies.',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1000&auto=format&fit=crop&q=80',
    address: 'Door 28, Tahsildar Office Road, Near Court Complex, Vaniyambadi',
    area: 'Tahsildar Office Road',
    phone: '+91 98948 22100',
    whatsapp: '919894822100',
    email: 'familyfresh.vnb@gmail.com',
    openingHours: 'Mon - Sun: 8:00 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 59,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2017,
    specialties: ['Amul & Kwality Ice Creams', 'Frozen Green Peas & Sweetcorn', 'Non-Stick Cookware', 'Infant Cereals & Diapers'],
    latLng: { lat: 12.6868, lng: 78.6215 },
    services: [
      { name: 'Doorstep Provisions Express', description: 'WhatsApp order processing and fast doorstep drop.', priceEstimate: 'Actual bill + Nominal delivery' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Where is it located on Tahsildar Office road?', answer: 'Located just 200 meters from Taluk Office heading towards Court Complex.' }
    ],
    googleMapQuery: 'Tahsildar Office Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 1520,
    whatsappClicks: 320,
    leadsCount: 68
  },
  {
    id: 'super-9',
    slug: 'star-supermarket-and-household-plasticware',
    name: 'Star Supermarket & Household Plasticware',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Groceries, Milton Thermoware, Plastic Storage Containers & Home Goods',
    description: 'Double-story home and kitchen supermarket in New Town supplying plastic storage containers, steel flasks, cleaning mops, brooms, spices, and pulses under one roof.',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&auto=format&fit=crop&q=80',
    address: '102, New Town High Road, Vaniyambadi',
    area: 'New Town',
    phone: '+91 94431 66200',
    whatsapp: '919443166200',
    email: 'starsupermarket.vnb@gmail.com',
    openingHours: 'Mon - Sat: 8:30 AM - 9:00 PM',
    openNowStatus: true,
    rating: 4.6,
    reviewCount: 42,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2014,
    specialties: ['Milton & Cello Thermoware', 'Kitchen Plastic Storage', 'Provisions & Spices', 'Discount Combo Packs'],
    latLng: { lat: 12.6815, lng: 78.6242 },
    services: [
      { name: 'Home Organization Plastics Kit', description: 'Airtight container sets for spice and pulse storage.', priceEstimate: '₹899 set' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you sell Milton hot boxes?', answer: 'Yes, full range of steel and insulated casseroles available.' }
    ],
    googleMapQuery: 'New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1290,
    whatsappClicks: 240,
    leadsCount: 48
  },
  {
    id: 'super-10',
    slug: 'green-valley-farm-produce-and-fruits-bazaar',
    name: 'Green Valley Farm Produce & Fruits Bazaar',
    category: 'Supermarkets & Groceries',
    categoryId: 'supermarkets',
    tagline: 'Fresh Seasonal Fruits, Exotic Vegetables, Tender Coconut & Juices',
    description: 'Wholesale & retail fresh fruits center in Gandar Street stocking apples, pomegranates, Ooty strawberries, dragon fruit, tender coconuts, and fresh sugarcane juice.',
    logo: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1000&auto=format&fit=crop&q=80',
    address: '15, Gandar Street, Near Market Gate, Vaniyambadi',
    area: 'Gandar Street',
    phone: '+91 97893 11880',
    whatsapp: '919789311880',
    email: 'greenvalleyfruits@gmail.com',
    openingHours: 'Mon - Sun: 6:00 AM - 10:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 71,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    establishedYear: 2011,
    specialties: ['Exotic Imported Fruits', 'Custom Fruit Baskets for Patients', 'Fresh Tender Coconut', 'No-Sugar Fruit Juices'],
    latLng: { lat: 12.6845, lng: 78.6175 },
    services: [
      { name: 'Patient Wellness Fruit Basket Delivery', description: 'Freshly arranged fruit basket delivered to hospital rooms in Vaniyambadi.', priceEstimate: '₹500 / ₹1000 Basket' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you deliver fruit baskets to Islamiah Hospital / Govt Hospital?', answer: 'Yes, direct hospital room delivery within 30 minutes.' }
    ],
    googleMapQuery: 'Gandar Street, Vaniyambadi, Tamil Nadu',
    viewsCount: 1750,
    whatsappClicks: 390,
    leadsCount: 85
  }
];
