import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Policy.css';

const PrivacyPolicy = () => {
  const markdown = `
# Privacy Policy

Welcome to Cholo Kini - Real Estate. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data. By using our website and services, you consent to the collection and use of your data in accordance with this policy.

---

### Information We Collect

We collect the following types of information:

- **Personal Information:** Name, email address, phone number, and other identifiable information you provide when using our services.
- **Non-Personal Information:** Data such as browser type, device information, and usage data to help us improve our services.

---

### How We Use Your Information

Your information is used for the following purposes:

- **Provide Services:** To process your transactions and communicate with you regarding our services.
- **Improve Our Website:** To enhance user experience and functionality.
- **Marketing:** We may use your contact information to send promotional materials, updates, and offers. You can opt-out at any time.

---

### How We Protect Your Information

We use industry-standard security measures to protect your personal information. These include:

- **Encryption:** Secure transmission of data using SSL encryption.
- **Access Control:** Only authorized personnel have access to your information.
- **Regular Audits:** We conduct security audits to identify and address potential vulnerabilities.

---

### Sharing Your Information

We do not sell or rent your personal information to third parties. However, we may share your information with:

- **Service Providers:** Trusted third-party vendors who help us deliver services to you.
- **Legal Requirements:** If required by law, we may disclose your information to comply with legal obligations.

---

### Your Rights

You have the right to:

- **Access and Update Your Information:** You can request access to your personal data and make corrections.
- **Opt-Out:** You may opt-out of marketing communications at any time.
- **Delete Your Information:** You may request that we delete your personal information, subject to legal requirements.

---

### Changes to This Policy

We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.

---

### Contact Us

If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:

- **Email:** contact@cholokini.com
- **Phone:** +880 1700-707184
`;

  return (
    <div className="policy-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;
