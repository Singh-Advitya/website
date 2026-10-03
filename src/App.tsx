import React from 'react';
import { ClinicProvider } from './components/AtmosphereContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { QuickBookingSection } from './components/QuickBookingSection';
import { TreatmentDirectory } from './components/TreatmentDirectory';
import { SanctuarySection } from './components/SanctuarySection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { CareCharter } from './components/CareCharter';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { CustomCursor } from './components/CustomCursor';

const MainExperience: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1A1816] selection:bg-[#B8976C]/25 selection:text-[#1A1816] font-sans antialiased overflow-x-hidden">
      {/* Unique Bespoke Luxury Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main Dental Experience Flow */}
      <main className="w-full">
        {/* Modern Dental Hero with Quick Booking CTA */}
        <Hero />

        {/* Quick Appointment Booking / Order Section */}
        <QuickBookingSection />

        {/* Comprehensive Dental Treatments & Transparent Pricing */}
        <TreatmentDirectory />

        {/* Modern Clinical Standards & Pain-Free Dental Technology */}
        <SanctuarySection />

        {/* Licensed DHA Specialists & Dentists */}
        <SpecialistsSection />

        {/* 4 Patient Guarantees & Integrity Charter */}
        <CareCharter />

        {/* Verified Patient Reviews */}
        <TestimonialsSection />

        {/* Location, Working Hours & Frequently Asked Questions */}
        <LocationSection />
      </main>

      {/* Clean Practice Footer */}
      <Footer />

      {/* Appointment & Treatment Dossier Modals */}
      <BookingModal />
      <TreatmentDetailModal />
    </div>
  );
};

export default function App() {
  return (
    <ClinicProvider>
      <MainExperience />
    </ClinicProvider>
  );
}
