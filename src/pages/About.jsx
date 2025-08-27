import React from 'react';
import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Left Side: profile picture*/}
      <div class="left-profile-image">
        <img src="/images/profile-pic.jpeg" alt="Profile"/>
      </div>

      {/* Right Side: about info */}
      <div class="right-info">
        <div class="my-name">
          <h2>Caleb Pham</h2>
        </div>
        <div class="my-info">
          <p>
            Hi, my name is Caleb and I’m a Computer Science student at The University of Texas at Austin.  
            I enjoy learning how to build software that solves everyday problems, whether that’s through web development, creating small apps, or experimenting with new technologies.  
            Outside of class, I’m always looking for ways to apply what I’ve learned to real projects and grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
} 