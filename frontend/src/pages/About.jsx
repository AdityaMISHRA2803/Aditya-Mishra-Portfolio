// src/pages/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>

        <p className="intro-text">
          Hi, I'm <strong className="name-highlight">Aditya Mishra</strong>, a dedicated and enthusiastic full-stack developer passionate about building scalable, efficient, and user-friendly web applications.
          <span className="line-break"></span>
          I specialize in the <span className="highlight">MERN stack</span> and continuously strengthen my problem-solving and development skills through real-world projects and daily practice.
          <span className="line-break"></span>
          I'm always eager to <span className="highlight">learn</span>, <span className="highlight">build</span>, and <span className="highlight">grow</span>—both personally and professionally.
        </p>

        <p className="current-focus">
          I'm currently pursuing a B.Tech in <span className="highlight">Information Technology</span> at the Indian Institute of Information Technology, Sonepat.
          <span className="line-break"></span>
          I'm working on exciting real-world projects like a <em className="project-emphasis">Music Player</em>, <em className="project-emphasis">Sorting Algorithm Visualizer</em>, and a <em className="project-emphasis">Digital Library System</em>.
          <span className="animated-ellipsis"></span>
        </p>

        <div className="about-image">
          <img src="/profile-pic.png" alt="Profile" />
        </div>

        <a href="/Aditya-Mishra-Resume.pdf" download>
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>

      <div className="button-group">
        <a href="mailto:aditya.iiitsp@gmail.com" className="email-button">
          Email Me
        </a>

        <a href="tel:+919625042281" className="phone-button">
          Call Me
        </a>

        <a
          href="https://www.linkedin.com/in/aditya-mishra-iiit/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default About;
