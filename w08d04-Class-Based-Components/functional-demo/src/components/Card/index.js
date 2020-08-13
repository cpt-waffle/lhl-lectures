// import react
import React, { useState, useEffect } from 'react';
import './card.css';

const imgLink = 'https://i.pinimg.com/564x/a7/71/26/a77126ed93bff8d24aaa4aa44c77a9b8.jpg';

// create function which is going to return JSX Component
function Card(props) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDisLikes] = useState(0);

    useEffect(() => {
        console.log("Rendered!");
    })

    useEffect(() => {
        console.log("Rendered once!!!")
    }, []);


    useEffect(() => {
        console.log("likes has Changed");
    }, [likes])

    const onClickLikes = () => {
        setLikes(prev => prev+1);
    }

    const onClickDislikes = () => {
        setDisLikes(prev => prev+1);
    }

    return (<div className='card'>
        <img src={imgLink}/>
        <div>
            <h3>{props.name}</h3>
            <h5>{props.position}</h5>
        </div>
        <button onClick={onClickLikes}>Likes {likes}</button>
        <button onClick={onClickDislikes}>Dislikes {dislikes}</button>

    </div>)

}

// export function/component
export default Card;