import React from 'react';
import Comment from '../Comment';

function CommentList(props) {
    console.log(props)
    const comments = props.list.map((element) => {
        return <Comment key={element.id} data={element} handleComments={props.handleComments}/>
    })
    return (
        <div>
            {comments}
        </div>
    )

}

export default CommentList;