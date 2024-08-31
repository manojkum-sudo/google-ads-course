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
      question: "What Are Google Ads?",
      answer:
        "Google Ads is a digital advertising platform by Google that allows businesses worldwide to promote their products and services online.",
    },
    {
      question: "What Are The Benefits Of Using Google Ads?",
      answer:
        "Using Google Ads allows you to promote products and services across a vast network of websites, reaching millions of potential customers. This extensive visibility enhances brand awareness and helps businesses drive substantial revenue.",
    },
    {
      question: "How Will This Course Benefit My Career/Business?",
      answer:
        "Google Ads is used by millions of companies, agencies, and start-ups worldwide. If you know how to run Google Ads, you can work as an expert in any of these organisations.",
    },
    {
      question: "Who Should Attend This Course?",
      answer:
        "Established businesses exploring Google Ads to boost sales. and Ambitious individuals beginning their journey in digital marketing.",
    },
    {
      question: "How Will I Get This Course?",
      answer:
        "Upon completing the payment process, you will receive an email confirmation from our team within 5 minutes. Then, you can use your login credentials to access the course on the Dashboard, where you can learn at your own pace and convenience.",
    },
    {
      question: "Will I Receive A Certificate Upon Completion Of The Course?",
      answer:
        "Upon completing the course, you will receive a certificate of completion which you can download from your Dashboard. Email us at skilltolearn@gmail.com",
    },
    {
      question: "What is the course language?",
      answer: "The course language is Hindi.",
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
