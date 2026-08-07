export type LanguageCode = 'en' | 'ta' | 'ur' | 'hi';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  homePageLabel: string;
  isRTL?: boolean;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    homePageLabel: 'English Home Page',
    isRTL: false
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    homePageLabel: 'தமிழ் முகப்பு (Tamil)',
    isRTL: false
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    homePageLabel: 'اردو ہوم پیج (Urdu)',
    isRTL: true
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिंदी',
    flag: '🇮🇳',
    homePageLabel: 'हिंदी होम पेज (Hindi)',
    isRTL: false
  }
];

export const CATEGORY_TRANSLATIONS: Record<string, Record<LanguageCode, { name: string; description: string }>> = {
  lawyers: {
    en: { name: 'Lawyers & Advocates', description: 'Civil law, property registration, criminal defense, sale deed assistance, and tax attorneys in Vaniyambadi.' },
    ta: { name: 'வழக்கறிஞர்கள் & அட்வகேட்கள்', description: 'வாணியம்பாடியில் சிவில் சட்டம், சொத்துப் பதிவு, கிரையப் பத்திரம் மற்றும் வரி வழக்கறிஞர்கள்.' },
    ur: { name: 'وکلاء اور ایڈووکیٹس', description: 'وانیمباڑی میں سول قانون، جائیداد کی رجسٹری، دستاویز نویس اور ٹیکس کے وکلاء۔' },
    hi: { name: 'वकील व अधिवक्ता', description: 'वाणियमबाड़ी में नागरिक कानून, संपत्ति पंजीकरण, बैनामा लेखक और कर वकील।' }
  },
  hospitals: {
    en: { name: 'Hospitals & Doctors', description: '24/7 emergency care, multispecialty hospitals, pediatricians, dental clinics, and diagnostic labs.' },
    ta: { name: 'மருத்துவமனைகள் & மருத்துவர்கள்', description: '24/7 அவசர சிகிச்சை, பன்நோக்கு மருத்துவமனைகள், குழந்தைகள் நல மருத்துவர்கள், பல் கிளினிக்குகள்.' },
    ur: { name: 'ہسپتال اور ڈاکٹرز', description: '24/7 ایمرجنسی دیکھ بھال، ملٹی اسپیارلٹی ہسپتال، بچوں کے ڈاکٹر اور ڈینٹل کلینک۔' },
    hi: { name: 'अस्पताल व डॉक्टर', description: '24/7 आपातकालीन देखभाल, मल्टीस्पेशलिटी अस्पताल, बाल रोग विशेषज्ञ और दंत क्लिनिक।' }
  },
  restaurants: {
    en: { name: 'Biryani & Restaurants', description: 'World-famous Vaniyambadi mutton biryani, authentic Mughlai cuisine, family dining, and sweets.' },
    ta: { name: 'பிரியாணி & உணவகங்கள்', description: 'உலகப் புகழ்பெற்ற வாணியம்பாடி மட்டன் பிரியாணி, பாரம்பரிய முகலாய உணவுகள், குடும்ப உணவகங்கள்.' },
    ur: { name: 'بریانی اور ریستوراں', description: 'دنیا بھر میں مشہور وانیمباڑی مٹن بریانی، مغلئی خواں، خاندانی ریستوراں اور مٹھائیاں۔' },
    hi: { name: 'बिरयानी व रेस्तरां', description: 'विश्व प्रसिद्ध वाणियमबाड़ी मटन बिरयानी, प्रामाणिक मुग़लई व्यंजन, पारिवारिक भोजन और मिठाइयां।' }
  },
  leather: {
    en: { name: 'Leather & Tanneries', description: 'Finished leather, genuine leather jackets, footwear, belts, bags, and tannery chemical suppliers.' },
    ta: { name: 'லெதர் தொழிற்கூடங்கள்', description: 'தோல் ஆடைகள், லெதர் ஜாக்கெட், காலணிகள், பெல்ட், பைகள் மற்றும் தோல் பதனிடும் தொழிற்கூடங்கள்.' },
    ur: { name: 'چمڑے کی صنعت اور ٹینریز', description: 'اصلی چمڑے کی جیکٹس، جوتے، بیلٹ، بیگز اور ٹینری کیمیکل سپلائرز۔' },
    hi: { name: 'लेदर व टैनरी', description: 'असली लेदर जैकेट, जूते, बेल्ट, बैग और टैनरी केमिकल आपूर्तिकर्ता।' }
  },
  ca: {
    en: { name: 'CA & Tax Consultants', description: 'Chartered accountants, GST registration, income tax filing, accounting services, and audit firms.' },
    ta: { name: 'தணிக்கையாளர்கள் & ஜிஎஸ்டி ஆலோசகர்கள்', description: 'சார்ட்டர்ட் அக்கவுண்டன்ட்கள், ஜிஎஸ்டி பதிவு, வருமான வரி தாக்கல் மற்றும் கணக்கு சேவைகள்.' },
    ur: { name: 'سی اے اور ٹیکس مشاورت', description: 'چارٹرڈ اکاؤنٹنٹس، جی ایس ٹی رجسٹریشن، انکم ٹیکس فائلنگ اور آڈٹ فارمز۔' },
    hi: { name: 'सीए व टैक्स सलाहकार', description: 'चार्टर्ड अकाउंटेंट, जीएसटी पंजीकरण, आयकर रिटर्न दाखिल करना और लेखा परीक्षा।' }
  },
  'document-writers': {
    en: { name: 'Document Writers', description: 'Sub-registrar office assistants, land deed writers, power of attorney, stamp paper vendors, affidavit drafters.' },
    ta: { name: 'ஆவண எழுத்தாளர்கள்', description: 'சார் பதிவாளர் அலுவலக உதவியாளர்கள், பத்திர எழுத்தாளர்கள், பவர் ஆஃப் அட்டர்னி, முத்திரைத்தாள் விற்பனையாளர்கள்.' },
    ur: { name: 'دستاویز نویس', description: 'سب رجسٹرار آفس معاونین، زمین کی رجسٹری لکھنے والے، اسٹامپ پیپر فروش اور حلف نامہ۔' },
    hi: { name: 'दस्तावेज़ लेखक', description: 'सब-रजिस्ट्रार कार्यालय सहायक, भूमि बैनामा लेखक, पावर ऑफ अटॉर्नी और स्टाम्प पेपर विक्रेता।' }
  },
  schools: {
    en: { name: 'Schools & Colleges', description: 'State board, Matriculation, CBSE schools, Islamiah College, arts, science, and engineering institutes.' },
    ta: { name: 'பள்ளிகள் & கல்லூரிகள்', description: 'ஸ்டேட் போர்ட், மெட்ரிகுலேஷன், சிபிஎஸ்இ பள்ளிகள், இஸ்லாமியா கல்லூரி மற்றும் கல்வி நிறுவனங்கள்.' },
    ur: { name: 'اسکول اور کالج', description: 'اسٹیٹ بورڈ، میٹرک، سی بی ایس ای اسکول، اسلامیہ کالج اور آرٹس اینڈ سائنس۔' },
    hi: { name: 'स्कूल व कॉलेज', description: 'स्टेट बोर्ड, मैट्रिक, सीबीएसई स्कूल, इस्लामिया कॉलेज और कला, विज्ञान व इंजीनियरिंग संस्थान।' }
  },
  textiles: {
    en: { name: 'Textiles & Sarees', description: 'Silk sarees, ready-made dress materials, wedding wear, suiting, shirting, and abaya collections in Muslimpur.' },
    ta: { name: 'ஜவுளி & பட்டுச் சேலைகள்', description: 'பட்டுச் சேலைகள், ஆயத்த ஆடைகள், திருமண ஆடைகள் மற்றும் முஸ்லிம்பூர் அபாயா கடைகள்.' },
    ur: { name: 'کپڑے اور ساڑیاں', description: 'سلک ساڑیاں، ریڈی میڈ کپڑے، شادی بیاہ کا سامان اور مسلم پور عبایہ کلیکشن۔' },
    hi: { name: 'कपड़ा व साड़ी', description: 'सिल्क साड़ियां, रेडीमेड कपड़े, शादी के परिधान और मुस्लिमपुर अबाया संग्रह।' }
  },
  electronics: {
    en: { name: 'Electronics & Mobiles', description: 'Smartphone sales & repair, laptops, home appliances, AC dealers, and smart TV showrooms on C.L. Road.' },
    ta: { name: 'எலக்ட்ரானிக்ஸ் & மொபைல்', description: 'ஸ்மார்ட்போன் விற்பனை மற்றும் பழுதுபார்ப்பு, மடிக்கணினிகள், வீட்டு உபயோகப் பொருட்கள், சி.எல். ரோடு கடைகள்.' },
    ur: { name: 'الیکٹرانکس اور موبائلز', description: 'اسمارٹ فونز اور لیپ ٹاپ کی فروخت و مرمت، ہوم اپلائنسز اور سی ایل روڈ شو رومز۔' },
    hi: { name: 'इलेक्ट्रॉनिक्स व मोबाइल', description: 'स्मार्टफोन और लैपटॉप बिक्री व मरम्मत, घरेलू उपकरण और सी.एल. रोड शोरूम।' }
  },
  'real-estate': {
    en: { name: 'Real Estate & Property', description: 'Residential plots, commercial shops for rent, tannery lands, houses for sale across New Town & Khaderpet.' },
    ta: { name: 'ரியல் எஸ்டேட் & நிலங்கள்', description: 'வீட்டு மனைகள், வாடகை கடைகள், தோல் தொழிற்கூட நிலங்கள் மற்றும் விற்பனைக்குரிய வீடுகள்.' },
    ur: { name: 'رئیل اسٹیٹ اور پراپرٹی', description: 'رہائشی پلاٹ، تجارتی دکانیں، کرائے کے مکانات اور نیو ٹاؤن و قادر پیٹ میں زمینیں۔' },
    hi: { name: 'रियल एस्टेट व संपत्ति', description: 'आवासीय भूखंड, किराये की व्यावसायिक दुकानें, न्यू टाउन और खादरपेट में घर व जमीन।' }
  },
  automobiles: {
    en: { name: 'Auto & Mechanics', description: 'Two-wheeler sales, car service centers, auto spare parts, battery dealers, and denting-painting workshops.' },
    ta: { name: 'ஆட்டோ & மெக்கானிக்', description: 'இருசக்கர வாகன விற்பனை, கார் சர்வீஸ் மையங்கள், ஆட்டோ ஸ்பேர் பார்ட்ஸ் மற்றும் பட்டறைகள்.' },
    ur: { name: 'آٹو اور مکینک', description: 'بائیک اور کار سروس سینٹرز، سپیئر پارٹس اور آٹو بیٹری ڈیلرز۔' },
    hi: { name: 'ऑटो व मैकेनिक', description: 'दोपहिया बिक्री, कार सर्विस सेंटर, ऑटो स्पेयर पार्ट्स और वर्कशॉप।' }
  },
  fitness: {
    en: { name: 'Fitness & Gyms', description: 'Unisex gyms, personal trainers, karate centers, yoga classes, and sports nutrition shops.' },
    ta: { name: 'ஜிம் & உடற்பயிற்சி', description: 'உடற்பயிற்சி மையங்கள், தனிப்பட்ட பயிற்சியாளர்கள், கராத்தே வகுப்புகள் மற்றும் விளையாட்டு சத்துணவு கடைகள்.' },
    ur: { name: 'فٹنس اور جِم', description: 'جم، پرسنل ٹرینرز، کراٹے کلاسز اور اسپورٹس نیوٹریشن۔' },
    hi: { name: 'फिटनेस व जिम', description: 'जिम, व्यक्तिगत ट्रेनर, कराटे कक्षाएं और खेल पोषण की दुकानें।' }
  },
  gyms: {
    en: { name: 'Fitness & Gyms', description: 'Unisex gyms, personal trainers, karate centers, yoga classes, and sports nutrition shops.' },
    ta: { name: 'ஜிம் & உடற்பயிற்சி', description: 'உடற்பயிற்சி மையங்கள், தனிப்பட்ட பயிற்சியாளர்கள், கராத்தே வகுப்புகள் மற்றும் விளையாட்டு சத்துணவு கடைகள்.' },
    ur: { name: 'فٹنس اور جِم', description: 'جم، پرسنل ٹرینرز، کراٹے کلاسز اور اسپورٹس نیوٹریشن۔' },
    hi: { name: 'फिटनेस व जिम', description: 'जिम, व्यक्तिगत ट्रेनर, कराटे कक्षाएं और खेल पोषण की दुकानें।' }
  },
  'bike-car-service': {
    en: { name: 'Bike & Car Service', description: 'Multi-brand car wash, wheel alignment, motorcycle mechanics, spare parts dealers, and roadside assistance.' },
    ta: { name: 'பைக் & கார் சர்வீஸ்', description: 'இருசக்கர வாகன மெக்கானிக், கார் சர்வீஸ் மையங்கள், ஆட்டோ ஸ்பேர் பார்ட்ஸ் மற்றும் பட்டறைகள்.' },
    ur: { name: 'بائیک اور کار سروس', description: 'بائیک اور کار سروس سینٹرز، سپیئر پارٹس اور آٹو بیٹری ڈیلرز۔' },
    hi: { name: 'बाइक व कार सर्विस', description: 'दोपहिया और कार सर्विस सेंटर, स्पेयर पार्ट्स और वर्कशॉप।' }
  },
  'electricians-plumbers': {
    en: { name: 'Electricians & Plumbers', description: 'Licensed home electricians, pipe plumbers, motor rewinding, short circuit repair, and doorstep sanitary fittings.' },
    ta: { name: 'எலக்ட்ரீஷியன்கள் & பிளம்பர்கள்', description: 'வீட்டு எலக்ட்ரீஷியன், குழாய் பிளம்பிங், மோட்டார் ரீவைண்டிங், ஷார்ட் சர்க்யூட் சரிசெய்தல் மற்றும் வீட்டுச் சேவைகள்.' },
    ur: { name: 'الیکٹریشن اور پلمبر', description: 'گھر کے الیکٹریشن، پائپ پلمبر، موٹر ری وائنڈنگ، شارٹ سرکٹ اور ڈور اسٹیپ خدمات۔' },
    hi: { name: 'इलेक्ट्रीशियन व प्लंबर', description: 'लाइसेंस प्राप्त इलेक्ट्रीशियन, पाइप प्लंबर, मोटर वाइंडिंग, शॉर्ट सर्किट मरम्मत और होम सर्विस।' }
  },
  technicians: {
    en: { name: 'Appliance & AC Technicians', description: 'AC jet foam wash, gas refilling, washing machine, double door fridge, smart TV backlight repair, and inverter technicians.' },
    ta: { name: 'ஏசி & ஹோம் அப்ளையன்ஸ் டெக்னீஷியன்', description: 'ஏசி வாஷ், கேஸ் நிரப்புதல், வாஷிங் மெஷின், ஃபிரிட்ஜ், ஸ்மார்ட் டிவி மற்றும் இன்வர்ட்டர் டெக்னீஷியன்கள்.' },
    ur: { name: 'اے سی اور ہوم اپلائنس تکنیشین', description: 'اے سی جیٹ واش، گیس ری فلنگ، واشنگ مشین، فریج اور ٹی وی کی مرمت کے ماہرین۔' },
    hi: { name: 'एसी व उपकरण तकनीशियन', description: 'एसी जेट वॉश, गैस रीफिलिंग, वाशिंग मशीन, फ्रिज, स्मार्ट टीवी और इन्वर्टर तकनीशियन।' }
  },
  consultants: {
    en: { name: 'Consultants & Experts', description: 'Civil engineering building plan consultants, overseas study & visa guidance, business ISO auditors, and IT/software consultants.' },
    ta: { name: 'ஆலோசகர்கள் & வல்லுநர்கள்', description: 'சிவில் கட்டட வரைபட ஆலோசகர்கள், வெளிநாட்டு விசா வழிகாட்டி, ISO தணிக்கையாளர்கள் மற்றும் IT மென்பொருள் ஆலோசகர்கள்.' },
    ur: { name: 'مشیر اور ماہرین', description: 'بلڈنگ پلان کنسلٹنٹس، بیرون ملک ویزا مشاورت، آئی ایس او اور آئی ٹی کنسلٹنٹس۔' },
    hi: { name: 'सलाहकार व विशेषज्ञ', description: 'भवन योजना सलाहकार, विदेशी वीजा मार्गदर्शन, व्यवसाय आईएसओ और आईटी सलाहकार।' }
  },
  supermarkets: {
    en: { name: 'Supermarkets & Groceries', description: 'Fresh vegetables, organic staples, hypermarkets, monthly grocery packs, and home delivery.' },
    ta: { name: 'சூப்பர் மார்க்கெட் & மளிகை', description: 'காய்கறிகள், மளிகைப் பொருட்கள், ஹைப்பர் மார்க்கெட் மற்றும் வீட்டிற்கே டெலிவரி.' },
    ur: { name: 'سوپر مارکیٹ اور گروسری', description: 'تازہ سبزیاں، مغلئی اور ماہانہ گروسری کا سامان اور ہوم ڈیلیوری۔' },
    hi: { name: 'सुपरमार्केट व किराना', description: 'ताजा सब्जियां, घरेलू राशन, सुपरमार्केट और होम डिलीवरी।' }
  },
  medicals: {
    en: { name: 'Medicals & Pharmacies', description: '24/7 pharmacies, night medicals, pediatricians, gynecologists, surgical supplies, and doctor clinics near Tahsildar office.' },
    ta: { name: 'மருந்தகங்கள் & மருத்துவர்கள்', description: '24/7 மெடிக்கல்ஸ், குழந்தை நல மருத்துவர்கள், மகப்பேறு மருத்துவர்கள் மற்றும் மருத்துவக் கிளினிக்குகள்.' },
    ur: { name: 'میڈیکلز اور ڈاکٹرز', description: '24 گھنٹے میڈیکل، بچوں کے ڈاکٹر، لیڈی ڈاکٹر اور کلینک۔' },
    hi: { name: 'मेडिकल व डॉक्टर', description: '24/7 मेडिकल स्टोर, बाल रोग विशेषज्ञ, महिला रोग विशेषज्ञ और क्लीनिक।' }
  },
  esevai: {
    en: { name: 'e-Sevai & Digital Services', description: 'Government e-Sevai Maiyam at Taluk office, Patta Chitta, Community/Income certificate, Aadhaar/PAN, Passport, and CSC online center.' },
    ta: { name: 'இ-சேவை மையம் & டிஜிட்டல் சேவைகள்', description: 'தாலுகா அலுவலக அரசு இ-சேவை மையம், பட்டா சிட்டா, சாதி/வருமான சான்றிதழ் மற்றும் ஆதார்/பான் சேவைகள்.' },
    ur: { name: 'ای سیوا مرکز اور ڈیجیٹل خدمات', description: 'تعلقہ آفس سرکاری ای سیوا سینٹر، پٹہ چٹا، ذات کا سرٹیفکیٹ اور پین کارڈ۔' },
    hi: { name: 'ई-सेवा केंद्र व डिजिटल सेवाएं', description: 'तहसीलदार कार्यालय ई-सेवा केंद्र, पट्टा चित्ता, जाति/आय प्रमाण पत्र और आधार/पैन सेवाएं।' }
  },
  hardwares: {
    en: { name: 'Hardwares, Sanitaryware & Paints', description: 'Paints tinting store, power tools, Parryware sanitaryware, CPVC pipes, water tanks, and building hardwares near Taluk office.' },
    ta: { name: 'ஹார்டுவேர் & பெயிண்ட்ஸ்', description: 'பெயிண்ட்ஸ் கடைகள், சிபிவிசி பைப், பாரிவேர் சானிட்டரிவேர், வாட்டர் டேங்க் மற்றும் கட்டுமான ஹார்டுவேர்.' },
    ur: { name: 'ہارڈ ویئر اور پینٹس', description: 'پینٹ شاپ، پائپ، سینیٹری ویئر اور بلڈنگ ہارڈ ویئر۔' },
    hi: { name: 'हार्डवेयर व पेंट्स', description: 'पेंट स्टोर, पावर टूल्स, सेनेटरीवेयर, पाइप और बिल्डिंग हार्डवेयर।' }
  }
};

export const AREA_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  'All Areas': { en: 'All Areas', ta: 'அனைத்து பகுதிகள்', ur: 'تمام علاقے', hi: 'सभी क्षेत्र' },
  'Khaderpet': { en: 'Khaderpet', ta: 'காதர்பேட்டை', ur: 'قادر پیٹ', hi: 'खादरपेट' },
  'C.L. Road': { en: 'C.L. Road', ta: 'சி.எல். ரோடு', ur: 'سی ایل روڈ', hi: 'सी.एल. रोड' },
  'New Town': { en: 'New Town', ta: 'நியூ டவுன்', ur: 'نیو ٹاؤن', hi: 'न्यू टाउन' },
  'Ambur Road': { en: 'Ambur Road', ta: 'ஆம்பூர் ரோடு', ur: 'امبور روڈ', hi: 'आंबूर रोड' },
  'Muslimpur': { en: 'Muslimpur', ta: 'முஸ்லிம்பூர்', ur: 'مسلم پور', hi: 'मुस्लिमपुर' },
  'Trunk Road': { en: 'Trunk Road', ta: 'ட்ங்க் ரோடு', ur: 'ٹرنک روڈ', hi: 'ट्रंक रोड' },
  'Fort Area': { en: 'Fort Area', ta: 'கோட்டை பகுதி', ur: 'قلعہ کا علاقہ', hi: 'किला क्षेत्र' },
  'Mosque Street': { en: 'Mosque Street', ta: 'மசூதி தெரு', ur: 'مسجد اسٹریٹ', hi: 'मस्जिद स्ट्रीट' },
  'Valayampattu': { en: 'Valayampattu', ta: 'வலையாம்பட்டு', ur: 'ولیا مپٹو', hi: 'वलैयामपट्टू' }
};

export const UI_TRANSLATIONS: Record<string, Record<LanguageCode, string>> = {
  // Navigation
  nav_directory: { en: 'Directory', ta: 'டயரக்டரி', ur: 'ڈائریکٹری', hi: 'निर्देशिका' },
  nav_jobsEvents: { en: 'Jobs & Events', ta: 'வேலைகள் & நிகழ்வுகள்', ur: 'ملازمتیں اور تقاریب', hi: 'नौकरियां व कार्यक्रम' },
  nav_askAI: { en: 'Ask AI Hub', ta: 'ஏஐ உதவி மையம்', ur: 'AI اسسٹنٹ', hi: 'AI गाइड' },
  nav_saved: { en: 'Saved', ta: 'சேமிக்கப்பட்டவை', ur: 'محفوظ شدہ', hi: 'सहेजे गए' },
  nav_dashboard: { en: 'Dashboard', ta: 'டாஷ்போர்டு', ur: 'ڈیش بورڈ', hi: 'डैशबोर्ड' },
  nav_addBusiness: { en: 'Add Business +', ta: 'வணிகம் சேர் +', ur: 'کاروبار شامل کریں +', hi: 'व्यापार जोड़ें +' },
  nav_areaLabel: { en: 'Area:', ta: 'பகுதி:', ur: 'علاقہ:', hi: 'क्षेत्र:' },
  nav_hyperlocal: { en: 'Hyperlocal Discovery Platform', ta: 'வாணியம்பாடி உள்ளூர் தேடல் தளம்', ur: 'وانیمباڑی کی مقامی ڈائریکٹری', hi: 'वाणियमबाड़ी स्थानीय डायरेक्टरी प्लेटफ़ॉर्म' },
  
  // Multi Language Switcher Bar
  home_lang_switcher_title: { en: 'Select Language Home Page:', ta: 'மொழி முகப்பைத் தேர்ந்தெடுக்கவும்:', ur: 'زبان کا ہوم پیج منتخب کریں:', hi: 'भाषा होम पेज चुनें:' },
  home_english: { en: 'English Home Page', ta: 'English Home Page', ur: 'English Home Page', hi: 'English Home Page' },
  home_tamil: { en: 'தமிழ் முகப்பு (Tamil)', ta: 'தமிழ் முகப்பு (Tamil)', ur: 'தமிழ் முகப்பு (Tamil)', hi: 'தமிழ் முகப்பு (Tamil)' },
  home_urdu: { en: 'اردو ہوم پیج (Urdu)', ta: 'اردو ہوم پیج (Urdu)', ur: 'اردو ہوم پیج (Urdu)', hi: 'اردو ہوم پیج (Urdu)' },
  home_hindi: { en: 'हिंदी होम पेज (Hindi)', ta: 'हिंदी होम पेज (Hindi)', ur: 'हिंदी होम पेज (Hindi)', hi: 'हिंदी होम पेज (Hindi)' },

  // Hero Section
  hero_badge: {
    en: 'Vaniyambadi’s Premier Digital Directory & Business Network',
    ta: 'வாணியம்பாடியின் முதன்மை டிஜிட்டல் வணிகத் தேடல் முகப்பு',
    ur: 'وانیمباڑی کی پہلی ڈیجیٹل ڈائریکٹری اور بزنس نیٹ ورک',
    hi: 'वाणियमबाड़ी की प्रमुख डिजिटल डायरेक्टरी व बिजनेस नेटवर्क'
  },
  hero_title_p1: { en: 'Discover Everything in', ta: 'வாணியம்பாடியில் அனைத்தையும் கண்டறியுங்கள்', ur: 'وانیمباڑی میں سب کچھ تلاش کریں', hi: 'वाणियमबाड़ी में सब कुछ खोजें' },
  hero_title_town: { en: 'Vaniyambadi', ta: 'வாணியம்பாடி', ur: 'وانیمباڑی', hi: 'वाणियमबाड़ी' },
  hero_subtitle: {
    en: 'Search local lawyers, doctors, biryani joints, leather tanneries, CA consultants, document writers & institutions across Khaderpet, C.L. Road & New Town.',
    ta: 'காதர்பேட்டை, சி.எல். ரோடு, நியூ டவுன் முழுவதும் வழக்கறிஞர்கள், மருத்துவர்கள், பிரியாணி கடைகள், லெதர் தொழிற்கூடங்கள், தணிக்கையாளர்களைத் தேடுங்கள்.',
    ur: 'قادر پیٹ، سی ایل روڈ اور نیو ٹاؤن میں وکلاء، ڈاکٹرز، بریانی، لیدر فیکٹریوں اور سی اے کو تلاش کریں۔',
    hi: 'खादरपेट, सी.एल. रोड और न्यू टाउन में वकील, डॉक्टर, बिरयानी, लेदर टैनरी, सीए सलाहकार खोजें।'
  },
  hero_search_placeholder: {
    en: 'Search advocate, biryani, leather, GST, hospital...',
    ta: 'வழக்கறிஞர், பிரியாணி, லெதர், ஜிஎஸ்டி, மருத்துவமனை தேடவும்...',
    ur: 'ایڈووکیٹ، بریانی، لیدر، جی ایس ٹی، ہسپتال تلاش کریں...',
    hi: 'वकील, बिरयानी, लेदर, जीएसटी, अस्पताल खोजें...'
  },
  hero_ask_ai_btn: { en: 'Ask AI Guide', ta: 'ஏஐ வழிகாட்டி', ur: 'AI گائیڈ سے پوچھیں', hi: 'AI गाइड से पूछें' },
  hero_popular_search: { en: 'Popular Search:', ta: 'பிரபலமான தேடல்கள்:', ur: 'مقبول تلاش:', hi: 'लोकप्रिय खोज:' },
  hero_stat_listings: { en: 'Local Listings', ta: 'உள்ளூர் வணிகங்கள்', ur: 'مقامی فہرستیں', hi: 'स्थानीय लिस्टिंग' },
  hero_stat_verified: { en: '100% Verified Profiles', ta: '100% சரிபார்க்கப்பட்டது', ur: '100% تصدیق شدہ', hi: '100% सत्यापित प्रोफ़ाइल' },
  hero_stat_whatsapp: { en: 'Direct WhatsApp Leads', ta: 'நேரடி வாட்ஸ்அப் இணைப்பு', ur: 'براہ راست واٹس ایپ رابطے', hi: 'सीधा व्हाट्सएप लीड्स' },
  hero_stat_gemini: { en: 'Gemini AI Assistant', ta: 'ஜெமினி ஏஐ உதவியாளர்', ur: 'جیمنی AI اسسٹنٹ', hi: 'Gemini AI असिस्टेंट' },

  // Category Grid
  cat_heading: { en: 'Popular Business Categories', ta: 'பிரபலமான வணிகப் பிரிவுகள்', ur: 'مقبول تجارتی زمرے', hi: 'लोकप्रिय व्यापार श्रेणियां' },
  cat_subheading: { en: 'Browse verified local services and shops across Vaniyambadi', ta: 'வாணியம்பாடியில் சரிபார்க்கப்பட்ட சேவைகள் மற்றும் கடைகளை உலாவவும்', ur: 'وانیمباڑی کی تصدیق شدہ دکانیں اور خدمات دیکھیں', hi: 'वाणियमबाड़ी में सत्यापित स्थानीय सेवाओं और दुकानों को खोजें' },
  cat_clear: { en: 'Clear Selected Category', ta: 'தேர்ந்தெடுக்கப்பட்ட பிரிவை நீக்கு', ur: 'انتخاب منسوخ کریں', hi: 'चयनित श्रेणी हटाएं' },

  // Business Card
  card_pro_site: { en: 'Pro Site', ta: 'புரோ தளம்', ur: 'پرو سائٹ', hi: 'प्रो साइट' },
  card_featured: { en: 'Featured', ta: 'சிறப்பு', ur: 'نمایاں', hi: 'विशेष' },
  card_verified: { en: 'Verified', ta: 'சரிபார்க்கப்பட்டது', ur: 'تصدیق شدہ', hi: 'सत्यापित' },
  card_open_now: { en: 'Open Now', ta: 'இப்போது திறந்துள்ளது', ur: 'ابھی کھلا ہے', hi: 'अभी खुला है' },
  card_closed: { en: 'Closed', ta: 'மூடப்பட்டுள்ளது', ur: 'بند ہے', hi: 'बंद है' },
  card_call: { en: 'Call', ta: 'அழைக்க', ur: 'کال کریں', hi: 'कॉल करें' },
  card_whatsapp: { en: 'WhatsApp', ta: 'வாட்ஸ்அப்', ur: 'واٹس ایپ', hi: 'व्हाट्सएप' },
  card_ask_ai: { en: 'Ask AI', ta: 'ஏஐ அவர்களிடம் கேட்க', ur: 'AI سے پوچھیں', hi: 'AI से पूछें' },
  card_mini_site: { en: 'Mini-Site →', ta: 'மினி-தளம் →', ur: 'مینی سائٹ ←', hi: 'मिनी-साइट →' },
  card_view_profile: { en: 'View Profile →', ta: 'விவரத்தைக் காண்க →', ur: 'پروفائل دیکھیں ←', hi: 'प्रोफ़ाइल देखें →' },
  card_reviews: { en: 'reviews', ta: 'மதிப்புரைகள்', ur: 'جائزے', hi: 'समीक्षाएं' },

  // Filter Bar
  filter_verified_title: { en: 'Verified Local Businesses', ta: 'சரிபார்க்கப்பட்ட உள்ளூர் வணிகங்கள்', ur: 'تصدیق شدہ مقامی فہرستیں', hi: 'सत्यापित स्थानीय व्यापार' },
  filter_saved_title: { en: 'Your Saved Listings', ta: 'நீங்கள் சேமித்த வணிகங்கள்', ur: 'آپ کی محفوظ شدہ فہرستیں', hi: 'सहेजी गई लिस्टिंग' },
  filter_all_tiers: { en: 'All Tiers', ta: 'அனைத்து திட்டங்களும்', ur: 'تمام منصوبے', hi: 'सभी प्लान' },
  filter_featured_only: { en: 'Featured Only (₹499)', ta: 'சிறப்பு வணிகங்கள் (₹499)', ur: 'صرف نمایاں (₹499)', hi: 'केवल विशेष (₹499)' },
  filter_pro_only: { en: 'Pro Mini-Websites (₹999)', ta: 'புரோ மினி-இணையதளங்கள் (₹999)', ur: 'پرو مینی ویب سائٹس (₹999)', hi: 'प्रो मिनी-वेबसाइट (₹999)' },
  filter_sort_featured: { en: 'Featured First', ta: 'சிறப்பு வணிகங்கள் முதலில்', ur: 'نمایاں پہلے', hi: 'विशेष पहले' },
  filter_sort_rating: { en: 'Highest Rating', ta: 'அதிக ரேட்டிங்', ur: 'اعلیٰ ریٹنگ', hi: 'उच्चतम रेटिंग' },
  filter_sort_reviews: { en: 'Most Reviewed', ta: 'அதிக மதிப்புரைகள்', ur: 'زیادہ جائزے', hi: 'सर्वाधिक समीक्षाएं' },
  filter_clear_all: { en: 'Clear All Filters', ta: 'அனைத்து வடிகட்டிகளையும் நீக்கு', ur: 'تمام فلٹرز صاف کریں', hi: 'सभी फ़िल्टर साफ़ करें' },
  filter_no_results: { en: 'No businesses found matching your filter', ta: 'உங்கள் தேடலுக்குரிய வணிகங்கள் எதுவும் கிடைக்கவில்லை', ur: 'آپ کی تلاش کے مطابق کوئی نتائج نہیں ملے', hi: 'कोई परिणाम नहीं मिला' },

  // Jobs and Events View
  jobs_title: { en: 'Local Jobs, Events & Announcements', ta: 'உள்ளூர் வேலைவாய்ப்புகள் & நிகழ்வுகள்', ur: 'مقامی ملازمتیں، تقاریب اور اعلانات', hi: 'स्थानीय नौकरियां, कार्यक्रम व घोषणाएं' },
  jobs_subtitle: { en: 'Discover employment opportunities, sales events, and medical camps in Vaniyambadi', ta: 'வாணியம்பாடியில் வேலைவாய்ப்புகள் மற்றும் சிறப்பு மருத்துவ முகாம்களைக் கண்டறியவும்', ur: 'وانیمباڑی میں روزگار کے مواقع اور طبی کیمپ دریافت کریں', hi: 'वाणियमबाड़ी में रोजगार के अवसर और शिविर खोजें' },
  jobs_all: { en: 'All Announcements', ta: 'அனைத்து அறிவிப்புகள்', ur: 'تمام اعلانات', hi: 'सभी घोषणाएं' },
  jobs_hiring: { en: 'Jobs & Hiring', ta: 'வேலைவாய்ப்புகள்', ur: 'ملازمتیں', hi: 'नौकरियां' },
  jobs_events: { en: 'Events & Camps', ta: 'நிகழ்வுகள் & முகாம்கள்', ur: 'تقاریب اور کیمپ', hi: 'कार्यक्रम व शिविर' },
  jobs_post_cta: { en: '+ Post Job or Event (Free)', ta: '+ புதிய வேலை/நிகழ்வு சேர்', ur: '+ نئی ملازمت یا تقریب شامل کریں', hi: '+ नई नौकरी या कार्यक्रम जोड़ें' },
  jobs_apply_whatsapp: { en: 'Apply via WhatsApp', ta: 'வாட்ஸ்அப்பில் விண்ணப்பிக்க', ur: 'واٹس ایپ کے ذریعے اپلائی کریں', hi: 'व्हाट्सएप द्वारा आवेदन करें' },

  // Town AI Assistant Modal
  ai_modal_title: { en: 'Vaniyambadi Town AI Guide', ta: 'வாணியம்பாடி ஏஐ நகர வழிகாட்டி', ur: 'وانیمباڑی AI ٹاؤن گائیڈ', hi: 'वाणियमबाड़ी AI टाउन गाइड' },
  ai_modal_badge: { en: 'Powered by Gemini AI', ta: 'ஜெமினி ஏஐ மூலம் இயங்குகிறது', ur: 'جیمنی AI سے لیس', hi: 'Gemini AI द्वारा संचालित' },
  ai_modal_placeholder: { en: 'Ask anything about Vaniyambadi (biryani, lawyers, tanneries, hospitals)...', ta: 'வாணியம்பாடி பற்றி எதையும் கேட்கலாம் (பிரியாணி, வழக்கறிஞர், லெதர், மருத்துவமனை)...', ur: 'وانیمباڑی کے بارے میں کچھ بھی پوچھیں (بریانی، وکلاء، ٹینری، ہسپتال)...', hi: 'वाणियमबाड़ी के बारे में कुछ भी पूछें (बिरयानी, वकील, लेदर, अस्पताल)...' },
  ai_modal_suggested: { en: 'Suggested Town Questions:', ta: 'பரிந்துரைக்கப்பட்ட கேள்விகள்:', ur: 'تجویز کردہ سوالات:', hi: 'सुझाए गए प्रश्न:' },
  ai_q1: { en: 'Where can I get authentic Vaniyambadi mutton biryani made in firewood?', ta: 'வாணியம்பாடியில் விறகடுப்பில் சமைக்கப்படும் சிறந்த மட்டன் பிரியாணி எங்கு கிடைக்கும்?', ur: 'لکڑی کی آگ پر پکی وانیمباڑی مٹن بریانی کہاں ملے گی؟', hi: 'लकड़ी की आंच पर बनी प्रामाणिक वाणियमबाड़ी मटन बिरयानी कहां मिलेगी?' },
  ai_q2: { en: 'Recommend an experienced civil advocate for land sale deed in New Town.', ta: 'நியூ டவுனில் சொத்துப் பத்திரப் பதிவுக்கு அனுபவமுள்ள வழக்கறிஞரைப் பரிந்துரைக்கவும்.', ur: 'نیو ٹاؤن میں زمین کی رجسٹری کے لیے بہترین سول ایڈووکیٹ بتائیں۔', hi: 'न्यू टाउन में भूमि बैनामा पंजीकरण के लिए अनुभवी नागरिक वकील की सिफारिश करें।' },
  ai_q3: { en: 'Which tanneries in Khaderpet offer wholesale finished sheepskin leather?', ta: 'காதர்பேட்டையில் மொத்த லெதர் விற்பனை செய்யும் தொழிற்கூடங்கள் எவை?', ur: 'قادر پیٹ میں ہول سیل چمڑے کی ٹینریز کون سی ہیں؟', hi: 'खादरपेट में थोक लेदर की टैनरी कौन सी हैं?' },
  ai_q4: { en: 'Which is the nearest 24/7 hospital with emergency maternity care?', ta: 'அவசர மகப்பேறு சிகிச்சை அளிக்கும் 24 மணி நேர மருத்துவமனை எது?', ur: 'ایمرجنسی زچگی کی دیکھ بھال کے لیے قریب ترین 24/7 ہسپتال کون سا ہے؟', hi: '24/7 आपातकालीन प्रसूति देखभाल वाला निकटतम अस्पताल कौन सा है?' },

  // Add Business Modal
  add_title: { en: 'Add Business to Vaniyambadi360', ta: 'வாணியம்பாடி360 இல் வணிகத்தை சேர்க்கவும்', ur: 'وانیمباڑی 360 میں اپنا کاروبار شامل کریں', hi: 'वाणियमबाड़ी 360 में अपना व्यापार जोड़ें' },
  add_subtitle: { en: 'Reach thousands of local buyers, clients, and students instantly.', ta: 'ஆயிரக்கணக்கான உள்ளூர் வாடிக்கையாளர்களை உடனடியாக அடையுங்கள்.', ur: 'ہزاروں مقامی خریداروں اور گاہکوں تک فوراً پہنچیں۔', hi: 'हजारों स्थानीय खरीदारों तक तुरंत पहुंचें।' },
  add_tier_free: { en: 'Free Plan (₹0)', ta: 'இலவச திட்டம் (₹0)', ur: 'مفت منصوبہ (₹0)', hi: 'फ्री प्लान (₹0)' },
  add_tier_premium: { en: 'Featured Badge (₹499/yr)', ta: 'சிறப்பு பேட்ஜ் (₹499/ஆண்டு)', ur: 'نمایاں بیچ (₹499/سال)', hi: 'विशेष बैच (₹499/वर्ष)' },
  add_tier_pro: { en: 'Pro Mini-Website (₹999/yr)', ta: 'புரோ மினி-இணையதளம் (₹999/ஆண்டு)', ur: 'پرو مینی ویب سائٹ (₹999/سال)', hi: 'प्रो मिनी-वेबसाइट (₹999/वर्ष)' },
  add_submit: { en: 'Publish Listing Now', ta: 'இப்போது வெளியிடவும்', ur: 'لسٹنگ شائع کریں', hi: 'लिस्टिंग प्रकाशित करें' },

  // Footer & SEO
  footer_mission: { en: 'Vaniyambadi’s official hyperlocal business discovery platform. Connecting local residents, students, and businesses across Khaderpet, C.L. Road, New Town, Ambur Road & Muslimpur.', ta: 'வாணியம்பாடியின் அதிகாரப்பூர்வ உள்ளூர் தேடல் தளம். காதர்பேட்டை, சி.எல். ரோடு, நியூ டவுன், ஆம்பூர் ரோடு மற்றும் முஸ்லிம்பூர் வணிகங்களை இணைக்கிறது.', ur: 'وانیمباڑی کا سرکاری مقامی سرچ پلیٹ فارم۔ قادر پیٹ، سی ایل روڈ، نیو ٹاؤن، امبور روڈ اور مسلم پور کو جوڑتا ہے۔', hi: 'वाणियमबाड़ी का आधिकारिक स्थानीय खोज प्लेटफ़ॉर्म। खादरपेट, सी.एल. रोड, न्यू टाउन और मुस्लिमपुर को जोड़ता है।' },
  seo_badge: { en: 'Hyperlocal SEO Identity Network', ta: 'உள்ளூர் தேடலியல் கட்டமைப்பு', ur: 'مقامی ایس ای او نیٹ ورک', hi: 'स्थानीय एसईओ नेटवर्क' },
  seo_heading: { en: 'Ranking Vaniyambadi Businesses for Thousands of Search Terms', ta: 'ஆயிரக்கணக்கான தேடல்களில் வாணியம்பாடி வணிகங்களை முதன்மைப்படுத்துகிறது', ur: 'ہزاروں تلاشوں کے لیے وانیمباڑی کے کاروباروں کو رینک کرنا', hi: 'हजारों खोज शब्दों के लिए वाणियमबाड़ी व्यवसायों को शीर्ष पर लाना' }
};

export function getUITranslation(key: string, lang: LanguageCode, fallback?: string): string {
  if (UI_TRANSLATIONS[key] && UI_TRANSLATIONS[key][lang]) {
    return UI_TRANSLATIONS[key][lang];
  }
  return fallback || key;
}

export function getCategoryTranslation(catId: string, lang: LanguageCode, defaultObj: { name: string; description: string }) {
  if (CATEGORY_TRANSLATIONS[catId] && CATEGORY_TRANSLATIONS[catId][lang]) {
    return CATEGORY_TRANSLATIONS[catId][lang];
  }
  return defaultObj;
}

export function getAreaTranslation(areaName: string, lang: LanguageCode): string {
  if (AREA_TRANSLATIONS[areaName] && AREA_TRANSLATIONS[areaName][lang]) {
    return AREA_TRANSLATIONS[areaName][lang];
  }
  return areaName;
}
