import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {

  // const array = [];
  // for (let comment of props.comments) {
  //   array.push(<Comment data={comment}/>)
  // }

  const array = props.comments.map((comment) => {
    return <Comment data={comment} onClick={props.getMemes}/>
  })


  return (
    <div>
      {array}
    </div>
  )
}

export default CommentList;