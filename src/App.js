import React, {Component} from 'react';

import './App.css';
import MenuTop from './components/MenuTop';


import {BrowserRouter as Router ,Route , Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">  
      <MenuTop/>
      
    </div>
    
    </Router>
  );
}

export default App;
