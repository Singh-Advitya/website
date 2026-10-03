import React from 'react';
import { useClinic } from './AtmosphereContext';
import { TREATMENTS } from '../data/clinicData';
import { X, Calendar, CheckCircle2, Clock, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export const TreatmentDetailModal: React.FC = () => {
  const { selectedTreatmentId, closeTreatmentDetail, openBooking } = useClinic();

  if (!selectedTreatmentId) return null;

  const treatment = TREATMENTS.find((t) => t.id === selectedTreatmentId);
  if (!treatment) return null;

  const handleBook = () => {
    const serviceName = treatment.name;
    closeTreatmentDetail();
    openBooking(serviceName);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-[#DDD7CB] rounded-2xl p-6 sm:p-9 shadow-2xl text-[#1A1816] max-h-[92vh] overflow-y-auto space-y-6">
        {/* Close Button */}
        <button
          onClick={closeTreatmentDetail}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5F2EB] hover:bg-[#EAE5DA] text-[#6B655A] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-[#EDE8DE] pb-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9E8058] font-bold">
            <span>{treatment.number}</span>
            <span>·</span>
            <span className="uppercase">{treatment.category} DENTISTRY</span>
            <span>·</span>
            <span className="text-[#1A1816]">{treatment.startingPriceAED}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#1A1816]">
            {treatment.name}
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#7A7365] italic">
            "{treatment.tagline}"
          </p>

          <p className="text-xs sm:text-sm font-sans text-[#4A453E] leading-relaxed pt-1">
            {treatment.overview}
          </p>
        </div>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E0D5] text-xs font-sans">
          <div>
            <span className="text-[#7A7365] block text-[10px] uppercase">Duration</span>
            <span className="font-semibold text-[#1A1816]">{treatment.duration}</span>
          </div>
          <div>
            <span className="text-[#7A7365] block text-[10px] uppercase">Visits</span>
            <span className="font-semibold text-[#1A1816]">{treatment.visits}</span>
          </div>
          <div>
            <span className="text-[#7A7365] block text-[10px] uppercase">Warranty</span>
            <span className="font-semibold text-[#1A1816]">{treatment.warranty}</span>
          </div>
          <div>
            <span className="text-[#7A7365] block text-[10px] uppercase">Painless Anesthesia</span>
            <span className="font-semibold text-[#1A1816]">Included</span>
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div className="space-y-3">
          <h3 className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-bold">
            Procedure Steps & Protocol
          </h3>

          <div className="space-y-2.5">
            {treatment.process.map((p) => (
              <div
                key={p.step}
                className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE7E1] flex items-start gap-3.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#1A1816] text-white text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {p.step}
                </span>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-sans font-semibold text-[#1A1816]">
                    {p.title}
                  </div>
                  <div className="text-xs font-sans text-[#5C564D] leading-relaxed">
                    {p.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Considerations Checklist */}
        <div className="space-y-2 pt-2 border-t border-[#EDE8DE]">
          <h3 className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-bold">
            Important Information & Care
          </h3>
          <ul className="space-y-1.5">
            {treatment.considerations.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-sans text-[#4A453E]">
                <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQs */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-[#EDE8DE]">
            <h3 className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-bold flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </h3>

            <div className="space-y-2">
              {treatment.faqs.map((faq, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE7E1] space-y-1 text-xs font-sans">
                  <div className="font-semibold text-[#1A1816]">{faq.question}</div>
                  <div className="text-[#5C564D] leading-relaxed">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-[#EDE8DE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs font-sans text-[#7A7365]">
            Transparent pricing · Licensed DHA Dental Practice
          </div>

          <button
            onClick={handleBook}
            className="w-full sm:w-auto h-12 px-7 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Calendar className="w-4 h-4 text-[#E6DACB]" />
            <span>Book This Dental Treatment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
