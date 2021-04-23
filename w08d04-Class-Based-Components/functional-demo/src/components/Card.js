import React, { useState, useEffect } from 'react'; // optional for newer ver of react
import './card.css'

export default function Card(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        console.log("rendered!");
    })

    useEffect(() => {
        console.log("rendered once!")
    }, [])

    useEffect(() => {
        console.log('rendered on likes!');
    }, [likes])


    const onLikeClick = () => {
        setLikes(likes + 1);
    }

    const onDislikeClick = () => {
        setDislikes(dislikes + 1);
    }


    return (
        <div>
            <img className="img" src="https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg"/>
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <button onClick={onLikeClick}>Likes {likes}</button>
            <button onClick={onDislikeClick}>Dislikes {dislikes}</button>
        </div> 
    )
}