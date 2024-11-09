import React, { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link  } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTemperature(25);
    setIsDay(currentTime.getHours() >= 6 && currentTime.getHours() < 18);
  }, [currentTime]);

  const catalogs = [
    { name: 'Home', path: '/' },  // Bosh sahifa uchun yangi element
    { name: 'News', path: '/news' },
    { name: 'Opinion', path: '/opinion' },
    { name: 'Science', path: '/science' },
    { name: 'Life', path: '/life' },
    { name: 'Travel', path: '/travel' },
    { name: 'Moneys', path: '/money' },
    { name: 'Art & Design', path: '/art-design' },
    { name: 'Sports', path: '/sports' },
    
    { name: 'Health', path: '/health' },
    { name: 'Education', path: '/education' }
  ];
 


  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search..." />
          <button className="search-button"></button>
        </div>
        <div className="subscription">
          <span className="price">$9.99/month</span>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="location">
          <span className="location-icon"></span>
          <div className="location-info">
            <img 
              src="https://flagcdn.com/w40/uz.png" 
              alt="Uzbekistan flag" 
              className="country-flag"
            />
            <span>Toshkent, O'zbekiston</span>
          </div>
        </div>
        <div className="logo">UNIVERSAL</div>
        <div className="datetime-weather">
          <div className="datetime">
            <div>{currentTime.toLocaleDateString()}</div>
            <div>{currentTime.toLocaleTimeString()}</div>
          </div>
          <div className="weather">
            {isDay ? '☀️' : '🌙'} {temperature}°C
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        {catalogs.map((catalog, index) => (
          <Link 
            key={index} 
            to={catalog.path}
            className="nav-link"
          >
            {catalog.name}
          </Link>
        ))}
      </div>

      {isMenuOpen && (
        <div className="side-menu">
          <div className="menu-header">
            <span>Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>✕</button>
          </div>
          {/* Menu items */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;