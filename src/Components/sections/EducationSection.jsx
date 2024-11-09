import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Bu qatorni qo'shing
import '../Section/Section.css';  // './Section.css' o'rniga // Assuming you want to use the same styles

const EducationSection = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    // Navigate hook-ini qo'shing
    const navigate = useNavigate();
  const toggleCourses = () => setIsCoursesOpen(!isCoursesOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);
   // Bu funksiyani qo'shing
  const handleBackToMain = () => {
    navigate('/');
  };
  return (
    <section className="hero-section education-section">
      <div className="overlay">
        <div className="navigation">
          <div className="nav-left">
            <div className="collapsible">
              <button onClick={toggleCourses} className="category">
                Courses {isCoursesOpen ? '▲' : '▼'}
              </button>
              {isCoursesOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>History</li>
                    <li>Literature</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="collapsible">
              <button onClick={toggleResources} className="category">
                Resources {isResourcesOpen ? '▲' : '▼'}
              </button>
              {isResourcesOpen && (
                <div className="collapse-content">
                  <ul>
                    <li>Books</li>
                    <li>Online Courses</li>
                    <li>Webinars</li>
                    <li>Podcasts</li>
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
          <h1 className="title">Welcome to the Education Section</h1>
          <p className="description">
            Explore a variety of courses and resources to enhance your knowledge and skills.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;