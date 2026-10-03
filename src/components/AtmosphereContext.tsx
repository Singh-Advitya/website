import React, { createContext, useContext, useState } from 'react';

interface ClinicContextType {
  isBookingOpen: boolean;
  openBooking: (serviceName?: string, doctorName?: string) => void;
  closeBooking: () => void;
  preselectedService: string;
  preselectedDoctor: string;
  selectedTreatmentId: string | null;
  openTreatmentDetail: (id: string) => void;
  closeTreatmentDetail: () => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);

  const openBooking = (serviceName?: string, doctorName?: string) => {
    if (serviceName) setPreselectedService(serviceName);
    if (doctorName) setPreselectedDoctor(doctorName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const openTreatmentDetail = (id: string) => {
    setSelectedTreatmentId(id);
  };

  const closeTreatmentDetail = () => {
    setSelectedTreatmentId(null);
  };

  return (
    <ClinicContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        preselectedService,
        preselectedDoctor,
        selectedTreatmentId,
        openTreatmentDetail,
        closeTreatmentDetail,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
