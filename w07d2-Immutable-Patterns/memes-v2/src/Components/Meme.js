import React from 'react';
import './memes.css'

function Meme(props) {
    // let a = 1;
    // let b = 2;

    // const obj = {item: 'name', spot: 3};
    // const arr = [{a: 1}, {B:2}, {a:3}];
    
    // for (let elem of arr) {
    //     modifiedArr.push(<p>{elem.a}</p>)
    // }
    // const modifiedArr = arr.map(e => <p>{e.a}</p> );
    // console.log(a + b);
    // <%= urls[url] %>
    return (
        <div>
            <h2>{props.name ? props.name : 'Default meme'}</h2>
            {props.url && <img className='meme-img' src={props.url} />}
        </div>
        
    )
}

export default Meme;