import React, { useState, useEffect } from 'react';
import './ExplorePage.css';
import RestaurantCard from './RestaurantCard';

const ExplorePage = () => {
  const [priceLevel, setPriceLevel] = useState(1);
  const [maxDistance, setMaxDistance] = useState(10);
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [locationError, setLocationError] = useState(null);
  const [isLocationShared, setIsLocationShared] = useState(false);

  const handlePriceChange = (event) => {
    setPriceLevel(event.target.value);
  };

  const handleMaxDistanceChange = (event) => {
    setMaxDistance(event.target.value);
  };

  const getPriceSymbol = () => {
    return '$'.repeat(priceLevel);
  };

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' })
      .then((result) => {
        if (result.state === 'granted' || result.state === 'prompt') {
          getLocation();
        } else {
          setLocationError('Location access denied. Please enable location services in your browser settings.');
        }
      });
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsLocationShared(true);
        },
        (error) => {
          setLocationError('Error getting location: ' + error.message);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
      setIsLocationShared(false);
    }
  };

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1 className="explore-title">
          EXPLORE THE BEST SPOTS, CURATED FOR <span className="highlighted-text">YOU</span>
        </h1>
      </div>
      <div className="explore-content">
        <div className="sidebar">
          <h2 className="section">Your Location</h2>
          {isLocationShared && location && (
            <p>{location.latitude}, {location.longitude}</p>
          )}
          {locationError && (
            <div>
              <p>Location access denied. Try enabling location services in your browser settings, or continue to browse without location-based recommendations.</p>
            </div>
          )}

          <h2 className="section">Cuisine Preferences</h2>
          <ul>
            <li>
              <input type="checkbox" id="thai" name="thai" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="thai">Thai</label>
            </li>
            <li>
              <input type="checkbox" id="japanese" name="japanese" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="japanese">Japanese</label>
            </li>
            <li>
              <input type="checkbox" id="mexican" name="mexican" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="mexican">Mexican</label>
            </li>
            <li>
              <input type="checkbox" id="indian" name="indian" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="indian">Indian</label>
            </li>
            <li>
              <input type="checkbox" id="korean" name="korean" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="korean">Korean</label>
            </li>
            <li>
              <input type="checkbox" id="italian" name="italian" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="italian">Italian</label>
            </li>
            <li>
              <input type="checkbox" id="vietnamese" name="vietnamese" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="vietnamese">Vietnamese</label>
            </li>
            <li>
              <input type="checkbox" id="mediterranean" name="mediterranean" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="mediterranean">Mediterranean</label>
            </li>
            <li>
              <input type="checkbox" id="chinese" name="chinese" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="chinese">Chinese</label>
            </li>
            <li>
              <input type="checkbox" id="other" name="other" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="other">Other</label>
            </li>
          </ul>

          <h2 className="section">Price {getPriceSymbol()}</h2>
          <div className="price-slider">
            <span className="label-text">$</span>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={priceLevel}
              onChange={handlePriceChange}
            />
            <span className="label-text">$$$$</span>
          </div>

          <h2 className="section">Dietary Restrictions</h2>
          <ul>
            <li>
              <input type="checkbox" id="vegetarian" name="vegetarian" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="vegetarian">Vegetarian</label>
            </li>
            <li>
              <input type="checkbox" id="vegan" name="vegan" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="vegan">Vegan</label>
            </li>
            <li>
              <input type="checkbox" id="halal" name="halal" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="halal">Halal</label>
            </li>
            <li>
              <input type="checkbox" id="kosher" name="kosher" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="kosher">Kosher</label>
            </li>
            <li>
              <input type="checkbox" id="glutenFree" name="glutenFree" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="glutenFree">Gluten-Free</label>
            </li>
          </ul>

          <h2 className="section">Availability Status</h2>
          <ul>
            <li>
              <input type="checkbox" id="openNow" name="openNow" className="checkbox" style={{ display: "none" }} />
              <label className="label-text" htmlFor="openNow">Open Now</label>
            </li>
          </ul>

          <h2 className="section">Distance</h2>
          <div className="distance-slider">
            <label className="label-text">Max: {maxDistance} miles</label>
            <input
              type="range"
              min="1"
              max="50"
              value={maxDistance}
              onChange={handleMaxDistanceChange}
            />
          </div>

          <h2 className="section">Rating</h2>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'selected' : ''}`}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className="search-results">
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="go-button">Go</button>
          </div>
          <RestaurantCard
            {...{
              restaurantName: 'Aladdins',
              cuisine: 'Medditerannean',
              totalRatings: 123,
              distance: '2 miles',
              price: '$',
              rating: '4.2',
              isOpen: true
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;




