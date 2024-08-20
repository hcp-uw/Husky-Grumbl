import React from 'react';
import RestaurantCard from './RestaurantCard';

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>This is the Contact Us page.</p>
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
      {/* Add your contact form or any other content here */}
    </div>
  );
}

export default ContactUs;