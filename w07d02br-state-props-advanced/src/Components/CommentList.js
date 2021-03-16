// import React...
import React from 'react';
import Comment from './Comment/index';
// making a component REVIEW ---


// make a function
function CommentList(props) {
    console.log(props.list);
    const renderComments = props.list.map(comment => {
        return <Comment data={comment} handleOatmeal={props.sendIt}/>
    });

    return (
        <div>
            {renderComments}
        </div>
    )
}

export default CommentList;