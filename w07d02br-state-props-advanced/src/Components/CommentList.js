// #1 import react  (+16-17)
import React from 'react';
import Comment from './Comment';

// #2 make a function
// Function should be same name as file
const CommentList = function(props) {

    // const array = [];
    // for (let comment of props.arrayOfComments) {
    //     array.push(<Comment data={comment}/>)
    // }

    const array = props.arrayOfComments.map((comment) => {
        return <Comment data={comment} onClick={props.clicked}/>
    })
    return (
        <div>
             {array}
        </div>
    )

}

// #3 export default that function
export default CommentList;