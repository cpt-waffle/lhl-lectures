import React from 'react';
import Meme from './Meme';


function MemeList(props) {
    return (
        <div>
            {props.list && props.list.map(meme => <Meme name={meme.name} url={meme.url} i={props.i}/>)}
        </div>
    )
}

export default MemeList;