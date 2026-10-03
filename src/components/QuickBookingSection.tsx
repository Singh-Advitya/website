import React, { useState } from 'react';
import { TREATMENTS, DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { VenetoLogo } from './VenetoLogo';
import { Calendar, Clock, CheckCircle2, Phone, MessageCircle, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export const QuickBookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    treatment: TREATMENTS[0].name,
    doctor: 'Any Available Specialist',
    date: '',
    timeSlot: 'Morning (09:00 - 12:00)',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const timeOptions = [
    'Morning (09:00 - 12:00)',
    'Midday (12:00 - 15:00)',
    'Afternoon (15:00 - 18:00)',
    'Evening (18:00 - 20:00)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `VNT-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Veneto Dental Clinic Dubai. I have submitted an appointment request (Ref: ${bookingRef}):\n• Treatment: ${formData.treatment}\n• Dentist: ${formData.doctor}\n• Patient: ${formData.fullName}\n• Date: ${formData.date || 'Flexible'}\n• Time: ${formData.timeSlot}`
  );

  return (
    <section id="book-now" className="relative w-full bg-[#F4F1EA] text-[#1A1816] py-20 px-6 lg:px-12 border-b border-[#E2DDD3]">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto flex flex-col items-center">
          <VenetoLogo size="md" variant="black" className="hover:scale-105 transition-transform" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DDD7CB] text-xs font-sans text-[#7A7365] shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#9E8058]" />
            <span className="font-semibold text-[#1A1816]">Instant Appointment Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1816] font-medium leading-tight">
            Book Your Dental Appointment
          </h2>
          <p className="text-sm font-sans text-[#5C564D] leading-relaxed">
            Fill out the details below to request your consultation or dental procedure. Our reception team will confirm your time slot within 30 minutes during opening hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-[#DDD7CB] p-6 sm:p-10 shadow-lg max-w-3xl mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Select Dental Treatment */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                  01 / Select Dental Treatment or Service *
                </label>
                <select
                  required
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3.5 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] focus:ring-1 focus:ring-[#9E8058] transition-colors"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.startingPriceAED})
                    </option>
                  ))}
                  <option value="Emergency Toothache / Pain Relief">Emergency Toothache / Immediate Pain Relief</option>
                  <option value="General Second Opinion Consultation">General Second Opinion Consultation</option>
                </select>
              </div>

              {/* Step 2: Dentist & Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                    02 / Preferred Dentist
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                  >
                    <option value="Any Available Specialist">First Available Dentist</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={`${d.name} (${d.specialty.split(',')[0]})`}>
                        {d.name} ({d.title.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                    03 / Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                  />
                </div>
              </div>

              {/* Step 3: Time Slot */}
              <div className="space-y-2">
                <label className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                  04 / Preferred Time of Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, timeSlot: opt })}
                      className={`p-2.5 rounded-lg border text-xs font-sans font-medium transition-all text-center cursor-pointer ${
                        formData.timeSlot === opt
                          ? 'border-[#9E8058] bg-[#F2EDE4] text-[#1A1816] font-semibold'
                          : 'border-[#E0DBD0] bg-[#FAF9F5] text-[#5C564D] hover:bg-white'
                      }`}
                    >
                      {opt.split(' ')[0]}
                      <span className="block text-[10px] text-[#7A7365] mt-0.5">{opt.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Patient Contact Info */}
              <div className="pt-2 border-t border-[#EDE8DE] space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-sans uppercase tracking-wider text-[#7A7365] font-semibold block">
                    05 / Patient Information
                  </span>
                  <p className="text-xs text-[#7A7365]">
                    Your information is protected under strict DHA medical privacy regulations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-sans text-[#4A453E] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-sans text-[#4A453E] block mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-sans text-[#4A453E] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-sans text-[#4A453E] block mb-1">
                      Specific Concern / Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tooth sensitivity, need checkup"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#D5CFBF] rounded-lg px-4 py-3 text-sm font-sans text-[#1A1816] focus:outline-hidden focus:border-[#9E8058] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-13 rounded-lg bg-[#1A1816] text-white hover:bg-[#9E8058] transition-colors text-xs font-sans tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#E6DACB]" />
                  <span>Submit Appointment Booking</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A7365] mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9E8058]" />
                  <span>No payment required right now · Pay at the clinic after consultation</span>
                </div>
              </div>
            </form>
          ) : (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold text-[#9E8058] block">
                  REFERENCE NUMBER: {bookingRef}
                </span>
                <h3 className="text-2xl font-serif text-[#1A1816]">
                  Appointment Request Received
                </h3>
                <p className="text-sm font-sans text-[#5C564D] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1A1816]">{formData.fullName}</strong>. Your dental appointment request has been sent to our reception team.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E0DBD0] text-left text-xs font-sans space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#7A7365]">Treatment:</span>
                  <span className="font-semibold text-[#1A1816]">{formData.treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7365]">Dentist:</span>
                  <span className="font-semibold text-[#1A1816]">{formData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7365]">Requested Date:</span>
                  <span className="font-semibold text-[#1A1816]">{formData.date || 'Earliest Available'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A7365]">Time Window:</span>
                  <span className="font-semibold text-[#1A1816]">{formData.timeSlot}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/971508204400?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-12 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto h-12 px-6 rounded-lg border border-[#D5CFBF] hover:bg-[#F5F2EB] text-[#1A1816] font-sans text-xs tracking-wider uppercase font-medium transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
