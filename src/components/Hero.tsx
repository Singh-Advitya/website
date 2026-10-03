import React from 'react';
import { useClinic } from './AtmosphereContext';
import { CLINIC_INFO } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { Calendar, Phone, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Clock, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { openBooking } = useClinic();

  return (
    <section className="relative w-full bg-[#FAFAF7] text-[#1A1816] pt-12 pb-20 px-6 lg:px-12 border-b border-[#EAE7E1] overflow-hidden">
      {/* Subtle light ambient warmth with gentle floating animations */}
      <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-[#F2EDE4]/70 blur-[130px] pointer-events-none -z-0 animate-float-slow" />
      <div className="absolute top-1/2 left-[-100px] w-[450px] h-[450px] rounded-full bg-[#EAE3D5]/50 blur-[110px] pointer-events-none -z-0 animate-float-gentle" />

      <div className="max-w-[1440px] mx-auto relative z-10 space-y-12">
        {/* Main Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Clear Dental Care Messaging & Fast Booking */}
          <div className="lg:col-span-7 space-y-7">
            {/* Accreditation Badge with Official Logo + Shimmer Effect */}
            <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-xl bg-white border border-[#E2DDD3] shadow-xs text-xs font-sans text-[#5A544A] shimmer-badge transition-all hover:scale-[1.02] hover:shadow-md cursor-default">
              <VenetoLogo size="sm" variant="black" className="shrink-0 transition-transform duration-300 hover:rotate-2" />
              <div className="flex flex-col text-left">
                <span className="font-semibold text-[#1A1816] tracking-wide text-xs sm:text-sm">VENETO DENTAL CLINIC</span>
                <span className="text-[10px] text-[#7A7365] font-sans tracking-wider uppercase font-semibold">Licensed DHA Dental Practice · #7142981</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A1816] font-medium leading-[1.12] tracking-tight">
                Gentle, Modern Dentistry. <br />
                <span className="italic font-normal text-[#9E8058]">Designed for Your Smile.</span>
              </h1>
              <p className="text-base sm:text-lg font-sans text-[#5C564D] leading-relaxed max-w-xl font-light">
                Veneto Dental Clinic offers patient-focused dental care in Business Bay, Dubai. From routine cleanings and checkups to porcelain veneers, clear aligners, and dental implants.
              </p>
            </div>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-[#4A453E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0" />
                <span>Zero wait times & unhurried appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0" />
                <span>Painless Swiss AirFlow cleaning & micro-anesthesia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0" />
                <span>100% upfront itemized pricing in AED</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9E8058] shrink-0" />
                <span>Complimentary building valet at The Opus</span>
              </div>
            </div>

            {/* Aesthetic, Well-Placed Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#book-now"
                className="h-12 px-7 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2.5 shadow-sm active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#E6DACB]" />
                <span>Book Appointment Online</span>
              </a>

              <a
                href="#treatments"
                className="h-12 px-7 rounded-lg border border-[#D5CFBF] bg-white hover:bg-[#F5F2EB] text-[#1A1816] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 active:scale-95"
              >
                <span>View Treatments & Prices</span>
                <ArrowRight className="w-4 h-4 text-[#9E8058]" />
              </a>

              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
                title="Chat with clinic on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Reviews & Trust Badge */}
            <div className="pt-4 border-t border-[#EAE7E1] flex flex-wrap items-center gap-6 text-xs font-sans text-[#6B655A]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="font-semibold text-[#1A1816]">4.9 / 5.0</span>
                <span>(280+ Patient Reviews)</span>
              </div>
              <span>·</span>
              <div>Same-Day Emergency Appointments Available</div>
            </div>
          </div>

          {/* Right Column: Clean, Bright Clinic Photography & Quick Info Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E5E0D5] bg-white shadow-xl hover-luxury-card group">
              {/* Dental Care Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern bright dental operatory at Veneto Dental Clinic Dubai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#E5E0D5] text-[11px] font-sans font-medium text-[#1A1816]">
                  Modern Clinic · Business Bay Dubai
                </div>
              </div>

              {/* Fast Clinic Details Card Under Photo */}
              <div className="p-6 bg-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0ECE5]">
                  <div className="flex items-center gap-3">
                    <VenetoLogo size="sm" variant="black" className="shrink-0" />
                    <div>
                      <h3 className="text-sm font-sans font-semibold text-[#1A1816]">
                        Veneto Dental Clinic
                      </h3>
                      <p className="text-xs text-[#6B655A]">
                        The Opus by Zaha Hadid, Business Bay
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-sans font-semibold">
                      Open Today
                    </span>
                    <span className="block text-[11px] text-[#6B655A] mt-0.5">Until 20:00</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-sans text-[#4A453E]">
                  <div className="flex justify-between">
                    <span className="text-[#7A7365]">Consultation & 3D Imaging:</span>
                    <span className="font-semibold text-[#1A1816]">From AED 450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7365]">Painless Swiss AirFlow Hygiene:</span>
                    <span className="font-semibold text-[#1A1816]">From AED 650</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A7365]">Laser Teeth Whitening:</span>
                    <span className="font-semibold text-[#1A1816]">AED 1,800</span>
                  </div>
                </div>

                <button
                  onClick={() => openBooking()}
                  className="w-full py-3 rounded-lg bg-[#F4F1EA] hover:bg-[#1A1816] hover:text-white text-[#1A1816] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 border border-[#E2DDD3] cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#9E8058]" />
                  <span>Schedule Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
