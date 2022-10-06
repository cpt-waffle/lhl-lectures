import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  console.log(props);
  const array = [];
  for (let comment of props.giraffe) {
    array.push(<Comment data={comment} primerib={props.taromilktea}/>)
  }

  return (<div>
    This is our comment List :)
    {array}
  </div>)
}


export default CommentList;