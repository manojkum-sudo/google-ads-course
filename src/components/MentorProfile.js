// src/components/MentorProfile.js
import React from "react";
import "./MentorProfile.css";

const MentorProfile = () => {
  return (
    <div className="instructor-profile">
      <h2 className="titleu">Meet Your Instructor</h2>
      <div className="instructor-info">
        <div className="image-container">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/instructor_rupshankar.png"
            alt="Tanmoy Kr. Das"
          />
        </div>
        <div className="details">
          <div className="highlightso">
            <div className="highlightp"> Managed over 10crs in Ad spend</div>
            <div className="highlightp"> Ex-Google Employee</div>
            <div className="highlightp">
              The portfolio includes the most prestigious B-schools in the
              world.
            </div>
            <div className="highlightp"> 10+ Years of Industry Experience</div>
          </div>
          <p className="description">
            Manoj Sharma, an alumnus of IIM Kozhikode, began his career at
            Google in 2007 as an account manager for Business Industrial Market
            clients in the US. During his tenure, he managed Google Ads accounts
            for a diverse range of clients, from small businesses to large
            enterprises, and received several accolades, including the Impact
            Award and Gold Award.
            <br />
            <br />
            Since 2014, Manoj has been dedicated to educating young
            professionals on Google Ads and Microsoft Ads, having trained over
            8,000 students. He also offers corporate training on Google Ads,
            catering to working professionals and senior management.
          </p>
        </div>
      </div>
      <div className="call-to-action">
        <h3>START LEARNING FROM MANOJ NOW!</h3>
        <button className="ctat-button">✔️ Get Instant Access At ₹399!</button>
      </div>
    </div>
  );
};

export default MentorProfile;
