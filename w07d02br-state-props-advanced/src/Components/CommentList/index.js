import React from 'react';
import Comment from '../Comment';


const CommentList = (props) => {
  //props.pineapple = comments[]
  // const commentsList = [];
  // for (let comment of props.pineapple) {
      // commentsList.push(<Comment data={comment}/>)
  // }
  return (
    <div>
      {props.pineapple.map(comment => <Comment data={comment} apple={props.onBark}/>)}
    </div>
  )
}

export default CommentList;