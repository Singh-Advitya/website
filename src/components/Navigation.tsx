import React, { useState } from 'react';
import { useClinic } from './AtmosphereContext';
import { CLINIC_INFO } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { Phone, MessageCircle, Menu, X, Calendar, ArrowRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const { openBooking } = useClinic();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Dentists', href: '#dentists' },
    { label: 'Guarantees', href: '#guarantees' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faqs' },
  ];

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openBooking();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-[#EAE7E1] shadow-xs">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-[88px] lg:h-[94px] flex items-center justify-between gap-3">
        {/* Brand Lockup: Prominent Boxed Logo + High-Impact Typography */}
        <a
          href="#"
          className="flex items-center gap-3 sm:gap-4 group shrink-0"
          aria-label="Veneto Dental Clinic Dubai"
        >
          <VenetoLogo
            size="lg"
            variant="black"
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl lg:text-[28px] font-serif tracking-[0.06em] text-[#141210] font-bold leading-none group-hover:text-[#9E8058] transition-colors">
                VENETO
              </span>
              <span className="text-xs sm:text-sm lg:text-base font-serif tracking-[0.18em] text-[#9E8058] uppercase font-medium leading-none">
                CLINIC
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 text-[9px] sm:text-[11px] font-sans tracking-[0.2em] uppercase text-[#736B5E] font-medium">
              <span>DUBAI</span>
              <span className="w-1 h-1 rounded-full bg-[#9E8058]" />
              <span>THE OPUS</span>
              <span className="hidden md:inline w-1 h-1 rounded-full bg-[#9E8058]" />
              <span className="hidden md:inline text-[#8C8476]">DENTAL & AESTHETIC</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links + Gap + Book Appointment Button */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Navigation Links */}
          <nav className="flex items-center gap-5 xl:gap-7 text-xs font-sans tracking-wider uppercase text-[#4A453E] font-semibold">
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

          {/* Elegant Hairline Divider Between FAQ and Book Button */}
          <div className="h-6 w-[1px] bg-[#DDD7CB] shrink-0" aria-hidden="true" />

          {/* Quick Phone (on larger desktop) */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden 2xl:flex items-center gap-1.5 text-xs font-sans text-[#4A453E] hover:text-[#9E8058] transition-colors font-medium whitespace-nowrap shrink-0"
            title="Call Veneto Clinic"
          >
            <Phone className="w-3.5 h-3.5 text-[#9E8058]" />
            <span>{CLINIC_INFO.phone}</span>
          </a>

          {/* Primary Unmissable Book Appointment Button */}
          <button
            onClick={handleBookingClick}
            className="h-11 px-5 sm:px-6 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-all duration-200 text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2 shadow-sm cursor-pointer active:scale-95 whitespace-nowrap shrink-0 hover:shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Tablet & Mobile Right Action Cluster: ALWAYS Visible Book Button + Menu */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3 shrink-0">
          {/* Direct Phone icon on tablets */}
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:flex p-2.5 rounded-lg border border-[#E5E0D5] text-[#1A1816] hover:text-[#9E8058] transition-colors"
            title="Call Clinic"
            aria-label="Call Clinic"
          >
            <Phone className="w-4 h-4 text-[#9E8058]" />
          </a>

          {/* Unmissable Book Appointment Button Always Visible on Mobile & Tablet */}
          <button
            onClick={handleBookingClick}
            className="h-10 px-3.5 sm:px-4.5 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-all duration-200 text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="hidden xs:inline">Book Appointment</span>
            <span className="xs:hidden">Book</span>
          </button>

          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-lg border border-[#E5E0D5] text-[#1A1816] hover:text-[#9E8058] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EAE7E1] px-5 sm:px-8 py-6 space-y-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-xs font-sans tracking-wider uppercase text-[#4A453E] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F0ECE5] hover:text-[#9E8058] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CCC6BC]" />
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleBookingClick(e);
              }}
              className="w-full py-3.5 rounded-lg bg-[#1A1816] text-white text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Appointment Online</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="py-2.5 px-3 rounded-lg border border-[#E5E0D5] text-[#1A1816] text-[11px] font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E8058]" />
                <span>Call Clinic</span>
              </a>
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
