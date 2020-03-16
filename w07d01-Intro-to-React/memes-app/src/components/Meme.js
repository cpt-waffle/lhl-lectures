import React, { useState } from 'react';

// Rule 1 import react from react

let i = 0;


function Meme(props) {
    console.log("props", props);
    //Rule 2 make a function
    const memeName = 'The Kadasd';
    // first : is the name of the variabe (state)
    // second  : the method to change the variable's value 
    // num = 0;
    // num = props.likes;
    const [num, changeNum] = useState(props.likes);
    // useState takes in the default value of the variable


    function addNum() {

        let tempNum = num + 1;
        // num++;
        changeNum(tempNum);
    }

    function subtractNum() {
        let tempNum = num - 1;
        changeNum(tempNum);

    }


    // Rule 4 // FUNCTION HAS TO RETURN SOMETHING ( jsx )
    if (props.likes) {
        return (
            <div>
                <h4>{props.name}</h4>
                <img style={{width: '120px'}}src={props.pic}/>
                counter is {num}
                <button id="btn" onClick={addNum}>++i</button>
                <button id="btn" onClick={subtractNum}>--i</button>
            </div>
        )
    } else {
        return ( <h1>BAd MEME!</h1>)
    }
}



export default Meme;
// Rule 3 - export the function 



{/* <h2>{true && <h1>hi</h1>}</h2>
            <img style={{width: '120px'}}src="https://i.kym-cdn.com/entries/icons/mobile/000/016/030/carllll.jpg"/> */}