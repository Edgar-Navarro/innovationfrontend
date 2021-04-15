import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const router = useRouter();

    return ( 
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2x1 font-black">Nombre de la aplicación</p>
            </div>
            <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/">
                        <a className="text-white mb-2 block">
                            Frutas
                       </a>
                    </Link>
                </li>
                <li className={router.pathname === "/verduras" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/verduras">
                        <a className="text-white mb-2 block">
                            Varduras
                       </a>
                    </Link>
                </li> 
                <li className={router.pathname === "/pagar" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/pagar">
                        <a className="text-white mb-2 block">
                            Pagar
                       </a>
                    </Link>
                </li> 
            </nav>

           
        </aside>
     );
}
 
export default Sidebar;