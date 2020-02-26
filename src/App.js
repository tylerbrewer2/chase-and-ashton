import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// React Router scroll helper
import ScrollToTop from './components/ScrollToTop';

import routes from './routes.js';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CTABar from './components/CTABar';

import './App.css';

const App = () => (
  <Router>
    <ScrollToTop>
      <div className="App">
        <CTABar>PLEASE RSVP BY 11/3</CTABar>
        <NavBar />
        {routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        <Footer />
      </div>
    </ScrollToTop>
  </Router>
)

export default App;
