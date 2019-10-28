import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons: [
      {name: "Momo", age: 4},
      {name: "Mila", age: 1},
      ],
      otherState: "someother Value"
    };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name : newName, age: 5},
        {name: "Mila", age: 2},
      ],
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:event.target.value, age: 4},
        {name: 'Mila', age: 1},
      ]
    })
  }
  render () {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler('MoMo')}> Switch Name </button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}> Hobbies: Playing with laser </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this,'Mishka')}/>
      </div>
    );
    }
}

export default App;



