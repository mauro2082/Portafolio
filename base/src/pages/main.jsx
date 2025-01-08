import React from 'react';
import im from '../assets/img/sommer.png';
import Button from '../components/button';

export default function Main() {
  return (
    <div>

<div className='flex bg-[#232833] h-[390px]'>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <div>
          <p className='h-1/2 text-8xl font-rubik text-gray-400'>Freelance</p>
        </div>
        <div className='h-1/2 text-sm font-mono text-gray-400 px-10'>
          <p className="mt-7">
          "Soy un desarrollador full-stack con experiencia en 
          creación de aplicaciones web utilizando React, Next.js y Python. Me apasiona 
          construir soluciones web que sean tanto funcionales como visualmente atractivas."
          </p>
          <div className='flex justify-center items-center mt-10'>
             <Button text="Contactame" backgroundColor="#23949D" textColor="#e2e8f0" />
          </div>
         
        </div>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center'>
         <img src={im} alt="sommer" height={350} width={350} />
      </div>

     
    </div>
     {/* SVG con la onda */}
     <div >
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232833" fill-opacity="1" d="M0,64L30,58.7C60,53,120,43,180,48C240,53,300,75,360,112C420,149,480,203,540,208C600,213,660,171,720,128C780,85,840,43,900,64C960,85,1020,171,1080,208C1140,245,1200,235,1260,197.3C1320,160,1380,96,1410,64L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
      </div>
    </div>
    
  );
}
