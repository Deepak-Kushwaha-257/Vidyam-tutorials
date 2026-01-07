// src/components/Faq.js
import React, { useState } from "react";
import "./faq.css";

const leftFaqs = [
  {
    question: "Why Choose Vidyam Tutorials?",
    answer:
      "Vidyam Tutorials is a leading ed‑tech platform providing high‑quality education in English and Hindi medium, covering K‑12 and major competitive exams with structured video lectures and notes.",
  },
  {
    question: "Our Vision?",
    answer:
      "To make quality education accessible and affordable for every learner through technology and free learning resources.",
  },
  {
    question: "What Vidyam Tutorials provide?",
    answer:
      "Comprehensive video lectures, notes, practice questions, test series, and doubt‑solving support for school and competitive exams.",
  },
  {
    question: "Does Vidyam Tutorials have any other channels?",
    answer:
      "Yes, there are dedicated channels and sections for different boards, mediums, and competitive exams.",
  },
];

const rightFaqs = [
  {
    question: "Do we provide other Features?",
    answer:
      "Yes, features like recorded lectures, exam‑oriented content, live sessions, and revision support are provided.",
  },
  {
    question: "How to get our expert notes?",
    answer:
      "Expert notes can be accessed from the notes/e‑notes section of the website or app after choosing your class or exam.",
  },
  {
    question: "Does Vidyam Tutorials have a learning App?",
    answer:
      "Yes, learners can use the mobile app to watch lectures, access notes, and practice questions on the go.",
  },
  {
    question: "How to contact Vidyam Tutorials in case of queries and feedback?",
    answer:
      "You can contact the support team through the contact page, email, or help section of the platform.",
  },
];

const FaqItem = ({ item, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={onToggle}>
    <div className="faq-header">
      <p className="faq-question">{item.question}</p>
      <span className="faq-icon">{isOpen ? "▴" : "▾"}</span>
    </div>
    {isOpen && <p className="faq-answer">{item.answer}</p>}
  </div>
);

const Faq = () => {
  const [openLeft, setOpenLeft] = useState(0);
  const [openRight, setOpenRight] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-columns">
        <div className="faq-column">
          {leftFaqs.map((item, idx) => (
            <FaqItem
              key={idx}
              item={item}
              isOpen={openLeft === idx}
              onToggle={() => setOpenLeft(openLeft === idx ? null : idx)}
            />
          ))}
        </div>

        <div className="faq-column">
          {rightFaqs.map((item, idx) => (
            <FaqItem
              key={idx}
              item={item}
              isOpen={openRight === idx}
              onToggle={() => setOpenRight(openRight === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
