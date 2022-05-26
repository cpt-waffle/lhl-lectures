import React, {Component,} from 'react';
import './Card.css'
// What is a Class?
// is a blueprint, 
//that has properties and methods

// Class Vehicle
// color:
// numOfDoors:
// numOfSeats;
// drive();
// iginiton();
///// INHERITENCE //////
// Class Toyota extends Vehicle\
// Constructor () CREATES ALL OF THE DEFAULT VARIABLES
// isHybrid: t/f
// toleranceLevels
// We extended because we want the methods, and properties
// of Component Class
class Card extends Component {
  constructor(props) {
    super(props) // Component, execute your constructor() { ... }
    this.state = {likes: 10, dislikes: 4};
    this.onDislikesClick = this.onDislikesClick.bind(this);

  }
  onLikesClick = () => {
    this.setState(prev => ({...prev, likes: prev.likes+1}))
  }

  onDislikesClick = function() {
    this.setState(prev => ({...prev, dislikes: prev.dislikes+1}))
  }

  componentDidMount() {
    console.log("One time!");
    setTimeout(() => {
      console.log('likes', this.state.likes);
    }, 5000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("everytime!, EXCEPT THE FIRST initial render!");
    if (prevState.likes !== this.state.likes ) {
      console.log('likes has changed');
    }
  }



  render() {
    // set variables (not set State)
    // do logic

    const {img, name, title} = this.props;
    return (<div className='card'>
    <img 
      className='card--img'
      src={img}/>
    <h3>{name}</h3>
    <h4>{title}</h4>
    <button
     onClick={this.onLikesClick}
    >Likes {this.state.likes}</button>
    <button
      onClick={this.onDislikesClick}
    >Dislikes {this.state.dislikes}</button>
  </div>)
  }
}







export default Card;