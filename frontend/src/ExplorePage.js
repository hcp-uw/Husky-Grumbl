// import React, { useState } from 'react';
// import './ExplorePage.css';

// const ExplorePage = () => {
//   const [priceLevel, setPriceLevel] = useState(1);

//   const handlePriceChange = (event) => {
//     setPriceLevel(event.target.value);
//   };

//   const getPriceSymbol = () => {
//     return '$'.repeat(priceLevel);
//   };

//   return (
//     <div className="explore-page">
//       <div className="explore-content">
//         <div className="sidebar">
//           <h3>Cuisine Preferences</h3>
//           <ul>
//             <li>
//               <input type="checkbox" id="thai" name="thai" className="checkbox" />
//               <label htmlFor="thai">Thai</label>
//             </li>
//             <li>
//               <input type="checkbox" id="japanese" name="japanese" className="checkbox" />
//               <label htmlFor="japanese">Japanese</label>
//             </li>
//             <li>
//               <input type="checkbox" id="mexican" name="mexican" className="checkbox" />
//               <label htmlFor="mexican">Mexican</label>
//             </li>
//             <li>
//               <input type="checkbox" id="indian" name="indian" className="checkbox" />
//               <label htmlFor="indian">Indian</label>
//             </li>
//             <li>
//               <input type="checkbox" id="korean" name="korean" className="checkbox" />
//               <label htmlFor="korean">Korean</label>
//             </li>
//             <li>
//               <input type="checkbox" id="italian" name="italian" className="checkbox" />
//               <label htmlFor="italian">Italian</label>
//             </li>
//             <li>
//               <input type="checkbox" id="vietnamese" name="vietnamese" className="checkbox" />
//               <label htmlFor="vietnamese">Vietnamese</label>
//             </li>
//             <li>
//               <input type="checkbox" id="mediterranean" name="mediterranean" className="checkbox" />
//               <label htmlFor="mediterranean">Mediterranean</label>
//             </li>
//             <li>
//               <input type="checkbox" id="chinese" name="chinese" className="checkbox" />
//               <label htmlFor="chinese">Chinese</label>
//             </li>
//             <li>
//               <input type="checkbox" id="other" name="other" className="checkbox" />
//               <label htmlFor="other">Other</label>
//             </li>
//           </ul>

//           <h3>Price {getPriceSymbol()}</h3>
//           <div className="price-slider">
//             <span>$</span>
//             <input 
//               type="range" 
//               min="1" 
//               max="4" 
//               step="1" 
//               value={priceLevel} 
//               onChange={handlePriceChange} 
//             />
//             <span>$$$$</span>
//           </div>

//           <h3>Dietary Restrictions</h3>
//           <ul>
//             <li>
//               <input type="checkbox" id="vegetarian" name="vegetarian" className="checkbox" />
//               <label htmlFor="vegetarian">Vegetarian</label>
//             </li>
//             <li>
//               <input type="checkbox" id="vegan" name="vegan" className="checkbox" />
//               <label htmlFor="vegan">Vegan</label>
//             </li>
//             <li>
//               <input type="checkbox" id="halal" name="halal" className="checkbox" />
//               <label htmlFor="halal">Halal</label>
//             </li>
//             <li>
//               <input type="checkbox" id="kosher" name="kosher" className="checkbox" />
//               <label htmlFor="kosher">Kosher</label>
//             </li>
//             <li>
//               <input type="checkbox" id="glutenFree" name="glutenFree" className="checkbox" />
//               <label htmlFor="glutenFree">Gluten-Free</label>
//             </li>
//           </ul>

//           <h3>Distance</h3>
//           <input type="range" min="1" max="10" step="1" />
//         </div>
        
//         <div className="search-results">
//           <div className="search-bar-container">
//             <input type="text" placeholder="Search" className="search-bar" />
//             <button className="go-button">Go</button>
//           </div>
//           {/* Search results will be displayed here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ExplorePage;



// import React, { useState } from 'react';
// import './ExplorePage.css';

// const ExplorePage = () => {
//   const [priceLevel, setPriceLevel] = useState(1);

//   const handlePriceChange = (event) => {
//     setPriceLevel(event.target.value);
//   };

//   return (
//     <div className="explore-page">
//       <div className="explore-header">
//         <h1>Explore the Best Spots, Curated for <span className="highlighted-text">you</span></h1>
//       </div>

//       <div className="explore-content">
//         <div className="sidebar">
//           <h3>Cuisine Preferences</h3>
//           <ul>
//             <li><input type="radio" id="thai" name="cuisine" /><label htmlFor="thai">Thai</label></li>
//             <li><input type="radio" id="japanese" name="cuisine" /><label htmlFor="japanese">Japanese</label></li>
//             <li><input type="radio" id="mexican" name="cuisine" /><label htmlFor="mexican">Mexican</label></li>
//             <li><input type="radio" id="korean" name="cuisine" /><label htmlFor="korean">Korean</label></li>
//             <li><input type="radio" id="indian" name="cuisine" /><label htmlFor="indian">Indian</label></li>
//             <li><input type="radio" id="italian" name="cuisine" /><label htmlFor="italian">Italian</label></li>
//             <li><input type="radio" id="vietnamese" name="cuisine" /><label htmlFor="vietnamese">Vietnamese</label></li>
//             <li><input type="radio" id="mediterranean" name="cuisine" /><label htmlFor="mediterranean">Mediterranean</label></li>
//           </ul>

//           <h3>Price</h3>
//           <div className="price-slider">
//             <span>$</span>
//             <input 
//               type="range" 
//               min="1" 
//               max="4" 
//               step="1" 
//               value={priceLevel} 
//               onChange={handlePriceChange} 
//             />
//             <span>$$$$</span>
//           </div>

//           <h3>Dietary Restrictions</h3>
//           <ul>
//             <li><input type="radio" id="vegetarian" name="diet" /><label htmlFor="vegetarian">Vegetarian</label></li>
//             <li><input type="radio" id="vegan" name="diet" /><label htmlFor="vegan">Vegan</label></li>
//             <li><input type="radio" id="halal" name="diet" /><label htmlFor="halal">Halal</label></li>
//             <li><input type="radio" id="kosher" name="diet" /><label htmlFor="kosher">Kosher</label></li>
//             <li><input type="radio" id="glutenFree" name="diet" /><label htmlFor="glutenFree">Gluten-Free</label></li>
//           </ul>

//           <button className="search-button">SEARCH</button>
//         </div>

//         <div className="search-results">
//           {/* Search results will be displayed here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExplorePage;



import React, { useState } from 'react';
import './ExplorePage.css';

const ExplorePage = () => {
  const [priceLevel, setPriceLevel] = useState(1);
  // const [minDistance, setMinDistance] = useState(1);
  const [maxDistance, setMaxDistance] = useState(10);

  const handlePriceChange = (event) => {
    setPriceLevel(event.target.value);
  };

  // const handleMinDistanceChange = (event) => {
  //   setMinDistance(event.target.value);
  // };

  const handleMaxDistanceChange = (event) => {
    setMaxDistance(event.target.value);
  };

  const getPriceSymbol = () => {
    return '$'.repeat(priceLevel);
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
          <h2 className="section">Cuisine Preferences</h2>
          <ul>
            <li>
              <input type="checkbox" id="thai" name="thai" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="thai">Thai</label>
            </li>
            <li>
              <input type="checkbox" id="japanese" name="japanese" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="japanese">Japanese</label>
            </li>
            <li>
              <input type="checkbox" id="mexican" name="mexican" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="mexican">Mexican</label>
            </li>
            <li>
              <input type="checkbox" id="indian" name="indian" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="indian">Indian</label>
            </li>
            <li>
              <input type="checkbox" id="korean" name="korean" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="korean">Korean</label>
            </li>
            <li>
              <input type="checkbox" id="italian" name="italian" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="italian">Italian</label>
            </li>
            <li>
              <input type="checkbox" id="vietnamese" name="vietnamese" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="vietnamese">Vietnamese</label>
            </li>
            <li>
              <input type="checkbox" id="mediterranean" name="mediterranean" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="mediterranean">Mediterranean</label>
            </li>
            <li>
              <input type="checkbox" id="chinese" name="chinese" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="chinese">Chinese</label>
            </li>
            <li>
              <input type="checkbox" id="other" name="other" className="checkbox" style={{display: "none"}}/>
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
              <input type="checkbox" id="vegetarian" name="vegetarian" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="vegetarian">Vegetarian</label>
            </li>
            <li>
              <input type="checkbox" id="vegan" name="vegan" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="vegan">Vegan</label>
            </li>
            <li>
              <input type="checkbox" id="halal" name="halal" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="halal">Halal</label>
            </li>
            <li>
              <input type="checkbox" id="kosher" name="kosher" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="kosher">Kosher</label>
            </li>
            <li>
              <input type="checkbox" id="glutenFree" name="glutenFree" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="glutenFree">Gluten-Free</label>
            </li>
          </ul>

          <h2 className="section">Availability Status</h2>
          <ul>
            <li>
              <input type="checkbox" id="openNow" name="openNow" className="checkbox" style={{display: "none"}}/>
              <label className="label-text" htmlFor="openNow">Open Now</label>
            </li>
          </ul>

          <h2 className="section">Distance</h2>
          <div className="distance-slider">
            {/* <label>Min: {minDistance} miles</label>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={minDistance} 
              onChange={handleMinDistanceChange} 
            /> */}
            <label className="label-text">Max: {maxDistance} miles</label>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={maxDistance} 
              onChange={handleMaxDistanceChange} 
            />
          </div>
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




