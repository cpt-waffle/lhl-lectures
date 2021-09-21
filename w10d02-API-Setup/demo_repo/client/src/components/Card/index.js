import './card.css'


function Card(props) {
    return <div>
        <img src={props.img} className="card--img"/>
        <h2>{props.name}</h2>
    </div>
}


export default Card;