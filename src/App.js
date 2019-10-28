import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Momo", age: 4},
      {name: "Mila", age: 1},
    ],
  });
  const [otherState, setOtherState] = useState("some other value")
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name : "Momo Hauke", age: 5},
        {name: "Mila", age: 2},
      ],
    })
  }
    return (
      <div className="App">
        <h1></h1>
        <button onClick={switchNameHandler}> Switch Name </button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> Hobbies: Playing with laser </Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      </div>
    );
}

export default App;



