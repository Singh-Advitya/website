export type AtmosphereMode = 'dawn' | 'noon' | 'dusk';

export interface Treatment {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: 'Cosmetic' | 'Micro-Ceramics' | 'Surgical' | 'Orthodontic' | 'Preventive';
  startingPriceAED: string;
  overview: string;
  whoItSuits: string[];
  process: { step: string; title: string; description: string }[];
  considerations: string[];
  duration: string;
  visits: string;
  accentQuote: string;
  warranty: string;
  faqs: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  name: string;
  arabicName?: string;
  title: string;
  specialty: string;
  dhaNumber: string;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  signatureTreatment: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  treatment: string;
  description: string;
  shadeChange: string;
  duration: string;
  doctor: string;
  beforeImg: string;
  afterImg: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  treatment: string;
  verifiedSource: string;
}

export interface AestheticService {
  category: string;
  title: string;
  description: string;
  target: string;
  session: string;
  priceAED: string;
}
