import React, { Component } from 'react';
import './card.css'
// import react + component

// class _____ extends component
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0
        }
        this.handleLikeClick = this.handleLikeClick.bind(this);
    }
    
    handleLikeClick() {
        // this.state.likes = this.state.likes + 1;
        // ^ WRONG WAY.. for demo purposes only to show that it doesn't work!!

        // this.setState({likes: this.state.likes + 1 });
        this.setState(prev => ({likes: prev.likes + 1}))
        //this.setState(....) 
        // console.log(this.state);
    }

    handleDislikeClick = () => {
        this.setState(prev => ({dislikes: prev.dislikes + 1}))

    }

    componentDidMount() {
        console.log("rendered ONCE!!!!!!!!")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('rendered!!');
        
        if (prevState.dislikes !== this.state.dislikes) {
            console.log("dislikes CHANGED");
            console.log('re-rendering for dislikes!');
        }

    }

    render() {
        // console.log(this);
        return (
            <div>
                <img className='img' src="https://static.boredpanda.com/blog/wp-content/uploads/2014/04/funny-derpy-animals-33.jpg"/>
                <h1>{this.props.name}</h1>
                <h3>{this.props.title}</h3>
                <button onClick={this.handleLikeClick}>Likes {this.state.likes}</button>
                <button onClick={this.handleDislikeClick}>DisLikes {this.state.dislikes}</button>

            </div>
        )
    }
}

export default Card;