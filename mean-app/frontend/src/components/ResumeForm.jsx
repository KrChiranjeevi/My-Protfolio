import React, { useState } from 'react';
import axios from 'axios';
import generatePDF from '../utils/pdfGenerator';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/resume', formData);
    generatePDF(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {['name', 'email', 'phone', 'skills', 'experience'].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={`Enter your ${field}`}
          value={formData[field]}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />
      ))}
      <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
        Generate Resume PDF
      </button>
    </form>
  );
};

export default ResumeForm;
