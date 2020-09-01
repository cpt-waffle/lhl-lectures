import React from 'react';
import Comment from './Comment/index';


function CommentList(props) {
    console.log(props);
    // map through props.list to see whats inside first
    // array = [<p></p>, <p></p>, <p></p>]
    const array = props.list.map( e => {
        // console.log(e);
        // console.log("what is e^?")
        return <Comment data={e} onClick={props.onClick}/>
    })
    console.log(array);
    return (<div>
        this is a commentList component
        {array}
    </div>)
}


export default CommentList;