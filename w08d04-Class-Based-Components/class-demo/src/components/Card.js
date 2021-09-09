// We are going to still import React 
import React, { Component } from 'react';
import './Card.css'
// Class Human
// every human class has nails
// every human class has travel()

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 11,
            dislikes: 5
        }
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
    }

    handleLikesClick = () => {
        this.setState(prev => 
            ({...prev, likes: prev.likes + 1}
        ))
    }

    handleDislikeClick = function () {
        this.setState(prev => 
            ({...prev, dislikes: prev.dislikes + 1}
        ))
    }

    componentDidMount() {
        console.log('Component finished mounting!');
        setTimeout(() => {
            console.log("THIS IS STATE --------");
            console.log(this.state);
        }, 4000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Render EVERY SINGLE TIME!!!!!");
        if (prevState.likes !== this.state.likes) {
            console.log("Render on likes!!");
        }
    }


    render() {
        // this -- refers to THIS CLASS
        const {image, name} = this.props;
        return (
            <div>
                <img className="img" src={image}/>
                <h1>{name}</h1>
                <button onClick={this.handleLikesClick}>
                    Likes {this.state.likes}
                </button>
                <button onClick={this.handleDislikeClick}>
                    Dislikes {this.state.dislikes}
                </button>

            </div>
        )
    }
}


export default Card;