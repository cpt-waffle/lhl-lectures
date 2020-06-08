import React, {useState} from 'react';
import Card from '../card/card';

function Hand(props) {

    // let a = [<h1>hello</h1>, <h1>hi</h1>]
    // let a = [<Card/>, <Card number={4} suit={'diamonds'} color={'red'}/>, <Card/>, <Card/>]
    // WHAT MAP ACTUALLY DOES
    // const arr = [];
    // for (let card of props.cards) {
    //     arr.push(<Card number={card.number} suit={card.suit} color={card.color}/>)
    // }
    // HOW MAP IS WRITTEN!
    // const arr = props.cards.map(card => <Card number={card.number} suit={card.suit} color={card.color}/>)
    // let number = 0;
    const [number, changeNum] = useState(0);

    const addUp = () => {
        changeNum(number + 1);
        // number = number + 1;
        // HEY REACT!! UMM QUICKLY RE-RENDER anything that has NUMBER in it
    }

    return (    
        <div>
            {props.cards.map((card, i) => <Card key={i} number={card.number} suit={card.suit} color={card.color}/>)}

            <h1>{number}</h1>
            <button onClick={addUp}>add</button>
        </div>
    )
}

export default Hand;