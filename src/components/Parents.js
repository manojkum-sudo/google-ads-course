import React from "react";
import CourseAdUI from "./CourseAdUI";
import CourseModules from "./CourseModules";
import BonusOffer from "./BonusOffer";
import CertificateSection from "./CertificateSection";
import MentorProfile from "./MentorProfile";
import TestimonialTwo from "./TestimonialTwo";
import WebinarInfo from "./WebinarInfo";
import PromoSection from "./PromoSection";
import FAQSection from "./FAQSection";

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
      <PromoSection />
      <FAQSection />
    </div>
  );
};

export default Parents;
