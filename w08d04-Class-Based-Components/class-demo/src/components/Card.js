// import react from react
import React, { Component } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            arr: []
        }
        // this.onLikeClick = this.onLikeClick.bind(this);
    }

    onLikeClick = () => {
         console.log("LINE 16: ", this);
        this.setState(prev => ({likes: prev.likes + 1}));
    }

    componentDidMount() {
        console.log("Rendered once!");
        // get data here, and set it into state
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('something has changed!');
        console.log(prevState);
        console.log(this.state);
        if (prevState.likes !== this.state.likes) {
            console.log("likes has changed!");
        }
    }


    // Render returns JSX and is the method that runs
    // that outputs JSX to the DOM to be rendered/painted
    render() {
        console.log("THIS IS THE ENTIRE CLASS in ONE VARIABLE")
        console.log(this);
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>
                    LIKES {this.state.likes}
                    <button
                     onClick={this.onLikeClick}
                    >
                        +1
                    </button>
                </h3>
                <h3>
                    DISLIKES {this.state.dislikes}
                    <button
                     onClick={() => this.setState(prev => ({dislikes: prev.dislikes + 1}))}
                    >
                        +1
                    </button>
                </h3>
            </div>
        )
    }
}

// export default class
export default Card;