// import './../css/Card.css'

// color, img, title, description

export default function Card(props) {

  return (
    <div style={{ backgroundColor: props.color }}>
        <div>
            <img src={`./src/assets/${props.img}`} alt={props.alt}/>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button href="#" style={{ color: props.color }}>Learn More</button>
    </div>
  )
}
