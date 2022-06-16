import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (<div>
    {props.commentsArr.map(comment => <Comment data={comment} melon={props.overwatch}/>)}
  </div>)
}

export default CommentList;