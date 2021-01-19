import React, { useState } from 'react';
import './comment.css'

function Comment(props) {
	// props.id props.image,
	const { id, image, content, likes, dislikes } = props.data;

	// $('#form').on('submit', (evt) => {/..})
	const handleLikes = () => {
		console.log("LIKE CLICKED");
		// props.onClick(id, 'like');
		props.handleClick(id,'like');
	}

	const handleDislikes = () => {
		console.log("DISLIKE CLICKED");
		props.onClick(id, 'dislike');
	}


	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={handleLikes}>Like {likes}</button>
				<button onClick={() => handleDislikes(id, 'dislikes')}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;