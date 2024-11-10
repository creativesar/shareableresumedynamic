"use client";

import { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumeDisplay from "./components/ResumeDisplay";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

const HomePage = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shareable Resume Builder</h1>
      <ResumeForm onSubmit={handleFormSubmit} />
      <ResumeDisplay data={resumeData} />
    </div>
  );
};

export default HomePage;
