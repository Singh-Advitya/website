import React, { useState } from 'react';
import { useClinic } from './AtmosphereContext';
import { CLINIC_INFO, DOCTORS, TREATMENTS } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { X, Check, ArrowRight, MessageCircle, Phone, Calendar, Clock, ShieldCheck } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, preselectedService, preselectedDoctor } = useClinic();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Comprehensive Dental Examination & 3D X-Ray',
    doctor: preselectedDoctor || 'Any Available Specialist',
    preferredDate: '',
    timeSlot: 'Morning (09:00 - 12:00)',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isBookingOpen) return null;

  const timeSlots = [
    'Morning (09:00 - 12:00)',
    'Midday (12:00 - 15:00)',
    'Afternoon (15:00 - 18:00)',
    'Evening (18:00 - 20:00)',
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setBookingRef(`VNT-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    closeBooking();
  };

  const whatsappBookingMessage = encodeURIComponent(
    `Hello Veneto Dental Clinic. I would like to confirm my appointment (Ref: ${bookingRef}):\n• Treatment: ${formData.service}\n• Dentist: ${formData.doctor}\n• Patient Name: ${formData.name}\n• Date: ${formData.preferredDate || 'Flexible'}\n• Time: ${formData.timeSlot}`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[#DDD7CB] rounded-2xl p-6 sm:p-9 shadow-2xl text-[#1A1816] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5F2EB] hover:bg-[#EAE5DA] text-[#6B655A] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Progress Header */}
        <div className="mb-6 space-y-2.5">
          <div className="flex items-center gap-3.5">
            <VenetoLogo size="sm" variant="black" className="shrink-0" />
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[#9E8058]">
                <span>Dental Appointment Booking</span>
                <span>Step 0{step} of 03</span>
              </div>
            </div>
          </div>

          <div className="h-[3px] w-full bg-[#F0ECE5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1A1816] transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleNext} className="space-y-5">
            {/* Step 1: Select Dental Treatment & Doctor */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                    Select Treatment & Dentist
                  </h3>
                  <p className="text-xs font-sans text-[#6B655A] mt-0.5">
                    Choose the dental service you need and your preferred dentist.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                    Dental Treatment / Procedure *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.startingPriceAED})
                      </option>
                    ))}
                    <option value="Emergency Toothache / Pain Relief">Emergency Toothache / Immediate Pain Relief</option>
                    <option value="Second Opinion Diagnostic Review">Second Opinion Diagnostic Review</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                    Preferred Dentist
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                  >
                    <option value="Any Available Specialist">First Available Dentist</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} — {d.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Slot */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                    Preferred Appointment Time
                  </h3>
                  <p className="text-xs font-sans text-[#6B655A] mt-0.5">
                    We offer unhurried 1-on-1 consultations with zero waiting times.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                    Time Window
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((ts) => (
                      <button
                        type="button"
                        key={ts}
                        onClick={() => setFormData({ ...formData, timeSlot: ts })}
                        className={`p-3 rounded-lg border text-left text-xs font-sans transition-all cursor-pointer ${
                          formData.timeSlot === ts
                            ? 'border-[#9E8058] bg-[#F2EDE4] font-semibold text-[#1A1816]'
                            : 'border-[#E0DBD0] bg-[#FAF9F5] text-[#5C564D] hover:bg-white'
                        }`}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Patient Information */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1A1816]">
                    Patient Information
                  </h3>
                  <p className="text-xs font-sans text-[#6B655A] mt-0.5">
                    We will send your appointment confirmation via SMS and WhatsApp.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-sans text-[#4A453E] font-semibold block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="patient@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-3 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-sans text-[#4A453E] block">
                    Specific Symptoms or Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Broken tooth, need clean and polish, sensitive to cold"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058]"
                  />
                </div>
              </div>
            )}

            {/* Step Controls */}
            <div className="pt-3 border-t border-[#EDE8DE] flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 rounded-lg border border-[#D5CFBF] text-[#5C564D] hover:bg-[#F5F2EB] text-xs font-sans font-semibold uppercase cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                className="h-11 px-7 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center gap-2 cursor-pointer shadow-xs ml-auto"
              >
                <span>{step === 3 ? 'Confirm Appointment Request' : 'Next Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-4 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold text-[#9E8058] block">
                BOOKING REF: {bookingRef}
              </span>
              <h3 className="text-2xl font-serif text-[#1A1816]">
                Appointment Request Submitted
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#5C564D] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our dental reception will contact you shortly to confirm your exact time slot.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E0DBD0] text-left text-xs font-sans space-y-1.5 max-w-md mx-auto">
              <div><span className="text-[#7A7365]">Service:</span> <span className="font-semibold text-[#1A1816]">{formData.service}</span></div>
              <div><span className="text-[#7A7365]">Dentist:</span> <span className="font-semibold text-[#1A1816]">{formData.doctor}</span></div>
              <div><span className="text-[#7A7365]">Clinic:</span> <span className="text-[#1A1816]">Level 14, The Opus, Business Bay, Dubai</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/971508204400?text=${whatsappBookingMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Confirmation</span>
              </a>

              <button
                type="button"
                onClick={resetAndClose}
                className="w-full sm:w-auto h-11 px-5 rounded-lg border border-[#D5CFBF] hover:bg-[#F5F2EB] text-[#1A1816] font-sans text-xs font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
