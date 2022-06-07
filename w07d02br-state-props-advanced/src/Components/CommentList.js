import React from "react";
import Comment from './Comment'

const CommentList = (props) => {
  console.log("props", props);


  return (
    <div>
      {props.bananas ? props.bananas.map(comment => <Comment key={comment.id} data={comment} plantains={props.acorns}/>) : <h1>No comments available</h1>}
    </div>
  )
}


export default CommentList;