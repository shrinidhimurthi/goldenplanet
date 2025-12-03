import React from 'react';
import './TopHeader.css';
import brandLogo from '../../assets/images/brandLogo.png'; // replace with your combined bike/car/plane/yacht logo
import userImg from '../../assets/images/user.jpg'; // small circle image of the user
import { FaSearch, FaMapMarkerAlt, FaBell, FaChevronDown } from 'react-icons/fa'; // using react-icons

function TopHeader() {
  return (
    <header className="top-header">
      {/* Left Section: Location and Search */}
      <div className="header-left">
        <div className="header-box location-box">
          <FaMapMarkerAlt className="icon" />
          <span>Chennai, In</span>
        </div>
        <div className="header-box search-box">
          <input type="text" placeholder="Search product" />
          <FaSearch className="icon" />
        </div>
      </div>

      {/* Center Section: Brand Logo */}
      <div className="header-center">
        <img src={brandLogo} alt="Brand Logo" className="brand-logo" />
        
      </div>

      {/* Right Section: Post Ad, Notifications, User */}
      <div className="header-right">
        <button className="post-ad-btn">Post Ad</button>
        <div className="notification">
          <FaBell />
          <span className="notif-count">1</span>
        </div>
        <div className="user-profile">
          <img src={userImg} alt="User" className="user-img" />
          <span className="user-name">Lainey Doe</span>
          <FaChevronDown />
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
