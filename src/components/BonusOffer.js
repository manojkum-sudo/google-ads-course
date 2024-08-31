import React from "react";
import {
  FaKey,
  FaPenFancy,
  FaFacebook,
  FaClipboardCheck,
} from "react-icons/fa";
import "./BonusOffer.css";

const BonusOffer = () => {
  return (
    <div className="bonuses-wrapper">
      <div className="bonuses-header">
        <h2>Register before midnight of 26 Aug 2024</h2>
        <h3>To Unlock All Bonuses 75% OFF</h3>
      </div>
      <div className="bonuses-container">
        <div className="bonus-card">
          <div className="bonus-header">Bonus 1</div>
          <div className="bonus-body">
            <FaKey
              size={50}
              style={{ color: "#2ecc71" }}
              className="bonus-icon"
            />
            <p>Free Access to Workshops</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 2</div>
          <div className="bonus-body">
            <FaPenFancy
              size={50}
              style={{ color: "#2ecc71" }}
              className="bonus-icon"
            />
            <p>10 Foolproof Copywriting Tips for Google Ads</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 3</div>
          <div className="bonus-body">
            <FaFacebook
              size={50}
              style={{ color: "#2ecc71" }}
              className="bonus-icon"
            />
            <p>10 Secret Hacks to 10X Your Google Ads ROI</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 4</div>
          <div className="bonus-body">
            <FaClipboardCheck
              size={50}
              style={{ color: "#2ecc71" }}
              className="bonus-icon"
            />
            <p>Step-by-Step Google Ads Launch Checklist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusOffer;
