import { Treatment, Doctor, Review, AestheticService } from '../types';

export const CLINIC_INFO = {
  name: 'Veneto Dental Clinic',
  fullName: 'Veneto Dental & Aesthetic Clinic Dubai',
  tagline: 'Modern Comprehensive Dentistry & Smile Aesthetics',
  city: 'Dubai',
  country: 'United Arab Emirates',
  locationName: 'The Opus Tower, Business Bay',
  address: 'Level 14, The Opus Tower, Al A’amal St, Business Bay, Dubai, UAE',
  phone: '+971 4 429 8800',
  whatsapp: '+971 50 820 4400',
  whatsappDirectUrl: 'https://wa.me/971508204400?text=Hello%20Veneto%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20dental%20appointment.',
  email: 'appointments@venetoclinic.ae',
  dhaLicense: 'DHA License #7142981',
  tradeLicense: 'Trade License #1648203',
  hours: 'Monday – Saturday: 09:00 – 20:00 · Sunday: Emergency & Prior Appointments Only',
  parking: 'Complimentary Building Valet & Dedicated Patient Parking at The Opus',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'consultation-checkup',
    number: '01',
    name: 'Comprehensive Dental Examination & 3D X-Ray',
    tagline: 'Full diagnostic health check including low-radiation digital OPG and CBCT scan.',
    category: 'Preventive',
    startingPriceAED: 'AED 450 (Includes 3D Imaging)',
    overview: 'A meticulous oral health assessment covering teeth, gums, occlusion, and bone health. Includes digital photos, full mouth charting, cavity detection, and an itemized printed treatment plan.',
    whoItSuits: [
      'New patients seeking an accurate and honest dental health audit',
      'Anyone experiencing mild sensitivity, bleeding gums, or discomfort',
      'Patients needing second opinions on complex treatment plans'
    ],
    process: [
      { step: '01', title: 'Intraoral Digital Photography', description: 'High-definition optical scan of all teeth so you see exactly what the dentist sees.' },
      { step: '02', title: 'Low-Dose Digital Radiography', description: 'Panoramic and targeted digital X-rays to inspect tooth roots, bone levels, and interdental spaces.' },
      { step: '03', title: 'Periodontal & Cancer Screening', description: 'Gentle probe evaluation of gum pocket depth and oral soft tissue screening.' },
      { step: '04', title: 'Treatment Plan & Cost Breakdown', description: 'Clear written estimate with transparent AED pricing and insurance reimbursement codes.' }
    ],
    considerations: [
      'Takes 45 minutes with zero pain',
      'Direct insurance invoice provided for dental reimbursement',
      'No obligation to proceed with treatments on the day'
    ],
    duration: '45 minutes',
    visits: '1 Visit',
    warranty: 'DHA Standard Diagnostic Protocol',
    accentQuote: 'Accurate diagnosis is the foundation of long-term dental health and predictable care.',
    faqs: [
      {
        question: 'Do I get a copy of my dental X-rays?',
        answer: 'Yes, all high-resolution digital X-rays and intraoral photographs are sent directly to your email at no additional charge.'
      },
      {
        question: 'Can I claim this on my UAE health insurance?',
        answer: 'Yes. We provide standard DHA reimbursement claim forms and itemized tax invoices for all major UAE insurance providers.'
      }
    ]
  },
  {
    id: 'hygiene-prophylaxis',
    number: '02',
    name: 'Swiss Guided Biofilm Hygiene & Stain Removal',
    tagline: 'Painless warm-water AirFlow cleaning removing tartar, plaque, and stubborn stains.',
    category: 'Preventive',
    startingPriceAED: 'AED 650 / session',
    overview: 'Advanced Swiss dental hygiene using warm water and fine erythritol powder. Gently removes coffee, tea, and tobacco stains without scraping enamel or causing cold tooth sensitivity.',
    whoItSuits: [
      'Routine biannual dental cleaning and tartar removal',
      'Patients with sensitive teeth or dental anxiety who dislike traditional scrapers',
      'Smokers or tea/coffee drinkers seeking instant stain removal'
    ],
    process: [
      { step: '01', title: 'Disclosing Plaque Visualization', description: 'Temporary vegetable dye highlights hidden bacteria to guide precision cleaning.' },
      { step: '02', title: 'Warm AirFlow Purification', description: 'Gentle warm spray lifts stains and biofilm from teeth and below the gumline.' },
      { step: '03', title: 'Piezon Smart Ultrasonic Scaling', description: 'Smart micro-vibrations remove hardened tartar painlessly.' },
      { step: '04', title: 'Fluoride / Bioactive Enamel Seal', description: 'Application of remineralizing varnish to protect enamel and leave teeth silky smooth.' }
    ],
    considerations: [
      'Safe for dental veneers, crowns, and dental implants',
      'Leaves breath completely fresh and teeth noticeably brighter',
      'Recommended every 6 months for optimum gum health'
    ],
    duration: '50 minutes',
    visits: '1 Visit',
    warranty: 'Swiss Dental Academy Certified',
    accentQuote: 'Gentle hygiene prevents 95% of future cavities and gum disease.',
    faqs: [
      {
        question: 'Does this cleaning hurt sensitive teeth?',
        answer: 'No. The water temperature is warmed to body temperature (37°C), which eliminates the sharp cold sensitivity common with older dental tools.'
      }
    ]
  },
  {
    id: 'porcelain-veneers',
    number: '03',
    name: 'Custom Porcelain Veneers (Minimal-Prep)',
    tagline: 'Ultra-thin handcrafted ceramic facings designed to create a natural, harmonious smile.',
    category: 'Micro-Ceramics',
    startingPriceAED: 'AED 3,800 / tooth',
    overview: 'Hand-sculpted ceramic veneers fabricated from high-translucency feldspathic porcelain or lithium disilicate. Corrects discolored, chipped, misaligned, or spaced teeth with maximum enamel preservation.',
    whoItSuits: [
      'Gaps between teeth (diastemas) and uneven tooth edges',
      'Stubborn discoloration that does not respond to bleaching',
      'Worn down, chipped, or genetically small teeth'
    ],
    process: [
      { step: '01', title: 'Digital Smile Simulation & Scan', description: '3D digital mockup allowing you to preview your new smile before touching any teeth.' },
      { step: '02', title: 'Trial Smile Mockup', description: 'A temporary preview placed in your mouth to test appearance, speech, and lip harmony.' },
      { step: '03', title: 'Conservative Micro-Preparation', description: 'Microscopic contouring of enamel (0.2mm to 0.4mm) preserving the natural tooth core.' },
      { step: '04', title: 'Permanent Adhesive Bonding', description: 'Precise bonding under isolation for lifelong durability and natural optical depth.' }
    ],
    considerations: [
      'Preserves 90%+ of your natural tooth structure',
      'Completely stain-resistant to coffee, red wine, and spices',
      'Includes custom nightguard and 5-year clinical warranty'
    ],
    duration: '7 to 10 days',
    visits: '2 to 3 Visits',
    warranty: '5-Year Written Guarantee',
    accentQuote: 'The best cosmetic dentistry never looks fake; it looks like the smile you were meant to have.',
    faqs: [
      {
        question: 'Do my natural teeth need to be shaved into pegs?',
        answer: 'Never at Veneto Clinic. We practice conservative minimal-prep dentistry. In many cases, we only buff 0.2mm of surface enamel, keeping your teeth healthy and vital.'
      }
    ]
  },
  {
    id: 'teeth-whitening',
    number: '04',
    name: 'In-Office Professional Laser Teeth Whitening',
    tagline: 'Safe, medically supervised whitening lifting enamel shades up to 6–8 shades.',
    category: 'Cosmetic',
    startingPriceAED: 'AED 1,800 (Includes Home Care Kit)',
    overview: 'A clinical teeth whitening protocol using medical-grade whitening gel activated by cool LED illumination. Formulated with potassium nitrate desensitizers to prevent tooth sensitivity.',
    whoItSuits: [
      'Yellowed or aged tooth enamel',
      'Stains from tea, coffee, smoking, or dietary pigments',
      'Pre-wedding, graduation, or special event preparation'
    ],
    process: [
      { step: '01', title: 'Gum & Soft Tissue Protection', description: 'Protective light-cured barrier applied to completely shield your gums.' },
      { step: '02', title: 'Whitening Gel Application', description: 'Medical hydrogen peroxide formula applied in three 15-minute cycles.' },
      { step: '03', title: 'Cold-Light LED Activation', description: 'Optimized wavelength breaks deep organic stains inside enamel prisms.' },
      { step: '04', title: 'Remineralizing Fluoride Polish', description: 'Seals enamel tubules to lock in brightness and eliminate post-treatment sensitivity.' }
    ],
    considerations: [
      'Immediate results visible right after the 60-minute session',
      'Includes custom take-home maintenance kit with gel for touch-ups',
      'Safe on enamel when administered by licensed dentists'
    ],
    duration: '60 minutes',
    visits: '1 Visit',
    warranty: 'Post-Care Home Kit Included',
    accentQuote: 'A bright, fresh smile gives an immediate boost in day-to-day personal confidence.',
    faqs: [
      {
        question: 'How long will the whitening results last?',
        answer: 'Typically between 12 to 24 months, depending on dietary habits (coffee, tea) and regular dental hygiene checkups.'
      }
    ]
  },
  {
    id: 'dental-implants',
    number: '05',
    name: 'Guided Dental Implants (Swiss Titanium & Zirconia)',
    tagline: 'Permanent, natural-looking replacement for missing teeth using 3D guided surgery.',
    category: 'Surgical',
    startingPriceAED: 'From AED 6,800 / complete fixture',
    overview: 'Computer-guided placement of premium Swiss (Straumann) dental implants. Provides a permanent root anchor and custom zirconia ceramic crown that matches your neighboring natural teeth in appearance and bite strength.',
    whoItSuits: [
      'Single or multiple missing teeth',
      'Failing teeth that cannot be saved by root canal treatment',
      'Patients tired of loose removable dentures looking for fixed teeth'
    ],
    process: [
      { step: '01', title: '3D CBCT Bone Assessment', description: 'Precise computerized scan to evaluate bone density and plan exact implant placement.' },
      { step: '02', title: 'Keyhole Guided Placement', description: 'Minimally invasive flapless placement with minimal swelling and fast healing.' },
      { step: '03', title: 'Immediate Temporary Tooth', description: 'Aesthetic provisional crown placed so you never leave with a missing gap.' },
      { step: '04', title: 'Final Ceramic Crown', description: 'Custom screw-retained zirconia crown matching the natural contour of your gums.' }
    ],
    considerations: [
      'Prevents jawbone shrinkage caused by missing tooth roots',
      'No grinding down of adjacent healthy teeth (unlike bridges)',
      'Lifetime manufacturer warranty on implant fixtures'
    ],
    duration: 'Immediate provisional · 8-12 weeks final integration',
    visits: '3 Visits',
    warranty: 'Lifetime Implant Fixture Warranty',
    accentQuote: 'A dental implant looks, feels, and chews just like your natural tooth.',
    faqs: [
      {
        question: 'Is dental implant surgery painful?',
        answer: 'With computerized local anesthesia and minimally invasive guided surgery, patients feel minimal to no pain during the procedure and typically return to work the very next morning.'
      }
    ]
  },
  {
    id: 'clear-aligners',
    number: '06',
    name: 'Clear Invisible Aligners (Orthodontics)',
    tagline: 'Straighten crooked or crowded teeth discreetly with removable transparent trays.',
    category: 'Orthodontic',
    startingPriceAED: 'From AED 9,500 full course',
    overview: 'Custom series of clear, medical-grade polyurethane aligners designed by specialist orthodontists. Gently shifts teeth into ideal alignment without metal wires, brackets, or dietary restrictions.',
    whoItSuits: [
      'Adults and teenagers with crowded, spaced, or crooked teeth',
      'Bite alignment problems (overbite, crossbite, underbite)',
      'Patients whose teeth shifted after past braces'
    ],
    process: [
      { step: '01', title: '3D Digital Impression (Itero Scan)', description: 'Quick, comfortable optical scan with zero messy impression putty.' },
      { step: '02', title: 'Virtual Treatment Simulation', description: 'See a 3D video simulation of how your teeth will move week-by-week.' },
      { step: '03', title: 'Aligner Trays Delivery', description: 'Receive your sets of clear aligners, changed at home every 7 to 10 days.' },
      { step: '04', title: 'Final Retainers & Whitening', description: 'Custom retainers to keep your new smile straight, plus complimentary whitening.' }
    ],
    considerations: [
      'Easily removable for eating, brushing, and important meetings',
      'Virtually invisible when smiling or speaking',
      'Flexible monthly payment installment plans available in Dubai'
    ],
    duration: '4 to 10 months',
    visits: 'Checkups every 6 to 8 weeks',
    warranty: 'Treatment Refinement Included',
    accentQuote: 'Straight teeth improve not only smile aesthetics, but also chewing efficiency and gum hygiene.',
    faqs: [
      {
        question: 'How many hours a day must I wear the aligners?',
        answer: 'For optimal results, aligners should be worn 20 to 22 hours per day, removing them only for meals and brushing.'
      }
    ]
  },
  {
    id: 'composite-fillings',
    number: '07',
    name: 'Biomimetic Tooth-Colored Fillings & Ceramic Onlays',
    tagline: 'Restore decayed or fractured teeth with durable, metal-free natural resin and porcelain.',
    category: 'Preventive',
    startingPriceAED: 'From AED 600 / filling',
    overview: 'Modern mercury-free restorations that chemically bond to natural enamel and dentin. Matches the exact shade of your tooth for an invisible, functional repair.',
    whoItSuits: [
      'New cavities or chipping on front and back teeth',
      'Replacement of old, leaking dark mercury amalgam fillings',
      'Teeth with micro-fractures requiring structural reinforcement'
    ],
    process: [
      { step: '01', title: 'Gentle Caries Removal', description: 'Pain-free removal of decay using micro-instruments under magnification.' },
      { step: '02', title: 'Adhesive Enamel Conditioning', description: 'Biomimetic priming to create a hermetic microscopic seal against bacteria.' },
      { step: '03', title: 'Layered Resin Sculpting', description: 'Shade-matched nano-composite sculpted to replicate natural tooth cusps and grooves.' },
      { step: '04', title: 'Bite Check & Mirror Polish', description: 'Occlusal calibration so your bite feels completely normal right away.' }
    ],
    considerations: [
      '100% metal-free and BPA-free biocompatible materials',
      'Completed in a single visit with zero downtime',
      'Stops sensitivity and prevents future decay'
    ],
    duration: '30 to 45 minutes',
    visits: '1 Visit',
    warranty: '2-Year Clinical Warranty',
    accentQuote: 'Restorative dentistry should strengthen the tooth while disappearing seamlessly into the smile.',
    faqs: [
      {
        question: 'Can I eat immediately after a tooth-colored filling?',
        answer: 'Yes! Composite resin is instantly cured and hardened using a dental curing light, so you can eat normally as soon as your local numbness wears off.'
      }
    ]
  },
  {
    id: 'emergency-pain-relief',
    number: '08',
    name: 'Emergency Dental Care & Urgent Pain Relief',
    tagline: 'Same-day appointments for acute toothache, broken teeth, lost crowns, or swelling.',
    category: 'Preventive',
    startingPriceAED: 'AED 500 emergency consult & diagnosis',
    overview: 'Immediate relief for severe tooth pain, dental trauma, broken fillings, or abscesses. Our clinic reserves daily emergency slots to diagnose and resolve acute dental pain without delay.',
    whoItSuits: [
      'Severe throbbing toothache or extreme sensitivity to hot/cold',
      'Broken, chipped, or knocked-out tooth from sports or accidents',
      'Lost filling, dislodged crown, or painful facial swelling'
    ],
    process: [
      { step: '01', title: 'Same-Day Urgent Triage', description: 'Fast priority appointment to immediately identify the root cause of pain.' },
      { step: '02', title: 'Targeted Digital Diagnostic Scan', description: 'Immediate digital X-ray to inspect tooth nerve, root, and bone.' },
      { step: '03', title: 'Instant Pain Relief Procedure', description: 'Application of localized micro-anesthesia and therapeutic sedative dressing.' },
      { step: '04', title: 'Definitive Repair Plan', description: 'Clear next steps (filling, root treatment, or crown repair) with transparent costs.' }
    ],
    considerations: [
      'Priority same-day booking available via WhatsApp or telephone',
      'Pain relief provided within the first 20 minutes of arrival',
      'Comprehensive aftercare prescription and checkup included'
    ],
    duration: '45 to 60 minutes',
    visits: 'Same-day immediate visit',
    warranty: 'Immediate Pain Relief Guarantee',
    accentQuote: 'No one should suffer through dental pain; rapid relief is our priority.',
    faqs: [
      {
        question: 'What should I do if my tooth is knocked out?',
        answer: 'Do not touch the root! Gently rinse with milk or water, place the tooth in a small cup of milk (or inside your cheek), and contact us immediately. We can re-implant teeth if treated within 60 minutes.'
      }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rossi',
    name: 'Dr. Matteo Rossi',
    arabicName: 'د. ماتيو روسي',
    title: 'Lead Aesthetic & Restorative Dentist',
    specialty: 'Cosmetic Dentistry, Veneers & Smile Makeovers',
    dhaNumber: 'DHA-P-0814920',
    bio: 'Educated at the University of Milan and King’s College London, Dr. Rossi has over 18 years of clinical experience in aesthetic dentistry, composite bonding, and minimal-prep porcelain veneers. Known for his calm, patient demeanor and focus on natural-looking smiles.',
    philosophy: 'A beautiful smile should look effortless, healthy, and function in total comfort.',
    education: [
      'DDS, Università degli Studi di Milano (Italy)',
      'MSc in Aesthetic Dentistry, King’s College London (UK)',
      'Member of American Academy of Cosmetic Dentistry (AACD)'
    ],
    memberships: [
      'European Society of Cosmetic Dentistry (ESCD)',
      'Emirates Medical Association Dental Society',
      'Italian Academy of Esthetic Dentistry (IAED)'
    ],
    signatureTreatment: 'Porcelain Veneers & Smile Architecture'
  },
  {
    id: 'dr-bellini',
    name: 'Dr. Leonardo Bellini',
    arabicName: 'د. ليوناردو بلليني',
    title: 'Specialist Oral & Implant Surgeon',
    specialty: 'Dental Implants, Bone Grafting & Wisdom Teeth',
    dhaNumber: 'DHA-P-0723914',
    bio: 'Trained at the University of Florence and Goethe University Frankfurt, Dr. Bellini specializes in computer-guided implant surgery and pain-free extractions. He has successfully placed over 5,000 dental implants with documented biological success exceeding 98.5%.',
    philosophy: 'Gentle, minimally invasive surgical technique ensures fast healing with minimal post-operative discomfort.',
    education: [
      'MD, BDS, University of Florence (Italy)',
      'MSc in Oral Implantology, Goethe University Frankfurt (Germany)',
      'Fellow of International Team for Implantology (ITI Switzerland)'
    ],
    memberships: [
      'International Team for Implantology (ITI)',
      'European Association for Osseointegration (EAO)',
      'UAE Dental Society'
    ],
    signatureTreatment: 'Guided Dental Implants & Bone Preservation'
  },
  {
    id: 'dr-alghaithi',
    name: 'Dr. Sofia Al-Ghaithi',
    arabicName: 'د. صوفيا الغيثي',
    title: 'Specialist Orthodontist & Dentofacial Aligners',
    specialty: 'Clear Aligners, Invisible Braces & Teen Orthodontics',
    dhaNumber: 'DHA-P-0931842',
    bio: 'Dr. Sofia completed her advanced specialist orthodontic training at the Karolinska Institute in Sweden and Università di Bologna. She specializes in discreet clear aligners for adults and teens, focusing on bite harmony and wide aesthetic smile corridors.',
    philosophy: 'Orthodontics is about more than straight teeth; it is about healthy breathing, easy cleaning, and lifelong bite balance.',
    education: [
      'Master of Orthodontics, Karolinska Institute (Stockholm, Sweden)',
      'Specialist Orthodontic Diploma, Università di Bologna (Italy)',
      'Certified Diamond Apex Clear Aligner Clinician'
    ],
    memberships: [
      'World Federation of Orthodontists (WFO)',
      'European Orthodontic Society (EOS)',
      'Emirates Medical Association'
    ],
    signatureTreatment: 'Adult Clear Invisible Aligners'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-01',
    quote: 'I had 8 porcelain veneers done by Dr. Matteo Rossi at Veneto Dental Clinic. The whole experience was painless, and my teeth look completely natural. The staff are so kind and professional.',
    author: 'Alessandra Contini',
    location: 'Downtown Dubai',
    treatment: 'Porcelain Veneers',
    verifiedSource: 'Google Verified UAE Review'
  },
  {
    id: 'rev-02',
    quote: 'I was terrified of getting a dental implant after a bad experience elsewhere. Dr. Bellini did the implant with a 3D guide in 25 minutes, and I had zero pain the next day. Best dental clinic in Dubai!',
    author: 'Tariq Mansoor Al-Ketbi',
    location: 'Business Bay, Dubai',
    treatment: 'Dental Implant & Crown',
    verifiedSource: 'Verified Patient Feedback'
  },
  {
    id: 'rev-03',
    quote: 'The Swiss AirFlow cleaning is fantastic. No scraping, completely painless with warm water, and all coffee stains were gone in 40 minutes. Booking online was effortless.',
    author: 'Sarah Jenkins',
    location: 'DIFC, Dubai',
    treatment: 'Swiss Guided Hygiene Cleaning',
    verifiedSource: 'DHA Verified Patient Feedback'
  }
];
