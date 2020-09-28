// Step 1: make a file that is capitalized.
// Step 2: import React from 'react';
import React, { useState } from 'react';
// to add css, just need to import it ( alittle different import than usual )

import './meme.css'

const whatIsApple = (apple) => {
    let x;
    if (apple === 1)
        x = 'apple was 1'
    else if (apple === 11)
        x = 'apple was 11'
    else
        x = 'apple was something else'

    return x;
}


// Step 3: make a function that will be called as your file (convention for now)

// Rules of React:  Your return must return a SINGLE PARENT (box)

function Meme(props) {
    console.log(props.memeURL);
    //Step 5: make sure the function returns a correct HTML/JSX rendering.

    // <%=  %>
    const defaultTitle = 'No meme found';
    const defaultURL = 'https://i.pinimg.com/236x/65/5d/65/655d65cd95ddd4e408f2bf9bd6d25dd3.jpg';

    // like = 0;
    const [like, addLike] = useState(0);
    //    ^ useState function returns 2 values at the same time. Value 1 is your variable(state) Value 2 is a function that 
    // Changes that variable (Alters state and notifies react to re-render)

    const handleLikeClick = () => {
        addLike(like + 1);
        // ^    likes = ????  + TELL REACT TO RE-RENDER

        // $('h2').val()
        console.log(like);
    }

    // CONDITIONAL RENDERING
    //________ ?  _________ : ________
    // condition   if true     if false

    // ______ && _______

    // if true   do this
    // if false  nothing happens
    return (
        <div className='meme'>
            <h3>{props.title ? props.title : defaultTitle }</h3>
            <img src={props.memeURL === undefined ?  defaultURL : props.memeURL }/>
            { props.memeURL &&
                <div>
                    <h2>{like}</h2>
                    <button onClick={handleLikeClick}>Like +1</button> 
                </div>
            }
        </div>
    )

}

// $('button').on('click', (evt) => { evt.preventDefault(); // ... })


// Step 4: export default the function
export default Meme;