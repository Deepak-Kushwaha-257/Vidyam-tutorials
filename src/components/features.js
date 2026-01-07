// src/components/Features.jsx
import React from "react";
import "./features.css";

const features = [
  {
    color: "#ff5b5b",
    icon: "👁️",
    title: "100% Free\nQuality Education",
  },
  {
    color: "#2563eb",
    icon: "📖",
    title: "100% Complete\nSyllabus",
  },
  {
    color: "#0f766e",
    icon: "☝️",
    title: "Doubt Solving\nSessions",
  },
  {
    color: "#16a34a",
    icon: "🎥",
    title: "Recorded Video\nLectures",
  },
  {
    color: "#8b5cf6",
    icon: "🖥️",
    title: "Live Interactive\nClasses",
  },
  {
    color: "#f59e0b",
    icon: "📋",
    title: "Exam Preparation\nVideos",
  },
  {
    color: "#ec4899",
    icon: "📚",
    title: "Previous Year\nQuestions",
  },
  {
    color: "#6366f1",
    icon: "💡",
    title: "Sample Paper &\nE‑Notes",
  },
];

const Features = () => {
  return (
    <section className="mb-features">
      <div className="mb-features-inner">
        <h2 className="mb-features-title">Our Features</h2>

        <div className="mb-features-card">
          {features.map((item, idx) => (
            <div className="mb-feature-item" key={idx}>
              <div
                className="mb-feature-icon"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              {item.title.split("\n").map((line, i) => (
                <p className="mb-feature-text" key={i}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
