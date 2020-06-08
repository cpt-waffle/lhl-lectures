// Rule number 1
// import React from 'react';
import React from 'react';
import './card.css'
const suits = {
    clubs: '♣',
    diamonds: '♦',
    hearts: '♥',
    spades: '♠',
}

// Rule Number 2
// make a function, Capitalized (with the same name as your file)
function Card(props) {
    console.log(props);
    // Rule number 4 ( not hard rule )
    // Component must return some sort of JSX

    //PITFALL must return one parent (WRAP IT ALL OF IT)
    // <%= urls.shortURL
    let greetings = 'hello world';

    // boolean && value ==> if boolean is true, value wil be returned otherwise nothing will be returned
    // boolean ? if true  : if false ===> if boolean is true, do if true, if false, do if false 
    return (
        <div className={'card' + ' ' + (props.color && 'red')}>
            <h2>{props.number ? props.number : 'A'}</h2>
            <h1 className="symbol">{props.suit ? suits[props.suit] : suits.spades}</h1>
            <h2 className="right">{props.number ? props.number : 'A'}</h2>
        </div>
    )
}





// Rule Number 3
// EXPORT DEFAULT function you have made

export default Card;