// import react, Component
import React, { Component } from 'react';
import './card.css';
const imgLink = 'https://i.pinimg.com/564x/a7/71/26/a77126ed93bff8d24aaa4aa44c77a9b8.jpg';
// A parent gives everything to the child
// the Child inherits all possible functions from the PARENT!!!
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
            name: 'Mittens',
            age: 4
        }
    }

    onClickLikes = () =>{
        this.setState(prev => ({likes: prev.likes + 1}));
    }
    onClickDisLikes = () =>{
        this.setState(prev => ({dislikes: prev.dislikes + 1}));
    }

    componentDidMount() {
        console.log("rendered once!!!");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('rendered!')
        if (prevState.likes !== this.state.likes) {
            console.log('Likes has Changed');
        }
    }


    render() {
        // you can do some logic before your return
        // just like you do in classes.
        return (
        <div className='card'>
            <img src={imgLink}/>
            <div>
                <h3>{this.props.name}</h3>
                <h5>{this.props.position}</h5>
            </div>
        <button onClick={this.onClickLikes}>Likes {this.state.likes}</button>
        <button onClick={this.onClickDisLikes}>disLikes {this.state.dislikes}</button>
        
        </div>
        )
    }

}


export default Card;