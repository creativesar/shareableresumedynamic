"use client";

import { useState } from 'react';

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-blue-50 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-bold">Phone:</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="education" className="block font-bold">Education:</label>
        <textarea id="education" name="education" onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="experience" className="block font-bold">Experience:</label>
        <textarea id="experience" name="experience" onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="skills" className="block font-bold">Skills:</label>
        <textarea id="skills" name="skills" onChange={handleChange} required className="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
