import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./components/Pages/Contact"; 
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";

function App() {
  return (
    
    <Router>
    <div>
      <Navbar />
      </div>
      <div>
       
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
    
  );
}

export default App;
