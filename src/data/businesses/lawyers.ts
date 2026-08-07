import { Business } from '../../types';

export const LAWYERS_BUSINESSES: Business[] = [
  {
    id: 'law-1',
    slug: 'advocate-ramesh-and-associates',
    name: 'Advocate Ramesh & Associates',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Expert Legal Solutions for Civil, Property & Sale Deed Matters',
    description: 'With over 18 years of legal practice in Vaniyambadi Court and Tirupathur District Court, Advocate K. Ramesh specializes in land title verification, sale deed preparation, partition suits, boundary disputes, and civil litigations.',
    logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1000&auto=format&fit=crop&q=80',
    address: 'Door No. 42, Court Road, near Sub-Registrar Office, New Town',
    area: 'New Town',
    phone: '+91 94432 87610',
    whatsapp: '919443287610',
    email: 'adv.ramesh.vnb@gmail.com',
    website: 'https://rameshlawvnb.in',
    openingHours: 'Mon - Sat: 9:30 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 48,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: true,
    consultationFee: '₹500 / initial legal consultation',
    establishedYear: 2007,
    specialties: ['Civil Suits', 'Property Title Check', 'Sale Deed Preparation', 'Inheritance & Wills', 'Legal Notices'],
    services: [
      { name: 'Property Title Verification', description: 'Complete 30-year parent document search and encumbrance certificate (EC) legal opinion.', priceEstimate: '₹2,500' },
      { name: 'Sale Deed Drafting & Registration', description: 'End-to-end deed preparation and guidance at Vaniyambadi Sub-Registrar office.', priceEstimate: '₹3,500' },
      { name: 'Civil Litigation & Property Disputes', description: 'Representation in Vaniyambadi Munsif Court & Tirupathur District Court.', priceEstimate: 'Case based' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What documents are required for property title verification?', answer: 'We require parent deeds (last 30 years), latest Encumbrance Certificate (EC), Patta/Chitta, Town Survey Land Record (TSLR), and tax receipts.' }
    ],
    googleMapQuery: 'Sub Registrar Office, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1420,
    whatsappClicks: 320,
    leadsCount: 64
  },
  {
    id: 'law-2',
    slug: 'advocate-sathish-kumar-legal-chamber',
    name: 'Advocate Sathish Kumar Legal Chamber',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Senior Criminal Defense, Motor Accident Claims & Bail Practitioner',
    description: 'Senior criminal lawyer practicing at Vaniyambadi Munsif & Magistrate Court. Specializing in bail petitions, criminal defense, cheque bounce cases (138 NI Act), motor accident claims (MACP), and police station representation.',
    logo: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&auto=format&fit=crop&q=80',
    address: '12, Court Combined Complex Road, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98423 91204',
    whatsapp: '919842391204',
    email: 'adv.sathish.vnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 39,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: true,
    consultationFee: '₹600 / consultation',
    establishedYear: 2010,
    specialties: ['Criminal Bail Petitions', 'Cheque Bounce (138 NI Act)', 'Motor Accident Claims', 'FIR Cancellation'],
    services: [
      { name: 'Bail & Anticipatory Bail Petitions', description: 'Urgent bail applications before Magistrate Court and District Court.', priceEstimate: 'Case based' },
      { name: 'Motor Accident Compensation (MACP)', description: 'Claiming maximum compensation for road accidents.', priceEstimate: 'Percentage based' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'How long does it take to file anticipatory bail?', answer: 'We prepare urgent bail papers within 24 hours for submission before the Sessions Court.' }
    ],
    googleMapQuery: 'Court Complex, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1120,
    whatsappClicks: 210,
    leadsCount: 45
  },
  {
    id: 'law-3',
    slug: 'advocate-sharfuddin-family-law-associates',
    name: 'Advocate Sharfuddin Family & Property Chamber',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Muslim Personal Law, Partition & Family Dispute Specialist',
    description: 'Providing compassionate legal support in Muslim personal law, succession certificates, heirship disputes, marriage registration, divorce (Talaq/Khula matters), and property partition across Vaniyambadi and Ambur.',
    logo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1000&auto=format&fit=crop&q=80',
    address: '88, Main Road, Near Big Mosque, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 97891 44520',
    whatsapp: '919789144520',
    email: 'sharfuddin.law@gmail.com',
    openingHours: 'Mon - Sat: 10:00 AM - 7:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 31,
    verified: true,
    claimed: true,
    planTier: 'pro',
    featured: false,
    consultationFee: '₹500 / consultation',
    establishedYear: 2012,
    specialties: ['Muslim Inheritance Law', 'Family Dispute Mediation', 'Legal Heir Certificate', 'Property Partition'],
    services: [
      { name: 'Muslim Personal Law Consultation', description: 'Legal guidance on inheritance shares, wills (Wasiyat), and Hiba gifts.', priceEstimate: '₹500' },
      { name: 'Legal Heirship & Partition Deeds', description: 'Documentation and court applications for partition among legal heirs.', priceEstimate: '₹3,000' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you assist with family settlement agreements?', answer: 'Yes, we draft amicable family settlement deeds to avoid prolonged court litigations.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 980,
    whatsappClicks: 180,
    leadsCount: 36
  },
  {
    id: 'law-4',
    slug: 'advocate-venkatesan-civil-lawyer',
    name: 'Advocate K. Venkatesan Civil & Revenue Law Chamber',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Land Patta Transfers, Revenue Law & Civil Injunction Suits',
    description: 'Specialist in revenue department procedures, Patta transfer applications, Chitta correction, land measurement disputes, and permanent injunction suits in Vaniyambadi Taluk Office and Munsif Court.',
    logo: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1000&auto=format&fit=crop&q=80',
    address: '15, Taluk Office Road, C.L. Road, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 94421 66310',
    whatsapp: '919442166310',
    email: 'venkatesan.adv@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 28,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹400 / consultation',
    establishedYear: 2005,
    specialties: ['Patta Transfer', 'Revenue Appeals', 'Boundary Dispute', 'Land Survey Law'],
    services: [
      { name: 'Patta & Revenue Document Processing', description: 'Filing revenue appeals before Revenue Divisional Officer (RDO) and Tahsildar.', priceEstimate: '₹2,000' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What to do if Patta is registered under wrong name?', answer: 'We file a Patta rectification petition with the Tahsildar along with supporting parent deeds.' }
    ],
    googleMapQuery: 'Taluk Office, C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 750,
    whatsappClicks: 140,
    leadsCount: 25
  },
  {
    id: 'law-5',
    slug: 'advocate-tamilselvan-and-co',
    name: 'Advocate N. Tamilselvan High Court & District Practitioner',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'High Court Writs, Commercial Arbitration & Property Title Suits',
    description: 'Handling High Court Writ petitions, commercial contract litigation, tannery business disputes, and high-value property litigations for industrialists and business houses in Vaniyambadi.',
    logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format&fit=crop&q=80',
    address: 'Floor 1, Sri Laxmi Complex, Trunk Road, Vaniyambadi',
    area: 'Trunk Road',
    phone: '+91 98942 11090',
    whatsapp: '919894211090',
    email: 'adv.tamilselvan@gmail.com',
    openingHours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 34,
    verified: true,
    claimed: true,
    planTier: 'premium',
    featured: false,
    consultationFee: '₹750 / consultation',
    establishedYear: 2002,
    specialties: ['High Court Writs', 'Business Litigation', 'Arbitration', 'Property Suits'],
    services: [
      { name: 'Commercial Contract Legal Review', description: 'Drafting & auditing business partnership contracts and export agreements.', priceEstimate: '₹4,000' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Do you represent cases in Madras High Court?', answer: 'Yes, we file and argue Writ Petitions and First Appeals before the Madras High Court.' }
    ],
    googleMapQuery: 'Trunk Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 890,
    whatsappClicks: 165,
    leadsCount: 30
  },
  {
    id: 'law-6',
    slug: 'advocate-farooq-ahmed-labor-lawyer',
    name: 'Advocate M. Farooq Ahmed Labor & Industrial Law Firm',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Labor Disputes, EPF/ESI Compliance & Tannery Industrial Safety',
    description: 'Advising leather tanneries, shoe factories, and commercial shops on labor law compliance, industrial dispute resolution, EPF/ESI representations, and worker compensation claims.',
    logo: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1000&auto=format&fit=crop&q=80',
    address: '44, Leather Merchant Street, Khaderpet, Vaniyambadi',
    area: 'Khaderpet',
    phone: '+91 94433 77810',
    whatsapp: '919443377810',
    email: 'farooq.laborlaw@gmail.com',
    openingHours: 'Mon - Sat: 9:30 AM - 7:30 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 22,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹500 / consultation',
    establishedYear: 2011,
    specialties: ['Labor Dispute Law', 'Factory Compliance', 'EPF & ESI Legal Audit'],
    services: [
      { name: 'Factory Labor Audit & Advisory', description: 'Legal compliance check under Factories Act & Minimum Wages Act for local units.', priceEstimate: '₹3,500' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'How to handle labor court notices for small tanneries?', answer: 'We draft legal replies to labor inspector notices and represent before Vellore Labor Court.' }
    ],
    googleMapQuery: 'Khaderpet, Vaniyambadi, Tamil Nadu',
    viewsCount: 620,
    whatsappClicks: 110,
    leadsCount: 19
  },
  {
    id: 'law-7',
    slug: 'advocate-subramani-banking-and-recovery',
    name: 'Advocate P. Subramani Banking & DRT Specialist',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'SARFAESI Act Defense, Bank Loan Recovery & Cheque Bounce Defense',
    description: 'Expert guidance on SARFAESI bank auction notices, Debt Recovery Tribunal (DRT) appeals, loan restructuring negotiations, and defense in bank recovery suits for individuals and local firms.',
    logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1000&auto=format&fit=crop&q=80',
    address: 'Near SBI Bank Branch, C.L. Road, Vaniyambadi',
    area: 'C.L. Road',
    phone: '+91 98422 33450',
    whatsapp: '919842233450',
    email: 'subramani.advvnb@gmail.com',
    openingHours: 'Mon - Sat: 9:30 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.7,
    reviewCount: 26,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹500 / consultation',
    establishedYear: 2008,
    specialties: ['SARFAESI Act Defense', 'DRT Appeals', 'Cheque Bounce 138 Cases'],
    services: [
      { name: 'Bank SARFAESI Auction Injunction', description: 'Filing stay petitions against bank possession notices in DRT.', priceEstimate: 'Case based' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Can bank auction be stopped under SARFAESI notice?', answer: 'Yes, if proper procedure is violated or if an appeal is filed in DRT before auction date.' }
    ],
    googleMapQuery: 'C.L. Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 710,
    whatsappClicks: 130,
    leadsCount: 22
  },
  {
    id: 'law-8',
    slug: 'advocate-syed-aslam-consumer-and-civil',
    name: 'Advocate J. Syed Aslam Consumer & Civil Forum',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Consumer Protection Complaints, Insurance Claims & Civil Contracts',
    description: 'Assisting citizens in filing consumer protection court cases against defective goods, insurance claim rejections, medical negligence, and builder deficiency services.',
    logo: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Bus Stand, Ambur Road, Vaniyambadi',
    area: 'Ambur Road',
    phone: '+91 97890 99120',
    whatsapp: '919789099120',
    email: 'syedaslam.law@gmail.com',
    openingHours: 'Mon - Sat: 10:00 AM - 7:30 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 19,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹400 / consultation',
    establishedYear: 2014,
    specialties: ['Consumer Court Cases', 'Insurance Claim Recovery', 'Rental Dispute'],
    services: [
      { name: 'Consumer Forum Petition Filing', description: 'Filing claim petitions before District Consumer Disputes Redressal Commission.', priceEstimate: '₹2,500' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'What is the timeframe for filing consumer court case?', answer: 'Within 2 years from the date of cause of action or claim rejection.' }
    ],
    googleMapQuery: 'Ambur Road, Vaniyambadi, Tamil Nadu',
    viewsCount: 580,
    whatsappClicks: 95,
    leadsCount: 16
  },
  {
    id: 'law-9',
    slug: 'advocate-jayakumar-matrimonial-and-civil',
    name: 'Advocate R. Jayakumar Matrimonial & Property Law',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Mutual Consent Divorce, Maintenance Claims & Child Custody',
    description: 'Handling family court matters, mutual consent divorce petitions, maintenance claims under Section 125 CrPC, child custody, and domestic violence law protection.',
    logo: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format&fit=crop&q=80',
    address: 'Near Old Bus Stand, Fort Area, Vaniyambadi',
    area: 'Fort Area',
    phone: '+91 94431 88900',
    whatsapp: '919443188900',
    email: 'jayakumar.lawvnb@gmail.com',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM',
    openNowStatus: true,
    rating: 4.9,
    reviewCount: 24,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹500 / consultation',
    establishedYear: 2009,
    specialties: ['Mutual Divorce', 'Maintenance Case 125 CrPC', 'Child Custody Petitions'],
    services: [
      { name: 'Mutual Consent Divorce Filing', description: 'End-to-end court process for mutual divorce within minimum time frame.', priceEstimate: 'Package' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'How long does mutual consent divorce take in Tamil Nadu?', answer: 'Usually 6 months, but cooling period can be waived upon court discretion in suitable cases.' }
    ],
    googleMapQuery: 'Fort Area, Vaniyambadi, Tamil Nadu',
    viewsCount: 680,
    whatsappClicks: 120,
    leadsCount: 20
  },
  {
    id: 'law-10',
    slug: 'advocate-anandhan-document-and-notary',
    name: 'Advocate V. Anandhan Notary Public & Document Assister',
    category: 'Lawyers & Advocates',
    categoryId: 'lawyers',
    tagline: 'Govt Authorized Notary Public, Power of Attorney & Affidavits',
    description: 'Government authorized Notary Public in Vaniyambadi. Providing official document attestation, power of attorney drafting, passport affidavits, name change declarations, and true copy notarizations.',
    logo: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=1000&auto=format&fit=crop&q=80',
    address: '22, Court Road, Opposite Magistrate Court, New Town, Vaniyambadi',
    area: 'New Town',
    phone: '+91 98425 22100',
    whatsapp: '919842522100',
    email: 'anandhan.notary@gmail.com',
    openingHours: 'Mon - Sat: 9:30 AM - 7:00 PM',
    openNowStatus: true,
    rating: 4.8,
    reviewCount: 45,
    verified: true,
    claimed: true,
    planTier: 'free',
    featured: false,
    consultationFee: '₹200 / notary attestation',
    establishedYear: 2004,
    specialties: ['Notary Attestation', 'Power of Attorney', 'Name Change Gazette Affidavit'],
    services: [
      { name: 'Notary Public Document Attestation', description: 'Official notary seal & signature for affidavits, agreement copies, and visa papers.', priceEstimate: '₹100 - ₹300' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80'
    ],
    faqs: [
      { question: 'Is prior appointment required for Notary seal?', answer: 'No appointment needed. You can visit directly during court working hours.' }
    ],
    googleMapQuery: 'Court Road, New Town, Vaniyambadi, Tamil Nadu',
    viewsCount: 1050,
    whatsappClicks: 230,
    leadsCount: 48
  }
];
