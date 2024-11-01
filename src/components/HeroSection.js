// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-logo">
        <h1>Cholo Kini Real Estate</h1>
      </div>
      <div className="hero-sections">
      {/* <Link to="https://cholo.kini.sahossain.com/cholo-kini">Browse our E-Commerce</Link> */}
      <a href="https://cholo.kini.sahossain.com/cholo-kini" target="_blank" rel="noopener noreferrer">
  Browse our E-Commerce
</a>
      </div>
      <div className="hero-cart">
      <Link to="/cart">
        <button className="cart-button">Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;