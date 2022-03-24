import React from 'react';
import './comment.css'

function Comment(props) {
	const { id, image, content, likes, dislikes } = props.data;
	// $('#buttonCLick').on('click', (evt) => {/..})
	const onLikeClick = () => {
		props.onClick('like', id);
	}

	const onDislikeClick = () => {
		props.onClick('dislike', id);

	}
	// myCbFunction = () => {////}

	// $('#button').on('click', (evt) => { /////  })
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