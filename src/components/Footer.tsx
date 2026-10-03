import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { useClinic } from './AtmosphereContext';
import { Phone, MessageCircle, MapPin, Calendar, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openBooking } = useClinic();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFEBE4] text-[#1A1816] pt-16 pb-12 px-6 lg:px-12 border-t border-[#DDD7CB]">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Top Header Block with Official Logo */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#DDD7CB] pb-10 gap-6">
          <div className="flex items-center gap-5 sm:gap-6">
            <VenetoLogo size="lg" variant="black" className="shrink-0" />
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-serif tracking-[0.06em] font-medium text-[#1A1816] block">
                VENETO DENTAL CLINIC
              </span>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#7A7365] block font-semibold">
                DUBAI · THE OPUS, BUSINESS BAY · DHA #7142981
              </span>
              <p className="text-xs sm:text-sm font-sans text-[#5C564D] max-w-md">
                Licensed dental practice providing gentle, comprehensive oral healthcare in Business Bay, Dubai.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#book-now"
              className="h-11 px-6 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E6DACB]" />
              <span>Book Appointment Online</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-lg border border-[#DDD7CB] bg-white hover:bg-[#F5F2EB] text-[#1A1816] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-sans text-[#5C564D]">
          {/* Column 1: Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-[#4A453E]">
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Checkup & 3D Imaging (AED 450)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Swiss AirFlow Hygiene (AED 650)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Porcelain Veneers (From AED 3,800)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Laser Teeth Whitening (AED 1,800)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Guided Dental Implants (AED 6,800)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#9E8058] transition-colors">
                  Clear Invisible Aligners (AED 9,500)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Patient Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
              Patient Information
            </h4>
            <ul className="space-y-2 text-[#4A453E]">
              <li>
                <a href="#guarantees" className="hover:text-[#9E8058] transition-colors">
                  100% Upfront Pricing Guarantee
                </a>
              </li>
              <li>
                <a href="#guarantees" className="hover:text-[#9E8058] transition-colors">
                  Pain-Free Anesthesia Promise
                </a>
              </li>
              <li>
                <a href="#dentists" className="hover:text-[#9E8058] transition-colors">
                  Meet Our Licensed Dentists
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#9E8058] transition-colors">
                  UAE Health Insurance Reimbursement
                </a>
              </li>
              <li>
                <a href="#book-now" className="hover:text-[#9E8058] transition-colors">
                  Same-Day Emergency Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Regulation & Licensure */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
              Licensure & Governance
            </h4>
            <div className="space-y-1.5 text-[#5C564D]">
              <div className="font-semibold text-[#1A1816]">{CLINIC_INFO.dhaLicense}</div>
              <div>{CLINIC_INFO.tradeLicense}</div>
              <div>Dubai Health Authority Regulated Clinic</div>
              <div>Class-B Hospital-Grade Sterilization</div>
              <div>5-Year Warranty on Restorative Ceramics</div>
            </div>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#1A1816] uppercase tracking-wider">
              Appointments & Location
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 text-[#1A1816] hover:text-[#9E8058] font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E8058]" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-800 hover:text-emerald-950 font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: {CLINIC_INFO.whatsapp}</span>
              </a>
              <div className="text-[#6B655A] pt-1">
                Level 14, The Opus Tower, Al A’amal St, Business Bay, Dubai
              </div>
              <div className="text-[#6B655A] font-medium">
                Mon – Sat: 09:00 – 20:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#DDD7CB] pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-[#7A7365] gap-3">
          <div>
            © {new Date().getFullYear()} Veneto Dental Clinic Dubai. All clinical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>DHA Regulated Facility</span>
            <span>·</span>
            <span>Patient Privacy Rights</span>
            <span>·</span>
            <span>Zero Hidden Fees</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
