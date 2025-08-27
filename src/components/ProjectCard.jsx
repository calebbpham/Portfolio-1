import React from 'react';
import './ProjectCard.css';

// Simple Project card: image + name; clicks navigate to a placeholder page
function ProjectCard({ project }) {
  // Use Link so the entire card is clickable and routes to the project page
  return (
    <div className="project-card">
        <button className="project-button">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />
        </button>
        <div className="project-name">{project.name}</div>
    </div>
  );
}

export default ProjectCard;