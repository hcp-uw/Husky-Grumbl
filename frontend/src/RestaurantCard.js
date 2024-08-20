import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurantName, cuisine, distance, price, rating, isOpen, totalRatings }) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-header">
        <h2 className="restaurant-name">{restaurantName}</h2>
        <span className={`status ${isOpen ? 'open' : 'closed'}`}>
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      </div>
      <hr className="divider" />
      <div className="restaurant-details">
        <div>Rating: {rating}</div>
        <div>Total Ratings: {totalRatings}</div>
        <div>Price: {price}</div>
        <div>Cuisine: {cuisine}</div>
        <div>Distance: {distance} miles</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
