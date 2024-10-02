import './App.css'; // Import CSS file
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar';
import ContactUs from './ContactUs'; 
import HomePage from './HomePage'; 
import ExplorePage from './ExplorePage'; 
import About from './About'; 
import RestaurantCard from './RestaurantCard.js';

function App() {
  // State hooks for form inputs and recommendations
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [keywords, setKeywords] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4);
  const [openNow, setOpenNow] = useState(false);
  const [radius, setRadius] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call logic goes here
    try {
      const response = await axios.get('/recommendations', {
        params: { latitude, longitude, keywords, minPrice, maxPrice, openNow, radius },
      });
      console.log("Try statement")
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      console.log("Error statement")
    }
  };

  

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/explore-page" element={<ExplorePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Define other routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
