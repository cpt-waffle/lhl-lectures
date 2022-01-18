import React, { useState } from 'react';
import './profile.css';
import Navbar from './Navbar';
// STATE 
// is a unique variable, that just stores information
// but WHEN IT CHANGES (SPECIFIC WAY OF CHANGING IT) the component
// will re-render...

// Once the component renders, the variables that were intially set
// are set..... thats all.
// we need make Profile RE-RENDER so it knows a variable has changed!
const Profile = function(props) {

    // useState returns back an array
    // first element of the array is the "special" variable
    // second elemnt is the function to "Change" the variable "AND" tell react to re-render
    const [number, setNumber] = useState(1);

    const clickedFunction = () => {
        console.log("CLICKED!!");
        // number = number + 1;
        setNumber(number + 1);
    }


    return (
        <div className='card'>
            <Navbar title="TEST"/>
            <img className="card--img" src={props.img}/>
            <h1 className="card--name">{props.name}</h1>
            <h3 className="card--title">{props.title}</h3>
            <button onClick={clickedFunction}>Like</button><h4>{number}</h4>
        </div>
    )
}

export default Profile;