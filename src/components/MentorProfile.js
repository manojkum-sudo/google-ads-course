// src/components/MentorProfile.js
import React from "react";
import "./MentorProfile.css";

const MentorProfile = () => {
  return (
    <div className="mentor-profile">
      <div className="mentor-info">
        <h2>Meet Your Mentor</h2>
        <div className="mentor-details">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/instructor_rupshankar.png"
            alt="Rupshankar Mishra"
            className="mentor-image"
          />
          <div className="mentor-text">
            <h3>Rupshankar Mishra</h3>
            <p>Co-founder of Mediaffix</p>
            <ul>
              <li>✅ 10+ years of industry experience</li>
              <li>✅ Propelled startups and companies to new heights</li>
              <li>
                ✅ Known for creating exceptional branding and digital marketing
                solutions for various brands
              </li>
              <li>
                ✅ Delivered multiple workshops and talks at different
                companies, colleges, and online events
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
