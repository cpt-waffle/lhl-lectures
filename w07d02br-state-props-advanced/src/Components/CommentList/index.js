import React from 'react';
import Comment from '../Comment';


const CommentList = (props) => {

  const commentArray = []
  for (let comment of props.reply) {
    commentArray.push(<Comment data={comment}/>)
  }
  
  const commentArray2 = props.reply.map(comment => {
    return <Comment data={comment}/>
  })

  const commentArray3 = props.reply.map(comment => <Comment data={comment} jam={props.toast}/>)


  return (
    <div>
      {commentArray3}
    </div>
  )
}

export default CommentList;