
import React, {useEffect, useState} from 'react';
import './card.css';









const Card = (props) => {
    const {img, title} = props;
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    const onLikeClick = () => {
        setLikes(prev => prev + 1);
    }

    useEffect(() => {
        // debugger;
        // scheduler EMPTY
        // scheduler populated
        console.log("one time!");
    }, [])

    useEffect(() => {
        console.log("something changed!");
    })


    return (
        <div>
            <img 
                className="card--img"
                src={img}
            />
            <h1>{title}</h1>
            <button onClick={onLikeClick}>
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