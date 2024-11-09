import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Section/Section.css';

const HomeSection = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isSharesOpen, setIsSharesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDestinations = () => setIsDestinationsOpen(!isDestinationsOpen);
  const toggleShares = () => setIsSharesOpen(!isSharesOpen);

  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section home-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleDestinations} className="category">
                Destinations {isDestinationsOpen ? '▲' : '▼'}
              </button>
              {isDestinationsOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Europe</li>
                    <li>Asia</li>
                    <li>Africa</li>
                    <li>Americas</li>
                  </ul>
                </div>
              )}
            </div>
          
          </div>
          <div className="nav-controls">
            <button className="control-btn">←Prev </button>
            <button className="control-btn">Next →</button>
          </div>
        </div>
        <div className="content">
          <h1 className="title">Welcome to Our Universal News Platform</h1>
          <p className="description">Discover the latest news, stories, and insights from around the world. Stay informed with our comprehensive coverage of global events.</p>
          <button className="read-more">Read More</button>
        </div>
        <div className="article-meta">
          <div className="meta-left">
            <span className="date">August 6, 2023</span>
          </div>
          <div className="meta-right">
            <div className="collapsible">
              <button onClick={toggleShares} className="stat">
                156 shares {isSharesOpen ? '▲' : '▼'}
              </button>
              {isSharesOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
                </div>
              )}
            </div>
            <span className="stat">
              <span className="number">945</span>
              <span className="icon">♡</span>
            </span>
            <span className="stat">
              <span className="number">23</span>
              <span className="icon">💬</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;