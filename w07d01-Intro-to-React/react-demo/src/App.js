import logo from './logo.svg';
import './App.css';
// import your component
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  // JSX
  const profile = {
    name: 'Mr Meows',
    img: 'https://i.redd.it/7k24xova0ya11.jpg',
    title: 'Lead Team Designer'
  }

  return (
    <div className="App">
      <Navbar 
        title={'This is our cool navbar!'} 
        usersLoggedIn={12} 
        PI={3.14}
      />
      <Profile
        profile={profile}
      />
    </div>
  );
}

export default App;

// Components

// Props