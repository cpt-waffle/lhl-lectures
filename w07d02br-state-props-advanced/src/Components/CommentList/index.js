import React from 'react';
import Comment from '../Comment/index'

function CommentList(props) {
	return (
        <div>
		{props.listOfComments.map(singleComment => {
    	return <Comment changeComment={props.changeComment} data={singleComment}/>
      	})}
		</div>

	)
}


export default CommentList;