import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {

const handleSubmit = e=>{
    e.preventDefault()
    if(nombre.length < 3 || marca.length < 6){
      alert("Por favor chequea que la información sea correcta")
    }
}

const [nombre, setNombre]=useState("")
const [marca, setMarca]=useState("")
const [isValid, setIsValid]=useState(false)





  return (
    <>
    <div className='App'>
      <h1>¿Qué auto querés utilizar?</h1>
      <form onSubmit={handleSubmit}>

      <label htmlFor="">Nombre: </label>
      <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange= {e=>setNombre(e.target.value)}/>

      <br />
      <br />

      <label htmlFor="">Marca: </label>
      <input type="text" placeholder='Ingrese la marca' value={marca} onChange= {e=>setMarca(e.target.value)}/>

      <br />
      <br />
      
      <input type="submit" />

      </form>

      <br />
      
    </div>
    <hr />
    <Card nombre={nombre} marca={marca}/>
    </>
  )
}

export default App
