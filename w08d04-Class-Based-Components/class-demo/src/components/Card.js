// import Component 
import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
        }
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
    }

    
    componentDidMount() {
        console.log("rendered!");
    }

    componentDidUpdate(prevPros, prevState) {
        if (prevState.likes !== this.state.likes) {
            console.log("ran on likes!")
        }
    }

    handleDislikeClick() {

        this.setState(prev => ({...prev, dislikes: prev.dislikes + 1}))
    }

    handleLikeClick = () => {
        this.setState(prev =>({...prev, likes: prev.likes + 1}));
    }


    render() {
        return (
            <div>
                <img className="img" src="https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg"/>
                <h1>{this.props.name}</h1>
                <h3>{this.props.title}</h3>
                <button onClick={this.handleLikeClick}>Likes {this.state.likes}</button>
                <button onClick={this.handleDislikeClick}>Dislikes {this.state.dislikes}</button>

            </div>
        )
    }
}


export default Card;