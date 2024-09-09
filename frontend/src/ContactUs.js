import React from 'react';
import './ContactUs.css';
import shreya from './team-photos/shreya_pandey.png';
import neha from './team-photos/neha_pinni.png';

function ContactUs() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="team-section">
        <h2>Our Team</h2>
        
        <div className="team-member">
          <div className="team-image">
            <img src={shreya} alt="Shreya Pandey" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Shreya Pandey</h3>
            <p>Project Manager, Backend Lead</p>
            <p>Email: <a href="mailto:shreya25@uw.edu">shreya25@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/shreyapandey2027/" target="_blank" rel="noopener noreferrer">Shreya Pandey</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={neha} alt="Neha Pinni" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Neha Pinni</h3>
            <p>Frontend Lead</p>
            <p>Email: <a href="mailto:npinni@uw.edu">npinni@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/neha-pinni/" target="_blank" rel="noopener noreferrer">Neha Pinni</a></p>
          </div>
        </div>

        {/* Add more team members in the same structure if needed */}
        
      </div>

      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" rows="4" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

