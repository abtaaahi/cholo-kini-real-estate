import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import DreamHome from "./components/DreamHome";
import CustomerReview from "./components/CustomerReview";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ContactUs from './components/ContactUs';
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutUs from "./components/AboutUs";
import DesignConsultancy from "./components/DesignConsultancy";
import InteriorSolution from "./components/InteriorSolution";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <div>
        <ToastContainer position="bottom-center" autoClose={2000} />
        <HeroSection/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <ImageSlider /> */}
                <DreamHome />
                <ProductCards />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/review" element={<CustomerReview />} />
          <Route path="/designconsultency" element={<DesignConsultancy />} />
          <Route path="/interiorsolution" element={<InteriorSolution />} />
        </Routes>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;