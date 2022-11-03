import React from 'react';
import Comment from './Comment';


const CommentList = props => {

  const array = [<Comment data={props.comments[0]}/>, <Comment data={props.comments[1]}/>]

  // loop through our props.comments ==> and make a new Comment each time...
  // const list = [];
  // for (let comment of props.comments ) {
  //   list.push(<Comment data={comment}/>)
  // }

  const list2 = props.comments.map( comment => {
    return <Comment key={comment.id} data={comment} woofWaffle={props.waffle}/>
  })

  return (
    <div>
      CommentList Component
      {list2}
    </div>
  )
}

export default CommentList;