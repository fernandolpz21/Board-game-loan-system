import Prestamo from "./Prestamo";


function ListadoPrestamos() {
    // -- Use h-screen to make an element span the entire height of the viewport.
    return ( 
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll"> 

            <h2 className="font-black text-3xl text-center"> Listado de Préstamos</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra todos tus {''}
                    <span className="font-bold text-blue-700 "> Préstamos</span>
                    
            </p>
            <Prestamo />
            <Prestamo />
            <Prestamo />
            <Prestamo />
            <Prestamo />
            <Prestamo />
            <Prestamo />

            
        </div>
     );
}

export default ListadoPrestamos;