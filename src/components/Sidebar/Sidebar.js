import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaServicestack,
  FaBlog,
  FaCog,
  FaTimes,
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Home', path: '/', icon: FaHome },
    { label: 'Account', path: '/account', icon: FaUser },
    { label: 'Schedule Call', path: '/schedule-call', icon: FaCalendarAlt },
    { label: 'Subject/Topic', path: '/subject-topic', icon: FaBlog },
    { label: 'Services', path: '/services', icon: FaServicestack },
    { label: 'Blog', path: '/blog', icon: FaBlog },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Close Button for Mobile */}
        <button className="close-btn" onClick={onClose} aria-label="Close menu">
          <FaTimes size={24} />
        </button>

        {/* Menu Items */}
        <nav className="sidebar-menu">
          <h3 className="menu-title">Menu</h3>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                className="menu-item"
                onClick={onClose}
              >
                <IconComponent className="menu-icon" size={20} />
                <span className="menu-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Settings at Bottom */}
        <div className="sidebar-footer">
          <button className="settings-btn">
            <FaCog size={20} />
            <span className="menu-label">Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
