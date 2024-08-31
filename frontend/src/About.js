import React from 'react';
import { Link } from 'react-router-dom'; 
import './About.css'; 

const About = () => {
  return (
    <div className="about">
        <h1 className="about-content">At Husky Grumbl, we make dining in the UW area simple and personalized. 
        Whether you're planning a meal or seeking new dining experiences, 
        our platform helps you find the perfect spot. </h1>
        <h1 className="about-content">Easily filter your options by distance, price, cuisine, and more, 
        so you can focus on enjoying your time and making delicious memories.</h1>
        <h1 className="about-content">Designed with UW students in mind, Husky Grumbl streamlines your meal planning, 
        making dining decisions effortless and convenient.</h1>
    </div>
  );
}

export default About;