import React from 'react';
import './comment.css'

function Comment(props) {
	// props.id props.image,
	const { id, image, content, likes, dislikes } = props.data;

	function onLikeClick() {
		console.log("LIKE Clicked!");
		console.log('id is on Comment line 10:', id);
		props.handleClick('like', id);
	}

	function ondDislikeClick() {
		console.log("Dislike Clicked!");
		props.handleClick('dislike', id);
	}

	// $('#form').on('submit', (evt) => {/..})

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