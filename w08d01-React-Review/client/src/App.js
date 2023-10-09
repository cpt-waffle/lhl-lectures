import './App.css';
import Form from './Components/Form';
import PosterList from './Components/PosterList';
import useApplication from './hooks/useApplication';

  // const postersMock = [
  //   {id: 1, img: 'https://i.kym-cdn.com/entries/icons/original/000/030/115/cover4.jpg', title: 'Teams', subtitle: 'share victory, blame defeat on someone else'},
  //   {id: 2, img: 'https://i.ytimg.com/vi/CSHbSe7iW_E/maxresdefault.jpg', title: 'Leadership', subtitle: 'sometimes following blindly is not a good idea'},
  //   {id: 3, img: 'https://media.istockphoto.com/id/157402340/photo/left-behind.jpg?s=612x612&w=0&k=20&c=ttF1xIAwRdL2v0UoL6Y_xdbpSQJzdVIokVdBBrM2I3Q=', title: 'Getting', subtitle: 'sometimes you gotta be creative'},
  // ]


function App() {

  const {posters, addPoster} = useApplication();


  return (
    <div className="App">
      <h1>React Review</h1>
      <PosterList posters={posters}/>
      <Form addPoster={addPoster}/>
    </div>
  );
}

export default App;
