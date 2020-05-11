import React from 'react';
import MemeItem from './MemeItem';

export default function MemeList(props) {

    console.log(props);
    // let arr = [];
    // for (let i of props.list) {
    //     arr.push(<MemeItem title={i.title} url={i.url}/>)
    // }
    // arr = props.list.map( i => {
    //     return (
    //         <MemeItem title={i.title} url={i.url}/>
    //     )
    // })

    return (
        <div>
            {props.list.map( i => <MemeItem title={i.title} url={i.url}/>)}
        </div>
    )
}

// {props.list.map( i => <MemeItem title={i.title} url={i.url}/>)}
