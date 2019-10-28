import React from 'react';

const person = (props) => {
    return (
     <React.Fragment>
         <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} />
     </React.Fragment>

    )
}

export default person;
