import './App.css';
import axios from 'axios';
import Card from './Card'
import { useEffect, useState } from 'react';
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// How do I get data from an API to my client?
// axios!

function App() {

  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3000/cats').then(res => {
      setCats(res.data);
    })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log(res);
      setDogs(res.data);
    })
  }, []);

  return (
    <div>
      <Navbar style={{backgroundColor: 'red'}} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="App">
      {
        cats.map(cat => <Card key={cat.id} name={cat.name} image={cat.img}/>)
      }

      {
        dogs.map(cat => <Card key={cat.id} name={cat.name} image={cat.url}/>)
      }
    </div>
      <Button variant="primary">Primary</Button>
      </div>
  );
}

export default App;
