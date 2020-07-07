#### Breakout Adv Prop Passing and State Manipulation

Today we talked about how to pass state 3 levels deep.

We started with a premade component Called `Comment`.


`Comment` --> was able to take one `comment_object`


We also had a bunch of comments stored in `App.js` in an array. The first thing we tried is to render a single `Comment`

```jsx
<Comment data={commentsData[0]}
```

Once we verified that worked, we then used a map to make a bunch of Comment Components.

```jsx
		{commentsData.map(singleComment => {
    	return <Comment data={singleComment}/>
      	})}
		</div>
```

We then said, we should refactor it into its own file/Component. So we made `CommentList`

```jsx
import React from 'react';
import Comment from '../Comment/index'

function CommentList(props) {
	return (
        <div>
		{props.listOfComments.map(singleComment => {
    	return <Comment changeComment={props.changeComment} data={singleComment}/>
      	})}
		</div>

	)
}


export default CommentList;
```

Afterwards we decided to make the buttons change how many likes and dislikes, as they were clicked.

We started by mapping how our component tree looks

`App` ====> `CommentList` =====> `Comment` (many comments)

Then we tried to pass a function and learn that Props can be `passed down` but function calls `come up and propagate up`

Once we learned that, we realized that we can return back values from `Comment` Component all the way back a function inside of `App.js`

We then used that knowledge, to modify our `state` by using `immutable patterns` to make a copy of the `state` and change that ONE `comment` that was clicked on. 

Inside of `Comment` Component we Added:

```jsx
	const onLikeClick = () => {
		console.log("LIKED");
		props.changeComment('likes', id);
	}

	const onDislikeClick = () => {
		console.log("DISLIKED");
		props.changeComment('dislikes', id);
	}
```

and notice `props.changeComment()` function is actually passed all the way from `App.js` which is called: `handleComment(type,id)`

```jsx
const handleComment = (type, id) => {
  // Find the correct index of the comment that was clicked
  const commentsCopy = [...comments];
  const commentId = commentsCopy.map(singleComment => singleComment.id).indexOf(id);
  commentsCopy[commentId][type]++;
  setComments(commentsCopy);
}
```

We then built out the logic to change the state with the comment with +1 dislike/like with the logic above.
