import React from "react";
import "./SiteFooter.css";
import yellowLogo from "../../assets/images/yellowLogo.png"; 
import phones from "../../assets/images/phones.png";

function SiteFooter() {
  return (
    <footer className="site-footer">

      {/* YELLOW SECTION */}
      <section className="footer-app-section">
        <div className="footer-app-container">

          {/* LEFT - Phones */}
          <div className="footer-phone-holder">
            <img src={phones} alt="phones" className="footer-phone-img" />
          </div>

          {/* CENTER - Top Motor + Quote */}
          <div className="footer-center-text">
            <h3>TOP MOTORS</h3>
            <p className="footer-quote-text">Buy and find just about anything</p>
            <p className="footer-quote-text">Vehicle's using the app on your mobile</p>
          </div>

          {/* RIGHT - Download */}
          <div className="footer-download-section">
            <p className="get-app-now">Get your app now</p>
            <div className="store-buttons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ width: "150px" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* BLUE SECTION */}
      <section className="footer-blue-section">

        <div className="footer-blue-content">

          {/* LEFT COLUMN: Logo + Email */}
          <div className="footer-left-group">
            <img src={yellowLogo} alt="brand" className="footer-brand-logo" />

            <div className="email-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* RIGHT COLUMN: Vehicles + Others */}
          <div className="footer-links-container">
            
            <div className="footer-links">
              <h4>Vehicles</h4>
              <ul>
                <li>Land Vehicles</li>
                <li>Air Vehicles</li>
                <li>Water Vehicles</li>
                <li>Power Tools</li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Others</h4>
              <ul>
                <li>Power Tools</li>
                <li>Shipping</li>
                <li>Repair Shops</li>
                <li>Insurance</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          Copyrights © 2025 All rights reserved.
        </p>
      </section>

    </footer>
  );
}

export default SiteFooter;
