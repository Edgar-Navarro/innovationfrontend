import Layout from '../componets/Layout';
import {useRouter} from 'next/router';
import React from 'react';
import {gql, useQuery} from '@apollo/client';
import Carrito from '../componets/Carrito';

const OBTENER_PRODUCTOS = gql`
query {
  listarCarrito{
     id
    precio
    cantidad
    descripcion
    imagen
    catalogo
  }
}
`;


const Index = () => {
    const { loading, error, data } = useQuery(OBTENER_PRODUCTOS);
    const router = useRouter();

    if(loading) return 'Cargando...';
         const {listarCarrito} = data
         console.log(listarCarrito);

  return(
    <div>
      <Layout>

      <h1 className="text-3xl font-light mb-4">Pagar</h1>
      <div className="sm:flex sm:flex-wrap -mx-3">
      {listarCarrito.map(producto =>(
                <Carrito
                    key={producto.id}
                    producto={producto}
                />
            ))}
      </div>

      
      </Layout>
    </div>
  )
}

export default Index;

