import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Momo", age: 4},
      {name: "Mila", age: 1},
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name : "Momo Hauke", age: 5},
        {name: "Mila", age: 2},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1></h1>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Hobbies: Playing with laser </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
