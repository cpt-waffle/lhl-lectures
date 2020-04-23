import React, {Component} from 'react';
import './App.css';
import Meme from './Meme';

const memesObj = [
	{meme: 'https://preview.redd.it/fpiq8ichbeu41.jpg?width=640&crop=smart&auto=webp&s=5437e65f7913f74a81705c217488afbcff28d869'},
	{meme: 'https://preview.redd.it/9oslun3v8ku41.jpg?width=640&crop=smart&auto=webp&s=4120bddecef61c8616c294e4ac622f6c2327610f'},
	{meme: 'https://preview.redd.it/vg0tdoj5sku41.jpg?width=640&crop=smart&auto=webp&s=51ed3d8290fbd134398e0aac375d72096af34d7a'},
	{meme: 'https://preview.redd.it/f3gp5xby0iu41.jpg?width=640&crop=smart&auto=webp&s=8ac59c1028f0274957d6190be49ef2f4748aab49'},
	{meme: 'https://i.redd.it/874qff7ynju41.jpg'}
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 0, memesList: memesObj, show: true};
    // this.handleNum = this.handleNum.bind(this);
  }

  handleNum = () => {
    this.setState({ num: this.state.num + 1});
  }
  componentDidMount() {
    console.log("MOUNTED!!");
    // The component is mounted - fetch the data from the server
    
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component updated???')
    // The component is updated - update the values
  }

  componentWillUnmount() {
    console.log("TEST")
    // console.log("COMPONENT WILL MOUNT SOON!")
    // The component is about to be unmounted - clean up
  }


  render() {
    return (
      <div className="App">
        <h1>Class Based</h1>
        <h2>our state is: {this.state.num}</h2>
        {this.state.memesList.map( meme =><Meme url={meme.meme}/>)}
       
        <button onClick={this.handleNum}> ADD ME</button>
      </div>
    )
  }
}

export default App;
