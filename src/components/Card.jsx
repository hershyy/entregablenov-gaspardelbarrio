import React from 'react'


const Card = (props) => {
    
    return (
        
        <div>
            <h1>Hola {props.nombre}!</h1>
            <h2>Ahora ya sabemos que elegiste la marca {props.marca}</h2>
        </div>
        
)
}
export default Card

// No llegue a realizar la parte del renderizado onSubmit
