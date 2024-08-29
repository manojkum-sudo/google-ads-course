import React, { useState, useRef, useEffect } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      answerRefs.current[
        activeIndex
      ].style.height = `${answerRefs.current[activeIndex].scrollHeight}px`;
    }
    answerRefs.current.forEach((ref, index) => {
      if (index !== activeIndex && ref) {
        ref.style.height = "0px";
      }
    });
  }, [activeIndex]);

  const faqs = [
    {
      question: "What Do You Mean by Facebook & Instagram Ads Marketing?",
      answer:
        "With Facebook & Instagram Ads Marketing, you can create and run campaigns using simple self-serve tools, and track their performance with easy-to-read reports whether that’s on Facebook, Instagram, Messenger, Audience Network or across them all. More than two billion people use Facebook every month – so no matter what kind of audience you want to reach, you’ll find them here.",
    },
    {
      question: "Who Can Join This Course?",
      answer:
        "Our training program is specially designed for Under-Graduates, Graduates, Working Professionals, Freelancers, Housewives, and Entrepreneurs. In this Facebook & Instagram with AI Tools you are going to learn each and every content in depth for Creating a winning career for every profile.",
    },
    {
      question:
        "Is Facebook & Instagram Ads Expert or Specialist a Good Career?",
      answer:
        "As per statistics, the Facebook & Instagram Ads Marketing industry is expected to grow substantially in upcoming years. Subsequently, a career in Facebook & Instagram Ads marketing promises high-paying salary packages and placement opportunities across the globe. Hence, a Facebook & Instagram Ads marketing career would be highly beneficial.",
    },
    {
      question: "Do You Provide Any Certificates?",
      answer:
        "Yes, we provide course completion certificates on successful completion of the Facebook & Instagram Ads with AI Tools",
    },
    {
      question: "Is this course suitable for beginners in digital marketing?",
      answer:
        "Absolutely! Our course is designed to cater to individuals at all skill levels, including beginners. We start with the basics and gradually progress to more advanced topics, ensuring that everyone can follow along and benefit from the content.",
    },
    {
      question:
        "How will this course help me improve my Facebook and Instagram advertising skills?",
      answer:
        "Our course provides comprehensive training on all aspects of Facebook and Instagram advertising, including ad creation, targeting, campaign optimization, and performance tracking. You’ll learn proven strategies and techniques to maximize your ad effectiveness and achieve your marketing goals.",
    },
    {
      question: "Do you offer any support or assistance during the course?",
      answer:
        "Absolutely! Our  instructor is here to support you every step of the way through our instructor chat support feature.",
    },
  ];

  return (
    <div className="main-Text">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className="faq-answer"
                ref={(el) => (answerRefs.current[index] = el)}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
