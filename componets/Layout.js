import React from 'react';
import Head from 'next/head';
import Sidebar from '../componets/Sidebar';
import Header from '../componets/Header';
import {useRouter} from 'next/router';

const Layout = ({children}) => {
    const router = useRouter();
    return (  
        <>
            <Head>
                <title>Tienda online</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
            </Head>

            <div className="bg-gray-200 min-h-screen">
                <div className="sm:flex min-h-screen">
                    <Sidebar />
                    <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                        <Header />
                        {children}
                    </main>

                </div>
            </div>
        </>

     );
}
 
export default Layout;