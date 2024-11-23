import React from "react";
import "./WhatWeDo.css"; // Import the styles for the component

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="overlay">
        <h1>WHAT WE DO</h1>
        <div className="sections">
          <div>Architecture</div>
          <div>Interior Design</div>
          <div>Landscape</div>
          <div>Construction</div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;