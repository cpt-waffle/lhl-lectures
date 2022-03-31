import React, {Component} from 'react'; // newer ver doesnt need this
import './card.css';
// what is a class?
// Class Person 
// grow()
// eye_color
// hair_color
// name
// iheritence
// Class Person > Vas
// 4 wheels
// steering wheel
// airbags
// Vehicle > Corolla
//    Child         Parent
class Card extends Component {
// how do we render JSX?
  constructor(props) {
    super(props);
    this.state = {likes: 2, dislikes: 4};
    this.onDislikesClick = this.onDislikesClick.bind(this);
  }
  // state = {likes: 2, dislikes: 4}
  // class property proposal! 
  onLikesClick = () => {
    this.setState(prev => ({likes: prev.likes + 1}));
  }

  onDislikesClick = function() {
    this.setState(prev => ({dislikes: prev.dislikes + 1}));
  }

  componentDidMount() {
    console.log('render once.');
    setTimeout(() => {
      console.log(this.state.likes);
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("render everytime anything changes!");
    if (prevState.likes !== this.state.likes) {
      console.log("likes changed, useEffect tracks it..")
    }
  }

  render() {
    //
    return (<div>
      <img className='card--img' src={this.props.img}/>
      <h3>{this.props.name}</h3>
      <button onClick={this.onLikesClick}>Likes {this.state.likes}</button>
      <button onClick={this.onDislikesClick} >Dislikes {this.state.dislikes}</button>

    </div>
    )
  }
}

export default Card;

