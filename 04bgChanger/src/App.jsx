
import { useState } from 'react'
import './App.css'
import Colors from './components/Colors'

function App() {
  const [color, setColor] = useState("#202020")

  return (
    <>
      <div className='flex flex-col items-center h-screen' style={{backgroundColor:color}}>
        <div className='text-white font-bold'>Click to Change background Color</div>
        <Colors setColor={setColor}></Colors>
      </div>
    </>
  )
}

export default App
