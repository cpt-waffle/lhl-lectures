// Rule #1 in REACT: ALWAYS IMPORT React from "react";
import React, { useState } from 'react';
import './MemeItem.css';

//RULE #2: make sure you have a function that is Capitalized !!!!!!

export default function MemeItem(props) {
    console.log(props.title)

    // RETURNS 2 variables
    // var 1, your state 
    // var 2, the function to change your state
    // let num =;
    // function changeNum(n) { num = n }
    // TLDR this is what gets returned!!
    const [arr, changeArr] = useState([]);
    // RULE #3: Function MUST return some HTML (JSX)
    // RULE #5: ALWAYS wrap your JSX into 1 parent tag!!
    // <%= props.title %>
    // $('.counter').val('');
    // $('.input).on('click', () => ...

    function clickMe() {
        let temp = [...arr]; // carbon copy (ish)
        temp.push(<h2>Another One</h2>)
        changeArr(temp);
    }

    return (
        <div className={props.title ? "card" : 'err'}>

            <h4>{props.title ? props.title : 'MEME IS EMPTY!!!'}</h4>
            {props.url && <img className="meme-img" src={props.url}/>}
            <h1>{arr}</h1>
            <button onClick={clickMe}>CLICK ME</button>
        </div>
    )
}

// falsey values
// '', false, null, undefined, NaN, 0

// AND Truth Table
// T && T ==> true 
// T && F ==> false
// F && T ==> false
// F && F ==> false



// RULE #4: you MUST "export default" the function you just MADE
       