import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const ScienceSection = () => {
  const [isResearchOpen, setIsResearchOpen] = useState(false);
  const [isDiscoveriesOpen, setIsDiscoveriesOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleResearch = () => setIsResearchOpen(!isResearchOpen);
  const toggleDiscoveries = () => setIsDiscoveriesOpen(!isDiscoveriesOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section science-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleResearch} className="category">
                Research {isResearchOpen ? '▲' : '▼'}
              </button>
              {isResearchOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Scientific Studies</li>
                    <li>Research Papers</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleDiscoveries} className="category">
                Discoveries {isDiscoveriesOpen ? '▲' : '▼'}
              </button>
              {isDiscoveriesOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>New Technologies</li>
                    <li>Scientific Breakthroughs</li>
                  </ul>
                </div>
              )}
            </div>
            <button className="back-btn" onClick={handleBackToMain}>
  <span className="home-icon">⌂</span> Back to main
</button>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Science Section</h1>
          <p className="description">Explore the latest in science and research.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;