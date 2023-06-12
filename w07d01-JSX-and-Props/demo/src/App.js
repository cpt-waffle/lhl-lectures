import './App.css';
import NavBar from './Components/NavBar';
import DemotivationalPoster from './Components/DemotivationalPoster';

// JSX -- Javascript and XML
// Component -- a piece of UI

// templates,  nav.ejs   <% include (../)
function App() {
  // AJAX GET ------------> Server ---------------> database
  //   <--------------res ----- <-------------------------

  const  array = [
    {title: 'my title', desc: 'my desc'},
    {title: 'aaa', desc: 'aa'},
    {title: 'bbb', desc: 'bb'},
  ];

  const posters = [];

  for (let obj of array) {
    posters.push(<DemotivationalPoster title={obj.title} desc={obj.desc}/>)
  }

  const posters2 = array.map((obj) => {
    return <DemotivationalPoster title={obj.title} desc={obj.desc}/>
  })


  return (
    <div className="App">
      <NavBar>
        <h2>menu</h2>
        <h2>profile</h2>  
        <h2>logout</h2>
      </NavBar>
      {posters2}
      <DemotivationalPoster 
        title={'correct way'}
        desc={'correct way'}
        img={'https://www.exoprimal.com/assets/images/dinosurvival/dinosaurs_img-triceratops.png'}
      />
      <DemotivationalPoster 
      />
      <DemotivationalPoster 
        title={'demotivational'}
        desc={'such wow, much nostalgia'}
        img={'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Original_Doge_meme.jpg/300px-Original_Doge_meme.jpg'}
      />
    </div>
  );
}

export default App;

