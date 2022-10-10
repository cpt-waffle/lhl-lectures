import './Meme.css'

const Meme = props => {
  console.log(props);
  return (<div className='meme'>
    
    <img
      className='meme--img' 
      src={props.img}
    />
    <h3>
      {props.title}
    </h3>
  </div>)
}

export const A = (props) => {
  return <h1>{props.children}</h1>
}


export default Meme;