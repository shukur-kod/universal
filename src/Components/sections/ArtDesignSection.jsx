import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Section/Section.css';  // './Section.css' o'rniga // Ensure to import the CSS for styling

const ArtDesignSection = () => {
  const [isArtOpen, setIsArtOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const navigate = useNavigate();

  const toggleArt = () => setIsArtOpen(!isArtOpen);
  const toggleDesign = () => setIsDesignOpen(!isDesignOpen);

  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section art-design-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleArt} className="category">
                Art {isArtOpen ? '▲' : '▼'}
              </button>
              {isArtOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Painting</li>
                    <li>Sculpture</li>
                    <li>Photography</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleDesign} className="category">
                Design {isDesignOpen ? '▲' : '▼'}
              </button>
              {isDesignOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Graphic Design</li>
                    <li>Interior Design</li>
                    <li>Fashion Design</li>
                  </ul>
                </div>
              )}
            </div>
            <button className="back-btn" onClick={handleBackToMain}>
  <span className="home-icon">⌂</span> Back to main
</button>
          </div>
          <div className="nav-controls">
            <button className="control-btn" onClick={handleBackToMain}>Back to Main</button>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Art & Design Section</h1>
          <p className="description">Explore the world of art and design, from classic paintings to modern graphic design.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default ArtDesignSection;