import './App.css';
import NavigationBar from './Components/NavigationBar';
import DemotivationalPoster from './Components/DemotivationalPoster';

function App() {
  // Babel  ------------------> JS(X)  ---------> HTML and JS
  // Webpack  ----------------> puts all packages together and bundles them up
  // snowpack
  // vite 
  // You can build your entire application inside of App.js
  

  // rules of jsx 

  // - (optional) you should return something to render 
  // - one parent of html is required to encapsulate everything you will write

 

  // props
  const demoObjects = [
    {
      title: 'Meme 1',
      info: 'this is a meme',
      img: 'https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg',
    },
    {
      title: 'Meme 2',
      info: 'this is another meme2',
      img: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
    },
    {
      title: 'The freshest Meme',
      info: 'Freshmaker',
      img: 'https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png',
    },
  ]

  const demoPosters = [];

  for (let poster of demoObjects) {
    demoPosters.push(<DemotivationalPoster 
      title={poster.title} 
      info={poster.info} 
      img={poster.img}
    />)
  }

  const demoPosters2 = demoObjects.map( (poster) => {
    return <DemotivationalPoster 
      title={poster.title} 
      info={poster.info} 
      img={poster.img}
    />
  })



  // arguments, parameters
  return (
    <div>
      <NavigationBar/>
      {demoPosters2}
    </div>
  )
}

export default App;

