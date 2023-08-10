import { useState } from 'react'
import './App.css'
import Card  from "./Card.jsx";
import CollapsibleExample from "./Navbar.jsx";
import UncontrolledExample from "./Hero.jsx";
import GridComplexExample from "./Form.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CollapsibleExample />
    <UncontrolledExample />
      <Card />
      <GridComplexExample />
    </>
  )
}

export default App
