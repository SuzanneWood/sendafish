import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WHO DO YOU WANT TO SEND A FISH</h1>
        </header>
        <p className="App-intro">
          WHO DO YOU WANT TO SEND A FISH <input></input><button>SEND THE FISH</button>

        </p>
        (to whom would you like a fish to swim)
      </div>
    );
  }
}

export default App;
