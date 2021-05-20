// import react
import React, { useState, useEffect } from 'react';
import './card.css'


// make a function which will my component
function Card(props) {
    const [obj, setObj] = useState({
        likes: 0,
        dislikes: 0
    });

    useEffect(() => {
        console.log("re-render!");
    })

    useEffect(() => {
        console.log("re-once!");
    }, [])

    useEffect(() => {
        console.log("likes clicked!!");
    }, [obj.likes])


    // make sure my component returns JSX
    const onLikeClick = () => {
        setObj(prev => ({...prev, likes: prev.likes + 1}));
    }
    const onDislikeClick = () => {
        setObj(prev => ({...prev, dislikes: prev.dislikes + 1}));
    }


    return (
        <div>
            <h1>{props.name}</h1>
            <img className="img" src="https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg"/>
            <h2>Likes Number {obj.likes}</h2>
            <button onClick={onLikeClick}>Click Me!</button>
            <h2>Disikes Number {obj.dislikes}</h2>
            <button onClick={onDislikeClick}>Click Me!</button>           
        </div>
    )
}


// export
export default Card;