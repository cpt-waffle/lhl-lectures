import React, {Component} from 'react';
import logo from './logo.svg';
import Meme from './Meme'
import './App.css';

const memesObj = [
	{meme: 'https://preview.redd.it/fpiq8ichbeu41.jpg?width=640&crop=smart&auto=webp&s=5437e65f7913f74a81705c217488afbcff28d869'},
	{meme: 'https://preview.redd.it/9oslun3v8ku41.jpg?width=640&crop=smart&auto=webp&s=4120bddecef61c8616c294e4ac622f6c2327610f'},
	{meme: 'https://preview.redd.it/vg0tdoj5sku41.jpg?width=640&crop=smart&auto=webp&s=51ed3d8290fbd134398e0aac375d72096af34d7a'},
	{meme: 'https://preview.redd.it/f3gp5xby0iu41.jpg?width=640&crop=smart&auto=webp&s=8ac59c1028f0274957d6190be49ef2f4748aab49'},
	{meme: 'https://i.redd.it/874qff7ynju41.jpg'}
]


// 1: ____ extends Component or ( React.Component )
class App extends Component {
  constructor() {
    super();
    this.state = { list: memesObj };
  }
  // must have a render 

  componentDidMount() {
    console.log('loaded!');
  }

  componentWillMount() {
    console.log("WILL MOUNT");
  }


  render() {
    return (
      <div className="App">
        <h1>CLASS MEMES</h1>
        <Meme url={'www.google.ca'}/>
      </div>
    )
  }
}
// export 
export default App;
