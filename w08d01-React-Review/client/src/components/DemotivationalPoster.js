import React from 'react';
import './DemotivationalPoster.css';


const DemotivationalPoster = props => {

  console.log(props);

  const defaultIMG = 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg';
  const defaultTitle = 'Hello World!';
  const defaultCaption = 'this is just an unfunny caption';

  return (
    <div className='demoPoster'>
      {/* <%=  %> */}
      <img className='demoPoster--img' src={props.image ? props.image : defaultIMG}/>
      <h1>{props.title || defaultTitle}</h1>
      <p>{props.caption || defaultCaption}</p>
    </div>
  )
}


export default DemotivationalPoster;