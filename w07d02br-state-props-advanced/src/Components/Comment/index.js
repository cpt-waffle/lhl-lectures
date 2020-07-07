import React from 'react';
import './comment.css'


function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;


	const onLikeClick = () => {
		console.log("LIKED");
		props.changeComment('likes', id);
	}

	const onDislikeClick = () => {
		console.log("DISLIKED");
		props.changeComment('dislikes', id);
	}

	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={onLikeClick}>Like {likes}</button>
				<button onClick={onDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;