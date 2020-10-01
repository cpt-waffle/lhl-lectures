import React from 'react';
import './App.css';
import GeneralForm from './GeneralForm'
import UserForm from './UserForm'



// USE EFFECT
// document.on.ready()


function App() {
  // const [meme, setMeme] = useState([])
  // useEffect(() => {
  //   // Promise.all(axios.get('/api/interviewerrs', '/api/appointments'))
  //   axios.get('http://localhost:8080/memes').then(response => {
  //     console.log(response)
  //     setMeme(response.data);
  //   }) 
  // }, [])

  return (
    <div>
      <h1>Form Stuff here</h1>
      <GeneralForm/>
      <UserForm/>
    </div>
  );
}

export default App;