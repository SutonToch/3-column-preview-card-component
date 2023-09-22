import { useState } from 'react';
import './../css/Card.css'

export default function Card(props) {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

 function handleMouseLeave() {
    setIsHover(false);
  }

  // static value is $clr-very-light-gray from ./../scss/_variables.scss
  const buttonColors = {
    color: isHover ? "hsl(0, 0%, 95%)" : props.color,
    backgroundColor: isHover ? props.color :"hsl(0, 0%, 95%)"
  }

  return (
    <div className="card-container" style={{ backgroundColor: props.color }}>
        <div className="img-container">
            <img src={`./src/assets/${props.img}`} alt={props.alt}/>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button
          style={buttonColors} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >Learn More</button>
    </div>
  )
}
