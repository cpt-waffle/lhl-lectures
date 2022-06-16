import React from 'react';
import './comment.css'

function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;
	const onLikeClick = () => {
		// props.handleClick('like', id);
		console.log('Likes click line 8');
		// how do i tell App.js, WHICH comment component was clicked?
		props.melon('like', id);
	}

	const onDislikeClick = () => {
		// props.handleClick('dislike', id);
		console.log('Dislikes click line 14');
		props.melon('dislike', id);

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