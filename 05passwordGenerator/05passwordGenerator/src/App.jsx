
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState()

  // useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  },[password])

  // detects changes and recreate the same function
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbers){
      str += "0123456789"
    }

    if(characters){
      str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~"
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random()*(str.length))
      pass += str[index];
    }

    setPassword(pass)

  }, [length, numbers, characters, setPassword])

  // once it detects changes in their dependencies then it executes the function
  // it also runs first time when page loads
  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, characters, passwordGenerator])

  return (
    <>
      <div className='bg-black text-white text-center text-4xl'>
        Password Generator
      </div>

      <div className='bg-green-500 text-white text-center max-w-md px-4 py-4 mx-auto my-8 rounded-lg shadow-xl'>
        <div className='flex rounded-lg shadow mb-4 bg-amber-300 overflow-hidden justify-between'>
          <input 
          type="text" 
          className='outline-none w-full py-1 px-3'
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
         />
         <button
         className='outline-none shrink-0 bg-blue-700 font-bold p-1 rounded-r-lg cursor-pointer'
         onClick={copyPasswordToClipboard}>
          Copy
         </button>
        </div>

        <div className='flex gap-x-2 text-sm'>
          <div className='flex gap-x-1'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />
            <label>Length : {length}</label>
          </div>

          <div className='flex gap-x-1'>
            <input 
            type="checkbox"
            id='numberInput'
            defaultChecked={numbers}
            className='cursor-pointer'
            onChange={(e) => {
              setNumbers((prev) => !prev)
            }}
            />
            <label>Numbers</label>
          </div>

          <div className='flex gap-x-1'>
            <input 
            type="checkbox"
            id='numberInput'
            defaultChecked={characters}
            className='cursor-pointer'
            onChange={(e) => {
              setCharacters((prev) => !prev)
            }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
