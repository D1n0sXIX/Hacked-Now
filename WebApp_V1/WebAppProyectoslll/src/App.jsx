import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <Titular />
      <Explicacion />
      <Recursos />
      <footer><Contacto /></footer>
    </>
  )
}

export default App
