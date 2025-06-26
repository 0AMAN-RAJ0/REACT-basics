import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    if (counter < 20) {
      //in usestate it changes the variable in batches as it all have the same thing so only one time updation
      // -> this will update only once
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // if you have to do like this then use the call back inside it
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
      setCounter(counter => counter + 1)
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
