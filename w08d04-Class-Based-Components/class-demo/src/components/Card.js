// 1
import React, { Component } from 'react'
import './card.css'

// 2
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 10,
            dislikes: 2
        }
        // this.handleLikeClick = this.handleLikeClick.bind(this);

    }

    handleLikeClick = () => {
        this.setState(prev => (
            {...prev, likes: prev.likes+1}
        ))
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.likes);
            console.log(this.state.dislikes);
        },4000)
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("render forever!");
        // if (this.state.likes !== prevState.likes) {
        //     console.log("Likes has changed!");
        // }
    }

    // 4
    render() {
        const {img, name} = this.props;
        return (
            <div>
                <img
                    className="cat--img"
                    alt="catface" 
                    src={img}
                />
                <h2>{name}</h2>
                <button onClick={this.handleLikeClick}>
                    Likes {this.state.likes}
                </button>
                <button 
                    onClick={() => 
                        this.setState(prev =>
                        ({...prev, dislikes: prev.dislikes + 1}))}>
                    Dislikes {this.state.dislikes}
                </button>
            </div>
        )
    }

}

// 3
export default Card;