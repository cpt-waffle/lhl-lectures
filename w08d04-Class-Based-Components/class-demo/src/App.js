import './App.css';
import Card from './Components/Card';
import Title from './Components/Title';

const img = 'https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg'


function App() {
  return (
    <div className="App">
      <h1>Class Demo</h1>
      <Title/>
      <Card
        img={img}
        title={'Senior Nap Engineer'}
        name={'Mr Meows'}
      />
    </div>
  );
}

export default App;
