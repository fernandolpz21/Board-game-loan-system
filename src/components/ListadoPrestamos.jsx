import Prestamo from "./Prestamo";


function ListadoPrestamos({prestamos}) {
    // -- Use h-screen to make an element span the entire height of the viewport.
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"> 

            <h2 className="font-black text-3xl text-center"> Listado de Préstamos</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra todos tus {''}
                    <span className="font-bold text-blue-700 "> Préstamos</span>
            </p>

            {prestamos.map(element /*, index*/ => (
                <Prestamo 
                    //key = {index} //Siempre que usamos .map es importante poner un prop llamado key para poder identificar a cada elemento con un índice único. El problema es que esto no es una buena práctica de react porque el índice es mutable ya que puedes modificar el arreglo y por ende modificar el index
                    key = {element.id}
                    prestamo={element}
                />
            ))}
            

            
        </div>
     );
}

export default ListadoPrestamos;