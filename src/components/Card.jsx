import './../css/Card.css'

export default function Card(props) {

  return (
    <div className="card-container" style={{ backgroundColor: props.color }}>
        <div className="img-container">
            <img src={`./src/assets/${props.img}`} alt={props.alt}/>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button href="#" style={{ color: props.color }}>Learn More</button>
    </div>
  )
}
