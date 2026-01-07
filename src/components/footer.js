// src/components/Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="mb-footer">
      <div className="mb-footer-inner">
        {/* Column 1: Company */}
        <div className="mb-footer-col">
          <h3 className="mb-footer-heading">COMPANY</h3>
          <ul className="mb-footer-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Column 2: Study Material */}
        <div className="mb-footer-col">
          <h3 className="mb-footer-heading">STUDY MATERIAL</h3>
          <ul className="mb-footer-links">
            <li><a href="#enotes-en">English Medium E-Notes</a></li>
            <li><a href="#enotes-hi">Hindi Medium E-Notes</a></li>
            <li><a href="#sample">Vidyam Tutorials Sample Paper</a></li>
            <li><a href="#previous">CBSE Previous Year Paper</a></li>
            <li><a href="#spoken">Spoken English</a></li>
          </ul>
        </div>

        {/* Column 3: Top Courses */}
        <div className="mb-footer-col">
          <h3 className="mb-footer-heading">OUR TOP COURSES</h3>
          <ul className="mb-footer-links">
            <li><a href="#class12-sci">Class 12th Science Stream</a></li>
            <li><a href="#class12-com">Class 12th Commerce Stream</a></li>
            {/* <li><a href="#class12-hum">Class 12th Humanities Stream</a></li> */}
            <li><a href="#class11-sci">Class 11th Science Stream</a></li>
            <li><a href="#class11-com">Class 11th Commerce Stream</a></li>
            {/* <li><a href="#class11-hum">Class 11th Humanities Stream</a></li> */}
            {/* <li><a href="#class10">Class 10th All Subjects</a></li>
            <li><a href="#class9">Class 9th All Subjects</a></li>
            <li><a href="#class8">Class 8th All Subjects</a></li>
            <li><a href="#class7">Class 7th All Subjects</a></li>
            <li><a href="#class6">Class 6th All Subjects</a></li> */}
          </ul>
        </div>

        {/* Column 4: Contact & Logo */}
        <div className="mb-footer-col mb-footer-contact">
          {/* Clickable logo linking to homepage */}
          <a href="https://www.magnetbrains.com/" target="_blank" rel="noopener noreferrer" className="mb-footer-logo">
            <div className="mb-footer-logo-icon">VT</div>
            <span className="mb-footer-logo-text">Vidyam Tutorials</span>
          </a>

          <p className="mb-footer-address">
            <strong>Address:</strong> 10 No. Market, E-3/49, Arera Colony,<br />
            Bhopal, Madhya Pradesh, 462016
          </p>

          <div className="mb-footer-contacts">
            <p>📞 Notes: +917415647124</p>
            <p>📞 Support: +917415647124</p>
            <p>📞 Careers HR: +917869664023</p>
            {/* <p>✉️ Email: support@magnetbrains.com</p>
            <p>✉️ Careers: hr@magnetbrains.com</p> */}
          </div>

          <a href="https://play.google.com/store/apps/details?id=com.magnetbrains" target="_blank" rel="noopener noreferrer" className="mb-footer-playstore">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mb-footer-bottom">
        <p>Vidyam Tutorials Learning Foundation©2024. All rights reserved.</p>
        <div className="mb-footer-socials">
          <a 
            href="https://www.youtube.com/@MagnetBrainsEducation" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mb-social-icon"
            aria-label="YouTube"
          >
            ▶️
          </a>
          <a 
            href="https://www.instagram.com/magnetbrainseducation/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mb-social-icon"
            aria-label="Instagram"
          >
            📷
          </a>
          <a 
            href="https://www.facebook.com/MagnetBrainsEducation" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mb-social-icon"
            aria-label="Facebook"
          >
            f
          </a>
          <a 
            href="https://twitter.com/magnetbrains" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mb-social-icon"
            aria-label="Twitter"
          >
            𝕏
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
