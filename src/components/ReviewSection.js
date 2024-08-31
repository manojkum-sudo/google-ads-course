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
        Seize Your Final Opportunity to Master Google Ads and Achieve Instant
        Digital Success!
      </div>
      <div className="ctar-button">
        <button className="ctar-btn">✅ Get Instant Access At ₹199!</button>
      </div>
    </div>
  );
};

export default ReviewSection;
