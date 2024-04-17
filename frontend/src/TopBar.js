import React from 'react';
import { Link } from 'react-router-dom'; 
import './TopBar.css'; 

const TopBar = () => {

//   const handleContactClick = () => {
//     // Logic to execute when the button is clicked
//     console.log('Contact Us button clicked!');
//     // You can add more logic here, like opening a contact form modal, navigating to a contact page, etc.
//   };
  return (
    <div className="top-bar">
      <h1>My Top Bar</h1>
      <button Link to="/contact-us" className="contact-button">Contact Us</button>
    </div>
  );


}

export default TopBar;
