import React from 'react';
import { Link } from 'react-router-dom'; 
import './TopBar.css'; 

const TopBar = () => {

  return (
    <div className="top-bar">
      <Link to="/home-page" className="top-bar-title">Husky-Grumbl</Link>
      <Link Link to="/contact-us" className="contact-button">Contact Us</Link>
      <Link Link to="/explore-page" className="explore-button">Explore123</Link>
    </div>
  );
}

export default TopBar;
