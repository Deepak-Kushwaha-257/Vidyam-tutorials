// src/components/TopCourses.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./classes.css";

const TopCourses = () => {
  return (
    <section className="mb-top-courses">
      <div className="mb-top-courses-inner">
        <h2 className="mb-top-title">Explore Top Courses</h2>

        <div className="mb-course-flex">
          <Link to="/class-12" className="mb-course-card-link">
            <div className="mb-course-card">
              <div className="mb-course-title">
                <span className="mb-course-icon">📘</span>
                <div>
                  <p className="mb-course-class">Class 12</p>
                  <p className="mb-course-stream">Science / Commerce</p>
                </div>
              </div>
              <button className="mb-course-link">Complete Course</button>
            </div>
          </Link>

          <Link to="/class-11" className="mb-course-card-link">
            <div className="mb-course-card">
              <div className="mb-course-title">
                <span className="mb-course-icon">📘</span>
                <div>
                  <p className="mb-course-class">Class 11</p>
                  <p className="mb-course-stream">Science / Commerce</p>
                </div>
              </div>
              <button className="mb-course-link">Complete Course</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
