import React from 'react';

const Producto = ({producto}) => {
   console.log(producto);



    return ( 
        <div className="sm:w-1/2 lg:w-1/3 px-2 mb-4">
        <div className="p-3 shadow-md bg-white">
            <h1 className="text-blue-600 text-lg font-bold">{producto.descripcion}</h1>
            <p className="text-gray-700">Cantidad: {producto.cantidad} </p>
            <p className="text-gray-700 font-bold">Precio: $ {producto.precio} </p>
        </div>
    </div>
     );
}
 
export default Producto;
