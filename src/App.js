import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ContactUs from './components/ContactUs';
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutUs from "./components/AboutUs";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import "./App.css";

function App() {
  return (
    <Router basename="/">
        <div>
          <HeroSection/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ImageSlider />
                  <ProductCards />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
          <FloatingWhatsAppButton />
        </div>
    </Router>
  );
}

export default App;