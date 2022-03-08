import React from 'react';
import Comment from '../Components/Comment';

//            props.jazzHands
//            props.batarang
const CommentList = (props) => {
    // props.jazzHands // ITS ACTUALLY a comments ==> [{}, {}, {}]

    // Tweeters
    // $tweet = `<article>...</article>`
    // const commentsHTML = [];
    // for (let item of props.jazzHands) {
    //     commentsHTML.push(<Comment data={item}/>)
    // }

    const commentsHTML2 = props.jazzHands.map((item) => {
        return <Comment key={item.id} data={item} batarang={props.batarang}/>
    }) 

    return (
        <div>
            {commentsHTML2}
        </div>
    ) 
}

export default CommentList;