import React, { useState } from 'react';

function Counter() {
    const [number, changeNumber] = useState(1);
    const [list, changeList] = useState(['milk', 'cookies', 'juice']);

    const add = () => {
        console.log("im adding stuff!!!");
        // Always make a copy of a value ( immutable patterns for tomorrow )
        changeNumber(number+1);
        console.log(number);
    }

    const addSauce = () => {
        let tempList = [...list, 'Soy Sauce']
        changeList(tempList);
    }

    // return an array <=====  list.map( e => e + ' and')
    let arr = [<h2>Hi</h2>, <h1>hello</h1>, <p>test</p>];
    return (
        <div className="App">
            <h1>{number}</h1>
            <button onClick={add}>Add +1</button>
            <div>
                <h2>List of Items</h2>
                {list.map(item => {
                    return <li>{item}</li>
                })}
                <button onClick={addSauce}>Add some sauce</button>
            </div>
        </div>
    );
}

export default Counter;
