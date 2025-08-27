import React from 'react';
import './ProjectsPage.css';
import ProjectCard from '../components/ProjectCard.jsx';

// Projects page: displays a grid of project cards
// Each card has a large image/button with a small name underneath
export default function ProjectsPage() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      description: 'Personal portfolio built with React',
      image: '/images/portfolio-pic.png', // Add your project images
      link: '#',
      tech: ['React', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      name: 'E-commerce App',
      description: 'Headless e-commerce platform',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: ['React', 'CSS', 'JavaScript']
    },
    {
      id: 3,
      name: 'Project 3',
      description: '',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: ['']
    },
    {
      id: 4,
      name: 'Project 4',
      description: '',
      image: '/images/portfolio-pic.png',
      link: '#',
      tech: ['']
    }
  ];

  return (
    <div className="projects-page"> 
      <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
    </div>
  );
} 