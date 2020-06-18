import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const memesObj = [
	{meme: 'https://preview.redd.it/fpiq8ichbeu41.jpg?width=640&crop=smart&auto=webp&s=5437e65f7913f74a81705c217488afbcff28d869'},
	{meme: 'https://preview.redd.it/9oslun3v8ku41.jpg?width=640&crop=smart&auto=webp&s=4120bddecef61c8616c294e4ac622f6c2327610f'},
	{meme: 'https://preview.redd.it/vg0tdoj5sku41.jpg?width=640&crop=smart&auto=webp&s=51ed3d8290fbd134398e0aac375d72096af34d7a'},
	{meme: 'https://preview.redd.it/f3gp5xby0iu41.jpg?width=640&crop=smart&auto=webp&s=8ac59c1028f0274957d6190be49ef2f4748aab49'},
	{meme: 'https://i.redd.it/874qff7ynju41.jpg'}
]


// Rule Number one Class ____ extends component
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      memesList: memesObj
    };
  }

  // if you see class component, make arrow notation
  helloWorld = () => {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("updated!!");
  }

  componentDidMount() {
    console.log('ready!');
  }

  // Rule Number 2: you have a render()
  render() {
    console.log(this)
    return (
      <div className="App">
        <button onClick={() => this.setState({memesList: [...this.state.memesList, this.state.memesList[this.state.memesList.length -1]]})}>HELLO</button>
        {this.state.memesList.map(item => <img src={item.meme}/>)}
      </div>
    )
  }

}

export default App;
