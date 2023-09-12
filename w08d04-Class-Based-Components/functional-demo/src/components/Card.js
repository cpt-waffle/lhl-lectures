import React, {useState, useEffect} from 'react';
import Title from './Title';
import './Card.css';





const Card = (props) => {
  const [likes, setLikes] = useState(3);
  const [dislikes, setDislikes] = useState(1);

  useEffect(() => {
  //  console.log("RUN FIRST Time and anytime state changes"); 
  })

  useEffect(() => {
    console.log("RUN FIRST Time, and never again..");
    // axios/fetch
    // axios.get('/api/photos').then(res => ... res.data)
    setTimeout(() => {
      setLikes(prev => {
        console.log(prev);
        return prev + 1;
      }); 
    }, 5000)
    // prev <---

  }, [])

  useEffect(() => {
    console.log("RUN FIRST Time, and again when likes changes");
  }, [likes])

  const onLikeClick = () => {
    setLikes(prev => {
      return prev + 1;
    });

    setLikes(prev => {
      return prev + 1;
    }); 

    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 
    setLikes(prev => {
      return prev + 1;
    }); 



  }

  const onDislikeClick = () => {
    setDislikes(dislikes + 1);
  }


  return (
    <article className='card'>
      <img src={props.img} className='card--img'/>
      <h4>{props.name}</h4>
      <Title title={props.title}/>

      <button onClick={onLikeClick}>
        Likes{likes}
        </button>
      <button onClick={onDislikeClick}>
        Dislikes{dislikes}
      </button>
    </article>
  );
}



export default Card;