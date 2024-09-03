import React from "react";
import "./CertificateSection.css"; // Import your CSS file here

const CertificateSection = () => {
  return (
    <div className="certification-container">
      <h1 className="titlee">Become A Certified Google Ads Expert</h1>
      <p className="subtitle">
        Upon successfully completing the course, you'll receive a certification
        from Skill to learn, a prestigious institution known for its
        credibility. This certificate will enhance your resume and add
        significant value to your professional qualifications.
      </p>
      <div className="certificate-wrapper">
        <img
          src="images/certificate.png"
          alt="Certificate of Completion"
          className="certificate-image"
        />
      </div>
      <p className="cta-text">
        SEIZE THE OPPORTUNITY! ELEVATE YOUR SKILLS WITH ADVANCED GOOGLE ADS
        MASTERY!
      </p>
      <button className="cta-button">Get Instant Access At ₹399!</button>
    </div>
  );
};

export default CertificateSection;
