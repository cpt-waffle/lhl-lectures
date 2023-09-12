import React, { Component } from 'react';
import Title from './Title';
import './Card.css';

// inhertence
// human -----------------> student

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {likes: 3, dislikes: 1};
    // this.onDislikesClick = this.onDislikesClick.bind(this);
  }

  onLikesClick = () => {
    this.setState({likes: this.state.likes + 1});
  }

  onDislikesClick = () => {
    this.setState({dislikes: this.state.dislikes + 1});
  }

  componentDidMount() {
    console.log("RUN FIRST Time, and never again..");
    setTimeout(() => {
      console.log("DISLIKES IS NOW --->", this.state.dislikes);
    }, 5000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("RUN ON ANYTIME ANYTHING CHANGES!!!");
    if (prevState.likes !== this.state.likes) {
      console.log("likes state changed!!!");
    }
  }


  render() {
    // console.log(props);
    return (
      <article className='card'>
        <img src={this.props.img} className='card--img'/>
        <h4>{this.props.name}</h4>
        <Title title={this.props.title}/>
        <button onClick={this.onLikesClick}>
          Likes {this.state.likes}
        </button>
        <button onClick={this.onDislikesClick}>
          Dislikes {this.state.dislikes}
        </button>
      </article>
    )
  }
}


export default Card;