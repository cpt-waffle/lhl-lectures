import React, { useState, useEffect } from 'react';


function Meme(props) {
    // console.log('the props are:', props)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        console.log("rendered once!")
        return function cleanup() {

        }  
    }, [])

    useEffect(() => {
     console.log("rendered!")   
    })

    useEffect(() => {
        console.log("likes has changed!")   
    }, [likes])

    return (
        <div>
            <img src={props.meme}/>
            <button 
                onClick = {() => setLikes(likes + 1)}
            >
                Likes{likes}
            </button>
            <button 
                onClick = {() => setDislikes(dislikes + 1)}
            >
                Dislikes{dislikes}
            </button>
        </div>
    )
}

export default Meme;