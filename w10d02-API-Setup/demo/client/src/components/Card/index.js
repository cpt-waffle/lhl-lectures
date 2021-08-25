import './card.css'

const Card = (props) => {
    return <div>
        <img className="card--img" src={props.img}/>
        <h2>{props.name}</h2>
    </div>
}

export default Card;