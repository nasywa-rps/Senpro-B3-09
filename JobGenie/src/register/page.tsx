'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Copy dari login.css

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }

    // Simulasi proses registrasi
    console.log("Registering:", formData);

    // Redirect ke login setelah register sukses
    navigate('/login');
  };

  return (
    <div className="login-page"> {/* gunakan kembali styling login */}
      <div className="stars"></div>
      <div className="login-container">
        <div className="login-form">
          <h1>Register</h1>

          <div className="input-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="input-field"
            />
            <span className="input-icon">👤</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="input-field"
            />
            <span className="input-icon">🔒</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="input-field"
            />
            <span className="input-icon">🔒</span>
          </div>

          <button className="login-button" onClick={handleSubmit}>
            Register
          </button>

          <div className="register-row">
            <span>Already have an account? </span>
            <a href="#" onClick={() => navigate('/login')} className="register-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
