import React, { useState, useEffect } from 'react';
import './DesignConsultancy.css';
import ReactMarkdown from "react-markdown"; 

const imageArray = [
  'https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


const DesignConsultancy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="design-consultancy">
      <h1>Design Consultancy</h1>
      <div
        className="slideshow-container"
        style={{ backgroundImage: `url(${imageArray[currentIndex]})` }}
      >
        <img
          src={imageArray[currentIndex]}
          alt={`Design Consultancy ${currentIndex + 1}`}
          className="slideshow-image"
        />
      </div>
      <ReactMarkdown className="react-markdown-design">
{`

# Professional Consultancy for Your Dream Projects  

Whether you’re planning to construct your dream home, a commercial space, or a large-scale development, design plays a pivotal role in bringing your vision to life. A well-thought-out design not only enhances aesthetics but also ensures functionality, sustainability, and compliance with regulations.  

With my expertise in real estate and design consultancy, I offer comprehensive solutions tailored to your unique needs, helping you achieve a balance of creativity and practicality.  


### Why Design Consultancy Matters  

Design consultancy goes beyond creating a visually appealing structure—it integrates your requirements, site constraints, and budget to deliver solutions that:  
- Maximize space utilization.  
- Enhance functionality and user experience.  
- Incorporate modern, sustainable design principles.  
- Ensure compliance with local building codes and regulations.  


### Services Offered  

#### 1. Architectural Design Consultation  
   - Creating innovative layouts for residential, commercial, and industrial spaces.  
   - Optimizing designs to meet aesthetic, functional, and regulatory needs.  
   - Preparing blueprints and 3D models for better visualization.  

#### 2. Interior Design Consultation  
   - Planning interiors for comfort, style, and efficiency.  
   - Recommending color schemes, furniture layouts, and materials.  
   - Aligning designs with your personal taste and project purpose.  

#### 3. Landscape Design  
   - Designing outdoor spaces that complement the architecture.  
   - Incorporating sustainable and eco-friendly landscaping techniques.  
   - Creating layouts for gardens, patios, and walkways.  

#### 4. Structural Design and Feasibility  
   - Ensuring structural safety, durability, and efficiency.  
   - Assessing site conditions and recommending suitable designs.  
   - Coordinating with engineers for feasibility studies and implementation.  

#### 5. Sustainable and Green Design  
   - Promoting energy-efficient designs that reduce environmental impact.  
   - Integrating renewable energy options like solar panels and rainwater harvesting.  
   - Using eco-friendly materials for construction and interiors.  


### Why Choose My Consultancy?  

1. **Tailored Solutions**  
   - Every project is unique, and I offer customized designs to reflect your vision and needs.  

2. **Expertise in Real Estate**  
   - With years of experience in the industry, I understand the practical challenges and regulatory requirements involved in construction projects.  

3. **Focus on Innovation**  
   - I bring creative, modern, and sustainable ideas to every project, ensuring your space stands out.  

4. **Budget-Friendly Approaches**  
   - Designs are optimized to fit your budget while maintaining quality and style.  

5. **End-to-End Support**  
   - From concept to execution, I guide you through every step of the design process, ensuring seamless collaboration and results.  


### Projects I Cater To  

- *Residential Spaces:* Homes, apartments, and villas.  
- *Commercial Projects:* Offices, retail stores, and corporate buildings.  
- *Mixed-Use Developments:* Integrated residential and commercial spaces.  
- *Industrial Buildings:* Factories, warehouses, and production facilities.  
- *Outdoor Spaces:* Parks, recreational areas, and landscaping projects.  


### Let's Build Your Vision Together  

Great designs are the foundation of successful projects. Whether you’re starting from scratch or enhancing an existing space, my design consultancy services ensure your project stands out in style, functionality, and compliance.  

Get in touch today to discuss your design needs, and let’s turn your ideas into reality. Together, we’ll create spaces that inspire and thrive!
`}
</ReactMarkdown>

    </div>
  );
};

export default DesignConsultancy;
