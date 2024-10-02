import React from 'react';
import { Link } from 'react-router-dom'; 
import './About.css';
import title from './HG-Components/title.png';
import TopBar from './TopBar';

const About = () => {
  return (
    <div> <TopBar/>
    <div className="about">
      <section className="title">
          <img src={title} alt="our mission"></img>
      </section>

      <section className="message">
        <h1 className="about-content">
        Whether you're planning a meal or seeking new dining experiences, 
        HuskyGrumbl helps you find the perfect spot. </h1>
        <h1 className="about-content">Easily filter your options by distance, price, cuisine, and more, 
        so you can focus on enjoying your time and making delicious memories.</h1>
        <h1 className="about-content">Designed with UW students in mind, Husky Grumbl streamlines your meal planning, 
        making dining decisions effortless and convenient.</h1>
      </section>
    </div>
    </div>
  );
}

export default About;