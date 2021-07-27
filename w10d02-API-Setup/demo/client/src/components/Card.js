import './card.css'

const Card = props => {
    return (<div className="card">
        <img className="card--img"src={props.url}/>
        <h2>{props.name}</h2>
    </div>)
}

export default Card;