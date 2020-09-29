import React from 'react';
import './comment.css'






function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;

	function onLikeClick() {
		console.log("LIKE Clicked!");
		props.handleClick('like', id);
	}

	function ondDislikeClick() {
		console.log("Dislike Clicked!");
		props.handleClick('dislike', id);
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