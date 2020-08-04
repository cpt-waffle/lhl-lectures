import React from 'react' ;
import Comment from '../Comment/index'


function CommentList(props) {
    console.log("THE PROPS ARE ", props)
    return <div>
        {props.list.map(comment =>
             <Comment 
            data={comment} 
            changeComment={props.changeComment}
        />)}
    </div>
}



export default CommentList;