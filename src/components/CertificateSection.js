import React from "react";
import "./CertificateSection.css"; // Import your CSS file here

const CertificateSection = () => {
  return (
    <div className="certification-container">
      <h1 className="titlee">Become A Certified Google Ads Expert</h1>
      <p className="subtitle">
        Upon Successful Completion of the Course, You Will Receive Certification
        From iJaipuria, a Renowned Institution That Adds Substantial Credibility
        to Your Certificate and Strengthens Your Resume
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
      <button className="cta-button">Get Instant Access At ₹1499!</button>
    </div>
  );
};

export default CertificateSection;
