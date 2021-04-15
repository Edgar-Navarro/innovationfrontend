import React, {useState}  from 'react';
import { useMutation, gql } from '@apollo/client';
import Swal from 'sweetalert2';


const ADD_CARRITO = gql`
mutation addCarrito($id: ID!){
  addCarrito(id:$id)
}
`;


const Producto = ({producto}) => {
    const [mensaje, setMensaje] = useState(null);

   console.log(producto);
   const [agregarCarrito] = useMutation(ADD_CARRITO);


    const addCarrito = async (e, id) => {
        e.preventDefault();
        console.log(id);

        try {
            const { data } = await agregarCarrito({
                variables: {
                    id
                }
            });
            Swal.fire(
                'Agregado!',
                'Se agregó al carrito Correctamente',
                'success'
              )
            console.log(data);

        } catch (error) {
            setMensaje(error.message.replace('GraphQL error:', ''));
            setTimeout(()=>{
                setMensaje(null);
            },3000);
        }
    }
    const mostrarMensaje = () =>{
        return(
            <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
                <p>{mensaje}</p>
            </div>
        )
    }

    return ( 
        <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
            {mensaje && mostrarMensaje()}
        <div className="p-3 shadow-md bg-white">
            <h1 className="text-blue-600 text-lg font-bold">{producto.descripcion}</h1>
            <p className="text-gray-700">Cantidad: {producto.cantidad} </p>
            <p className="text-gray-700 font-bold">Precio: $ {producto.precio} </p>
            <button
                    type="button"
                    className="bg-blue-800 hover:bg-blue-700 w-full mt-5 p-2 text-white uppercase font-bold"
                    onClick={ () => addCarrito(event,producto.id)}
                >
                    Añadir al carrito
            </button>
        </div>
    </div>
     );
}
 
export default Producto;
