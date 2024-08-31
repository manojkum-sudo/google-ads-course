import React, { useState, useEffect } from "react";
import CourseAdUI from "./CourseAdUI";
import CourseModules from "./CourseModules";
import BonusOffer from "./BonusOffer";
import CertificateSection from "./CertificateSection";
import MentorProfile from "./MentorProfile";
import TestimonialTwo from "./TestimonialTwo";
import WebinarInfo from "./WebinarInfo";
import PromoSection from "./PromoSection";
import FAQSection from "./FAQSection";
import NotificationPopup from "./NotificationPopup";
import "./Parent.css";
import Footer from "./Footer";
import { peopleData } from "./constants";
import LearningTopics from "./LearningTopics";

const Parents = () => {
  const [showOfferSection, setShowOfferSection] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 20, seconds: 0 });
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowOfferSection(true);
      } else {
        setShowOfferSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timerInterval);
            return { minutes: 0, seconds: 0 };
          }
          return { minutes: prev?.minutes - 1, seconds: 59 };
        }
        return { minutes: prev?.minutes, seconds: prev?.seconds - 1 };
      });
    }, 1000);

    // Show notification every 10 seconds
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setCurrentPersonIndex(
        (prevIndex) => (prevIndex + 1) % peopleData?.length
      );

      // Hide the notification after 3 seconds
      setTimeout(() => setShowNotification(false), 4000);
    }, 14000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timerInterval);
      clearInterval(notificationInterval);
    };
  }, [peopleData?.length]);

  return (
    <div>
      <CourseAdUI />
      <LearningTopics />
      <CourseModules />
      <BonusOffer />
      <CertificateSection />
      <MentorProfile />
      <TestimonialTwo />
      <WebinarInfo />
      <PromoSection />
      <FAQSection />
      <Footer />

      {showOfferSection && (
        <div className="offer-section">
          <div className="offer-text">
            <h2 style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#e74c3c" }}>Price ₹199</span>
              <span style={{ textDecoration: "line-through" }}>₹2500</span>
            </h2>
            <h3>
              Offer Expires in {" : "}
              <span style={{ color: "#ff007f" }}>
                {timeLeft.minutes}:
                {timeLeft.seconds.toString().padStart(2, "0")} mins
              </span>
            </h3>
            <p>30 Days Money Back Guarantee !</p>
          </div>
          <a href="#enroll" className="enroll-btn">
            Enroll Now
          </a>
        </div>
      )}

      {showNotification && (
        <NotificationPopup
          buyerName={peopleData[currentPersonIndex]?.buyerName}
          location={peopleData[currentPersonIndex]?.location}
          purchaseTime={peopleData[currentPersonIndex]?.purchaseTime}
        />
      )}
    </div>
  );
};

export default Parents;
