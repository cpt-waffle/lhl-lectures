import React, { useState, useEffect } from 'react';
import './card.css'







const Card = function(props) {
    // When is it a good time combine state?
    const [likes, setLikes] = useState(25);
    const [dislikes, setDislikes] = useState(3);
    const {img,name,title} = props;
    
    const onLikesClick = () => {
        setLikes(prev => prev + 1);
    }

    // useEffect(() => {
    //     Promise.all([axios.get('/'),]).then((data) =>{
    //         setState(prev => ({...prev, a: data[0]}))
    //     })
    // },[state]) 

    useEffect(() => {
        console.log("Render EveryTime Anything Changes!!!");
        setTimeout(() => {
            console.log('likes ==>', likes);
        }, 5000)
    }, [likes])

    useEffect(() => {
        console.log("Render Only once Because 0 dependancies in that array")
    }, [])

    useEffect(() => {
        console.log("Likes changed, and re-render happened!");
    }, [likes])

    // 
    return (
        <>
            <img className="cat--img" src={img} alt='cat-pic'/>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <button
                onClick={onLikesClick}>
                <h3>Likes    {likes}
                </h3>
            </button>
            <button
                onClick={() => setDislikes(prev => prev + 1)}>
                <h3>Dislikes {dislikes}</h3>
            </button>

        </>
    )
}





export default Card;