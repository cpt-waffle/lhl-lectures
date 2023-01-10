import './Profile.css'
import {useState} from 'react';

const Profile = (props) => {
  // event listners 
  // first val of state is a value 
  // second val of state is F()
  // f() -- is there to change the states value
  // ^ it tells react to re-render the component 
  const [num, setNum] = useState(3);

  const clickEvent = () => {
    // num = __ ; THIS IS WRONG

    console.log("Clicked!!!");
    console.log(num);
    setNum(num + 1);
  }
  // passing by reference

  return (<div className='profile'>
    <img className="profile--img" src={props.image}/>
    <h1>{props.name}</h1>
    <h3>{props.title}</h3>
    <button onClick={clickEvent}>{num}</button>
  </div>)
}

export default Profile;