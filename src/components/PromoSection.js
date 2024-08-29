import React from "react";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-section">
      <h2 className="promo-title">WHAT IS THE BEST PART</h2>
      <p className="promo-text">
        MANY PEOPLE THINK THAT GOOGLE ADS ARE COMPLICATED TO USE, BUT THIS IS
        NOT 100% TRUE.
        <span className="highlighty">
          {" "}
          WE WILL SHOW YOU HOW FUN, SIMPLE AND EASY IT IS TO CREATE GOOGLE ADS
        </span>
      </p>
      <p className="promo-text">
        SIGN UP NOW, AND LET’S START GENERATING MORE SALES, OUTPERFORMING YOUR
        COMPETITORS, AND EXPONENTIALLY INCREASING YOUR ONLINE PRESENCE WITH
        GOOGLE ADS!
      </p>
      <p className="highlighty">
        HARNESS THE POWER OF GOOGLE ADS TO SKYROCKET YOUR FUTURE GROWTH!
      </p>
      <button className="ctaa-button">
        <span>Get Instant Access At ₹1499!</span>
      </button>
    </div>
  );
};

export default PromoSection;
