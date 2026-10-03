import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { useClinic } from './AtmosphereContext';
import { Treatment } from '../types';
import { CheckCircle2, Clock, Calendar, ShieldCheck, ArrowRight, Info } from 'lucide-react';

export const TreatmentDirectory: React.FC = () => {
  const { openBooking, openTreatmentDetail } = useClinic();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeTreatment, setActiveTreatment] = useState<Treatment>(TREATMENTS[0]);

  // High quality curated medical clinical photography for treatments
  const treatmentImages: Record<string, string> = {
    'consultation-checkup': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
    'hygiene-prophylaxis': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    'porcelain-veneers': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85',
    'teeth-whitening': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    'dental-implants': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85',
    'clear-aligners': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85',
    'composite-fillings': 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=85',
    'emergency-pain-relief': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85',
  };

  const categories = ['All', 'Preventive', 'Micro-Ceramics', 'Cosmetic', 'Surgical', 'Orthodontic'];

  const filteredTreatments = activeCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="relative w-full bg-[#FAFAF7] text-[#1A1816] py-24 px-6 lg:px-12 border-b border-[#EAE7E1]">
      <div className="max-w-[1440px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2DDD3] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-semibold block">
              Dental Treatments & Clear Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
              Comprehensive Dental Services in Dubai
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-sans text-[#5C564D] leading-relaxed">
            All procedures are performed by licensed DHA dentists using modern diagnostic technology, gentle anesthesia, and strict European sterilization protocols.
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1A1816] text-white font-semibold shadow-xs'
                  : 'bg-white text-[#5A544A] hover:bg-[#F0ECE5] border border-[#DDD7CB]'
              }`}
            >
              {cat === 'All' ? 'All Dental Services' : cat}
            </button>
          ))}
        </div>

        {/* Directory Layout: Selectable Menu on Left, Full Info Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Treatment Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[11px] font-sans uppercase tracking-wider text-[#7A7365] pb-2 border-b border-[#E5E0D5] flex justify-between font-medium">
              <span>Treatment Menu</span>
              <span>Price Range (AED)</span>
            </div>

            {filteredTreatments.map((treatment) => {
              const isSelected = activeTreatment.id === treatment.id;
              return (
                <button
                  key={treatment.id}
                  onClick={() => setActiveTreatment(treatment)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#9E8058] shadow-md ring-1 ring-[#9E8058]/30'
                      : 'bg-[#F5F2EB] text-[#4A453E] border-[#E2DDD3] hover:bg-white hover:border-[#D5CFBF]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono">
                      <span className={isSelected ? 'text-[#9E8058] font-bold' : 'text-[#8A8275]'}>
                        {treatment.number}
                      </span>
                      <span className="text-[#8A8275] uppercase tracking-wider text-[9px]">
                        {treatment.category}
                      </span>
                    </div>
                    <div className="text-sm font-sans font-semibold text-[#1A1816] group-hover:text-[#9E8058] transition-colors">
                      {treatment.name}
                    </div>
                    <div className="text-xs font-sans text-[#7A7365]">
                      {treatment.startingPriceAED}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-sans text-[#9E8058] font-medium hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                      View Info
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#1A1816] text-white'
                          : 'bg-white text-[#7A7365] group-hover:text-[#1A1816]'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Treatment Dossier Card */}
          <div className="lg:col-span-7 bg-white border border-[#DDD7CB] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md hover-luxury-card group">
            {/* Visual Photo & Quick Header */}
            <div className="space-y-4">
              <div className="relative aspect-[16/8] rounded-xl overflow-hidden border border-[#E5E0D5] bg-stone-100">
                <img
                  src={treatmentImages[activeTreatment.id] || treatmentImages['consultation-checkup']}
                  alt={activeTreatment.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#E5E0D5] text-[10px] font-sans font-semibold text-[#1A1816]">
                  {activeTreatment.category} Dentistry
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-xs border border-[#E5E0D5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-wider text-[#7A7365] block">
                      Treatment Fee
                    </span>
                    <span className="text-base font-sans font-bold text-[#1A1816]">
                      {activeTreatment.startingPriceAED}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#4A453E] bg-[#F4F1EA] px-3 py-1.5 rounded-md font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9E8058]" />
                    <span>{activeTreatment.warranty}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#1A1816]">
                  {activeTreatment.name}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#7A7365] italic">
                  "{activeTreatment.tagline}"
                </p>
                <p className="text-xs sm:text-sm font-sans text-[#4A453E] leading-relaxed pt-1">
                  {activeTreatment.overview}
                </p>
              </div>
            </div>

            {/* Candidate Checklist */}
            <div className="space-y-2 pt-3 border-t border-[#EDE8DE]">
              <span className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                Who this treatment is best for:
              </span>
              <ul className="space-y-1.5">
                {activeTreatment.whoItSuits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-sans text-[#4A453E]">
                    <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DA] text-xs font-sans">
              <div>
                <span className="text-[#7A7365] block text-[10px] uppercase">Appointment Duration</span>
                <span className="font-semibold text-[#1A1816]">{activeTreatment.duration}</span>
              </div>
              <div>
                <span className="text-[#7A7365] block text-[10px] uppercase">Number of Visits</span>
                <span className="font-semibold text-[#1A1816]">{activeTreatment.visits}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#7A7365] block text-[10px] uppercase">Anesthesia</span>
                <span className="font-semibold text-[#1A1816]">Gentle / Pain-Free</span>
              </div>
            </div>

            {/* Actions: Direct Book Treatment or View FAQs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => openBooking(activeTreatment.name)}
                className="flex-1 h-12 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#E6DACB]" />
                <span>Book This Treatment</span>
              </button>

              <button
                onClick={() => openTreatmentDetail(activeTreatment.id)}
                className="h-12 px-5 rounded-lg border border-[#D5CFBF] bg-white hover:bg-[#F5F2EB] text-[#1A1816] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Info className="w-4 h-4 text-[#9E8058]" />
                <span>Full Procedure Details & FAQs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
