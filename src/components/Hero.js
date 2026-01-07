// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import kidImage from "../assests/kid-hero.png"; // put your image in src/assets

const Hero = () => {
  return (
    <section className="mb-hero">
      <div className="mb-hero-inner">
        {/* Left text */}
        <div className="mb-hero-text">
          <h1>
            <span className="mb-hero-highlight">INDIA'S NO.1</span>
            <br />
            100% Free Online
            <br />
            Education Platform
          </h1>
        </div>

        {/* Right illustration */}
        <div className="mb-hero-visual">
          <div className="mb-hero-blob">
            <img src={kidImage} alt="Student" className="mb-hero-kid" />

            {/* floating icons */}
            <div className="mb-hero-icon mb-hero-icon-top">
              ▶
            </div>
            <div className="mb-hero-icon mb-hero-icon-left">
              📘
            </div>
            <div className="mb-hero-icon mb-hero-icon-right">
              ✏️
            </div>
            <div className="mb-hero-icon mb-hero-icon-bottom">
              🎓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
