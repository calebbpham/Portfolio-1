import React, { useState } from 'react';
import './ProjectsPage.css';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';

// Projects page: displays a grid of project cards
// Each card has a large image/button with a small name underneath
export default function ProjectsPage() {
  // Modal state management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 
        'My portfolio website is a sleek and minimalist showcase of my projects, ' +
        'designed with a focus on clarity and usability. Built with React.js, along with HTML ' +
        'and CSS for structure and styling, the site emphasizes a modern and responsive layout ' +
        'that adapts smoothly across devices. The contact page is powered by EmailJS, allowing visitors ' +
        'to reach out directly without leaving the site. Overall, the design highlights simplicity while ' +
        'keeping the spotlight on my work, ensuring both functionality and a professional aesthetic.',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: ['React', 'CSS', 'JavaScript'],
      deployed: 'true'
    },
    {
      id: 2,
      name: 'E-commerce App',
      description: 'Headless e-commerce platform, coming soon!',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: ['React', 'CSS', 'JavaScript'],
      deployed: 'false'
    },
    {
      id: 3,
      name: 'Event Ticketing App',
      description: 'Event ticketing app, coming soon!',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: [''],
      deployed: 'false'
    },
    {
      id: 4,
      name: 'Project 4',
      description: '',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: [''],
      deployed: 'false'
    }
  ];

  // Handle opening modal when project card is clicked
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-page"> 
      <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>

      {/* Project Modal Component */}
      <ProjectModal 
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseModal}
      />
    </div>
  );
} 