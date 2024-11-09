import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const SportsSection = () => {
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleTeams = () => setIsTeamsOpen(!isTeamsOpen);
  const toggleEvents = () => setIsEventsOpen(!isEventsOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section sports-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleTeams} className="category">
                Teams {isTeamsOpen ? '▲' : '▼'}
              </button>
              {isTeamsOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Football</li>
                    <li>Basketball</li>
                    <li>Baseball</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleEvents} className="category">
                Events {isEventsOpen ? '▲' : '▼'}
              </button>
              {isEventsOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Olympics</li>
                    <li>World Cup</li>
                    <li>Championships</li>
                  </ul>
                </div>
              )}
            </div>
            <button onClick={handleBackToMain} className="back-button">
              Back to Main
            </button>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Sports Section</h1>
          <p className="description">Stay updated with the latest sports news.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;