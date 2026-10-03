import React, { useState } from 'react';
import { useClinic } from './AtmosphereContext';
import { CLINIC_INFO } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { Phone, MessageCircle, Menu, X, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { openBooking } = useClinic();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Treatments & Prices', href: '#treatments' },
    { label: 'Quick Appointment', href: '#book-now' },
    { label: 'Our Dentists', href: '#dentists' },
    { label: 'Patient Guarantees', href: '#guarantees' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Clean Clinical Information Micro-Ribbon */}
      <aside aria-label="Clinic hours and contact ribbon" className="bg-[#F4F1EA] text-[#4A453E] text-[11px] font-sans py-1.5 px-4 sm:px-6 lg:px-12 border-b border-[#E5E0D5] relative z-40">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1.5 text-[#1A1816] font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse" />
              Veneto Dental Clinic
            </span>
            <span className="text-[#CCC6BC]">|</span>
            <span className="hidden sm:flex items-center gap-1 text-[#666055] whitespace-nowrap">
              <MapPin className="w-3 h-3 text-[#9E8058]" />
              The Opus, Business Bay
            </span>
            <span className="hidden md:inline text-[#CCC6BC]">|</span>
            <span className="hidden md:inline text-[#7A7365]">{CLINIC_INFO.dhaLicense}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <span className="hidden lg:flex items-center gap-1 text-[#666055] whitespace-nowrap">
              <Clock className="w-3 h-3 text-[#9E8058]" />
              <span>Mon – Sat: 09:00 – 20:00</span>
            </span>
            <span className="text-[#CCC6BC] hidden lg:inline">|</span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1 font-medium text-[#1A1816] hover:text-[#9E8058] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#9E8058]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-[#CCC6BC]">|</span>
            <a
              href={CLINIC_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium text-emerald-800 hover:text-emerald-950 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Top Navigation (Medium Sized — Balanced & Elegant) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE7E1] shadow-xs transition-colors h-[76px] sm:h-[82px] flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Clinic Brand with High-Visibility Medium Boxed Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <VenetoLogo size="md" variant="black" className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl lg:text-[22px] font-serif tracking-[0.05em] text-[#1A1816] font-medium group-hover:text-[#9E8058] transition-colors leading-tight">
                VENETO DENTAL CLINIC
              </span>
              <span className="text-[10px] font-sans tracking-[0.22em] uppercase text-[#8A8275] font-semibold mt-0.5">
                DUBAI · THE OPUS, BUSINESS BAY · DHA #7142981
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links + Clear Gap + Action Button */}
          <div className="hidden xl:flex items-center">
            {/* Desktop Navigation Links */}
            <nav className="flex items-center gap-6 2xl:gap-7 text-xs font-sans tracking-wider uppercase text-[#4A453E] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#9E8058] transition-colors py-1 relative group whitespace-nowrap"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9E8058] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Clear Tasteful Gap & Hairline Divider between FAQs and Book Appointment button */}
            <div className="h-5 w-[1px] bg-[#E0DAD0] mx-6 2xl:mx-8" aria-hidden="true" />

            {/* Primary Action Button */}
            <div className="flex items-center">
              <a
                href="#book-now"
                className="h-10 px-5.5 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-all duration-200 text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2 shadow-xs cursor-pointer active:scale-95 whitespace-nowrap hover:shadow-md"
              >
                <Calendar className="w-3.5 h-3.5 text-[#E6DACB]" />
                <span>Book Appointment</span>
              </a>
            </div>
          </div>

          {/* Tablet Action Button (when nav links are collapsed) */}
          <div className="hidden sm:flex xl:hidden items-center gap-3">
            <a
              href="#book-now"
              className="h-9 px-4 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-all duration-200 text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E6DACB]" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2.5">
            <a
              href="#book-now"
              className="h-8.5 px-3 rounded-lg bg-[#1A1816] text-white text-[11px] font-sans tracking-wider uppercase font-semibold flex items-center gap-1"
            >
              <Calendar className="w-3 h-3 text-[#E6DACB]" />
              <span>Book</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1816] hover:text-[#9E8058] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#EAE7E1] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-xs font-sans tracking-wider uppercase text-[#4A453E] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 border-b border-[#F0ECE5] hover:text-[#9E8058] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 space-y-2.5">
              <a
                href="#book-now"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-lg bg-[#1A1816] text-white text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#E6DACB]" />
                <span>Book Appointment Online</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Book via WhatsApp (+971 50 820 4400)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
