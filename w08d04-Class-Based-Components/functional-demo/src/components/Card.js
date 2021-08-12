// step 1 import React from react
import React, { useState, useEffect } from 'react'
import './Card.css'


// step 2 make a function

const Card = function(props) {
    // likes is a variable (state)
    // setLikes is a function that changes that variable
    // and tells the entire component to re-render
    const [likes, setLikes] = useState(3);
    const [dislikes, setDislikes] = useState(5);
    // step 3 returns some JS
    useEffect(() => {
        // if anything ever re-renders 
        // this effect runs
        console.log("Always Render!");
    })

    useEffect(() => {
        // dependancy array ( no dependencies)
        // one time render, and never again 
        //because no dependancies
        console.log("Render once and never ever again!");
        setTimeout(() => {
            console.log(likes);
        }, 5000)

    }, [])

    useEffect(() => {
        // depedancy array (with 1 or more dependancy)
        // when the variable in the array changes
        // this use effect runs
        console.log("Dislike state has changed!!");

    }, [dislikes])




    return (
        <div className="card">
            <img className="img" src={props.image}/>
            <h1>{props.name}</h1>
            <button onClick={() => setLikes(prev => prev + 1)}>Likes    {likes}</button>
            <button onClick={() => setDislikes(prev => prev + 1)} >DisLikes {dislikes}</button>
        </div>
    )
}

// step 4 export default

export default Card;