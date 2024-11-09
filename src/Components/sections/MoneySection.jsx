import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga

const MoneySection = () => {
  const [isInvestingOpen, setIsInvestingOpen] = useState(false);
  const [isSavingOpen, setIsSavingOpen] = useState(false);
  
  // Navigate hook-ini qo'shing
  const navigate = useNavigate();
  const toggleInvesting = () => setIsInvestingOpen(!isInvestingOpen);
  const toggleSaving = () => setIsSavingOpen(!isSavingOpen);

  // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };

  return (
    <section className="hero-section money-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleInvesting} className="category">
                Investing {isInvestingOpen ? '▲' : '▼'}
              </button>
              {isInvestingOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Stocks</li>
                    <li>Bonds</li>
                    <li>Real Estate</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleSaving} className="category">
                Saving {isSavingOpen ? '▲' : '▼'}
              </button>
              {isSavingOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Budgeting</li>
                    <li>Emergency Fund</li>
                    <li>Retirement Savings</li>
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
          <h1 className="title">Money Section</h1>
          <p className="description">Learn about investing and saving money.</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default MoneySection;