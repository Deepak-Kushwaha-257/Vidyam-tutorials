// src/pages/Class11Page.js
import { Link } from "react-router-dom";
import React from "react";
import "./CoursePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
// Import images at the top
import anshitaImg from "../assests/anshita.png";
// import sanyamImg from "../assests/sanyam.png";

const class11Courses = [
  {
    id: 1,
    subject: "PHYSICS",
    bookInfo: "(Book: Part I - NCERT)",
    teacher: "Prateek Karn",
    image: anshitaImg,  // Use imported variable
    bgColor: "#fce8f3",
  },
  {
    id: 2,
    subject: "CHEMISTRY",
    bookInfo: "(Book: Part I - NCERT)",
    teacher: "Hemant Umre",
    image: anshitaImg,  // Use imported variable
    bgColor: "#f3e8fc",
  },
  {
    id: 3,
    subject: "BIOLOGY",
    bookInfo: "(Book: Part I - NCERT)",
    teacher: "Neelam Tiwari",
    image: anshitaImg,  // Use imported variable
    bgColor: "#e8fcf0",
  },
];

const Class11Page = () => {
  return (
    <div className="course-page">
      <Navbar />


      <section className="course-detail-section">
        <div className="course-detail-container">
          <h1 className="course-detail-title">
            CBSE Class 11th (Science Stream) Full Video Course
          </h1>
          <p className="course-detail-subtitle">
            Magnet Brains provides High-Quality Education to help Learners Top any Exam
          </p>

          <div className="course-cards-grid">
            {class11Courses.map((course) => (
              <article 
                key={course.id} 
                className="course-detail-card"
                style={{ backgroundColor: course.bgColor }}
              >
                <div className="course-card-header">
                  <div className="course-badge">
                    <span className="mb-logo-small">mb</span>
                    <span>Magnet Brains</span>
                  </div>
                  <span className="full-course-tag">FULL COURSE</span>
                </div>

                <div className="course-card-content">
                  <h2 className="course-subject">
                    Class 11th<br />
                    <span className="subject-name">{course.subject}</span>
                  </h2>
                  <p className="course-book-info">{course.bookInfo}</p>
                </div>

                <div className="course-card-image">
                  <img src={course.image} alt={course.teacher} />
                </div>

                <div className="course-card-footer">
                  <h3 className="course-title-text">
                    Class 11th {course.subject.charAt(0) + course.subject.slice(1).toLowerCase()} NCERT (Part I Book) CBSE – Updated Course
                  </h3>
                  <p className="course-teacher">{course.teacher}</p>
                  <Link to="/video-lectures/class-12-physics">
                    <button className="watch-now-btn">WATCH NOW</button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Class11Page;
