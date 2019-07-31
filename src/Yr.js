import React from 'react';
import logo from './logo.svg';
import './App.css';
import Yr from 'Script1.js';


function Yr() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <embed>{{Yr}}</embed>
      </header>
    </div>
  );
}

export default Yr;
