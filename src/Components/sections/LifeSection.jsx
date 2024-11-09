import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const LifeSection = () => {
  const [isLifestyleOpen, setIsLifestyleOpen] = useState(false);
  const [isRelationshipsOpen, setIsRelationshipsOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleLifestyle = () => setIsLifestyleOpen(!isLifestyleOpen);
  const toggleRelationships = () => setIsRelationshipsOpen(!isRelationshipsOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section life-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleLifestyle} className="category">
                Lifestyle {isLifestyleOpen ? '▲' : '▼'}
              </button>
              {isLifestyleOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Travel</li>
                    <li>Food</li>
                    <li>Hobbies</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleRelationships} className="category">
                Relationships {isRelationshipsOpen ? '▲' : '▼'}
              </button>
              {isRelationshipsOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Family</li>
                    <li>Friendship</li>
                    <li>Romance</li>
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
          <h1 className="title">Life Section</h1>
          <p className="description">Explore lifestyle and relationship tips.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;