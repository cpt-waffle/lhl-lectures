import React from "react";
import Comment from '../Comment';

function CommentList(props) {
    console.log("COMMENTLIST RENDER!!!");
    //props.comments is a list of comments
    // loop through them and create a Comment component for each element in the array
    // const comments = [];
    // for (let item of props.comments) {
    //     console.log(item);
    //     comments.push(<Comment data={item}/>)
    // }
    const comments = props.comments.map(item => 
        <Comment 
            key={item.id}
            data={item}
            onClick={props.handleComments}
        />)

    return (
        <div>
            {comments}
        </div>
    )
}

export default CommentList;