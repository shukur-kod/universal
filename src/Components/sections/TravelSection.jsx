import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './travelhomeSection.css';
import ArticleSection from './ArticleSection'; // Yangi komponentni import qiling

const TravelSection = () => {
  const [isLocalOpen, setIsLocalOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0); // Joriy maqola indeksini saqlash
  const [currentSection, setCurrentSection] = useState(null); // Joriy bo'limni saqlash

  const articles = [
    { title: "Article 1", content: "Content of Article 1" },
    { title: "Article 2", content: "Content of Article 2" },
    { title: "Article 3", content: "Content of Article 3" },
  ]; // Maqolalar ro'yxati

  const navigate = useNavigate();

  const toggleLocal = () => {
    setIsLocalOpen(!isLocalOpen);
    setCurrentSection('local'); // Local bo'limni tanlang
    setCurrentArticleIndex(0); // Har safar bosilganda maqolani boshidan boshlang
  };

  const toggleGlobal = () => {
    setIsGlobalOpen(!isGlobalOpen);
    setCurrentSection('global'); // Global bo'limni tanlang
    setCurrentArticleIndex(0); // Har safar bosilganda maqolani boshidan boshlang
  };

  const handleBackToMain = () => {
    navigate('/');
  };

  const handlePrev = () => {
    if (currentArticleIndex > 0) {
      setCurrentArticleIndex(currentArticleIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentArticleIndex < articles.length - 1) {
      setCurrentArticleIndex(currentArticleIndex + 1);
    }
  };

  return (
    <>
      <section className="hero-section travel-section">
        <div className="overlay">
          <div className="navigation">
            <div className="nav-left">
              <div className="collapsible">
                <button onClick={toggleLocal} className="category">
                  Local Destinations {isLocalOpen ? '▲' : '▼'}
                </button>
                {isLocalOpen && (
                  <div className="collapse-content">
                    <ul>
                    <li onClick={() => { setCurrentSection('local'); setCurrentArticleIndex(0); }}>Samarkand</li>
                      <li onClick={() => { setCurrentSection('local'); setCurrentArticleIndex(1); }}>Bukhara</li>
                      <li onClick={() => { setCurrentSection('local'); setCurrentArticleIndex(2); }}>Khiva</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="collapsible">
                <button onClick={toggleGlobal} className="category">
                  Global Destinations {isGlobalOpen ? '▲' : '▼'}
                </button>
                {isGlobalOpen && (
                  <div className="collapse-content">
                     <ul>
                      <li onClick={() => { setCurrentSection('global'); setCurrentArticleIndex(0); }}>Paris</li>
                      <li onClick={() => { setCurrentSection('global'); setCurrentArticleIndex(1); }}>New York</li>
                      <li onClick={() => { setCurrentSection('global'); setCurrentArticleIndex(2); }}>Tokyo</li>
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
            <h1 className="title">{articles[currentArticleIndex].title}</h1>
            <p className="description">{articles[currentArticleIndex].content}</p>
            <button className="read-more">Read More</button>
            <div className="nav-controls">
              <button className="control-btn" onClick={handlePrev} disabled={currentArticleIndex === 0}>← Prev</button>
              <button className="control-btn" onClick={handleNext} disabled={currentArticleIndex === articles.length - 1}>Next →</button>
            </div>
          </div>
        </div>
      </section>
      <ArticleSection />
    </>
  );
};

export default TravelSection;