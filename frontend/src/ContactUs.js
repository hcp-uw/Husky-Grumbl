import React from 'react';
import './ContactUs.css';
import shreya from './team-photos/shreya_pandey.png';

function ContactUs() {
  return (
    <div className="contact-card">
      <div className="contact-image">
        <img src={shreya} alt="Shreya Pandey" />
      </div>
      <div className="contact-info">
        <h2 className="contact-name">SHREYA PANDEY</h2>
        <hr className="divider" />
        <p>Project Manager, Backend Lead</p>
        <p>Email: shreya25@uw.edu</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/shreyapandey2027/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/shreyapandey2027/</a></p>
      </div>
    </div>
  );
}

export default ContactUs;


// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Can be used to send user data to server
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Contact Us</h1>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="name-group">
//             <input
//               placeholder='First Name*'
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//             />
            
//             <input
//               placeholder='Last Name*'
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <input
//               placeholder='Email*'
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group textarea">
//             <textarea
//               placeholder='Write us a Message:'
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;
