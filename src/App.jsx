import { useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPrestamos from './components/ListadoPrestamos'


function App() {
  // En LS no puedes guardar arreglos, como el que se usa para los préstamos, por lo que hay que guardar únicamente strings
  const [prestamos, setPrestamos] = useState(JSON.parse(localStorage.getItem('prestamos')) ?? []); // Si no hay nada en Local Storage entonces asigna un arreglo vacío. Si hay algo, recupéralo
  //Convertimos el string a arreglo con json.parse
  
  const[prestamo, setPrestamo] = useState({}); //Para recabar la información al darle click al botón de edición

  useEffect(() => {
    localStorage.setItem('prestamos', JSON.stringify( prestamos ))
  }, [prestamos])

  const eliminarPrestamo = (id) => {
    const prestamosActualizados = prestamos.filter(prestamo => prestamo.id !== id) //Regresa todos los préstamos que no tengan esa id
    //console.log(prestamosActualizados)
    setPrestamos(prestamosActualizados)
  }

  return(
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
          prestamos={prestamos}
          setPrestamos={setPrestamos} // Agregamos un prop (property) a formulario para poder extraerle información y después pasarla al listado de préstamos
          prestamo ={prestamo}
          setPrestamo={setPrestamo}
        />
        <ListadoPrestamos prestamos={prestamos} 
        setPrestamo={setPrestamo}
        eliminarPrestamo = {eliminarPrestamo}
        />

      </div>
    </div>
  )

  /* APP DEFAULT
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
  */
}

export default App
