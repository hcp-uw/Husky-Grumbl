import './App.css' // import css file
import { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar';
import ContactUs from './ContactUs'; 
import HomePage from './HomePage'; 
import ExplorePage from './ExplorePage'; 

function realApiCall(name) {
  return axios.get(`http://localhost:8000/greeting/${name}`)
}

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/explore-page" element={<ExplorePage />} />
          <Route path="/contact-us" element={<ContactUs />}>
          
            {/* <ContactUs /> */}
          </Route>
          {/* Define other routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App
