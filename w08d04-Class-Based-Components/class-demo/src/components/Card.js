import React, {Component, useState} from 'react';
import './Card.css';

// whats is a class?

// inheritence 

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {likes: 4, dislikes: 1};
    this.onDislikesClick = this.onDislikesClick.bind(this);
  }

  onLikesClick = () => {
    this.setState(prev => ({...prev, likes: prev.likes + 1}));
  }

  onDislikesClick() {
    this.setState(prev => ({...prev, dislikes: prev.dislikes + 1}));
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("LIKES", this.state.likes);
      console.log("DISLIKES", this.state.dislikes);
    }, 10000)
    console.log("Runs Once, and never again");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("runs everytime BUT NOT THE FIRST TIME ON RENDER!");
    if (prevState.dislikes !== this.state.dislikes) {
      console.log("runs whens dislikes has changed");
    }
  }


  render() {
    const {image, name, title} = this.props;
    return (
      <article className='card'>
        <img 
          src={image}
          className="card--img"
        />
        <h2>{name}</h2>
        <h3>{title}</h3>


      <div>
        <button
          onClick={this.onLikesClick}
        >
          {this.state.likes} Likes
        </button>
        <button
          onClick={this.onDislikesClick}
        >
          {this.state.dislikes} Dislikes
        </button>
      </div>

      </article>
      
    );
  }

}



export default Card;