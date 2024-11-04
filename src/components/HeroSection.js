import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Footer from "./Footer";
import 'remixicon/fonts/remixicon.css';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <div className="hero">
      <div className="hero-logo">
        <h1>Cholo Kini</h1>
        <h2>Real Estate</h2>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className="ri-menu-3-line"></i>
      </div>
      
      {/* Overlay menu */}
      {menuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-section">
              <Link to="/" className="menu-link" onClick={handleMenuLinkClick}>Home</Link>
              <span className="divider"></span>
              <Link to="/aboutus" className="menu-link" onClick={handleMenuLinkClick}>About Us</Link>
              <span className="divider"></span>
              <Link to="/contact" className="menu-link" onClick={handleMenuLinkClick}>Contact Us</Link>
            </div>

            {/* <h3>Services:</h3> */}
            <div className="menu-section">
              <Link to="/interiorsolution" className="menu-link" onClick={handleMenuLinkClick}>Interior Solution</Link>
              <span className="divider"></span>
              <Link to="/cdaapproval" className="menu-link" onClick={handleMenuLinkClick}>CDA Approval</Link>
              <span className="divider"></span>
              <Link to="/legalvetting" className="menu-link" onClick={handleMenuLinkClick}>Legal Vetting</Link>
              <span className="divider"></span>
              <Link to="/designconsultency" className="menu-link" onClick={handleMenuLinkClick}>Design Consultency</Link>
              <span className="divider"></span>
              <Link to="/registrationsupport" className="menu-link" onClick={handleMenuLinkClick}>Registration Support</Link>
            </div>

            {/* <h3>Others:</h3> */}
            <div className="menu-section">
              <Link to="/policy" className="menu-link" onClick={handleMenuLinkClick}>Privacy Policy</Link>
              <span className="divider"></span>
              <a href="https://cholo.kini.sahossain.com/" target="_blank" rel="noopener noreferrer" className="menu-link">
                Browse our Online Shop
              </a>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;