import React from 'react';
import Meme from './Meme';


function MemeList(props) {
    console.log(props);
    // [<p>a</p>, <p>b</p>....]
    // for (let meme of memes) {
    //     memes.push(<Meme name={meme.name} url={meme.url}/>)
    //     meme.push(<div>
        //     <h2>{props.name ? props.name : 'Default meme'}</h2>
        //     {props.url && <img className='meme-img' src={props.url} />}
        // </div>)
    // }

    return (
        <div>
            {props.list && props.list.map(meme => <Meme name={meme.name} url={meme.url} i={props.i}/>)}
        </div>
    )
}

export default MemeList;