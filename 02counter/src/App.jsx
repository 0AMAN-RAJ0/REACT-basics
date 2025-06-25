import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    // counter += 1
    
  }
  const decValue = () => {
    // counter -= 1
    if (counter > 0) {
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>add Value</button>
      <br/>
      <button onClick={decValue}>dec Value</button>
    </>
  )
}

export default App
