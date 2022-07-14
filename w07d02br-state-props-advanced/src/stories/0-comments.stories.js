import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import Comment from '../Components/Comment';
import CommentList from '../Components/CommentList';

const comment = {
	id: 1,
	image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	content: 'This is a great comment!!! ',
	likes: 10,
	dislikes: 1,
}

storiesOf('Comments', module)
	.add('A Random Comment', () => <Comment data={comment} handleClick={action('onClick')}/>)


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

storiesOf('CommentList Component', module)
	.add('default commentList', () => <CommentList comments={comments}/>)
// CommentList(propName=Value)
// CommentList(comments)