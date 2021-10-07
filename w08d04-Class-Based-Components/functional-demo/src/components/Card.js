// 1 
import React, { useState, useEffect } from 'react'; 
import './card.css'
// 2
const Card = function(props) {
    const {img, name} = props;
    const [likes, setLikes] = useState(10);
    const [dislikes, setDislikes] = useState(2);
    // 4 

    const handleLikeClick = function() {
        // prev ---> batching
        // whenever you replace a state  setState(var)
        // whenever you are ALTERING a state, use prev
        setLikes(prev => prev + 1); 
    }
    // useEffect vs LifeCycle
    useEffect(() => {
        // console.log("render FOREVER!");
    })
    // dependancy array
    // -- if something changes in this array,
    // this useEffect will run

    useEffect(() => {
        // console.log("likes has changed!");
    }, [likes])

    useEffect(() => {
        // console.log("One time!");
        setTimeout(() => {
            console.log(likes);
            console.log(dislikes);
        },4000)
    }, []);

    return (
        <div>
            <img 
                className="cat--img"
                alt="catface" 
                src={img}
            />
            <h2>{name}</h2>
            {props.children}
            <button 
                onClick={handleLikeClick}>
                Likes {likes}
            </button>
            <button 
                onClick={() => setDislikes(prev => prev + 1)}>
                Dislikes {dislikes}
            </button>

        </div>
    )
}

// 3
export default Card;