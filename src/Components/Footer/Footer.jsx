// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Layer */}
      <div className="footer-top">
        <div className="catalog-container">
          <div className="catalog news">
            <h3>News</h3>
            <ul>
              <li>Nation</li>
              <li>World</li>
              <li>Politics</li>
              <li>Solar Eclipse</li>
            </ul>
          </div>
          <div className="catalog arts">
            <h3>Arts</h3>
            <ul>
              <li>Art & Design</li>
              <li>Movies</li>
              <li>People</li>
              <li>Video: Arts</li>
              <li>Theater</li>
            </ul>
          </div>
          <div className="catalog travel">
            <h3>Travel</h3>
            <ul>
              <li>Destinations</li>
              <li>Flights</li>
              <li>Business Travel</li>
            </ul>
          </div>
          <div className="catalog sports">
            <h3>Sports</h3>
            <ul>
              <li>Olympics</li>
              <li>Motor Sports</li>
              <li>Volleyball</li>
              <li>MMA</li>
              <li>Cycling</li>
            </ul>
          </div>
          <div className="catalog tech">
            <h3>Tech</h3>
            <ul>
              <li>Tech</li>
              <li>Tech Columnists</li>
              <li>Tech Reviews</li>
              <li>Talking Tech</li>
            </ul>
          </div>
          <div className="catalog moneys">
            <h3>Moneys</h3>
            <ul>
              <li>Markets</li>
              <li>Business</li>
              <li>Personal Finance</li>
              <li>Retirement</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Layer */}
      <div className="footer-middle">
        <div className="links">
          <a href="#">Contact Us</a>
          <a href="#">Work with Us</a>
          <a href="#">Advertise</a>
          <a href="#">Your Ad Choice</a>
        </div>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>

      {/* Third Layer */}
      <div className="footer-bottom">
        <p>
          Universal's business concept is to offer fashion and quality at the best
          price in a sustainable way. Universal has since it was founded in 2015
          grown into one of the world's leading fashion companies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;