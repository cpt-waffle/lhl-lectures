// 1st thing 
import React from 'react'
import Comment from './Comment/index'

// 2nd thing?

function CommentList(props) {
    console.log(props.list)
    const arrayOfCommentsComponents = [];

    for (let item of props.list) {
        console.log(item);
        arrayOfCommentsComponents.push(
            <Comment data={item} handleClick={props.handleClick}/>
        )
    }

    // 4th thing
    return (
        <div>
            {arrayOfCommentsComponents}
        </div>
    )
}



// 3rd thing
export default CommentList;