const Prestamo = ({prestamo, setPrestamo, eliminarPrestamo}) =>{
    const {nombre, editorial, cliente, correo, fecha, condiciones, id} = prestamo
    // es importante que el setPaciente en el onClick sea una arrow function porque si no va a mandar llamar a la función en cuanto apareza un nuevo préstamo

    const handleEliminar = () => {
        const respuesta = confirm('Estás a punto de eliminar un préstamo. ¿Deseas continuar?') // El confirm es como una alerta pero con 2 opciones en lugar de una

        if(respuesta){
            eliminarPrestamo(id)
        }
    }
    
    return(
        <div className="mx-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700"> Nombre del Juego: {''}
                <span>{nombre}</span>                
            </p>

            <p className="font-bold mb-3 text-gray-700"> Editorial: {''}
                <span>{editorial}</span>                
            </p>

            <p className="font-bold mb-3 text-gray-700"> Cliente: {''}
                <span>{cliente}</span>                
            </p>

            <p className="font-bold mb-3 text-gray-700"> Correo: {''}
                <span>{correo}</span>                
            </p>

            <p className="font-bold mb-3 text-gray-700"> Fecha de Préstamo: {''}
                <span>{fecha}</span>                
            </p>

            <p className="font-bold mb-3 text-gray-700"> Condiciones: {''}
                <span>{condiciones}</span>                
            </p>

            <div className="flex justify-between mt-10">
                <button type="button"
                    className="py-2 px-10 bg-blue-700 hover:bg-blue-800 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg"
                    onClick={() =>setPrestamo(prestamo)}> 
                    Editar
                </button>

                <button type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg"
                    onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>

        </div>
    );
}

export default Prestamo;
