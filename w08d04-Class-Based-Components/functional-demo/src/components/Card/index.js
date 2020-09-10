import React, { useState, useEffect } from 'react';
import './card.css'

function Card(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    const handleLikeClick = () => {
        setLikes(prev => prev + 1);
    }

    const handleDisLikeClick = () => {
        setDislikes(prev => prev + 1);
    }

    useEffect( () => {
        console.log('rendered!!');
    })

    useEffect( () => {
        console.log('rendered ONCE!!!!!!!')
    }, [])

    useEffect( () => {
        console.log("dislikes CHANGED");
        console.log('re-rendering for dislikes!');
    }, [dislikes])

    return (
        <div>
            <img className='img' src="https://static.boredpanda.com/blog/wp-content/uploads/2014/04/funny-derpy-animals-33.jpg"/>
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <button onClick={handleLikeClick}>Likes {likes}</button>
            <button onClick={handleDisLikeClick}>DisLikes {dislikes}</button>

        </div>
    )
}

export default Card;