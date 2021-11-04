// 1
import React, { Component } from 'react';
import './card.css'
// class ?
// Blueprints
/// Car -----> Toyota ---> Nissan ---> etc
// Nissan <>

// extends Component (first difference!!)
class Card extends Component {
    constructor(props) {
        super(props);
        //..
        // STATE HERE
        this.state = {
            likes: 25,
            dislikes: 3
        }
    }
    onLikesClick = () => {
        this.setState(prev => {
            return {
                ...prev,
                likes: prev.likes + 1
            }
        })
    }



    onDisikesClick = () => {
        this.setState(prev => {
            return {
                ...prev,
                dislikes: prev.dislikes + 1
            }
        })
    }


    componentDidMount() {
        // axios here 
        console.log("Render Only once!")
        setTimeout(() => {
            console.log("likes ===>,", this.state.likes);
        }, 5000)
    }    
    componentDidUpdate(prevProps, prevState) {
        console.log("Render on every single time");
        if (prevState.likes !== this.state.likes ) {
            console.log("Likes Changed!");
        }
    }


    render() {
        // some logic area abouve
        // return JSX
        /// THIS
        // WHat is this?
        // this is that
        const {img,name,title} = this.props;
        return (
            <>
                <img src={img} className="cat--img" alt="cat-pic"/>
                <h2>{name}</h2>
                <h3>{title}</h3>
                <button onClick={this.onLikesClick}>
                    <h3>Likes {this.state.likes}</h3>
                </button>
                <button onClick={this.onDisikesClick}>
                    <h3>Dislikes {this.state.dislikes}</h3>
                </button>
            </>
        )
    }
}

export default Card;