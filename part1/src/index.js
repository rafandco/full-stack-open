import React from 'react'
import ReactDOM from 'react-dom' //react-dom es una librería que permite renderizar componentes HTML


//Componente App. Se declaran como una función pero en Mayúsculas
/*const App = () => ( 
  //En esta componente se usa JSX aunque parezca HTML,se puede transliterar en https://babeljs.io/
  <div>
    <p>Hello world</p> 
  </div>
)*/

//En la definición de la componente anterior se realiza de forma abreviada. La forma completa es:
/*
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
*/

const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}


//Vemos como renderizamos el componente App dentro de un div con id 'root' en index.html
ReactDOM.render(
  <App />, //Indicamos lo que queremos renderizar
  document.getElementById('root')) //Indicamos donde lo queremos renderizar