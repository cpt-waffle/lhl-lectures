import React from 'react';
import './comment.css'

function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;
	const onLikeClick = () => {
		// props.handleClick('like', id);
		console.log('Likes click line 8');
		console.log(props.plantains);
		props.plantains('likes', id) // f();
	}

	const onDislikeClick = () => {
		// props.handleClick('dislike', id);
		console.log('Dislikes click line 13');
		props.plantains('dislikes', id) // f();

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