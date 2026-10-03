import React, { useState } from 'react';
import { REVIEWS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentReview = REVIEWS[currentIdx];

  return (
    <section className="relative w-full bg-[#FAFAF7] text-[#1A1816] py-20 px-6 lg:px-12 border-b border-[#EAE7E1]">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="flex justify-center text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-bold block">
            Verified Patient Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1816] font-medium">
            What Our Dental Patients Say
          </h2>
        </div>

        {/* Review Card */}
        <div className="bg-white border border-[#DDD7CB] rounded-2xl p-7 sm:p-10 shadow-sm max-w-3xl mx-auto relative">
          <div className="space-y-5">
            <div className="flex items-center gap-1.5 text-xs font-sans text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{currentReview.verifiedSource}</span>
            </div>

            <p className="text-base sm:text-lg font-sans text-[#33302C] leading-relaxed italic">
              "{currentReview.quote}"
            </p>

            <div className="pt-4 border-t border-[#EDE8DE] flex items-center justify-between">
              <div>
                <div className="font-sans font-semibold text-sm text-[#1A1816]">
                  {currentReview.author}
                </div>
                <div className="text-xs font-sans text-[#7A7365]">
                  {currentReview.location} · {currentReview.treatment}
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentIdx((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1))}
                  className="w-8 h-8 rounded-lg border border-[#DDD7CB] hover:bg-[#F5F2EB] text-[#1A1816] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentIdx((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0))}
                  className="w-8 h-8 rounded-lg border border-[#DDD7CB] hover:bg-[#F5F2EB] text-[#1A1816] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
