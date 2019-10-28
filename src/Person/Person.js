import React, { component } from 'react';

const person = (props) => {
    return (
     <React.Fragment>
         <p>I'm {props.name} and I'm {props.age} years old!</p>
         {/* <p>{props.children}</p> */}
     </React.Fragment>

    )
}

export default person;
