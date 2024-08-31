import React from 'react';
import { Link } from 'react-router-dom'; 
import './TopBar.css'; 
import mascot from './HG-Components/nobackgroundmascot.png'
import { useLocation } from 'react-router-dom';


const TopBar = () => {

const location = useLocation();
if(location.pathname ==='/home-page') {
  return null
}

return (
  <div className="top-bar">
    <Link to="/home-page" className = 'logo-link'>
      <div className="logo-container">
        <div className="brand-name">
              <div className="brand-line-top">husky</div>
              <div className="brand-line-bottom">grumbl</div>
        </div>
        <img src={mascot} alt="Logo" className="logo" 
        />
      </div>
    </Link>

    <div className="nav-buttons">
      <Link Link to="/explore-page" className="nav-button">EXPLORE</Link>
      <Link Link to="/about" className="nav-button">ABOUT</Link>
      <Link Link to="/contact-us" className="nav-button">CONTACT US</Link>
    </div>
  </div>
);
}

export default TopBar;
