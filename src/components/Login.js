import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.png";
import axios from "axios";

// Import proper icons
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiData, setApiData] = useState(null); // store API response

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Prepare payload with null lat, long, ip
        const data = {
          userName: form.username,
          password: form.password,
          latitude: null,
          longitude: null,
          ipAddress: null
        };

        const response = await axios.post(
          "http://156.67.110.83:7080/user/login",
          data,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJzYW5qdW11cnVnYW4yMDAyQGdtYWlsLmNvbSIsImlkIjoxLCJyb2xlIjpbIkFETUlOIl0sImlhdCI6MTc2NDkxNjczNCwiZXhwIjoxNzY0OTE4NTM0fQ.gHb1kEt0Lgt9nT9uEMvrCXEyHf9HY1IYZTX1OCA63zM.`
            }
          }
        );

        console.log("API response:", response.data);
        setApiData(response.data);
      } catch (error) {
        console.error("API error:", error);
        alert("Login failed. Check console for details.");
      }
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

      {/* API Response Table */}
      {apiData && (
        <div style={{ width: "90%", maxWidth: "800px", marginTop: "30px" }}>
          <h3>API Response</h3>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left"
            }}
          >
            <thead>
              <tr>
                {Object.keys(apiData).map((key) => (
                  <th
                    key={key}
                    style={{ border: "1px solid #ccc", padding: "8px" }}
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(apiData).map((value, idx) => (
                  <td
                    key={idx}
                    style={{ border: "1px solid #ccc", padding: "8px" }}
                  >
                    {JSON.stringify(value)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
