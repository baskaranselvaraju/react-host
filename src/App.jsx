import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color:"red", border:"5px solid green"}}>Welcome to React</h1>
    <p style={{backgroundColor:"cyan"}}>Counter App</p>
    <p>Count : {count}</p>
    <button style={{cursor:"pointer"}} onClick={()=>setCount(count+1)}>Increament</button>
    <button style={{cursor:"pointer"}} onClick={()=>setCount(count-1)}>Decreament</button>
    </>
  )
}

export default App
