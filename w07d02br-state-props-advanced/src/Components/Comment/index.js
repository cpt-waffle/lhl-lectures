import React, { useState } from 'react';
import './comment.css'

function Comment(props) {
	// props.id props.image,
	const { id, image, content, likes, dislikes } = props.data;
	const [fakeLike, setFakeLike] = useState(likes);
	function onLikeClick() {
		console.log("LIKE Clicked!");
		console.log('id is on Comment line 10:', id);
		console.log(props);
		props.handleComments(id, 'like');

	}
	

	function onFakeLike() {

	}

	function ondDislikeClick() {
		console.log("Dislike Clicked!");
		props.handleComments(id, 'dislike');
	}

	// $('#form').on('submit', (evt) => {/..})

	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={onLikeClick}>Like {likes}</button>
				<button onClick={() => setFakeLike(fakeLike + 1)}>FAKE LIKE {fakeLike}</button>
				<button onClick={ondDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;