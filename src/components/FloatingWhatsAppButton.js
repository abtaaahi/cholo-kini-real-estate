import React from "react";
import "./FloatingWhatsAppButton.css";
import { Link } from "react-router-dom"; // Import if you're using a route-based solution
import 'remixicon/fonts/remixicon.css';


const FloatingWhatsAppButton = () => {
  const whatsappNumber = "+8801700707184"; // Add your WhatsApp number here

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-button"
    >
      <i class="ri-whatsapp-line"></i>
    </a>
  );
};

export default FloatingWhatsAppButton;