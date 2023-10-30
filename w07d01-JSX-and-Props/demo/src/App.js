import './App.css';
// const Navbar = require('./Components/Navbar');
import Navbar from './Components/Navbar';
import DemotivationalPoster from './Components/DemotivationalPoster';


 // props
 const demoObjects = [
  {
    id: 1,
    title: 'Meme 1',
    info: 'this is a meme',
    img: 'https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg',
  },
  {
    id: 2,
    title: 'Meme 2',
    info: 'this is another meme2',
    img: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
  },
  {
    id: 3,
    title: 'The freshest Meme',
    info: 'Freshmaker',
    img: 'https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png',
  },
]

// main file
function App() {

  const array = [];

  // for loops are not perfered in react at all :(
  // forEach, map, reduce, filter, etc
  // for (let poster of demoObjects) {
  //   array.push(
  //   <DemotivationalPoster
  //     img={poster.img}
  //     title={poster.title}
  //     caption={poster.info} 
  //   />
  //   )
  // }

  const array2 = demoObjects.map((poster) => {
    return <DemotivationalPoster 
      img={poster.img}
      title={poster.title}
      caption={poster.info}
      key={poster.id}
    />
  });



  return (
    <div className="App">
      <Navbar/>
      {array2}
      {/* <DemotivationalPoster 
        title={'Realization'}
        caption={'confusion at its finest!'}
        img={'https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0'}
      />
      <DemotivationalPoster/> */}
    </div>
  );
}

export default App;

// compiles all of this
// back into
// 3 files
// HTML
// JS
// CSS