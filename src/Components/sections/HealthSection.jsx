import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const HealthSection = () => {
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const [isFitnessOpen, setIsFitnessOpen] = useState(false);
// Navigate hook-ini qo'shing
const navigate = useNavigate();
  const toggleNutrition = () => setIsNutritionOpen(!isNutritionOpen);
  const toggleFitness = () => setIsFitnessOpen(!isFitnessOpen);
// Bu funksiyani qo'shing
const handleBackToMain = () => {
  navigate('/');
};
  return (
    <section className="hero-section health-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleNutrition} className="category">
                Nutrition {isNutritionOpen ? '▲' : '▼'}
              </button>
              {isNutritionOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Healthy Eating</li>
                    <li>Diet Plans</li>
                    <li>Supplements</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleFitness} className="category">
                Fitness {isFitnessOpen ? '▲' : '▼'}
              </button>
              {isFitnessOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Workout Routines</li>
                    <li>Yoga</li>
                    <li>Cardio</li>
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
          <h1 className="title">Health Section</h1>
          <p className="description">Discover health tips and fitness advice.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;