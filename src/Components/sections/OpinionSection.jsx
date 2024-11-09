import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const OpinionSection = () => {
  const [isEditorialOpen, setIsEditorialOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleEditorial = () => setIsEditorialOpen(!isEditorialOpen);
  const toggleReviews = () => setIsReviewsOpen(!isReviewsOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section opinion-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleEditorial} className="category">
                Editorials {isEditorialOpen ? '▲' : '▼'}
              </button>
              {isEditorialOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Opinion Pieces</li>
                    <li>Editorial Columns</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleReviews} className="category">
                Reviews {isReviewsOpen ? '▲' : '▼'}
              </button>
              {isReviewsOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Book Reviews</li>
                    <li>Movie Reviews</li>
                    <li>Product Reviews</li>
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
          <h1 className="title">Opinion Section</h1>
          <p className="description">Read various opinions and reviews.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default OpinionSection;