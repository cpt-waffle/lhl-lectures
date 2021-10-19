import './card.css'

function Card(props) {
    return (
        <div className="card">
            <h2>Name: {props.name}</h2>
            <img className="card--img" src={props.image}/>
        </div>
    )
}

export default Card;