// i need to make a basic component structure....

// 1 -- import react ()
import React from 'react';
import Comment from './Comment'

// 2 -- define our function component
const CommentList = function(props) {
    // 3 -- function component returns JSX
    // --------- METHOD ONE ------------
    // const commentsList = [];
    // for (let comment of props.list) {
    //     commentsList.push(<Comment key={comment.id} data={comment}/>)
    // }
    // -------- METHOD TWO --------------
    const commentsList = props.list.map(comment => 
        <Comment key={comment.id} data={comment} handleClick={props.handleComment}/> )
    return (
        <div>
            {commentsList}
        </div>
    )
}

// 4 -- export default
export default CommentList;