import React from 'react';
import './comment.css'

function Comment(props) {
	// props.onClick();
	const { id, image, content, likes, dislikes } = props.data;
	const onLikeClick = () => {
		console.log("Like!")
		props.jam(id, 'like');
	}

	const onDislikeClick = () => {
		console.log("Dislike!");
		props.jam(id, 'dislike');
	}

	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={() => onLikeClick()}>Like {likes}</button>
				<button onClick={onDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;