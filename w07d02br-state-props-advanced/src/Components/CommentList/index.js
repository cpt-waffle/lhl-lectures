import React from 'react';
import Comment from '../Comment';


function CommentList(props) {
    const comments = props.list.map(comment => {
        return <Comment key={comment.id} data={comment} handleClick={props.handleClick} />
    })

    return (<div>
        {comments}
    </div>)
}

export default CommentList;