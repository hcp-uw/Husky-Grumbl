import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';
import HomeHeader from './HomeHeader'; 

const HomePage = () => {

  return (
    <div className="home-container">
        <HomeHeader />
    </div>
  );
}

export default HomePage;