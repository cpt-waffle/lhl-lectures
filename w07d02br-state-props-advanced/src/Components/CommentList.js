//0)  make a file 
//1) import react.. (optional on newer version of react)
import React from 'react';
import Comment from './Comment';

//2) declare your function (which is your component)
const CommentList = function(props) {
    console.log(props);
    //4) have a return statement with JSX

    //////////////////////////////////////// Make some comments from the props.list
    // loop through the list, for every comment inside of the list, make a new comment
    // maybe store it in an array

    // const array = [];
    // for (let item of props.list) {
    //     console.log(item);
    //     array.push(<Comment data={item}/>)
    // }

    // map, forEach, reduce, filter

    const array = props.list.map(item => {
        return <Comment data={item} onClick={props.onClick}/>
    })

    return (
        <div>
            {array}
        </div>
    )
}



//3) export default component
export default CommentList;