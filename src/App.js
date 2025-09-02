import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/About';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';

function App() {
  // Track current hash to determine which page to show
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#about');
  
  // Initialize theme on app load
  useEffect(() => {
    // Ensure we start with light theme (remove any existing dark-theme class)
    document.body.classList.remove('dark-theme');
  }, []);
  
  // Listen for hash changes and update state
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#about');
    };
    
    // Set initial hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Render content based on current hash
  const renderContent = () => {
    switch (currentHash) {
      case '#projects':
        return <ProjectsPage />;
      case '#about':
        return <AboutPage />;
      case '#resume':
        return <ResumePage />;
      case '#contact':
        return <ContactPage />;
      default:
        return (
          <div className="page-content">
            <h1>Welcome to {currentHash.slice(1)}</h1>
            <p>This page is under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
