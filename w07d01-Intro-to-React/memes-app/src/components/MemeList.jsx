import React from 'react';

import Meme from './Meme';

function MemeList(props) {
    console.log(props.collection)

    // const array = [<Meme/>, <Meme/>, <Meme/>];

    // METHOD 1 THAT YOU WILL NOT SEE DURING THIS WEEK ( it is frownd upon)
    // const array = [];
    // for (let meme of props.collection) {
    //     array.push(<Meme memeURL={meme.url}/>)
    // }

    // METHOD 2 ( BETTER METHOD !!!!! )
    // const array = props.collection.map(meme => <Meme memeURL={meme.url}/>)

    return (
        <div>
            {props.collection.map(meme => <Meme memeURL={meme.url}/>)}
        </div>
    )


}


export default MemeList;