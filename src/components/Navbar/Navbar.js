import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGoogle, FaInstagram, FaTwitter, FaSearch, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const [language, setLanguage] = useState('English');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <nav className="navbar">
      {/* Left Section - Brand Logo and Hamburger */}
      <div className="navbar-left">
        <button className="hamburger-btn" onClick={onMenuClick} aria-label="Menu">
          <FaBars size={24} />
        </button>
        <Link to="/" className="brand-logo">
          <span className="brand-text">InfoCareer</span>
        </Link>
      </div>

      {/* Right Section - Social Icons, Search Bar, Language Selector */}
      <div className="navbar-right">
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <FaGoogle size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <FaSearch size={16} />
          </button>
        </form>

        {/* Language Selector */}
        <div className="language-selector">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-dropdown"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
