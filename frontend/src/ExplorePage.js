import React, { useState } from 'react';
import './ExplorePage.css';

const ExplorePage = () => {
  const [priceLevel, setPriceLevel] = useState(1);

  const handlePriceChange = (event) => {
    setPriceLevel(event.target.value);
  };

  const getPriceSymbol = () => {
    return '$'.repeat(priceLevel);
  };

  return (
    <div className="explore-page">
      <div className="explore-content">
        <div className="sidebar">
          <h3>Cuisine Preferences</h3>
          <ul>
            <li>
              <input type="checkbox" id="thai" name="thai" className="checkbox" />
              <label htmlFor="thai">Thai</label>
            </li>
            <li>
              <input type="checkbox" id="japanese" name="japanese" className="checkbox" />
              <label htmlFor="japanese">Japanese</label>
            </li>
            <li>
              <input type="checkbox" id="mexican" name="mexican" className="checkbox" />
              <label htmlFor="mexican">Mexican</label>
            </li>
            <li>
              <input type="checkbox" id="indian" name="indian" className="checkbox" />
              <label htmlFor="indian">Indian</label>
            </li>
            <li>
              <input type="checkbox" id="korean" name="korean" className="checkbox" />
              <label htmlFor="korean">Korean</label>
            </li>
            <li>
              <input type="checkbox" id="italian" name="italian" className="checkbox" />
              <label htmlFor="italian">Italian</label>
            </li>
            <li>
              <input type="checkbox" id="vietnamese" name="vietnamese" className="checkbox" />
              <label htmlFor="vietnamese">Vietnamese</label>
            </li>
            <li>
              <input type="checkbox" id="mediterranean" name="mediterranean" className="checkbox" />
              <label htmlFor="mediterranean">Mediterranean</label>
            </li>
            <li>
              <input type="checkbox" id="chinese" name="chinese" className="checkbox" />
              <label htmlFor="chinese">Chinese</label>
            </li>
            <li>
              <input type="checkbox" id="other" name="other" className="checkbox" />
              <label htmlFor="other">Other</label>
            </li>
          </ul>

          <h3>Price {getPriceSymbol()}</h3>
          <div className="price-slider">
            <span>$</span>
            <input 
              type="range" 
              min="1" 
              max="4" 
              step="1" 
              value={priceLevel} 
              onChange={handlePriceChange} 
            />
            <span>$$$$</span>
          </div>

          <h3>Dietary Restrictions</h3>
          <ul>
            <li>
              <input type="checkbox" id="vegetarian" name="vegetarian" className="checkbox" />
              <label htmlFor="vegetarian">Vegetarian</label>
            </li>
            <li>
              <input type="checkbox" id="vegan" name="vegan" className="checkbox" />
              <label htmlFor="vegan">Vegan</label>
            </li>
            <li>
              <input type="checkbox" id="halal" name="halal" className="checkbox" />
              <label htmlFor="halal">Halal</label>
            </li>
            <li>
              <input type="checkbox" id="kosher" name="kosher" className="checkbox" />
              <label htmlFor="kosher">Kosher</label>
            </li>
            <li>
              <input type="checkbox" id="glutenFree" name="glutenFree" className="checkbox" />
              <label htmlFor="glutenFree">Gluten-Free</label>
            </li>
          </ul>

          <h3>Distance</h3>
          <input type="range" min="1" max="10" step="1" />
        </div>
        
        <div className="search-results">
          <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="go-button">Go</button>
          </div>
          {/* Search results will be displayed here */}
        </div>
      </div>
    </div>
  );
}

export default ExplorePage;
