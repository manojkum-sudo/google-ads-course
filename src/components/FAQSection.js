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
      question: "Who Can Join this Course?",
      answer:
        "You do not need any skill to join this course, anyone who knows a little about operating a computer can join it.",
    },
    {
      question: "Will there be any doubt classes?",
      answer:
        "Yes, you will get doubt classes here, mostly doubt classes will be held on weekends, it depends on how many people are facing problems. Classes will be conducted accordingly",
    },
    {
      question: "How to claim the free bonus?",
      answer:
        "The bonuses are mentioned in the middle of the course. Since they are only for enrolled students, everything will be explained to you when you join the course.",
    },
    {
      question: "Is coding knowledge required for this course?",
      answer:
        "No, you do not need any kind of coding knowledge to do this course",
    },
    {
      question: "Is there any support option?",
      answer:
        "Yes, you will be given solution to your problem through email and whatsapp support. And there will also be doubt classes on weekends in which you can ask your questions. info@skilltolearn.online",
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
