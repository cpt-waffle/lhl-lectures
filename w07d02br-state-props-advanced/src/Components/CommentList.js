import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {

  // const arr = [];
  // for (let comment of props.commentsArr) {
  //   arr.push(<Comment data={comment}/>);
  // }

  const arr = props.commentsArr.map( comment => {
    return <Comment data={comment} mouse={props.cat}/>
  })

  return (
    <div>
      {arr}
    </div>
  )
}

export default CommentList;
