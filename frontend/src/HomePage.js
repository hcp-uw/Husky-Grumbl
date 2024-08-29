import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';
import logo from './HG-Components/logo.png';
import message from './HG-Components/message.png';
import husky from './HG-Components/mascot.png';
import steps from './HG-Components/steps.png';
import message2 from './HG-Components/message2.png';
import message3 from './HG-Components/message3.png';
import checklist from './HG-Components/checklist.png';


const HomePage = () => {

  return (
    <div className="home-container">
        <header className="header">
            <div className="logo">
              <img src={logo} alt="Husky Grumbl" />
            </div>
        </header>

        <section className="intro">
          <img src={message} alt="Get Your Grumbl On"></img>
        </section>

        <section className="find-dining">
          <img src={husky} alt="husky with utensils"></img>
          <Link to="/explorepage">
            <button className="btn-find-dining">Find Dining</button>
          </Link>
        </section>


        <section className="steps">
            <img src={steps} alt="steps to using our website"></img>
        </section>

        <section className="filter-section">
            <img src={message2} alt="finding food just got a whole lot easier"></img>
        </section>

        <section className="options">
          <img src={message3} alt="let us do the hardwork of filtering for you"></img>
        </section>

        <section className="filter">
          <img src={checklist} alt="cuisines, price range, dietary restrictions, distance"></img>
        </section>

        <footer>
            <Link to="/explorepage">
                <button className="btn-get-started">Get Started</button>
            </Link>
        </footer>
    </div>
  );
}

export default HomePage;
