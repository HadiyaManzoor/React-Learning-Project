// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Add styling as needed

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell </li>
            <li>Sell under Accelerator</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
          </ul>
        </div>

        {/* Add more columns as needed */}

        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        
        <span>© 2024 Your Company Name , Inc. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
