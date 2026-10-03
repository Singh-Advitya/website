import React from 'react';
import { Shield, Sparkles, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import { useClinic } from './AtmosphereContext';

export const SanctuarySection: React.FC = () => {
  const { openBooking } = useClinic();

  const features = [
    {
      title: 'Digital Pain-Free Anesthesia',
      description: 'Computer-controlled micro-delivery of local anesthetic ensures comfortable, virtually painless injections before any restorative work.',
    },
    {
      title: 'Low-Radiation 3D Scans',
      description: 'State-of-the-art green CBCT and intraoral optical scanners replace messy impression trays and minimize radiation exposure by up to 80%.',
    },
    {
      title: 'Zero Wait Times',
      description: 'We respect your schedule. Appointments are strictly reserved 1-on-1 with dedicated dentist time, ensuring you are seen on time without crowded waiting rooms.',
    },
    {
      title: 'Hospital-Grade Sterilization',
      description: 'Class-B vacuum autoclaves, individually sealed surgical pouches, and daily biological spore testing meeting the highest DHA standards.',
    },
  ];

  return (
    <section className="relative w-full bg-[#F4F1EA] text-[#1A1816] py-24 px-6 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-[1440px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2DDD3] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-semibold block">
              Patient Care Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
              A Calmer, Modern Dental Experience in Dubai
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-sans text-[#5C564D] leading-relaxed">
            Dental anxiety is common. That is why Veneto Dental Clinic is engineered from the ground up to be quiet, unhurried, and comfortable from the moment you step through our doors.
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#DDD7CB] space-y-3 shadow-sm hover:border-[#9E8058] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E0D5] flex items-center justify-center text-xs font-mono font-bold text-[#9E8058]">
                0{idx + 1}
              </div>
              <h3 className="text-base font-sans font-semibold text-[#1A1816]">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#5C564D] leading-relaxed font-light">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clinic Interior Banner with Action */}
        <div className="rounded-2xl overflow-hidden border border-[#DDD7CB] bg-white shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto h-full overflow-hidden bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
              alt="Comfortable modern consultation room at Veneto Dental Clinic Dubai"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
            <span className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-semibold block">
              The Opus, Business Bay, Dubai
            </span>
            <h3 className="text-2xl font-serif text-[#1A1816]">
              Designed for Comfort & Complete Privacy
            </h3>
            <p className="text-xs sm:text-sm font-sans text-[#5C564D] leading-relaxed font-light">
              Our clinic suites offer natural daylight, noise-canceling headphones, and ceiling screens so you can watch your favorite show while your treatment is carried out gently.
            </p>

            <div className="pt-2">
              <a
                href="#book-now"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold shadow-xs"
              >
                <span>Reserve Your Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
