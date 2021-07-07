import React from 'react'
import Comment from './Comment'


const CommentList = function(props) {
    // console.log(props);
    // const arr = []
    // for (let comment of props.banandaData) {
    //     arr.push(<Comment data={comment}/>)
    // }

    const arr = props.banandaData.map(comment => {
        return <Comment data={comment} handleClick={props.myFunction}/>
    })

    return (<div>
       {arr}
    </div>)
}

export default CommentList;