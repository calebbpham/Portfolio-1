import React, { useEffect, useState } from 'react';
import './Header.css';

// Header: renders a centered, folder-style tab navigation
// - Sticky behavior and height are controlled by the parent `.App-header` styles in App.css
// - Tabs are accessible via role attributes; active tab is synced to URL hash
export default function Header() {
  const tabs = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track which tab is active based on the URL hash (e.g., #about)
  const [activeHref, setActiveHref] = useState('#about');

  // Initialize from the current hash and update on hash changes
  useEffect(() => {
    const applyHash = () => {
      const currentHash = window.location.hash || '#about';
      setActiveHref(currentHash);
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  // Click handler keeps state in sync immediately on click
  const handleClick = (href) => {
    setActiveHref(href);
  };

  return (
    // Navigation region holding brand (left), tabs (center), social (right)
    <nav className="tabs-wrapper" aria-label="Primary">
      <div className="header-inner">
        {/* Left: your name/brand */}
        <div className="brand" aria-label="Site owner">
          Caleb Pham
        </div>

        {/* Center: the tabs stay centered using flex columns (brand/social flex:1) */}
        <ul className="tabs" role="tablist">
          {tabs.map((tab) => {
            const isActive = activeHref === tab.href;
            return (
              <li className="tab" role="presentation" key={tab.label}>
                <a
                  className="tab-link"
                  href={tab.href}
                  role="tab"
                  aria-selected={isActive ? 'true' : 'false'}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => handleClick(tab.href)}
                >
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: social icons */}
        <div className="social" aria-label="Social links">
          <a
            className="icon-link"
            href="https://github.com/calebpham"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src="/icons/github.svg" alt="github"/>
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/calebpham"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="linkedin"/>
          </a>
        </div>
      </div>
    </nav>
  );
}


