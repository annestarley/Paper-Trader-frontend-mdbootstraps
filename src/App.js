import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarFeatures from './components/Navbar.js'
import InfoTab from './components/InfoTab.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <InfoTab />
      </div>
    );
  }
}

export default App;
