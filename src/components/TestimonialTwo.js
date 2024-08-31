// src/components/Testimonial.js

import React from "react";
import "./TestimonialTwo.css";
import ReviewSection from "./ReviewSection";

const TestimonialTwo = ({ username, comment, likes, replies }) => {
  return (
    <>
      <div>
        <h2 className="testHead" style={{ textAlign: "center" }}>
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
              This course is perfect for those new to Google Ads. What I found
              most valuable was the emphasis on troubleshooting, which greatly
              assisted me as a beginner in overcoming challenges that often
              arise while managing campaigns.
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
              As a beginner, I found this Google Ads course incredibly engaging.
              It introduced me to innovative strategies and techniques in
              digital advertising. I’m excited to put these new skills into
              practice and would highly recommend this course to other newcomers
              who want to enhance their Google Ads expertise.
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
              Each topic in this Google Ads course is explained in detail, with
              practical demonstrations to enhance understanding. The content is
              straightforward and addresses any confusion or doubts. I’m
              grateful for this course, which is especially valuable for
              beginners eager to master Google Ads.
            </p>
          </div>
        </div>
      </div>
      <ReviewSection />
    </>
  );
};

export default TestimonialTwo;
