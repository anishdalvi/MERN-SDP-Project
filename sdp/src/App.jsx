import { useState } from 'react'
import NavbarBootstrap from './components/NavbarBootstrap'
import Login from './components/logreg/Login'
import Register from './components/logreg/Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarBootstrap />
      
      <Login />
      
    </>
  )
}

export default App
