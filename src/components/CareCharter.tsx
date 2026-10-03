import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { useClinic } from './AtmosphereContext';

export const CareCharter: React.FC = () => {
  const { openBooking } = useClinic();

  const guarantees = [
    {
      title: '100% Upfront Itemized Pricing',
      description: 'You will always receive a clear, printed treatment plan detailing every procedure, tooth number, and AED cost before any work begins. Zero unexpected surprises.',
    },
    {
      title: 'Painless Local Anesthesia Oath',
      description: 'We use pre-numbing topical gels and computer-assisted slow-flow micro-injections so you never experience painful stinging needles.',
    },
    {
      title: '5-Year Written Warranty',
      description: 'All custom porcelain veneers, dental crowns, and ceramic restorations are covered by our 5-year clinical structural guarantee against chips or fractures.',
    },
    {
      title: 'Conservative Biological Dentistry',
      description: 'We prioritize keeping your natural teeth healthy and intact. We never push for unnecessary tooth shaving, aggressive root canals, or commercial quotas.',
    },
  ];

  return (
    <section id="guarantees" className="relative w-full bg-[#FAFAF7] text-[#1A1816] py-24 px-6 lg:px-12 border-b border-[#EAE7E1]">
      <div className="max-w-[1440px] mx-auto space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2DDD3] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-semibold block">
              Patient Protection & Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
              Our 4 Guarantees to Every Patient
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-sans text-[#5C564D] leading-relaxed">
            Healthcare is built on clinical trust. As a licensed Dubai Health Authority dental facility, our core mission is transparent, ethical, and gentle oral healthcare.
          </div>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#DDD7CB] space-y-3 shadow-xs hover-luxury-card cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E5E0D5] flex items-center justify-center text-xs font-mono font-bold text-[#9E8058]">
                0{idx + 1}
              </div>
              <h3 className="text-base font-sans font-semibold text-[#1A1816]">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#5C564D] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Opinion Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F4F1EA] border border-[#DDD7CB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-semibold block">
              Need a Second Opinion?
            </span>
            <h4 className="text-xl sm:text-2xl font-serif text-[#1A1816]">
              Have a treatment plan from another dental clinic in the UAE?
            </h4>
            <p className="text-xs sm:text-sm font-sans text-[#5C564D] max-w-xl">
              Bring your existing X-rays or quotation for an honest, independent clinical evaluation with Dr. Matteo Rossi or Dr. Leonardo Bellini.
            </p>
          </div>

          <a
            href="#book-now"
            className="h-12 px-7 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2 shadow-xs shrink-0"
          >
            <span>Request Second Opinion</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
