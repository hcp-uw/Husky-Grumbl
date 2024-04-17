import './App.css' // import css file
import { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import TopBar from './TopBar';
import ContactUs from './ContactUs'; 

function realApiCall(name) {
  return axios.get(`http://localhost:8000/greeting/${name}`)
}

// function App () {

//   return (
//     <div>
//       <TopBar />
//     </div>
//   )

// }

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Switch>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          {/* Define other routes if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App
