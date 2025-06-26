import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myDetails = {
    age : 19,
    isLoggedIn : true,
    followers : 2000
  }

  let newArr = [1,2,3,4,45,5]
  let newArr2 = [1,2,3,4,45,5, 10292, 19333]

  return (
    <>
      <div className="flex-col flex justify-center items-center h-screen">

      <h1 className="bg-blue-800 text-amber-50 p-4 rounded-4xl text-center"> hello ! i am aman</h1>

        <Card username="aman raj" details={myDetails} myarr={newArr} occupation='SDE-2'/>
        <Card username="harshit raj" details={myDetails} myarr={newArr2} occupation='SDE'/>

      </div>

      
    </>
  )
}

export default App
