import {useState, useEffect} from 'react';
import Error from './Error';

/*
¿Qué es un Hook? Un Hook es una función especial que permite “conectarse” a características de React. Por ejemplo, useState es un Hook que te permite añadir el estado de React a un componente de función. Más adelante hablaremos sobre otros Hooks.

¿Cuándo debería usar un Hook? Si creas un componente de función y descubres que necesitas añadirle estado, antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente de función existente

El estado es una variable con la información de lo que está pasando en el sitio.


const[cliente, setCliente] = useState({})

cliente -> Variable que contiene el valor del estado
setCliente -> Es el modificador de la variable del estado
() -> dentro del paréntesis se define el valor inicial, por lo que en este ejemplo empieza cliente como un objeto vacío

Como te puedes dar cuenta, es un destructuring de un arreglo que arroja useState
No debes de modificar la variable cliente directamente, se tiene que usar el modificador

*/

function Formulario({prestamos, setPrestamos, prestamo, setPrestamo}) { //Hacemos un destructuring de los props 

    // Los hooks se deben de escribir antes de funciones.
    //NO se deben de escribir dentro de condicionales ni después de los return

    
    
    const [error, setError] = useState(false);

    

    const generarId = () => {
        const random = Math.random().toString(36).substring(2); //Obtener un texto aleatorio con números y letras con base al argumento de toString. Siempre aparece como 0.XXX, por lo que usamos el substring(2) para eiminar los primeros 2 caracteres
        const fecha = Date.now().toString(36)

        return fecha + random;

    }

    //game register fields
    const [juego , setJuego] = useState({
        "nombre": '',
        "editorial": '',
        "cliente": '',
        "correo": '',
        "fecha": '',
        "condiciones": ''
    });

    
    

    const {nombre, editorial, cliente, correo, fecha, condiciones} = juego;

    const handleChange = e => {
        setJuego({...juego, [e.target.name]:e.target.value}); // El setJuego va a ser xuna copia de la variable juego pero se le cambia el valor al campo que se está sobreescribiendo
    }


    useEffect(() => {//escucha por los cambios que sucedan en las dependencias []
        if(Object.keys(prestamo).length > 0){
            setJuego({
                "nombre": prestamo.nombre,
                "editorial": prestamo.editorial,
                "cliente": prestamo.cliente,
                "correo": prestamo.correo,
                "fecha": prestamo.fecha,
                "condiciones":prestamo.condiciones
            });
        }
    }, [prestamo]); 

    
    //copies game data and changes the target of the onchange
    const handleSubmit = e => {
        e.preventDefault();
        //console.log(juego) //   -------------------------console.log

        
        if( [nombre, editorial, cliente, correo, fecha, condiciones].includes('')){
            setError(true);
        }
        else{
            setError(false)

            if(prestamo.id){
                // Editando un registro
                juego.id = prestamo.id//El id que tenemos se lo ponemos a un nuevo objeto para que cree uno nuevo y actualizado, por lo que el prestamo nos va a quedar desactualizado

                
                const prestamosActualizados = prestamos.map(prestamoState =>  //Prestamo state hace referencia al primer state definido en App, que es el que contiene a toda la lista de los préstamos 
                    prestamoState.id === prestamo.id ? juego : prestamoState // Si tienen el mimo ID, regresa el juego actualizado, si no, déjalo como está
                ) // Ojo: No se ponen las llaves porque si no lo toma como un objeto a todo lo que esté dentro


                setPrestamos(prestamosActualizados) 
                setPrestamo({}) //Regresamos el prestamo a editar a un objeto vacío

                

            }  else {
                // Nuevo registro
                juego.id = generarId(),

                setPrestamos([...prestamos, juego]) //Pasamos al arreglo el arreglo original y le agregamos el nuevo juego. Así podemos pasar un arreglo de objetos a APP
        
            } 
            //Reset Form [después de editar o crear]
            setJuego({
                "nombre": '',
                "editorial": '',
                "cliente": '',
                "correo": '',
                "fecha": '',
                "condiciones": ''
            });
            /*
            try {
                addToDB(patient);
                close();
                resetForm();
                alert.success('Paciente añadido exitosamente');
            } catch (error) {
                alert.error(error.response.data.msg);
            }
            */
                
        }
    }
    
    
        

    /*
    NOTAS TAILWIND
    -- md y lg especifican el tipo de dispositivo en el que va a aplicar esa configuración. md es para medium y lg para large

    -- py  es para padding en y y px para padding en x
        -> CSS Padding is used to create space around an element's content, inside of any defined borders.
    
    -- The htmlFor property sets or returns the value of the for attribute of a label.


    error && -> Sintaxis de js que evalúa únicamente si la variable error es true, en ese caso, regresa lo que se encuentra después de los ampersand
    */

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5"> 
            <h2 className="font-black text-3xl text-center"> Formulario de Préstamo</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade nuevos {''}
                    <span className="font-bold text-blue-700 "> Préstamos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="juego" className="block text-grey-700 font-bold">Juego</label>
                    <input id='juego' type="text" placeholder="Nombre del Juego" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    name='nombre'
                    onChange={handleChange}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="editorial" className="block text-grey-700 font-bold">Editorial</label>
                    <input id='editorial' type="text" placeholder="Nombre de la editorial" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={editorial}
                    name='editorial'
                    onChange={handleChange}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="cliente" className="block text-grey-700 font-bold">Cliente</label>
                    <input id='cliente' type="text" placeholder="Nombre del cliente" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={cliente}
                    name='cliente'
                    onChange={handleChange}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="correo" className="block text-grey-700 font-bold">Email Cliente</label>
                    <input id='correo' type="correo" placeholder="Email de contacto al cliente" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={correo}
                    name='correo'
                    onChange={handleChange}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-grey-700 font-bold">Fecha de Préstamo</label>
                    <input id='fecha' type="date" placeholder="" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    name='fecha'
                    onChange={handleChange}/>
                </div>

                <div className="mb-5">
                    <label htmlFor="condiciones" className="block text-grey-700 font-bold">Condiciones del juego</label>
                    <textarea id='condiciones' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe aquí si el juego tiene algún desperfecto o si está en buenas condiciones"
                    value={condiciones}
                    name='condiciones'
                    onChange={handleChange}/>
                </div>

                
                <input type='submit' className="bg-blue-700 p-3 w-full text-white uppercase font-bold hover:bg-blue-800 cursor-pointer transition-colors rounded-sm" 
                value={prestamo.id ? 'Editar Préstamo' : 'Añadir Préstamo'
                // Si el prestamo tiene un id, entonces significa que se está editando
                }/> 

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                    
                
            </form>
        </div>
    );
}

export default Formulario;