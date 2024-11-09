import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const NewsSection = () => {
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleLocal = () => setIsLocalOpen(!isLocalOpen);
  const toggleGlobal = () => setIsGlobalOpen(!isGlobalOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section news-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleLocal} className="category">
                Local News {isLocalOpen ? '▲' : '▼'}
              </button>
              {isLocalOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>City Events</li>
                    <li>Local Politics</li>
                    <li>Community News</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleGlobal} className="category">
                Global News {isGlobalOpen ? '▲' : '▼'}
              </button>
              {isGlobalOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>World Events</li>
                    <li>International Politics</li>
                    <li>Global Economy</li>
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
          <h1 className="title">News Section</h1>
          <p className="description">Stay updated with the latest news.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;