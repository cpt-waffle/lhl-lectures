// old ver or react 
import React from 'react';
import Comment from './Comment';

// make a function
const CommentList = (props) => {
  // function returns JSX
  // props.dogs[]

  // <Comment data={comment} handleClick={action('onClick')}/>
  // an array of comments 
  // array of HTML
  // a comment is component that is built out of html

  //////////////////
  // const arr =  [];
  // for (let dogComment of props.dogs) {
  //   arr.push(<Comment data={dogComment}/>)
  // }
  const arr = props.dogs.map(dogComment => {
    return <Comment data={dogComment} onClick={props.onChange}/>
  })

  return (
    <div>
      {arr}
    </div>
  )
}

// export the function
export default CommentList;