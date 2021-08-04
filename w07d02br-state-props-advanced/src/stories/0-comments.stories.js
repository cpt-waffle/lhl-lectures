import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";


import Comment from '../Components/Comment';
import CommentsList, { Button } from '../Components/CommentsList';

const comment = {
	id: 1,
	image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	content: 'This is a great comment!!! ',
	likes: 10,
	dislikes: 1,
}
// mock functions
// a function that does absolutely nothing but to serve a purpose of being a function
// (Comment(data: comment))
storiesOf('Comments')
	.add('A Random Comment', () => <Comment data={comment} handleClick={action('onClick')}/>)
	.add('TesT', () => <h1>TEST</h1>)
	.add('TesT2', () => <h1>TEST2</h1>)




const comments = [
	{
		id: 1,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a great comment!!! ',
		likes: 10,
		dislikes: 1,
	},
	{
		id: 2,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'THIS IS A TERRIBLE COMMENT!!!',
		likes: 0,
		dislikes: 55,
	}
]

// a CommentsList component
// that takes in a comments array
// and renders out Comments Components

// CommentsList(comments) {....}
storiesOf('Comment List!!!')
	.add('TEST', () => <CommentsList banana={comments}/>)
	.add('BTN', () => <Button/>)
