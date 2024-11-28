import React from "react";
import ReactMarkdown from "react-markdown";
import "./Policy.css";

const RegistrationSupport = () => {
  const markdown = `
# Comprehensive Registration Support for Your Property Transactions  

Property registration is a critical step in any real estate transaction. It is the legal process that officially transfers ownership and ensures that your rights are protected. However, navigating the complex documentation and procedures involved can be overwhelming. With professional registration support, you can ensure a smooth, error-free process, saving time and avoiding potential legal complications.  

I provide end-to-end registration support for property transactions, ensuring all legal and procedural requirements are met efficiently.  

---

### Why Property Registration is Essential  

- *Legal Ownership:* Registration is the final step that legally establishes you as the owner of the property.  
- *Dispute Prevention:* Ensures the property is free from encumbrances, claims, or disputes.  
- *Compliance with Law:* Fulfills mandatory legal obligations to validate the transaction.  
- *Future Security:* A registered property provides legal protection and increases market value.  

---

### Services Offered  

#### *1. Document Preparation and Verification*  
   - Review and verify all necessary documents, including:  
     - Sale deed.  
     - Title deed.  
     - Mutation and Namjari records.  
     - Tax clearance certificates.  
   - Ensure compliance with local regulations and property laws.  

#### *2. Legal Support*  
   - Conduct due diligence to verify property ownership and encumbrance status.  
   - Draft error-free registration documents and agreements.  
   - Coordinate with legal experts for complex transactions.  

#### *3. Stamp Duty and Registration Fee Assistance*  
   - Calculate applicable stamp duty and registration fees based on property value.  
   - Assist in the payment of fees to the relevant authorities.  

#### *4. Representation at the Sub-Registrar’s Office*  
   - Represent you during the registration process at the sub-registrar’s office.  
   - Ensure proper execution of documents, including signature verification.  

#### *5. Handover of Registered Documents*  
   - Obtain the registered sale deed and other documents on your behalf.  
   - Provide you with a detailed summary of the transaction for future reference.  

---

### Benefits of Professional Registration Support  

1. *Time-Saving:* Avoid long queues, paperwork errors, and bureaucratic delays.  
2. *Legal Security:* Ensure your property is registered correctly to avoid future disputes.  
3. *Transparency:* Receive clear guidance on every step of the process.  
4. *Stress-Free Experience:* Delegate the complexities to an expert, allowing you to focus on other priorities.  

---

### Who Can Benefit?  

- *Individual Buyers:* First-time buyers or seasoned investors looking for seamless registration.  
- *Landowners:* Secure registration for land transactions to protect ownership.  
- *Builders and Developers:* Ensure compliance for large-scale projects.  
- *Commercial Property Investors:* Register office spaces and commercial units efficiently.  

---

### Let's Simplify Property Registration for You  

Property registration is a critical milestone, and I am here to ensure it is completed efficiently and accurately. With my professional support, you can navigate the complexities with confidence and ease.  

Contact me today to discuss your property registration needs, and let’s secure your investment together.
  `;
  return (
    <div className="parent-container">
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </div>
  );
};

export default RegistrationSupport;
