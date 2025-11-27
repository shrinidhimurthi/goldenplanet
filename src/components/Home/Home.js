import React from 'react';
import {
  FaUserTie,
  FaChartLine,
  FaTachometerAlt,
  FaCloudUploadAlt,
  FaDatabase,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const services = [
    { icon: FaUserTie, label: 'Mentoring', color: '#667eea' },
    { icon: FaChartLine, label: 'Consulting', color: '#764ba2' },
    { icon: FaTachometerAlt, label: 'Tech Agile', color: '#f093fb' },
    { icon: FaCloudUploadAlt, label: 'Salesforce', color: '#4facfe' },
    { icon: FaDatabase, label: 'Data Annotation', color: '#00f2fe' },
  ];

  const offices = [
    { city: 'San Francisco', country: 'USA', posX: '25%', posY: '30%' },
    { city: 'Sierra Leone', country: 'Africa', posX: '45%', posY: '60%' },
    { city: 'Noida', country: 'India', posX: '72%', posY: '50%' },
    { city: 'Chennai', country: 'India', posX: '75%', posY: '65%' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-quote">"Collaborate with InfoCareer"</h1>
          <p className="hero-subtitle">Transform Your Career, Together</p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="values-container">
          <div className="value-card">
            <h3>Ethical & Transparent</h3>
            <p>We believe in honest communication and transparent practices in everything we do.</p>
          </div>
          <div className="value-card">
            <h3>Dynamic & Transformational</h3>
            <p>We adapt to change and transform careers through innovative solutions.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h2>InfoCareer Services</h2>
          <p>Comprehensive solutions tailored for your success</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card">
                <div
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  <IconComponent size={50} />
                </div>
                <h3>{service.label}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Global Presence</h2>
        <div className="map-container">
          <div className="world-map">
            {/* World Map Background Image */}
            <img
              src={require('../../assets/ic-office-map.png')}
              alt="World Map"
              className="map-image"
            />
          </div>

          <aside className="office-card">
            <h3>Our Office Locations</h3>

            <div className="office-item">
              <h4>Chennai</h4>
              <address>
                Sri Ram Nivas, 3rd Floor, No.38,<br />
                Venkatakrishna Road, Mandaveli,<br />
                Chennai – 600028.
              </address>
            </div>

            <div className="office-item">
              <h4>Noida</h4>
              <address>
                H-187, Sector 63,<br />
                Noida,<br />
                Uttar Pradesh – 201 307.
              </address>
            </div>

            <div className="office-item">
              <h4>Infocareer®, Inc. (San Francisco)</h4>
              <address>
                548 Market Street,<br />
                San Francisco,<br />
                CA 94104
              </address>
            </div>

            <div className="office-item">
              <h4>ITCon – InfoCareer® Telis (Consortium) Ltd (Freetown)</h4>
              <address>
                37, Soldier Street,<br />
                Freetown, Sierra Leone,<br />
                West Africa.
              </address>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>InfoCareer</h4>
            <p>Transforming careers, one opportunity at a time.</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📧 Email: <a href="mailto:info@infocareer.in">info@infocareer.in</a></p>
            <p>📞 Phone: <a href="tel:+919876543210">+91-9876543210</a></p>
          </div>
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#mentoring">Mentoring</a></li>
              <li><a href="#consulting">Consulting</a></li>
              <li><a href="#tech-agile">Tech Agile</a></li>
              <li><a href="#salesforce">Salesforce</a></li>
              <li><a href="#data">Data Annotation</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 InfoCareer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
