// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopCourses from "./components/classes";
import Features from "./components/features";
import Team from "./components/team";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Class12Page from "./pages/Class12Page";
import Class11Page from "./pages/Class11Page";
import VideoLecturesPage from "./pages/VideoLecturesPage";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TopCourses />
      <Features />
      <Team />
      <Faq />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/class-12" element={<Class12Page />} />
          <Route path="/class-11" element={<Class11Page />} />
          <Route path="/video-lectures/class-12-physics" element={<VideoLecturesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
