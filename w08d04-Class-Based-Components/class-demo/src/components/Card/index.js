// import react AND Component Class
import React, {Component} from 'react';
import './card.css'
// create class
class Card extends Component{
    constructor(props) {
        console.log('first!');
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0
        }
        // this.onLikeClick = this.onLikeClick.bind(this);
    }

    onLikeClick = () => {
        console.log(this);
        this.setState({likes: this.state.likes + 1});
    }

    componentDidMount() {
        console.log('render-once!');
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('re-render!');
        console.log(prevState);
        console.log(prevProps);
    }



    render() {
        console.log(this.state);
        return <div>
            <h1>{this.props.name}</h1>
            <img className="img" src="https://i.kym-cdn.com/photos/images/facebook/001/394/314/c62.jpg"/>
            <h2>Likes Number {this.state.likes}</h2>
            <h2>Dislikes Number {this.state.dislikes}</h2>

            <button onClick={this.onLikeClick}>Click Me!</button>
            
        </div>
    }
}

// export class
export default Card;