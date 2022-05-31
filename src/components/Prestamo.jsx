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

        </div>
    );
}

export default Prestamo;
