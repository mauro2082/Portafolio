
import React from 'react';



export default function Header() {
  return (
    <header>
      <nav className='bg-[#232833] h-12 flex items-center xl:h-14 2xl:h-16'>
        <ul className="w-1/2 flex justify-between px-5 text-gray-400 font font-rubik text-base xl:text-2xl 2xl:text-3xl  ">
          <li><a className="hover:text-gray-200 underline underline-offset-[-2px] hover:underline-offset-4  hover:decoration-[#23949D]" href="/">Inicio</a></li>
          <li><a className="hover:text-gray-200 underline underline-offset-[-2px] hover:underline-offset-4  hover:decoration-[#23949D]" href="/acerca">Acerca de</a></li>
          <li><a className="hover:text-gray-200 underline underline-offset-[-9px] hover:underline-offset-4  hover:decoration-[#23949D]" href="/servicios">Servicios</a></li> {/* Enlace corregido */}
          <li><a className="hover:text-gray-200 underline underline-offset-[-2px] hover:underline-offset-4  hover:decoration-[#23949D]" href="/contacto">Contacto</a></li>
        </ul>
        <div className='flex items-center  text-gray-400 justify-end w-1/2 px-5'>
          <p className='pr-8 text-sm xl:text-lg 2xl:text-xl'>Mauricio Ospina</p>
          <p className="text-2xl xl:text-3xl 2xl:text-4xl font-rubik">M</p>
        </div>
      </nav>
     
    </header>
  );
}