import React from "react";
import "./ReviewSection.css";

const ReviewSection = () => {
  return (
    <div className="review-section">
      <div className="rating">
        <span className="stars">⭐⭐⭐⭐⭐</span>
        <span className="rating-text">4.8 OUT OF 5</span>
        <span className="reviews">(43,000+ Verified Reviews)</span>
      </div>
      <div className="message">
        LAST CHANCE TO MASTER GOOGLE ADS FOR INSTANT DIGITAL IMPACT!
      </div>
      <div className="ctar-button">
        <button className="ctar-btn">✅ Get Instant Access At ₹1499!</button>
      </div>
    </div>
  );
};

export default ReviewSection;
