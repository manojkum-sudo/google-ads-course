import React from "react";
import CourseAdUI from "./CourseAdUI";
import CourseModules from "./CourseModules";
import BonusOffer from "./BonusOffer";
import CertificateSection from "./CertificateSection";
import MentorProfile from "./MentorProfile";
import TestimonialTwo from "./TestimonialTwo";
import WebinarInfo from "./WebinarInfo";

const Parents = () => {
  return (
    <div>
      <CourseAdUI />
      <CourseModules />
      <BonusOffer />
      <CertificateSection />
      <MentorProfile />
      <TestimonialTwo />
      <WebinarInfo />
    </div>
  );
};

export default Parents;
