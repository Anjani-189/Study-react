import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)

  //let counter = 5

  const addValue = ()=>{
    if(counter<100){
      setCounter(counter+1)
    }
    
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <div>Chai aur react</div>
      <h2>Counter value ; {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />

      <button
        onClick={removeValue}
      >Remove value</button>

      <p>footer : {counter}</p>
    </>
  )
}

export default App
