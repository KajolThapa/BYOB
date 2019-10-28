import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Person name="Momo" age="4"> Hobbies: Playing with laser </Person>
      <Person name="Mila" age="1" />
      </div>
    );
  }
}

export default App;
