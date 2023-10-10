import './Card.css';
import { useState, useEffect } from 'react';

const Card = ({img, name, title}) => {

  const [likes, setLikes] = useState(1);
  const [dislikes, setDislikes] = useState(1);

  // const {img, name, title} = props;

  const onLikesClick = () => {
    setLikes(prev => prev + 1);
  }

  const onDislikesClick = () => {
    setDislikes(prev => prev + 1);
  }

  // 1 - they run atleast once!
  // useEffect(() => {
  //   console.log("render once, and anytime any re-render happens");
  // })

  useEffect(() => {
    // just after the intial render occured
    console.log("render once, and never again");
    setTimeout(() => {
      console.log(likes);
      setLikes(prev => {
        console.log('prev', prev);
        return prev
      })
    }, 5000)
  }, [])

  // useEffect(() => {
  //   console.log("render once, and whenever likes change");
  // }, [likes])



  return (


    <div className='card'>
      <img className='card--img' src={img}/>
      <h2>{name}</h2>
      <h2>{title}</h2>

      <button onClick={onLikesClick}><h1>Likes {likes}</h1></button>
      <button onClick={onDislikesClick}><h1>Dislikes {dislikes}</h1></button>
    
    </div>
  )
}



export default Card;