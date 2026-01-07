// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="mb-header">
      {/* Top support strip */}
      <div className="mb-top-strip">
        <p>
          Support Our Free School Education Initiative:&nbsp;
          <a href="#e-notes">E-Notes</a>
          &nbsp;&amp;&nbsp;
          <a href="#e-books">E-Books</a>
        </p>
      </div>

      {/* Main navbar */}
      <div className="mb-navbar">
        <div className="mb-navbar-inner">
          {/* Left: logo */}
          <div className="mb-logo">
            <div className="mb-logo-icon">VT</div>
            <span className="mb-logo-text">Vidyam Tutorials</span>
          </div>

          {/* Right: button */}
          <div className="mb-actions">
            <button className="mb-enotes-btn">
              <span className="mb-enotes-icon">📘</span>
              View E-Notes
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
