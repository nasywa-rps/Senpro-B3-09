'use client';

import React, { useState, useEffect } from 'react';

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
    <div style={{ minHeight: "100vh", backgroundColor: "#F8F5E5", display: "flex", flexDirection: "column" }}>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 0" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}>Lorem Ipsum</h1>

        <div style={{ width: "80%", maxWidth: "800px", marginTop: "32px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "600", color: "black" }}>Isi Data</h2>

          <form onSubmit={handleSubmit}>
            {["data1", "data2", "data3", "data4", "data5"].map((name, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
                <label style={{ color: "black", fontSize: "0.875rem", fontWeight: "500" }}>Data {index + 1}</label>
                <input
                    type="text"
                    name={name}
                    value={formData[name as keyof FormData] as string}
                    onChange={handleChange}
                    style={{
                        width: "712px",
                        height: "97px",
                        fontSize: "20px",
                        fontWeight: "500",
                        border: "1px solid gray",
                        borderRadius: "8px",
                        padding: "8px",
                        backgroundColor: "#B5C6BE",
                        outline: "none",
                    }}
                    />
              </div>
            ))}

            <hr style={{ border: "1px solid gray", margin: "24px 0" }} />

            {/* File Input */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "black", fontSize: "0.875rem", fontWeight: "500" }}>Masukkan CV</label>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  accept=".pdf,.doc,.docx" 
                  style={{ border: "1px solid gray", borderRadius: "6px", padding: "8px", backgroundColor: "#e0e0e0" }} 
                />
                <span style={{ fontSize: "0.75rem", color: "gray" }}>*File CV harus dalam bentuk ATS</span>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
              <button type="submit" style={{
                width: "150px",
                height: "50px",
                backgroundColor: "#F4B860",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}>
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
