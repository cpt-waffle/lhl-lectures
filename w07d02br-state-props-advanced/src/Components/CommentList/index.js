




import React from 'react'
import Comment from '../Comment'

function CommentList(props) {
    console.log(props);
    return (
        <div>
            {props.list.map( e => <Comment data={e} handleClick={props.handleClick}/>)}
        </div>
    )
}

export default CommentList;