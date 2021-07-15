import React, { Component } from 'react';
import './card.css'
// entity, template
// methods that access data, or change something
// within a class

// class Human
// eyes
// hair
// learn()
// inheritence 
// -> class Vas
// eyeSight

// class __classname_ extends ________

class Card extends Component {
    constructor(props) {
       super(props); 
       // super() runs constructor for Component
       // that creates us all of the render(), willMount, state,..
       // then we go back tour contructor to do extra logic that 
       // we may embbed
       this.state = {
           likes: 2,
           dislikes: 4
       }
    //    this.onLikesClick = this.onLikesClick.bind(this);
    }

    onLikesClick = () => {
        console.log(this);
        this.setState({likes: this.state.likes + 1});
    }

    componentDidMount() {
        console.log("render!!");
        setTimeout(() => {
            console.log("LIKES AT THIS POINT IN TIME");
            console.log(this.state.likes);
        }, 5000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('something has changed!')
        if (prevState.likes !== this.state.likes) {
            console.log('likes changed!');
        }
    }

    render() {
        // you can have logic here
        const val = 2 + 2;
        // it needs to return JSX that 
        // will be rendered!
        const num = 33;
        return (
            <div className="card">
                <h1>Hello World! From Card.js {num}</h1>
                <img className="img" src={this.props.img}/>
                <h3>Name: {this.props.name}</h3>
                <button onClick={this.onLikesClick}>Likes {this.state.likes}</button>
                <button onClick={() => this.setState({dislikes: this.state.dislikes + 1})}>Dislikes {this.state.dislikes}</button>
            </div>
        )
    }
}

export default Card;