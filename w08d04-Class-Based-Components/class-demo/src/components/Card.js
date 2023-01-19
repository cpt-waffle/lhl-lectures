// import React
import React, { Component } from 'react';
import './Card.css'

// a react class
// a react component
class Card extends Component {
  
  constructor(props) {
    super(props); // --> Component.Constructor()
    //...
    this.state = {likes: 4, dislikes: 4};
    this.onDislikeButtonClick = this.onDislikeButtonClick.bind(this);
  }

  onLikesButtonClick = () => {
    this.setState(
      prev => ({likes: prev.likes + 1})
    )
  }

  onDislikeButtonClick() {
    this.setState(
      prev => ({dislikes: prev.dislikes + 1})
    )
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("likes", this.state.likes);
      console.log("dislikes", this.state.dislikes);
    }, 10000)
    console.log("once!");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("everytime, EXCEPT THE FIRST MOUNT");
  //   if (this.state.dislikes !== prevState.dislikes) {
  //     console.log("dislikes have changed!");
  //   }
  // }


  render() { 

    return (
      <article className='card'>
        <img 
          className="card--img"
          src={this.props.image}
        />
        <h2>{this.props.name}</h2>
        <h3>{this.props.title}</h3>
        <button onClick={this.onLikesButtonClick}>
          Likes {this.state.likes}
        </button>
        <button onClick={this.onDislikeButtonClick}>
          Dislikes {this.state.dislikes}
        </button>
      </article>
    )
  }

}


export default Card;
