import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {

  return (<div>
    {props.comments.map(comment => {
      return <Comment key={comment.id} data={comment}  anythingYouWish={props.onClick}/>
    })}
  </div>)
}

export default CommentList;