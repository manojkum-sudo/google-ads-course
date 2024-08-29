// src/components/Testimonial.js

import React from "react";
import "./TestimonialTwo.css";
import ReviewSection from "./ReviewSection";

const TestimonialTwo = ({ username, comment, likes, replies }) => {
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>
          More Than 12,600 Students Have Called It the Best Way to Learn Google
          Ads
        </h2>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="header">
              <img
                src="https://via.placeholder.com/50"
                alt="Sai Tanmaya Behara"
                className="avatar"
              />
              <div className="name-date">
                <span className="name">Devesh Vijay</span>
                <span className="date">21 June, 2024</span>
              </div>
            </div>
            {/* <div className="rating">⭐⭐⭐⭐⭐</div> */}
            <h3 className="title">I truely love this course.</h3>
            <p className="comment">
              This course is ideal for anyone new to video editing. What I
              appreciated the most was the focus on troubleshooting, which
              really helped me as a beginner to overcome challenges that might
              arise during the editing process.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="header">
              <img
                src="https://via.placeholder.com/50"
                alt="Kanhu Rout"
                className="avatar"
              />
              <div className="name-date">
                <span className="name">Sai samarth</span>
                <span className="date">19 Feb, 2024</span>
              </div>
            </div>
            {/* <div className="rating">⭐⭐⭐⭐⭐</div> */}
            <h3 className="title">
              I even recommend this course to everyone..
            </h3>
            <p className="comment">
              I’m a beginner and found this course highly engaging. It taught me
              fresh approaches to creativity in the editing field. I’m excited
              to apply the skills I’ve gained and would definitely recommend
              this course to other beginners looking to grow their abilities.
            </p>
          </div>

          <div className="testimonial-card">
            <div className="header">
              <img
                src="https://via.placeholder.com/50"
                alt="Mohit Chaurasiya"
                className="avatar"
              />
              <div className="name-date">
                <span className="name">Tarun sharma</span>
                <span className="date">20 March, 2024</span>
              </div>
            </div>
            {/* <div className="rating">⭐⭐⭐⭐⭐</div> */}
            <h3 className="title">Beginners friendly course</h3>
            <p className="comment">
              Each topic in this course is explained thoroughly, with demos for
              better understanding. It’s simple to follow and clears up any
              confusion or doubts. I'm grateful for this course, especially for
              beginners eager to learn video editing.
            </p>
          </div>
        </div>
      </div>
      <ReviewSection />
    </>
  );
};

export default TestimonialTwo;
