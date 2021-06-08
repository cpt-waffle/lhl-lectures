//  1 -- import React from 'react' // this is an optional for newer version of react 
import React from 'react';
import Comment from './Comment'


// 2  -- make a function (preferably the same name as the file)
const CommentList = (props) => {
    console.log('props ----->', props.list);
//  <Comment data={props.list[1]}/>

//  --------------- METHOD 1
// for (let comment of props.list) {
    //     arr.push(<Comment data={comment}/>)
    // }
    const arr = props.list.map(comment => {
        return <Comment data={comment} handleClick={props.handleClick}/>
    }) 
    
    return (
        <div>
            {arr}
        </div>
    )

}

// 3 -- export default the function
export default CommentList;