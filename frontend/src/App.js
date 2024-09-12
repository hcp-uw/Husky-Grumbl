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
      const response = await axios.get('/api/food-recommendations', {
        params: { latitude, longitude, keywords, minPrice, maxPrice, openNow, radius },
      });
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/explore-page" element={<ExplorePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Define other routes if needed */}
        </Routes>

        {/* Form for getting food recommendations */}
        <div className="App">
          <h1>Food Recommendations</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Latitude:</label>
              <input
                type="number"
                step="any"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Longitude:</label>
              <input
                type="number"
                step="any"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Keywords:</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
            <div>
              <label>Min Price (0-4):</label>
              <input
                type="number"
                min="0"
                max="4"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Max Price (0-4):</label>
              <input
                type="number"
                min="0"
                max="4"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Open Now:</label>
              <input
                type="checkbox"
                checked={openNow}
                onChange={(e) => setOpenNow(e.target.checked)}
              />
            </div>
            <div>
              <label>Radius (miles):</label>
              <input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
              />
            </div>
            <button type="submit">Get Recommendations</button>
          </form>

          {/* Display recommendations */}
          {recommendations.length > 0 && (
            <div>
              <h2>Recommended Restaurants</h2>
              {recommendations.map((recommendation, index) => (
                <RestaurantCard
                  key={index}
                  restaurantName={recommendation.name}
                  cuisine={recommendation.cuisine || 'Unknown'}
                  totalRatings={recommendation.total_user_ratings}
                  distance={recommendation.distance}
                  price={recommendation.price_level}
                  rating={recommendation.rating}
                  isOpen={recommendation.open_now ? 'Yes' : 'No'}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
