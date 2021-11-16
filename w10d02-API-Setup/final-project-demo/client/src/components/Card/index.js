
import './style.css'

const Card = (props) => {
    return(
    <div>
        <h2>{props.name}</h2>
        <img className="cat--img" src={props.image}/>
    </div>
    );
}


export default Card;