import React, { lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyComponent from './Components/LazyComponent';

const Artist = lazy(() => import('./Components/Artist'));

function App() {
  return (
    <div className="App">
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

      {LazyComponent(Artist)}
    </div>
  );
}

export default App;
