import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <Router>
      <div>

      <Weather />

      </div>

      </Router>
    );
  }
}

export default App;
