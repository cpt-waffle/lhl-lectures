import React, {useState, useEffect} from 'react' // newest ver of react doesn't require this!
import './card.css'

const Card = (props) => {

    const [likes, setLikes] = useState(2);
    const [dislikes, setDislikes] = useState(4);

    const onLikesClick = () => {
        // a = likes + 1
        setLikes(likes + 1);
        // 
    }

    useEffect(() => {
        console.log("render!!");
    })

    useEffect(() => {
        console.log("render once!");
        setTimeout(() => {
            console.log("LIKES AT THIS POINT IN TIME");
            console.log(likes);
        }, 5000)
    }, [])

    useEffect(() => {
        console.log("likes changed!");
        setTimeout(() => {
            console.log("likes ");
            console.log(likes);
        }, 2000)
    }, [likes])


    const num = 33;
    return (
        <div className="card">
            <h1>Hello World! From Card.js {num}</h1>
            <img className="img" src={props.img}/>
            <h3>Name: {props.name}</h3>
            <button onClick={onLikesClick}>Likes {likes}</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dislikes {dislikes}</button>
        </div>
    )
}


export default Card;