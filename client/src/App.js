import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CRUD STUFF</h1>
          <input type='text' name='Movie'/>
          <input type='text' name='Review'/>
          <button>SUBMIT</button>
      </div>
    );
  }
}

export default App;
