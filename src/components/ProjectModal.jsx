import React from 'react';
import './ProjectModal.css';

/* ProjectModal: displays project details in a large modal */
export default function ProjectModal({ isOpen, project, onClose }) {
  /* Don't render if modal is not open */
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        {/* Project Image */}
        <div className="modal-project-image">
          {project.deployed === 'false' ? (
            <div className="coming-soon-placeholder">
              <span>coming soon ...</span>
            </div>
          ) : (
            <img 
              src={project.image} 
              alt={project.name}
            />
          )}
        </div>

        {/* Project Details */}
        <div className="modal-project-details">
          <div className="modal-project-title">
            <h2>{project.name}</h2>
          </div>
          
          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && project.tech[0] !== '' && (
            <div className="modal-project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          <div className="modal-project-description">
            <p>{project.description}</p>
          </div>

          {/* Project Link Button */}
          <div className="modal-project-actions">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="modal-project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
