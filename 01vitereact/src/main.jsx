import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function Myapp(){
  return(
    <div>
      <h1>Hello! I am Aman</h1>
    </div>
  )
}


// -> not work because syntax is not according to react

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // reactElement
)   