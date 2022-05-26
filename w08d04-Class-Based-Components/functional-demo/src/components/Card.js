import React, {useState, useEffect} from 'react';
import './Card.css';


















const Card = (props) => {
  const [likes, setLikes] = useState(10);
  const [dislikes, setDisLikes] = useState(4);

  useEffect(() => {
    console.log("Everytime!!")
  })

  useEffect(() => {
    console.log("one Time!");
    // Promise.all([axios, axios, axios]).then(res => {
      // setState(...)
    // })
    console.log("One time!");
    // setTimeout(() => {
    //   console.log('likes', likes);
    // }, 5000)
  }, [])

  useEffect(() => {
    console.log('when likes Changes!');
    setTimeout(() => {
      console.log('likes', likes);
    }, 5000)
  }, [likes])

  const onLikesClick = () => {
    setLikes(prev => prev + 1);
  }


  const {img, name, title} = props;
  return (<div className='card'>
    <img 
    className='card--img'
    src={img}/>
    <h3>{name}</h3>
    <h4>{title}</h4>
    <button 
    onClick={onLikesClick}>
      Likes {likes}
    </button>
    <button 
      onClick={() => setDisLikes(prev => prev + 1)
      }>Dislikes {dislikes}
    </button>


  </div>)

}








export default Card;