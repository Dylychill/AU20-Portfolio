import React from 'react';
import './App.css';
import Navbar from './navbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar barColor="green" tabs={["Home", "Contact", "About"]}
        style={{position:"absolute"}}
        />
      </header>

    </div>
  );
}

export default App;
