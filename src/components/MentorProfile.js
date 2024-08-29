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
            <div className="highlightp"> Managed over 100crs in Ad spend</div>
            <div className="highlightp"> Ex-Google Employee</div>
            <div className="highlightp">
              The portfolio includes the most prestigious B-schools in the
              world.
            </div>
            <div className="highlightp"> 10+ Years of Industry Experience</div>
          </div>
          <p className="description">
            Tanmoy Kr. Das is an IIM Kozhikode alumni. He started his career
            with Google in 2007 as the account manager for Business Industrial
            Market clients based in the US. He managed Google Ads accounts for
            small, medium, and large clients and received multiple awards -
            Impact Award & Gold Award, to name a few.
            <br />
            <br />
            He has taught young professionals Google Ads & Microsoft Ads since
            2014 and has trained more than 8000 students. He also conducts
            corporate training on Google Ads for working professionals and
            senior management.
          </p>
        </div>
      </div>
      <div className="call-to-action">
        <h3>START LEARNING FROM TANMOY NOW!</h3>
        <button className="ctat-button">✔️ Get Instant Access At ₹1499!</button>
      </div>
    </div>
  );
};

export default MentorProfile;
