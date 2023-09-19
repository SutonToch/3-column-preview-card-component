import Card from './components/Card.jsx'
import Attribution from './components/Attribution.jsx'
// import './css/App.css'
import data from './data.js'

export default function App() {
  
  const cards = data.map(card => {
    return (
      <Card 
        color = {card.color}
        img = {card.img}
        alt = {card.alt}
        title = {card.title}
        description = {card.description}
      />
    )
  })

  return (
    <>
      <main>
        {cards}
      </main>
      <Attribution />
    </>
  )
}
