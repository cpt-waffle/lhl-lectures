import React from 'react';
import Comment from '../Comment';

//                  {}
const CommentList = props => {

  const commentsHTML = [];

  // for (let comment of props.monkeyfuzz) {
  //   commentsHTML.push(<Comment data={comment}/>)
  // }

  const commentsHTML2 = props.monkeyfuzz.map(comment => {
    return <Comment data={comment} banana={props.toaster}/>
  })

  return (<div>
    {commentsHTML2}
  </div>)
}

export default CommentList;