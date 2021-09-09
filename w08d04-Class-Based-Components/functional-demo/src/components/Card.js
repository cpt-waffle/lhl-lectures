import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = function(props) {
    const [likes, setLikes] = useState(11);
    const [dislikes, setDislikes] = useState(5);

    const handleLikesClick = () => {
        setLikes(prev => prev + 1);
    }

    useEffect(() => {
        console.log("Render EVERY SINGLE TIME!!");

    })

    useEffect(() => {
        console.log("Render once!");
        setTimeout(() => {
            console.log("THIS IS STATE ------------");
            console.log("likes: ", likes);
            console.log("dislikes:", dislikes);
        }, 4000)
    }, [])

    useEffect(() => {
        console.log('Render on likes')
    }, [likes]);



    return (
        <div>
            <img className="img" src={props.image}/>
            <h1>{props.name}</h1>
            <button onClick={handleLikesClick}>
                Likes {likes}
            </button>
            <button 
            onClick={() => setDislikes(prev => prev + 1)}>
                Dislikes {dislikes}
            </button>
        </div>
    )
}








export default Card;