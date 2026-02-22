import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagitation from '../components/Pagitation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Pagitaion in React</h1>
      <Pagitation/>
    </>
  )
}

export default App
