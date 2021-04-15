import Layout from '../componets/Layout';
import {useRouter} from 'next/router';
import React from 'react';
import {gql, useQuery} from '@apollo/client';
import Producto from '../componets/Producto';


const OBTENER_PRODUCTOS = gql`
query obtenerProductosApp($catalogo: String!){
  obtenerProductosApp(catalogo: $catalogo){
     id
    precio
    cantidad
    descripcion
    imagen
    catalogo
  }
}
`;
const Verduras = () => {

    const { loading, error, data } = useQuery(OBTENER_PRODUCTOS, {
        variables: { catalogo: "Verduras" },
    });
    const router = useRouter();

    if (loading) return 'Cargando...';
    const { obtenerProductosApp } = data
    console.log(obtenerProductosApp);



  return(
    <div>
      <Layout>

      <h1 className="text-3xl font-light mb-4">Verduras</h1>
     
      <div className="sm:flex sm:flex-wrap -mx-3">
      {obtenerProductosApp.map(producto =>(
                <Producto
                    key={producto.id}
                    producto={producto}
                />
            ))}
      </div>
      
      </Layout>
    </div>
  )
}

export default Verduras;