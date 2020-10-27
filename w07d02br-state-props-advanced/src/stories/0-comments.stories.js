import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";


import Comment from '../Components/Comment';
import CommentList from '../Components/CommentList'

const comment = {
	id: 1,
	image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	content: 'This is a great comment!!! ',
	likes: 10,
	dislikes: 1,
}

storiesOf('Comments')
	.add('A Random Comment', () => <Comment data={comment} handleClick={action('onClick')}/>)


const commentList = [
	{
		id: 1,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a great comment!!! ',
		likes: 10,
		dislikes: 1,
	},
	{	id: 2,
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a terrible comment ',
		likes: 0,
		dislikes: 99899,
	}
]

storiesOf('CommentList')
	.add('A bunch of comments',() => <CommentList list={commentList}/>)