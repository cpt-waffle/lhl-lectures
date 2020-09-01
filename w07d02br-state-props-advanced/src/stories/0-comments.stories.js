import React from 'react';
import { storiesOf } from '@storybook/react';


import Comment from '../Components/Comment';
import CommentList from '../Components/CommentList';

const comment = {
	image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	content: 'This is a great comment!!! ',
	likes: 10,
	dislikes: 1,
}


const commentList = [
	{
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a great comment!!! ',
		likes: 10,
		dislikes: 1,
	},
	{
		image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		content: 'This is a terrible comment ',
		likes: 0,
		dislikes: 99899,
	}
]


storiesOf('Comments')
	.add('A Random Comment', () => <Comment data={comment}/>)

storiesOf('Comment List')
	.add('A bunch of Comments', () => <CommentList list={commentList}/>)