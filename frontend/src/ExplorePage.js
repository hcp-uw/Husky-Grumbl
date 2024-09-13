import React, { useState } from 'react';
import './ExplorePage.css';
import RestaurantCard from './RestaurantCard';
import axios from 'axios'; // Make sure to import axios

const ExplorePage = () => {
  const latitude = "47.6062"; // hardcoded value
  const longitude = "-122.3321"; // hardcoded value

   // State for cuisine preferences and dietary restrictions, which will combine into a single keywords string
   const [cuisinePreferences, setCuisinePreferences] = useState({
    thai: false,
    japanese: false,
    mexican: false,
    indian: false,
    korean: false,
    italian: false,
    vietnamese: false,
    mediterranean: false,
    chinese: false,
    other: false,
  });

  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    vegetarian: false,
    vegan: false,
    halal: false,
    kosher: false,
    glutenFree: false,
  });

  const [maxPrice, setMaxPrice] = useState(4);  // maxPrice by default set to $$$$
  const [minPrice, setMinPrice] = useState(0);      // minPrice by default set to $
  const [maxDistance, setMaxDistance] = useState(1); // distance slider in miles
  const [openNow, setOpenNow] = useState(true);      // Default to only open restaurants

  // Combine cuisine preferences and dietary restrictions into a keywords string
  const getKeywords = () => {
    const cuisineKeywords = Object.keys(cuisinePreferences)
      .filter((key) => cuisinePreferences[key])
      .map((key) => key);

    const dietaryKeywords = Object.keys(dietaryRestrictions)
      .filter((key) => dietaryRestrictions[key])
      .map((key) => key);

    // Combine cuisine and dietary restrictions into one string
    return [...cuisineKeywords, ...dietaryKeywords].join(",");
  };

  // Handle changes for cuisine preferences
  const handleCuisineChange = (event) => {
    const { name, checked } = event.target;
    setCuisinePreferences((prev) => ({ ...prev, [name]: checked }));
  };

  // Handle price level change
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Handle changes for dietary restrictions
  const handleDietaryChange = (event) => {
    const { name, checked } = event.target;
    setDietaryRestrictions((prev) => ({ ...prev, [name]: checked }));
  };

  // Handle distance slider change
  const handleMaxDistanceChange = (event) => {
    setMaxDistance(event.target.value);
  };

  // Handle open now checkbox change
  const handleOpenNowChange = (event) => {
    setOpenNow(event.target.checked);
  };

  const getPriceSymbol = () => {
    return '$'.repeat(maxPrice);
  };
  
  // State for recommendations
  const [recommendations, setRecommendations] = useState([]);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const keywords = getKeywords(); // Generate the combined keywords string
    console.log(latitude)
    console.log(longitude)
    console.log(keywords)
    console.log(minPrice)
    console.log(maxPrice)
    console.log(openNow)
    console.log(maxDistance)

    try {
      const { data } = await axios.get("/recommendations", {
        params: {
          latitude,
          longitude,
          keyword: keywords,
          minprice: minPrice,
          maxprice: maxPrice,
          opennow: openNow,
          radius: maxDistance,
        },
      });
      console.log("API response:", recommendations);
      //console.log("API response:", data);
      //setRecommendations(data); // Correctly set the recommendations state
    } catch (error) {
      console.error("Error fetching recommendations:", error);
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
          <form onSubmit={handleSubmit}>
            <h2 className="section">Cuisine Preferences</h2>
            <ul>
              <li>
                <input type="checkbox" id="thai" name="thai" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.thai} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="thai">Thai</label>
              </li>
              <li>
                <input type="checkbox" id="japanese" name="japanese" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.japanese} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="japanese">Japanese</label>
              </li>
              <li>
                <input type="checkbox" id="mexican" name="mexican" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.mexican} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="mexican">Mexican</label>
              </li>
              <li>
                <input type="checkbox" id="indian" name="indian" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.indian} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="indian">Indian</label>
              </li>
              <li>
                <input type="checkbox" id="korean" name="korean" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.korean} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="korean">Korean</label>
              </li>
              <li>
                <input type="checkbox" id="italian" name="italian" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.italian} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="italian">Italian</label>
              </li>
              <li>
                <input type="checkbox" id="vietnamese" name="vietnamese" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.vietnamese} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="vietnamese">Vietnamese</label>
              </li>
              <li>
                <input type="checkbox" id="mediterranean" name="mediterranean" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.mediterranean} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="mediterranean">Mediterranean</label>
              </li>
              <li>
                <input type="checkbox" id="chinese" name="chinese" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.chinese} onChange={handleCuisineChange} />
                <label className="label-text" htmlFor="chinese">Chinese</label>
              </li>
              <li>
                <input type="checkbox" id="other" name="other" className="checkbox" style={{ display: "none" }} checked={cuisinePreferences.other} onChange={handleCuisineChange}/>
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
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              <span className="label-text">$$$$</span>
            </div>

            <h2 className="section">Dietary Restrictions</h2>
            <ul>
              <li>
                <input type="checkbox" id="vegetarian" name="vegetarian" className="checkbox" style={{ display: "none" }} checked={dietaryRestrictions.vegetarian} onChange={handleDietaryChange} />
                <label className="label-text" htmlFor="vegetarian">Vegetarian</label>
              </li>
              <li>
                <input type="checkbox" id="vegan" name="vegan" className="checkbox" style={{ display: "none" }}  checked={dietaryRestrictions.vegan} onChange={handleDietaryChange} />
                <label className="label-text" htmlFor="vegan">Vegan</label>
              </li>
              <li>
                <input type="checkbox" id="halal" name="halal" className="checkbox" style={{ display: "none" }} checked={dietaryRestrictions.halal} onChange={handleDietaryChange}  />
                <label className="label-text" htmlFor="halal">Halal</label>
              </li>
              <li>
                <input type="checkbox" id="kosher" name="kosher" className="checkbox" style={{ display: "none" }} checked={dietaryRestrictions.kosher} onChange={handleDietaryChange}  />
                <label className="label-text" htmlFor="kosher">Kosher</label>
              </li>
              <li>
                <input type="checkbox" id="glutenFree" name="glutenFree" className="checkbox" style={{ display: "none" }} checked={dietaryRestrictions.glutenFree} onChange={handleDietaryChange}  />
                <label className="label-text" htmlFor="glutenFree">Gluten-Free</label>
              </li>
            </ul>

            <h2 className="section">Availability Status</h2>
            <ul>
              <li>
                <input type="checkbox" id="openNow" name="openNow" className="checkbox" style={{ display: "none" }} checked={openNow} onChange={handleOpenNowChange} />
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

            <button type="submit" className="submit-button">Go</button>
          </form>
        </div>

        <div className="search-results">
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="go-button">Go</button>
          </div>
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
    </div >
  );
}

export default ExplorePage;




