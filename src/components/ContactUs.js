import React, { useState } from 'react';
import './ContactUs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from "./Loader";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        select: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phone') {
            if (!/^\d*$/.test(value) || value.length > 12) {
                return;
            }
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        if (!formData.select || !formData.name || !formData.email || !formData.phone || !formData.message) {
            toast.error("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (formData.phone.length < 10) {
            toast.error("Phone number must be at least 10 digits.");
            return;
        }

        try {
            const response = await axios.post('https://info.backend.cholokini.sahossain.com/api/contact', formData);

            toast.success("Enquiry submitted successfully!");
            
            setFormData({
                select: '',
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error("Error submitting enquiry:", error);
            toast.error("Failed to submit enquiry. Please try again later.");
        } finally {
            setIsLoading(false);
          }
    };

    return (
        <div className="contact-us-container">
            <ToastContainer />
            <h1 className="contact-us-title">Contact Us</h1>
            <div className="enquiry-form">
                <h2>Enquiry</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>SELECT</span>
                        <select name="select" value={formData.select} onChange={handleChange} required>
                            <option value="">Select Enquiry Type</option>
                            <option>Land Development Enquiry</option>
                            <option>Property Purchase</option>
                            <option>Consultation</option>
                        </select>
                    </label>
                    <label>
                        <span>NAME</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    </label>
                    <label>
                        <span>EMAIL</span>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    </label>
                    <label>
                        <span>PHONE</span>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                    </label>
                    <label>
                        <span>MESSAGE</span>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
                    </label>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <Loader isVisible={isLoading} />
        </div>
    );
};

export default ContactUs;