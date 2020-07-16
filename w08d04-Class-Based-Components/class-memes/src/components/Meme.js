// Step 1: 
// Import REACT!!!
import React, { Component } from 'react';

// Step 2: Class ___ extends Component
class Meme extends Component {
    constructor(props) {
        console.log(props)
        super(props); // calls the parent component constructor  
        this.state = {
            likes: 0,
            disLikes: 0
        }
    }

    componentDidMount() {
        console.log("render once!");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState);
        console.log(this.state);
        console.log("rendered!");
        if (prevState.likes !== this.state.likes) {
            console.log("Likes has changed!");
        }
    }


    // Step 3: needs a render method
    render() {
        return (
            <div>
                <img src={this.props.meme} />
                <button
                    onClick={() => this.setState({likes: this.state.likes + 1})}
                >
                    Likes{this.state.likes}
                </button>
                <button
                    onClick={() => this.setState({disLikes: this.state.disLikes + 1})}
                >
                    Dislikes{this.state.disLikes}
                </button>
            </div>
        )
    }
}
// Step 4: Export default the class 
export default Meme;