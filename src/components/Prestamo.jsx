const Prestamo = ({prestamo}) =>{
    const {nombre, editorial, cliente, correo, fecha, condiciones} = prestamo
    
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
                    className="py-2 px-10 bg-blue-700 hover:bg-blue-800 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg">
                    Editar
                </button>

                <button type="button"
                    className="py-2 px-10 bg-red-800 hover:bg-red-900 text-white uppercase font-bold cursor-pointer transition-colors rounded-lg">
                    Eliminar
                </button>
            </div>

        </div>
    );
}

export default Prestamo;
