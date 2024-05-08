import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomeHeader.css'; 

const HomeHeader = () => {
  return (
    <div className="home-header">
        <h1 className="home-header-content">Husky Grumbl</h1>
        <p className="home-header-content">
            Discover personalized dining experiences and plan meals effortlessly in the UW area with Husky Grumbl. <br/>
            Filter dining options by distance, budget, cuisine, and more to streamline meal planning for UW students. <br/>
            Simplify your choices and enjoy convenient dining with Husky Grumbl. <br/>
        </p>
        <Link to="/explore-page" className="explore-button">Get Started</Link>
    </div>
  );
}

export default HomeHeader;
