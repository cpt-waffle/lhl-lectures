import { Component } from "react";
import './Card.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {likes: 1, dislikes: 1};
    // this.onDislikesClick = this.onDislikesClick.bind(this);
    // this.setState
  }

  onLikesClick = () => {
    this.setState(prev => {
      return {likes: prev.likes + 1}
    })
  }

  onDislikesClick = () => {
    this.setState(prev => {
      return {dislikes: prev.dislikes + 1}
    })
  }

  componentDidMount() {
    // just before the initial render occurs
    console.log("render once, and never again");
    setTimeout(() => {
      console.log(this.state.likes);
    }, 5000)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('never runs in the beginning... only after initial render and when state changes');
  //   if (prevState.likes !== this.state.likes) {
  //     console.log("likes has changed");
  //   }

  // }



  render() {
    const {img, name, title} = this.props;

    return (
      <div className='card'>
        <img className='card--img' src={img}/>
        <h2>{name}</h2>
        <h2>{title}</h2>





        <button onClick={this.onLikesClick}><h1>Likes {this.state.likes}</h1></button>
        <button onClick={this.onDislikesClick}><h1>Dislikes {this.state.dislikes}</h1></button>

      </div>
    )
  }
}


export default Card;