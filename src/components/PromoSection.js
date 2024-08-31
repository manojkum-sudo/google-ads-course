import React from "react";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <div className="promo-section">
      <h2 className="promo-title">WHAT IS THE BEST PART</h2>
      <p className="promo-text">
        Many people believe that Google Ads are complex, but that's not entirely
        accurate.
        <span className="highlighty">
          {" "}
          We'll demonstrate how creating Google Ads can be both enjoyable and
          straightforward.
        </span>
      </p>
      <p className="promo-text">
        Sign up now to start boosting your sales, outshining your competitors,
        and rapidly expanding your online presence with Google Ads.
      </p>
      <p className="highlighty">
        Unlock the potential of Google Ads and watch your future growth soar!
      </p>
      <button className="ctaa-button">
        <span>Get Instant Access At ₹199!</span>
      </button>
    </div>
  );
};

export default PromoSection;
