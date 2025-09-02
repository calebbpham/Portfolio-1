import React from 'react';
import './About.css';

// About page: displays profile picture and "About Me" information
export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="left-profile-image">
        <img 
          src="/images/profile-pic.jpeg" 
          alt="Profile"
        />
      </div>
      <div className="right-info">
        <div className="my-name">
          <h2>Caleb Pham</h2>
        </div>
        <div className="my-info">
          <p>Hi, I’m Caleb Pham, a Computer Science student at UT Austin passionate 
            about building tools that make everyday life easier. I enjoy working with 
            React.js, HTML, CSS, and other modern web technologies to create clean, 
            user-friendly applications. I love exploring how technology 
            can bring people together and solve real problems. Outside of coding
            , I enjoy playing tennis & pickleball, watching movies, and eating good food.</p>
        </div>
      </div>
    </div>
  );
} 