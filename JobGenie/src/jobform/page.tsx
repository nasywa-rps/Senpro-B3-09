'use client';

import React, { useState, useEffect } from 'react';
import '../app.css'; // Import global CSS

type FormData = {
  data1: string;
  data2: string;
  data3: string;
  data4: string;
  data5: string;
  cvFile: File | null;
};

const JobForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    data1: '',
    data2: '',
    data3: '',
    data4: '',
    data5: '',
    cvFile: null,
  });

  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cvFile: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification({ message: 'Form submitted successfully!', type: 'success' });
  };

  return (
    <div className="jobform-container">
      {/* Main Content */}
      <div className="jobform-content">
        <h1 className="jobform-title">Lorem Ipsum</h1>

        <div className="jobform-form-wrapper">
          <h2 className="jobform-subtitle">Isi Data</h2>

          <form onSubmit={handleSubmit}>
            {["data1", "data2", "data3", "data4", "data5"].map((name, index) => (
              <div key={index} className="jobform-input-group">
                <label className="jobform-label">Data {index + 1}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name as keyof FormData] as string}
                  onChange={handleChange}
                  className="jobform-input"
                />
              </div>
            ))}

            <hr className="jobform-divider" />

            {/* File Input */}
            <div className="jobform-file-group">
              <label className="jobform-label">Masukkan CV</label>
              <div className="jobform-file-wrapper">
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  accept=".pdf,.doc,.docx" 
                  className="jobform-file-input"
                />
                <span className="jobform-file-note">*File CV harus dalam bentuk ATS</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="jobform-button-wrapper">
              <button type="submit" className="jobform-submit-button">
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;

