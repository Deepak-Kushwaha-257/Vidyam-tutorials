// src/pages/VideoLecturesPage.jsx
import React, { useState } from "react";
import "./VideoLecturesPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import teacherImg from "../assests/sanyam.png";

// Chapter data - Remove hardcoded lectureCount, it will be calculated automatically
const physicsChapters = [
  {
    id: 1,
    title: "Syllabus Overview",

    videos: [

      {
        id: 1,
        title: "Complete Syllabus Overview",
        youtubeUrl: "https://www.youtube.com/watch?v=EXAMPLE1",
      },

    ],

  },

  {
    id: 2,
    title: "Chapter 1 - Electric Charges and Fields",

    videos: [

      {
        id: 1,
        title: "Introduction to Electric Field",
        youtubeUrl: "https://www.youtube.com/watch?v=QostjRGxqEM&t=3s",
      },

      {
        id: 2,
        title: "Properties of Electric Charge",
        youtubeUrl: "https://www.youtube.com/watch?v=EXAMPLE2",
      },

      {
        id: 3,
        title: "Coulomb's Law - Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=EXAMPLE3",
      },

      {
        id: 4,
        title: "Coulomb's Law - Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=EXAMPLE4",
      },

      // Add more videos as needed - count will update automatically
    ],

  },

  {
    id: 3,
    title: "Chapter 2 - Electrostatic Potential and Capacitance",

    videos: [
      {
        id: 1,
        title: "Complete Syllabus Overview",
        youtubeUrl: "https://www.youtube.com/watch?v=EXAMPLE1",
      },
    ],

  },

  {
    id: 4,
    title: "Chapter 3 - Current Electricity",

    videos: [

    ],

  },

  {
    id: 5,
    title: "Chapter 4 - Moving Charges and Magnetism",

    videos: [

    ],

  },

  {
    id: 6,
    title: "Chapter 5 - Magnetism and Matter",

    videos: [

    ],

  },

  {
    id: 7,
    title: "Chapter 6 - Electromagnetic Induction",

    videos: [

    ],

  },

  {
    id: 8,
    title: "Chapter 7 - Alternating Current",

    videos: [

    ],

  },
  
  {
    id: 9,
    title: "Chapter 8 - Electromagnetic Waves",

    videos: [

    ],

  },
];

const VideoLecturesPage = () => {
  const [openChapter, setOpenChapter] = useState(null);

  const toggleChapter = (chapterId) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  const handleVideoClick = (youtubeUrl) => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="video-lectures-page">
      <Navbar />

      {/* Hero Section */}
      <section className="course-hero">
        <div className="course-hero-inner">
          <div className="course-hero-left">
            <h1>Class 12th Physics NCERT (Part I Book) CBSE – Updated Course</h1>
            <p className="course-hero-teacher">Prateek Karn</p>

            <h3 className="course-covers-title">This Course Covers The Following:</h3>

            <div className="course-features-grid">
              <div className="feature-column">
                <div className="feature-item">CBSE / NCERT Syllabus Based Topic Wise Explanation</div>
                <div className="feature-item">Syllabus Overview of the Subject</div>
                <div className="feature-item">Chapter wise Summary</div>
              </div>

              <div className="feature-column">
                <div className="feature-item">NCERT Solutions</div>
                <div className="feature-item">Full Chapter Videos</div>
                <div className="feature-item">One Shot Revision</div>
                <div className="feature-item">MCQs</div>
              </div>
            </div>
          </div>

          <div className="course-hero-right">
            <div className="course-card-hero">
              <div className="card-hero-header">
                <div className="card-badge">
                  <span className="card-logo-small">VT</span>
                  <span>Vidyam Tutorials</span>
                </div>
                <span className="full-course-badge">FULL COURSE</span>
              </div>

              <div className="card-hero-content">
                <h2 className="card-hero-subject">
                  Class 12th<br />
                  <span className="card-hero-subject-name">PHYSICS</span>
                </h2>
                <p className="card-hero-book">(Book : Part I - NCERT)</p>
              </div>

              <div className="card-hero-image">
                <img src={teacherImg} alt="Prateek Karn" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters and Free Course Section */}
      <section className="lectures-content">
        <div className="lectures-content-inner">
          {/* Left - Watch all Videos */}
          <div className="chapters-section">
            <h2 className="chapters-title">Watch all Videos</h2>

            <div className="chapter-accordion">
              {physicsChapters.map((chapter) => {
                // Calculate lecture count dynamically
                const lectureCount = chapter.videos ? chapter.videos.length : 0;

                return (
                  <div
                    key={chapter.id}
                    className={`chapter-item ${openChapter === chapter.id ? 'open' : ''}`}
                  >
                    <div
                      className="chapter-header"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <div className="chapter-title-row">
                        <span className="chapter-expand-icon">⊕</span>
                        <span className="chapter-name">{chapter.title}</span>
                      </div>
                      <span className="chapter-lecture-count">
                        {lectureCount} {lectureCount === 1 ? 'Lecture' : 'Lectures'}
                      </span>
                    </div>

                    {openChapter === chapter.id && (
                      <div className="chapter-videos">
                        {chapter.videos && chapter.videos.length > 0 ? (
                          chapter.videos.map((video) => (
                            <div
                              key={video.id}
                              className="video-lecture-item"
                              onClick={() => handleVideoClick(video.youtubeUrl)}
                            >
                              <div className="video-lecture-content">
                                <span className="video-play-icon">▶</span>
                                <span className="video-lecture-title">{video.title}</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="coming-soon-text">Videos coming soon...</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Free Course Card */}
          <aside className="sidebar-section">
            <div className="free-course-card">
              <h3 className="sidebar-card-title">Free Course</h3>

              <h4 className="offer-heading">What We Offer:</h4>
              <ul className="offer-list">
                <li>100% Quality Education</li>
                <li>India's Top Teachers</li>
                <li>Live & Recorded Lectures</li>
                <li>Sample Papers & E-Books</li>
                <li>Previous Year Question Paper</li>
                <li>Detailed E-Notes</li>
                <li>Exam Preparation Videos</li>
              </ul>

              <button className="grab-notes-btn">Grab E-Notes</button>

              <div className="app-download-section">
                <p className="app-download-text">Get Free Mobile App Now</p>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="playstore-btn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                </a>

                <a href="https://www.youtube.com/@MagnetBrainsEducation" target="_blank" rel="noopener noreferrer" className="youtube-link">
                  <span style={{ color: '#ef4444', fontSize: '18px' }}>▶</span>
                  Join us on YouTube
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoLecturesPage;
