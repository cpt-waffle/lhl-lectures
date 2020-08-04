import React from 'react';
import './comment.css'


function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;

	function onLikeClick() {
		console.log(id)
		console.log("on like click")
		props.changeComment(id, 'like');
	}

	function ondDislikeClick() {
		console.log(id)
		console.log("on dislike click")
		props.changeComment(id, 'dislike');
	}


	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={onLikeClick}>Like {likes}</button>
				<button onClick={ondDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;