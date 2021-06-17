// import react (optional in new ver of react 16+)
import React, { useState, useEffect } from 'react';
// make a function

const Card = function(props) {
    // make sure the function returns JSX/HTML
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        console.log('rendered each time!');
    })

    useEffect(() => {
        console.log('rendered once');
    }, [])

    useEffect(() => {
        console.log('rendered once');
    }, [likes])



    const  onLikeClick = () => {
        setLikes(prev => prev + 1)
    }

    return (
        <div>
            <h1>{props.name}</h1>
            <h3>
                Likes {likes}
                <button 
                    onClick={onLikeClick}
                >
                    +1
                </button>
            </h3>
            <h3>
                Dislikes {dislikes}
                <button 
                    onClick={() => setDislikes(prev => prev + 1)}
                >
                    +1
                </button>
            </h3>
        </div>
    )
}
// export default function
export default Card;