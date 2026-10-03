import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { useClinic } from './AtmosphereContext';
import { MapPin, Phone, MessageCircle, Clock, Shield, Navigation as NavIcon, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { openBooking } = useClinic();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you accept UAE health insurance for dental treatments?',
      a: 'Yes. We provide standard DHA reimbursement claim forms, detailed medical reports, and itemized tax invoices. You can submit these directly to your insurer (NextCare, MetLife, Cigna, Bupa, Oman Insurance, etc.) for direct reimbursement.',
    },
    {
      q: 'Is there parking available at the clinic?',
      a: 'Yes! All patients enjoy complimentary building valet parking at the main entrance of The Opus Tower. Dedicated basement parking is also available.',
    },
    {
      q: 'Can I pay in monthly installments?',
      a: 'Yes, we offer 0% interest monthly installment plans (Tabby / Tamara and post-dated dental payment arrangements) for dental treatments such as veneers, implants, and clear aligners.',
    },
    {
      q: 'What should I do if I have a dental emergency on the weekend?',
      a: 'We reserve emergency appointment slots every day, including Sundays. Call us directly or message our WhatsApp line (+971 50 820 4400) for immediate triage and same-day pain relief.',
    },
  ];

  return (
    <section id="location" className="relative w-full bg-[#FAFAF7] text-[#1A1816] py-24 px-6 lg:px-12 border-b border-[#EAE7E1]">
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E2DDD3] pb-8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#9E8058] font-semibold block">
              Clinic Location & FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
              Visit Veneto Dental Clinic in Dubai
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-sans text-[#5C564D] leading-relaxed">
            Conveniently located in Business Bay, just 5 minutes from Downtown Dubai and DIFC. Easy road access with dedicated patient valet.
          </div>
        </div>

        {/* Location & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Address & Hours Card */}
          <div className="lg:col-span-6 bg-white border border-[#DDD7CB] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-wider text-[#9E8058] font-bold block">
                Practice Coordinates
              </span>
              <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                Veneto Dental & Aesthetic Clinic Dubai
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#5C564D]">
                {CLINIC_INFO.address}
              </p>
            </div>

            <div className="space-y-4 pt-3 border-t border-[#EDE8DE] text-xs font-sans text-[#4A453E]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9E8058] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1816] block">Working Hours</span>
                  <span>{CLINIC_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#9E8058] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1816] block">Valet Parking</span>
                  <span>{CLINIC_INFO.parking}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9E8058] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1816] block">Direct Telephone</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-[#9E8058] hover:underline font-semibold">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#1A1816] block">WhatsApp Appointment Desk</span>
                  <a
                    href={CLINIC_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline font-semibold"
                  >
                    {CLINIC_INFO.whatsapp} (Direct Chat)
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Map & Booking Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-3">
              <a
                href="#book-now"
                className="flex-1 h-11 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Book Appointment Online</span>
              </a>

              <a
                href="https://maps.google.com/?q=The+Opus+by+Omniyat+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-lg border border-[#D5CFBF] hover:bg-[#F5F2EB] text-[#1A1816] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2"
              >
                <NavIcon className="w-3.5 h-3.5 text-[#9E8058]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div id="faqs" className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#9E8058] font-bold">
                <HelpCircle className="w-4 h-4 text-[#9E8058]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                Everything You Need to Know Before Visiting
              </h3>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#DDD7CB] bg-white overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-sans text-xs sm:text-sm font-semibold text-[#1A1816] hover:text-[#9E8058] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#9E8058] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#7A7365] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs font-sans text-[#5C564D] leading-relaxed border-t border-[#F0ECE5]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#DDD7CB] flex items-center justify-between text-xs font-sans">
              <div>
                <span className="font-semibold text-[#1A1816] block">Have another question?</span>
                <span className="text-[#6B655A]">Our dental receptionists are ready to assist you.</span>
              </div>
              <a
                href={CLINIC_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors shrink-0"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
