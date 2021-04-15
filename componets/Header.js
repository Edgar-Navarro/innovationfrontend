import React from 'react';
import {useRouter} from 'next/router';


const Header = () => {

  
const router = useRouter();

    return ( 
        
        <div className="sm:flex sm:justify-end ">
            <p className="mr-5 mb-5 lg:mb-0">Bienvenido</p>
        </div>
     );
}
 
export default Header;