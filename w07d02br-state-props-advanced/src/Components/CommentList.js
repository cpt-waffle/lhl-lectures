import React from 'react';
import Comment from './Comment';


const CommentList = (props) => {
    // const htmlList = [];
    // for (const comment of props.comments) {
    //     htmlList.push( <Comment key={comment.id}data={comment}/>);
    // }
    const htmlList = props.comments.map((comment) => {
        return <Comment key={comment.id} data={comment} death={props.banana}/>
    })


    return (
        <div>
          {htmlList}
        </div>

    )
}


export default CommentList;

