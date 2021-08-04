// make a file
// in the most recent ver this is done automatically,
import React from 'react';
import Comment from './Comment';

const CommentsList =  function CommentsList(props) {
    console.log(props.banana);
    // const arr = [];
    // for (let comment of props.banana) {
    //     arr.push(<Comment data={comment}/>)
    // }
    // for let i of  OR i in, or C-style phased out by map, forEach, reduce, filter, 
    // map way ----------
    const arr = props.banana.map(comment => {
        return <Comment 
            data={comment}
            handleClick={props.handleClick}
        />
    });

    return (<div>
        {arr}
    </div>)
}

export default CommentsList;

























// module.exports = Button
const Button = () => {
    return (<button>Click ME!</button>)
}

export { Button }

