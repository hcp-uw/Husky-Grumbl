import React from 'react';
import './ContactUs.css';
import shreya from './team-photos/shreya_pandey.png';
import neha from './team-photos/neha_pinni.png';
import raiden from './team-photos/raiden_santos.png';
import shayna from './team-photos/shayna_suzuki.png';
import kevin from './team-photos/kevin_kim.png';
import mayee from './team-photos/mayee_sun.png';
import varun from './team-photos/varun_shinde.png';

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
            <img src={raiden} alt="Raiden Santos" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Raiden Santos</h3>
            <p>Frontend Developer</p>
            <p>Email: <a href="mailto:raidens@uw.edu">raidens@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/raidensantos/" target="_blank" rel="noopener noreferrer">Raiden Santos</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={shayna} alt="Shayna Suzuki" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Shayna Suzuki</h3>
            <p>Frontend Developer</p>
            <p>Email: <a href="mailto:shay2022@uw.edu">shay2022@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/shayna-suzuki/" target="_blank" rel="noopener noreferrer">Shayna Suzuki</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={kevin} alt="Kevin Kim" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Kevin Kim</h3>
            <p>Backend Developer</p>
            <p>Email: <a href="mailto:kevi0201@uw.edu">kevi0201@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kevkim27/" target="_blank" rel="noopener noreferrer">Kevin Kim</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={mayee} alt="Mayee Sun" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Mayee Sun</h3>
            <p>Backend Developer</p>
            <p>Email: <a href="mailto:mayeesun@uw.edu">mayeesun@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/mayee-sun-b15535277/" target="_blank" rel="noopener noreferrer">Mayee Sun</a></p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-image">
            <img src={varun} alt="Varun Shinde" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Varun Shinde</h3>
            <p>Backend Developer</p>
            <p>Email: <a href="mailto:varunshinde217@uw.edu">varunshinde217@uw.edu</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/shindevarun/" target="_blank" rel="noopener noreferrer">Varun Shinde</a></p>
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

