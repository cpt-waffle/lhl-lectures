// Step #1: import React from react
import React, { useState } from 'react';
import './meme.css'

const defaultImg = "https://s3.scoopwhoop.com/anj/ramsayy/786144611.jpg";
const defaultHeading = "This is our default meme";
const bool = true;
// $('.meme').on('click', (evt) => {

//})
const title=undefined;

//Step 2 make a function (with the same name as the file)
function Meme(props) {
    // first var is your state (aka a var that changes and notified change to react)
    // second var is the function that changes the variable
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    // let likes = 0;
    // const setLikes = number => {
    //    likes = number;
        // ... notify react to re-render
    //}



    const addLike = () => {
        setLike(like+1);
        console.log("LIKE +1", like);
    }

    const addDisLike = () => {
        setDislike(dislike+1);
        console.log("Dislike +1", dislike);
    }

    const memeClick = () => {
       console.log("clicked!!")
    }

    console.log(props.img);
    const desc = <p>this is our description of a default meme</p>;

    // Step 4: Function needs a return with JSX in it!
    return (
        <div className="meme">

            {props.title ? props.title : defaultHeading}

            {/* {title === 'h1' && <h1>{defaultHeading}</h1>}
            {title === 'h2' && <h2>{defaultHeading}</h2>}
            {title === undefined && <h3>{defaultHeading}</h3>} */}




            {/* { bool && <h1>HELLO WORLD</h1>} */}
            {/* { bool ? null : <h2>bool was false</h2>} */}
            {desc}
            {/* ALWAYS pass functions by REFERENCE into event listeners ( DO NOT CALL THEM THERE!!! ) */}
            <img src={props.img ? props.img : defaultImg} onClick={memeClick}/>
            <div>
                <button onClick={addLike}>Likes {like}</button>
                <button onClick={addDisLike}>DisLikes {dislike}</button>
            </div>
        </div>
    );
}


// Step 3: export default (<-- Very important)
export default Meme;