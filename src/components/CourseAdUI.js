import React from "react";
import "./CourseAdUI.css"; // For styling

const CourseAdUI = () => {
  return (
    <div className="course-ad-container">
      <header className="header">
        <p className="course-image">Advanced Google Ads Using AI Tools</p>
        <h1>
          Get{" "}
          <span className="highlight">
            10X Website Traffic, Leads and Sales
          </span>{" "}
          for Your Business and Unlock Your Career{" "}
          <span style={{ color: "#fffa65" }}>Growth!</span>
        </h1>
      </header>
      <section className="video-section">
        <div className="video-container">
          {/* <img
            src="your-image-url.png"
            alt="Google Ads Using AI Tools"
            className="course-image"
          /> */}

          <video className="video-preview" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="instructor-info">
          {/* <img
            src="your-instructor-image-url.png"
            alt="Instructor"
            className="instructor-image"
          />
          <p>Tanmoy Kumar Das</p> */}
        </div>
      </section>
      <section className="pricing-section">
        <h2>Lifetime Access & Updates</h2>
        <button className="pricing-button">Get Instant Access At ₹1499!</button>
      </section>
      <section className="features-section">
        <ul>
          <li style={{ color: "#fffa65" }}>
            ✅ No Prior Marketing Or Google Ads Knowledge Required.
          </li>
          <li>
            ✅{" "}
            <span style={{ color: "#fff" }}>
              Learn How To Run Google Ads The Expert Way
            </span>
            —Not Just Boosting Posts.
          </li>
          <li>
            ✅ Increase Your Ecommerce Store's ROI{" "}
            <span style={{ color: "#fff" }}>
              By 7x With Proven Ad Strategies.
            </span>
          </li>
          <li>
            ✅ Generate High-Quality, Convertible Leads{" "}
            <span style={{ color: "#fff" }}>
              For Both B2B And B2C Businesses.
            </span>
          </li>
          <li>
            ✅ Quickly Transition Your Business From Offline To{" "}
            <span style={{ color: "#fff" }}>
              Online And Attract Customers From Around The World.
            </span>
          </li>
          <li>
            ✅ Get Mentored By A Google Ads Expert Who Has{" "}
            <span style={{ color: "#fff" }}>
              Managed Over Inr 100 Cr In Ad Spend.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CourseAdUI;
