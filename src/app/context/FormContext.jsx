"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {},
    professionalInfo: {},
    documents: {},
    accountAccess: {},
  });

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
