import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.png";

// Import proper icons
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.username.trim()) err.username = "Username is required";
    if (!form.password) err.password = "Password is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      alert("Login successful (demo)");
    }
  };

  return (
    <div className="gp-page">
      <form className="gp-card" onSubmit={handleSubmit} noValidate>

        {/* Logo */}
        <div className="gp-logo-wrap">
          <img src={logo} alt="Golden Planet" className="gp-logo" />
        </div>

        {/* Username */}
        <label htmlFor="username" className="gp-label">
          Username <span className="gp-required">*</span>
        </label>

        <div className={`gp-input-wrap ${errors.username ? "error" : ""}`}>
          <span className="gp-icon"><FaEnvelope /></span>

          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        {errors.username && (
          <div className="gp-error">{errors.username}</div>
        )}

        {/* Password */}
        <label htmlFor="password" className="gp-label">
          Password <span className="gp-required">*</span>
        </label>

        <div className={`gp-input-wrap ${errors.password ? "error" : ""}`}>
          <span className="gp-icon"><FaLock /></span>

          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="button"
            className="gp-eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        {errors.password && (
          <div className="gp-error">{errors.password}</div>
        )}

        {/* Forgot Links */}
        <div className="gp-forgot-line">
          <a href="#forgot-username">Forgot Username</a>
          <span className="gp-sep">|</span>
          <a href="#forgot-password">Forgot Password</a>
        </div>

        {/* Login Button */}
        <button type="submit" className="gp-login-btn">
          Login
        </button>

      </form>
    </div>
  );
}

