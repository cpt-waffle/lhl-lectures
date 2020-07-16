import React, {Component} from 'react';
import './App.css';
import Meme from './components/Meme';

const memesObj = [
	{id:1 ,meme: 'https://preview.redd.it/fpiq8ichbeu41.jpg?width=640&crop=smart&auto=webp&s=5437e65f7913f74a81705c217488afbcff28d869'},
	{id:2 , meme: 'https://preview.redd.it/9oslun3v8ku41.jpg?width=640&crop=smart&auto=webp&s=4120bddecef61c8616c294e4ac622f6c2327610f'},
	{id:3 , meme: 'https://preview.redd.it/vg0tdoj5sku41.jpg?width=640&crop=smart&auto=webp&s=51ed3d8290fbd134398e0aac375d72096af34d7a'},
	{id:4 , meme: 'https://preview.redd.it/f3gp5xby0iu41.jpg?width=640&crop=smart&auto=webp&s=8ac59c1028f0274957d6190be49ef2f4748aab49'},
	{id:5 , meme: 'https://i.redd.it/874qff7ynju41.jpg'}
]

class App extends Component {
  constructor() {
    super();
    this.state ={ 
      memes: memesObj
    }
  }

  logs = () => {
    console.log("Here are some logs");
    console.log(this);
  }

  render() {
   return ( 
     <div className="App">
       <h1>Class Memes</h1>
       <button onClick={this.logs}>PRINT ME LOGS</button>
       {this.state.memes.map(meme => <Meme key={meme.id} {...meme}/>)}
     </div>
   );
  }
}

export default App;
