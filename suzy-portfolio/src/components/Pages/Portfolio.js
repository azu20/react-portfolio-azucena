import React from 'react';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';


const Portfolio = () => {
    return (
      <div className="Portfolio">
      <div>
      <Navbar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  };
  
  export default Portfolio;