import React, { useState } from 'react';


const Card = function(props) {

    // EVENT listeners in HTML
    // on.click
    // on.dobleClick
    // on.hover
    // on.submit
    // on.change

    // $(document).on('ready', () => {
    //     $('#likes-btn').on('click', () => {
    //         //..
    //     })
    // })
    ////////////////////////// DECLARE STATE
    const [number, setNumber] = useState(3); // useState gives you 2 values (arr)
    // first val = the variable where your value is in
    // second val = is THE ONLY WAY to change/alter that variable AND tell react 
    // to re-render
    console.log();
    // when react renders, all the variables are declared..
    //  and thouse VALUES are embedded onto your DOM
    // for the changes to be shown VISUALLY, react needs to RE-RENDER

    const clicked = () => {
        console.log("HELLO WORL!!!");
        setNumber(number + 1)
    }

    return (
    <div className="card">
        <img className="card--img" src="https://i.redd.it/7k24xova0ya11.jpg"/>
        <h1 className="card--name">{props.name}</h1>
        <h3 className="card--title">{props.title}</h3>
        <button onClick={clicked}>Like</button><h4 id="likes-count">{number}</h4>
    </div>
    )
}

export default Card;