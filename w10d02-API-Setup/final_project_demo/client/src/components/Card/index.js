import './index.css'

const Card = (props) => {
    const {img, name} = props;
    return (
        <div className="card">
            <img className="card--img" src={img}/>
            <h3> {name}</h3>
        </div>
    )
}

export default Card;