// step 1 import React from react
import React, { Component } from 'react';
import './Card.css'
// blueprint
// Class Human -----> Vasiliy 

// step 2 make a class and make sure it extends Component ( or React.Component)
class Card extends Component {
    constructor(props) {
        super(props);
        // one state ONLY
        // its going to be an object!
        this.state = {likes: 3, dislikes: 5};
        this.dislikeClick = this.dislikeClick.bind(this)
    }

    // anon arror function () =>
    onLikesClick = () => {
        //axios.post('/likes', {likes: this.state.likes}).then( () => {
            this.setState(prev => ({...prev, likes: prev.likes + 1}));
        // })
    }

    dislikeClick = function() {
        this.setState(prev => ({...prev, dislikes: prev.dislikes + 1}));
    }

    componentDidMount() {
        console.log('render once!');
        setTimeout(() => {
            console.log(this.state);
        }, 5000)
        // Promise.all(axios.get('/appointments', '/interviews', 'days'))
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('Always render!')
        if (this.state.dislikes !== prevState.dislikes) {
            console.log("Dislike state has changed!!");
        }
    }

    //step 3 class needs to return JSX --- render() <--
    render() {
        return (
            <div className="card">
                <img className="img" src={this.props.image}/>
                <h1>{this.props.name}</h1>
                <button onClick={this.onLikesClick}>Likes  {this.state.likes}</button>
                <button onClick={this.dislikeClick}>Dislikes {this.state.dislikes}</button>
            </div>
        )
    }

}

// step 4 export default
export default Card;