// Rule # 1 IMPORT REACT FROM REACT
import React from 'react';
import './card.css'

// Rule # 2 Make a function, and make sure its Capitalized (and the name of the file matches the function name)
const suits = {
    clubs: '♣',
    diamonds: '♦',
    hearts: '♥',
    spades: '♠',
}

// Card(suit, number, deckColor)
function Card(props) {
    console.log(props);
    let color = '';
    if (props.suit === 'hearts' || props.suit === 'diamonds')
        color = 'red';

    // Rule # 4 - Component MUST return some sort of html to be rendered on the screen!
    // comparing to class based components -- return replaces render()
    return (
        <div className={'card' + ' ' + color}>
            <h2>
                {props.number ? props.number : 2}
                {props.suit ? suits[props.suit] : suits.spades}
            </h2>
            <h1 className="symbol">
                {props.suit ? suits[props.suit] : suits.spades}
            </h1>
            <h2 className="right">
                {props.number ? props.number : 2}
                {props.suit ? suits[props.suit] : suits.spades}
            </h2>

            {props.showTitle && <h5>{props.number} of {suits[props.suit]}</h5>}
        </div>
    );

}

// Rule # 3 - Export Default FUNCTION

export default Card;