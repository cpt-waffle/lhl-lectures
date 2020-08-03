// rule 1 - import react
import React, {useState} from 'react';
import './Meme.css'

// rule 2  - make a function with name of component!
function Meme(props) {
    // STATE/////////////////
    // useState returns 2 variables, 1 is the name of state
    // 2nd is a function to change this state
    const [likes, setLikes] = useState(4);
    const [dislikes, setDislikes] = useState(4);

    // const number = 4;
    // function setNumber(n) {
    //  number = n;
    //   .... notify react that something has changed...
    //}


    ///////////////////////


    // not a hard rule 4 - Needs to return some some sort of JSX element (HTML-ish)
    const title = "default Meme";
    const defaultIMG = 'https://preview.redd.it/l4432phiuqe51.jpg?width=640&crop=smart&auto=webp&s=93d6b975f54608b3a394d53a868614f3767ea2e0';
    // $('#greetings').text(greetings);
    console.log(props.title);
    console.log(props.imgURL);

    function addOne() {
        setLikes(likes + 1);
    }

    function subtractOne() {
        setLikes(likes - 1);
    }
    function resetLikes() {
        setLikes(0);
    }

    return (
        <div className="meme">
            <h1>{props.title !== undefined ? props.title : title}</h1>
            <img style={{width: '400px'}} src={props.imgURL ? props.imgURL : defaultIMG}/>
            <div>
                <button onClick={addOne}>Likes</button>
                <button onClick={subtractOne}>DisLikes</button>
                <button onClick={resetLikes}>RESET</button>

                <h2>{likes}</h2>
            </div>
        </div>
    )
}



// rule 3 - export the component!!!
export default Meme;