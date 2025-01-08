
import React from 'react';



export default function Header() {
  return (
    <header>
      <nav className='bg-[#232833] h-12 flex items-center'>
        <ul className="w-1/2 flex justify-between px-5 text-gray-400 font font-rubik ">
          <li><a className="hover:text-gray-200" href="/">Inicio</a></li>
          <li><a className="hover:text-gray-200" href="/acerca">Acerca de</a></li>
          <li><a className="hover:text-gray-200" href="/oferta">Oferta</a></li> {/* Enlace corregido */}
          <li><a className="hover:text-gray-200" href="/contacto">Contacto</a></li>
        </ul>
        <div className='flex items-center  text-gray-400 justify-end w-1/2 px-5'>
          <p className='pr-8'>Mauricio Frelancer</p>
          <p className="text-3xl font-rubik">M</p>
        </div>
      </nav>
     
    </header>
  );
}