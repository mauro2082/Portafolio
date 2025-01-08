
import React from 'react';
import im from '../assets/img/LogoNombre.png';


export default function Header() {
  return (
    <header>
      <nav className='bg-[#232833] h-12 flex items-center'>
        <ul className="w-1/2 flex justify-between px-5 text-gray-400 font font-rubik">
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de</a></li>
          <li><a href="/oferta">Oferta</a></li> {/* Enlace corregido */}
          <li><a href="/contacto">Contacto</a></li>
        </ul>
        <div className='flex items-center  text-gray-400 justify-end w-1/2 px-5'>
          <p className='pr-8'>Mauricio Frelancer</p>
           <img src={im} alt="logo" height={40} width={40}  />
        </div>
      </nav>
     
    </header>
  );
}