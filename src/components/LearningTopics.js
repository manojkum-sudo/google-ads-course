import React from "react";
import "./LearningTopics.css";

const LearningTopics = () => {
  const topics = [
    "Mid-Level digital marketing & performance marketing professionals",
    "Working professionals",
    "Entrepreneurs",
    "E-commerce Store Owners",
    "Marketing freelancers",
    "Small Business Owners",
    "Digital Marketing Freshers",
    "Social Media Marketers",
    "Students",
    "B2B or B2C - Lead Generation",
    "Freelancers",
    "Makeup Artist",
    "Affiliate Marketers",
    "Local Businesses",
    "Real Estate",
    "Agency Owners",
    "Coaches & Trainers",
    "Starting a Business",
  ];

  return (
    <div className="learning-container">
      <h1 className="text" style={{ textTransform: "uppercase" }}>
        Who should enroll in this course?
      </h1>
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div key={index} className="topic-item">
            <span>&#10004;</span> {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningTopics;
