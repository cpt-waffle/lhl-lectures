import React, { Component, useState } from 'react';
import './Card.css';

// is a blueprint
// class car
// windows,doors=2, engine=12, fueltype=97, 4wheels
// constructor()
// a constructor is a method
// that builds you an instance of that class


class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {likes: 0, dislikes: 44};
    this.onDislikes = this.onDislikes.bind(this);
  }


  onLikesClick = () => {
    this.setState(prev => ({...prev, likes: prev.likes + 1}));
  }

  onDislikes = function() {
    this.setState(prev => ({...prev, dislikes: prev.dislikes + 1}));
  }
  // this runs before
  componentDidMount() {
    console.log("on render, and never again");
    setTimeout(() => {
      console.log("likes", this.state.likes);
      console.log("dislikes", this.state.dislikes);
    }, 10000)

  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("runs everytime. EXCEPT THE FIRST RENDER(mount)");

  //   if (prevState.dislikes !== this.state.dislikes) {
  //     console.log("on whenever dislikes changes");
  //   }
  // }


  render() {
    return (
      <article className="card">
        <img 
          className="card--img"
          src={this.props.image}
          />
        <h2>{this.props.name}</h2>
        <h3>{this.props.title}</h3>
        <button onClick={this.onLikesClick} >
        Likes {this.state.likes}
      </button>
      <button 
        onClick={this.onDislikes}
      >
        Dislikes{this.state.dislikes}
        </button>
      </article>
    );
  }
}



export default Card;