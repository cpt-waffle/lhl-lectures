// import React from React
import React, {Component, useState} from 'react';
import './Card.css'
// make sure to extend Coponent 
class Card extends Component {
  // the constructor method runs first
  // when creating a class
  constructor(props) {
    super(props)
    console.log(this);
    //...
    //state will be setup here.....
    this.state = {likes: 5, dislikes: 5};
    // this.onLikesClick = this.onLikesClick.bind(this);
  }
  // ALWAYS TRY TO WRITE ES6 arrow functions in react classes!
  onLikesClick = () => {
    this.setState({likes: this.state.likes + 1})
  }

  //to render something in class 
  // we dont return, we have a specific
  // method.
 ///////////// LIFE CYCLE METHODS
 // Constructor
 // componentDidMount
 // render()
 // ComponentDidUpdate
 componentDidMount() {
   console.log("Run Once")
   setTimeout(() => {
    console.log(this.state.likes);
  }, 10000);
 }
 // componentDidMount runs 
 //before HTML gets added to the page

 componentDidUpdate(prevProps, prevState) {
   console.log("runs everytime BUT NOT the first time the component renders!")
   if (prevState.likes !== this.state.likes) {
     console.log("Likes has Changed!");
   }
 }



  render() {
    const {name, title, img} = this.props;
    return (
      <article className='card'>
        <img
          alt="img"
          src={img}
          className='card--img'
          />
        <h2>{name}</h2>
        <h3>{title}</h3>
        <button onClick={this.onLikesClick}>
          Likes {this.state.likes}
        </button>
        <button onClick={() => this.setState({dislikes: this.state.dislikes + 1})}>
          Dislikes {this.state.dislikes}
        </button>
      </article>
    )
  }
}






export default Card;





// what is a Class in JS?
 // -- template
 // -- something that holds objects
 // -- blueprint

// Class Vehicle
// 4wheels
// doors
// drive()
// iginition()
//// Inheritence

// Class Corolla extends Vehicle
// color
// automatic
// driveType
