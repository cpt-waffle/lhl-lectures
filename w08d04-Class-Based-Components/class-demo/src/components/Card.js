// import React
import React, { Component, useState } from 'react';
import './card.css'
// Class <----
// class Person {eyes, nose, mouth, eyeColor...}
// ^-- inheritence (extends)
// Class Vas extends Person {eyes, nose, mouth, eyeColor, hobbies, bornIn, shoeSize}

// Component (Parent)
//    |
//   Card (child)

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {likes: 0, disLikes: 0};
        this.onDislikesClick = this.onDislikesClick.bind(this);
    }

    onLikesClick = () => {
        this.setState(prev => ({...prev, likes: prev.likes + 1}));
    }

    onDislikesClick = function() {
        this.setState(prev => ({...prev, disLikes: prev.disLikes + 1}));
    }

    componentDidMount() {

        console.log("one time!");
    }


    componentDidUpdate() {
        console.log("something changed!");
    }



    render() {
        // this.props.foo();
        const {img, title} = this.props; // PROPS :D
        return (
            <div>
                <img 
                    className="card--img"
                    src={img}
                />
                <h1>{title}</h1>
                <button onClick={this.onLikesClick}>Likes {this.state.likes}</button>
                <button onClick={this.onDislikesClick}>DisLikes {this.state.disLikes}</button>
            
            </div>
        )
    }
}


export default Card;