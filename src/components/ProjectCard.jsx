import React from 'react';
import './ProjectCard.css';

// Simple Project card: image + name; clicks open modal
function ProjectCard({ project, onProjectClick }) {
  // Handle project card click to open modal
  const handleClick = () => {
    onProjectClick(project);
  };

  return (
    <div className="project-card">
        <button className="project-button" onClick={handleClick}>
            {project.deployed === 'false' ? (
              <div className="project-coming-soon">
                <span>coming soon ...</span>
              </div>
            ) : (
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />
            )}
        </button>
        <div className="project-name">{project.name}</div>
    </div>
  );
}

export default ProjectCard;