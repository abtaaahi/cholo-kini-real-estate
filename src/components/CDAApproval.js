import React from "react";
import ReactMarkdown from "react-markdown";
import "./Policy.css";

const CDAApproval = () => {
  const markdown = `
# A Comprehensive Guide to Obtaining a Building Permit from Chattogram Development Authority (CDA)  

If you are planning to undertake construction or development in Chattogram, obtaining a building permit from the Chattogram Development Authority (CDA) is an essential step. This guide provides an overview of the requirements and documents you need to submit to ensure a smooth application process. Additionally, professional support services are available to assist clients in navigating the process effectively.  

---

### Why a Building Permit is Necessary  
A building permit is a legal document that ensures construction complies with local regulations, zoning laws, and safety standards. It is crucial for safeguarding property values, public safety, and environmental sustainability.  

---

### Key Requirements for a CDA Building Permit  
Applicants must submit the following documents in PDF format. Ensure all documents are clear, complete, and properly scanned to avoid processing delays.  

#### General Requirements:  
1. *Application Fee Receipt*  
   - A copy of the chalan (official payment slip) confirming the application fee.  

2. *Receipt of Submitted Form*  
   - A receipt detailing the form number and payment amount.  

3. *Identification Documents*  
   - A copy of your National ID (NID) or passport.  

4. *Taxpayer Information*  
   - A copy of your Tax Identification Number (TIN) certificate.  

#### Land Ownership Documents:  
- *If the land is inherited:*  
  - Scanned copies of RS and BS Khatian.  
  - An inheritance certificate verifying your claim to the property.  

- *If the land was purchased:*  
  - A scanned copy of BS Namjari or the Original Namjari Khatian.  
  - Scanned copies of pages showing details of the donor and recipient in the original purchase documentation.  

#### Land Use and Zoning Approvals:  
1. *Approved Land Use Type*  
   - Residential, commercial, industrial, or other zones. Provide:  
     - Scanned copy of BS Namjari Khatian.  
     - Scanned copy of the possession certificate.  
     - Scanned pages detailing the donor’s name, allotment description, original lease deed, and lease terms.  

2. *Attorney Deeds (if applicable):*  
   - A scanned copy of the original attorney deed.  

3. *Lease Agreement (if applicable):*  
   - An attested scanned copy of the original lease agreement.  

#### Mapping and Site Details:  
1. *Mouza Map*  
   - A map of the specific Mouza (local administrative unit) in A3 or A4 size.  

2. *Location Map*  
   - A detailed location map of the site in A3 or A4 size.  

---

### Professional Support for Building Permit Approval  

Navigating the CDA building permit process can be complex, especially for first-time applicants. To simplify the process, I provide personalized support services that include:  

1. *Document Preparation and Review*  
   - Ensuring all required documents are accurate, properly formatted, and meet CDA standards.  

2. *Application Submission*  
   - Submitting your application on your behalf and managing correspondence with CDA officials.  

3. *Fee Payments*  
   - Handling the payment of application and processing fees to ensure timely submission.  

4. *Follow-Up Services*  
   - Actively tracking the status of your application and addressing any queries or issues raised by CDA.  

5. *Expedited Approvals*  
   - Leveraging professional networks to resolve delays and ensure a faster approval process.  

6. *Legal and Technical Advice*  
   - Providing expert guidance on legal and zoning requirements specific to your project.  

---

### Why Choose Professional Support?  

- *Efficiency:* Save time and avoid errors that could delay approval.  
- *Compliance:* Ensure all documents and processes meet CDA requirements.  
- *Convenience:* Delegate the hassle of navigating bureaucratic procedures to an expert.  
- *Assurance:* Increase your chances of obtaining a permit smoothly and efficiently.  

---

### Get in Touch  

If you are looking for reliable support to secure a building permit from CDA, I am here to help. Whether it’s document preparation, fee payments, or managing the entire approval process, you can trust me to deliver professional results.  

Contact me today to discuss your project and how I can assist you in achieving your development goals.
  `;
  return (
   <div className="parent-container">
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </div>
  );
};

export default CDAApproval;
