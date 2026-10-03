import React, { useState } from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';
import { useClinic } from './AtmosphereContext';
import { Calendar, GraduationCap, Award, ShieldCheck, X, ArrowRight } from 'lucide-react';

export const SpecialistsSection: React.FC = () => {
  const { openBooking } = useClinic();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // High quality doctor portraits
  const doctorPhotos: Record<string, string> = {
    'dr-rossi': 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85',
    'dr-bellini': 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=85',
    'dr-alghaithi': 'https://images.unsplash.com/photo-1594824813588-46eb82361099?auto=format&fit=crop&w=1200&q=85',
  };

  return (
    <section id="dentists" className="relative w-full bg-[#FAFAF7] text-[#1A1816] py-24 px-6 lg:px-12 border-b border-[#EAE7E1]">
      <div className="max-w-[1440px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2DDD3] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-semibold block">
              Medical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
              Licensed DHA Dental Specialists
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-sans text-[#5C564D] leading-relaxed">
            Our clinicians hold postgraduate degrees from premier European and GCC institutions. Every procedure is personally performed by a registered DHA dentist.
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#DDD7CB] flex flex-col justify-between shadow-sm hover-luxury-card group"
            >
              {/* Doctor Headshot Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={doctorPhotos[doc.id] || doctorPhotos['dr-rossi']}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xs rounded-full border border-[#DDD7CB] text-[10px] font-mono font-medium text-[#1A1816] flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9E8058]" />
                  <span>{doc.dhaNumber}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-wider text-[#9E8058] font-bold block mb-0.5">
                    {doc.specialty}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                    {doc.name}
                  </h3>
                  {doc.arabicName && (
                    <span className="text-xs text-[#7A7365] font-serif block">{doc.arabicName}</span>
                  )}
                  <span className="text-xs font-sans text-[#6B655A] block mt-1 font-medium">
                    {doc.title}
                  </span>
                </div>

                <p className="text-xs font-sans text-[#5C564D] leading-relaxed line-clamp-3">
                  "{doc.philosophy}"
                </p>

                <div className="pt-2 border-t border-[#EDE8DE] text-xs font-sans text-[#6B655A]">
                  <span className="text-[#8A8275] text-[10px] uppercase font-bold block">Key Focus:</span>
                  <span className="text-[#1A1816] font-medium">{doc.signatureTreatment}</span>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex items-center gap-2.5">
                  <button
                    onClick={() => openBooking(undefined, doc.name)}
                    className="flex-1 h-11 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#E6DACB]" />
                    <span>Book With Dentist</span>
                  </button>

                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="h-11 px-3.5 rounded-lg border border-[#DDD7CB] hover:bg-[#F5F2EB] text-[#4A453E] transition-colors text-xs font-sans font-medium cursor-pointer"
                  >
                    Credentials
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Credentials Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-[#DDD7CB] rounded-2xl p-6 sm:p-10 shadow-2xl text-[#1A1816] max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5F2EB] hover:bg-[#EAE5DA] text-[#6B655A] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-[#EDE8DE] pb-5">
              <img
                src={doctorPhotos[selectedDoctor.id]}
                alt={selectedDoctor.name}
                className="w-16 h-16 rounded-full object-cover border border-[#DDD7CB]"
              />
              <div>
                <span className="text-xs font-sans text-[#9E8058] font-bold uppercase tracking-wider block">
                  {selectedDoctor.title}
                </span>
                <h3 className="text-2xl font-serif text-[#1A1816]">{selectedDoctor.name}</h3>
                <span className="text-xs font-mono text-[#7A7365]">{selectedDoctor.dhaNumber}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-bold">
                Clinical Background
              </h4>
              <p className="text-sm font-sans text-[#4A453E] leading-relaxed">
                {selectedDoctor.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#EDE8DE] text-xs font-sans">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#1A1816]">
                  <GraduationCap className="w-4 h-4 text-[#9E8058]" />
                  <span>Degrees & Fellowships</span>
                </div>
                <ul className="space-y-1 text-[#5C564D]">
                  {selectedDoctor.education.map((e, i) => (
                    <li key={i}>• {e}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#1A1816]">
                  <Award className="w-4 h-4 text-[#9E8058]" />
                  <span>Dental Societies</span>
                </div>
                <ul className="space-y-1 text-[#5C564D]">
                  {selectedDoctor.memberships.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EDE8DE]">
              <button
                onClick={() => {
                  const doc = selectedDoctor;
                  setSelectedDoctor(null);
                  openBooking(undefined, doc.name);
                }}
                className="w-full h-12 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#E6DACB]" />
                <span>Book Appointment with {selectedDoctor.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
