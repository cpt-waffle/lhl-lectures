import './Meme.css';

const Meme = props => {

  return (<div className='meme'>
    <img className='meme--img' src={props.img} alt="meme"/>
    <h3>{props.title}</h3>
  </div>);
}

export default Meme;