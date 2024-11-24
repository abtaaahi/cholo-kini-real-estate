import React from "react";
import './Loader.css';

const Loader = ({ isVisible }) => {
  return isVisible ? (
    <div className="loader-overlay">
      <div className="loader">
        <div style={{ '--i': 1 }}></div>
        <div style={{ '--i': 2 }}></div>
        <div style={{ '--i': 3 }}></div>
        <div style={{ '--i': 4 }}></div>
      </div>
    </div>
  ) : null;
};

export default Loader;